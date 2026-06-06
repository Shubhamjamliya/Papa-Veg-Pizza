import React, { useState, useEffect } from "react";
import { Search, Filter, Download, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export default function InventoryData({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const initialInventory = [
    {
      id: "PV-TOM-001",
      name: "San Marzano Tomatoes",
      category: "Produce",
      stock: "45.0 kg",
      lastUpdated: "2h ago",
      status: "Healthy",
      statusColor: "emerald",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCboZtBg-Gs90exVet5HWFfL0g9OLivnzrCZTSy6ri0M3wQuPc4abJxKrLbBCF3xrGFCHcN87V8oI0L6h-pMUbqnz4jBsR6IiNJWyGfHfM3x46z4w1ltyjkvh1SyjrfQsSlUYKjWpQ-DPT3FAoCPHjmL2waIipS2MOfyxncA7XpRTmLaH_ccNOjd-VdBidnB-c4Slg5b14yoDukGJBR9en6XaUqvMSyiq5RYdYa1MboqUfnz1KYxdRGwNoNSZs18e3QkVS23e8r2go",
    },
    {
      id: "PV-DAI-024",
      name: "Fresh Mozzarella",
      category: "Dairy",
      stock: "8.5 kg",
      lastUpdated: "Refill needed",
      status: "Low Stock",
      statusColor: "amber",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKRNcSu23QgE44SxRG-b6fPhsyLW9iESYofz9WVZNjKFCOM_FY9wOLXqxrA1f3AI9-3aP4S1vuNXn9fbfwsffsEquExgJqFLTIBKWp3SOHTYzBbSNSEJfyP_gVSqYZVseImYRdpsQ-4LwLaX_hFEfAiqfYUedMdnHyeGn1-NaQxfIDpvOQaDTqdH-kTjQ5k1iLUi9tlh7irRGTOhaNCK_KHQhgkZVbp5Q8zcFxDLX5NiGP3XPdPHBaKOt7lJEK1tDoouc446TWFHQ",
    },
    {
      id: "PV-HER-012",
      name: "Fresh Basil Leaves",
      category: "Herbs",
      stock: "0.0 kg",
      lastUpdated: "Stockout",
      status: "Out of Stock",
      statusColor: "red",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpiXAUHRwZrBWPalGhH9UcI8BYvgCcLn-cF6r5zFcl7esXorN-J9DFXKKoQYotTcS3mhuoSjHrgjYNGT_o2nbdlnWR0C4iIjW7lTZ6nHaDQR-4XkFCUtxjtJjfvADBlooe2x4XObuH65WTTnrzcXfDeajaanrpBclQ_6DJbuYfsETJtVQCb4_SLQjIAQg9PMvtzon3xClkXnU5g-JlY0l5rCn_sspGxRzpYuHXYDsCS8QiFZk1smUfiS_XBdXT_IrfVPbwnwjfnW0",
    },
    {
      id: "PV-DRY-005",
      name: "Tipo 00 Flour",
      category: "Dry Goods",
      stock: "120.0 kg",
      lastUpdated: "1d ago",
      status: "Healthy",
      statusColor: "emerald",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXIF5vJ-NQCAd3yEUE6dqn-C1_sBbmpv-t2mbmglOYHcF-R1bSP_YZXtX5JJRFQnzMM1pb5nAhLgoGLU4lBnHlf3OIpVbFRn6EKTB7KjFlQpkce-tH-jyaeGq3KqaMrGscXgQIqXzdBys6bG1wEMuAmo0xqByLAkWfCQK75Pvf-ZgDhSc_rYjs84LMTTGcnT99q6yjedvK5keP_ggKfpfR-RU3OWWk7gQV472f04yjfVKmSSyQq52C19MKXw2cK4M_fO5DOD_NJVk",
    }
  ];

  const filteredInventory = initialInventory.filter(item => 
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    item.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <section className="bg-white dark:bg-zinc-950 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
      {/* Table Header/Search */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100" 
            placeholder="Search by item name or SKU..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            <Filter size={16} />
            Filters
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900/80 text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-xs font-bold border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-6 py-4">Item & SKU</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-right">Current Stock</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredInventory.map((item) => (
              <tr 
                key={item.id} 
                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group cursor-pointer"
                onClick={() => onViewDetails && onViewDetails(item)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700">
                      <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{item.name}</p>
                      <p className="text-xs text-zinc-500 font-medium">SKU: {item.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md text-xs font-bold uppercase shadow-sm">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <p className={`font-bold text-sm ${item.statusColor === 'red' ? 'text-red-600 dark:text-red-400' : item.statusColor === 'amber' ? 'text-[var(--primary)]' : 'text-zinc-900 dark:text-zinc-100'}`}>
                    {item.stock}
                  </p>
                  <p className={`text-xs ${item.statusColor === 'red' ? 'text-red-500 font-bold' : item.statusColor === 'amber' ? 'text-red-500 font-bold' : 'text-zinc-500 font-medium'}`}>
                    {item.lastUpdated}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    item.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                    item.statusColor === 'amber' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      item.statusColor === 'emerald' ? 'bg-emerald-500' :
                      item.statusColor === 'amber' ? 'bg-amber-500' :
                      'bg-red-500'
                    }`}></span>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-zinc-400 hover:text-[var(--primary)] transition-colors p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredInventory.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-zinc-500 text-sm">
                  No items found matching "{searchTerm}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-50 dark:bg-zinc-900/50">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Showing <span className="font-bold text-zinc-900 dark:text-zinc-100">1</span> to <span className="font-bold text-zinc-900 dark:text-zinc-100">{filteredInventory.length}</span> of <span className="font-bold text-zinc-900 dark:text-zinc-100">156</span> items
        </p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-zinc-600 dark:text-zinc-400" disabled>
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold text-sm shadow-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-bold text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-bold text-sm">3</button>
          <span className="text-zinc-500 px-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-bold text-sm">16</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
