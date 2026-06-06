import React, { useState } from "react";
import { X, Edit, RefreshCw, ArrowLeftRight, Truck, Pizza, Utensils } from "lucide-react";

export default function InventoryDetails({ isOpen, onClose, item }) {
  const [activeTab, setActiveTab] = useState("stock");

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay for Drawer */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Inventory Details Drawer */}
      <aside className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-white dark:bg-zinc-950 z-[70] transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400"
            >
              <X size={20} />
            </button>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{item?.name || "Mozzarella Cheese"}</h2>
              <span className="text-xs text-zinc-500 font-medium mt-1 block">
                SKU: {item?.id || "CHS-MOZ-001"} • Category: {item?.category || "Dairy"}
              </span>
            </div>
          </div>
          <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-800/50">
            IN STOCK
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 px-4 bg-zinc-50 dark:bg-zinc-900/50 overflow-x-auto hide-scrollbar">
          {["stock", "movement", "recipes", "supplier"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab 
                  ? "text-[var(--primary)] border-[var(--primary)]" 
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 border-transparent"
              }`}
            >
              {tab === "stock" ? "Stock Summary" : tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* Stock Summary Tab Content */}
          {activeTab === "stock" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Current Stock Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Current Stock</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-zinc-900 dark:text-zinc-100">{parseFloat(item?.stock) || 150}</span>
                    <span className="text-sm font-bold text-zinc-500">kg</span>
                  </div>
                </div>
                {/* Reserved Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Reserved</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-red-600 dark:text-red-400">20</span>
                    <span className="text-sm font-bold text-zinc-500">kg</span>
                  </div>
                </div>
                {/* Available Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border-2 border-[var(--primary)] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Available</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[var(--primary)]">130</span>
                    <span className="text-sm font-bold text-zinc-500">kg</span>
                  </div>
                </div>
              </div>

              {/* Reorder Level Section */}
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Reorder Health</h3>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">Healthy Status</span>
                </div>
                <div className="relative w-full h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  {/* Progress Bar */}
                  <div className="absolute left-0 top-0 h-full bg-emerald-500 transition-all" style={{ width: "75%" }}></div>
                  {/* Marker for Reorder Level */}
                  <div className="absolute h-full w-1 bg-red-500 z-10" style={{ left: "33%" }}></div>
                </div>
                <div className="flex justify-between mt-3 text-xs font-bold">
                  <span className="text-zinc-500">Critical: 0kg</span>
                  <span className="text-red-600 dark:text-red-400">Reorder Level: 50kg</span>
                  <span className="text-zinc-500">Target: 200kg</span>
                </div>
              </div>

              {/* Visual Asset */}
              <div className="w-full h-48 rounded-xl overflow-hidden relative group border border-zinc-200 dark:border-zinc-800">
                <img 
                  alt={item?.name || "Ingredient"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={item?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBnG4y7g7umf5-bE8g4uQYLDS-NKtgykOn8NDpOReXdvCVdzgcSs2U3icGM5OyKuWl8M_Cq-pfwJCS3nIGx3U84sCWoaufE7hWNmyz-u4lFDPaYpHLTwdqm2joM0YNcoOR-9k0nk2hZWAy8krUlAA8hhaxelHUceuMmEjlQnFbLi6SJjLXan2XO_nmWa6JaKVPzFfn2gjW9EVxPIPSoLKUhLpb9sArs21iMoynLTy80_9e2BWlegzOLyuMc4KSL43zzddcVEQnVjMk"} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm">Premium {item?.name || "Buffalo Mozzarella"} (Cold Chain Required)</span>
                </div>
              </div>
            </div>
          )}

          {/* Recipes Tab Content */}
          {activeTab === "recipes" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">Usage in Recipes</h3>
              
              {/* Recipe Item 1 */}
              <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center border border-red-100 dark:border-red-900/30">
                    <Pizza className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Margherita Pizza</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Standard Large Size</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-black text-[var(--primary)]">150g</p>
                  <p className="text-xs font-medium text-zinc-500">per unit</p>
                </div>
              </div>
              
              {/* Recipe Item 2 */}
              <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center border border-amber-100 dark:border-amber-900/30">
                    <Utensils className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Cheese Burst</p>
                    <p className="text-xs text-zinc-500 mt-0.5">Sides / Appetizer</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-base font-black text-[var(--primary)]">250g</p>
                  <p className="text-xs font-medium text-zinc-500">per unit</p>
                </div>
              </div>
            </div>
          )}

          {/* Movement Placeholder */}
          {activeTab === "movement" && (
            <div className="flex flex-col items-center justify-center h-64 text-zinc-400 animate-in fade-in duration-300">
              <ArrowLeftRight size={48} strokeWidth={1} className="mb-4 text-zinc-300 dark:text-zinc-700" />
              <p className="text-sm font-medium text-zinc-500">Log of stock movements will appear here.</p>
            </div>
          )}

          {/* Supplier Placeholder */}
          {activeTab === "supplier" && (
            <div className="flex flex-col items-center justify-center h-64 text-zinc-400 animate-in fade-in duration-300">
              <Truck size={48} strokeWidth={1} className="mb-4 text-zinc-300 dark:text-zinc-700" />
              <p className="text-sm font-medium text-zinc-500">Primary and backup supplier contact details.</p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--primary)] text-white font-bold text-sm rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all">
            <Edit size={16} />
            Stock Adjustment
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95 transition-all">
            <RefreshCw size={16} />
            Stock Transfer
          </button>
        </div>
      </aside>
    </>
  );
}
