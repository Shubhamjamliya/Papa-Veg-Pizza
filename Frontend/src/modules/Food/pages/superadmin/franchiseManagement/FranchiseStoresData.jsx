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
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all text-sm outline-none dark:text-zinc-100"
                placeholder="Search by Store Name, ID or Owner..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 font-semibold px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-sm"
              onClick={toggleFilters}
            >
              <Filter size={18} />
              Advanced Filters
            </button>
          </div>
          <div className="text-xs text-zinc-500 hidden sm:block">Showing {filteredStores.length} results</div>
        </div>
        
        {showFilters && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white dark:bg-zinc-900">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</label>
              <select 
                className="w-full p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] outline-none dark:text-zinc-100"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Region</label>
              <select 
                className="w-full p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] outline-none dark:text-zinc-100"
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
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Zone</label>
              <select 
                className="w-full p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] outline-none dark:text-zinc-100"
                value={zoneFilter}
                onChange={(e) => setZoneFilter(e.target.value)}
              >
                <option>All Zones</option>
                <option>Urban Metro</option>
                <option>Tier 2 Hub</option>
                <option>Highway Side</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Setup Date</label>
              <input 
                className="w-full p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] outline-none dark:text-zinc-400" 
                type="date" 
              />
            </div>
          </div>
        )}
      </div>

      {/* Enterprise Data Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Store ID</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Store Name</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Monthly Revenue</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Live Orders</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredStores.map((store, index) => (
                <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer" onClick={() => onRowClick && onRowClick(store)}>
                  <td className="px-6 py-4 font-medium text-sm text-zinc-900 dark:text-zinc-100">{store.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{store.name}</span>
                      <span className="text-xs text-zinc-500">{store.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-sm">
                      <span className="text-zinc-900 dark:text-zinc-100">{store.owner}</span>
                      <span className="text-xs text-zinc-500">{store.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">{store.region}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase
                      ${store.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                        store.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm text-zinc-900 dark:text-zinc-100">{store.revenue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs
                        ${store.liveOrders > 0 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500'}`}>
                        {store.liveOrders}
                      </div>
                      <span className="text-[10px] text-zinc-500">{store.liveOrdersStatus}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredStores.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-8 text-center text-zinc-500 text-sm">
                    No stores found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50">
          <span className="text-sm text-zinc-500">Showing {Math.min(filteredStores.length, 1)} to {filteredStores.length} of {filteredStores.length} entries</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[var(--primary)] text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors text-sm">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors text-sm">...</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors text-sm">16</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
