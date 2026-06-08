import React, { useState, useEffect } from 'react';
import { Search, MoreVertical, Route, Clock, Banknote } from 'lucide-react';

const MOCK_ZONES = [
  { id: 1, name: 'ZN-MAN-CENTRAL', city: 'New York', state: 'NY', country: 'USA', stores: 42, fee: '$4.50', eta: '25m', status: 'ACTIVE' },
  { id: 2, name: 'ZN-BK-DUMBO', city: 'Brooklyn', state: 'NY', country: 'USA', stores: 18, fee: '$5.20', eta: '45m', status: 'LIMITED' },
  { id: 3, name: 'ZN-QUE-AST', city: 'Queens', state: 'NY', country: 'USA', stores: 12, fee: '--', eta: 'TBD', status: 'DRAFT' },
  { id: 4, name: 'ZN-SF-SOMA', city: 'San Francisco', state: 'CA', country: 'USA', stores: 34, fee: '$6.00', eta: '18m', status: 'ACTIVE' },
];

export default function DeliveryZonesData({ onSelectZone, onOpenPricing }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [countryFilter, setCountryFilter] = useState('Country');
    const [stateFilter, setStateFilter] = useState('State');
    const [cityFilter, setCityFilter] = useState('City');
    const [statusFilter, setStatusFilter] = useState('Status');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchTerm]);

    const filteredZones = MOCK_ZONES.filter(zone => {
        if (debouncedSearch && !zone.name.toLowerCase().includes(debouncedSearch.toLowerCase()) && !zone.city.toLowerCase().includes(debouncedSearch.toLowerCase())) {
            return false;
        }
        if (countryFilter !== 'Country' && zone.country !== countryFilter) return false;
        if (stateFilter !== 'State' && zone.state !== stateFilter) return false;
        if (cityFilter !== 'City' && zone.city !== cityFilter) return false;
        if (statusFilter !== 'Status' && zone.status !== statusFilter) return false;
        return true;
    });

    return (
        <div className="flex flex-col gap-6">
            {/* Filters Bar */}
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-[200px] relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                    <input 
                        className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-500 transition-all" 
                        placeholder="Search Zone Registry..." 
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-[var(--primary)]/20">
                        <option>Country</option>
                        <option>USA</option>
                        <option>UK</option>
                    </select>
                    <select value={stateFilter} onChange={e => setStateFilter(e.target.value)} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-[var(--primary)]/20">
                        <option>State</option>
                        <option>NY</option>
                        <option>CA</option>
                    </select>
                    <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-[var(--primary)]/20">
                        <option>City</option>
                        <option>New York</option>
                        <option>Brooklyn</option>
                        <option>Queens</option>
                        <option>San Francisco</option>
                    </select>
                    <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-[var(--primary)]/20">
                        <option>Status</option>
                        <option>ACTIVE</option>
                        <option>LIMITED</option>
                        <option>DRAFT</option>
                    </select>
                </div>
            </div>

            {/* Zone Registry Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Zone Name</th>
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">City</th>
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-center">Stores</th>
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Fee</th>
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">ETA</th>
                            <th className="p-4 text-xs font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {filteredZones.map((zone) => (
                            <tr 
                                key={zone.id} 
                                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer"
                                onClick={() => onSelectZone && onSelectZone(zone)}
                            >
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                                            <Route size={18} />
                                        </div>
                                        <span className="font-bold text-sm text-zinc-900 dark:text-zinc-50 group-hover:text-[var(--primary)] transition-colors">{zone.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">{zone.city}</td>
                                <td className="p-4 text-center font-bold text-zinc-900 dark:text-zinc-50">{zone.stores}</td>
                                <td className="p-4 text-right font-black text-[var(--primary)]">{zone.fee}</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-600 dark:text-zinc-400">
                                        <Clock size={14} className="text-blue-500" />
                                        {zone.eta}
                                    </div>
                                </td>
                                <td className="p-4">
                                    {zone.status === 'ACTIVE' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider border border-emerald-500/20">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                            </span>
                                            ACTIVE
                                        </span>
                                    )}
                                    {zone.status === 'LIMITED' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-wider border border-amber-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            LIMITED
                                        </span>
                                    )}
                                    {zone.status === 'DRAFT' && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-wider border border-zinc-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                                            DRAFT
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); onOpenPricing && onOpenPricing(zone); }}
                                            className="p-1.5 text-zinc-400 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors"
                                            title="Pricing Rules"
                                        >
                                            <Banknote size={16} />
                                        </button>
                                        <button className="p-1.5 text-zinc-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredZones.length === 0 && (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-sm font-medium text-zinc-500">
                                    No zones found matching your filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
