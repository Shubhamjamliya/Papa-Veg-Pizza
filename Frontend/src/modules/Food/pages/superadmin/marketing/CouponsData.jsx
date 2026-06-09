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
    <div className="space-y-4">
      {filteredCoupons.map((coupon) => (
        <div key={coupon.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className={`absolute top-0 left-0 w-1 h-full ${coupon.color === 'primary' ? 'bg-[var(--primary)]' : 'bg-zinc-500'}`}></div>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-[13px] font-semibold tracking-wide border ${coupon.color === 'primary' ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'}`}>
                  {coupon.code}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${coupon.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {coupon.status}
                </span>
              </div>
              <h3 className="text-base font-bold mt-2 text-zinc-900 dark:text-zinc-100">{coupon.title}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{coupon.description}</p>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                <Edit size={16} />
              </button>
              <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-4 mt-2">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Redemptions</p>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className={`${coupon.color === 'primary' ? 'bg-[var(--primary)]' : 'bg-zinc-500'} h-full transition-all duration-500`} style={{ width: `${(coupon.redemptions / coupon.maxRedemptions) * 100}%` }}></div>
                </div>
                <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">{coupon.redemptions >= 1000 ? (coupon.redemptions/1000).toFixed(1) + 'k' : coupon.redemptions}/{coupon.maxRedemptions >= 1000 ? (coupon.maxRedemptions/1000).toFixed(1) + 'k' : coupon.maxRedemptions}</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Validity</p>
              <p className="text-[11px] font-medium mt-1 text-zinc-600 dark:text-zinc-400">
                {coupon.status === 'Active' ? `${new Date(coupon.validityStart).toLocaleDateString('en-US', {month:'short', day:'2-digit'})} - ${new Date(coupon.validityEnd).toLocaleDateString('en-US', {month:'short', day:'2-digit'}, {year:'numeric'})}` : `Expired ${new Date(coupon.validityEnd).toLocaleDateString('en-US', {month:'short', day:'2-digit', year:'numeric'})}`}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Recommended Action Bento Box */}
      <div className="bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-2xl p-6 relative overflow-hidden mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="p-2 bg-[var(--primary)] rounded-lg text-white">
            <Sparkles size={18} />
          </div>
          <span className="text-[11px] font-bold text-[var(--primary)] tracking-wide">RECOMMENDED ACTION</span>
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Boost Redemptions</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 mb-4">"SUMMER50" is nearing its limit. Extend the limit by 20% to capture the weekend peak demand?</p>
        <div className="flex gap-2">
          <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-[13px] font-semibold shadow-sm hover:bg-[var(--primary)]/90 transition-colors">Extend Limit</button>
          <button className="border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Dismiss</button>
        </div>
      </div>

      {filteredCoupons.length === 0 && (
         <div className="py-12 text-center text-zinc-500 dark:text-zinc-400 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl">
            No coupons match your filters.
         </div>
      )}
    </div>
  );
};
