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
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto w-full space-y-8 min-h-screen animate-fade-in relative pb-24">
      
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
            <Landmark className="text-[var(--primary)]" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Proton Ledger <span className="text-zinc-400 dark:text-zinc-500 font-medium text-xl md:text-2xl ml-2">| Franchise Commissions</span>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-sm text-zinc-700 dark:text-zinc-300">
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Section - Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Total Collected</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹18.45L</h3>
          </div>
          <div className="mt-4">
            <svg className="w-full h-8 text-[var(--primary)] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 25 Q 25 5, 50 15 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <p className="text-xs font-bold text-[var(--primary)] mt-2">↑ 12.4%</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-amber-500/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Pending</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹2.85L</h3>
          </div>
          <div className="mt-4">
            <svg className="w-full h-8 text-amber-500 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 10 Q 25 25, 50 20 T 100 28" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <p className="text-xs font-bold text-amber-500 mt-2">↓ 2.1%</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Settled</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹15.60L</h3>
          </div>
          <div className="mt-4">
            <svg className="w-full h-8 text-[var(--primary)] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 20 Q 40 5, 70 10 T 100 2" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <p className="text-xs font-bold text-[var(--primary)] mt-2">↑ 8.5%</p>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Earnings</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹1.24Cr</h3>
          </div>
          <div className="mt-4">
            <svg className="w-full h-8 text-[var(--primary)] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 28 Q 30 20, 60 25 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <p className="text-xs font-bold text-[var(--primary)] mt-2">↑ 15.2%</p>
          </div>
        </div>
        
        {/* Card 5 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-[var(--primary)]/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Today</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹42.5k</h3>
          </div>
          <div className="mt-4">
            <svg className="w-full h-8 text-[var(--primary)] opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 25 L 20 15 L 40 20 L 60 5 L 80 15 L 100 2" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            <p className="text-xs font-bold text-[var(--primary)] mt-2">↑ 4.2%</p>
          </div>
        </div>
        
        {/* Card 6 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-zinc-500/30 transition-all group">
          <div>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Settlements</p>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">32</h3>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="flex-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                <span className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[65%] rounded-full"></span>
              </span>
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">65%</span>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Tasks Pending</p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Revenue Sharing Donut */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Revenue Sharing</h3>
            <MoreVertical className="text-zinc-400 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300" size={20} />
          </div>
          <div className="flex items-center justify-around">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-zinc-100 dark:text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                <path className="text-[var(--primary)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-black text-2xl text-zinc-900 dark:text-zinc-100">70%</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[var(--primary)]"></span>
                <div>
                  <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Franchise</p>
                  <p className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">₹12.91L</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></span>
                <div>
                  <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Company</p>
                  <p className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">₹5.54L</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Trends Line Chart */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Collection Trends</h3>
            <select className="bg-transparent border-none text-xs font-bold text-[var(--primary)] outline-none cursor-pointer">
              <option>7 Days</option>
              <option>30 Days</option>
            </select>
          </div>
          <div className="h-32 w-full mt-4 flex items-end justify-between gap-1 md:gap-2">
            <div className="flex-1 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 hover:bg-[var(--primary)]/30 dark:hover:bg-[var(--primary)]/40 rounded-t-sm h-[40%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/20 dark:bg-[var(--primary)]/30 hover:bg-[var(--primary)]/40 dark:hover:bg-[var(--primary)]/50 rounded-t-sm h-[60%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/40 dark:bg-[var(--primary)]/50 hover:bg-[var(--primary)]/60 dark:hover:bg-[var(--primary)]/70 rounded-t-sm h-[80%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/60 dark:bg-[var(--primary)]/70 hover:bg-[var(--primary)]/80 dark:hover:bg-[var(--primary)]/90 rounded-t-sm h-[55%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/80 dark:bg-[var(--primary)]/90 hover:bg-[var(--primary)] rounded-t-sm h-[70%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)] hover:brightness-110 rounded-t-sm h-[90%] transition-colors cursor-pointer"></div>
            <div className="flex-1 bg-[var(--primary)]/90 dark:bg-[var(--primary)] hover:brightness-110 rounded-t-sm h-[85%] transition-colors cursor-pointer"></div>
          </div>
          <div className="flex justify-between mt-3 px-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Mon</span>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Sun</span>
          </div>
        </div>
      </div>

      {/* Extracted Data Component */}
      <CommissionData onViewCommission={handleViewCommission} />

      <button 
        onClick={() => setIsSettleModalOpen(true)}
        className="fixed bottom-8 right-8 bg-[var(--primary)] text-white h-14 px-6 rounded-full flex items-center gap-3 shadow-lg shadow-[var(--primary)]/30 hover:scale-105 active:scale-95 transition-all z-40"
      >
        <Banknote size={20} />
        <span className="font-bold whitespace-nowrap hidden sm:inline">Settle Commissions</span>
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
