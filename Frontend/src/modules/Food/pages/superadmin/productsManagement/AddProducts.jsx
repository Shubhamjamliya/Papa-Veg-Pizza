import React, { useState } from "react";
import { X, UploadCloud, ChevronRight, Loader2, ListChecks, Search, CheckCircle2 } from "lucide-react";

export default function AddProducts({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStoreTable, setShowStoreTable] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1);
      } else {
        alert("Product saved successfully!");
        onClose();
        setCurrentStep(1);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      {/* Modal Container */}
      <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden w-full h-full md:max-w-3xl md:h-[85vh] md:max-h-[800px] md:shadow-2xl md:rounded-xl">

        {/* Header: Progress Indicator */}
        <header className="bg-white dark:bg-zinc-950 px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 md:px-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Add New Product</h1>
            <button
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between w-full relative">
            <div className="absolute top-[16px] left-0 w-full h-[2px] bg-zinc-200 dark:bg-zinc-800 z-0">
              <div
                className="h-full bg-[var(--primary)] transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
              ></div>
            </div>

            {/* Step 1: Details */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 1 ? 'bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700'}`}>1</div>
              <span className={`text-xs font-bold hidden md:block transition-colors ${currentStep >= 1 ? 'text-[var(--primary)]' : 'text-zinc-400'}`}>Details</span>
            </div>
            {/* Step 2: Pricing */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 2 ? 'bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700'}`}>2</div>
              <span className={`text-xs font-bold hidden md:block transition-colors ${currentStep >= 2 ? 'text-[var(--primary)]' : 'text-zinc-400'}`}>Pricing</span>
            </div>
            {/* Step 3: Inventory */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 3 ? 'bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700'}`}>3</div>
              <span className={`text-xs font-bold hidden md:block transition-colors ${currentStep >= 3 ? 'text-[var(--primary)]' : 'text-zinc-400'}`}>Inventory</span>
            </div>
            {/* Step 4: Customization */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 4 ? 'bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700'}`}>4</div>
              <span className={`text-xs font-bold hidden md:block transition-colors ${currentStep >= 4 ? 'text-[var(--primary)]' : 'text-zinc-400'}`}>Customization</span>
            </div>
            {/* Step 5: Store */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${currentStep >= 5 ? 'bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-zinc-200 dark:border-zinc-700'}`}>5</div>
              <span className={`text-xs font-bold hidden md:block transition-colors ${currentStep >= 5 ? 'text-[var(--primary)]' : 'text-zinc-400'}`}>Store</span>
            </div>
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto px-4 py-4 md:px-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">

          {/* Step 1: Basic Details */}
          {currentStep === 1 && (
            <form className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300" id="step-1-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Product Name */}
                <div className="col-span-1 md:col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Product Name</label>
                  <input
                    className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
                    placeholder="e.g. Spicy Garden Delight"
                    type="text"
                  />
                </div>

                {/* SKU & Category */}
                <div className="col-span-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">SKU</label>
                  <input
                    className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
                    placeholder="PV-10293-PIZ"
                    type="text"
                  />
                </div>
                <div className="col-span-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Category</label>
                  <select className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100">
                    <option>Signature Pizzas</option>
                    <option>Classic Sides</option>
                    <option>Vegan Specials</option>
                    <option>Beverages</option>
                  </select>
                </div>

                {/* Dietary & Health */}
                <div className="col-span-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Dietary Type</label>
                  <div className="flex gap-2">
                    <label className="flex-1 cursor-pointer">
                      <input className="hidden peer" name="dietary" type="radio" value="veg" defaultChecked />
                      <div className="h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all text-sm font-bold">
                        Vegetarian
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input className="hidden peer" name="dietary" type="radio" value="vegan" />
                      <div className="h-10 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all text-sm font-bold">
                        Vegan
                      </div>
                    </label>
                  </div>
                </div>

                {/* Prep Time & Calories */}
                <div className="col-span-1 flex gap-3">
                  <div className="flex-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Prep Time (min)</label>
                    <input
                      className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
                      placeholder="15"
                      type="number"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">Calories</label>
                    <input
                      className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
                      placeholder="240"
                      type="number"
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div className="col-span-1 md:col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Product Image</label>
                  <div className="relative w-full aspect-video md:aspect-auto md:h-48 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center justify-center group hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer overflow-hidden">
                    <img
                      alt="Pizza Preview"
                      className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp"
                    />
                    <div className="flex flex-col items-center text-zinc-400 group-hover:text-[var(--primary)] transition-colors z-10">
                      <UploadCloud size={40} className="mb-3" />
                      <span className="text-base font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-[var(--primary)] transition-colors">Drag & drop or click to upload</span>
                      <span className="text-xs font-medium opacity-70 mt-1">PNG, JPG up to 10MB</span>
                    </div>
                  </div>
                </div>

              </div>
            </form>
          )}

          {/* Step 2: Pricing */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Base Price */}
              <section className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="base_price">Base Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-zinc-500">₹</span>
                  <input
                    className="w-full h-10 pl-8 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                    id="base_price"
                    placeholder="249.00"
                    type="number"
                  />
                </div>
              </section>

              {/* Tax Percentage */}
              <section className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="tax_rate">Tax Percentage</label>
                <select
                  className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all font-medium"
                  id="tax_rate"
                  defaultValue="12"
                >
                  <option value="5">5% Standard</option>
                  <option value="12">12% Premium</option>
                  <option value="18">18% Luxury</option>
                  <option value="0">0% Exempt</option>
                </select>
              </section>

              {/* Size Premiums */}
              <section className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Size Premiums</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Small</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">₹</span>
                      <input
                        className="w-full h-9 pl-8 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                        id="small_price"
                        type="number"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Medium</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">₹</span>
                      <input
                        className="w-full h-9 pl-8 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                        id="medium_price"
                        type="number"
                        placeholder="99.00"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Large</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">₹</span>
                      <input
                        className="w-full h-9 pl-8 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                        id="large_price"
                        type="number"
                        placeholder="199.00"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Step 3: Inventory */}
          {currentStep === 3 && (
            <div className="max-w-2xl mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Inventory Tracking</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Enable tracking to manage stock levels and receive alerts.</p>
                  </div>
                  <div className="relative inline-block w-10 h-5 transition duration-200 ease-in cursor-pointer">
                    <input
                      defaultChecked
                      className="peer absolute w-5 h-5 rounded-full bg-white border-4 border-zinc-300 dark:border-zinc-600 appearance-none cursor-pointer outline-none transition-all duration-200 z-10 checked:translate-x-5 checked:border-[var(--primary)]"
                      id="inventory-toggle"
                      type="checkbox"
                    />
                    <label
                      className="block overflow-hidden h-5 rounded-full bg-zinc-300 dark:bg-zinc-700 cursor-pointer transition-colors duration-200 peer-checked:bg-[var(--primary)]"
                      htmlFor="inventory-toggle"
                    ></label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block" htmlFor="initial-stock">Initial Stock Quantity</label>
                    <input
                      className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-all font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                      id="initial-stock"
                      placeholder="150"
                      type="number"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block" htmlFor="min-stock">Minimum Stock Alert</label>
                    <input
                      className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-all font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                      id="min-stock"
                      placeholder="20"
                      type="number"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block" htmlFor="reorder-threshold">Reorder Threshold</label>
                    <input
                      className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-all font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                      id="reorder-threshold"
                      placeholder="45"
                      type="number"
                    />
                    <p className="text-[10px] text-zinc-500 italic mt-1">Triggers a reorder suggestion when stock falls below this level.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Customization */}
          {currentStep === 4 && (
            <div className="max-w-2xl mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="space-y-6">
                  {/* Add-ons Selection */}
                  <section>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                      <ListChecks size={18} className="text-[var(--primary)]" />
                      Available Add-ons
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Option 1 */}
                      <label className="flex items-center p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                        <input defaultChecked className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[var(--primary)] transition-colors">Extra Cheese</p>
                          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">+₹120</p>
                        </div>
                      </label>
                      {/* Option 2 */}
                      <label className="flex items-center p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                        <input className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[var(--primary)] transition-colors">Paneer</p>
                          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">+₹95</p>
                        </div>
                      </label>
                      {/* Option 3 */}
                      <label className="flex items-center p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                        <input defaultChecked className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[var(--primary)] transition-colors">Sweet Corn</p>
                          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">+₹65</p>
                        </div>
                      </label>
                      {/* Option 4 */}
                      <label className="flex items-center p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                        <input className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[var(--primary)] transition-colors">Black Olives</p>
                          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">+₹80</p>
                        </div>
                      </label>
                    </div>
                  </section>

                  {/* Selection Rules */}
                  <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4">Selection Rules</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Minimum Add-ons</label>
                        <input
                          className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                          min="0"
                          type="number"
                          placeholder="0"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Maximum Add-ons</label>
                        <input
                          className="w-full h-10 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500"
                          min="1"
                          type="number"
                          placeholder="5"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Store Assignment */}
          {currentStep === 5 && (
            <div className="max-w-2xl mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block">Availability</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-start gap-2 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <input
                          defaultChecked
                          className="mt-0.5 h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]/20 border-zinc-300 dark:border-zinc-600 cursor-pointer"
                          name="store_option"
                          type="radio"
                          value="all"
                          onChange={() => setShowStoreTable(false)}
                        />
                        <div>
                          <span className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Available in All Stores</span>
                          <span className="block text-[10px] text-zinc-500 dark:text-zinc-400">Product will be listed in every current and future store location.</span>
                        </div>
                      </label>
                      <label className="flex items-start gap-2 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <input
                          className="mt-0.5 h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)]/20 border-zinc-300 dark:border-zinc-600 cursor-pointer"
                          name="store_option"
                          type="radio"
                          value="specific"
                          onChange={() => setShowStoreTable(true)}
                        />
                        <div>
                          <span className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Select Specific Stores</span>
                          <span className="block text-[10px] text-zinc-500 dark:text-zinc-400">Choose specific locations where this product should be available.</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Store Selection Table */}
                  {showStoreTable && (
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top-2 duration-300">
                      <div className="flex flex-col gap-3">
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                          <input
                            className="w-full h-9 pl-9 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 transition-all"
                            placeholder="Search store locations..."
                            type="text"
                          />
                        </div>
                        <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 bg-white dark:bg-zinc-900">
                          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            <label className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Papa Veg Downtown</span>
                                <span className="text-[10px] text-zinc-500 mt-0.5">New York • Active</span>
                              </div>
                              <input defaultChecked className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                            </label>
                            <label className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Papa Veg Brooklyn</span>
                                <span className="text-[10px] text-zinc-500 mt-0.5">New York • Active</span>
                              </div>
                              <input className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                            </label>
                            <label className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Papa Veg Westside</span>
                                <span className="text-[10px] text-zinc-500 mt-0.5">Chicago • Maintenance</span>
                              </div>
                              <input className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 cursor-pointer" type="checkbox" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Footer Actions */}
        <footer className="bg-zinc-50 dark:bg-zinc-900/50 p-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center md:px-6">
          <button
            onClick={handleBack}
            className="md:min-w-[100px] px-4 h-10 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center"
          >
            {currentStep > 1 ? "Back" : "Cancel"}
          </button>

          <div className="flex items-center gap-3">
            {currentStep > 1 && currentStep < 5 && (
              <button className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-wider hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:block">
                Save Draft
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="md:min-w-[140px] px-6 h-10 rounded-lg bg-[var(--primary)] text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : currentStep === 5 ? (
                <>
                  <span>Finish</span>
                  <CheckCircle2 size={20} />
                </>
              ) : (
                <>
                  <span>Next Step</span>
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
