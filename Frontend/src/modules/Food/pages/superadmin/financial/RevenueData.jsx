import React, { useState, useEffect } from 'react';
import { Search, TrendingUp } from 'lucide-react';

const mockStores = [
  { id: 1, name: 'Indiranagar', cluster: 'North East Cluster', revenue: 2480000, growth: 18 },
  { id: 2, name: 'MG Road', cluster: 'City Center Cluster', revenue: 2120000, growth: 12 },
  { id: 3, name: 'Whitefield', cluster: 'Tech Corridor Cluster', revenue: 1950000, growth: 9 },
  { id: 4, name: 'Koramangala', cluster: 'South East Cluster', revenue: 1850000, growth: 15 },
  { id: 5, name: 'Jayanagar', cluster: 'South Cluster', revenue: 1620000, growth: 5 },
  { id: 6, name: 'Malleshwaram', cluster: 'North West Cluster', revenue: 1450000, growth: 8 },
  { id: 7, name: 'HSR Layout', cluster: 'South East Cluster', revenue: 1250000, growth: 11 },
];

export default function RevenueData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredStores = mockStores.filter(store => 
    store.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    store.cluster.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const formatCurrencyLakhs = (amount) => {
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  const getRankColor = (index) => {
    switch(index) {
      case 0: return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500';
      case 1: return 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
      case 2: return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-500';
      default: return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400';
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Top Store Ranking</h3>
          <span className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 tracking-widest">Revenue Weighted</span>
        </div>
        
        {/* Search Input for Debouncing */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Search stores or clusters..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all dark:text-zinc-100"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-5 py-3 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Rank</th>
              <th className="px-5 py-3 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Store Location</th>
              <th className="px-5 py-3 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Revenue</th>
              <th className="px-5 py-3 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Growth</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredStores.length > 0 ? (
              filteredStores.map((store, index) => (
                <tr key={store.id} className="hover:bg-[var(--primary)]/5 dark:hover:bg-[var(--primary)]/10 transition-colors group">
                  <td className="px-5 py-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${getRankColor(index)}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{store.name}</span>
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">{store.cluster}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {formatCurrencyLakhs(store.revenue)}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-emerald-600 dark:text-emerald-500 flex items-center gap-1 font-bold text-xs">
                      <TrendingUp size={14} />
                      {store.growth}%
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-5 py-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                  No stores found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
        <button className="text-xs text-[var(--primary)] font-bold hover:underline">View Full Leaderboard</button>
      </div>
    </div>
  );
}
