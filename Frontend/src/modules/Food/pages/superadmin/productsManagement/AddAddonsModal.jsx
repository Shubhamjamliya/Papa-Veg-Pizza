import React, { useState, useEffect } from "react";
import { X, CloudUpload, ChevronDown, ArrowRight, ArrowLeft, Utensils, Leaf, Image as ImageIcon, Lightbulb, Search, Activity, AlertTriangle, Banknote, Receipt, Plus, Info, SlidersHorizontal, Smartphone, Monitor, Store, Square, CheckSquare, MonitorSmartphone, CheckCircle2, ShoppingBasket, Link, Globe, Loader2 } from "lucide-react";

export default function AddAddonsModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [addonName, setAddonName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isInventoryTracked, setIsInventoryTracked] = useState(true);
  const [isMandatory, setIsMandatory] = useState(false);
  const [platforms, setPlatforms] = useState({ mobile: true, web: true, kiosk: true });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([1, 3, 4]); // default selected from template
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (isOpen) {
      setAddonName("");
      setIsActive(true);
    }
  }, [isOpen]);

  const allProducts = [
    { id: 1, name: "Margherita Pizza", cat: "Pizzas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGinoQDR8bGAXZOrK-lCEj53AZV7Y6SsF7YgRdWYV-A8NmMriecQCGN7Bkki4mk8jvxoAApQZXw49mmN6neZjRo1ylwxzzaTwDG8ziThOO9R2yS1JZyvmWQ0aEmsSe-nF4SpKrAQZp6kJDbSCR541xJhbbN7CcSPo6zeh0rNO4nfZmUgLQhJnS4zgbKyp5HIsXjZ3ks4SJfBgiwutKCDyYXTwA9WLJZSm4QJcN4T3HvEs1tAMhz80KTjjcHbe40gzvuPxmw4BMMA" },
    { id: 2, name: "Pepperoni Feast", cat: "Pizzas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHUHD7HjEDDB7OCvyswb_P4yjIXVg9q_ydpJ6OHcyl6fEC_8sLGvrAE2NIcdxrhpxtaMtW8Rv8Nsgk6S1nclNP7oqVAq6KoH6xOSOEPg4QyJaSL6zGIgC7-lYSflgmFTL3r9vIQhdMErZ3j8w_XnpDWPlHcyoyIyciH3PZroYg5RAdr0FrtE7TvVPb7S1qOehPF-4rIh3aABXBUnZj6XozjmRBanb4qc0qySEdVFpAn9Q4EEXZb-380xJ41f9sZ9lFSfaB-nV_S9I" },
    { id: 3, name: "Crispy Wedges", cat: "Sides", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbulfu3NMajN2GO8eI8u7Km4pyDVWI1E9rnLtKM5i5uzqal52_c0HpI97vXZBCXzubKoqoiHVTza9AfBQNgWIWB4XeYOK0CPdRGgXno0DU3GokIF5ZxZN40hojaU8whSni8XCu8oUKqkgCHsDxeIYkwt8IFhE3U7ioNc47KxKPYflG7y5m6uJY3O3t5eXDN8uXXwWsuh-1NT3G2fSz-kQj2qRjE5wVASGG5jvKM0iQZE_S2KdwJZFdXd_Z8rgAM8EjCGJvuoo8WxY" },
    { id: 4, name: "Classic Cola 500ml", cat: "Beverages", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJYZpxeY-WdE_kZ_mdJz2bFijS9E7xaZgq-YdW1qMq0Y8jTYiwbRjalklxc9B-MS7UYEefE842v7H0FRf_PBFqgh6ObqStKzpS1E1NvrexajV7TJ6fugnT5hkEk0_gTGW3DRx8cgg1H1Vixe1I7KsvCTaU-oRW4RSeukh4nBncJZhhMARWCTMhomuPZbaEolV3UxyKO9iVZVu3ZOZoUq4H2O_F2YopbLZgNXg9Zs1qatziLFP-RnaVZP_FYgEs_iMC3GGe3YLphkg" },
    { id: 5, name: "Garden Special", cat: "Pizzas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqyRCMJnbrCoiipVfviB-hZpBE3wAy_BQFCMV9q-Ier1d-jFQdzIrDA4Ry-DrkapXF4HoB7NZLPyg6wlDaW_OeIkvpunkwj1-DPipuLXS9qpM4xCkGjAnuihLyV12GIPlC0ie6OmpgoEsCpqGyXa7pbQDxjxIV95SGK0JDl20_Yck5eaOhSboD2hiw2M5AguaowUkiulvkCNgdSsdysCIHMmJCi68EOLBIVTIAyrOvCItCTYcQ1RyeUHd0v2h1Gk40hdECHUsXfZg" },
    { id: 6, name: "Choco Lava Cake", cat: "Desserts", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7QsSDT5swsGzVrYCT7us4ReAemlS6tX4XpldzrApdWwWMsQpgWk-5_2DNP-ZSo8cmPMQHNEsG9Q7cMc0-U3_iKZQxFPI8axbvpzuD1GxA9lxxlh8Ud1wsxHNwSfpqGF9syDuRBSIubLmk-8o2DJZA5MxwPdSl3rsN0slJz7TD36X2KkLG41y5qiMQNrAnvSGJofkkbImbOyXaP3_ZgtvLciAQF5q8QL_-rP2V9LHN9e25Vr47GN6qg9WnlX6FSxOvgrmAkrk8eEw" },
  ];

  const filteredProducts = allProducts.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || prod.cat === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleProduct = (id) => {
    setSelectedProducts(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedProducts([1, 2, 3, 4, 5, 6]);
    } else {
      setSelectedProducts([]);
    }
  };

  const handlePublish = () => {
    if (!termsAccepted) return;
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      alert('Add-on published successfully!');
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      {/* Modal Container */}
      <div className="w-full max-w-4xl flex flex-col xl:flex-row items-stretch justify-center gap-4 animate-in fade-in zoom-in duration-300 min-h-0">
        
        {/* Main Wizard Card */}
        <div className="w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
          {/* Wizard Header & Progress */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Add New Add-on</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Configure custom toppings and extra sides.</p>
              </div>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 p-1.5 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Step Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold mb-1.5">
                  <span className="text-[var(--primary)] uppercase tracking-wider">
                    {currentStep === 1 && "Step 1: Basic Details"}
                    {currentStep === 2 && "Step 2: Pricing & Tax"}
                    {currentStep === 3 && "Step 3: Inventory Linking"}
                    {currentStep === 4 && "Step 4: Selection Rules"}
                    {currentStep === 5 && "Step 5: Product Assignment"}
                    {currentStep === 6 && "Step 6: Review & Finalize"}
                    {currentStep > 6 && `Step ${currentStep}`}
                  </span>
                  <span className="text-zinc-500">Step {currentStep} of 6</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[var(--primary)] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wizard Form Body */}
          <form className="flex flex-col flex-1 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              
              {/* STEP 1: Basic Details */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                  
                  {/* Left Column: Details */}
                  <div className="space-y-3">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1" htmlFor="addon-name">Add-on Name</label>
                      <input 
                        id="addon-name" 
                        type="text" 
                        value={addonName}
                        onChange={(e) => setAddonName(e.target.value)}
                        className="w-full h-9 border border-zinc-300 dark:border-zinc-700 px-3 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                        placeholder="e.g. Spicy Jalapenos" 
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1" htmlFor="addon-type">Type</label>
                      <div className="relative">
                        <select 
                          id="addon-type"
                          className="w-full h-9 appearance-none border border-zinc-300 dark:border-zinc-700 px-3 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all cursor-pointer"
                        >
                          <option>Topping</option>
                          <option>Add-on</option>
                          <option>Dip</option>
                          <option>Extra Ingredient</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={14} />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <div>
                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Active Status</p>
                        <p className="text-[10px] text-zinc-500 mt-0">Availability on menu</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={isActive}
                          onChange={(e) => setIsActive(e.target.checked)}
                        />
                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                      </label>
                    </div>
                  </div>

                  {/* Right Column: Image Upload */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1 block">Image Upload</label>
                    <div className="group relative border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all cursor-pointer min-h-[140px] h-full">
                      <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                        <CloudUpload size={20} />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Upload Topping Image</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">PNG, JPG up to 5MB</p>
                      </div>
                      <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                    </div>
                  </div>

                  {/* Description Field (Full Width) */}
                  <div className="col-span-1 md:col-span-2 flex flex-col">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1" htmlFor="description">Description</label>
                    <textarea 
                      id="description" 
                      rows="2"
                      className="w-full border border-zinc-300 dark:border-zinc-700 p-2.5 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all resize-none" 
                      placeholder="Describe the topping for the customer menu..." 
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 2: Pricing & Tax */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Pricing & Tax</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Set the base price and tax configuration for this add-on.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 space-y-4">
                      
                      {/* Base Pricing Section */}
                      <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3 text-[var(--primary)]">
                          <Banknote size={18} />
                          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Base Pricing</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Currency</label>
                            <select className="w-full h-9 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-xs text-zinc-900 dark:text-zinc-100">
                              <option>USD - United States Dollar</option>
                              <option>EUR - Euro</option>
                              <option>GBP - British Pound</option>
                              <option>INR - Indian Rupee</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Price per Unit</label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">$</span>
                              <input 
                                className="w-full h-9 pl-7 pr-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-xs font-tabular-nums text-zinc-900 dark:text-zinc-100" 
                                placeholder="0.00" 
                                step="0.01" 
                                type="number" 
                                defaultValue="1.50"
                              />
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Tax Configuration */}
                      <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3 text-[var(--primary)]">
                          <Receipt size={18} />
                          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Tax Configuration</h2>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Tax Category</label>
                            <select className="w-full h-9 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-xs text-zinc-900 dark:text-zinc-100">
                              <option>Standard VAT (20%)</option>
                              <option>Reduced Rate (5%)</option>
                              <option>Zero Rated (0%)</option>
                              <option>Exempt</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between py-1">
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Price includes Tax</span>
                              <span className="text-[10px] text-zinc-500">Tax is calculated within the base price</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                            </label>
                          </div>
                        </div>
                      </section>

                      {/* Pricing Strategy Info Card */}
                      <section className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border-l-4 border-[var(--primary)] shadow-sm border border-zinc-200 dark:border-zinc-800 border-l-[var(--primary)]">
                        <div className="flex gap-3">
                          <Lightbulb className="text-[var(--primary)] shrink-0" size={20} />
                          <div>
                            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Pricing Strategy</h3>
                            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              Add-on pricing directly increments the base product cost. Ensure your 'Price per Unit' covers the ingredient overhead plus a minimum 35% margin for sustainable profitability.
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Right Column: Preview Widget */}
                    <div className="lg:col-span-1">
                      <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm sticky top-0">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Customer App Preview</h2>
                          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-full font-bold">LIVE PREVIEW</span>
                        </div>
                        <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                          {/* Mobile Preview Component */}
                          <div className="w-full max-w-[200px] bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800">
                            <div className="h-24 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                              <img 
                                alt="Preview image" 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc8U2LofipGReYOUUP-EN9bVNyOhYQHIT-KDvNukam6OXnnwte_BJyvXy6vSl50cNostLkAllq5lEmsu7L9AJBIMYPaFuBDks73-e6Lb9Wh46B-Nr4rR3knehuTV9o6N_CKERQXqr54SmQrmmkSWPk3hUicB_b6ziCQWAOOoo4vYhWUxi_VGFyCnsJ3oq1djP_i8aVMwxnpDMs21TxmpGrH97tOapcVkMuDyS-aC3ura-elEaP64vINv8godhXVxNEMNnLx1276AM"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div className="absolute bottom-3 left-3 text-white">
                                <p className="text-[9px] font-bold opacity-80 uppercase">Add-on</p>
                                <p className="text-xs font-bold">Extra Mozzarella</p>
                              </div>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-zinc-400">PRICE</span>
                                <span className="text-xs font-bold text-[var(--primary)]">$1.50</span>
                              </div>
                              <button type="button" className="bg-[var(--primary)] text-white p-1 rounded-full shadow-md hover:brightness-110 active:scale-90 transition-all">
                                <Plus size={14} strokeWidth={3} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

                  </div>
                </div>
              )}

              {/* STEP 3: Inventory Linking */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Inventory Linking</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Connect this add-on to your kitchen stock to automate inventory tracking.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {/* Toggle Card */}
                    <div className="md:col-span-6 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Enable Inventory Tracking</p>
                        <p className="text-[10px] text-zinc-500">Should stock be deducted when this item is sold?</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={isInventoryTracked} 
                          onChange={(e) => setIsInventoryTracked(e.target.checked)} 
                        />
                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                      </label>
                    </div>

                    {/* Main Linkage Area */}
                    <div className={`md:col-span-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 transition-all ${!isInventoryTracked ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Select Inventory Item</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400">
                            <Search size={16} />
                          </span>
                          <input 
                            className="w-full h-9 pl-9 pr-3 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all dark:text-zinc-100 outline-none text-xs" 
                            placeholder="e.g. Diced Paneer (kg)" 
                            type="text" 
                            defaultValue="Shredded Mozzarella (kg)" 
                          />
                        </div>
                        <p className="text-[9px] text-zinc-500 italic mt-1">Select the base ingredient from your master inventory list.</p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Consumption Per Unit</label>
                        <div className="flex items-center h-9">
                          <input 
                            className="flex-1 px-3 h-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-l-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all text-xs outline-none dark:text-zinc-100" 
                            step="0.01" 
                            type="number" 
                            defaultValue="0.05" 
                          />
                          <span className="px-3 h-full flex items-center bg-zinc-50 dark:bg-zinc-800 border border-l-0 border-zinc-300 dark:border-zinc-700 rounded-r-lg text-xs font-bold text-zinc-500">kg</span>
                        </div>
                        <p className="text-[9px] text-zinc-500 italic mt-1">The exact amount of ingredient used per single serving of this add-on.</p>
                      </div>
                    </div>

                    {/* Info/Status Area */}
                    <div className="md:col-span-2 space-y-4">
                      {/* Summary Card */}
                      <div className="bg-amber-50 dark:bg-amber-900/10 p-3.5 rounded-xl border-l-4 border-[var(--primary)] shadow-sm space-y-2 border border-zinc-200 dark:border-zinc-800 border-l-[var(--primary)]">
                        <div className="flex items-center gap-2 text-[var(--primary)]">
                          <Activity size={16} />
                          <span className="text-xs font-bold">Automation Logic</span>
                        </div>
                        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          Upon every successful sale of this add-on, the system will automatically subtract <span className="font-bold text-zinc-900 dark:text-zinc-100">0.05 kg</span> from your <span className="font-bold text-zinc-900 dark:text-zinc-100">Mozzarella Cheese</span> stock.
                        </p>
                      </div>

                      {/* Image Representation */}
                      <div className="relative h-24 rounded-xl overflow-hidden group shadow-sm border border-zinc-200 dark:border-zinc-800">
                        <img 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          alt="Inventory" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZcidMmZFVfLNMk9HEHo1CGgwq59yEiSUpHX5Q_2wcHt2McVSd-Gbpv3rysEEAstoZIf7BxM7tYEwMYG0ME9f27EAi82y5N92xfD6IANAMSNCBjELYvt9UrgaZayVVl068cST0HGjvAg3ftTRNE9VQbaEAuSjRz-hcXupirF2SNi0eztSjrWktH7eTynkK30Y-7h_1AVv7EASwJw1BEvVEg4YyY_OkuBwQ9d-7wJbQYSkECTDgEW_yI4lfH2YTQyGq5h1yibK9s0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                          <span className="text-white text-[9px] font-semibold px-2 py-0.5 bg-[var(--primary)] rounded">Real-time Stock</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex gap-2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg mt-4">
                    <AlertTriangle className="text-amber-500 shrink-0" size={16} />
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Incorrect inventory linking can lead to "Out of Stock" errors on the customer menu. Please verify the consumption units carefully.
                    </p>
                  </div>
                </div>
              )}

              {/* STEP 4: Selection Rules */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Selection Rules</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Define how customers interact with this add-on across different platforms.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Left Column: Settings */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                      
                      {/* Rules Logic Info Box */}
                      <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-xl flex gap-3 items-start border border-zinc-200 dark:border-zinc-800 border-l-[var(--primary)] border-l-4">
                        <Info className="text-[var(--primary)] shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Why these rules matter?</p>
                          <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Establishing clear selection boundaries helps prevent order errors at the POS and effectively controls food costs by limiting excessive modifier usage.
                          </p>
                        </div>
                      </div>

                      {/* Selection Limits Section */}
                      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                          <SlidersHorizontal size={18} className="text-[var(--primary)]" />
                          Selection Limits
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                          <div>
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Minimum Selection</label>
                            <input 
                              className="w-full h-9 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all outline-none text-xs text-zinc-900 dark:text-zinc-100" 
                              min="0" 
                              type="number" 
                              defaultValue="0" 
                            />
                            <p className="text-[9px] text-zinc-500 mt-1">How many the customer must pick</p>
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">Maximum Selection</label>
                            <input 
                              className="w-full h-9 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all outline-none text-xs text-zinc-900 dark:text-zinc-100" 
                              min="1" 
                              type="number" 
                              defaultValue="5" 
                            />
                            <p className="text-[9px] text-zinc-500 mt-1">Upper limit of choices allowed</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Mandatory Selection</span>
                            <span className="text-[10px] text-zinc-500">Requires at least one choice to proceed</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isMandatory ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
                              {isMandatory ? 'Mandatory' : 'Optional'}
                            </span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={isMandatory}
                                onChange={(e) => setIsMandatory(e.target.checked)}
                              />
                              <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                            </label>
                          </div>
                        </div>
                      </section>

                      {/* Platform Application Section */}
                      <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
                          <MonitorSmartphone size={18} className="text-[var(--primary)]" />
                          Platform Application
                        </h3>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-3">Select where these rules should be enforced. Customers won't see this add-on group on unselected platforms.</p>
                        <div className="flex flex-wrap gap-2">
                          <button 
                            type="button"
                            onClick={() => setPlatforms(prev => ({ ...prev, mobile: !prev.mobile }))}
                            className={`flex items-center gap-1.5 h-9 px-3 rounded-lg border text-[10px] font-bold transition-all ${platforms.mobile ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                          >
                            <Smartphone size={16} />
                            Mobile App
                          </button>
                          <button 
                            type="button"
                            onClick={() => setPlatforms(prev => ({ ...prev, web: !prev.web }))}
                            className={`flex items-center gap-1.5 h-9 px-3 rounded-lg border text-[10px] font-bold transition-all ${platforms.web ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                          >
                            <Monitor size={16} />
                            Web Store
                          </button>
                          <button 
                            type="button"
                            onClick={() => setPlatforms(prev => ({ ...prev, kiosk: !prev.kiosk }))}
                            className={`flex items-center gap-1.5 h-9 px-3 rounded-lg border text-[10px] font-bold transition-all ${platforms.kiosk ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                          >
                            <Store size={16} />
                            Self-Service Kiosk
                          </button>
                        </div>
                      </section>

                    </div>

                    {/* Right Column: Preview */}
                    <div className="lg:col-span-5">
                      <div className="sticky top-0">
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border-4 border-zinc-100 dark:border-zinc-800 shadow-xl overflow-hidden">
                          <div className="bg-zinc-100 dark:bg-zinc-800 p-3 flex items-center justify-between">
                            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">UX Preview</span>
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                            </div>
                          </div>
                          
                          <div className="p-4 relative min-h-[300px]">
                            {/* App Mockup Background */}
                            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
                              <img 
                                alt="Pizza Background" 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaTfslkY2OXV__LFMCQNO_FZ_dzI3UjdhkFI0D3Qr9qciLgY-BWmIg5AL-cO3ApqaneRWPt6rTradu6FrjmOWDY29wkAKdkfsom0veDecbCuL6f1EVmpnQoJofAZ0eJGyEVjhDOu5Q_npwBvvZ99k1lSMCMIkQIbCbmEm9R6ru95kirOqY5CJlJkAeXNfNlD7FDybKI15St4SZgW1CiKhYTXy6_YU1ujj0aKUISLY9YvebwqliFd4yX1kXt4FZrn_eOtVjRZnenA"
                              />
                            </div>
                            
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md rounded-xl p-4 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Choose Your Toppings</h4>
                                  <p className="text-[9px] font-bold text-[var(--primary)] mt-0.5 uppercase tracking-wider">
                                    {isMandatory ? 'Minimum 1 item required' : 'Select up to 5 items'}
                                  </p>
                                </div>
                                {isMandatory && (
                                  <span className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[9px] font-bold text-zinc-500">REQUIRED</span>
                                )}
                              </div>
                              
                              <div className="space-y-2">
                                {/* Option 1: Unselected */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer bg-white dark:bg-zinc-900">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                                      <img 
                                        alt="Topping" 
                                        className="w-full h-full object-cover" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcDqLgjnjm6Xw0nRqhMR22ngpsrdLZooJEBfkINTefTjF13IYnMQZkNz_zpWhVK2nJvB3EpetN3JSaMXsVq_e6QEpiZZu2OiJBhJZeTTj6-2pbifxBX1TuNqdTMiAqTJ9p2C_JmgD2sqE6yoXAva1nO6dUol3RC6fONoofCg8_4IlKzsu-wRFI8orOUws51pIp8duVrz1v6Rob8zgJxuPrfa4t2dJ7nhcZQnd72CIzho8gvUtdQvWXYPfWfTzXwvc5Zl5mZVoGB1U"
                                      />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Pepperoni</span>
                                  </div>
                                  <Square className="text-zinc-300 dark:text-zinc-600" size={18} strokeWidth={1.5} />
                                </div>
                                
                                {/* Option 2: Selected */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border border-[var(--primary)] bg-[var(--primary)]/5 transition-colors cursor-pointer">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                                      <img 
                                        alt="Topping" 
                                        className="w-full h-full object-cover" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5yMoQgYnxSsSFUCJXjY_XCOe1YsDuBJRPJH0YVbJ-G1csvBj2YF0l5jm0zMczdWNYEOvluiXnwG00TlyCeJ2Axw5lCi-7bNS_kcFRQ8HvX5urihY3WwYtncoM1gsxCougvX1zeW6oUZA5rW4e0BWBP2m5d8JnctxUBa-wmb8yale6kipj7jJgjf_vdRm3GcJsg9lBY2pov-5A0mqXfZc16ttF7DLQpDJf2FGySPQlE74GAFdujmji7G69WqNXEb7dUFvMZNJLdXw"
                                      />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Green Peppers</span>
                                  </div>
                                  <CheckSquare className="text-[var(--primary)]" size={18} fill="var(--primary)" color="white" />
                                </div>
                                
                                {/* Option 3: Out of stock */}
                                <div className="flex items-center justify-between p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 opacity-50 cursor-not-allowed">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                                      <img 
                                        alt="Topping" 
                                        className="w-full h-full object-cover" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuMExI5fHJG9UCZhyhiwPnI895nxkj-naiXy4HaO2jQPVp77fYuEJDR7pEt5PRspnzAPuRz7zc95jfByEsoOohDXclRLUJ4iRsx2iQMAiS-rD6WOBa5W0OGw0n6Q4Q40r5mnfShpk4GrIqDswxXUM3UgviYU470RZIq8WwXXmCBos4UE8O6VdMgL1uJbVYjpXluseSoxYOvmTsA79x8Gdakwxapm96IVUuYKWq1-kqVXCI-X9_hE4Zoa9szBG4AC05lzQ5zlbIe-I"
                                      />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Mushrooms</span>
                                  </div>
                                  <span className="text-[9px] font-bold text-red-500 uppercase">Out of stock</span>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                                <button type="button" className="w-full bg-[var(--primary)] text-white h-9 rounded-lg text-xs font-bold opacity-50 cursor-not-allowed">
                                  Confirm Selection
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-[10px] text-zinc-500 italic">Preview simulates the Mobile App experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Product Assignment */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Product Assignment</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Choose which products this add-on can be added to.</p>
                  </div>

                  {/* Filter & Search Card */}
                  <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-3.5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      {/* Search Bar */}
                      <div className="relative flex-grow max-w-md">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                          <Search size={16} />
                        </span>
                        <input 
                          className="w-full h-9 pl-9 pr-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-xs text-zinc-900 dark:text-zinc-100" 
                          placeholder="Search products..." 
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      {/* Select All Toggle */}
                      <label className="inline-flex items-center cursor-pointer gap-2 self-end md:self-auto">
                        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400">Select All View</span>
                        <div className="relative">
                          <input 
                            className="sr-only peer" 
                            type="checkbox" 
                            checked={selectAll}
                            onChange={handleSelectAll}
                          />
                          <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                        </div>
                      </label>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 mt-4 overflow-x-auto hide-scrollbar pb-1">
                      {["All", "Pizzas", "Sides", "Beverages", "Desserts", "Deals"].map(category => (
                        <button 
                          key={category}
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${activeCategory === category ? 'bg-[var(--primary)] text-white shadow-sm' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-16 relative">
                    {filteredProducts.map(prod => {
                      const isSelected = selectedProducts.includes(prod.id);
                      return (
                        <label 
                          key={prod.id} 
                          className={`group relative flex items-center gap-3 p-3 bg-white dark:bg-zinc-900 rounded-xl border transition-all cursor-pointer ${isSelected ? 'border-[var(--primary)] shadow-md bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10' : 'border-zinc-200 dark:border-zinc-800 hover:border-[var(--primary)]/50'}`}
                        >
                          <input 
                            className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-300 transition-colors" 
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleProduct(prod.id)}
                          />
                          <img 
                            alt={prod.name} 
                            className="w-10 h-10 object-cover rounded-lg border border-zinc-200 dark:border-zinc-800" 
                            src={prod.img} 
                          />
                          <div className="flex flex-col">
                            <span className={`text-xs font-bold transition-colors ${isSelected ? 'text-[var(--primary)]' : 'text-zinc-900 dark:text-zinc-100 group-hover:text-[var(--primary)]'}`}>
                              {prod.name}
                            </span>
                            <span className="text-[10px] text-zinc-500">Category: {prod.cat}</span>
                          </div>
                          <div className={`ml-auto transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                            <CheckCircle2 className="text-[var(--primary)]" size={16} fill={isSelected ? "var(--primary)" : "transparent"} color={isSelected ? "white" : "currentColor"} />
                          </div>
                        </label>
                      );
                    })}
                    
                    {/* Bottom Selection Summary (Floating Absolute inside the Step) */}
                    {selectedProducts.length > 0 && (
                      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 pointer-events-none">
                        <div className="bg-[var(--primary)] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                          <ShoppingBasket size={14} />
                          <span className="text-[10px] font-bold">{selectedProducts.length} Products Selected</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 6: Review & Finalize */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-1 mb-4">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Review & Finalize</h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Verify all details before making this add-on live on the menu.</p>
                  </div>

                  {/* Summary Sections */}
                  <div className="space-y-3">
                    
                    {/* Basic Details */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Basic Details</h3>
                        <button type="button" onClick={() => setCurrentStep(1)} className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider hover:underline">Edit</button>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
                          <img className="w-full h-full object-cover" alt="Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAFYyJzO4nTvepCSCxKr6ImKgNWb4CQXj3ySl7pQi915BQbZVxfDj_T8dl3-6GPGL1cybbzCI6Izpj81xK8A2vJLuC4iidvQDisOoFCyimAve6lSxYaTb40DcsHtkh4UZfHdXVq74o4Zvsxctkj-IhjgGF7Gr5BLf-euSiK94l3S8I3AXRDvYfukuwel-B-WUeFQHIfVyJsklg_TT1KKmvUxRkFGd_fjk5vh_0STNHHm6MZ-Y5-WmFJ9cE2GOd5eQ_N2RbuK0OopE"/>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-zinc-500">Name</span>
                            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{addonName || "Extra Truffle Oil"}</span>
                          </div>
                          <div className="flex gap-4 mt-1.5">
                            <div className="flex flex-col">
                              <span className="text-[10px] text-zinc-500">Type</span>
                              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Topping</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-zinc-500">Status</span>
                              <span className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-[9px] font-bold uppercase w-fit">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & Tax */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Pricing & Tax</h3>
                        <button type="button" onClick={() => setCurrentStep(2)} className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider hover:underline">Edit</button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Price per unit</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">$2.50</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Tax Category</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Standard (12%)</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Includes Tax</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Yes</span>
                        </div>
                      </div>
                    </div>

                    {/* Inventory */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Inventory</h3>
                        <button type="button" onClick={() => setCurrentStep(3)} className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider hover:underline">Edit</button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Linked Item</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Truffle Essence Bottle</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-zinc-500">Consumption Rate</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">10ml / portion</span>
                        </div>
                      </div>
                    </div>

                    {/* Rules */}
                    <div className="bg-white dark:bg-zinc-900 border-t-2 border-t-amber-400 border-x border-b border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Rules & Visibility</h3>
                        <button type="button" onClick={() => setCurrentStep(4)} className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider hover:underline">Edit</button>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center pb-2 border-b border-zinc-200 dark:border-zinc-800">
                          <span className="text-xs text-zinc-900 dark:text-zinc-100">Min / Max Selection</span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">0 / {isMandatory ? "1+" : "2"}</span>
                        </div>
                        <div className="flex flex-col mt-1">
                          <span className="text-[10px] text-zinc-500 mb-1.5">Platform Application</span>
                          <div className="flex gap-3">
                            <div className={`flex flex-col items-center p-1.5 rounded-lg w-10 h-10 justify-center border transition-colors ${platforms.mobile ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30' : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'}`}>
                              <Smartphone className={platforms.mobile ? "text-[var(--primary)]" : "text-zinc-400"} size={16} />
                              <span className="text-[7px] font-bold mt-0.5 text-zinc-500">APP</span>
                            </div>
                            <div className={`flex flex-col items-center p-1.5 rounded-lg w-10 h-10 justify-center border transition-colors ${platforms.web ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30' : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'}`}>
                              <Globe className={platforms.web ? "text-[var(--primary)]" : "text-zinc-400"} size={16} />
                              <span className="text-[7px] font-bold mt-0.5 text-zinc-500">WEB</span>
                            </div>
                            <div className={`flex flex-col items-center p-1.5 rounded-lg w-10 h-10 justify-center border transition-colors ${platforms.kiosk ? 'bg-[var(--primary)]/10 border-[var(--primary)]/30' : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'}`}>
                              <Monitor className={platforms.kiosk ? "text-[var(--primary)]" : "text-zinc-400"} size={16} />
                              <span className="text-[7px] font-bold mt-0.5 text-zinc-500">KIOSK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Assignment */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Product Assignment</h3>
                        <button type="button" onClick={() => setCurrentStep(5)} className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider hover:underline">Edit</button>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 rounded-lg border border-[var(--primary)]/20">
                        <Link className="text-[var(--primary)]" size={16} />
                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Linked to {selectedProducts.length} Products</span>
                      </div>
                    </div>

                    {/* Terms & Final Actions */}
                    <div className="mt-6 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <label className="flex items-start gap-3 mb-4 cursor-pointer group">
                        <input 
                          className="mt-0.5 w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)] transition-all" 
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                          I confirm that the information provided is accurate and I accept the <a className="text-[var(--primary)] underline font-bold" href="#">Terms & Conditions</a> for adding items to the live menu.
                        </span>
                      </label>
                      <button 
                        onClick={handlePublish}
                        disabled={!termsAccepted || isPublishing}
                        className={`w-full h-10 text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${(!termsAccepted || isPublishing) ? 'bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-500 cursor-not-allowed shadow-none' : 'bg-[var(--primary)] text-white hover:brightness-110 active:scale-95'}`}
                      >
                        {isPublishing ? (
                          <>
                            <Loader2 className="animate-spin" size={16} />
                            <span>Publishing...</span>
                          </>
                        ) : (
                          <>
                            <span>Create & Publish Add-on</span>
                            <CloudUpload size={16} />
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Visual Accent & Footer Actions */}
            <div className="shrink-0 p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-zinc-950">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Utensils className="text-red-600 dark:text-red-400" size={14} />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Leaf className="text-emerald-600 dark:text-emerald-400" size={14} />
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button 
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 sm:flex-none h-9 px-4 text-xs font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all active:scale-95 shadow-sm flex items-center justify-center gap-1.5"
                >
                  {currentStep > 1 && <ArrowLeft size={14} />}
                  {currentStep === 1 ? 'Cancel' : 'Back'}
                </button>
                {currentStep < 6 && (
                  <button 
                    type="button"
                    onClick={handleNext}
                    className="flex-1 sm:flex-none h-9 px-4 text-xs font-bold bg-[var(--primary)] text-white rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    Next Step
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Preview Card (Asymmetric Layout/Bento Element) */}
        <div className="hidden xl:flex flex-col w-64 space-y-3 shrink-0">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-xl">
            <div className="aspect-square w-full rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-3 relative flex items-center justify-center">
              <img 
                alt="Preview" 
                className={`object-cover w-full h-full transition-all duration-500 ${addonName ? "opacity-100" : "opacity-20 grayscale"}`} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwydorpEAvXqO1VpBon9IDZRvj5-eOSjY47dPCyG6AnXAT9BXMhqdP3iZgi9V2LXu1vM_lj2aCvB7uWSbgX8NwlPGbBhlvFxMVsZxqMOEhLZJ367epsw2A8htMldfqTF81l40KxnZ6NlXqpT0M5oJuEbPCyz-n8IKHKXIqRibCgrEzgmJ_VzyKySsIklQJFgxo0rDKQFPSEpOlEHNXzymoQRnSPthag6yluJbVJFN5dHIE6GdVBTFGtBT6-LAngKRA2A4tqzK2Y9o"
              />
              {!addonName && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="text-zinc-400" size={32} strokeWidth={1} />
                </div>
              )}
            </div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{addonName || "Preview"}</h3>
            <p className="text-[10px] text-zinc-500 mt-1">Live preview updates as you fill out the details on the left.</p>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-3 shadow-xl">
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-500 mb-1.5">
              <Lightbulb size={16} />
              <span className="text-xs font-bold">Pro Tip</span>
            </div>
            <p className="text-[10px] font-medium text-amber-900/70 dark:text-amber-200/70 leading-relaxed">
              Adding a descriptive, appetizing name increases customer conversion by up to 15%.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
