import React, { useState, useEffect, useMemo } from 'react';
import { Edit, MoreVertical, Sparkles } from 'lucide-react';

export const initialCoupons = [
  {
    id: 1,
    code: 'SUMMER50',
    status: 'Active',
    title: '50% Off Summer Special',
    description: 'Applicable on all large gourmet pizzas.',
    type: 'Percentage',
    redemptions: 850,
    maxRedemptions: 1000,
    validityStart: '2024-06-01',
    validityEnd: '2024-08-31',
    color: 'primary',
  },
  {
    id: 2,
    code: 'LUCKY10',
    status: 'Expired',
    title: 'Flash Friday $10 Off',
    description: 'Fixed discount for Friday lunch orders.',
    type: 'Fixed Amount',
    redemptions: 500,
    maxRedemptions: 500,
    validityStart: '2024-05-01',
    validityEnd: '2024-05-24',
    color: 'secondary',
  },
  {
    id: 3,
    code: 'BOGOPIZZA',
    status: 'Active',
    title: 'Buy One Get One Free',
    description: 'Valid on any medium Signature series.',
    type: 'BOGO',
    redemptions: 1500,
    maxRedemptions: 5000,
    validityStart: '2024-12-01',
    validityEnd: '2024-12-31',
    color: 'primary',
  }
];

// Debounce hook implementation
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

// Component for listing filtered coupons
export const CouponList = ({ filters }) => {
  const debouncedSearch = useDebounce(filters.search, 300);

  const filteredCoupons = useMemo(() => {
    return initialCoupons.filter(coupon => {
      const matchSearch = coupon.code.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
                          coupon.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchStatus = filters.status === 'All Statuses' || coupon.status === filters.status;
      const matchType = filters.type === 'Any Type' || coupon.type === filters.type;
      
      // Optionally handle date filtering if date filter is set
      let matchDate = true;
      if (filters.date) {
         const filterDate = new Date(filters.date).getTime();
         const start = new Date(coupon.validityStart).getTime();
         const end = new Date(coupon.validityEnd).getTime();
         matchDate = filterDate >= start && filterDate <= end;
      }
      
      return matchSearch && matchStatus && matchType && matchDate;
    });
  }, [debouncedSearch, filters.status, filters.type, filters.date]);

  return (
    <div className="space-y-3">
      {filteredCoupons.map((coupon) => (
        <div key={coupon.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col gap-3 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className={`absolute top-0 left-0 w-1 h-full ${coupon.color === 'primary' ? 'bg-[var(--primary)]' : 'bg-zinc-500'}`}></div>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide border ${coupon.color === 'primary' ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-black/70 dark:text-white/70 border-zinc-200 dark:border-zinc-700'}`}>
                  {coupon.code}
                </span>
                <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase ${coupon.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {coupon.status}
                </span>
              </div>
              <h3 className="text-xs font-bold mt-1.5 text-black dark:text-white">{coupon.title}</h3>
              <p className="text-[10px] text-black/70 dark:text-white/70 mt-0.5">{coupon.description}</p>
            </div>
            <div className="flex items-center gap-0.5">
              <button className="p-1 text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white rounded-lg transition-colors">
                <Edit size={14} />
              </button>
              <button className="p-1 text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white rounded-lg transition-colors">
                <MoreVertical size={14} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-zinc-150 dark:border-zinc-800 pt-3 mt-1.5">
            <div>
              <p className="text-[9px] text-black dark:text-white uppercase font-bold tracking-wider">Redemptions</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-full h-1 overflow-hidden">
                  <div className={`${coupon.color === 'primary' ? 'bg-[var(--primary)]' : 'bg-zinc-500'} h-full transition-all duration-500`} style={{ width: `${(coupon.redemptions / coupon.maxRedemptions) * 100}%` }}></div>
                </div>
                <span className="text-[10px] font-semibold text-black/70 dark:text-white/70">{coupon.redemptions >= 1000 ? (coupon.redemptions/1000).toFixed(1) + 'k' : coupon.redemptions}/{coupon.maxRedemptions >= 1000 ? (coupon.maxRedemptions/1000).toFixed(1) + 'k' : coupon.maxRedemptions}</span>
              </div>
            </div>
            <div>
              <p className="text-[9px] text-black dark:text-white uppercase font-bold tracking-wider">Validity</p>
              <p className="text-[10px] font-semibold mt-1 text-black/70 dark:text-white/70">
                {coupon.status === 'Active' ? `${new Date(coupon.validityStart).toLocaleDateString('en-US', {month:'short', day:'2-digit'})} - ${new Date(coupon.validityEnd).toLocaleDateString('en-US', {month:'short', day:'2-digit'}, {year:'numeric'})}` : `Expired ${new Date(coupon.validityEnd).toLocaleDateString('en-US', {month:'short', day:'2-digit', year:'numeric'})}`}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Recommended Action Bento Box */}
      <div className="bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-xl p-3.5 relative overflow-hidden mt-4">
        <div className="flex justify-between items-center mb-3">
          <div className="p-1 bg-[var(--primary)] rounded text-white">
            <Sparkles size={14} />
          </div>
          <span className="text-[9px] font-bold text-[var(--primary)] tracking-wide">RECOMMENDED ACTION</span>
        </div>
        <h3 className="text-xs font-bold text-black dark:text-white">Boost Redemptions</h3>
        <p className="text-xs text-black/70 dark:text-white/70 mt-1 mb-3">"SUMMER50" is nearing its limit. Extend the limit by 20% to capture the weekend peak demand?</p>
        <div className="flex gap-2">
          <button className="bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-[var(--primary)]/90 transition-colors">Extend Limit</button>
          <button className="border border-zinc-200 dark:border-zinc-700 text-black/70 dark:text-white/70 px-2.5 py-1.5 rounded-lg text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Dismiss</button>
        </div>
      </div>

      {filteredCoupons.length === 0 && (
         <div className="py-8 text-center text-black/60 dark:text-white/60 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl text-xs font-semibold">
            No coupons match your filters.
         </div>
      )}
    </div>
  );
};
