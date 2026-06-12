import React, { useState, useEffect } from 'react';
import { Search, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const initialData = [
  {
    id: 1,
    name: "Supreme Summer Feast",
    code: "SUMMER2024",
    type: "Bundle Deal",
    duration: "Jun 01 - Aug 31",
    roi: "6.4x",
    status: "Active",
    imgUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fm=webp"
  },
  {
    id: 2,
    name: "Night Owl Special",
    code: "LATE20",
    type: "Fixed Discount",
    duration: "Jul 15 - Jul 22",
    roi: "--",
    status: "Scheduled",
    imgUrl: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&q=80&fm=webp"
  },
  {
    id: 3,
    name: "BOGO Friday Blitz",
    code: "BOGOFRIDAY",
    type: "Buy 1 Get 1",
    duration: "Jan 01 - Apr 30",
    roi: "4.1x",
    status: "Completed",
    imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&fm=webp"
  },
  {
    id: 4,
    name: "Spicy Weekend Deal",
    code: "HOTWEEK",
    type: "Percentage %",
    duration: "Ongoing",
    roi: "8.2x",
    status: "Active",
    imgUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80&fm=webp"
  }
];

export function CampaignTable({ onRowClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [typeFilter, setTypeFilter] = useState('Campaign Type');
  
  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredData = initialData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
                          item.code.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
    const matchesType = typeFilter === 'Campaign Type' || item.type.includes(typeFilter) || typeFilter.includes(item.type);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <section className="space-y-4">
      {/* Advanced Filter Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex flex-col md:flex-row gap-3 shadow-sm">
        <div className="flex-1 relative">
          <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-50 dark:bg-zinc-95 border border-zinc-200 dark:border-zinc-800 rounded-lg py-1.5 pl-8 pr-3 focus:ring-2 focus:ring-[var(--primary)] text-xs outline-none text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 transition-all font-semibold" 
            placeholder="Search campaigns by name or code..." 
            type="text"
          />
          <Search size={14} className="absolute left-2.5 top-2 text-black/50 dark:text-white/50" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-zinc-50 dark:bg-zinc-95 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs px-2.5 py-1.5 focus:ring-2 focus:ring-[var(--primary)] outline-none min-w-[120px] text-black dark:text-white transition-all cursor-pointer font-semibold"
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Scheduled</option>
            <option>Completed</option>
          </select>
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-zinc-50 dark:bg-zinc-95 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs px-2.5 py-1.5 focus:ring-2 focus:ring-[var(--primary)] outline-none min-w-[120px] text-black dark:text-white transition-all cursor-pointer font-semibold"
          >
            <option>Campaign Type</option>
            <option>Seasonal</option>
            <option>Bundle Deal</option>
            <option>Buy 1 Get 1</option>
            <option>Fixed Discount</option>
            <option>Percentage %</option>
          </select>
        </div>
      </div>

      {/* Campaign List/Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-[10px] uppercase tracking-wider font-bold">
            <tr>
              <th className="px-3 py-2">Campaign Name</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Duration</th>
              <th className="px-3 py-2 text-right">ROI</th>
              <th className="px-3 py-2 text-center">Status</th>
              <th className="px-3 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-850/30 transition-colors group cursor-pointer" onClick={() => onRowClick && onRowClick(item.id)}>
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[var(--primary)]/10 flex items-center justify-center overflow-hidden shrink-0">
                      <img alt="Promo Icon" className="w-full h-full object-cover" src={item.imgUrl} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-black dark:text-white">{item.name}</p>
                      <p className="text-[10px] text-black/70 dark:text-white/70 mt-0.5">{item.code}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-2 text-xs font-semibold text-black/75 dark:text-white/75">{item.type}</td>
                <td className="px-3 py-2 text-xs font-semibold text-black/75 dark:text-white/75">{item.duration}</td>
                <td className="px-3 py-2 text-xs text-right font-bold text-[var(--primary)]">{item.roi}</td>
                <td className="px-3 py-2 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                    item.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' :
                    item.status === 'Scheduled' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                    'bg-zinc-100 text-black/70 dark:bg-zinc-800 dark:text-white/70'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-right" onClick={(e) => e.stopPropagation()}>
                  <button className="text-black/50 dark:text-white/50 hover:text-[var(--primary)] p-1 rounded-lg transition-colors">
                    <MoreVertical size={14} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-6 text-center text-xs font-semibold text-black/60 dark:text-white/60">No campaigns found matching the filters.</td>
              </tr>
            )}
          </tbody>
        </table>
        
        {/* Pagination Footer */}
        <div className="px-3 py-2 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <p className="text-[11px] font-semibold text-black/70 dark:text-white/70">Showing {filteredData.length} campaigns</p>
          <div className="flex gap-1.5 items-center">
            <button className="w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black/70 dark:text-white/70 transition-colors"><ChevronLeft size={12} /></button>
            <button className="w-6 h-6 flex items-center justify-center border border-[var(--primary)] rounded-lg bg-[var(--primary)] text-white text-[10px] font-bold shadow-sm">1</button>
            <button className="w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black/70 dark:text-white/70 text-[10px] transition-colors">2</button>
            <button className="w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-black/70 dark:text-white/70 transition-colors"><ChevronRight size={12} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
