import React, { useState } from 'react';
import { X, History, Save, Banknote, Route, Zap, CloudRain, PartyPopper, PlusCircle } from 'lucide-react';

export default function ZonePricingRules({ zone, onClose }) {
    const [rules, setRules] = useState({
        baseFee: { enabled: true, value: '25.00' },
        perKmFee: { enabled: true, value: '8.50' },
        peakHour: { enabled: true, value: '1.5' },
        rainSurcharge: { enabled: false, value: '15.00' },
        festivalRule: { enabled: false, value: '30.00' },
    });

    const handleToggle = (key) => {
        setRules(prev => ({
            ...prev,
            [key]: { ...prev[key], enabled: !prev[key].enabled }
        }));
    };

    const handleChange = (key, val) => {
        setRules(prev => ({
            ...prev,
            [key]: { ...prev[key], value: val }
        }));
    };

    if (!zone) return null;

    return (
        <>
            {/* Drawer Backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity" onClick={onClose}></div>
            
            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] lg:w-[600px] bg-white dark:bg-zinc-900 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] z-[60] flex flex-col transform transition-transform duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 shrink-0">
                    <div className="flex items-center gap-2 text-[var(--primary)]">
                        <Banknote size={20} />
                        <h2 className="text-lg font-bold tracking-tight uppercase">Pricing Rules</h2>
                    </div>
                    <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-6 flex flex-col gap-6">
                        {/* Zone Header info */}
                        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                                    </span>
                                    <span className="text-[10px] font-extrabold text-[var(--primary)] uppercase tracking-widest">Active Zone</span>
                                </div>
                                <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">{zone.name || 'Indore - Vijay Nagar'}</h2>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">Manage algorithmic pricing modifiers for this operational sector.</p>
                            </div>
                        </section>

                        {/* Zone Status Feed */}
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm group bg-zinc-900">
                            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                                <img 
                                    className="w-full h-full object-cover mix-blend-luminosity grayscale" 
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80&fm=webp" 
                                    alt="Background" 
                                />
                            </div>
                            <div className="relative z-10 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-zinc-900/90 to-zinc-900/40">
                                <div className="flex gap-8 overflow-x-auto w-full md:w-auto">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">Demand Multiplier</span>
                                        <span className="text-2xl font-black text-[var(--primary)]">1.24x</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">Active Couriers</span>
                                        <span className="text-2xl font-black text-zinc-100">42</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">Current Weather</span>
                                        <span className="text-2xl font-black text-blue-400">Overcast</span>
                                    </div>
                                </div>
                                <div className="text-[10px] font-mono text-[var(--primary)]/80 animate-pulse hidden lg:block tracking-wider">
                                    SYSTEM_STATE: OPTIMIZING_YIELD_092
                                </div>
                            </div>
                        </div>

                        {/* Pricing Rules Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Base Fee */}
                            <div className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border ${rules.baseFee.enabled ? 'border-[var(--primary)]/50' : 'border-zinc-200 dark:border-zinc-800'} shadow-sm flex flex-col justify-between transition-all`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${rules.baseFee.enabled ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                            <Banknote size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Base Fee</h3>
                                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Fixed platform entry cost</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input type="checkbox" className="sr-only peer" checked={rules.baseFee.enabled} onChange={() => handleToggle('baseFee')} />
                                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                    </label>
                                </div>
                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Amount (₹)</span>
                                        <input 
                                            type="number" 
                                            className={`bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-mono text-right w-24 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all ${!rules.baseFee.enabled ? 'opacity-50 text-zinc-500 cursor-not-allowed' : 'text-[var(--primary)] font-bold'}`} 
                                            value={rules.baseFee.value} 
                                            onChange={(e) => handleChange('baseFee', e.target.value)}
                                            disabled={!rules.baseFee.enabled}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Per KM Fee */}
                            <div className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border ${rules.perKmFee.enabled ? 'border-[var(--primary)]/50' : 'border-zinc-200 dark:border-zinc-800'} shadow-sm flex flex-col justify-between transition-all`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${rules.perKmFee.enabled ? 'bg-blue-500/10 text-blue-500' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                            <Route size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Per KM Fee</h3>
                                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Distance based surcharge</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input type="checkbox" className="sr-only peer" checked={rules.perKmFee.enabled} onChange={() => handleToggle('perKmFee')} />
                                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                    </label>
                                </div>
                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Rate/KM (₹)</span>
                                        <input 
                                            type="number" 
                                            className={`bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-mono text-right w-24 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all ${!rules.perKmFee.enabled ? 'opacity-50 text-zinc-500 cursor-not-allowed' : 'text-blue-500 font-bold'}`} 
                                            value={rules.perKmFee.value} 
                                            onChange={(e) => handleChange('perKmFee', e.target.value)}
                                            disabled={!rules.perKmFee.enabled}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Peak Hour Surcharge */}
                            <div className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border ${rules.peakHour.enabled ? 'border-[var(--primary)]/50' : 'border-zinc-200 dark:border-zinc-800'} shadow-sm flex flex-col justify-between transition-all`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${rules.peakHour.enabled ? 'bg-amber-500/10 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Peak Hour</h3>
                                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">High demand multiplier</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input type="checkbox" className="sr-only peer" checked={rules.peakHour.enabled} onChange={() => handleToggle('peakHour')} />
                                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                    </label>
                                </div>
                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Multiplier</span>
                                        <input 
                                            type="number" 
                                            step="0.1"
                                            className={`bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-mono text-right w-24 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all ${!rules.peakHour.enabled ? 'opacity-50 text-zinc-500 cursor-not-allowed' : 'text-amber-500 font-bold'}`} 
                                            value={rules.peakHour.value} 
                                            onChange={(e) => handleChange('peakHour', e.target.value)}
                                            disabled={!rules.peakHour.enabled}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Rain Surcharge */}
                            <div className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border ${rules.rainSurcharge.enabled ? 'border-[var(--primary)]/50' : 'border-zinc-200 dark:border-zinc-800'} shadow-sm flex flex-col justify-between transition-all`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${rules.rainSurcharge.enabled ? 'bg-cyan-500/10 text-cyan-500' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                            <CloudRain size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Rain Surcharge</h3>
                                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Weather based protection</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input type="checkbox" className="sr-only peer" checked={rules.rainSurcharge.enabled} onChange={() => handleToggle('rainSurcharge')} />
                                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                    </label>
                                </div>
                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Flat Extra (₹)</span>
                                        <input 
                                            type="number" 
                                            className={`bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-mono text-right w-24 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all ${!rules.rainSurcharge.enabled ? 'opacity-50 text-zinc-500 cursor-not-allowed' : 'text-cyan-500 font-bold'}`} 
                                            value={rules.rainSurcharge.value} 
                                            onChange={(e) => handleChange('rainSurcharge', e.target.value)}
                                            disabled={!rules.rainSurcharge.enabled}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Festival Surcharge */}
                            <div className={`bg-white dark:bg-zinc-900 p-5 rounded-2xl border ${rules.festivalRule.enabled ? 'border-[var(--primary)]/50' : 'border-zinc-200 dark:border-zinc-800'} shadow-sm flex flex-col justify-between transition-all`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${rules.festivalRule.enabled ? 'bg-purple-500/10 text-purple-500' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                            <PartyPopper size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Festival Rule</h3>
                                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Holiday & Event pricing</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input type="checkbox" className="sr-only peer" checked={rules.festivalRule.enabled} onChange={() => handleToggle('festivalRule')} />
                                        <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                                    </label>
                                </div>
                                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Fixed Add-on (₹)</span>
                                        <input 
                                            type="number" 
                                            className={`bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-mono text-right w-24 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all ${!rules.festivalRule.enabled ? 'opacity-50 text-zinc-500 cursor-not-allowed' : 'text-purple-500 font-bold'}`} 
                                            value={rules.festivalRule.value} 
                                            onChange={(e) => handleChange('festivalRule', e.target.value)}
                                            disabled={!rules.festivalRule.enabled}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Logic Config */}
                            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-[var(--primary)]/5 hover:border-[var(--primary)]/30 transition-all min-h-[140px]">
                                <PlusCircle className="text-zinc-400 group-hover:text-[var(--primary)] group-hover:scale-110 transition-transform" size={28} />
                                <span className="text-xs font-bold text-zinc-500 group-hover:text-[var(--primary)] uppercase tracking-wider">Add Custom Logic</span>
                            </div>
                        </div>

                        {/* Telemetry Log Section */}
                        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm mt-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">System Event Log</h3>
                                <span className="text-[10px] font-mono text-zinc-400">REAL-TIME SYNC: ACTIVE</span>
                            </div>
                            <div className="space-y-3 font-mono text-xs h-32 overflow-y-auto custom-scrollbar pr-2">
                                <div className="flex gap-3 text-zinc-600 dark:text-zinc-300">
                                    <span className="text-zinc-400 shrink-0">[14:32:01]</span>
                                    <span className="text-blue-500 font-bold shrink-0">PEAK_RULE:</span>
                                    <span>Demand detected above threshold. Multiplier set to 1.5x.</span>
                                </div>
                                <div className="flex gap-3 text-zinc-600 dark:text-zinc-300">
                                    <span className="text-zinc-400 shrink-0">[14:31:45]</span>
                                    <span className="text-[var(--primary)] font-bold shrink-0">SYSTEM:</span>
                                    <span>Rule update pushed by RID_092. Sector synchronized.</span>
                                </div>
                                <div className="flex gap-3 text-zinc-600 dark:text-zinc-300">
                                    <span className="text-zinc-400 shrink-0">[14:30:12]</span>
                                    <span className="text-emerald-500 font-bold shrink-0">HEARTBEAT:</span>
                                    <span className="text-zinc-500">Zone mapping validated. 42 couriers online.</span>
                                </div>
                                <div className="flex gap-3 text-zinc-600 dark:text-zinc-300">
                                    <span className="text-zinc-400 shrink-0">[14:28:55]</span>
                                    <span className="text-rose-500 font-bold shrink-0">ALERT:</span>
                                    <span>Courier density dropping in South Quadrant. Suggesting multiplier boost.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Actions Container */}
                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 shrink-0 flex gap-3">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-bold text-xs uppercase tracking-wider">
                        <History size={16} />
                        Audit Logs
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-[var(--primary)] text-white font-extrabold rounded-xl shadow-md shadow-[var(--primary)]/20 hover:opacity-90 active:scale-95 transition-all uppercase tracking-wide text-xs">
                        <Save size={16} />
                        Push Changes
                    </button>
                </div>
            </div>
        </>
    );
}
