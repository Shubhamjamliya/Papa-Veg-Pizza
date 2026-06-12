import React, { useState } from 'react';
import { Landmark, Banknote, MoreVertical } from 'lucide-react';
import CommissionData from './CommissionData';
import SettleCommission from './SettleCommission';
import CommissionDetails from './CommissionDetails';

export default function FranchiseCommission() {
  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);
  const [selectedCommission, setSelectedCommission] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewCommission = (commission) => {
    setSelectedCommission(commission);
    setIsDetailsOpen(true);
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto w-full space-y-4 min-h-screen bg-zinc-50 dark:bg-zinc-955 animate-fade-in relative">
      
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <div className="flex items-center gap-2 flex-1">
          <div className="w-7 h-7 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
            <Landmark className="text-[var(--primary)]" size={14} />
          </div>
          <h2 className="text-sm font-bold text-black dark:text-white">
            Proton Ledger <span className="text-black/50 dark:text-white/50 font-semibold text-xs ml-1.5">| Franchise Commissions</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-[11px] text-black/70 dark:text-white/70">
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Section - Bento Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Card 1 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Total Collected</span>
            <span className="text-lg font-black text-black dark:text-white">₹18.45L</span>
            <span className="text-[9px] font-bold text-[var(--primary)] mt-0.5">↑ 12.4%</span>
          </div>
          <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
            <svg className="w-full h-full text-[var(--primary)]" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 25 Q 25 5, 50 15 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-amber-500/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Pending</span>
            <span className="text-lg font-black text-black dark:text-white">₹2.85L</span>
            <span className="text-[9px] font-bold text-amber-500 mt-0.5">↓ 2.1%</span>
          </div>
          <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
            <svg className="w-full h-full text-amber-500" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 10 Q 25 25, 50 20 T 100 28" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Settled</span>
            <span className="text-lg font-black text-black dark:text-white">₹15.60L</span>
            <span className="text-[9px] font-bold text-[var(--primary)] mt-0.5">↑ 8.5%</span>
          </div>
          <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
            <svg className="w-full h-full text-[var(--primary)]" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 20 Q 40 5, 70 10 T 100 2" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Earnings</span>
            <span className="text-lg font-black text-black dark:text-white">₹1.24Cr</span>
            <span className="text-[9px] font-bold text-[var(--primary)] mt-0.5">↑ 15.2%</span>
          </div>
          <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
            <svg className="w-full h-full text-[var(--primary)]" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 28 Q 30 20, 60 25 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>
        
        {/* Card 5 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Today</span>
            <span className="text-lg font-black text-black dark:text-white">₹42.5k</span>
            <span className="text-[9px] font-bold text-[var(--primary)] mt-0.5">↑ 4.2%</span>
          </div>
          <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
            <svg className="w-full h-full text-[var(--primary)]" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 25 L 20 15 L 40 20 L 60 5 L 80 15 L 100 2" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>
        
        {/* Card 6 */}
        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between hover:border-zinc-500/30 transition-all group">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Settlements</span>
            <span className="text-lg font-black text-black dark:text-white">32</span>
            <span className="text-[9px] font-bold text-black/50 dark:text-white/50 mt-0.5">65% Done</span>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <div className="h-1 w-12 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
              <span className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[65%] rounded-full"></span>
            </div>
            <p className="text-[8px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Pending Tasks</p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Revenue Sharing Donut */}
        <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xs text-black dark:text-white">Revenue Sharing</h3>
            <MoreVertical className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white cursor-pointer" size={14} />
          </div>
          <div className="flex items-center justify-around">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-zinc-100 dark:text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                <path className="text-[var(--primary)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-black text-lg text-black dark:text-white">70%</span>
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shrink-0"></span>
                <div>
                  <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Franchise</p>
                  <p className="font-mono text-xs font-bold text-black dark:text-white">₹12.91L</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700 shrink-0"></span>
                <div>
                  <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Company</p>
                  <p className="font-mono text-xs font-bold text-black dark:text-white">₹5.54L</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Trends Line Chart */}
        <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xs text-black dark:text-white">Collection Trends</h3>
            <select className="bg-transparent border-none text-[10px] font-bold text-[var(--primary)] outline-none cursor-pointer p-0">
              <option>7 Days</option>
              <option>30 Days</option>
            </select>
          </div>
          <div className="h-24 w-full mt-2 flex items-end justify-between gap-1">
            <div className="flex-1 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 dark:hover:bg-[var(--primary)]/40 rounded-t-sm h-[40%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/20 dark:bg-[var(--primary)]/30 hover:bg-[var(--primary)]/40 dark:hover:bg-[var(--primary)]/50 rounded-t-sm h-[60%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/40 dark:bg-[var(--primary)]/50 hover:bg-[var(--primary)]/60 dark:hover:bg-[var(--primary)]/70 rounded-t-sm h-[80%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/60 dark:bg-[var(--primary)]/70 hover:bg-[var(--primary)]/80 dark:hover:bg-[var(--primary)]/90 rounded-t-sm h-[55%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/80 dark:bg-[var(--primary)]/90 hover:bg-[var(--primary)] rounded-t-sm h-[70%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)] hover:brightness-110 rounded-t-sm h-[90%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/90 dark:bg-[var(--primary)] hover:brightness-110 rounded-t-sm h-[85%] transition-colors cursor-pointer"></div>
          </div>
          <div className="flex justify-between mt-1.5 px-1">
            <span className="text-[9px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-wider">Mon</span>
            <span className="text-[9px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-wider">Sun</span>
          </div>
        </div>
      </div>

      {/* Extracted Data Component */}
      <CommissionData onViewCommission={handleViewCommission} />

      <button 
        onClick={() => setIsSettleModalOpen(true)}
        className="fixed bottom-6 right-6 bg-[var(--primary)] text-white h-10 px-4 rounded-full flex items-center gap-2 shadow-lg shadow-[var(--primary)]/30 hover:scale-105 active:scale-95 transition-all z-40"
      >
        <Banknote size={14} />
        <span className="font-bold text-xs whitespace-nowrap hidden sm:inline">Settle Commissions</span>
      </button>

      {/* Modal */}
      <SettleCommission 
        isOpen={isSettleModalOpen} 
        onClose={() => setIsSettleModalOpen(false)} 
      />

      {/* Commission Details Drawer */}
      <CommissionDetails 
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        commission={selectedCommission}
      />

    </div>
  );
}
