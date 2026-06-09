import React from 'react';
import { X } from 'lucide-react';

export default function RefundModal({ isOpen, onClose, transaction }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-zinc-900/60 dark:bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-md rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col animate-fade-down">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
          <h3 className="font-extrabold text-lg text-zinc-900 dark:text-zinc-100">Process Refund</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-lg border border-zinc-200 dark:border-zinc-800/50">
            <div>
              <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Original Amount</p>
              <p className="font-bold text-zinc-900 dark:text-zinc-100">₹{transaction?.amount?.toFixed(2) || '1,240.00'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Remaining Limit</p>
              <p className="font-bold text-zinc-900 dark:text-zinc-100">₹{transaction?.amount?.toFixed(2) || '1,240.00'}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Refund Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-zinc-500 dark:text-zinc-400">₹</span>
                <input 
                  className="w-full pl-8 pr-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] font-bold text-zinc-900 dark:text-zinc-100 outline-none transition-colors" 
                  type="text" 
                  defaultValue={transaction?.amount || '1240'}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Refund Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="text-[var(--primary)] focus:ring-[var(--primary)] accent-[var(--primary)]" name="refundType" type="radio"/>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">Full</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="text-[var(--primary)] focus:ring-[var(--primary)] accent-[var(--primary)]" name="refundType" type="radio"/>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">Partial</span>
                </label>
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Refund Reason</label>
              <select className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm py-2 px-3 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-zinc-800 dark:text-zinc-200 outline-none transition-colors">
                <option>Customer Cancelled</option>
                <option>Food Quality Issue</option>
                <option>Delivery Delay</option>
                <option>Incorrect Order</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-zinc-50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-800 flex gap-3">
          <button 
            className="flex-1 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg font-bold hover:bg-white dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-2.5 bg-rose-500 text-white rounded-lg font-bold hover:bg-rose-600 shadow-sm active:scale-95 transition-all"
            onClick={onClose}
          >
            Confirm Refund
          </button>
        </div>
      </div>
    </div>
  );
}
