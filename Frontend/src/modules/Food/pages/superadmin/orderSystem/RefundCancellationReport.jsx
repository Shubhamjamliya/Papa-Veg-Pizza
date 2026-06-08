import React, { useState, useEffect } from 'react';
import { 
  X, History, FileText, FileDown, TableProperties, 
  Calendar, ChevronDown, Download, CheckCircle, Loader2 
} from 'lucide-react';

export default function RefundCancellationReport({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
      setDownloadComplete(false);
      setIsDownloading(false);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className={`w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col relative z-10 transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Modal Header */}
        <div className="px-6 md:px-8 py-5 md:py-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Export Report</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Configure your custom refund and cancellation data export.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="px-6 md:px-8 py-6 space-y-8 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
          
          {/* Preset Selection */}
          <section>
            <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3 block uppercase tracking-wider">Quick Presets</label>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full border border-[var(--primary)] bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-semibold flex items-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                <History size={16} />
                Last 30 Days Approved
              </button>
              <button className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors text-xs font-semibold flex items-center gap-2 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800">
                Today's Pending
              </button>
              <button className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors text-xs font-semibold flex items-center gap-2 text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800">
                Monthly Summary
              </button>
            </div>
          </section>

          {/* Row Layout: Format & Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* File Format */}
            <section>
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3 block uppercase tracking-wider">File Format</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center justify-center p-3 rounded-xl border-2 border-[var(--primary)] bg-red-50 dark:bg-red-900/20 text-[var(--primary)] transition-colors">
                  <FileText size={20} className="mb-1.5" />
                  <span className="text-xs font-bold">CSV</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[var(--primary)] text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] transition-colors bg-white dark:bg-zinc-800">
                  <FileDown size={20} className="mb-1.5" />
                  <span className="text-xs font-bold">PDF</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[var(--primary)] text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] transition-colors bg-white dark:bg-zinc-800">
                  <TableProperties size={20} className="mb-1.5" />
                  <span className="text-xs font-bold">Excel</span>
                </button>
              </div>
            </section>

            {/* Date Range */}
            <section>
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3 block uppercase tracking-wider">Date Range</label>
              <div className="space-y-2">
                <div className="relative">
                  <input 
                    className="w-full h-10 pl-10 pr-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-zinc-800 dark:text-zinc-100" 
                    type="text" 
                    defaultValue="Oct 01, 2026 - Oct 31, 2026" 
                  />
                  <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                </div>
              </div>
            </section>
          </div>

          {/* Column Checklist (Bento Style) */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Columns to Include</label>
              <button className="text-[var(--primary)] text-xs font-bold hover:underline">Select All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'Order ID', checked: true },
                { label: 'Customer Name', checked: true },
                { label: 'Transaction Date', checked: true },
                { label: 'Refund Amount', checked: true },
                { label: 'Status', checked: true },
                { label: 'Reason Code', checked: false },
                { label: 'Store ID', checked: false },
                { label: 'Approver Name', checked: false },
              ].map((col, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 cursor-pointer transition-all">
                  <input 
                    defaultChecked={col.checked} 
                    className="w-4 h-4 rounded text-[var(--primary)] border-zinc-300 dark:border-zinc-600 focus:ring-[var(--primary)]" 
                    type="checkbox" 
                  />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{col.label}</span>
                </label>
              ))}
            </div>
          </section>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 md:px-8 py-5 md:py-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row justify-end gap-3 md:gap-4 shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-95 transition-all"
            disabled={isDownloading}
          >
            Cancel
          </button>
          <button 
            onClick={handleDownload}
            disabled={isDownloading || downloadComplete}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95 transition-all w-full sm:w-auto min-w-[200px] ${
              downloadComplete 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-[var(--primary)] hover:opacity-90 text-white'
            }`}
          >
            {isDownloading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Processing...
              </>
            ) : downloadComplete ? (
              <>
                <CheckCircle size={18} />
                Report Exported
              </>
            ) : (
              <>
                <Download size={18} />
                Generate & Download
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
