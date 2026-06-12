import React, { useState } from 'react';
import { Activity, Receipt, TrendingUp, TrendingDown, Hourglass, Undo2, Percent, Download, FileText, Bell, User } from 'lucide-react';
import TransactionData from './TransactionData';
import TransactionDetails from './TransactionDetails';
import ManualAdjustment from './ManualAdjustment';

export default function TransactionManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsDetailsOpen(true);
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto w-full space-y-4 min-h-screen bg-zinc-50 dark:bg-zinc-955 animate-fade-in">
      {/* Top Navbar Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 flex-1">
          <h2 className="text-lg font-bold text-black dark:text-white truncate">
            Transactions Management
          </h2>
          <nav className="flex items-center gap-4 mt-1 lg:mt-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-xs font-bold transition-all border-b-2 pb-0.5 ${activeTab === 'overview' ? 'text-[var(--primary)] border-[var(--primary)]' : 'text-black/50 dark:text-white/50 hover:text-[var(--primary)] border-transparent'}`}
            >
              Overview
            </button>
            <button
              className={`text-xs font-bold transition-all border-b-2 pb-0.5 text-black/50 dark:text-white/50 hover:text-[var(--primary)] border-transparent`}
            >
              Settlements
            </button>
            <button
              onClick={() => setActiveTab('reconciliation')}
              className={`text-xs font-bold transition-all border-b-2 pb-0.5 ${activeTab === 'reconciliation' ? 'text-[var(--primary)] border-[var(--primary)]' : 'text-black/50 dark:text-white/50 hover:text-[var(--primary)] border-transparent'}`}
            >
              Reconciliation
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <div className="flex items-center gap-1.5">
            <button className="px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 rounded-lg font-bold text-[11px] text-black/70 dark:text-white/70 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all flex items-center gap-1">
              <FileText size={12} />
              Reports
            </button>
            <button className="px-2.5 py-1 bg-[var(--primary)] text-white rounded-lg font-bold text-[11px] shadow-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-1">
              <Download size={12} />
              Export
            </button>
          </div>
        </div>
      </header>

      {activeTab === 'reconciliation' ? (
        <ManualAdjustment onCancel={() => setActiveTab('overview')} />
      ) : (
        <>
          {/* Dashboard Title & Quick Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-1">
            <div>
              <p className="text-xs font-semibold text-black/70 dark:text-white/70">Real-time enterprise financial ledger for PizzaCorp Global.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Live Ledger Sync
              </span>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Total Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Total Transactions</span>
                <span className="text-lg font-black text-black dark:text-white">18,540</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-[var(--primary)]" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 Q 10 20, 20 25 T 40 10 T 60 30 T 80 15 T 100 25" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Total Credits */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Total Credits</span>
                <span className="text-lg font-black text-black dark:text-white">₹1.25 Cr</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-emerald-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 38 Q 25 30, 50 20 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Total Debits */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Total Debits</span>
                <span className="text-lg font-black text-black dark:text-white">₹48.25 L</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-rose-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 5 Q 25 15, 50 25 T 100 38" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Pending Settlements */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Pending Settlements</span>
                <span className="text-lg font-black text-black dark:text-white">₹8.75 L</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-amber-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 20 H 100" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Refund Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Refund Transactions</span>
                <span className="text-lg font-black text-black dark:text-white">425</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-indigo-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 L 20 15 L 40 30 L 60 10 L 80 25 L 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Commission Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between group">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-wider">Commission Txns</span>
                <span className="text-lg font-black text-black dark:text-white">2,140</span>
              </div>
              <div className="h-6 w-16 opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                <svg className="w-full h-full text-zinc-500 dark:text-zinc-400" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 C 20 35, 40 5, 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Ledger Activity Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-3.5">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-bold text-xs text-black dark:text-white">Ledger Activity</h5>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                    <span className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Credits</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Debits</span>
                  </div>
                </div>
              </div>

              <div className="h-36 relative border-b border-l border-zinc-200 dark:border-zinc-800 mt-2">
                <div className="absolute inset-0 flex items-end justify-between px-1.5 pb-0">
                  {/* Visualizing bar charts */}
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-16 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-6 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Mon</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-20 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-8 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Tue</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-14 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-10 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Wed</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-24 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-7 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Thu</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-28 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-5 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Fri</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-12 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-4 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Sat</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-1 group cursor-pointer">
                    <div className="w-6 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-16 rounded-t-sm transition-colors"></div>
                    <div className="w-6 bg-rose-500/20 group-hover:bg-rose-500/30 h-6 rounded-t-sm -mt-1 transition-colors"></div>
                    <span className="text-[9px] text-black/50 dark:text-white/50 font-semibold mt-1">Sun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Donut */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-3.5 flex flex-col justify-between">
              <h5 className="font-bold text-xs text-black dark:text-white mb-3">Txn Type Distribution</h5>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-24 h-24 rounded-full border-[8px] border-[var(--primary)] flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer">
                  <div className="absolute inset-[-8px] w-24 h-24 rounded-full border-[8px] border-rose-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 30%)' }}></div>
                  <div className="absolute inset-[-8px] w-24 h-24 rounded-full border-[8px] border-zinc-500" style={{ clipPath: 'polygon(50% 50%, 100% 30%, 100% 100%, 80% 100%)' }}></div>
                  <div className="text-center bg-white dark:bg-zinc-900 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-inner z-10">
                    <span className="font-black text-sm text-black dark:text-white block">18.5k</span>
                    <span className="text-[8px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Total Txns</span>
                  </div>
                </div>
                <div className="w-full mt-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70"><span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span> Sales</span>
                    <span className="font-bold text-black dark:text-white">72%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Refunds</span>
                    <span className="font-bold text-black dark:text-white">8%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70"><span className="w-2 h-2 rounded-full bg-zinc-500"></span> Commissions</span>
                    <span className="font-bold text-black dark:text-white">15%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70"><span className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-700"></span> Other</span>
                    <span className="font-bold text-black dark:text-white">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Data Section */}
          <TransactionData onViewTransaction={handleViewTransaction} />

          {/* Slide-in Drawer */}
          <TransactionDetails
            isOpen={isDetailsOpen}
            onClose={() => setIsDetailsOpen(false)}
            transaction={selectedTransaction}
          />
        </>
      )}
    </div>
  );
}
