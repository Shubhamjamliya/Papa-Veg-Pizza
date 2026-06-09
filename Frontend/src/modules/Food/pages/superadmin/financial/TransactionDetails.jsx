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
      <div className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-[60] flex flex-col transform transition-transform duration-300 translate-x-0">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400" 
              title="Close Details"
              onClick={onClose}
            >
              <X size={20} />
            </button>
            <div>
              <h4 className="font-extrabold text-lg text-zinc-900 dark:text-zinc-100">Transaction Details</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Ref: <span className="font-mono text-zinc-900 dark:text-zinc-300">{transaction?.id || '#TXN-9921-004-B'}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Printer size={18} />
            </button>
            <button className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Section 1: Transaction Info */}
          <section>
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">General Information</h5>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Transaction No.</p>
                <p className="font-mono text-sm text-zinc-900 dark:text-zinc-100">{transaction?.id || '9921-004'}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Type</p>
                <p className="text-sm font-bold text-[var(--primary)]">{transaction?.type || 'Terminal Sale'}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Date & Time</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{transaction?.date || 'Oct 24, 2023 • 14:22:15'}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Creator</p>
                <div className="flex items-center gap-2 mt-1">
                  <img alt="Creator Avatar" className="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR7Fv3-S0kpV_AGwpu06qeW9rLJV2msNVAsZskjj-UZoHFyZu5DriVmz3DPD_sIVA4HFVB5xfDL4ZhmmU3YQU8swthaeY6bZ6ynElxmYe3Gr5sveIFnJ1eN6nPVKF2jSWtfDsk-wClWJd1esekwnxSKSCZEf_9biNK0MiBJ6mLxb-OKksImirnClQNs0dLjgpcoZ3k5HIjetLH90rtjw6Vz0ViEEQpCEwRtE1n1gLmm1Z5kEz2e0VmBFkc6XcQB4_qJ8jsSr4LXpk" />
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">John Shift-Lead</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Financial Entry */}
          <section className="bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 shadow-sm">
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Financial Entry</h5>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-2">
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Debit</p>
                <p className="text-xl md:text-2xl font-black text-rose-500">{transaction?.debit ? formatCurrency(transaction.debit) : '₹0.00'}</p>
              </div>
              <div className="p-2">
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Credit</p>
                <p className="text-xl md:text-2xl font-black text-[var(--primary)]">{transaction?.credit ? formatCurrency(transaction.credit) : '₹0.00'}</p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1">Running Bal.</p>
                <p className="text-lg font-black text-zinc-900 dark:text-zinc-100">{transaction?.balance ? formatCurrency(transaction.balance) : '₹42,881.12'}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Status</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-xs font-bold uppercase text-[var(--primary)]">Successfully Settled</span>
              </div>
            </div>
          </section>

          {/* Section 3: Source Reference */}
          <section>
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Source Reference</h5>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg group cursor-pointer border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                <div className="flex items-center gap-4">
                  <ShoppingCart className="text-zinc-400 dark:text-zinc-500" size={20} />
                  <div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-0.5">Order ID</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">#ORD-K82910</p>
                  </div>
                </div>
                <ExternalLink className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors rounded-lg group cursor-pointer border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700">
                <div className="flex items-center gap-4">
                  <CreditCard className="text-zinc-400 dark:text-zinc-500" size={20} />
                  <div>
                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-0.5">Payment Intent</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">pi_3Mxt0V2eZvKYlo2C1</p>
                  </div>
                </div>
                <ExternalLink className="text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
              </div>
            </div>
          </section>

          {/* Section 4: Store & Franchise */}
          <section>
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Entity Origin</h5>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
                <img alt="Franchise Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoNTpxkF8YKEtR3qeJKVARHvK_vJDHt3Rr1Q1K8O1iNlCzQOtRHZqPCAqNPNFzNDNxWUIwQc8BWOexo8cUBvDbD1Q8i9w6hV2FI-LkSsjQiGcmEo-95-lzmzFOjuGHAmGDfDkMvpxx-m8WqpJjO1iKFck3t_-lM7RkRzgeRObCD19pa_u6kiSYFfgaX4HcxpocP1ftXcDA37rbWXb10dRmj-IddJuQT6r5kkdMjThVXmUwytL7_tykyGgZOnTAyrqww4bMz5sRz4" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{transaction?.reference?.split(' | ')[1] || 'Brooklyn Heights - PH22'}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">Store Code: <span className="font-mono text-zinc-700 dark:text-zinc-300">IND-MH-442</span></p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1 mt-1">
                  <MapPin size={12} /> West Region • Mumbai, MH
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Description & Notes */}
          <section>
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Description & Notes</h5>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-lg border-l-4 border-[var(--primary)] italic text-sm text-zinc-600 dark:text-zinc-400 font-medium shadow-sm">
              "Late night rush weekend settlement. Batch closure successful with no terminal discrepancies. Tip reconciliation verified by manager JS."
            </div>
          </section>

          {/* Section 6: Audit Timeline */}
          <section>
            <h5 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">Audit Timeline</h5>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-white dark:ring-zinc-900"></div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase mb-0.5">Created</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{transaction?.date?.split(',')[0] || 'Oct 24'}, 14:22:15 • System Generated</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-white dark:ring-zinc-900"></div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase mb-0.5">Approved</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{transaction?.date?.split(',')[0] || 'Oct 24'}, 14:30:02 • Manager (js_admin)</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-900"></div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase mb-0.5">Modified</p>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 italic">-- No modifications recorded --</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[23px] top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-zinc-900 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase mb-0.5">Settled</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Oct 25, 02:00:00 • Global Treasury Batch</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 flex gap-4 mt-auto">
          <button className="flex-1 px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl font-bold text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            Audit Logs
          </button>
          <button className="flex-1 px-4 py-2.5 bg-[var(--primary)] text-white rounded-xl font-bold text-sm shadow-sm hover:brightness-110 active:scale-95 transition-all">
            Process Refund
          </button>
        </div>
      </div>
    </>
  );
}
