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
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto w-full space-y-8 min-h-screen animate-fade-in">
      {/* Top Navbar Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 truncate">
            Transactions Management
          </h2>
          <nav className="flex items-center gap-6 mt-2 lg:mt-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-sm font-bold transition-all border-b-2 pb-1 ${activeTab === 'overview' ? 'text-[var(--primary)] border-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] border-transparent'}`}
            >
              Overview
            </button>
            <button
              className={`text-sm font-bold transition-all border-b-2 pb-1 text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] border-transparent`}
            >
              Settlements
            </button>
            <button
              onClick={() => setActiveTab('reconciliation')}
              className={`text-sm font-bold transition-all border-b-2 pb-1 ${activeTab === 'reconciliation' ? 'text-[var(--primary)] border-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] border-transparent'}`}
            >
              Reconciliation
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <div className="hidden sm:flex items-center gap-2">
            <button className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg font-bold text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all flex items-center gap-2">
              <FileText size={16} />
              Reports
            </button>
            <button className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-bold text-sm shadow-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
              <Download size={16} />
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">Real-time enterprise financial ledger for PizzaCorp Global.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Live Ledger Sync
              </span>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Total Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Total Transactions</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">18,540</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-[var(--primary)]" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 Q 10 20, 20 25 T 40 10 T 60 30 T 80 15 T 100 25" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Total Credits */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Total Credits</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹1.25 Cr</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-emerald-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 38 Q 25 30, 50 20 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Total Debits */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-rose-500/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Total Debits</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹48.25 L</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-rose-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 5 Q 25 15, 50 25 T 100 38" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Pending Settlements */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-amber-500/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Pending Settlements</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹8.75 L</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-amber-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 20 H 100" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Refund Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-indigo-500/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Refund Transactions</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">425</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-indigo-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 L 20 15 L 40 30 L 60 10 L 80 25 L 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>

            {/* Commission Transactions */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-500/30 transition-all flex flex-col justify-between group">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Commission Txns</p>
                <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">2,140</h4>
              </div>
              <div className="mt-4 h-12 flex items-end opacity-70 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full text-zinc-500 dark:text-zinc-400" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0 35 C 20 35, 40 5, 100 5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ledger Activity Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Ledger Activity</h5>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--primary)]"></span>
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Credits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Debits</span>
                  </div>
                </div>
              </div>

              <div className="h-64 relative border-b border-l border-zinc-200 dark:border-zinc-800 mt-4">
                <div className="absolute inset-0 flex items-end justify-between px-2 pb-0">
                  {/* Visualizing bar charts */}
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-32 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-12 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Mon</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-40 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-16 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Tue</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-28 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-20 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Wed</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-48 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-14 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Thu</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-52 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-10 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Fri</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-24 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-8 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Sat</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                    <div className="w-8 bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]/30 h-32 rounded-t-sm transition-colors"></div>
                    <div className="w-8 bg-rose-500/20 group-hover:bg-rose-500/30 h-12 rounded-t-sm -mt-2 transition-colors"></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-2">Sun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Donut */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 flex flex-col">
              <h5 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-6">Txn Type Distribution</h5>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 rounded-full border-[12px] border-[var(--primary)] flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer">
                  <div className="absolute inset-[-12px] w-40 h-40 rounded-full border-[12px] border-rose-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 30%)' }}></div>
                  <div className="absolute inset-[-12px] w-40 h-40 rounded-full border-[12px] border-zinc-500" style={{ clipPath: 'polygon(50% 50%, 100% 30%, 100% 100%, 80% 100%)' }}></div>
                  <div className="text-center bg-white dark:bg-zinc-900 w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-inner z-10">
                    <span className="font-black text-2xl text-zinc-900 dark:text-zinc-100 block">18.5k</span>
                    <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Total Txns</span>
                  </div>
                </div>
                <div className="w-full mt-8 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300"><span className="w-3 h-3 rounded-full bg-[var(--primary)]"></span> Sales</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">72%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300"><span className="w-3 h-3 rounded-full bg-rose-500"></span> Refunds</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">8%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300"><span className="w-3 h-3 rounded-full bg-zinc-500"></span> Commissions</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">15%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300"><span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700"></span> Other</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">5%</span>
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
