import React, { useState } from "react";
import { X, DollarSign, Database, CheckSquare, Info, Trash2, Edit2, UtensilsCrossed } from "lucide-react";

export default function AddonsDetails({ isOpen, onClose, addon, onEdit }) {
  const [activeTab, setActiveTab] = useState("selection");

  if (!isOpen) return null;

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "pricing", label: "Pricing" },
    { id: "inventory", label: "Inventory" },
    { id: "selection", label: "Selection Rules" },
    { id: "products", label: "Products" },
    { id: "analytics", label: "Analytics" }
  ];

  return (
    <>
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Side-Out Drawer View */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white dark:bg-zinc-950 shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-4 h-12 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full p-1.5 transition-colors"
            >
              <X size={18} />
            </button>
            <div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{addon?.name || "Extra Cheese"}</h2>
              <p className="text-xs text-zinc-500 font-bold">Add-on Details</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              addon?.status === 'Active' 
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' 
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {addon?.status?.toUpperCase() || "ACTIVE"}
            </span>
          </div>
        </header>

        {/* Tabs */}
        <nav className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-3 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2.5 text-xs font-bold whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                  : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 border-b-2 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Pricing Summary Card */}
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-400"></div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Pricing Summary</h3>
                <DollarSign className="text-amber-500" size={18} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  <span>Base Price</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">{addon?.price || "₹1.50"}</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  <span>Tax (5%)</span>
                  <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">₹0.08</span>
                </div>
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between font-bold text-sm mt-2">
                  <span className="text-zinc-900 dark:text-zinc-100">Final Price</span>
                  <span className="text-[var(--primary)] font-mono">₹1.58</span>
                </div>
              </div>
            </div>

            {/* Inventory Linking Card */}
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Inventory Linking</h3>
                <Database className="text-emerald-600" size={18} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800">
                  <UtensilsCrossed className="text-zinc-400" size={18} />
                  <div>
                    <p className="text-xs font-bold text-zinc-500">Linked Item</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Mozzarella Block</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Current Stock</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded font-mono font-bold text-sm">
                    {addon?.stock !== undefined ? `${addon.stock} units` : "15kg"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Selection Rules Section */}
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center gap-2">
              <CheckSquare className="text-[var(--primary)]" size={18} />
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Selection Rules</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm text-center">
                <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Min Quantity</p>
                <p className="text-xl font-black text-zinc-900 dark:text-zinc-100 font-mono">0</p>
              </div>
              <div className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm text-center">
                <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Max Quantity</p>
                <p className="text-xl font-black text-zinc-900 dark:text-zinc-100 font-mono">3</p>
              </div>
              <div className="p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm text-center">
                <p className="text-xs font-bold text-zinc-500 uppercase mb-1">Default</p>
                <p className="text-xl font-black text-zinc-900 dark:text-zinc-100 font-mono">1</p>
              </div>
            </div>

            {/* Toggles */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg divide-y divide-zinc-200 dark:divide-zinc-800 shadow-sm overflow-hidden">
              <div className="p-3 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Required Selection</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Forces the customer to select this add-on</p>
                </div>
                <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 rounded-full relative transition-colors duration-200 cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Allow Multiple Quantities</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Enables +/- selector in the storefront</p>
                </div>
                <div className="w-11 h-6 bg-[var(--primary)] rounded-full relative transition-colors duration-200 cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                </div>
              </div>
            </div>

            {/* Validation Logic Preview */}
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg flex items-start gap-2">
              <Info className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-1">Preview of validation logic</p>
                <p className="text-sm font-medium text-blue-900 dark:text-blue-200 italic">"Customers can add up to 3 portions of {addon?.name || 'Extra Cheese'}."</p>
              </div>
            </div>
          </div>

          {/* Visualization / Graphic */}
          <div className="rounded-lg overflow-hidden h-40 relative group border border-zinc-200 dark:border-zinc-800">
            <img 
              alt="Add-on Visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={addon?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuD1I9-5kLwLKK3vyMYC_DCjVzULWaPaYYEB6yMn0sa5LLzggkvDrkJqG9VNCbJ3qXKiYuwj0MF1HQIR19-voBPRhqV9ka7fNTVmcdHYzG5qE9WZaVEMLfJwsEk69kHf1aUo13f7yPXTligxvUVA4cRWmP8N9WBtK1nbY4p90InEtdQmZ5BKLHvz5WU5C776y9H9QYC0zktUVNDQ-BxGpH9W-ifsZyCBW0rNQJHEwqec5UKLXZIROQaM7QAVvY8aTuVN58w549OfQYA"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <p className="text-white font-bold text-xs tracking-wide">Storefront Preview: Toppings Selection UI</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <footer className="p-3 md:p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-wrap justify-between items-center gap-3">
          <button className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-2 rounded-lg transition-colors">
            <Trash2 size={18} />
            <span className="hidden sm:inline">Delete</span>
          </button>
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={() => {
                onClose();
                if (onEdit) onEdit(addon);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-white font-bold text-sm rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md"
            >
              <Edit2 size={16} />
              Edit Add-on
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
