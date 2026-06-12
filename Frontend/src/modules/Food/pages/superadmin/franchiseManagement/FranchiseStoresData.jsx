import React, { useState, useEffect } from "react";
import { Search, Filter, MoreVertical, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function FranchiseStoresData({ onRowClick }) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [zoneFilter, setZoneFilter] = useState("All Zones");

  // Debouncing effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const initialStores = [
    {
      id: "#PV-DEL-001",
      name: "Connaught Place Central",
      location: "New Delhi, DL",
      owner: "Rahul Sharma",
      phone: "+91 98765 43210",
      region: "North India",
      status: "Active",
      revenue: "₹ 14,25,000",
      liveOrders: 24,
      liveOrdersStatus: "In-process",
    },
    {
      id: "#PV-MUM-042",
      name: "Bandra West Hub",
      location: "Mumbai, MH",
      owner: "Priya Mehra",
      phone: "+91 91234 56789",
      region: "West India",
      status: "Active",
      revenue: "₹ 18,90,000",
      liveOrders: 42,
      liveOrdersStatus: "In-process",
    },
    {
      id: "#PV-BLR-112",
      name: "Indiranagar Express",
      location: "Bengaluru, KA",
      owner: "Vikram Singh",
      phone: "+91 88888 77777",
      region: "South India",
      status: "Pending",
      revenue: "₹ 0",
      liveOrders: 0,
      liveOrdersStatus: "N/A",
    },
    {
      id: "#PV-PUN-015",
      name: "Koregaon Park",
      location: "Pune, MH",
      owner: "Aniket Deshpande",
      phone: "+91 77776 66665",
      region: "West India",
      status: "Suspended",
      revenue: "₹ 2,10,000",
      liveOrders: 0,
      liveOrdersStatus: "Blocked",
    },
  ];

  // Apply filters
  const filteredStores = initialStores.filter((store) => {
    const matchSearch =
      store.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      store.id.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      store.owner.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchStatus = statusFilter === "All Statuses" || store.status === statusFilter;
    const matchRegion = regionFilter === "All Regions" || store.region === regionFilter;
    
    // Zone filtering logic would go here if we had zones in the data

    return matchSearch && matchStatus && matchRegion;
  });

  return (
    <div className="space-y-4">
      {/* Filters Section */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex flex-wrap items-center gap-2 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-black dark:text-white" size={14} />
              <input
                className="w-full pl-8 pr-3 py-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:border-[var(--primary)] focus:ring-0 outline-none transition-colors"
                placeholder="Search by Store Name, ID or Owner..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="flex items-center gap-1.5 text-black dark:text-white font-bold px-2.5 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors text-xs"
              onClick={toggleFilters}
            >
              <Filter size={14} />
              <span>ADVANCED FILTERS</span>
            </button>
          </div>
          <div className="text-[11px] font-bold text-black/70 dark:text-white/70 hidden sm:block">Showing {filteredStores.length} results</div>
        </div>
        
        {showFilters && (
          <div className="p-3 grid grid-cols-1 sm:grid-cols-4 gap-2 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Status</label>
              <select 
                className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-semibold focus:border-[var(--primary)] outline-none text-black dark:text-white cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Region</label>
              <select 
                className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-semibold focus:border-[var(--primary)] outline-none text-black dark:text-white cursor-pointer"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option>All Regions</option>
                <option>North India</option>
                <option>South India</option>
                <option>West India</option>
                <option>East India</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Zone</label>
              <select 
                className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-semibold focus:border-[var(--primary)] outline-none text-black dark:text-white cursor-pointer"
                value={zoneFilter}
                onChange={(e) => setZoneFilter(e.target.value)}
              >
                <option>All Zones</option>
                <option>Urban Metro</option>
                <option>Tier 2 Hub</option>
                <option>Highway Side</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[9px] font-bold text-black dark:text-white uppercase tracking-wider">Setup Date</label>
              <input 
                className="w-full p-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-white focus:border-[var(--primary)] outline-none" 
                type="date" 
              />
            </div>
          </div>
        )}
      </div>

      {/* Enterprise Data Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
               <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Store ID</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Store Name</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Owner</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Region</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Status</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Monthly Revenue</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Live Orders</th>
                <th className="px-3 py-2 text-[10px] font-bold text-black dark:text-white uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredStores.map((store, index) => (
                <tr key={index} className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors cursor-pointer group" onClick={() => onRowClick && onRowClick(store)}>
                  <td className="px-3 py-2 font-bold text-xs text-black dark:text-white">{store.id}</td>
                  <td className="px-3 py-2">
                    <div className="flex flex-col">
                      <span className="font-bold text-xs text-black dark:text-white group-hover:text-[var(--primary)] transition-colors">{store.name}</span>
                      <span className="text-[10px] text-black/70 dark:text-white/70 mt-0.5">{store.location}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex flex-col text-xs">
                      <span className="font-bold text-black dark:text-white">{store.owner}</span>
                      <span className="text-[10px] text-black/70 dark:text-white/70 mt-0.5">{store.phone}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-xs font-semibold text-black dark:text-white">{store.region}</td>
                  <td className="px-3 py-2">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase
                      ${store.status === 'Active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' : 
                        store.status === 'Pending' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-455' : 
                        'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400'}`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 font-black text-xs text-black dark:text-white">{store.revenue}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px]
                        ${store.liveOrders > 0 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-zinc-100 text-black/50 dark:bg-zinc-800 dark:text-white/50'}`}>
                        {store.liveOrders}
                      </div>
                      <span className="text-[10px] font-semibold text-black/70 dark:text-white/70">{store.liveOrdersStatus}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button className="p-1 hover:bg-zinc-150 dark:hover:bg-zinc-800 rounded-lg transition-colors text-black/60 dark:text-white/60 hover:text-blue-500 dark:hover:text-blue-400">
                      <Eye size={14} />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredStores.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-3 py-6 text-center text-black/50 dark:text-white/50 text-xs">
                    No stores found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-3 py-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <span className="text-[11px] font-medium text-black/70 dark:text-white/70">Showing {Math.min(filteredStores.length, 1)} to {filteredStores.length} of {filteredStores.length} entries</span>
          <div className="flex gap-1">
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors">
              <ChevronLeft size={12} />
            </button>
            <button className="w-6 h-6 flex items-center justify-center rounded bg-[var(--primary)] text-white font-bold text-[10px]">1</button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">2</button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">3</button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">...</button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors text-[10px]">16</button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors">
              <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
