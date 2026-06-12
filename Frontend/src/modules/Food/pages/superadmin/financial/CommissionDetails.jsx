import React from 'react';
import { X, Share2, BarChart2, Briefcase, Store, Banknote, History, Check, CheckCheck, Receipt, ShoppingBag } from 'lucide-react';

export default function CommissionDetails({ isOpen, onClose, commission }) {
  if (!isOpen) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-900/40 dark:bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 translate-x-0 overflow-y-auto custom-scrollbar`}>
        
        {/* Top AppBar */}
        <header className="sticky top-0 z-10 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <button 
              onClick={onClose}
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors active:scale-90 text-[var(--primary)] shrink-0"
            >
              <X size={14} />
            </button>
            <h1 className="text-sm font-bold text-[var(--primary)] dark:text-zinc-100 truncate">
              Order {commission?.id || '#PZ-99231'} Details
            </h1>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button className="p-1 text-black/50 dark:text-white/50 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Share2 size={14} />
            </button>
            <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold text-[10px] border border-[var(--primary)]/20">
              SA
            </div>
          </div>
        </header>

        <main className="flex-1 p-3.5 space-y-4">
          
          {/* Section 1: Financial Breakdown (Bento Style) */}
          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold flex items-center gap-1.5 text-black dark:text-white">
                <BarChart2 className="text-[var(--primary)]" size={14} />
                Financial Breakdown
              </h2>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/70 dark:text-white/70 px-1.5 py-0.5 rounded-full text-[9px] font-bold border border-zinc-200 dark:border-zinc-700 tracking-wider">
                {commission?.commPercent || '10%'} Commission
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2.5">
              {/* Main Order Card */}
              <div className="col-span-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-sm hover:border-[var(--primary)]/30 transition-colors">
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-0.5">Total Order Amount</p>
                <p className="text-lg font-black text-[var(--primary)]">{formatCurrency((commission?.amount || 124) * 10)}</p>
                <div className="mt-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                  <span className="text-xs font-semibold text-black/50 dark:text-white/50">Inclusive of Tax</span>
                  <span className="font-mono text-xs font-bold text-black/70 dark:text-white/70">₹140.00</span>
                </div>
              </div>
              
              {/* Split Cards */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Briefcase className="text-amber-500" size={12} />
                  <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest">Company Share</p>
                </div>
                <p className="text-sm font-black text-black dark:text-white">{formatCurrency((commission?.amount || 124) * 9)}</p>
              </div>
              
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 shadow-sm hover:border-[var(--primary)]/30 transition-colors">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Store className="text-[var(--primary)]" size={12} />
                  <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest">Franchise Share</p>
                </div>
                <p className="text-sm font-black text-[var(--primary)]">{formatCurrency(commission?.amount || 1240)}</p>
              </div>
            </div>
          </section>

          {/* Section 2: Settlement Info */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-sm space-y-2.5">
            <h2 className="text-xs font-bold flex items-center gap-1.5 text-black dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
              <Banknote className="text-[var(--primary)]" size={14} />
              Settlement Info
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-black/50 dark:text-white/50">Status</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1 border ${
                  commission?.status === 'Settled' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800' :
                  commission?.status === 'Pending' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-emerald-800' :
                  'bg-zinc-100 dark:bg-zinc-800 text-black/70 dark:text-white/70 border-zinc-200 dark:border-zinc-700'
                }`}>
                  <span className={`w-1 h-1 rounded-full ${
                    commission?.status === 'Settled' ? 'bg-emerald-500' :
                    commission?.status === 'Pending' ? 'bg-amber-500' :
                    'bg-zinc-500'
                  }`}></span>
                  {commission?.status || 'Settled'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-black/50 dark:text-white/50">Date</span>
                <span className="font-mono text-xs font-bold text-black dark:text-white">2024-05-24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-black/50 dark:text-white/50">Ref Number</span>
                <span className="font-mono text-xs font-bold text-[var(--primary)]">#TXN_12345</span>
              </div>
            </div>
          </section>

          {/* Section 3: Audit Timeline */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-sm">
            <h2 className="text-xs font-bold flex items-center gap-1.5 text-black dark:text-white mb-3.5">
              <History className="text-[var(--primary)]" size={14} />
              Audit Timeline
            </h2>
            <div className="relative pl-3">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-1.5 bottom-1.5 w-[1.5px] bg-zinc-200 dark:bg-zinc-800"></div>
              
              <div className="space-y-3.5">
                {/* Step 1 */}
                <div className="relative flex items-start gap-3">
                  <div className="z-10 w-4 h-4 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-zinc-900">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black dark:text-white">Order Completed</p>
                    <p className="text-[9px] font-semibold text-black/50 dark:text-white/50 mt-0.5">May 24, 10:15 AM</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex items-start gap-3">
                  <div className="z-10 w-4 h-4 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-zinc-900">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black dark:text-white">Commission Calculated</p>
                    <p className="text-[9px] font-semibold text-black/50 dark:text-white/50 mt-0.5">May 24, 10:16 AM</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex items-start gap-3">
                  <div className="z-10 w-4 h-4 rounded-full bg-[var(--primary)] flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-zinc-900">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black dark:text-white">Settlement Created</p>
                    <p className="text-[9px] font-semibold text-black/50 dark:text-white/50 mt-0.5">May 24, 11:30 AM</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex items-start gap-3">
                  <div className={`z-10 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-zinc-900 ${commission?.status === 'Settled' ? 'bg-[var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}>
                    <Check size={10} className={commission?.status === 'Settled' ? 'text-white' : 'text-black/30 dark:text-white/30'} strokeWidth={3} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${commission?.status === 'Settled' ? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`}>Approved</p>
                    <p className="text-[9px] font-semibold text-black/50 dark:text-white/50 mt-0.5">{commission?.status === 'Settled' ? 'May 24, 02:45 PM' : 'Pending Approval'}</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex items-start gap-3">
                  <div className={`z-10 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ring-2 ring-white dark:ring-zinc-900 ${commission?.status === 'Settled' ? 'bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]' : 'bg-zinc-200 dark:bg-zinc-800'}`}>
                    <CheckCheck size={10} className={commission?.status === 'Settled' ? 'text-white' : 'text-black/30 dark:text-white/30'} strokeWidth={3} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${commission?.status === 'Settled' ? 'text-[var(--primary)]' : 'text-black/50 dark:text-white/50'}`}>Completed</p>
                    <p className="text-[9px] font-semibold text-black/50 dark:text-white/50 mt-0.5">{commission?.status === 'Settled' ? 'May 24, 04:00 PM' : 'Awaiting Settlement'}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deep Links / Actions */}
          <section className="grid grid-cols-2 gap-2.5 pb-4">
            <button className="flex flex-col items-center justify-center gap-1.5 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors active:scale-95 group">
              <Receipt className="text-[var(--primary)] group-hover:scale-110 transition-transform" size={16} />
              <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">Ledger Entry</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors active:scale-95 group">
              <ShoppingBag className="text-[var(--primary)] group-hover:scale-110 transition-transform" size={16} />
              <span className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase tracking-widest">Order Details</span>
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
