import React, { useState } from 'react';
import { ChevronRight, FileEdit, Store, AlertCircle, UploadCloud, CheckCircle2, Circle, Hourglass, Info } from 'lucide-react';

export default function ManualAdjustment({ onCancel }) {
  const [amount, setAmount] = useState('1,240.50');
  const [hasError, setHasError] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAmountBlur = () => {
    const val = amount.replace(/,/g, '');
    if (isNaN(val) || val === '') {
      setHasError(true);
    } else {
      setHasError(false);
      setAmount(parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    }
  };

  return (
    <div className="w-full animate-fade-in">
      {/* Breadcrumbs & Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold mb-3 uppercase tracking-widest">
          <span>Reconciliation</span>
          <ChevronRight size={14} />
          <span className="text-[var(--primary)]">Manual Adjustment</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Create Manual Adjustment</h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-sm font-medium">
              Use this form to correct settlement discrepancies or issue manual franchise credits. All adjustments require secondary approval for amounts exceeding $5,000.00.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={onCancel} className="px-6 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-sm text-sm">
              Cancel
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold shadow-sm hover:brightness-110 transition-all active:scale-95 text-sm">
              Submit for Approval
            </button>
          </div>
        </div>
      </div>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Form Section */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* Core Details Card */}
          <section className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              <FileEdit className="text-[var(--primary)]" size={20} />
              Adjustment Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Adjustment Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Adjustment Type</label>
                <select className="w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)] h-12 px-4 outline-none transition-all">
                  <option>Credit Adjustment</option>
                  <option>Debit Adjustment</option>
                  <option selected>Settlement Correction</option>
                  <option>Network Fee Reversal</option>
                  <option>Promotional Subsidy</option>
                </select>
              </div>

              {/* Store Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Store / Franchise</label>
                <div className="relative">
                  <select className="w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)] h-12 pl-11 pr-4 outline-none transition-all appearance-none">
                    <option>Global Treasury (Default)</option>
                    <option>PizzaCorp - NY Manhattan #042</option>
                    <option>PizzaCorp - CA Palo Alto #108</option>
                    <option>PizzaCorp - TX Austin #215</option>
                  </select>
                  <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </div>

              {/* Amount */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Amount (USD)</label>
                <div className="relative">
                  <input 
                    className={`w-full rounded-xl border text-sm font-mono focus:ring-1 h-12 pl-9 pr-4 outline-none transition-all ${hasError ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 focus:border-rose-500 focus:ring-rose-500 text-rose-700 dark:text-rose-400' : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)]'}`}
                    placeholder="0.00" 
                    type="text" 
                    value={amount}
                    onChange={handleAmountChange}
                    onBlur={handleAmountBlur}
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400 font-bold">$</span>
                </div>
                {hasError && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1 font-medium">
                    <AlertCircle size={14} />
                    Invalid amount format.
                  </p>
                )}
              </div>

              {/* Reference Number */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Reference Number</label>
                <input 
                  className="w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)] h-12 px-4 outline-none transition-all" 
                  type="text" 
                  defaultValue="ADJ-2023-9941"
                />
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</label>
                <textarea 
                  className="w-full rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)] p-4 outline-none transition-all resize-none" 
                  placeholder="Provide a brief explanation for this adjustment..." 
                  rows="3"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Documentation & Internal Card */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Document Upload */}
            <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Supporting Docs</h3>
              <div className="flex-1 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl flex flex-col items-center justify-center p-8 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-pointer group bg-zinc-50 dark:bg-zinc-950/50 min-h-[160px]">
                <UploadCloud className="text-zinc-400 group-hover:text-[var(--primary)] transition-colors mb-3" size={40} />
                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 text-center">Click or Drag to Upload</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-1">PDF, PNG, JPG (Max 10MB)</p>
              </div>
            </div>

            {/* Internal Notes */}
            <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">Internal Notes</h3>
              <textarea 
                className="w-full flex-1 min-h-[160px] rounded-xl border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-[var(--primary)] p-4 outline-none transition-all resize-none" 
                placeholder="Add confidential notes for auditors or final approvers..." 
              ></textarea>
            </div>
          </section>

        </div>

        {/* Sidebar Panel: Approval & Meta */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          
          {/* Approval Status Card */}
          <section className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-zinc-50 dark:bg-zinc-950 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Approval Workflow</h3>
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-500 text-[10px] font-bold rounded uppercase tracking-wider">Draft</span>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Workflow Timeline */}
              <div className="relative pl-8 space-y-6">
                {/* Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
                
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[var(--primary)] border-2 border-white dark:border-zinc-900 flex items-center justify-center z-10 shadow-sm">
                    <CheckCircle2 size={12} className="text-white" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Created By</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">James Wilson (You)</p>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">Oct 24, 2023 • 10:15 AM</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center z-10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Compliance Review</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Pending automatic check...</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-700 flex items-center justify-center z-10 shadow-sm">
                    <Hourglass size={12} className="text-zinc-400 dark:text-zinc-500" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Final Approval</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">Sarah Chen (CFO Office)</p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Comments</h4>
                  <button className="text-[var(--primary)] text-xs font-bold hover:underline">+ Add Comment</button>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/50 shadow-sm mb-2">
                  <p className="text-xs text-zinc-900 dark:text-zinc-100 italic font-medium">"Ensure the settlement ID matches the Oct 20th batch export."</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-2 text-right font-medium">— Auditor Bot</p>
                </div>
              </div>
            </div>
          </section>

          {/* Settings/Toggle Card */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6">Processing Controls</h3>
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Auto-Approve</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Bypass workflow for values {'<$100'}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Notify Merchant</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Send email on completion</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                </label>
              </div>
              
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <Info className="text-blue-600 dark:text-blue-400 mt-0.5" size={16} />
                  <p className="text-xs text-blue-800 dark:text-blue-300 font-medium leading-relaxed">Last audited 2 hours ago for this franchise entity.</p>
                </div>
              </div>
              
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
