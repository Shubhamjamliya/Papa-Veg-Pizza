import React, { useState } from "react";
import { X, Star, Leaf, CheckCircle, PlusCircle, Check } from "lucide-react";

export default function ProductsDetail({ isOpen, onClose, product }) {
  const [activeTab, setActiveTab] = useState("Basic Info");

  if (!isOpen) return null;

  const tabs = [
    "Basic Info",
    "Pricing",
    "Customization",
    "Inventory",
    "Store Availability",
    "Images"
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      {/* Right-aligned Slide-out Drawer */}
      <div className="w-full md:w-[600px] h-full bg-white dark:bg-zinc-950 shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-right">
        
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between sticky top-0 bg-white dark:bg-zinc-950 z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {product ? product.name : "Paneer Tikka Pizza"}
              </h3>
              <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {product ? product.status : "Active"}
              </span>
            </div>
            <span className="text-zinc-500 text-sm mt-1">
              SKU: {product ? product.id : "PP-V-001"}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Tabs */}
        <div className="px-6 flex items-center overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-4 text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                  : "text-zinc-500 hover:text-[var(--primary)]"
              } ${tab === "Store Availability" ? "hidden md:block" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Drawer Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          
          {/* Main Image & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-inner aspect-video md:aspect-square">
              <img 
                alt="Product Hero" 
                className="w-full h-full object-cover" 
                src={product ? product.image : "https://lh3.googleusercontent.com/aida-public/AB6AXuAEC3i6IAhI8aY11t3pUM3XO2TEmZiyfNNJmX9YDCOqymttxuR-rj9ZHdtgzGepndx9vpkr-xaM5w5pqQzCXKTJHKuISPWe3bIlgpl1xiqMBRYx8HbpMmZ99S00zk3AR_gdAFBPZLsg0RxcNooVUN-qcEtFH-Gv5mtSrDKWlKn7TGpT5PRgtDhET-Rtxo8U_nOxrV_pl0YIMHtPTUFOHsItKjW6xNJpBWQDp3hGLoSn6kcIdVMEsykwWaJckCOwBQYfSyvS99gvblA"}
              />
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">CATEGORY</label>
                  <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Star size={18} className="text-orange-500 fill-orange-500" />
                    Signature Series
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">DIETARY TYPE</label>
                  <div className="text-base font-bold text-emerald-600 flex items-center gap-2">
                    <Leaf size={18} className="text-emerald-600 fill-emerald-600" />
                    Pure Vegetarian
                  </div>
                </div>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg">
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Description</label>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "Classic Indian fusion delight featuring marinated paneer cubes, spicy tikka masala base, crunchy capsicum, and premium mozzarella."
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Breakdowns Section */}
          <div className="mb-10">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2 border-l-4 border-[var(--primary)] pl-4">
              Pricing Breakdown
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm text-center">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">SMALL (7")</div>
                <div className="text-xl font-bold text-[var(--primary)]">₹199</div>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm text-center ring-2 ring-[var(--primary)]/20">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">MEDIUM (10")</div>
                <div className="text-xl font-bold text-[var(--primary)]">₹399</div>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm text-center">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">LARGE (12")</div>
                <div className="text-xl font-bold text-[var(--primary)]">₹599</div>
              </div>
            </div>
          </div>

          {/* Linked Add-ons */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 border-l-4 border-emerald-600 pl-4">
                Mandatory & Linked Add-ons
              </h4>
              <button className="text-[var(--primary)] text-sm font-bold hover:underline transition-all">Manage Options</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-emerald-600 fill-emerald-600/20" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Extra Cheese</span>
                </div>
                <span className="text-sm font-bold text-zinc-500">+₹40</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-emerald-600 fill-emerald-600/20" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Marinated Paneer</span>
                </div>
                <span className="text-sm font-bold text-zinc-500">+₹60</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-3">
                  <PlusCircle size={20} className="text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Olives Mix</span>
                </div>
                <span className="text-sm font-bold text-zinc-500">+₹30</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-3">
                  <PlusCircle size={20} className="text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Spicy Dip</span>
                </div>
                <span className="text-sm font-bold text-zinc-500">+₹20</span>
              </div>
            </div>
          </div>

          {/* Inventory Status */}
          <div className="mb-6 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">Inventory Tracking</h4>
                <p className="text-sm text-zinc-500">Stock alerts and automated reordering.</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1.5 rounded-full">
                <Check size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">IN STOCK</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">CURRENT QTY (DAILY)</span>
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {product ? product.stock : "1,240"} <small className="text-sm font-medium text-zinc-500">units</small>
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">LOW STOCK THRESHOLD</span>
                <span className="text-2xl font-bold text-red-500">
                  150 <small className="text-sm font-medium text-red-400">units</small>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <button className="px-4 py-2.5 md:px-6 md:py-3 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 rounded-xl font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            Discontinue Item
          </button>
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="px-4 py-2.5 md:px-6 md:py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-[var(--primary)] text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
