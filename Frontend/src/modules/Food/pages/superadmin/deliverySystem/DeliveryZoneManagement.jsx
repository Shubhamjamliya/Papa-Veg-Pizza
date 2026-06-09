import React, { useState } from 'react';
import { Plus, Upload, Share, Layers, Zap, Store, Activity, Maximize2 } from 'lucide-react';
import DeliveryZonesData from './DeliveryZonesData';
import DeliveryZoneDetails from './DeliveryZoneDetails';
import ZonePricingRules from './ZonePricingRules';
import CreateDeliveryZone from './CreateDeliveryZone';

export default function DeliveryZoneManagement() {
    const [selectedZone, setSelectedZone] = useState(null);
    const [pricingRulesZone, setPricingRulesZone] = useState(null);
    const [isCreateZoneOpen, setIsCreateZoneOpen] = useState(false);

    return (
        <div className="flex-1 flex flex-col gap-6 min-w-0 max-w-full">
            {/* Dashboard Header Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Delivery Zones</h1>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">Registry Management / Region 01</p>
                </div>
                <div className="flex gap-2.5">
                    <button
                        onClick={() => setIsCreateZoneOpen(true)}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-bold px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[var(--primary)]/20"
                    >
                        <Plus size={18} />
                        <span className="text-xs uppercase tracking-wider">Create Zone</span>
                    </button>
                    <button className="flex items-center justify-center p-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors rounded-xl shadow-sm active:scale-95">
                        <Upload size={18} />
                    </button>
                    <button className="flex items-center justify-center p-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors rounded-xl shadow-sm active:scale-95">
                        <Share size={18} />
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-3">
                        <Layers size={16} />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest">Total Zones</span>
                    </div>
                    <div className="text-3xl font-black text-[var(--primary)]">124</div>
                    <div className="text-xs font-bold text-emerald-500 mt-1.5 tracking-wide">+2 this week</div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-500 shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-3">
                        <Zap size={16} />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest">Active</span>
                    </div>
                    <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">118</div>
                    <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1.5 tracking-wide">95.1% uptime</div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-3">
                        <Store size={16} />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest">Stores</span>
                    </div>
                    <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">842</div>
                    <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mt-1.5 tracking-wide">Across all zones</div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-3">
                        <Activity size={16} />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest">Orders Today</span>
                    </div>
                    <div className="text-3xl font-black text-blue-500">14.2k</div>
                    <div className="text-xs font-bold text-[var(--primary)] mt-1.5 tracking-wide">Peak: 12:42 PM</div>
                </div>
            </div>

            {/* Delivery Zones Data (Filters & Table) */}
            <DeliveryZonesData onSelectZone={setSelectedZone} onOpenPricing={setPricingRulesZone} />

            {/* Map Preview Overlay */}
            <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 shadow-md">
                <img
                    alt="Map Interface"
                    className="w-full h-full object-cover opacity-70 grayscale brightness-75 dark:brightness-50 mix-blend-luminosity"
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80&fm=webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-5 left-5 z-10">
                    <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 shadow-sm flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--primary)]">Live Geospatial Feed</span>
                    </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10">
                    <div>
                        <h3 className="text-base font-extrabold text-white tracking-tight">Regional Coverage</h3>
                        <p className="text-xs font-medium text-zinc-300 mt-0.5">Zone overlap check active</p>
                    </div>
                    <button className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-lg">
                        <Maximize2 size={18} />
                    </button>
                </div>
            </div>

            <DeliveryZoneDetails zone={selectedZone} onClose={() => setSelectedZone(null)} />
            <ZonePricingRules zone={pricingRulesZone} onClose={() => setPricingRulesZone(null)} />
            <CreateDeliveryZone isOpen={isCreateZoneOpen} onClose={() => setIsCreateZoneOpen(false)} />
        </div>
    );
}
