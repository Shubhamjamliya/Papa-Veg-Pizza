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
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
        <div className="space-y-0.5">
          <h1 className="text-lg font-bold text-black dark:text-white leading-tight">
            Products Management
          </h1>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">
            Manage your catalog and stock levels
          </p>
        </div>
        <button 
          onClick={() => setIsAddProductOpen(true)}
          className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-3.5 py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold text-[11px]"
        >
          <Plus size={14} className="stroke-[3]" />
          <span>ADD PRODUCT</span>
        </button>
      </div>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 select-none">
        {/* Total Products */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Products</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">1,284</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> +4%
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
            <Package size={14} />
          </div>
        </div>

        {/* Active */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Active</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">1,210</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> +2%
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-emerald-555/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/30">
            <CheckCircle size={14} />
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-t-2 border-t-orange-500">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Low Stock</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-orange-600 dark:text-orange-455 mt-0.5">14</h3>
              <span className="text-red-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> 12%
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-orange-500/10 text-orange-600 shrink-0 border border-orange-100 dark:border-orange-900/30">
            <AlertTriangle size={14} />
          </div>
        </div>

        {/* Out of Stock */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow border-t-2 border-t-red-500">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Out of Stock</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-rose-600 dark:text-rose-455 mt-0.5">8</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingDown size={10} /> 5%
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-red-500/10 text-rose-600 dark:text-rose-400 shrink-0 border border-red-100 dark:border-red-900/30">
            <Ban size={14} />
          </div>
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
