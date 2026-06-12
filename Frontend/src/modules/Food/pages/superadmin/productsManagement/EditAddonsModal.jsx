import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Info, Settings, Image as ImageIcon, Banknote, Activity, Minus, Plus, Smartphone, Monitor, Store, UploadCloud } from 'lucide-react';

export default function EditAddonsModal({ isOpen, onClose, addon }) {
  const [addonName, setAddonName] = useState("");
  const [addonGroup, setAddonGroup] = useState("Veg Toppings");
  const [addonType, setAddonType] = useState("Topping");
  const [status, setStatus] = useState("Active");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("2.50");
  const [stock, setStock] = useState("45");
  
  const [portalTarget, setPortalTarget] = useState(null);

  useEffect(() => {
    const target = document.getElementById('admin-main-content');
    if (target) {
      setPortalTarget(target);
    }
  }, [isOpen]);

  useEffect(() => {
    if (addon && isOpen) {
      setAddonName(addon.name || "");
      setAddonGroup(addon.group || "Veg Toppings");
      setAddonType(addon.type || "Topping");
      setStatus(addon.status || "Active");
      setPrice(addon.price ? addon.price.replace(/[^0-9.]/g, '') : "2.50");
      setStock(addon.stock ? addon.stock.toString().replace(/[^0-9]/g, '') : "45");
      // Other fields can be mapped here as well
    }
  }, [addon, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    alert("Add-on updated successfully!");
    onClose();
  };

  const modalContent = (
    <div className="absolute inset-0 z-[60] flex items-center justify-center sm:p-6 bg-black/40 dark:bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-5xl bg-white dark:bg-zinc-900 sm:rounded-xl shadow-xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 z-10 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              aria-label="Close" 
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors active:scale-90"
            >
              <X className="text-zinc-500 dark:text-zinc-400" size={20} />
            </button>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Edit Add-on</h1>
          </div>
          <button onClick={handleSave} className="bg-[var(--primary)] text-white font-bold text-sm px-6 py-2 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-sm hidden sm:block">
            Save Changes
          </button>
        </header>

        {/* Scrollable Body */}
        <main className="flex-1 overflow-y-auto hide-scrollbar p-4 sm:p-8 space-y-8 bg-zinc-50 dark:bg-zinc-950">
          
          {/* Basic Information */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Info className="text-[var(--primary)]" size={20} />
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Basic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Add-on Name</label>
                  <input 
                    className="w-full h-12 px-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all placeholder:text-zinc-400" 
                    placeholder="e.g., Extra Cheese" 
                    value={addonName}
                    onChange={(e) => setAddonName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Group</label>
                  <select 
                    value={addonGroup}
                    onChange={(e) => setAddonGroup(e.target.value)}
                    className="w-full h-12 px-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all"
                  >
                    <option>Veg Toppings</option>
                    <option>Cheese Add-ons</option>
                    <option>Dips</option>
                    <option>Beverages</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Type</label>
                  <select 
                    value={addonType}
                    onChange={(e) => setAddonType(e.target.value)}
                    className="w-full h-12 px-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all"
                  >
                    <option>Topping</option>
                    <option>Add-on</option>
                    <option>Dip</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full h-12 px-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all"
                  >
                    <option value="Active">Active</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Image Upload</label>
                  <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-6 flex flex-col items-center justify-center gap-3 bg-zinc-50 dark:bg-zinc-950/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer relative h-[142px]">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center">
                      <UploadCloud size={24} />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Upload Image</p>
                      <p className="text-xs text-zinc-500">PNG, JPG up to 2MB</p>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Description</label>
                <textarea 
                  rows="3"
                  className="w-full p-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all placeholder:text-zinc-400 resize-none" 
                  placeholder="Short description for the customer..." 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Pricing & Inventory */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm border-t-4 border-t-emerald-500">
            <div className="flex items-center gap-2 mb-6">
              <Banknote className="text-emerald-500" size={20} />
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Pricing & Stock</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₹</span>
                  <input 
                    className="w-full h-12 pl-8 pr-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all tabular-nums" 
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Stock (Units)</label>
                <div className="relative">
                  <input 
                    className="w-full h-12 px-4 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 border rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all tabular-nums" 
                    type="number"
                    min="0"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">units</span>
                </div>
              </div>
            </div>
          </section>


        </main>

        {/* Bottom Actions (Mobile) */}
        <footer className="sm:hidden p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex gap-4 shrink-0 z-10">
          <button 
            onClick={onClose}
            className="flex-1 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold py-3 rounded-lg active:scale-95 transition-transform text-sm"
          >
            Cancel
          </button>
          <button onClick={handleSave} className="flex-1 bg-[var(--primary)] text-white font-bold py-3 rounded-lg shadow-md active:scale-95 transition-transform text-sm">
            Save Changes
          </button>
        </footer>
      </div>
    </div>
  );

  return portalTarget ? createPortal(modalContent, portalTarget) : modalContent;
}
