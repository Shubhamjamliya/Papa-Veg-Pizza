import React, { useState, useEffect } from "react";
import { Search, Filter, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

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
    if (status === "Active") return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] uppercase tracking-wider font-bold rounded-full">Active</span>;
    if (status === "Low Stock") return <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 text-[10px] uppercase tracking-wider font-bold rounded-full">Low Stock</span>;
    if (status === "Inactive") return <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-[10px] uppercase tracking-wider font-bold rounded-full">Inactive</span>;
    return null;
  };

  return (
    <>
      {/* Search & Filter Panel */}
      <section className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6">
        <div 
          className="p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 cursor-pointer" 
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="flex items-center gap-3 flex-1">
            <Search className="text-zinc-400" size={20} />
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-sm outline-none text-zinc-900 dark:text-zinc-100" 
              placeholder="Search products..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:bg-[var(--primary)]/10 px-3 py-1.5 rounded-lg transition-colors">
            <Filter size={18} />
            Filters
          </button>
        </div>
        
        {showFilters && (
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Category</label>
              <select 
                className="w-full h-10 px-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all dark:text-zinc-100"
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
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Store</label>
              <select 
                className="w-full h-10 px-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 transition-all dark:text-zinc-100"
                value={storeFilter}
                onChange={(e) => setStoreFilter(e.target.value)}
              >
                <option>All Stores</option>
                <option>Downtown Branch</option>
                <option>Westside Express</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</label>
              <div className="flex gap-2 h-10 items-center">
                <button 
                  onClick={() => setStatusFilter("All")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${statusFilter === "All" ? "bg-[var(--primary)] text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setStatusFilter("Active")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${statusFilter === "Active" ? "bg-emerald-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                >
                  Active
                </button>
                <button 
                  onClick={() => setStatusFilter("Inactive")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${statusFilter === "Inactive" ? "bg-red-500 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                >
                  Inactive
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Products List */}
      <section className="flex flex-col gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} onClick={() => onViewProduct?.(product)} className={`bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col sm:flex-row relative group transition-all hover:shadow-md cursor-pointer ${product.status === "Inactive" ? "opacity-75" : ""}`}>
            <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <img 
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${product.status === "Inactive" ? "grayscale" : ""}`} 
                src={product.image} 
                alt={product.name} 
              />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-1 gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{product.name}</h3>
                  <p className="text-xs text-zinc-500 font-medium mt-1">SKU: {product.id} • {product.category}</p>
                </div>
                <button className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  <MoreVertical size={20} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 mb-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Price</span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">{product.price}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Stock</span>
                  <span className={`text-lg font-bold mt-0.5 ${product.stock <= 5 && product.stock > 0 ? "text-orange-500" : product.stock === 0 ? "text-red-500" : "text-zinc-900 dark:text-zinc-100"}`}>
                    {product.stock} units
                  </span>
                </div>
              </div>
              <div className="mt-auto pt-2">
                {getStatusBadge(product.status)}
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="p-8 text-center text-zinc-500 font-medium bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            No products found matching your criteria.
          </div>
        )}
      </section>

      {/* Pagination */}
      <div className="mt-8 mb-4 flex items-center justify-between">
        <button className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" disabled>
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-1 items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold text-sm">1</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-sm cursor-pointer transition-colors">2</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-sm cursor-pointer transition-colors">3</span>
          <span className="px-2 text-zinc-400">...</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-sm cursor-pointer transition-colors">12</span>
        </div>
        <button className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
