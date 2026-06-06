import React, { useState } from "react";
import { Plus, Package, CheckCircle, AlertTriangle, Ban, TrendingUp, TrendingDown } from "lucide-react";
import ProductsData from "./ProductsData";
import ProductsDetail from "./ProductsDetail";
import AddProducts from "./AddProducts";

export default function ProductsManagement() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Products Management</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage your catalog and stock levels</p>
          </div>
          <button 
            onClick={() => setIsAddProductOpen(true)}
            className="bg-[var(--primary)] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.98] w-full md:w-auto"
          >
            <Plus size={20} />
            Add Product
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <section className="flex overflow-x-auto gap-4 scrollbar-none pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="min-w-[180px] flex-1 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Package className="text-[var(--primary)]" size={20} />
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingUp size={14} /> 4%
            </span>
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Products</span>
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">1,284</span>
        </div>

        <div className="min-w-[180px] flex-1 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <CheckCircle className="text-emerald-600 dark:text-emerald-500" size={20} />
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingUp size={14} /> 2%
            </span>
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Active</span>
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">1,210</span>
        </div>

        <div className="min-w-[180px] flex-1 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2 border-t-2 border-t-orange-500">
          <div className="flex justify-between items-center">
            <AlertTriangle className="text-orange-500" size={20} />
            <span className="text-xs font-bold text-red-500 dark:text-red-400 flex items-center gap-1">
              <TrendingUp size={14} /> 12%
            </span>
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Low Stock</span>
          <span className="text-2xl font-bold text-orange-500">14</span>
        </div>

        <div className="min-w-[180px] flex-1 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2 border-t-2 border-t-red-500">
          <div className="flex justify-between items-center">
            <Ban className="text-red-500" size={20} />
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <TrendingDown size={14} /> 5%
            </span>
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Out of Stock</span>
          <span className="text-2xl font-bold text-red-500">8</span>
        </div>
      </section>

      {/* Products Data (Filters & List) */}
      <ProductsData onViewProduct={handleViewProduct} />

      <ProductsDetail 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        product={selectedProduct} 
      />

      <AddProducts 
        isOpen={isAddProductOpen} 
        onClose={() => setIsAddProductOpen(false)} 
      />
    </div>
  );
}
