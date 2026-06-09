import React from 'react';
import { X } from 'lucide-react';

export default function TransactionDetails({ isOpen, onClose, transaction }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[60] bg-zinc-900/60 dark:bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 z-[70] transform transition-transform duration-300 shadow-xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900 z-10 sticky top-0">
          <h3 className="font-extrabold text-lg text-zinc-900 dark:text-zinc-100">Transaction Details</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="space-y-6">
            {/* Section 1: Payment Information */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Payment Information</h4>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Payment ID</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{transaction?.id || '#PAY-99231'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Gateway ID</span>
                  <span className="font-mono text-xs text-zinc-900 dark:text-zinc-100">txn_{transaction?.gateway?.toLowerCase() || 'razor'}_12345</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Method</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">UPI</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Status</span>
                  <span className="text-emerald-600 font-bold capitalize">{transaction?.status?.toLowerCase() || 'Success'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Timestamp</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">2024-05-24 14:30</span>
                </div>
              </div>
            </section>
            
            {/* Section 2: Order Information */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Order Information</h4>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Order</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{transaction?.orderId || '#PZ-12401'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Store</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">{transaction?.store || 'Indiranagar HQ'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Customer</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">{transaction?.customer?.name || 'Rahul Kapoor'}</span>
                </div>
              </div>
            </section>
            
            {/* Section 3: Amount Breakdown */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Amount Breakdown</h4>
              <div className="bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Subtotal</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">₹{((transaction?.amount || 1240) - 140).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400 font-medium">Tax</span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium">₹140.00</span>
                </div>
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-lg font-black mt-2">
                  <span className="text-zinc-900 dark:text-zinc-100">Final</span>
                  <span className="text-zinc-900 dark:text-zinc-100">₹{transaction?.amount?.toFixed(2) || '1240.00'}</span>
                </div>
              </div>
            </section>
            
            {/* Section 4: Audit Trail Timeline */}
            <section className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Audit Trail</h4>
              <div className="relative pl-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[var(--primary)] border-2 border-white dark:border-zinc-900"></div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Payment Created</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">14:30:01</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[var(--primary)] border-2 border-white dark:border-zinc-900"></div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Gateway Callback Received</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">14:30:05</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[var(--primary)] border-2 border-white dark:border-zinc-900"></div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Payment Captured</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">14:30:08</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
