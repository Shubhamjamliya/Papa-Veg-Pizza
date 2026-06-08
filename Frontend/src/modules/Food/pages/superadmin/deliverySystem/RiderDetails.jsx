import React from 'react';
import { X, Phone, MessageCircle, MapPin, PhoneCall, RefreshCcw, Activity } from 'lucide-react';

export default function RiderDetails({ rider, onClose, onViewPerformance }) {
    if (!rider) return null;

    return (
        <>
            {/* Drawer Backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" onClick={onClose}></div>
            
            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] lg:w-[400px] bg-white dark:bg-zinc-900 shadow-[-20px_0_40px_rgba(0,0,0,0.1)] z-50 flex flex-col transform transition-transform duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight uppercase">Rider Telemetry</h2>
                    <button onClick={onClose} className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                    {/* Profile Section */}
                    <section className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--primary)]/50 p-0.5 shadow-sm bg-white dark:bg-zinc-900">
                                <img 
                                    alt="Rider Profile" 
                                    className="w-full h-full rounded-full object-cover" 
                                    src={`https://ui-avatars.com/api/?name=${rider.name || 'Marco+V'}&background=random&color=fff&size=150`} 
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white dark:border-zinc-900 rounded-full flex items-center justify-center">
                                <span className="absolute w-full h-full bg-emerald-400 rounded-full animate-ping opacity-50"></span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50">{rider.name || 'Marco V.'}</h3>
                            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">ID: {rider.id || 'RID-4421'}</p>
                            <p className="text-sm font-bold text-[var(--primary)] flex items-center gap-1.5 mt-1.5">
                                <Phone size={14} />
                                +39 342 998 ****
                            </p>
                        </div>
                    </section>
                    
                    {/* Quick Actions */}
                    <section className="grid grid-cols-4 gap-3">
                        <button className="flex flex-col items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5 transition-all shadow-sm active:scale-95 group">
                            <PhoneCall className="text-[var(--primary)] mb-1.5 group-hover:scale-110 transition-transform" size={20} />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-[var(--primary)]">Call</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all shadow-sm active:scale-95 group">
                            <MessageCircle className="text-blue-500 mb-1.5 group-hover:scale-110 transition-transform" size={20} />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-blue-500">Message</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all shadow-sm active:scale-95 group">
                            <RefreshCcw className="text-rose-500 mb-1.5 group-hover:scale-110 transition-transform" size={20} />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-rose-500">Reassign</span>
                        </button>
                        <button onClick={onViewPerformance} className="flex flex-col items-center justify-center p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all shadow-sm active:scale-95 group">
                            <Activity className="text-emerald-500 mb-1.5 group-hover:scale-110 transition-transform" size={20} />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500">Analytics</span>
                        </button>
                    </section>

                    {/* Live Delivery Status */}
                    <section className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Active Order</span>
                            <span className="bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wider uppercase">In Transit</span>
                        </div>
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-extrabold text-[var(--primary)]">{rider.order || '#ORD-8821'}</p>
                                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Store: Central Hub A-12</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-zinc-900 dark:text-zinc-50 tracking-tight">3.2m</p>
                                    <p className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">ETA: 18:42</p>
                                </div>
                            </div>
                            
                            {/* Progress Line */}
                            <div className="relative h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-[65%] bg-[var(--primary)] shadow-sm"></div>
                            </div>
                            
                            <div className="flex items-start gap-2.5">
                                <MapPin className="text-zinc-400 mt-0.5 shrink-0" size={16} />
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Via della Moscova, 33</p>
                                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Customer: Sarah Jenkins</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Telemetry Data Grid */}
                    <section className="space-y-3">
                        <span className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Sensor Telemetry</span>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Current Speed</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">24.5</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase">km/h</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Heading</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">112°</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase">ESE</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">GPS Accuracy</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-blue-500">0.8</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase">meters</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Device Battery</p>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-emerald-500">82</span>
                                    <span className="text-[10px] font-bold text-zinc-400 uppercase">%</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Live Log Feed */}
                    <section className="space-y-3">
                        <span className="text-[10px] font-extrabold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">System Events</span>
                        <div className="bg-zinc-950 rounded-xl p-4 font-mono text-[11px] leading-relaxed space-y-2.5 h-40 overflow-y-auto custom-scrollbar border border-zinc-800 shadow-inner">
                            <p className="text-emerald-400 opacity-90">[18:38:02] GPS_LOCK_STABLE (HDOP 0.8)</p>
                            <p className="text-zinc-400">[18:38:15] POS_UPDATE: 45.4642, 9.1899</p>
                            <p className="text-[var(--primary)] font-bold">[18:39:44] EVENT: ENTERED_GEO_ZONE_B4</p>
                            <p className="text-zinc-400">[18:40:01] HEARTBEAT_ACK: LATENCY 42ms</p>
                            <p className="text-blue-400 opacity-90">[18:40:12] SIGNAL: L1/L5 DUAL_BAND_ACTIVE</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
