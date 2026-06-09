import React, { useState, useRef } from 'react';
import { X, Wallet, Upload, CheckCircle } from 'lucide-react';

export default function SettleCommission({ isOpen, onClose }) {
  const [fileName, setFileName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSaveDraft = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose(); // Optional: close after saving
    }, 3000);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-900/40 dark:bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal / Drawer */}
      <div className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 translate-x-0 overflow-y-auto custom-scrollbar">
        
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors active:scale-90 text-zinc-500 dark:text-zinc-400"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Settle Commission</h2>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <img 
              alt="Admin" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4KQYiVmI4p1-utmceNN_JySycCdWZgHfDmFOpXoHyxiSwcpSaLs28tvLt0djQbmW0wSUYe0tYStqwNr6S4Icr2bCeoLz8O9W1W-G19xszug580pTBKsm-rPzjsqwBOA19QKfgMswZ4b3UTtK1FAHnYbgLeJ2Lt-70uygi-LIeGCrARpxW8wO2ePS6yfsTwwzapgq5tFozWwSJwFJmlLNxtxBXuPE15G9RmES2azZB5nVKUkUoXOibcmq7WryMtr-x8rRdnrzj-c" 
            />
          </div>
        </header>

        <main className="flex-1 p-6 space-y-8">
          {/* Summary Card */}
          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[var(--primary)]/10 dark:bg-[var(--primary)]/5 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
              <Wallet className="text-[var(--primary)]" size={20} />
              <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Settlement Summary</span>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Commission</p>
                <p className="text-xl font-black text-zinc-900 dark:text-zinc-100">₹1,240</p>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Franchise Share</p>
                <p className="text-xl font-black text-[var(--primary)]">₹11,160</p>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950/50 px-4 py-3 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Franchise Unit:</span>
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">North Region #402</span>
            </div>
          </section>

          {/* Settlement Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Settlement Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Settlement Date</label>
              <input 
                type="date" 
                defaultValue="2023-11-24"
                className="w-full h-12 px-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
              />
            </div>

            {/* Transfer Reference */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Transfer Ref #</label>
              <input 
                type="text" 
                placeholder="e.g. TRF-9082341"
                className="w-full h-12 px-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all dark:text-zinc-100 placeholder:text-zinc-400" 
              />
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Payment Method</label>
              <select className="w-full h-12 px-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all dark:text-zinc-100 appearance-none pr-10 relative"
                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23737688%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                <option value="imps">IMPS Transfer</option>
                <option value="neft">NEFT / RTGS</option>
                <option value="upi">UPI Business</option>
                <option value="cheque">Corporate Cheque</option>
              </select>
            </div>

            {/* Bank Reference */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Bank Reference</label>
              <input 
                type="text" 
                placeholder="Enter bank transaction ID"
                className="w-full h-12 px-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all dark:text-zinc-100 placeholder:text-zinc-400" 
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Upload Bank Receipt</label>
              <div 
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors group ${fileName ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                onClick={() => fileInputRef.current.click()}
              >
                {fileName ? (
                  <CheckCircle className="text-[var(--primary)] mb-2 group-hover:scale-110 transition-transform" size={32} />
                ) : (
                  <Upload className="text-[var(--primary)] mb-2 group-hover:scale-110 transition-transform" size={32} />
                )}
                <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100 text-center">{fileName || 'Tap to upload receipt'}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">PDF, JPG or PNG (Max 5MB)</p>
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Settlement Notes */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Settlement Notes</label>
              <textarea 
                rows="3"
                placeholder="Optional internal comments regarding this settlement cycle..."
                className="w-full p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm focus:border-[var(--primary)] focus:ring-[var(--primary)] outline-none transition-all resize-none dark:text-zinc-100 placeholder:text-zinc-400"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3 pb-8">
              <button 
                type="submit"
                className="w-full h-14 bg-[var(--primary)] text-white font-bold rounded-xl shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:brightness-110"
              >
                Confirm Settlement
              </button>
              <button 
                type="button"
                onClick={handleSaveDraft}
                className="w-full h-14 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold rounded-xl active:bg-zinc-50 dark:active:bg-zinc-800 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                Save Draft
              </button>
            </div>
          </form>

          {/* Subtle Footer Info */}
          <footer className="text-center pb-8 border-t border-zinc-100 dark:border-zinc-800 pt-6">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              All settlements are audited against <span className="font-mono text-zinc-700 dark:text-zinc-300">v2.4.0</span> logic.
            </p>
          </footer>
        </main>
      </div>

      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 z-[80] ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <CheckCircle size={20} className="text-emerald-400 dark:text-emerald-500" />
        <span className="text-sm font-medium">Settlement saved as draft</span>
      </div>
    </>
  );
}
