import React from 'react';
import { X, Printer, Share2, ShoppingCart, CreditCard, ExternalLink, MapPin } from 'lucide-react';

export default function LedgerTransactionDetails({ isOpen, onClose, transaction }) {
  if (!isOpen) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  };

  return (
    <>
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-900/40 dark:bg-black/40 backdrop-blur-sm z-[55] transition-opacity"
        onClick={onClose}
      ></div>

      {/* Right Side Modal/Drawer for Transaction Details */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-[60] flex flex-col transform transition-transform duration-300 translate-x-0">
        
        {/* Header */}
        <div className="px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-3">
            <button 
              className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-black/50 dark:text-white/50" 
              title="Close Details"
              onClick={onClose}
            >
              <X size={14} />
            </button>
            <div>
              <h4 className="font-bold text-sm text-black dark:text-white">Transaction Details</h4>
              <p className="text-[10px] text-black/50 dark:text-white/50 font-bold">Ref: <span className="font-mono text-black dark:text-white">{transaction?.id || '#TXN-9921-004-B'}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="p-1 text-black/50 dark:text-white/50 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Printer size={12} />
            </button>
            <button className="p-1 text-black/50 dark:text-white/50 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Share2 size={12} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-4 custom-scrollbar">
          
          {/* Section 1: Transaction Info */}
          <section>
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">General Information</h5>
            <div className="grid grid-cols-2 gap-y-2.5">
              <div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Transaction No.</p>
                <p className="font-mono text-xs text-black dark:text-white">{transaction?.id || '9921-004'}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Type</p>
                <p className="text-xs font-bold text-[var(--primary)]">{transaction?.type || 'Terminal Sale'}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Date & Time</p>
                <p className="text-xs font-semibold text-black dark:text-white">{transaction?.date || 'Oct 24, 2023 • 14:22:15'}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Creator</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <img alt="Creator Avatar" className="w-4.5 h-4.5 rounded-full bg-zinc-200 dark:bg-zinc-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7Fv3-S0kpV_AGwpu06qeW9rLJV2msNVAsZskjj-UZoHFyZu5DriVmz3DPD_sIVA4HFVB5xfDL4ZhmmU3YQU8swthaeY6bZ6ynElxmYe3Gr5sveIFnJ1eN6nPVKF2jSWtfDsk-wClWJd1esekwnxSKSCZEf_9biNK0MiBJ6mLxb-OKksImirnClQNs0dLjgpcoZ3k5HIjetLH90rtjw6Vz0ViEEQpCEwRtE1n1gLmm1Z5kEz2e0VmBFkc6XcQB4_qJ8jsSr4LXpk" />
                  <p className="text-xs font-semibold text-black dark:text-white">John Shift-Lead</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Financial Entry */}
          <section className="bg-zinc-50 dark:bg-zinc-955 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/50 shadow-sm">
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">Financial Entry</h5>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-1">
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Debit</p>
                <p className="text-sm font-black text-rose-500">{transaction?.debit ? formatCurrency(transaction.debit) : '₹0.00'}</p>
              </div>
              <div className="p-1">
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Credit</p>
                <p className="text-sm font-black text-[var(--primary)]">{transaction?.credit ? formatCurrency(transaction.credit) : '₹0.00'}</p>
              </div>
              <div className="p-1.5 bg-white dark:bg-zinc-900 rounded border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Running Bal.</p>
                <p className="text-xs font-black text-black dark:text-white">{transaction?.balance ? formatCurrency(transaction.balance) : '₹42,881.12'}</p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-xs font-semibold text-black/50 dark:text-white/50">Status</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase text-[var(--primary)]">Successfully Settled</span>
              </div>
            </div>
          </section>

          {/* Section 3: Source Reference */}
          <section>
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">Source Reference</h5>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg group cursor-pointer border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="text-black/50 dark:text-white/50" size={14} />
                  <div>
                    <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Order ID</p>
                    <p className="text-xs font-semibold text-black dark:text-white">#ORD-K82910</p>
                  </div>
                </div>
                <ExternalLink className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg group cursor-pointer border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-black/50 dark:text-white/50" size={14} />
                  <div>
                    <p className="text-[9px] font-bold text-black/50 dark:text-white/50 mb-0.5">Payment Intent</p>
                    <p className="text-xs font-semibold text-black dark:text-white">pi_3Mxt0V2eZvKYlo2C1</p>
                  </div>
                </div>
                <ExternalLink className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
              </div>
            </div>
          </section>

          {/* Section 4: Store & Franchise */}
          <section>
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">Entity Origin</h5>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
                <img alt="Franchise Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoNTpxkF8YKEtR3qeJKVARHvK_vJDHt3Rr1Q1K8O1iNlCzQOtRHZqPCAqNPNFzNDNxWUIwQc8BWOexo8cUBvDbD1Q8i9w6hV2FI-LkSsjQiGcmEo-95-lzmzFOjuGHAmGDfDkMvpxx-m8WqpJjO1iKFck3t_-lM7RkRzgeRObCD19pa_u6kiSYFfgaX4HcxpocP1ftXcDA37rbWXb10dRmj-IddJuQT6r5kkdMjThVXmUwytL7_tykyGgZOnTAyrqww4bMz5sRz4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xs text-black dark:text-white">{transaction?.reference?.split(' | ')[1] || 'Brooklyn Heights - PH22'}</p>
                <p className="text-[10px] text-black/50 dark:text-white/50 font-bold mt-0.5">Store Code: <span className="font-mono text-black dark:text-white">IND-MH-442</span></p>
                <p className="text-[10px] text-black/50 dark:text-white/50 font-bold flex items-center gap-1 mt-0.5">
                  <MapPin size={10} /> West Region • Mumbai, MH
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Description & Notes */}
          <section>
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">Description & Notes</h5>
            <div className="p-2.5 bg-zinc-50 dark:bg-zinc-955 rounded-lg border-l-4 border-[var(--primary)] italic text-xs text-black/70 dark:text-white/70 font-semibold shadow-sm">
              "Late night rush weekend settlement. Batch closure successful with no terminal discrepancies. Tip reconciliation verified by manager JS."
            </div>
          </section>

          {/* Section 6: Audit Timeline */}
          <section>
            <h5 className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">Audit Timeline</h5>
            <div className="relative pl-4 space-y-3.5 before:absolute before:left-[5px] before:top-1.5 before:bottom-1.5 before:w-[1.5px] before:bg-zinc-200 dark:before:bg-zinc-800">
              
              <div className="relative">
                <div className="absolute -left-[14px] top-1 h-2 w-2 rounded-full bg-[var(--primary)] ring-2 ring-white dark:ring-zinc-900"></div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase mb-0.5">Created</p>
                <p className="text-xs font-semibold text-black dark:text-white">{transaction?.date?.split(',')[0] || 'Oct 24'}, 14:22:15 • System Generated</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[14px] top-1 h-2 w-2 rounded-full bg-[var(--primary)] ring-2 ring-white dark:ring-zinc-900"></div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase mb-0.5">Approved</p>
                <p className="text-xs font-semibold text-black dark:text-white">{transaction?.date?.split(',')[0] || 'Oct 24'}, 14:30:02 • Manager (js_admin)</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[14px] top-1 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-2 ring-white dark:ring-zinc-900"></div>
                <p className="text-[9px] font-bold text-black/50 dark:text-white/50 uppercase mb-0.5">Modified</p>
                <p className="text-xs font-semibold text-black/50 dark:text-white/50 italic">-- No modifications recorded --</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[14px] top-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                <p className="text-[9px] font-bold text-emerald-600 dark:text-emerald-500 uppercase mb-0.5">Settled</p>
                <p className="text-xs font-semibold text-black dark:text-white">Oct 25, 02:00:00 • Global Treasury Batch</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="p-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-955 flex gap-2 mt-auto">
          <button className="flex-1 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl font-bold text-xs text-black/70 dark:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            Audit Logs
          </button>
          <button className="flex-1 py-1.5 bg-[var(--primary)] text-white rounded-xl font-bold text-xs shadow-sm hover:brightness-110 active:scale-95 transition-all">
            Process Refund
          </button>
        </div>
      </div>
    </>
  );
}
