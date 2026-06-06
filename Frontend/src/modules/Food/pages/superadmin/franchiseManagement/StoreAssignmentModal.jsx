import React, { useState } from "react";
import { X, Search, ChevronRight, ChevronLeft, MinusCircle, CheckCircle, ChevronDown } from "lucide-react";

export default function StoreAssignmentModal({ isOpen, onClose }) {
  const [availableStores, setAvailableStores] = useState([
    { id: "241", name: "5th Ave", location: "Midtown Manhattan, NY", selected: false },
    { id: "102", name: "Broadway", location: "Lower Manhattan, NY", selected: false },
    { id: "089", name: "Brooklyn", location: "Williamsburg, NY", selected: false },
    { id: "302", name: "Queens", location: "Astoria, NY", selected: false }
  ]);

  const [assignedStores, setAssignedStores] = useState([
    { id: "442", name: "Chelsea", location: "Manhattan, NY" },
    { id: "119", name: "Soho", location: "Manhattan, NY" },
    { id: "004", name: "Wall St", location: "Manhattan, NY" }
  ]);

  if (!isOpen) return null;

  const toggleAvailableSelect = (id) => {
    setAvailableStores(prev => 
      prev.map(store => store.id === id ? { ...store, selected: !store.selected } : store)
    );
  };

  const handleAssign = () => {
    const selectedStores = availableStores.filter(s => s.selected).map(s => ({...s, selected: undefined}));
    if (selectedStores.length === 0) return;
    
    setAssignedStores(prev => [...prev, ...selectedStores]);
    setAvailableStores(prev => prev.filter(s => !s.selected));
  };

  const handleRemove = (id) => {
    const storeToRemove = assignedStores.find(s => s.id === id);
    if (!storeToRemove) return;

    setAssignedStores(prev => prev.filter(s => s.id !== id));
    setAvailableStores(prev => [...prev, { ...storeToRemove, selected: false }]);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/40 dark:bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Store Assignment</h2>
            <p className="text-sm text-zinc-500 mt-1">Configure regional boundaries and assign store locations.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {/* Selection Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Region</label>
              <select className="w-full h-10 px-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100">
                <option>Northwest Metro</option>
                <option>Southeast Coast</option>
                <option>Central Plains</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Target Zone</label>
              <select className="w-full h-10 px-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100">
                <option>Zone A - Downtown Core</option>
                <option>Zone B - Suburban North</option>
                <option>Zone C - Industrial East</option>
              </select>
            </div>
          </div>

          {/* Dual List Layout */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-center h-auto md:h-[400px]">
            {/* Available Stores */}
            <div className="w-full md:flex-1 flex flex-col h-[300px] md:h-full border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 overflow-hidden">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                <div className="relative flex items-center">
                  <Search size={16} className="absolute left-3 text-zinc-400" />
                  <input 
                    className="w-full pl-9 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm focus:ring-1 focus:ring-[var(--primary)] outline-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-all" 
                    placeholder="Search available stores..." 
                    type="text"
                  />
                </div>
              </div>
              <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-700">
                Available Stores ({availableStores.length})
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
                {availableStores.map(store => (
                  <div 
                    key={store.id}
                    onClick={() => toggleAvailableSelect(store.id)}
                    className={`flex items-center gap-4 p-4 cursor-pointer transition-colors border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 ${
                      store.selected ? "bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10" : ""
                    }`}
                  >
                    <input 
                      type="checkbox"
                      checked={store.selected}
                      onChange={() => {}} // handled by parent div click
                      className="rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white dark:bg-zinc-900 w-4 h-4" 
                    />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Store #{store.id} - {store.name}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{store.location}</div>
                    </div>
                  </div>
                ))}
                {availableStores.length === 0 && (
                  <div className="p-6 text-center text-sm text-zinc-500">No stores available</div>
                )}
              </div>
            </div>

            {/* Transfer Controls */}
            <div className="flex flex-row md:flex-col gap-2 p-2">
              <button 
                onClick={handleAssign}
                disabled={availableStores.filter(s => s.selected).length === 0}
                className="w-10 h-10 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] text-zinc-500 dark:text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={20} className="hidden md:block" />
                <ChevronDown size={20} className="block md:hidden" />
              </button>
            </div>

            {/* Assigned Stores */}
            <div className="w-full md:flex-1 flex flex-col h-[300px] md:h-full border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 overflow-hidden">
              <div className="p-4 h-[73px] flex items-center border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Current Zone Selection</span>
              </div>
              <div className="px-4 py-2 bg-[var(--primary)]/10 text-xs font-bold text-[var(--primary)] border-b border-zinc-200 dark:border-zinc-700 uppercase tracking-wider">
                Assigned Stores ({assignedStores.length})
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
                {assignedStores.map(store => (
                  <div key={store.id} className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/20 border-b border-zinc-100 dark:border-zinc-800/50 group">
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Store #{store.id} - {store.name}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{store.location}</div>
                    </div>
                    <button 
                      onClick={() => handleRemove(store.id)}
                      className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                      title="Remove Store"
                    >
                      <MinusCircle size={20} />
                    </button>
                  </div>
                ))}
                {assignedStores.length === 0 && (
                  <div className="p-6 text-center text-sm text-zinc-500">No stores assigned to this zone</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-end items-center gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 font-bold text-sm rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-[var(--primary)] text-white font-bold text-sm rounded-lg shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <CheckCircle size={18} />
            Assign Stores
          </button>
        </div>
      </div>
    </div>
  );
}
