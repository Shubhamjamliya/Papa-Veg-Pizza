import React, { useState } from "react";
import { PlusCircle, Plus, ClipboardList, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Layers, Edit2 } from "lucide-react";
import AddonsData from "./AddonsData";
import AddonsDetails from "./AddonsDetails";
import AddAddonsModal from "./AddAddonsModal";

export default function Addons() {
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleViewDetails = (addon) => {
    setSelectedAddon(addon);
    setIsDetailOpen(true);
  };
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Top App Bar Equivalent Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] dark:text-red-400">Add-ons & Toppings</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage extra options, toppings, and dips.</p>
        </div>
        <div className="flex gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[var(--primary)] text-[var(--primary)] rounded-xl font-bold text-sm hover:bg-[var(--primary)]/10 transition-colors bg-white dark:bg-zinc-950 shadow-sm">
            <PlusCircle size={18} />
            Add Group
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex flex-1 sm:flex-none justify-center items-center gap-2 px-6 py-2 bg-[var(--primary)] text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <Plus size={18} />
            Add Add-on
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Total Add-ons</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">84</span>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
              <ClipboardList className="text-[var(--primary)]" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Active Add-ons</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">72</span>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
              <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm border-t-4 border-t-red-500 flex flex-col justify-between">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Out Of Stock</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-black text-red-600 dark:text-red-400">8</span>
            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Most Used</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 truncate pr-2">Extra Cheese</span>
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg shrink-0">
              <TrendingUp className="text-orange-600 dark:text-orange-400" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Revenue</span>
          <div className="flex items-end justify-between mt-2">
            <div>
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">$1,240.50</span>
              <p className="text-emerald-600 font-bold text-xs flex items-center gap-1 mt-1">
                <TrendingUp size={12} /> 12%
              </p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
              <DollarSign className="text-[var(--primary)]" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Add-on Groups */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Layers className="text-[var(--primary)]" size={20} />
          Add-on Groups
        </h3>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          
          <div className="min-w-[280px] bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Cheese Add-ons</h4>
                <p className="text-zinc-500 text-xs font-bold mt-1">5 items</p>
              </div>
              <Edit2 className="text-zinc-400 group-hover:text-[var(--primary)] transition-colors" size={18} />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Min: 0</span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Max: 3</span>
            </div>
          </div>
          
          <div className="min-w-[280px] bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group border-t-4 border-t-orange-400">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Veg Toppings</h4>
                <p className="text-zinc-500 text-xs font-bold mt-1">12 items</p>
              </div>
              <Edit2 className="text-zinc-400 group-hover:text-[var(--primary)] transition-colors" size={18} />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Min: 0</span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Max: 5</span>
            </div>
          </div>
          
          <div className="min-w-[280px] bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Dips</h4>
                <p className="text-zinc-500 text-xs font-bold mt-1">4 items</p>
              </div>
              <Edit2 className="text-zinc-400 group-hover:text-[var(--primary)] transition-colors" size={18} />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Min: 0</span>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs font-bold text-zinc-700 dark:text-zinc-300">Max: 2</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Main Items Table */}
      <AddonsData onViewDetails={handleViewDetails} />
      
      {/* Addon Details Drawer */}
      <AddonsDetails 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        addon={selectedAddon} 
      />

      {/* Add New Add-on Modal */}
      <AddAddonsModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
    </div>
  );
}
