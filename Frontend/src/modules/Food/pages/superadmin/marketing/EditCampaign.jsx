import React, { useState } from 'react';
import { X, Save, Edit3 } from 'lucide-react';

export default function EditCampaign({ campaignId, campaigns, setCampaigns, onClose }) {
  const campaign = campaigns.find(c => c.id === campaignId);

  if (!campaign) return null;

  const [name, setName] = useState(campaign.name);
  const [code, setCode] = useState(campaign.code);
  const [type, setType] = useState(campaign.type);
  const [value, setValue] = useState(campaign.value || '');
  const [description, setDescription] = useState(campaign.description || '');
  const [startDate, setStartDate] = useState(campaign.startDate);
  const [endDate, setEndDate] = useState(campaign.endDate);
  const [budget, setBudget] = useState(campaign.budget || 0);
  const [spent, setSpent] = useState(campaign.spent || 0);
  const [reach, setReach] = useState(campaign.reach || 0);
  const [status, setStatus] = useState(campaign.status);

  const handleSave = (e) => {
    e.preventDefault();
    setCampaigns(prev => prev.map(c => {
      if (c.id === campaign.id) {
        return {
          ...c,
          name,
          code,
          type,
          value,
          description,
          startDate,
          endDate,
          budget: Number(budget),
          spent: Number(spent),
          reach: Number(reach),
          status,
          duration: `${startDate} - ${endDate}`
        };
      }
      return c;
    }));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:pl-[280px] p-4 bg-black/40 backdrop-blur-sm">
      <form 
        onSubmit={handleSave}
        className="bg-white dark:bg-zinc-950 w-full max-w-lg h-[600px] max-h-[85vh] rounded-xl flex flex-col shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900 shrink-0">
          <div>
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Edit3 size={16} className="text-[var(--primary)]" />
              Edit Campaign Details
            </h2>
            <p className="text-[10px] text-zinc-500 font-medium">Modify settings for code: {campaign.code}</p>
          </div>
          <button 
            type="button"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide text-xs">
          {/* Campaign Name & Code */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Campaign Name</label>
              <input 
                type="text" 
                required
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Campaign Code</label>
              <input 
                type="text" 
                required
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>

          {/* Type & Value */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Type</label>
              <select 
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 cursor-pointer"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Bundle Deal">Bundle Deal</option>
                <option value="Buy 1 Get 1">Buy 1 Get 1</option>
                <option value="Fixed Discount">Fixed Discount</option>
                <option value="Percentage %">Percentage %</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Promo Value</label>
              <input 
                type="text" 
                required
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</label>
            <textarea 
              rows={2} 
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 resize-none" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Start Date</label>
              <input 
                type="date" 
                required
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">End Date</label>
              <input 
                type="date" 
                required
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          {/* Financials: Budget, Spent & Reach */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Budget (₹)</label>
              <input 
                type="number" 
                required
                min="0"
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Spent (₹)</label>
              <input 
                type="number" 
                required
                min="0"
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={spent}
                onChange={(e) => setSpent(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Reach (Users)</label>
              <input 
                type="number" 
                required
                min="0"
                className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                value={reach}
                onChange={(e) => setReach(e.target.value)}
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</label>
            <select 
              className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 cursor-pointer"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-end gap-3 shrink-0">
          <button 
            type="button"
            className="h-9 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="bg-[var(--primary)] text-white h-9 px-5 rounded-lg text-xs font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Save size={14} /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
