import React, { useState } from "react";
import { Package, X, Edit2, ChevronDown, Camera, ArrowRight, Search, List, Trash2, Plus, ArrowLeft, Check, Calculator, AlertTriangle, Snowflake, Layers, Refrigerator, Truck, Calendar, Lightbulb, ShieldCheck, Info, Banknote, PlusCircle } from "lucide-react";

export default function AddInventory({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [itemName, setItemName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [priceIncludesTax, setPriceIncludesTax] = useState(false);
  const [trackExpiry, setTrackExpiry] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-4xl max-h-[85vh] flex flex-col rounded-xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-300">
        
        {/* Header Section */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-[var(--primary)] border border-red-100 dark:border-red-900/30">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Add New Inventory Item</h2>
              <p className="text-xs font-medium text-zinc-500 mt-1">Step {currentStep}: {currentStep === 1 ? 'Basic Information' : currentStep === 2 ? 'Suppliers' : currentStep === 3 ? 'Pricing & Units' : currentStep === 4 ? 'Stock Settings' : 'Review'}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 cursor-pointer active:scale-95"
          >
            <X size={20} />
          </button>
        </header>

        {/* Progress Stepper */}
        <nav className="px-6 py-4 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto hide-scrollbar">
          <div className="flex items-center min-w-[600px] justify-between">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md text-sm font-bold ${currentStep >= 1 ? 'bg-[var(--primary)] text-white' : 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                {currentStep > 1 ? <Check size={16} /> : "1"}
              </div>
              <span className={`ml-2 text-sm font-bold ${currentStep >= 1 ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>Basic Info</span>
            </div>
            <div className={`h-[2px] flex-grow mx-2 ${currentStep >= 2 ? 'bg-[var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}></div>
            
            {/* Step 2 */}
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md text-sm font-bold ${currentStep >= 2 ? 'bg-[var(--primary)] text-white' : 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                {currentStep > 2 ? <Check size={16} /> : "2"}
              </div>
              <span className={`ml-2 text-sm font-bold ${currentStep >= 2 ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>Suppliers</span>
            </div>
            <div className={`h-[2px] flex-grow mx-2 ${currentStep >= 3 ? 'bg-[var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}></div>
            
            {/* Step 3 */}
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md text-sm font-bold ${currentStep >= 3 ? 'bg-[var(--primary)] text-white' : 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                {currentStep > 3 ? <Check size={16} /> : "3"}
              </div>
              <span className={`ml-2 text-sm font-bold ${currentStep >= 3 ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>Pricing</span>
            </div>
            <div className={`h-[2px] flex-grow mx-2 ${currentStep >= 4 ? 'bg-[var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}></div>
            
            {/* Step 4 */}
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md text-sm font-bold ${currentStep >= 4 ? 'bg-[var(--primary)] text-white' : 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                {currentStep > 4 ? <Check size={16} /> : "4"}
              </div>
              <span className={`ml-2 text-sm font-bold ${currentStep >= 4 ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>Storage</span>
            </div>
            <div className={`h-[2px] flex-grow mx-2 ${currentStep >= 5 ? 'bg-[var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}></div>
            
            {/* Step 5 */}
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md text-sm font-bold ${currentStep >= 5 ? 'bg-[var(--primary)] text-white' : 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500'}`}>
                {currentStep > 5 ? <Check size={16} /> : "5"}
              </div>
              <span className={`ml-2 text-sm font-bold ${currentStep >= 5 ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>Review</span>
            </div>
          </div>
        </nav>

        {/* Form Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 hide-scrollbar">
          {currentStep === 1 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Item Name */}
              <div className="space-y-2 group/field">
                <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="item_name">Item Name *</label>
                <div className="relative group">
                  <input 
                    id="item_name" 
                    type="text" 
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all outline-none" 
                    placeholder="e.g., Fresh Paneer" 
                  />
                  <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[var(--primary)] transition-colors" size={16} />
                </div>
              </div>
              
              {/* SKU */}
              <div className="space-y-2 group/field">
                <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="sku">SKU *</label>
                <input 
                  id="sku" 
                  type="text" 
                  defaultValue="PV-INV-PAN-001"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100 font-mono transition-all outline-none" 
                />
              </div>
              
              {/* Category */}
              <div className="space-y-2 group/field">
                <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="category">Category</label>
                <div className="relative">
                  <select 
                    id="category"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all cursor-pointer outline-none"
                  >
                    <option value="dairy">Dairy</option>
                    <option value="produce">Produce</option>
                    <option value="grains">Grains</option>
                    <option value="spices">Spices</option>
                    <option value="meat">Meat & Poultry</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={18} />
                </div>
              </div>
              
              {/* Active Status */}
              <div className={`flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border transition-colors ${isActive ? 'border-emerald-500/30 dark:border-emerald-400/30' : 'border-zinc-200 dark:border-zinc-800'}`}>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Active Status</span>
                  <span className="text-xs text-zinc-500 font-medium">Availability for recipes</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 group/field">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100" htmlFor="description">Description</label>
                <span className="text-xs font-bold text-zinc-500">Optional</span>
              </div>
              <textarea 
                id="description" 
                rows="4"
                placeholder="Detailed description of the ingredient, storage requirements, or prep notes..." 
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all resize-none outline-none"
              ></textarea>
            </div>

            {/* Asset Visual (Informational) */}
            <div className="relative h-48 rounded-xl overflow-hidden group border border-zinc-200 dark:border-zinc-800 cursor-pointer">
              <img 
                alt="Fresh Paneer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdaCPhgo6bYNxfWTvj3ON9sCeXOYqqImt8E0q7H2RV5a7XHMI4Bd3mIVlbKKsMKg7FEExJ06QEZkSY7OZxKLrIw4F1umEkEP6x88WZvDf_Xtu0RBxWn3dZKEB6Ax22Sh21-GwIwfiOeCT_WpAXKzoBqntMS9o7zGOHHmwi4rukYuhx4Pvgy71gjdpPr93-7z6e4fFhwg_7W8zFDpIF5wqLzYvkEjgw2mdIJcQcgkc0FcJt-wIOEahSn5jD3TeMFmB79kjLetbYxgA" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 group-hover:from-black/80 transition-colors">
                <div className="flex items-center gap-2 text-white">
                  <Camera size={20} />
                  <span className="text-sm font-bold">Item Visual Representation</span>
                </div>
              </div>
            </div>
          </div>
          )}

          {currentStep === 2 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Introduction Section */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Link Approved Suppliers</h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Define which vendors provide this ingredient to automate reordering and track lead times.</p>
            </div>

            {/* Searchable Supplier Dropdown / Multi-select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Select Suppliers</label>
              <div className="relative">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20 transition-all">
                  <Search className="text-zinc-400" size={18} />
                  <input className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none" placeholder="Search by vendor name or category..." type="text"/>
                  <ChevronDown className="text-zinc-400 cursor-pointer" size={18} />
                </div>
                
                {/* Mini Chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold border border-emerald-200 dark:border-emerald-800/50">
                    Green Leaf Farms
                    <X className="cursor-pointer hover:text-emerald-950 dark:hover:text-emerald-100" size={14} />
                  </div>
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold border border-emerald-200 dark:border-emerald-800/50">
                    Fresh Produce Wholesalers
                    <X className="cursor-pointer hover:text-emerald-950 dark:hover:text-emerald-100" size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Linked Supplier Details (Bento/Card Layout) */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <List size={20} />
                Supplier Specific Data
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Supplier Card 1 */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition-shadow group">
                  <div className="flex-1 space-y-1">
                    <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Green Leaf Farms</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded text-xs font-bold">Primary</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">ID: SUP-0492</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-[1.5]">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Supplier SKU</label>
                      <input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" type="text" defaultValue="GLF-ORG-ROM"/>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Lead Time</label>
                      <div className="relative">
                        <input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" type="number" defaultValue="2"/>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs font-bold">Days</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-red-500 opacity-40 hover:opacity-100 transition-opacity hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Supplier Card 2 */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition-shadow group">
                  <div className="flex-1 space-y-1">
                    <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Fresh Produce Wholesalers</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded text-xs font-bold">Secondary</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">ID: SUP-0128</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-[1.5]">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Supplier SKU</label>
                      <input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" placeholder="Enter SKU..." type="text"/>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">Lead Time</label>
                      <div className="relative">
                        <input className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" type="number" defaultValue="4"/>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs font-bold">Days</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-red-500 opacity-40 hover:opacity-100 transition-opacity hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Empty State / Add Action */}
                <button className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 p-4 rounded-xl flex items-center justify-center gap-3 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-[var(--primary)]/50 transition-all group">
                  <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-1.5 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors">
                    <Plus size={18} />
                  </div>
                  <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Add Another Supplier</span>
                </button>
              </div>
            </div>
          </div>
          )}

          {currentStep === 3 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Introduction Section */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Pricing & Units</h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Set the unit of measurement, cost, and tax properties to accurately calculate recipe margins.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Unit of Measure */}
              <div className="space-y-2 group/field">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="uom">Unit of Measure</label>
                <div className="relative">
                  <select 
                    id="uom"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all cursor-pointer outline-none"
                  >
                    <option value="kg">Kilograms (kg)</option>
                    <option value="liters">Liters (L)</option>
                    <option value="cases">Cases (Box)</option>
                    <option value="units">Individual Units</option>
                    <option value="grams">Grams (g)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={18} />
                </div>
              </div>

              {/* Cost per Unit */}
              <div className="space-y-2 group/field">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="cost">Cost per Unit (Net)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₹</span>
                  <input 
                    id="cost" 
                    type="number" 
                    step="0.01"
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono transition-all outline-none" 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              {/* Tax Category */}
              <div className="space-y-2 group/field">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="tax">Tax Category</label>
                <div className="relative">
                  <select 
                    id="tax"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 appearance-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all cursor-pointer outline-none"
                  >
                    <option value="standard">Standard (20%)</option>
                    <option value="reduced">Reduced (5%)</option>
                    <option value="exempt">Exempt (0%)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={18} />
                </div>
              </div>

              {/* Price Includes Tax Toggle */}
              <div className={`flex items-center justify-between px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border transition-colors ${priceIncludesTax ? 'border-[var(--primary)]/30 dark:border-[var(--primary)]/30' : 'border-zinc-200 dark:border-zinc-800'}`}>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Price includes tax</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={priceIncludesTax}
                    onChange={(e) => setPriceIncludesTax(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                </label>
              </div>
            </div>

            {/* Margin Calculator Hint Box (Warm Gold Accent) */}
            <div className="bg-amber-50 dark:bg-amber-900/10 border-t-4 border-amber-400 dark:border-amber-500 p-6 rounded-xl shadow-sm flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-200 dark:bg-amber-500/20 text-amber-700 dark:text-amber-500 flex items-center justify-center rounded-full shrink-0">
                <Calculator size={24} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-amber-900 dark:text-amber-300">Margin Intelligence</h3>
                <p className="text-sm font-medium text-amber-800/80 dark:text-amber-200/80">
                  Based on a ₹12.50 average pizza price, this cost per unit (₹2.45) contributes to a <span className="font-bold text-emerald-600 dark:text-emerald-400">68.2%</span> gross margin for recipes containing this item. 
                </p>
                <div className="mt-2 flex gap-6 items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-900/60 dark:text-amber-300/60">Estimated Portion Cost</span>
                    <span className="font-mono text-lg font-bold text-amber-900 dark:text-amber-300">₹0.42</span>
                  </div>
                  <div className="w-[1px] h-8 bg-amber-900/20 dark:bg-amber-300/20"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-900/60 dark:text-amber-300/60">Margin Impact</span>
                    <span className="font-mono text-lg font-bold text-emerald-600 dark:text-emerald-400">-0.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {currentStep === 4 && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Introduction Section */}
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Stock Settings</h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Configure initial quantities, storage zones, and shelf-life tracking for this item.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Initial Stock Level */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="initial-stock">Initial Stock Level</label>
                <div className="relative">
                  <input 
                    id="initial-stock" 
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono transition-all outline-none" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold text-sm">KG</span>
                </div>
              </div>

              {/* Reorder Point */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="reorder-point">Reorder Point (Low Stock Alert)</label>
                <div className="relative">
                  <input 
                    id="reorder-point" 
                    type="number"
                    placeholder="5.00"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono transition-all outline-none" 
                  />
                  <AlertTriangle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
                </div>
                <p className="text-[10px] font-bold text-zinc-500 italic">System will alert when stock falls below this level.</p>
              </div>

              {/* Storage Location */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Storage Location</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {/* Location Options (Bento Style) */}
                  <label className="cursor-pointer group">
                    <input type="radio" name="location" className="hidden peer" defaultChecked />
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 dark:peer-checked:border-emerald-500/50 transition-all flex flex-col items-center gap-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/50">
                      <Snowflake className="text-zinc-600 dark:text-zinc-400 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400" size={24} />
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-300">Cold Storage</span>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input type="radio" name="location" className="hidden peer" />
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 dark:peer-checked:border-emerald-500/50 transition-all flex flex-col items-center gap-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/50">
                      <Layers className="text-zinc-600 dark:text-zinc-400 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400" size={24} />
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-300">Dry Pantry</span>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input type="radio" name="location" className="hidden peer" />
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 dark:peer-checked:border-emerald-500/50 transition-all flex flex-col items-center gap-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/50">
                      <Refrigerator className="text-zinc-600 dark:text-zinc-400 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400" size={24} />
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-300">Walk-in</span>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input type="radio" name="location" className="hidden peer" />
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 dark:peer-checked:border-emerald-500/50 transition-all flex flex-col items-center gap-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/50">
                      <Truck className="text-zinc-600 dark:text-zinc-400 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400" size={24} />
                      <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300 peer-checked:text-emerald-700 dark:peer-checked:text-emerald-300">Receiving</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Expiry Toggle and Shelf Life */}
              <div className="md:col-span-2 pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Track Expiry Dates</h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Enable automated FIFO (First-In-First-Out) management.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={trackExpiry}
                      onChange={(e) => setTrackExpiry(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                  </label>
                </div>

                <div className={`transition-all duration-300 ease-in-out origin-top ${trackExpiry ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider" htmlFor="avg-shelf-life">Average Shelf Life (Days)</label>
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                      <div className="relative w-full sm:max-w-xs">
                        <input 
                          id="avg-shelf-life" 
                          type="number" 
                          defaultValue="7"
                          className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono transition-all outline-none" 
                        />
                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      </div>
                      
                      <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg flex items-center gap-3">
                        <Lightbulb className="text-amber-500 shrink-0" size={18} />
                        <span className="text-sm font-bold text-amber-800 dark:text-amber-400">Recommended: 5-7 days for fresh produce</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {currentStep === 5 && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[var(--primary)]" size={28} />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Review & Confirm</h2>
            </div>

            {/* Bento-style Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Info size={20} className="text-zinc-500" />
                    Basic Info
                  </h3>
                  <button onClick={() => setCurrentStep(1)} className="text-[var(--primary)] text-sm font-bold hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edit <Edit2 size={14} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Product Name</p>
                    <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">San Marzano Tomatoes (Bulk)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Category</p>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Vegetables / Canned</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">SKU</p>
                      <p className="text-sm font-mono text-zinc-900 dark:text-zinc-100">PV-TOM-SM-042</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supplier Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Truck size={20} className="text-zinc-500" />
                    Suppliers
                  </h3>
                  <button onClick={() => setCurrentStep(2)} className="text-[var(--primary)] text-sm font-bold hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edit <Edit2 size={14} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Primary Vendor</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800/50">IV</div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Italian Vineyards Ltd.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Lead Time</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">3 - 5 Business Days</p>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Banknote size={20} className="text-zinc-500" />
                    Pricing
                  </h3>
                  <button onClick={() => setCurrentStep(3)} className="text-[var(--primary)] text-sm font-bold hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edit <Edit2 size={14} />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Unit Cost</p>
                    <p className="text-base font-bold text-[var(--primary)]">₹12.40</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Markup</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">25%</p>
                  </div>
                  <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full my-1"></div>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">Selling Price</p>
                    <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">₹15.50</p>
                  </div>
                </div>
              </div>

              {/* Stock Settings Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Package size={20} className="text-zinc-500" />
                    Stock Settings
                  </h3>
                  <button onClick={() => setCurrentStep(4)} className="text-[var(--primary)] text-sm font-bold hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Edit <Edit2 size={14} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Min Stock</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">50 Units</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Max Stock</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">200 Units</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Aisle 4, Shelf B</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Alerts</p>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase border border-emerald-200 dark:border-emerald-800/50">Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Visual Preview */}
            <div className="mt-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-zinc-200 dark:border-zinc-800">
              <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-zinc-800">
                <img alt="San Marzano Tomatoes" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2l0xgYvBbhmQOW9OGVdXY0bpf-mKhWhy7w1QIb5Cm4_Hy6wHkyJ23MgK2gpf4ysNGiS6PGTQMbUSAdTENS89YmY7ITidVXnDEUCZGy_QKqASLiOdyeoZ-uq5XUyarwzvan6gcGR-pC8FJNyBqpquTcWFbNvN99to22mMzEgjsfjaUoaclfTj4imrI5lb_OSx69Lo7XzdnNY37cNBOScNlwBVrNbvVWtPtNhDmmPWMlwmvmvvm3Hj5ItoQXI-s7zFhbcdaz8mDre4"/>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-[var(--primary)] font-bold text-xs tracking-widest uppercase">Summary Preview</p>
                <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-none">Ready for Launch.</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
                  All data has been validated against the <span className="font-bold text-zinc-700 dark:text-zinc-300">Papa Veg Inventory Protocol</span>. Once confirmed, this item will be immediately available for recipe mapping and order fulfillment.
                </p>
              </div>
            </div>
          </div>
          )}
        </main>

        {/* Footer Section */}
        <footer className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-between items-center">
          {currentStep === 1 ? (
            <button 
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 bg-white dark:bg-zinc-950 shadow-sm"
            >
              Cancel
            </button>
          ) : (
            <button 
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 bg-white dark:bg-zinc-950 shadow-sm"
            >
              <ArrowLeft size={16} />
              Previous
            </button>
          )}

          {currentStep === 5 ? (
            <button 
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-bold rounded-lg bg-[var(--primary)] text-white shadow-md hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
            >
              Add to Inventory
              <PlusCircle size={18} />
            </button>
          ) : (
            <button 
              onClick={() => setCurrentStep(prev => Math.min(prev + 1, 5))}
              className="px-6 py-2.5 text-sm font-bold rounded-lg bg-[var(--primary)] text-white shadow-md hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
            >
              {currentStep === 1 ? "Next Step" : currentStep === 2 ? "Continue to Pricing" : currentStep === 3 ? "Continue to Storage" : currentStep === 4 ? "Continue to Review" : "Continue"}
              <ArrowRight size={16} />
            </button>
          )}
        </footer>

      </div>
    </div>
  );
}
