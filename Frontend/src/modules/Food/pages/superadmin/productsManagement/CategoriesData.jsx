import React, { useState, useEffect } from "react";
import { Search, Grid, List, MoreVertical, FilterX, Eye } from "lucide-react";

export default function CategoriesData({ onViewDetails }) {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  // Debouncing search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const categories = [
    {
      id: "C001",
      name: "Pizza",
      description: "Authentic Italian style veg pizzas with fresh dough.",
      parent: "—",
      sortOrder: 1,
      productsCount: 42,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoYzXkWzte0aijstqmMkGyqIFa9shzycOqU6xBIrs47TthE7QYfEdcSRhQB-WUSFMMXbP8va1fSbTe803_fTbPyuITes54RP2CcYBsfO5MsGoSS1zv7jrC9JeMtUDqGNjVuM7M7mYNHoU6VayCoTlS2i-awExwWtxfwDpQwRll0FKGUYjDIgr-wARLTUAXDwz_hCTR5RjKHU-Eakc0clODdkFG1aG_4McGj98rzw0PcyB6xZg--6_yDo8gOoPQUqKll21M-vt8clg"
    },
    {
      id: "C002",
      name: "Burger",
      description: "Gourmet veggie burgers with premium patties.",
      parent: "—",
      sortOrder: 2,
      productsCount: 28,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaL8m44fS5vUJ5c5GDS9coWQUtJjf-HqQJQXE1iahPN2p9HcJGWle4Hj_Y5lkdEO4q-eiAW0ABd6RBV0PzvpeTb_fnIEeJMEfSqaCSlh9BfGmyNYwID7EGrB7xLfrJloZB8OwYKJlvh2uTkQXS_j2yaPZEXJ5EZVlrEwYZsS7j8K0F6sVtovO4ZWt9vbeRa3gZHQQlaaduRgYuruOh07esDW-pxbsVCTIvVYAMZv7no2Ad5bVuchj-2nJhEKDdj-0M0pzx6zbBxis"
    },
    {
      id: "C003",
      name: "Pasta",
      description: "Hand-crafted pasta with home-made sauces.",
      parent: "—",
      sortOrder: 3,
      productsCount: 15,
      status: "Inactive",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3yIR9I8oyPqep2RedG2OWPtqQWXfEUU3W8pEOfPA_Ynl41D3yADtd007Q_NJ392DC0fPDWZa942MG8-460F_nsCURLtHgW1Kuso8vvpn5Z61YwQtZXduvZKC-1kjYkJvtEirMyOAOTvXF6G6wo27bEvsSeOoYy_uAUUD7We4XGOkZxBfrNDqVZX6j8aE32O6GrNVsjJBGMT2qeIegOunh5mW1qLf14npmkW_963h7rRdcnfmV-68XSvIwRC56OuQctZfwGCIymEE"
    },
    {
      id: "C004",
      name: "Beverages",
      description: "Cool refreshments and premium mocktails.",
      parent: "—",
      sortOrder: 4,
      productsCount: 32,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyouy-3iS6-nK0Z9obYU9JdtFODwFKN4PhFSVb0jLpGTjARATXDH8PVRpPetRZYrL5_Nsa9O4XMu10dPzlDN51zRAfNIYAEeH5A3ujq4tcVfstWYAj1fgr-927AX4PVz0y7XBlGOLvJyxLzOXSGSiHczn3kYN2nCMzopmtYlEwThKQJBNdU_b0naeK8GFowD8cA9BtnXhUbZbodcbbE_7UyEsij61iKVM7LL7W5pK9CfdeaBO0PjJ6QpXCfH64pSwGH7n1jrRwhY4"
    }
  ];

  const filteredCategories = categories.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4">
      {/* Filters & Views */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-black dark:text-white/70" size={14} />
            <input
              className="w-full pl-8 pr-3 py-1.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] text-black dark:text-white font-medium transition-all"
              placeholder="Search categories..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="py-1.5 px-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] text-black dark:text-white font-semibold transition-all"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          {(searchTerm || statusFilter !== "All Status") && (
            <button
              onClick={() => { setSearchTerm(""); setStatusFilter("All Status"); }}
              className="text-[var(--primary)] p-1.5 rounded-lg hover:bg-[var(--primary)]/10 transition-colors flex items-center justify-center border border-zinc-200"
              title="Clear Filters"
            >
              <FilterX size={14} />
            </button>
          )}
        </div>
        <div className="flex bg-zinc-100 dark:bg-zinc-800 p-0.5 rounded-lg border border-zinc-200 dark:border-zinc-700">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${viewMode === "grid" ? "bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm" : "text-black dark:text-white"}`}
          >
            <Grid size={14} /> Grid
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${viewMode === "table" ? "bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm" : "text-black dark:text-white"}`}
          >
            <List size={14} /> Table
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredCategories.map(category => (
            <div key={category.id} className={`bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group ${category.status === 'Inactive' ? 'opacity-75' : ''}`}>
              <div className="h-28 relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${category.status === 'Inactive' ? 'grayscale' : ''}`}
                  src={category.image}
                  alt={category.name}
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 ${category.status === 'Active'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    <span className={`w-1 h-1 rounded-full ${category.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    {category.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => onViewDetails(category)} className="bg-white text-zinc-900 px-3 py-1 rounded text-xs font-bold shadow-md hover:bg-zinc-50">Quick Edit</button>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="text-xs font-bold text-black dark:text-white">{category.name}</h5>
                </div>
                <p className="text-[10px] text-black/70 dark:text-white/70 mb-2 line-clamp-2">{category.description}</p>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">{category.productsCount} Products</span>
                  <button
                    onClick={() => onViewDetails(category)}
                    className="p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-750 text-[var(--primary)] transition-colors flex items-center gap-1.5"
                  >
                    <Eye size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredCategories.length === 0 && (
            <div className="col-span-full p-6 text-center text-black/50 dark:text-white/50 text-xs font-semibold bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              No categories found matching your criteria.
            </div>
          )}
        </section>
      )}

      {/* Table View */}
      {viewMode === "table" && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                <tr>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Image</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Category</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Parent</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Products</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Sort Order</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800">Status</th>
                  <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider border-b border-zinc-200 dark:border-zinc-800"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {filteredCategories.map(category => (
                  <tr key={category.id} className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors ${category.status === 'Inactive' ? 'opacity-75' : ''}`}>
                    <td className="px-3 py-2">
                      <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden shrink-0">
                        <img className={`w-full h-full object-cover ${category.status === 'Inactive' ? 'grayscale' : ''}`} src={category.image} alt={category.name} />
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <p className="text-xs font-bold text-black dark:text-white">{category.name}</p>
                      <p className="text-[10px] text-black/75 dark:text-white/75 font-semibold line-clamp-1">Main Menu</p>
                    </td>
                    <td className="px-3 py-2 text-xs font-medium text-black dark:text-white">
                      {category.parent}
                    </td>
                    <td className="px-3 py-2 text-xs font-medium text-black dark:text-white">
                      {category.productsCount} Items
                    </td>
                    <td className="px-3 py-2 text-xs font-medium text-black dark:text-white">
                      {category.sortOrder}
                    </td>
                    <td className="px-3 py-2">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${category.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                        {category.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); onViewDetails(category); }}
                        className="p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-750 text-[var(--primary)] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Eye size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredCategories.length === 0 && (
                  <tr>
                    <td colSpan="7" className="p-6 text-center text-black/50 dark:text-white/50 text-xs font-semibold">
                      No categories found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Hierarchy View */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
        <h5 className="text-xs font-bold text-black dark:text-white mb-3 flex items-center gap-2">
          Category Hierarchy
        </h5>
        <div className="space-y-2.5">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-[10px]">PZ</div>
            <span className="text-xs font-bold text-black dark:text-white">Pizza</span>
          </div>
          <div className="ml-3 space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <div className="flex items-center gap-3 relative">
              <span className="absolute -left-4 top-1/2 w-3 h-[1px] bg-zinc-200 dark:bg-zinc-800"></span>
              <span className="text-xs font-bold text-black/80 dark:text-white/80">Veg Pizza</span>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded text-[10px] font-bold">24 Items</span>
            </div>
            <div className="flex items-center gap-3 relative">
              <span className="absolute -left-4 top-1/2 w-3 h-[1px] bg-zinc-200 dark:bg-zinc-800"></span>
              <span className="text-xs font-bold text-black/80 dark:text-white/80">Cheese Pizza</span>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/60 dark:text-white/60 px-1.5 py-0.5 rounded text-[10px] font-bold">18 Items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
