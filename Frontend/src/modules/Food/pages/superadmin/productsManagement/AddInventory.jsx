import React, { useState } from "react";
import { Package, X, Edit2, ChevronDown, Camera, ArrowRight } from "lucide-react";

export default function AddInventory({ isOpen, onClose }) {
  const [itemName, setItemName] = useState("");
  const [isActive, setIsActive] = useState(true);

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
              <p className="text-xs font-medium text-zinc-500 mt-1">Step 1: Basic Information</p>
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
            {/* Step 1 (Active) */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--primary)] text-white font-bold shadow-md text-sm">1</div>
              <span className="ml-2 text-sm font-bold text-[var(--primary)]">Basic Info</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-[var(--primary)]"></div>
            
            {/* Step 2 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500 font-bold text-sm">2</div>
              <span className="ml-2 text-sm font-bold text-zinc-500">Suppliers</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-zinc-200 dark:bg-zinc-800"></div>
            
            {/* Step 3 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500 font-bold text-sm">3</div>
              <span className="ml-2 text-sm font-bold text-zinc-500">Pricing</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-zinc-200 dark:bg-zinc-800"></div>
            
            {/* Step 4 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500 font-bold text-sm">4</div>
              <span className="ml-2 text-sm font-bold text-zinc-500">Storage</span>
            </div>
            <div className="h-[2px] flex-grow mx-2 bg-zinc-200 dark:bg-zinc-800"></div>
            
            {/* Step 5 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-500 font-bold text-sm">5</div>
              <span className="ml-2 text-sm font-bold text-zinc-500">Review</span>
            </div>
          </div>
        </nav>

        {/* Form Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 hide-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
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
        </main>

        {/* Footer Section */}
        <footer className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-95 bg-white dark:bg-zinc-950 shadow-sm"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-bold rounded-lg bg-[var(--primary)] text-white shadow-md hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
            Next Step
            <ArrowRight size={16} />
          </button>
        </footer>

      </div>
    </div>
  );
}
