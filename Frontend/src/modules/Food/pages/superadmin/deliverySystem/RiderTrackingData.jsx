import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const RIDERS = [
    { id: '1', name: 'Marco Polo', order: 'ORD-9921', status: 'DELAYED', reason: 'TRAFFIC_JAM', speed: 0, eta: '+12m' },
    { id: '2', name: 'Sarah Connor', order: 'ORD-9925', status: 'DELIVERING', reason: 'EN_ROUTE', speed: 34, eta: '4m' },
    { id: '3', name: 'James Bond', order: 'STATION_04', status: 'AVAILABLE', reason: 'IDLE', speed: 0, eta: 'READY' },
    { id: '4', name: 'Ellen Ripley', order: 'ORD-9930', status: 'DELIVERING', reason: 'LAST_MILE', speed: 18, eta: '1m' },
    { id: '5', name: 'John Doe', order: 'STATION_01', status: 'AVAILABLE', reason: 'IDLE', speed: 0, eta: 'READY' },
    { id: '6', name: 'Jane Smith', order: 'ORD-9945', status: 'DELIVERING', reason: 'EN_ROUTE', speed: 28, eta: '8m' },
];

export default function RiderTrackingData({ onSelectRider }) {
    const [filter, setFilter] = useState('ALL');
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    const filteredRiders = RIDERS.filter(rider => {
        if (filter !== 'ALL' && rider.status !== filter) return false;
        if (debouncedSearch && !rider.name.toLowerCase().includes(debouncedSearch.toLowerCase()) && !rider.order.toLowerCase().includes(debouncedSearch.toLowerCase())) return false;
        return true;
    });

    const statusCounts = {
        ALL: RIDERS.length,
        DELIVERING: RIDERS.filter(r => r.status === 'DELIVERING').length,
        AVAILABLE: RIDERS.filter(r => r.status === 'AVAILABLE').length,
        DELAYED: RIDERS.filter(r => r.status === 'DELAYED').length,
    };

    return (
        <div className="w-full h-full flex flex-col bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-xl z-20 shrink-0 lg:w-[380px]">
            <div className="px-6 pt-6 pb-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Fleet Monitor</h2>
                    <span className="text-xs font-bold text-[var(--primary)] px-2.5 py-1 bg-[var(--primary)]/10 rounded-full">{statusCounts.ALL} Active</span>
                </div>
                
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search riders or orders..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 shadow-sm transition-all"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
                    {['ALL', 'DELIVERING', 'AVAILABLE', 'DELAYED'].map(f => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all active:scale-95 border ${
                                filter === f 
                                    ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md shadow-[var(--primary)]/20' 
                                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                            }`}
                        >
                            {f} ({statusCounts[f]})
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                {filteredRiders.map(rider => (
                    <div 
                        key={rider.id}
                        onClick={() => onSelectRider && onSelectRider(rider)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer hover:shadow-md transition-all group ${
                            rider.status === 'DELAYED' 
                                ? 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-800/50' 
                                : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-[var(--primary)]/50'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                                rider.status === 'DELAYED' ? 'bg-rose-500 animate-pulse' :
                                rider.status === 'AVAILABLE' ? 'bg-emerald-500' :
                                'bg-[var(--primary)]'
                            }`}></div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-[var(--primary)] transition-colors">{rider.name}</p>
                                <p className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">{rider.order} • {rider.reason}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`text-xs font-black ${
                                rider.status === 'AVAILABLE' ? 'text-zinc-400 dark:text-zinc-500' :
                                'text-zinc-900 dark:text-zinc-50'
                            }`}>
                                {rider.speed > 0 ? `${rider.speed} KM/H` : rider.status === 'AVAILABLE' ? 'STANDBY' : '0 KM/H'}
                            </p>
                            <p className={`text-[10px] font-extrabold uppercase tracking-wider mt-0.5 ${
                                rider.status === 'DELAYED' ? 'text-rose-500' :
                                rider.status === 'AVAILABLE' ? 'text-emerald-500' :
                                'text-[var(--primary)]'
                            }`}>
                                {rider.speed > 0 ? `ETA ${rider.eta}` : rider.eta}
                            </p>
                        </div>
                    </div>
                ))}
                {filteredRiders.length === 0 && (
                    <div className="py-10 text-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                        No riders found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
