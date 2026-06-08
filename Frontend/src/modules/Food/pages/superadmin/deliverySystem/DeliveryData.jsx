import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Filter, MoreVertical, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';

export default function DeliveryData({ onSelectDelivery }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');

    // Debouncing logic for filters
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const allDeliveries = [
        { id: '#PV-9821', order: 'Lg. Margherita + Coke', customer: 'Sarah Jenkins', store: 'Downtown (D1)', rider: 'Marcus R.', status: 'PICKED UP', distance: '3.2 km', eta: '12 mins', created: '12:45 PM', statusColor: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20' },
        { id: '#PV-9822', order: 'Family Feast Pk', customer: 'Robert Fox', store: 'West End (W4)', rider: 'Unassigned', status: 'PENDING', distance: '5.1 km', eta: '-', created: '12:52 PM', statusColor: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20' },
        { id: '#PV-9819', order: 'Veg Supreme Med', customer: 'Elena Gilbert', store: 'East Side (E2)', rider: 'Jordan S.', status: 'DELIVERED', distance: '1.8 km', eta: 'Arrived', created: '12:30 PM', statusColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' },
        { id: '#PV-9823', order: 'Garlic Bread x4', customer: 'Alex Wong', store: 'Downtown (D1)', rider: 'Lily T.', status: 'ASSIGNED', distance: '2.4 km', eta: '18 mins', created: '12:58 PM', statusColor: 'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20' },
        { id: '#PV-9818', order: 'Paneer Special', customer: 'Deepak K.', store: 'North Hub (N7)', rider: 'Amara L.', status: 'RETURNED', distance: '4.5 km', eta: '-', created: '12:15 PM', statusColor: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20' },
    ];

    const filteredDeliveries = allDeliveries.filter(delivery => {
        const matchesSearch = 
            delivery.id.toLowerCase().includes(debouncedTerm.toLowerCase()) || 
            delivery.order.toLowerCase().includes(debouncedTerm.toLowerCase()) || 
            delivery.rider.toLowerCase().includes(debouncedTerm.toLowerCase());
        
        const matchesStatus = statusFilter === 'All Status' || delivery.status === statusFilter.toUpperCase();

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-4">
            {/* Filter Panel */}
            <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-3 shadow-sm">
                <div className="flex items-center gap-2 flex-1 min-w-[200px] bg-zinc-50 dark:bg-zinc-950 px-3.5 py-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800 focus-within:border-[var(--primary)]/50 focus-within:ring-1 focus-within:ring-[var(--primary)]/20 transition-all">
                    <Search className="text-zinc-400" size={16} strokeWidth={2.5} />
                    <input 
                        className="w-full bg-transparent border-none focus:ring-0 text-xs font-semibold text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 outline-none p-0" 
                        placeholder="Search ID, Order, Rider..." 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block mx-1"></div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hidden sm:inline uppercase tracking-wider">Date:</span>
                    <button className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 text-zinc-700 dark:text-zinc-300 transition-colors border border-zinc-100 dark:border-zinc-800 shadow-sm">
                        Today <ChevronDown size={14} className="text-zinc-400" />
                    </button>
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hidden sm:inline uppercase tracking-wider">Store:</span>
                    <button className="bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 text-zinc-700 dark:text-zinc-300 transition-colors border border-zinc-100 dark:border-zinc-800 shadow-sm">
                        All Stores <ChevronDown size={14} className="text-zinc-400" />
                    </button>
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hidden sm:inline uppercase tracking-wider">Status:</span>
                    <select 
                        className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 py-2 pl-3 pr-8 rounded-xl text-xs font-bold text-zinc-700 dark:text-zinc-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none appearance-none cursor-pointer shadow-sm"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Assigned</option>
                        <option>Picked Up</option>
                        <option>Delivered</option>
                        <option>Returned</option>
                    </select>
                </div>
                
                <button className="p-2.5 text-zinc-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-xl transition-all ml-auto border border-transparent hover:border-[var(--primary)]/20 shadow-sm">
                    <Filter size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Main Data Table Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm flex-1 flex flex-col">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800 flex-1">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-zinc-50/80 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">ID</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Order</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Customer</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Store</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Rider</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Status</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Distance</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">ETA</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Created</th>
                                <th className="px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                            {filteredDeliveries.length > 0 ? filteredDeliveries.map((delivery, index) => (
                                <tr key={index} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-850 transition-colors group cursor-pointer" onClick={() => onSelectDelivery && onSelectDelivery(delivery)}>
                                    <td className="px-5 py-4 text-xs font-bold text-[var(--primary)]">{delivery.id}</td>
                                    <td className="px-5 py-4 text-xs font-bold text-zinc-800 dark:text-zinc-100">{delivery.order}</td>
                                    <td className="px-5 py-4 text-xs text-zinc-600 dark:text-zinc-300 font-semibold">{delivery.customer}</td>
                                    <td className="px-5 py-4 text-xs text-zinc-500 dark:text-zinc-400 font-medium">{delivery.store}</td>
                                    <td className="px-5 py-4">
                                        <div className={`flex items-center gap-2.5 ${delivery.rider === 'Unassigned' ? 'text-amber-600 dark:text-amber-500' : 'text-zinc-700 dark:text-zinc-200'}`}>
                                            {delivery.rider === 'Unassigned' ? (
                                                <AlertTriangle size={14} className="animate-pulse" />
                                            ) : (
                                                <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-700">
                                                    <img src={`https://i.pravatar.cc/100?u=${delivery.rider.replace(' ', '')}`} alt={delivery.rider} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <span className="text-xs font-bold">{delivery.rider}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold tracking-wide ${delivery.statusColor}`}>
                                            {delivery.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-300">{delivery.distance}</td>
                                    <td className="px-5 py-4 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-300">{delivery.eta}</td>
                                    <td className="px-5 py-4 text-xs text-zinc-400 dark:text-zinc-500 font-medium">{delivery.created}</td>
                                    <td className="px-5 py-4 text-right">
                                        <button 
                                            className="p-1.5 text-zinc-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            onClick={(e) => { e.stopPropagation(); onSelectDelivery && onSelectDelivery(delivery); }}
                                        >
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="10" className="px-5 py-16 text-center">
                                        <div className="flex flex-col items-center justify-center gap-3">
                                            <div className="h-12 w-12 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                                                <Search size={24} />
                                            </div>
                                            <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">No deliveries found</p>
                                            <p className="text-xs text-zinc-400 dark:text-zinc-500">Try adjusting your filters or search terms.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                {/* Pagination */}
                <div className="bg-zinc-50/80 dark:bg-zinc-950/30 px-5 py-3.5 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 shrink-0">
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        Showing {filteredDeliveries.length > 0 ? 1 : 0} to {filteredDeliveries.length} of {allDeliveries.length} active deliveries
                    </span>
                    <div className="flex gap-1.5">
                        <button className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-400 hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-colors shadow-sm disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-400 hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-colors shadow-sm disabled:opacity-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
