import React, { useState } from 'react';
import { Landmark, X, Calculator } from 'lucide-react';

export default function TaxCalculation({ isOpen, onClose }) {
  const [isDiscountApplied, setIsDiscountApplied] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[999] flex items-end md:items-center justify-center transition-opacity">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-md max-h-[85vh] overflow-hidden flex flex-col rounded-t-xl md:rounded-xl shadow-2xl relative z-50 border border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-bottom-4 md:zoom-in-95">
        
        {/* Header */}
        <header className="w-full flex justify-between items-center px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <Landmark size={20} className="text-[var(--primary)]" />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Tax Calculation Preview</h2>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 p-6 space-y-8 bg-white dark:bg-zinc-900">
          
          {/* Input Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[var(--primary)] rounded-full"></span>
              <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Simulation Parameters</h3>
            </div>
            
            {/* Order Amount */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Order Amount (INR)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">₹</span>
                <input type="number" defaultValue="1250.00" step="0.01" className="w-full pl-8 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100" placeholder="0.00" />
              </div>
            </div>

            {/* Region Selection */}
            <div className="space-y-4">
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Region Selection</label>
              <div className="grid grid-cols-1 gap-3">
                <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <option>India</option>
                </select>
                <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
                <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  <option>Indore</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                </select>
              </div>
            </div>

            {/* Tax Rule Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Tax Rule Selection</label>
              <select className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <option>Standard Franchise Rate (v2.4)</option>
                <option>Exempt Operations</option>
                <option>Promotional Flat Tax</option>
              </select>
            </div>

            {/* Toggle Section */}
            <div className="flex items-center justify-between py-2">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Apply Discount</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Apply manual adjustment to subtotal</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isDiscountApplied} onChange={() => setIsDiscountApplied(!isDiscountApplied)} className="sr-only peer" />
                <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>

            {/* Discount Amount */}
            <div className={`space-y-2 transition-all duration-300 ${isDiscountApplied ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Discount Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">₹</span>
                <input type="number" defaultValue="100.00" className="w-full pl-8 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm font-medium text-zinc-900 dark:text-zinc-100" />
              </div>
            </div>

            {/* Calculate Button */}
            <button className="w-full py-3 bg-[var(--primary)] text-white font-bold text-sm rounded-lg shadow-md shadow-[var(--primary)]/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Calculator size={18} />
              CALCULATE PREVIEW
            </button>
          </section>

          <hr className="border-zinc-200 dark:border-zinc-800" />

          {/* Results Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Calculation Results</h3>
            </div>
            
            <div className="bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Subtotal</span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">₹1,150.00</span>
              </div>
              
              {/* Itemized Table */}
              <div className="border border-zinc-200 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-zinc-50 dark:bg-zinc-800/80">
                    <tr>
                      <th className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Tax Component</th>
                      <th className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300">GST (18%)</td>
                      <td className="px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 text-right">₹207.00</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300">Delivery Tax</td>
                      <td className="px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 text-right">₹12.50</td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300">Packaging Tax</td>
                      <td className="px-3 py-2 text-xs font-medium text-zinc-900 dark:text-zinc-100 text-right">₹4.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Total Tax</span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">₹223.50</span>
              </div>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Grand Total</span>
                <span className="text-xl font-bold text-[var(--primary)]">₹1,373.50</span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <footer className="p-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-800 flex gap-3 shrink-0">
          <button onClick={onClose} className="flex-1 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            RESET
          </button>
          <button onClick={onClose} className="flex-[2] py-2.5 bg-[var(--primary)] text-white font-bold text-sm rounded hover:opacity-90 transition-opacity">
            CONFIRM & DEPLOY
          </button>
        </footer>
      </div>
    </div>
  );
}
