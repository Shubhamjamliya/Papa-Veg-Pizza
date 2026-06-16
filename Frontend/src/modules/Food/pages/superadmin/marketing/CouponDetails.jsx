import React from 'react';
import { X, Info, Tag, Calendar, BarChart3, AlertCircle } from 'lucide-react';

export default function CouponDetails({ isOpen, onClose, coupon }) {
  if (!isOpen || !coupon) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center lg:pl-[280px] p-4">
      <div className="bg-white dark:bg-zinc-955 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in fade-in duration-300">
        
        {/* Header */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center gap-2">
            <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
              <Tag size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Coupon Details</h3>
              <p className="text-[10px] text-zinc-500 mt-0.5">Configuration details for "{coupon.code}"</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
            <X size={18} className="text-zinc-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 text-xs">
          
          {/* Main Info */}
          <div className="flex items-center justify-between p-3 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800 rounded-xl">
            <div className="space-y-1">
              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${coupon.color === 'primary' ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'}`}>
                {coupon.code}
              </span>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mt-1">{coupon.title}</h4>
              <p className="text-[10px] text-zinc-500">{coupon.description}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase shrink-0 ${coupon.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
              {coupon.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            
            {/* Rules Details */}
            <div className="p-3 bg-zinc-50/20 dark:bg-zinc-900/10 border border-zinc-150 dark:border-zinc-800 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[10px] text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">
                <Info size={13} className="text-[var(--primary)]" />
                Discount Rules
              </div>
              <div className="space-y-1 text-[11px] text-zinc-650 dark:text-zinc-350">
                <p>Type: <span className="font-semibold">{coupon.type}</span></p>
                <p>Value: <span className="font-semibold">{coupon.type === 'Percentage' ? '50%' : '₹10 flat'}</span></p>
                <p>Max Discount: <span className="font-semibold">₹150</span></p>
              </div>
            </div>

            {/* Redemptions Progress */}
            <div className="p-3 bg-zinc-50/20 dark:bg-zinc-900/10 border border-zinc-150 dark:border-zinc-800 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[10px] text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">
                <BarChart3 size={13} className="text-[var(--primary)]" />
                Redemptions
              </div>
              <div className="space-y-1 text-[11px] text-zinc-650 dark:text-zinc-350">
                <p>Redeemed: <span className="font-semibold">{coupon.redemptions} uses</span></p>
                <p>Limit: <span className="font-semibold">{coupon.maxRedemptions} total</span></p>
                <p>Remaining: <span className="font-semibold">{Math.max(0, coupon.maxRedemptions - coupon.redemptions)} left</span></p>
              </div>
            </div>

            {/* Validity Details */}
            <div className="p-3 bg-zinc-50/20 dark:bg-zinc-900/10 border border-zinc-150 dark:border-zinc-800 rounded-xl space-y-2 md:col-span-2">
              <div className="flex items-center gap-1.5 font-bold text-[10px] text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">
                <Calendar size={13} className="text-[var(--primary)]" />
                Validity Period
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-650 dark:text-zinc-350">
                <div>
                  <p className="text-[9px] text-zinc-500">Start Date</p>
                  <p className="font-semibold mt-0.5">{new Date(coupon.validityStart).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'})}</p>
                </div>
                <div>
                  <p className="text-[9px] text-zinc-500">End Date</p>
                  <p className="font-semibold mt-0.5">{new Date(coupon.validityEnd).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'})}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Info banner */}
          <div className="p-2.5 bg-zinc-50 dark:bg-zinc-900/40 rounded-lg border border-zinc-200 dark:border-zinc-850 flex gap-2">
            <AlertCircle size={14} className="text-zinc-400 shrink-0 mt-0.5" />
            <p className="text-[10px] text-zinc-500 leading-normal">
              This is a franchise-wide coupon. Edits to its validity dates or redemptions limit will be pushed to the franchise point-of-sale systems immediately.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-end">
          <button 
            onClick={onClose} 
            className="h-8.5 px-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
