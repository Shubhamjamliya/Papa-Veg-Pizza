import React, { useState } from "react";
import { X, Lock, User } from "lucide-react";

export default function AddRegionModal({ isOpen, onClose, onSaveRegion }) {
  const [regionName, setRegionName] = useState("");
  const [regionCode, setRegionCode] = useState("REG-PNQ-001");
  const [state, setState] = useState("");
  const [manager, setManager] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRegion = {
      regionName,
      regionCode,
      state,
      manager,
      description,
      isActive,
    };
    if (onSaveRegion) {
      onSaveRegion(newRegion);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white dark:bg-zinc-955 w-full max-w-lg max-h-[100dvh] overflow-y-auto rounded-none md:rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col h-full md:h-auto border border-transparent md:border-zinc-200 dark:md:border-zinc-800">
        
        {/* Modal Header */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-start sticky top-0 bg-white dark:bg-zinc-955 z-10 shrink-0">
          <div>
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Add Region</h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Configure geographical boundaries and regional management.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-3.5 space-y-3.5 flex-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Region Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider" htmlFor="region_name">Region Name</label>
              <input 
                id="region_name" 
                type="text" 
                value={regionName}
                onChange={(e) => setRegionName(e.target.value)}
                placeholder="e.g., Central Pune Cluster" 
                required
                className="h-9 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
              />
            </div>
            
            {/* Region Code (Locked) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider" htmlFor="region_code">Region Code</label>
              <div className="relative">
                <input 
                  id="region_code" 
                  type="text" 
                  value={regionCode}
                  disabled 
                  className="w-full h-9 pl-3 pr-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 text-xs font-mono text-zinc-500 dark:text-zinc-400 cursor-not-allowed"
                />
                <Lock size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>
            </div>

            {/* State Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider" htmlFor="state">State</label>
              <select 
                id="state" 
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="h-9 px-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
              >
                <option disabled value="">Select State</option>
                <option value="MH">Maharashtra</option>
                <option value="KA">Karnataka</option>
                <option value="DL">Delhi</option>
                <option value="TG">Telangana</option>
              </select>
            </div>

            {/* Region Manager */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider" htmlFor="manager">Region Manager</label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  id="manager" 
                  type="text" 
                  value={manager}
                  onChange={(e) => setManager(e.target.value)}
                  placeholder="Search manager..." 
                  required
                  className="w-full h-9 pl-8 pr-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Description Area */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider" htmlFor="description">Description</label>
            <textarea 
              id="description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter regional notes, specific coverage areas, or management details..." 
              rows="2" 
              className="p-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none min-h-[70px]"
            ></textarea>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between p-2.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-800 shrink-0">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Region Status</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">Set the operational availability of this region</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 dark:after:border-zinc-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
            </label>
          </div>
          
          {/* Modal Footer (pushed to bottom if space allows, though flex-1 on container handles space) */}
          <div className="mt-auto pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-end gap-2.5 shrink-0">
            <button 
              type="button"
              onClick={onClose}
              className="order-2 sm:order-1 h-9 px-4 border border-zinc-300 dark:border-zinc-700 rounded-lg font-bold text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="order-1 sm:order-2 h-9 px-6 bg-[var(--primary)] text-white rounded-lg font-bold text-xs hover:brightness-110 shadow-md transition-all active:scale-95"
            >
              Save Region
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
