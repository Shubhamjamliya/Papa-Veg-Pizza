import React, { useState, useEffect } from 'react';
import { AlertCircle, Bot, Check, X } from 'lucide-react';

export default function RefundCancellationDetails({ isOpen, onClose, refund }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`w-full max-w-5xl mx-auto relative z-10 transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:right-auto md:left-[calc(100%-2.5rem)] z-20 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur rounded-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 md:hidden"
          >
            <X size={20} />
          </button>

          {/* Left Column: Order & Complaint Details */}
          <div className="flex-1 p-6 md:border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div>
                <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-1 block">Order {refund?.id || '#PV-8842'}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Review Refund Request</h2>
              </div>
              <span className="w-fit bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shrink-0">
                <AlertCircle size={14} className="fill-current text-red-100 dark:text-red-900/30" />
                Urgent
              </span>
            </div>

            {/* Customer Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg mb-6">
              <div>
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">Customer</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{refund?.customer || 'Rahul Sharma'}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">Contact</p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">+91 98765-43210</p>
              </div>
            </div>

            {/* Complaint Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Complaint Details</h3>
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900">
                <p className="text-sm italic text-zinc-600 dark:text-zinc-400 mb-4">"Pizza was cold and toppings were missing."</p>
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <img 
                    className="object-cover w-full h-full" 
                    alt="Customer complaint proof"
                    src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=800&h=450" 
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">1x Large Margherita</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">₹24.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600 dark:text-zinc-400">2x Garlic Bread</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">₹14.00</span>
                </div>
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-3 flex justify-between">
                  <span className="font-bold text-zinc-900 dark:text-zinc-50 text-base">Total Paid</span>
                  <span className="font-bold text-[var(--primary)] text-base">₹38.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Audit */}
          <div className="w-full md:w-[380px] bg-zinc-50 dark:bg-zinc-800/50 p-6 flex flex-col gap-6 shrink-0 relative overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 hidden md:flex p-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Recommendation Card */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-4 rounded-xl text-red-900 dark:text-red-200 mt-6 md:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <Bot size={18} className="text-red-600 dark:text-red-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400">AI Recommendation</span>
              </div>
              <p className="text-sm font-medium">Based on status: Preparing (50% Refund Recommended)</p>
            </div>

            {/* Action Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Refund Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">₹</span>
                  <input 
                    className="w-full pl-8 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100" 
                    type="text" 
                    defaultValue="19.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Refund Method</label>
                <select className="w-full px-3 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none appearance-none text-sm text-zinc-900 dark:text-zinc-100">
                  <option>Original Source</option>
                  <option>Store Wallet</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Admin Remarks</label>
                <textarea 
                  className="w-full px-3 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400" 
                  placeholder="Add internal notes..." 
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Audit Trail */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">Audit Trail</h4>
              <div className="space-y-6 relative">
                <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-700 z-0"></div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-zinc-50 dark:ring-zinc-800/50">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Requested by Customer</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{refund?.requestedAt || 'Today, 02:45 PM'}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 ring-4 ring-zinc-50 dark:ring-zinc-800/50">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">System Validation Passed</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Today, 02:46 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
              <button 
                onClick={onClose}
                className="px-3 py-2.5 border-2 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm font-bold rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors active:scale-95"
              >
                Reject Request
              </button>
              <button 
                onClick={onClose}
                className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-sm transition-all active:scale-95"
              >
                Approve Refund
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
