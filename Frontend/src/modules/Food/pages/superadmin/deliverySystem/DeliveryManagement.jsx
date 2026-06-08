import React, { useState } from 'react';
import { 
    RefreshCw, Download, UserPlus, ArrowUp, ArrowDown, 
    Check, Truck, ClipboardList, AlertTriangle, RotateCcw
} from 'lucide-react';
import DeliveryData from './DeliveryData';
import DeliveryDetails from './DeliveryDetails';
import AssignRider from './AssignRider';

export default function DeliveryManagement() {
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    return (
        <div className="flex flex-col xl:flex-row gap-6 w-full max-w-full">
            {/* Main Content Canvas */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Delivery Management</h1>
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">Monitor, assign and track deliveries across all franchise stores in real time.</p>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm active:scale-95">
                            <RefreshCw size={14} className="text-zinc-500" />
                            <span>Refresh</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm active:scale-95">
                            <Download size={14} className="text-zinc-500" />
                            <span>Export</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm active:scale-95">
                            <span>Bulk Assign</span>
                        </button>
                        <button 
                            onClick={() => setIsAssignModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[var(--primary)] text-white hover:opacity-90 transition-all text-xs font-bold shadow-md shadow-[var(--primary)]/20 active:scale-95"
                        >
                            <UserPlus size={16} />
                            <span>Assign Rider</span>
                        </button>
                    </div>
                </div>

                {/* KPI Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">Total Deliveries</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">1,482</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                +12% <ArrowUp size={10} strokeWidth={3} />
                            </span>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">Active Deliveries</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-[var(--primary)]">42</span>
                            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                                Live now
                            </span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">Delivered Today</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">1,390</span>
                            <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-1.5 py-0.5 rounded">
                                94% goal
                            </span>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">Failed Deliveries</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-rose-500">8</span>
                            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                -2% <ArrowDown size={10} strokeWidth={3} />
                            </span>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">Avg Time</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">24m</span>
                            <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-1.5 py-0.5 rounded">
                                Fastest week
                            </span>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-white dark:bg-zinc-900 p-4.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:border-[var(--primary)]/50 transition-colors cursor-pointer group">
                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider group-hover:text-[var(--primary)] transition-colors">On-Time %</span>
                        <div className="flex items-baseline gap-2 mt-3">
                            <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">98.2%</span>
                            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                                Target 95%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Data Component */}
                <DeliveryData onSelectDelivery={setSelectedDelivery} />
            </div>

            {/* Right Activity Sidebar */}
            <aside className="hidden xl:flex flex-col w-[320px] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden h-[calc(100vh-160px)] sticky top-6">
                <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
                    <h3 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-50">Delivery Activity</h3>
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/20 animate-pulse">LIVE</span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                    {/* Activity Item */}
                    <div className="flex gap-4 relative">
                        <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-6 w-6 rounded-full bg-emerald-500 flex-shrink-0 z-10 border-[3px] border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <Check className="text-white" size={10} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug"><span className="font-extrabold">#PV-9819</span> delivered by <span className="font-extrabold text-zinc-900 dark:text-white">Jordan S.</span></p>
                            <p className="text-[10px] font-medium text-zinc-500 mt-1">Just now • East Side Zone</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-4 relative">
                        <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-6 w-6 rounded-full bg-blue-500 flex-shrink-0 z-10 border-[3px] border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <Truck className="text-white" size={10} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug"><span className="font-extrabold">#PV-9821</span> picked up by <span className="font-extrabold text-zinc-900 dark:text-white">Marcus R.</span></p>
                            <p className="text-[10px] font-medium text-zinc-500 mt-1">4 mins ago • Downtown Store</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-4 relative">
                        <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-6 w-6 rounded-full bg-purple-500 flex-shrink-0 z-10 border-[3px] border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <ClipboardList className="text-white" size={10} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug"><span className="font-extrabold">#PV-9823</span> assigned to <span className="font-extrabold text-zinc-900 dark:text-white">Lily T.</span></p>
                            <p className="text-[10px] font-medium text-zinc-500 mt-1">8 mins ago • Auto-assigned</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-4 relative">
                        <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-6 w-6 rounded-full bg-amber-500 flex-shrink-0 z-10 border-[3px] border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <AlertTriangle className="text-white" size={10} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug"><span className="font-extrabold">#PV-9822</span> pending for 10+ mins</p>
                            <p className="text-[10px] font-bold text-amber-600 mt-1">Critical • Manual action required</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-4 relative">
                        <div className="h-6 w-6 rounded-full bg-rose-500 flex-shrink-0 z-10 border-[3px] border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <RotateCcw className="text-white" size={10} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug"><span className="font-extrabold">#PV-9818</span> returned to North Hub</p>
                            <p className="text-[10px] font-medium text-zinc-500 mt-1">22 mins ago • Customer not home</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                    <button className="w-full py-2.5 text-xs font-extrabold text-[var(--primary)] hover:bg-[var(--primary)]/5 border border-transparent hover:border-[var(--primary)]/20 transition-all rounded-xl">View Full Log</button>
                </div>
            </aside>

            <DeliveryDetails delivery={selectedDelivery} onClose={() => setSelectedDelivery(null)} />
            <AssignRider isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} />
        </div>
    );
}
