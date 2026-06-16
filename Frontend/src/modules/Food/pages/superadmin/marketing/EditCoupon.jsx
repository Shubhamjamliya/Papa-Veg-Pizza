import React, { useState, useEffect } from 'react';
import { X, Info, Banknote, CalendarCheck, CalendarX, Edit3 } from 'lucide-react';

export default function EditCoupon({ isOpen, onClose, coupon, onSave }) {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Percentage');
  const [maxRedemptions, setMaxRedemptions] = useState('');
  const [validityStart, setValidityStart] = useState('');
  const [validityEnd, setValidityEnd] = useState('');
  const [status, setStatus] = useState('Active');

  useEffect(() => {
    if (coupon) {
      setCode(coupon.code || '');
      setTitle(coupon.title || '');
      setDescription(coupon.description || '');
      setType(coupon.type || 'Percentage');
      setMaxRedemptions(coupon.maxRedemptions || '');
      setValidityStart(coupon.validityStart || '');
      setValidityEnd(coupon.validityEnd || '');
      setStatus(coupon.status || 'Active');
    }
  }, [coupon]);

  if (!isOpen || !coupon) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...coupon,
      code,
      title,
      description,
      type,
      maxRedemptions: Number(maxRedemptions),
      validityStart,
      validityEnd,
      status
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center lg:pl-[280px] p-4">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800">
        
        {/* Header */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center gap-2">
            <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
              <Edit3 size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Edit Coupon</h3>
              <p className="text-[10px] text-zinc-500 mt-0.5">Modify parameters for coupon code "{coupon.code}"</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
            <X size={18} className="text-zinc-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Coupon Code */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Coupon Code*</label>
              <input 
                type="text" 
                className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] uppercase outline-none dark:text-zinc-100 text-xs"
                value={code} 
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title/Campaign Name*</label>
              <input 
                type="text" 
                className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1 md:col-span-2">
              <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Description</label>
              <textarea 
                className="w-full border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 p-2.5 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs resize-none"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>

            {/* Discount Type */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Discount Type</label>
              <select 
                className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs bg-zinc-50/50"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Percentage">Percentage</option>
                <option value="Fixed Amount">Fixed Amount</option>
                <option value="BOGO">BOGO</option>
              </select>
            </div>

            {/* Max Redemptions */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Max Redemptions</label>
              <input 
                type="number" 
                className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs"
                value={maxRedemptions} 
                onChange={(e) => setMaxRedemptions(e.target.value)}
              />
            </div>

            {/* Start Date */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <CalendarCheck size={14} className="text-zinc-450" />
                Start Date
              </label>
              <input 
                type="date" 
                className="w-full h-9 px-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-xs text-zinc-900 dark:text-zinc-100 outline-none"
                value={validityStart} 
                onChange={(e) => setValidityStart(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <CalendarX size={14} className="text-zinc-450" />
                End Date
              </label>
              <input 
                type="date" 
                className="w-full h-9 px-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-xs text-zinc-900 dark:text-zinc-100 outline-none"
                value={validityEnd} 
                onChange={(e) => setValidityEnd(e.target.value)}
              />
            </div>

            {/* Status */}
            <div className="space-y-1 md:col-span-2">
              <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Status</label>
              <select 
                className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs bg-zinc-50/50"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
              </select>
            </div>

          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="h-9 px-4 text-xs font-bold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="h-9 px-5 bg-[var(--primary)] text-white text-xs font-bold rounded shadow-md hover:bg-[var(--primary)]/90 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
