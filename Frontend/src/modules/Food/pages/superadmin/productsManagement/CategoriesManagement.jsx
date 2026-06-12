import React, { useState } from "react";
import { Upload, Download, Plus, Layers, CheckCircle, Ban, Star, Package } from "lucide-react";
import CategoriesData from "./CategoriesData";
import CategorieDetails from "./CategorieDetails";
import AddCategoryModal from "./AddCategoryModal";

export default function CategoriesManagement() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  const handleViewDetails = (category) => {
    setSelectedCategory(category);
    setIsDetailOpen(true);
  };
  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
        <div className="space-y-0.5">
          <h1 className="text-lg font-bold text-black dark:text-white leading-tight">
            Categories Management
          </h1>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">
            Organize and manage your menu hierarchy for customer navigation.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-lg font-bold text-[11px] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950 shadow-sm">
            <Upload size={14} />
            <span className="hidden sm:inline">Import</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white rounded-lg font-bold text-[11px] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950 shadow-sm">
            <Download size={14} />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button 
            onClick={() => setIsAddCategoryOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg font-bold text-[11px] shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <Plus size={14} />
            Add Category
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4 select-none">
        {/* Total Categories */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Categories</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">24</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">+2%</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0 border border-orange-100 dark:border-orange-900/30">
            <Layers size={14} />
          </div>
        </div>

        {/* Active */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Active</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">18</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">Stable</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/30">
            <CheckCircle size={14} />
          </div>
        </div>

        {/* Inactive */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Inactive</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">6</h3>
              <span className="text-red-500 font-bold text-[8px] flex items-center gap-0.5">-1</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-red-500/10 text-rose-600 dark:text-rose-455 shrink-0 border border-red-100 dark:border-red-900/30">
            <Ban size={14} />
          </div>
        </div>

        {/* Featured */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Featured</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">8</h3>
              <span className="text-purple-500 font-bold text-[8px] flex items-center gap-0.5">+4</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-650 dark:text-purple-400 shrink-0 border border-purple-100 dark:border-purple-900/30">
            <Star size={14} />
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow sm:col-span-1 col-span-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Products</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">142</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">+12</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-100 dark:border-blue-900/30">
            <Package size={14} />
          </div>
        </div>
      </section>

      {/* Categories Data */}
      <CategoriesData onViewDetails={handleViewDetails} />

      {/* Category Details Drawer */}
      <CategorieDetails 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        category={selectedCategory} 
      />

      {/* Add Category Modal */}
      <AddCategoryModal 
        isOpen={isAddCategoryOpen} 
        onClose={() => setIsAddCategoryOpen(false)} 
      />
    </div>
  );
}
