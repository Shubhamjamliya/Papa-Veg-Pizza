import React, { useState } from "react";
import { X, Star, Leaf, CheckCircle, PlusCircle, Check, Banknote, TrendingUp, ClipboardList, Edit, ChevronLeft, ChevronRight, Network, ExternalLink, TrendingDown, BookOpen, XCircle, Search, Map, Trash2, Camera, Info } from "lucide-react";

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
              className={`px-4 py-4 text-sm font-bold whitespace-nowrap transition-all ${activeTab === tab
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

          {activeTab === "Basic Info" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
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
          )}

          {/* Pricing Tab */}
          {activeTab === "Pricing" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Top Image Banner */}
              <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-8 shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Premium Continental Series"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaCUps39j9zvBXxBUOjRak2rf0_TMjS0OJTTAmFwlRoJwSfPOYQxDPsjKjvnT5ftQ39BmlJGoApt5ADIr18K00xy-jgejejgihX0wDhfTw-fRcKU_pNSUW0XJ062bT0dMaN-afmHx56RaKrjITqKdTTGDZauqBPIznZAEU2gVnreqL8nF6KZHfHi_2cSA-muVdF_bNdnVFqVirKLJA77Y8V6iCQ9fOjxAdbTCRp4PSzzvzfP4fw4F-LWhUdjEbuQfK25E7NoTW37U"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-lg font-bold">Premium Continental Series</span>
                </div>
              </div>

              {/* Pricing Breakdown Cards */}
              <div className="space-y-6 mb-8">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <Banknote className="text-[var(--primary)]" size={20} />
                  Size-Based Pricing Strategy
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {/* Small Size Card */}
                  <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[var(--primary)]/50 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 flex items-center justify-center font-bold text-sm">S</span>
                        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Small (7")</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">MRP</p>
                        <p className="text-2xl font-bold text-[var(--primary)]">₹199</p>
                      </div>
                    </div>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Base Cost</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹85.50</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Tax (5%)</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹9.95</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">Margin</p>
                        <p className="text-sm font-bold text-emerald-600">60.3%</p>
                      </div>
                    </div>
                  </div>

                  {/* Medium Size Card */}
                  <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[var(--primary)]/50 shadow-sm border-l-4 border-l-[var(--primary)]">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">M</span>
                        <div>
                          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Medium (10")</span>
                          <span className="ml-2 bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Popular</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">MRP</p>
                        <p className="text-2xl font-bold text-[var(--primary)]">₹399</p>
                      </div>
                    </div>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Base Cost</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹160.20</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Tax (5%)</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹19.95</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">Margin</p>
                        <p className="text-sm font-bold text-emerald-600">62.3%</p>
                      </div>
                    </div>
                  </div>

                  {/* Large Size Card */}
                  <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[var(--primary)]/50 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-sm">L</span>
                        <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Large (12")</span>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">MRP</p>
                        <p className="text-2xl font-bold text-[var(--primary)]">₹599</p>
                      </div>
                    </div>
                    <div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Base Cost</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹240.40</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">Tax (5%)</p>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">₹29.95</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-right">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">Margin</p>
                        <p className="text-sm font-bold text-emerald-600">61.4%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Insight Section */}
              <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <TrendingUp className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Healthy Profitability</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Current pricing model maintains an average margin of <span className="font-bold text-emerald-600">61.3%</span> across all sizes, which is 5% above franchise benchmark.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Customization Tab */}
          {activeTab === "Customization" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col gap-6">

                {/* Selection Rules Section (Top) */}
                <section className="flex flex-col gap-6">
                  <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <ClipboardList className="text-[var(--primary)]" size={24} />
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Selection Rules</h3>
                    </div>
                    <div className="space-y-6">
                      {/* Required Toggle */}
                      <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <div>
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Required Selection</p>
                          <p className="text-xs text-zinc-500 mt-1">Customer must pick at least one</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                        </label>
                      </div>

                      {/* Min/Max Limits */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Min Selection</label>
                          <input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all" type="number" defaultValue="1" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Max Selection</label>
                          <input className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all" type="number" defaultValue="5" />
                        </div>
                      </div>


                    </div>
                  </div>

                  {/* Quick Summary Card */}
                  <div className="bg-zinc-100 dark:bg-zinc-800/80 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700">
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Active Toppings</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black leading-none text-[var(--primary)]">08</span>
                      <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Available</span>
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-white dark:bg-zinc-950 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-3/4"></div>
                    </div>
                  </div>
                </section>

                {/* Available Add-ons List (Bottom) */}
                <section className="flex flex-col gap-4">
                  <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Available Toppings & Add-ons</h3>
                      <button className="text-[var(--primary)] text-sm font-bold flex items-center gap-2 hover:underline">
                        <PlusCircle size={18} />
                        Create New
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-zinc-50/50 dark:bg-zinc-800/30">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider w-12">Enable</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-zinc-500 uppercase tracking-wider">Topping Name</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-zinc-500 uppercase tracking-wider">Add. Price</th>
                            <th className="px-6 py-3 text-center text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-zinc-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                          {/* Item: Extra Cheese */}
                          <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors group">
                            <td className="px-6 py-4">
                              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 bg-white dark:bg-zinc-950 cursor-pointer" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                                  <img alt="Extra Cheese" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOvmZBWWBOvzrn9tgG26bM-Pv0ID6pA_-y8MOnH5cz5pfobIswfBvFS8v_OHQBdwPoqi2NpEojmIB7uTf1AE7-agQtC0g2dnP3AwVznSMHzBycnydMYOQ_CcRI4_wvzNGrO0fh-noTm1HBFX19j0roR_OYuAYMn4SL6eDwZFeD2iMThh-dkci3Ts8-V0C-oy-3IM2vQydJBJWfGdoYbi6lEUTTpFCUN2MhgLtHFRCm1_S0CKgda10z78orgyqnKM469W5t8jEBiVo" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Extra Cheese</p>
                                  <p className="text-xs font-medium text-zinc-500 mt-0.5">Premium Mozzarella</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">+₹45.00</td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">IN STOCK</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="p-2 text-zinc-400 hover:text-[var(--primary)] transition-colors rounded-full hover:bg-[var(--primary)]/10"><Edit size={18} /></button>
                            </td>
                          </tr>

                          {/* Item: Paneer Cubes */}
                          <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors group">
                            <td className="px-6 py-4">
                              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 bg-white dark:bg-zinc-950 cursor-pointer" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                                  <img alt="Paneer Cubes" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWP5D1qKAkHtIULulQbBPB8qru3Xxzv9o6EtHhdGnrk5N7U6x0_-PPECLeoIvLJH4xRLwRWxQA9LaHKv1Yj3T3hGkig88VXTckdebXls0DGu6vRbMHLzYua8dIwc1tzrm8w0zrefFm-W_AnRSXTZpqzc0VHP81tb9KKxPs1uLA2pUzXCDixTXeF5QQwwfOY483GD3ZpWaK8OJTG4eQ94BlxU6LzVLKk70FhlMR--JxNl0S5dBqnqB7GK5udH016aKR4jdVcelHj4o" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Paneer Cubes</p>
                                  <p className="text-xs font-medium text-zinc-500 mt-0.5">Tandoori Marinated</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">+₹60.00</td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">IN STOCK</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="p-2 text-zinc-400 hover:text-[var(--primary)] transition-colors rounded-full hover:bg-[var(--primary)]/10"><Edit size={18} /></button>
                            </td>
                          </tr>

                          {/* Item: Sweet Corn */}
                          <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors group">
                            <td className="px-6 py-4">
                              <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 bg-white dark:bg-zinc-950 cursor-pointer" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                                  <img alt="Sweet Corn" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRr0-8LBGuh9XTByGt98K0k4GTZpLt2KSwTG10NOQWw0wBfp2M_nzGcQm7t1olXi-dqToF8GWhsqCPBsr1-CfFsPsfeaY6KShbOd8Vrg7ukRz6dYctvIJS1A3Tlw02V1aOT_Hg_OQj1SS8EdG931hh6VVNzwJyrUH9_4ax6fXPLQ2FyYAJ1LG3nEsUbEiz6XztIdI42CNMHARd5UbMtoT4FoKrOaT9Ud7fmrvqLe9tA6ZMD7M3jbJ1X41FZ9kNT9q527Cbau6tCXA" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Sweet Corn</p>
                                  <p className="text-xs font-medium text-zinc-500 mt-0.5">Golden American Corn</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium text-zinc-900 dark:text-zinc-100">+₹35.00</td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">IN STOCK</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="p-2 text-zinc-400 hover:text-[var(--primary)] transition-colors rounded-full hover:bg-[var(--primary)]/10"><Edit size={18} /></button>
                            </td>
                          </tr>

                          {/* Item: Red Paprika */}
                          <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors group">
                            <td className="px-6 py-4">
                              <input type="checkbox" className="w-5 h-5 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)]/20 bg-white dark:bg-zinc-950 cursor-pointer" />
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 grayscale opacity-50">
                                  <img alt="Red Paprika" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllNP6MjiNVRA1LILIg1Hw-l7dcVw7ifTNgjwVr3tMP2xMCuObtb9L0fdlh2bnJOwFhaelLmnONHx4VHBx9l5mBox40kK6tLzcZPUjoJ3LDELrEtnnM4YXJYC5dNwlA_ZnY2g8Oatp_qrorYN7CTSsYMix_JAMrPmBoYw9ng1kma3Plb8e2_vfynz-ip5b1ZO9exIpxiWciJrLGlK4FdCNv9NI8r7PKCnOWzey5yeVAWKy2ZesYxX6Nhr8lh-CUbot8TpIMR1aVdA" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-zinc-500">Red Paprika</p>
                                  <p className="text-xs font-medium text-zinc-400 mt-0.5">Spicy Slices</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium text-zinc-500">+₹40.00</td>
                            <td className="px-6 py-4 text-center">
                              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-bold rounded-full uppercase tracking-wider border border-red-200 dark:border-red-800/50">OUT OF STOCK</span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="p-2 text-zinc-400 hover:text-[var(--primary)] transition-colors rounded-full hover:bg-[var(--primary)]/10"><Edit size={18} /></button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination / Bulk Actions footer for the table */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 gap-4">
                    <div className="flex gap-4 items-center w-full sm:w-auto">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider hidden sm:block">Bulk Actions:</span>
                      <select className="bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-medium text-zinc-900 dark:text-zinc-100 px-4 py-2 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none flex-1 sm:flex-none transition-all">
                        <option>Change Availability</option>
                        <option>Update Price</option>
                        <option>Delete</option>
                      </select>
                      <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-colors shadow-sm">Apply</button>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Showing 1-4 of 12</span>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full text-zinc-500 transition-colors">
                          <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full text-zinc-500 transition-colors">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === "Inventory" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col gap-6">

                {/* Active Recipe / Linked Items Card */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Network className="text-[var(--primary)]" size={20} />
                      Linked Inventory Items
                    </h3>
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold text-zinc-500">3 Items Active</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                        <tr>
                          <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Ingredient</th>
                          <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Current Stock</th>
                          <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Reorder Point</th>
                          <th className="px-4 py-3"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {/* Mozzarella Row */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-4 py-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5AyTvyZ5O75FKRWQI_rxsFUEwgtOI8y3jijgWoZZJhx_WDLJLXs2h_qc0WD-avSa0pcg1kB6AbRRVr0aiuf4R-BELagmKLV85wJmKbgccSZ3qp8N6Rc8AP8oezkDqVHKxpUYXGZDXIj6X9kzT0yV9Fuc2V71qdhMBi-iVIP9wkny4NKDIAoHHIzyTIeoRoAYmeTI7uBV_3VTLEiuhnjg6T3-mcLOEyNiXjpRPSXsiG6xYnFwbBtAFuJhkRbE-LPwhl89-6PDdy4" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Mozzarella Cheese</p>
                              <p className="text-xs text-zinc-500 mt-0.5">SKU: INV-MOZ-01</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">42.5 kg</td>
                          <td className="px-4 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Healthy
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-zinc-500">15.0 kg</td>
                          <td className="px-4 py-4 text-right">
                            <button className="text-zinc-400 hover:text-[var(--primary)] transition-colors"><ExternalLink size={18} /></button>
                          </td>
                        </tr>
                        {/* Paneer Row */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-4 py-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrepWUOVErqBBWlEVlKp33wRWQB6OudeTOuSjMFpJsHOvMbR584P3-QDdbHSpa4GqfAKD-sIevwqkNOpZjDjIEJX1lbFQBAHs5s6CP2RpZrKsv5ze7HlGx3q4acMlHkLPibhydWDN0lfaXLUD02WkM0dvhFb2kElKR--Nen5wjKZ_afz4SM5fuq5cJJxD-YEUud14yn5fsPYVosh74YFKoJR3OM-A50yGTSUlh1qj9m6wILSWZxfNF7YFbQr1JTTKKHcqxppjnTRM" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Marinated Paneer</p>
                              <p className="text-xs text-zinc-500 mt-0.5">SKU: INV-PAN-TKA</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">5.2 kg</td>
                          <td className="px-4 py-4">
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Low Stock
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-zinc-500">8.0 kg</td>
                          <td className="px-4 py-4 text-right">
                            <button className="text-zinc-400 hover:text-[var(--primary)] transition-colors"><ExternalLink size={18} /></button>
                          </td>
                        </tr>
                        {/* Flour Row */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-4 py-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsF3DtXvDNrqzdxlffaUMQyXwiuQOOu0z737M8ZH0H9Xd6wzF-LBcZu7Flc6BuGNnA2myGq5YyAMEFoMbQMFlRb4FqFfVXFyI7ZKZhAFlhVvr6hGVyV1i_PsdvmMmmbXlUqERLCnml7fQ3tvT6hKx6E8qjYwohnDCUL-uI4Bdh7zYZ_EjHBiiYy2U-Tl4_1f9H0RdbeKKgOF_JjbCT-SfVUlkQ6iwDjHw2LLQtALUql5ZUgcaXYb6vMgR9nWUiBMe94B_FDeNc8Ac" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Refined Flour (Type 00)</p>
                              <p className="text-xs text-zinc-500 mt-0.5">SKU: INV-FLR-00</p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">112.0 kg</td>
                          <td className="px-4 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Healthy
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-zinc-500">50.0 kg</td>
                          <td className="px-4 py-4 text-right">
                            <button className="text-zinc-400 hover:text-[var(--primary)] transition-colors"><ExternalLink size={18} /></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Stock Trend & Recipe Mapping Container */}
                <div className="flex flex-col gap-6">
                  {/* Trend Card */}
                  <div className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm flex flex-col relative overflow-hidden">
                    <div className="border-t-4 border-orange-500 absolute top-0 left-0 right-0"></div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                      <TrendingDown className="text-orange-500" size={18} />
                      Stock Depletion Trend
                    </h3>
                    <p className="text-xs text-zinc-500 mb-6">Estimated "Out of Stock" for Paneer: <span className="text-red-500 font-bold">14 Hours</span></p>

                    {/* Simple Stock Chart Visualization */}
                    <div className="flex-1 flex items-end gap-2 h-32 mb-4">
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] h-[85%] rounded-t-lg transition-all group-hover:h-[90%]"></div>
                      </div>
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] h-[70%] rounded-t-lg transition-all group-hover:h-[75%]"></div>
                      </div>
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] h-[55%] rounded-t-lg transition-all group-hover:h-[60%]"></div>
                      </div>
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] h-[40%] rounded-t-lg transition-all group-hover:h-[45%]"></div>
                      </div>
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] h-[30%] rounded-t-lg transition-all group-hover:h-[35%]"></div>
                      </div>
                      <div className="flex-1 bg-[var(--primary)]/20 rounded-t-lg h-full relative group">
                        <div className="absolute bottom-0 left-0 right-0 bg-red-500 h-[15%] rounded-t-lg animate-pulse"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-zinc-500">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span className="text-red-500 font-bold">Sat (Today)</span>
                    </div>
                  </div>

                  {/* Recipe Mapping Summary */}
                  <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                      <BookOpen className="text-[var(--primary)]" size={18} />
                      Recipe Mapping
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700/50 pb-2">
                        <span className="text-sm text-zinc-500">Mozzarella per Order</span>
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">180g</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700/50 pb-2">
                        <span className="text-sm text-zinc-500">Paneer per Order</span>
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">120g</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700/50 pb-2">
                        <span className="text-sm text-zinc-500">Pizza Dough (Flour)</span>
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">250g</span>
                      </div>
                      <div className="mt-4 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Inventory Cost / Pizza</p>
                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">₹142.50</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Audit Log / Recent Adjustments */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Recent Stock Adjustments</h3>
                    <button className="text-[var(--primary)] text-sm font-bold hover:underline">View History</button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:border-[var(--primary)]/50 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Restock</span>
                        <span className="text-xs font-bold text-zinc-500 opacity-60">2h ago</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Refined Flour</p>
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">+50.0 kg added</p>
                      <p className="text-xs text-zinc-500 mt-1">Batch: #B-9021 by Manager Raj</p>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:border-[var(--primary)]/50 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Correction</span>
                        <span className="text-xs font-bold text-zinc-500 opacity-60">5h ago</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Marinated Paneer</p>
                      <p className="text-red-500 font-bold text-sm">-1.5 kg wastage</p>
                      <p className="text-xs text-zinc-500 mt-1">Reason: Spillage during prep</p>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 hover:border-[var(--primary)]/50 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Restock</span>
                        <span className="text-xs font-bold text-zinc-500 opacity-60">1d ago</span>
                      </div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Mozzarella Cheese</p>
                      <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">+20.0 kg added</p>
                      <p className="text-xs text-zinc-500 mt-1">Batch: #B-8854 by Supplier</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Store Availability Tab */}
          {activeTab === "Store Availability" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col gap-6">

                {/* Availability Data Container */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
                  {/* Header & Search */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-800/50 p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Global Availability</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                      </label>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Active Worldwide</span>
                    </div>
                    <div className="relative max-w-xs w-full">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                      <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" placeholder="Search stores or regions..." type="text" />
                    </div>
                  </div>

                  {/* Availability Table */}
                  <div className="flex-grow overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-zinc-50/50 dark:bg-zinc-800/30 border-b border-zinc-200 dark:border-zinc-800">
                          <th className="px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Store Name / Region</th>
                          <th className="px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Franchisee</th>
                          <th className="px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">In Stock</th>
                          <th className="px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {/* Row 1 */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Delhi - Connaught Place</span>
                              <span className="text-xs text-zinc-500">Delhi, India</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">Arjun Mehta</td>
                          <td className="px-6 py-4 text-center">
                            <CheckCircle className="text-emerald-500 mx-auto" size={20} />
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">Active</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[var(--primary)] hover:underline text-sm font-medium">Manage</button>
                          </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Bengaluru - Indiranagar</span>
                              <span className="text-xs text-zinc-500">Karnataka, India</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">Sarah Johnson</td>
                          <td className="px-6 py-4 text-center">
                            <CheckCircle className="text-emerald-500 mx-auto" size={20} />
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">Active</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[var(--primary)] hover:underline text-sm font-medium">Manage</button>
                          </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Mumbai - Bandra West</span>
                              <span className="text-xs text-zinc-500">Maharashtra, India</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">Rajesh Gupta</td>
                          <td className="px-6 py-4 text-center">
                            <XCircle className="text-red-500 mx-auto" size={20} />
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-xs font-medium">Out of Stock</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[var(--primary)] hover:underline text-sm font-medium">Manage</button>
                          </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Chennai - T Nagar</span>
                              <span className="text-xs text-zinc-500">Tamil Nadu, India</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">Omar Al-Fayed</td>
                          <td className="px-6 py-4 text-center">
                            <CheckCircle className="text-emerald-500 mx-auto" size={20} />
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Limited</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[var(--primary)] hover:underline text-sm font-medium">Manage</button>
                          </td>
                        </tr>
                        {/* Row 5 */}
                        <tr className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Hyderabad - Banjara Hills</span>
                              <span className="text-xs text-zinc-500">Telangana, India</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">Klaus Weber</td>
                          <td className="px-6 py-4 text-center">
                            <CheckCircle className="text-emerald-500 mx-auto" size={20} />
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">Active</span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-[var(--primary)] hover:underline text-sm font-medium">Manage</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  <div className="bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Showing 1-5 of 124 stores</span>
                    <div className="flex items-center gap-1">
                      <button className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"><ChevronLeft className="text-zinc-500" size={18} /></button>
                      <button className="w-8 h-8 rounded bg-[var(--primary)] text-white text-sm font-bold">1</button>
                      <button className="w-8 h-8 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold transition-colors">2</button>
                      <button className="w-8 h-8 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold transition-colors">3</button>
                      <button className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"><ChevronRight className="text-zinc-500" size={18} /></button>
                    </div>
                  </div>
                </div>

                {/* Side Stats & Map Container */}
                <div className="flex flex-col gap-6">
                  {/* Distribution Card */}
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-orange-400"></div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-6">Availability Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-500">Total Stores Active</span>
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">112 / 124</span>
                      </div>
                      <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "90.3%" }}></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-center border border-zinc-200 dark:border-zinc-800">
                          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Low Stock</p>
                          <p className="text-2xl font-bold text-orange-500">08</p>
                        </div>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-center border border-zinc-200 dark:border-zinc-800">
                          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Unlisted</p>
                          <p className="text-2xl font-bold text-red-500">04</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Region Map Preview */}
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden flex flex-col h-full min-h-[300px]">
                    <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Regional Hotspots</h3>
                      <Map className="text-[var(--primary)]" size={20} />
                    </div>
                    <div className="flex-grow relative bg-zinc-100 dark:bg-zinc-800 h-48">
                      <img className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply dark:mix-blend-screen" alt="Global Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh4P0dncdGirAJ0RSk10VLve1IWu3O4uzXsCFwS1IoaD_hdg0KG2ams_I9scSiYkF1oKHnMWHi1mR5RCUQa6PtI5bOiwN9QO0Dm4N3i6ZOxhr_q_Ynj_zPsLSuSN2GKMxL1mXFu1ZPu9qT_2QQw8D3Z4X_YoiHCYewF0EtA252fZTao-Sgnz7xXr1qS37a73CpmXzO7QY45e3tecmI0dTBOtfKIkveYjWS9qYMYYsN5zwn0Y2eL_mRKztNCY28pqqI9QSeWCJSwZk" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 text-center max-w-[200px]">
                          <p className="text-xs text-zinc-500 mb-1">Highest Demand</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">North India</p>
                          <div className="mt-2 h-1 w-full bg-[var(--primary)] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 text-center">
                      <button className="text-[var(--primary)] font-bold text-sm hover:underline">View Geographic Analytics</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Images Tab */}
          {activeTab === "Images" && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col gap-8">

                {/* Primary Image Section */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Primary Image</h2>
                    <button className="text-[var(--primary)] text-sm font-medium flex items-center gap-1 hover:underline">
                      <Edit size={16} />
                      Replace
                    </button>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                      <img className="w-full h-full object-cover" alt="Primary Image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5t_c9cI2PQNElTMbkb6gjB9wu6va_gvHrlO0I1EsdeTETwBZEendx-9YX086FPr1KY5qQthn9_upuztG2oKtg0QKqHXVFx9kFMSoAjaWdXwMFgdEvDq1_t37zjsi_8-M5JTSrJUOqRC2YZUc0kc9dFnyIgSHzIZOmG1kdG6Q39q7C-aK4Eb4kV-XMYO9uKCd1fGMHNs5kbpcHBNCf8eI3cvvaVF953O-ZIvXrdYmiDG8dOe_8gbh3tgoDUzFc-60KtFs7bbqaj0" />
                    </div>
                    <div className="p-4 flex justify-between items-center bg-white dark:bg-zinc-900">
                      <div>
                        <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">Paneer Tikka Pizza</p>
                        <p className="text-xs font-medium text-zinc-500">1200 x 800 px • 1.2 MB</p>
                      </div>
                      <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</span>
                    </div>
                  </div>
                </section>

                {/* Image Gallery Grid */}
                <section className="space-y-4">
                  <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Gallery Item 1 */}
                    <div className="relative group aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                      <img className="w-full h-full object-cover" alt="Gallery Item 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEXy7ttE_PQt7guumLGTYthzK3z1mLg3sTnlwM4kSxB4Lg4ZXgqNTQ0g6qUrouzHI8Ur9HisjbgKNf9ykViEuyyWC0eEtkfgqmkbznYDcprrK2y7USzNrY0zDOStXDEzDiFpjdx4ezoW6drUtJf0NuxMeLn9MqtAOx2FuLuC1wClo-g2KTE1SEbdZrR2PfxBTSuXS18IcB8K8XF6yxc0-qC7ovA_getCPLs7GEbQpG9Auc9cXvv0NaM6hefV9fEdppbWEAFaVWUhc" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 opacity-100 transition-opacity">
                        <button className="bg-white/90 dark:bg-zinc-900/90 p-1.5 rounded-full shadow-md text-[var(--primary)] hover:scale-110 transition-transform">
                          <Star size={18} className="fill-current" />
                        </button>
                        <button className="bg-white/90 dark:bg-zinc-900/90 p-1.5 rounded-full shadow-md text-red-500 hover:scale-110 transition-transform">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    {/* Gallery Item 2 */}
                    <div className="relative group aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                      <img className="w-full h-full object-cover" alt="Gallery Item 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-0sspQYWHglBVoJXUVlY-9M2TwNgo81Ym3yq0-NogYnsdkBGVMCLj4ucVEiuDegw_7npVGsoSxu1s3aoycyiQmV50mQjrjmocNyoZEF8CyKa3KykEw0kWrxTDZDvkFemusMYUrGjkD-0yFc71rHcGDo7lWcT7lnB1Uoz4bxlhCPQqyuob0jYNoBtE0wa5FqrkTA5mYAGFpqIZAhe5i0alAg_VXKaq74ZlIpJzG49I3N-AgcTPcBknFEF1bcKSj7NLZ9Ge6Z3WaJk" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 dark:bg-zinc-900/90 p-1.5 rounded-full shadow-md text-zinc-500 hover:text-[var(--primary)] hover:scale-110 transition-all">
                          <Star size={18} />
                        </button>
                        <button className="bg-white/90 dark:bg-zinc-900/90 p-1.5 rounded-full shadow-md text-red-500 hover:scale-110 transition-transform">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    {/* Upload Card */}
                    <button className="aspect-square rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-[var(--primary)] transition-colors group">
                      <Camera className="text-[var(--primary)] group-hover:scale-110 transition-transform" size={32} />
                      <span className="text-sm font-medium text-zinc-500 group-hover:text-[var(--primary)] transition-colors">Upload New</span>
                    </button>
                  </div>
                </section>

                {/* Guidelines Info Box */}
                <section className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex gap-4">
                  <Info className="text-blue-500 shrink-0" size={24} />
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Image Guidelines</h3>
                    <ul className="text-zinc-500 text-sm space-y-1 list-disc list-inside">
                      <li>Aspect Ratio: 16:9 or 4:3 recommended</li>
                      <li>Formats: JPG, PNG, WebP only</li>
                      <li>Max file size: 5 MB</li>
                      <li>High resolution: At least 1200px wide</li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <button className="px-2 py-2.5 md:px-4 md:py-2 border border-red-200 dark:border-red-800/50 text-red-600 dark:text-red-400 rounded-xl font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            Discontinue Item
          </button>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-2 py-2.5 md:px-4 md:py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button className="px-2 py-2.5 md:px-4 md:py-2 bg-[var(--primary)] text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
