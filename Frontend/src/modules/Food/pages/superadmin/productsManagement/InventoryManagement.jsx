import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Package,
  TrendingUp,
  Wallet,
  ArrowRight,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import InventoryData from "./InventoryData";
import InventoryDetails from "./InventoryDetails";
import AddInventory from "./AddInventory";

export default function InventoryManagement() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Inventory Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Inventory Management</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage and monitor your pizza ingredients and kitchen supplies.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {/* <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm">
            <ShoppingCart size={18} />
            Purchase Order
          </button> */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md active:scale-95"
          >
            <Plus size={18} />
            Add Item
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Total Items */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group hover:border-[var(--primary)] transition-colors">
          <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
            <Package size={80} />
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 relative z-10">Total Items</p>
          <h3 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 relative z-10">156</h3>
          <div className="mt-4 flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold relative z-10">
            <TrendingUp size={16} />
            +4 this month
          </div>
        </div>

        {/* Card 2: Low Stock */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm border-t-4 border-t-amber-500">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Low Stock</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-black text-amber-500">12</h3>
            <span className="text-sm font-medium text-zinc-500">Items</span>
          </div>
          <div className="mt-4 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 px-2 py-1 rounded text-xs font-bold w-fit">
            REORDER SOON
          </div>
        </div>

        {/* Card 3: Out of Stock */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm border-t-4 border-t-red-500">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Out of Stock</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-black text-red-600 dark:text-red-400">3</h3>
            <span className="text-sm font-medium text-zinc-500">Critical</span>
          </div>
          <div className="mt-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 px-2 py-1 rounded text-xs font-bold w-fit">
            URGENT ACTION
          </div>
        </div>

        {/* Card 4: Pending POs */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Pending POs</p>
          <h3 className="text-4xl font-black text-zinc-900 dark:text-zinc-100">8</h3>
          <p className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            3 Arriving Today
          </p>
        </div>

        {/* Card 5: Inventory Value */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-[var(--primary)] opacity-[0.02] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 relative z-10">Total Value</p>
          <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 relative z-10">₹12,450.25</h3>
          <div className="mt-4 flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs font-bold relative z-10">
            <Wallet size={16} />
            Asset Valuation
          </div>
        </div>
      </div>

      {/* Main Data Table */}
      <InventoryData onViewDetails={handleViewDetails} />

      {/* Bento Style Info Grid (Extra Details) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

        {/* Automated Reordering */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h4 className="text-base font-bold text-[var(--primary)] dark:text-red-400 mb-2">Automated Reordering</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">There are 4 items currently eligible for automated reordering based on your custom thresholds.</p>
          </div>
          <button className="mt-4 text-[var(--primary)] dark:text-red-400 font-bold flex items-center gap-1 text-sm hover:underline w-fit">
            Manage Rules <ArrowRight size={16} />
          </button>
        </div>

        {/* Inventory Insight */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-6 rounded-2xl relative overflow-hidden text-red-900 dark:text-red-100">
          <div className="relative z-10">
            <h4 className="text-base font-bold text-red-800 dark:text-red-400 mb-2">Inventory Insight</h4>
            <p className="text-sm font-medium opacity-90 leading-relaxed">
              Stock turnover has increased by 12% since adding the "Summer Spice" pizza variant. Monitor flour levels closely.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-[0.05] dark:opacity-10 text-[var(--primary)] dark:text-red-400">
            <Lightbulb size={120} strokeWidth={1} />
          </div>
        </div>

        {/* Stock Health */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">Stock Health Good</h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium px-4">
            92% of your high-volume ingredients are currently within safety margins.
          </p>
        </div>

      </div>

      {/* Inventory Details Drawer */}
      <InventoryDetails
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        item={selectedItem}
      />

      {/* Add Inventory Modal */}
      <AddInventory
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
