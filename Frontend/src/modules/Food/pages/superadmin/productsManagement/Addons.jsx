import React, { useState } from "react";
import { PlusCircle, Plus, ClipboardList, CheckCircle, AlertTriangle, TrendingUp, DollarSign, Layers, Edit2 } from "lucide-react";
import AddonsData from "./AddonsData";
import AddonsDetails from "./AddonsDetails";
import AddAddonsModal from "./AddAddonsModal";
import EditAddonsModal from "./EditAddonsModal";
import AddGroupAddons from "./AddGroupAddons";
import EditGroupAddons from "./EditGroupAddons";

export default function Addons() {
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddGroupModalOpen, setIsAddGroupModalOpen] = useState(false);
  const [isEditGroupModalOpen, setIsEditGroupModalOpen] = useState(false);
  const [selectedGroupToEdit, setSelectedGroupToEdit] = useState(null);
  const [selectedAddonToEdit, setSelectedAddonToEdit] = useState(null);

  const handleViewDetails = (addon) => {
    setSelectedAddon(addon);
    setIsDetailOpen(true);
  };

  const handleEditGroup = (group) => {
    setSelectedGroupToEdit(group);
    setIsEditGroupModalOpen(true);
  };

  const handleEditAddon = (addon) => {
    setSelectedAddonToEdit(addon);
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Top App Bar Equivalent Content */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
        <div className="space-y-0.5">
          <h1 className="text-lg font-bold text-black dark:text-white leading-tight">
            Add-ons & Toppings
          </h1>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">
            Manage extra options, toppings, and dips.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setIsAddGroupModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-lg font-bold text-[11px] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950 shadow-sm"
          >
            <PlusCircle size={14} />
            Add Group
          </button>
          <button
            onClick={() => {
              setSelectedAddonToEdit(null);
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg font-bold text-[11px] shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <Plus size={14} />
            Add Add-on
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4 select-none">
        {/* Total Add-ons */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Add-ons</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">84</h3>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
            <ClipboardList size={14} />
          </div>
        </div>

        {/* Active Add-ons */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Active Add-ons</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">72</h3>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/30">
            <CheckCircle size={14} />
          </div>
        </div>

        {/* Out Of Stock */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-t-2 border-t-red-500">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Out Of Stock</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-rose-600 dark:text-rose-455 mt-0.5">8</h3>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-red-500/10 text-rose-600 dark:text-rose-400 shrink-0 border border-red-100 dark:border-red-900/30">
            <AlertTriangle size={14} />
          </div>
        </div>

        {/* Most Used */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Most Used</span>
            <div className="flex items-baseline gap-1.5 flex-wrap mt-0.5">
              <h3 className="text-[11px] font-black text-black dark:text-white truncate">Extra Cheese</h3>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0 border border-orange-100 dark:border-orange-900/30">
            <TrendingUp size={14} />
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow sm:col-span-1 col-span-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Revenue</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">₹1,240.50</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> 12%
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-100 dark:border-blue-900/30">
            <DollarSign size={14} />
          </div>
        </div>
      </section>

      {/* Add-on Groups */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-black dark:text-white flex items-center gap-1.5">
          <Layers className="text-[var(--primary)]" size={14} />
          Add-on Groups
        </h3>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1.5">

          <div className="min-w-[240px] bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white">Cheese Add-ons</h4>
                <p className="text-black/70 dark:text-white/70 text-[10px] font-semibold mt-0.5">5 items</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleEditGroup({ name: 'Cheese Add-ons', min: 0, max: 3 }); }}
                className="text-black/50 hover:text-[var(--primary)] dark:text-white/50 dark:hover:text-[var(--primary)] transition-colors p-1"
              >
                <Edit2 size={12} />
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Min: 0</span>
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Max: 3</span>
            </div>
          </div>

          <div className="min-w-[240px] bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group border-t-2 border-t-orange-400">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white">Veg Toppings</h4>
                <p className="text-black/70 dark:text-white/70 text-[10px] font-semibold mt-0.5">12 items</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleEditGroup({ name: 'Veg Toppings', min: 0, max: 5 }); }}
                className="text-black/50 hover:text-[var(--primary)] dark:text-white/50 dark:hover:text-[var(--primary)] transition-colors p-1"
              >
                <Edit2 size={12} />
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Min: 0</span>
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Max: 5</span>
            </div>
          </div>

          <div className="min-w-[240px] bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xs font-bold text-black dark:text-white">Dips</h4>
                <p className="text-black/70 dark:text-white/70 text-[10px] font-semibold mt-0.5">4 items</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); handleEditGroup({ name: 'Dips', min: 0, max: 2 }); }}
                className="text-black/50 hover:text-[var(--primary)] dark:text-white/50 dark:hover:text-[var(--primary)] transition-colors p-1"
              >
                <Edit2 size={12} />
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Min: 0</span>
              <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-[9px] font-bold text-black/85 dark:text-white/85">Max: 2</span>
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
        onEdit={handleEditAddon}
      />

      {/* Add New Add-on Modal */}
      <AddAddonsModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Edit Add-on Modal */}
      <EditAddonsModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        addon={selectedAddonToEdit}
      />

      {/* Add New Group Modal */}
      <AddGroupAddons 
        isOpen={isAddGroupModalOpen}
        onClose={() => setIsAddGroupModalOpen(false)}
      />

      {/* Edit Group Modal */}
      <EditGroupAddons
        isOpen={isEditGroupModalOpen}
        onClose={() => setIsEditGroupModalOpen(false)}
        group={selectedGroupToEdit}
      />
    </div>
  );
}
