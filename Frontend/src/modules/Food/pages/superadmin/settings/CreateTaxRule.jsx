import React from 'react';
import { X, Info, Settings, Globe, ClipboardList, Sliders } from 'lucide-react';

export default function CreateTaxRule({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-zinc-900/40 backdrop-blur-sm flex items-end md:items-center justify-center transition-opacity">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-lg md:rounded-xl shadow-2xl relative flex flex-col h-[85vh] md:h-auto md:max-h-[85vh] animate-in slide-in-from-bottom-4 md:slide-in-from-bottom-0 md:zoom-in-95 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Create Tax Rule</h2>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Configure enterprise-level tax logic</span>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <X size={20} className="text-zinc-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-4 py-6 space-y-8 flex-grow scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
          
          {/* Section 1: Basic Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <Info size={16} className="text-[var(--primary)]" />
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Basic Information</h3>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Tax Name</label>
              <input type="text" placeholder="e.g., GST, VAT, Sales Tax" className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Tax Description</label>
              <textarea placeholder="Explain the context of this tax rule..." rows="3" className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded resize-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all"></textarea>
            </div>
          </section>

          {/* Section 2: Tax Configuration */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <Settings size={16} className="text-[var(--primary)]" />
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Tax Configuration</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Tax Type</label>
                <select className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all appearance-none">
                  <option>Percentage (%)</option>
                  <option>Fixed Amount (₹)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Tax Value</label>
                <input type="number" placeholder="18" className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded border border-zinc-200 dark:border-zinc-700">
              <div>
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Active Status</label>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Enable this tax rule immediately</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Priority Number</label>
              <input type="number" placeholder="0" className="w-24 px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
              <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">Lower numbers take precedence in calculation chains.</p>
            </div>
          </section>

          {/* Section 3: Region Configuration */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <Globe size={16} className="text-[var(--primary)]" />
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Region Configuration</h3>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Country</label>
              <select className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all">
                <option>India</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">State</label>
                <select className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all">
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Gujarat</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">City (Optional)</label>
                <select className="w-full px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all">
                  <option>All Cities</option>
                  <option>Indore</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 4: Apply Tax To */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <ClipboardList size={16} className="text-[var(--primary)]" />
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Apply Tax To</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)]" />
                <span className="text-sm text-zinc-900 dark:text-zinc-100">Food Items</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)]" />
                <span className="text-sm text-zinc-900 dark:text-zinc-100">Delivery Fee</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)]" />
                <span className="text-sm text-zinc-900 dark:text-zinc-100">Packaging Fee</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)]" />
                <span className="text-sm text-zinc-900 dark:text-zinc-100">Entire Order</span>
              </label>
            </div>
          </section>

          {/* Section 5: Advanced Options */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1">
              <Sliders size={16} className="text-[var(--primary)]" />
              <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Advanced Options</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Min. Order Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">₹</span>
                  <input type="number" placeholder="0.00" className="w-full pl-8 pr-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200">Max. Order Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">₹</span>
                  <input type="number" placeholder="No Limit" className="w-full pl-8 pr-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all" />
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tax Exemption Allowed</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Tax Included In Price</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0 flex gap-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-10">
          <button onClick={onClose} className="flex-1 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="flex-1 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded shadow-md shadow-[var(--primary)]/20 hover:opacity-90 transition-all active:scale-95">
            Create Tax Rule
          </button>
        </div>
      </div>
    </div>
  );
}
