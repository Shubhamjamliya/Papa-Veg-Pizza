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
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Categories Management</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Organize and manage your menu hierarchy for customer navigation.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950 shadow-sm">
              <Upload size={18} />
              <span className="hidden sm:inline">Import</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors bg-white dark:bg-zinc-950 shadow-sm">
              <Download size={18} />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button 
              onClick={() => setIsAddCategoryOpen(true)}
              className="flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Plus size={18} />
              Add Category
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400">
              <Layers size={20} />
            </div>
            <span className="text-emerald-600 font-bold text-xs">+2%</span>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Categories</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">24</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
              <CheckCircle size={20} />
            </div>
            <span className="text-emerald-600 font-bold text-xs">Stable</span>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Active</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">18</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
              <Ban size={20} />
            </div>
            <span className="text-red-600 font-bold text-xs">-1</span>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Inactive</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">6</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
              <Star size={20} />
            </div>
            <span className="text-purple-600 font-bold text-xs">+4</span>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Featured</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">8</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm md:col-span-1 col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
              <Package size={20} />
            </div>
            <span className="text-emerald-600 font-bold text-xs">+12</span>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Products</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">142</h4>
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
