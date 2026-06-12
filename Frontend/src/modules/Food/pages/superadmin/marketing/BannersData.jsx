import React, { useState, useEffect } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';

const BANNERS_DATA = [
  {
    id: 1,
    title: 'Weekend BOGO Blowout',
    status: 'Active',
    type: 'Homepage Slider',
    startDate: 'Oct 24, 2023',
    priority: 'High',
    impressions: '245k',
    ctr: '5.2%',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp'
  },
  {
    id: 2,
    title: 'App First Order - 50% Off',
    status: 'Scheduled',
    type: 'App Slider',
    startDate: 'Nov 01, 2023',
    priority: 'Medium',
    impressions: '--',
    ctr: '--',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc3dd2613?w=800&q=80&fm=webp'
  },
  {
    id: 3,
    title: 'Family Size Savings Pack',
    status: 'Active',
    type: 'Popup Promo',
    startDate: 'Oct 15, 2023',
    priority: 'Medium',
    impressions: '112k',
    ctr: '3.8%',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80&fm=webp'
  }
];

export function BannersList({ searchTerm, filterType, filterStatus, onPreview }) {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [filteredData, setFilteredData] = useState(BANNERS_DATA);

  // Debounce search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  // Apply filters
  useEffect(() => {
    let result = BANNERS_DATA;

    if (debouncedSearch) {
      const lowerSearch = debouncedSearch.toLowerCase();
      result = result.filter(item => 
         item.title.toLowerCase().includes(lowerSearch) || 
         item.type.toLowerCase().includes(lowerSearch)
      );
    }

    if (filterType && filterType !== 'Banner Type') {
      result = result.filter(item => item.type === filterType || item.type.includes(filterType));
    }

    if (filterStatus && filterStatus !== 'Status') {
      result = result.filter(item => item.status === filterStatus);
    }

    setFilteredData(result);
  }, [debouncedSearch, filterType, filterStatus]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400';
      case 'Scheduled': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400';
      case 'Expired': return 'bg-zinc-100 text-black/70 dark:bg-zinc-800 dark:text-white/70';
      case 'Draft': return 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400';
      default: return 'bg-zinc-100 text-black/70';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'text-[var(--primary)]';
      case 'Medium': return 'text-black dark:text-white';
      case 'Low': return 'text-black/50 dark:text-white/50';
      default: return 'text-black/70 dark:text-white/70';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Current Banners ({filteredData.length})</h4>
        <span className="text-[10px] font-semibold text-black/50 dark:text-white/50">Sorted by Priority</span>
      </div>

      {filteredData.length > 0 ? filteredData.map((banner) => (
        <div key={banner.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-md transition-shadow group">
          <div className="w-full md:w-24 h-24 md:h-16 rounded-lg overflow-hidden bg-zinc-150 dark:bg-zinc-850 flex-shrink-0">
            <img 
              src={banner.image} 
              alt={banner.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
              <h5 className="text-xs font-bold text-black dark:text-white truncate">{banner.title}</h5>
              <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-full uppercase ${getStatusColor(banner.status)}`}>
                {banner.status}
              </span>
            </div>
            <p className="text-[10px] text-black/70 dark:text-white/70 font-semibold">{banner.type} • Starts: {banner.startDate}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 px-2 border-l border-zinc-200 dark:border-zinc-800 hidden lg:grid">
            <div className="text-center">
              <p className="text-[9px] text-black dark:text-white uppercase font-bold">Priority</p>
              <p className={`text-xs font-bold ${getPriorityColor(banner.priority)}`}>{banner.priority}</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-black dark:text-white uppercase font-bold">Impressions</p>
              <p className="text-xs font-semibold text-black dark:text-white">{banner.impressions}</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-black dark:text-white uppercase font-bold">CTR</p>
              <p className="text-xs font-semibold text-black dark:text-white">{banner.ctr}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 md:border-l md:border-zinc-200 md:dark:border-zinc-800 md:pl-3 mt-3 md:mt-0 w-full md:w-auto justify-end">
            <button onClick={() => onPreview && onPreview(banner)} className="p-1 text-black/50 dark:text-white/50 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 rounded-lg transition-colors"><Eye size={14} /></button>
            <button className="p-1 text-black/50 dark:text-white/50 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 rounded-lg transition-colors"><Edit size={14} /></button>
            <button className="p-1 text-black/50 dark:text-white/50 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-colors"><Trash2 size={14} /></button>
          </div>
        </div>
      )) : (
        <div className="p-6 text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <p className="text-xs font-semibold text-black/60 dark:text-white/60">No banners found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
