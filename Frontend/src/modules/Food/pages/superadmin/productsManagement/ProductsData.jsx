import React, { useState, useEffect } from "react";
import { Search, Filter, MoreVertical, ChevronLeft, ChevronRight, RotateCcw, Eye } from "lucide-react";

export default function ProductsData({ onViewProduct }) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [storeFilter, setStoreFilter] = useState("All Stores");
  const [statusFilter, setStatusFilter] = useState("All");

  const [products] = useState([
    {
      id: "PP-V-001",
      name: "Paneer Tikka Pizza",
      category: "Classic Pizzas",
      price: "₹399",
      stock: 45,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEC3i6IAhI8aY11t3pUM3XO2TEmZiyfNNJmX9YDCOqymttxuR-rj9ZHdtgzGepndx9vpkr-xaM5w5pqQzCXKTJHKuISPWe3bIlgpl1xiqMBRYx8HbpMmZ99S00zk3AR_gdAFBPZLsg0RxcNooVUN-qcEtFH-Gv5mtSrDKWlKn7TGpT5PRgtDhET-Rtxo8U_nOxrV_pl0YIMHtPTUFOHsItKjW6xNJpBWQDp3hGLoSn6kcIdVMEsykwWaJckCOwBQYfSyvS99gvblA"
    },
    {
      id: "PP-V-012",
      name: "Garden Fresh Special",
      category: "Signature Pizzas",
      price: "₹549",
      stock: 5,
      status: "Low Stock",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeJnwNtkWT20vHWN6l3sSCT5NYie6Ia6xEFh7Wg9sQ41VP9AO4QffBCu8xVixhnduWwUDxSfbEicIr3tc_M_NLVGe3q8u1XAvrZzA9Du9pa21kgXNPuNPM0zBKZF5URTfHA_kx9JT8xpBq0XmpicLyTt-zNlSQu0gtKDdbfCBMkAl4P5h4aOddEUPyTFMq9xYOHfiBGMJT8GXY8plZHGRxNUkoJ25uSMtgTpQx1Q8cdNd5NeZRPWcTTScdB6BSWqlm_rctUlJXdyI"
    },
    {
      id: "PP-V-044",
      name: "Mediterranean Delight",
      category: "Sides",
      price: "₹449",
      stock: 0,
      status: "Inactive",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxAyI4abEROd5UXlMQrFeI4yqYUbkcP_QkX9q0FK3L2evS4S6C-5moP3o2Em3tN8jR0Ph9SqUPByZQbGEVAV2S018FdvydsRjRhswMGV3gYau58yRNAoz3RArwa7m7Gv_lv0TvxjK_9fvHNLHLQOnuc3q1o0TJMPN0GhiGgSlNcb7SIUNcsXBvC4AQy54gRlwET3ijFDETbLM2ugeu3L9nmhv6hCvz6r_q2P4NDSa2nLq2bbGQxDk5Ts1ABMW8f6RRJFbA0T9fT38"
    }
  ]);

  // Debouncing for the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      product.id.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || product.category === categoryFilter;
    const matchesStatus = statusFilter === "All" ||
      (statusFilter === "Active" && product.status !== "Inactive") ||
      (statusFilter === "Inactive" && product.status === "Inactive");

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status) => {
    if (status === "Active") return <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[9px] uppercase tracking-wider font-bold rounded">Active</span>;
    if (status === "Low Stock") return <span className="px-2 py-0.5 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 text-[9px] uppercase tracking-wider font-bold rounded">Low Stock</span>;
    if (status === "Inactive") return <span className="px-2 py-0.5 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-[9px] uppercase tracking-wider font-bold rounded">Inactive</span>;
    return null;
  };

  return (
    <>
      {/* Search & Filter Panel */}
      <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-3">
        <div
          className="p-1.5 px-3 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="flex items-center gap-2 flex-1">
            <Search className="text-black dark:text-white/70" size={14} />
            <input
              className="bg-transparent border-none focus:ring-0 w-full text-xs outline-none text-black dark:text-white font-medium"
              placeholder="Search products..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button className="flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:bg-[var(--primary)]/10 px-2.5 py-1 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800">
            <Filter size={12} />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="p-3 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200 border-t border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Category</label>
                <select
                  className="w-full h-8 py-1 px-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-black dark:text-white font-semibold"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Classic Pizzas</option>
                  <option>Signature Pizzas</option>
                  <option>Sides</option>
                  <option>Beverages</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Store</label>
                <select
                  className="w-full h-8 py-1 px-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-xs outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all text-black dark:text-white font-semibold"
                  value={storeFilter}
                  onChange={(e) => setStoreFilter(e.target.value)}
                >
                  <option>All Stores</option>
                  <option>Downtown Branch</option>
                  <option>Westside Express</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Status</label>
                <div className="flex gap-1.5 h-8 items-center">
                  <button
                    onClick={() => setStatusFilter("All")}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${statusFilter === "All" ? "bg-[var(--primary)] text-white" : "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"}`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatusFilter("Active")}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${statusFilter === "Active" ? "bg-emerald-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"}`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setStatusFilter("Inactive")}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition-colors ${statusFilter === "Inactive" ? "bg-red-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"}`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-1">
              <button
                onClick={() => {
                  setCategoryFilter("All Categories");
                  setStoreFilter("All Stores");
                  setStatusFilter("All");
                  setSearchTerm("");
                }}
                title="Reset Filters"
                className="p-1.5 rounded-full text-black hover:text-black hover:bg-zinc-100 dark:text-white dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Products List */}
      <section className="flex flex-col gap-3">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => onViewProduct?.(product)} className={`bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col sm:flex-row relative group transition-all hover:shadow-md cursor-pointer ${product.status === "Inactive" ? "opacity-75" : ""}`}>
            <div className="w-full sm:w-32 h-28 sm:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <img
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${product.status === "Inactive" ? "grayscale" : ""}`}
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-3 flex flex-col flex-1 gap-1.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-bold text-black dark:text-white">{product.name}</h3>
                  <p className="text-[10px] text-black/70 dark:text-white/70 font-semibold mt-0.5">SKU: {product.id} • {product.category}</p>
                </div>
                <button
                  className="p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-750 text-[var(--primary)] transition-colors flex items-center gap-1.5"
                >
                  <Eye size={14} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-1 mb-1">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Price</span>
                  <span className="text-xs font-bold text-black dark:text-white mt-0.5">{product.price}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Stock</span>
                  <span className={`text-xs font-bold mt-0.5 ${product.stock <= 5 && product.stock > 0 ? "text-orange-500" : product.stock === 0 ? "text-red-500" : "text-black dark:text-white"}`}>
                    {product.stock} units
                  </span>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between">
                {getStatusBadge(product.status)}
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="p-6 text-center text-black/50 dark:text-white/50 text-xs font-semibold bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            No products found matching your criteria.
          </div>
        )}
      </section>

      {/* Pagination */}
      <div className="px-3 py-2 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 mt-4 rounded-xl">
        <p className="text-[11px] font-medium text-black/70 dark:text-white/70">Showing 1 to {filteredProducts.length} of {products.length} entries</p>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-50 transition-colors" disabled>
            <ChevronLeft size={12} />
          </button>
          <button className="w-6 h-6 flex items-center justify-center rounded bg-[var(--primary)] text-white font-bold text-[10px] shadow-sm">1</button>
          <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">2</button>
          <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">3</button>
          <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
    </>
  );
}
