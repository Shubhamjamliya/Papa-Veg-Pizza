import React, { useState } from 'react';
import { 
  X, Banknote, Store, ShieldCheck, List, 
  FileText, FileSpreadsheet, FileJson, CalendarDays, 
  Mail, Send, CheckCircle2 
} from 'lucide-react';

export default function ExportReport({ isOpen, onClose }) {
  const [reportType, setReportType] = useState('rev_summary');
  const [fileFormat, setFileFormat] = useState('excel');
  const [isRecurring, setIsRecurring] = useState(false);
  const [frequency, setFrequency] = useState('weekly');
  const [recipients, setRecipients] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto animate-fade-in">
      <main className="w-full max-w-lg bg-zinc-50 dark:bg-zinc-950 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col relative transition-transform duration-300 transform translate-y-0 max-h-[85vh] sm:max-h-[800px] border border-zinc-200 dark:border-zinc-800">
        
        {/* Header Section */}
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-50 dark:bg-zinc-950 z-20 rounded-t-2xl">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Export Report</h2>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Configure your data delivery</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-none">
          {/* Section 1: Report Type */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Report Type</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'rev_summary', label: 'Revenue Summary', icon: Banknote },
                { id: 'store_perf', label: 'Store Performance', icon: Store },
                { id: 'loyalty_audit', label: 'Loyalty Audit', icon: ShieldCheck },
                { id: 'product_mix', label: 'Product Mix', icon: List }
              ].map((type) => {
                const Icon = type.icon;
                const isSelected = reportType === type.id;
                return (
                  <label 
                    key={type.id}
                    className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md' 
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-[var(--primary)]/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                    }`}
                    onClick={() => setReportType(type.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className={isSelected ? 'text-white' : 'text-zinc-500'} />
                      <span className="text-sm font-bold">{type.label}</span>
                    </div>
                    {isSelected && <CheckCircle2 size={20} className="text-white animate-fade-in" />}
                  </label>
                )
              })}
            </div>
          </section>

          {/* Section 2: File Format */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">File Format</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'pdf', label: 'PDF', icon: FileText, color: 'text-rose-500' },
                { id: 'excel', label: 'Excel', icon: FileSpreadsheet, color: 'text-emerald-500' },
                { id: 'csv', label: 'CSV', icon: FileJson, color: 'text-blue-500' }
              ].map((fmt) => {
                const Icon = fmt.icon;
                const isSelected = fileFormat === fmt.id;
                return (
                  <button 
                    key={fmt.id}
                    onClick={() => setFileFormat(fmt.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-bold transition-all active:scale-95 ${
                      isSelected 
                        ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md' 
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <Icon size={18} className={isSelected ? 'text-white' : fmt.color} />
                    {fmt.label}
                  </button>
                )
              })}
            </div>
          </section>

          {/* Section 3: Schedule Options */}
          <section className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              <div className="flex items-center gap-3">
                <CalendarDays size={20} className="text-[var(--primary)]" />
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Recurring Report</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                />
                <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* Drawer for Schedule Options */}
            {isRecurring && (
              <div className="animate-fade-down">
                <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 space-y-6 shadow-inner">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Frequency</label>
                    <div className="flex gap-2">
                      {['Daily', 'Weekly', 'Monthly'].map(freq => (
                        <button 
                          key={freq}
                          onClick={() => setFrequency(freq.toLowerCase())}
                          className={`flex-1 py-2 px-3 border rounded-lg text-xs font-bold transition-colors ${
                            frequency === freq.toLowerCase() 
                              ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-sm' 
                              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:border-[var(--primary)]/50'
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Recipients</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        value={recipients}
                        onChange={(e) => setRecipients(e.target.value)}
                        placeholder="team@example.com, manager@example.com" 
                        className="w-full p-3 pl-10 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950 text-sm font-medium text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all placeholder:text-zinc-400" 
                      />
                      <Mail size={18} className="absolute left-3.5 top-3.5 text-zinc-400" />
                    </div>
                    <p className="text-[10px] font-medium text-zinc-500 italic">Separate multiple emails with commas.</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Context Image (Brand Themed) */}
          <div className="pt-2">
            <div className="w-full h-32 rounded-xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&fm=webp" 
                alt="Analytics Context" 
                className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/90 to-[var(--primary)]/10 flex items-end p-4">
                <p className="text-white text-[10px] font-black tracking-widest uppercase">Verified Data Engine v4.2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 sticky bottom-0 bg-zinc-50 dark:bg-zinc-950 z-20 rounded-b-2xl">
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-3.5 text-xs font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors active:scale-95"
            >
              Cancel
            </button>
            <button 
              className={`flex-[2] py-3.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
                isRecurring ? 'bg-zinc-900 dark:bg-zinc-700' : 'bg-[var(--primary)]'
              }`}
            >
              <Send size={18} />
              <span>{isRecurring ? 'Schedule Report' : 'Export Now'}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
