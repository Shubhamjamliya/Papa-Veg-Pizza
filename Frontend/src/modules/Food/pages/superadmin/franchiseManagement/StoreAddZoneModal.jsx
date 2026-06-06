import React, { useState } from "react";
import { X, Lock, ChevronDown, Search } from "lucide-react";

export default function StoreAddZoneModal({ isOpen, onClose }) {
  const [isActive, setIsActive] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/40 dark:bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Add Zone</h3>
            <p className="text-sm text-zinc-500 mt-1">Configure delivery boundaries and management</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 flex-1">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Zone Name */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Zone Name</label>
              <input 
                className="w-full h-10 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm" 
                placeholder="e.g. North Harbor Sector" 
                type="text"
              />
            </div>

            {/* Zone Code */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Zone Code</label>
              <div className="relative">
                <input 
                  className="w-full h-10 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 font-mono text-sm cursor-not-allowed outline-none" 
                  readOnly
                  type="text" 
                  value="ZNE-8829-NYC"
                />
                <Lock size={16} className="absolute right-3 top-3 text-zinc-400" />
              </div>
            </div>

            {/* Region */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Region</label>
              <div className="relative">
                <select className="w-full h-10 px-4 pr-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none appearance-none transition-all text-sm">
                  <option value="">Select Region</option>
                  <option value="ne">Northeast Metropolitan</option>
                  <option value="cbd">Central Business District</option>
                  <option value="ws">Western Suburbs</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-zinc-400 pointer-events-none" />
              </div>
            </div>

            {/* Zone Manager */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Zone Manager</label>
              <div className="relative">
                <input 
                  className="w-full h-10 px-4 pl-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm" 
                  placeholder="Search managers..." 
                  type="text"
                />
                <Search size={16} className="absolute left-3 top-3 text-zinc-400" />
              </div>
            </div>

            {/* Delivery Coverage Radius */}
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Delivery Coverage Radius</label>
              <div className="relative">
                <input 
                  className="w-full h-10 px-4 pr-12 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm" 
                  placeholder="5.0" 
                  type="number"
                  step="0.1"
                />
                <span className="absolute right-3 top-3 text-xs font-bold text-zinc-400">KM</span>
              </div>
            </div>

            {/* Status Toggle */}
            <div className="md:col-span-1 flex flex-col justify-center mt-2">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Status</label>
              <div className="flex items-center gap-3 h-10">
                <button
                  type="button"
                  onClick={() => setIsActive(!isActive)}
                  className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                    isActive ? "bg-[var(--primary)]" : "bg-zinc-200 dark:bg-zinc-700"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                      isActive ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
                <span className={`text-sm ${isActive ? "text-[var(--primary)] font-bold" : "text-zinc-500"}`}>
                  {isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Description</label>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm resize-none" 
                placeholder="Enter zone details, operating hours, and specific delivery instructions..." 
                rows="3"
              ></textarea>
            </div>
            
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-sm font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            Cancel
          </button>
          <button 
            className="bg-[var(--primary)] text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 shadow-md transition-all active:scale-[0.98]"
          >
            Save Zone
          </button>
        </div>

      </div>
    </div>
  );
}
