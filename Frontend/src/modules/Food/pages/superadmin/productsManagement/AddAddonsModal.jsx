import React, { useState } from "react";
import { X, CloudUpload, ChevronDown, ArrowRight, Utensils, Leaf, Image as ImageIcon, Lightbulb } from "lucide-react";

export default function AddAddonsModal({ isOpen, onClose }) {
  const [addonName, setAddonName] = useState("");
  const [isActive, setIsActive] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      {/* Modal Container */}
      <div className="w-full max-w-5xl flex flex-col xl:flex-row items-stretch justify-center gap-6 animate-in fade-in zoom-in duration-300">
        
        {/* Main Wizard Card */}
        <div className="w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden flex flex-col">
          {/* Wizard Header & Progress */}
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Add New Add-on</h2>
                <p className="text-sm text-zinc-500 mt-1">Configure custom toppings and extra sides.</p>
              </div>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Step Indicator */}
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[var(--primary)]">Step 1: Basic Details</span>
                  <span className="text-zinc-500">Step 1 of 6</span>
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-[var(--primary)] h-full w-1/6 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Wizard Form Body */}
          <form className="p-6 space-y-6 flex-1 overflow-y-auto" onSubmit={(e) => e.preventDefault()}>
            {/* Bento Layout for Form Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Details */}
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="addon-name">Add-on Name</label>
                  <input 
                    id="addon-name" 
                    type="text" 
                    value={addonName}
                    onChange={(e) => setAddonName(e.target.value)}
                    className="w-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                    placeholder="e.g. Spicy Jalapenos" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="addon-type">Type</label>
                  <div className="relative">
                    <select 
                      id="addon-type"
                      className="w-full appearance-none border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none transition-all cursor-pointer"
                    >
                      <option>Topping</option>
                      <option>Add-on</option>
                      <option>Dip</option>
                      <option>Extra Ingredient</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={16} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div>
                    <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">Active Status</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Availability on menu</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                  </label>
                </div>
              </div>

              {/* Right Column: Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Image Upload</label>
                <div className="group relative border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-6 flex flex-col items-center justify-center gap-3 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all cursor-pointer min-h-[200px]">
                  <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <CloudUpload size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Upload Topping Image</p>
                    <p className="text-xs text-zinc-500 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                  <input className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                </div>
              </div>
            </div>

            {/* Description Field (Full Width) */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="description">Description</label>
              <textarea 
                id="description" 
                rows="3"
                className="w-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none transition-all resize-none" 
                placeholder="Describe the topping for the customer menu..." 
              ></textarea>
            </div>

            {/* Visual Accent & Footer Actions */}
            <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Utensils className="text-red-600 dark:text-red-400" size={14} />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Leaf className="text-emerald-600 dark:text-emerald-400" size={14} />
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button 
                  type="button"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-6 py-2 text-sm font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all active:scale-95 shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="flex-1 sm:flex-none px-6 py-2 text-sm font-bold bg-[var(--primary)] text-white rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Next Step
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Preview Card (Asymmetric Layout/Bento Element) */}
        <div className="hidden xl:flex flex-col w-72 space-y-4 shrink-0">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-xl">
            <div className="aspect-square w-full rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-4 relative flex items-center justify-center">
              <img 
                alt="Preview" 
                className={`object-cover w-full h-full transition-all duration-500 ${addonName ? "opacity-100" : "opacity-20 grayscale"}`} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwydorpEAvXqO1VpBon9IDZRvj5-eOSjY47dPCyG6AnXAT9BXMhqdP3iZgi9V2LXu1vM_lj2aCvB7uWSbgX8NwlPGbBhlvFxMVsZxqMOEhLZJ367epsw2A8htMldfqTF81l40KxnZ6NlXqpT0M5oJuEbPCyz-n8IKHKXIqRibCgrEzgmJ_VzyKySsIklQJFgxo0rDKQFPSEpOlEHNXzymoQRnSPthag6yluJbVJFN5dHIE6GdVBTFGtBT6-LAngKRA2A4tqzK2Y9o"
              />
              {!addonName && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="text-zinc-400" size={48} strokeWidth={1} />
                </div>
              )}
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 truncate">{addonName || "Preview"}</h3>
            <p className="text-xs text-zinc-500 mt-1">Live preview updates as you fill out the details on the left.</p>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4 shadow-xl">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-500 mb-2">
              <Lightbulb size={18} />
              <span className="text-sm font-bold">Pro Tip</span>
            </div>
            <p className="text-xs font-medium text-amber-900/70 dark:text-amber-200/70 leading-relaxed">
              Adding a descriptive, appetizing name increases customer conversion by up to 15%.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
