import React, { useState } from 'react';
import { 
  Layers, X, CheckCircle, RefreshCw, Globe, MapPin, Download, Trash2, 
  ChevronDown, Info, Search, Circle, Map, FileText, Grid, AlertTriangle, HelpCircle 
} from 'lucide-react';
import { toast } from 'sonner';

function BulkAction({ isOpen, onClose }) {
  const [activeAction, setActiveAction] = useState('update-status');

  if (!isOpen) return null;

  const handleApply = () => {
    toast.success("Bulk action applied successfully to selected stores");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 lg:pl-[280px]">
      {/* Bulk Actions Modal */}
      <div className="bg-white dark:bg-zinc-900 w-full max-w-xl border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-55 dark:bg-zinc-950 sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-2">
            <Layers className="text-red-650" size={16} />
            <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Bulk Actions</h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal" 
            className="p-1 hover:bg-zinc-250 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400"
          >
            <X size={16} />
          </button>
        </header>

        {/* Selection Summary Bar */}
        <div className="bg-red-650/5 px-4 py-1.5 flex items-center justify-between border-b border-red-500/10 dark:border-red-900/30 shrink-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="text-red-650" size={14} />
            <span className="text-[10px] font-bold text-red-650 uppercase">12 Stores Selected</span>
          </div>
          <button onClick={onClose} className="text-red-650 text-[10px] font-bold hover:underline uppercase">Clear Selection</button>
        </div>

        <div className="flex flex-1 overflow-hidden flex-col sm:flex-row min-h-0">
          {/* Action List (Vertical Selection) */}
          <nav className="w-full sm:w-[150px] lg:w-[170px] shrink-0 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-955 overflow-y-auto">
            <ul className="py-1">
              <li>
                <button 
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 transition-colors ${activeAction === 'update-status' ? 'bg-white dark:bg-zinc-900 border-l-[3px] border-red-650 text-red-650 font-bold shadow-sm' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold'}`}
                  onClick={() => setActiveAction('update-status')}
                >
                  <RefreshCw size={12} className="shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider">Update Status</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 transition-colors ${activeAction === 'assign-region' ? 'bg-white dark:bg-zinc-900 border-l-[3px] border-red-650 text-red-650 font-bold shadow-sm' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold'}`}
                  onClick={() => setActiveAction('assign-region')}
                >
                  <Globe size={12} className="shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider">Assign Region</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 transition-colors ${activeAction === 'assign-zone' ? 'bg-white dark:bg-zinc-900 border-l-[3px] border-red-650 text-red-650 font-bold shadow-sm' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold'}`}
                  onClick={() => setActiveAction('assign-zone')}
                >
                  <MapPin size={12} className="shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider">Assign Zone</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 transition-colors ${activeAction === 'export' ? 'bg-white dark:bg-zinc-900 border-l-[3px] border-red-650 text-red-650 font-bold shadow-sm' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold'}`}
                  onClick={() => setActiveAction('export')}
                >
                  <Download size={12} className="shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider">Export Data</span>
                </button>
              </li>
              <li className="mt-4 border-t border-zinc-200 dark:border-zinc-800 pt-1.5">
                <button 
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 transition-colors ${activeAction === 'delete' ? 'bg-rose-50 dark:bg-rose-955/20 border-l-[3px] border-rose-600 text-rose-650 font-bold' : 'hover:bg-rose-50 dark:hover:bg-rose-955/10 text-rose-600 text-xs font-semibold'}`}
                  onClick={() => setActiveAction('delete')}
                >
                  <Trash2 size={12} className="shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-bold">Delete Selected</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Action Configuration Area */}
          <main className="flex-1 p-4 overflow-y-auto bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            <div>
              {activeAction === 'update-status' && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Update Store Status</h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Modify the operational status for all 12 selected franchise locations in India.</p>
                  <div className="space-y-3">
                    <label className="block">
                      <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 block">New Status</span>
                      <select className="w-full h-8.5 px-3 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg outline-none text-xs cursor-pointer">
                        <option value="active">Active (Operational)</option>
                        <option value="closed">Closed (Off-hours)</option>
                        <option value="suspended">Suspended (Platform Action)</option>
                      </select>
                    </label>
                    <div className="bg-amber-50/50 dark:bg-amber-955/10 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/30 flex gap-2">
                      <Info className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" size={14} />
                      <p className="text-[10px] text-amber-800 dark:text-amber-400 font-bold leading-normal">
                        Note: Suspending stores disables real-time ordering and active kitchen panels immediately.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeAction === 'assign-region' && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Assign Region</h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Reassign stores to a new regional division.</p>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" size={12} />
                    <input 
                      className="w-full h-8.5 pl-8 pr-3 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-red-500/20 focus:border-red-650 outline-none text-xs text-zinc-900 dark:text-zinc-100" 
                      placeholder="Search regions (e.g. West India, North India...)" 
                      type="text"
                    />
                  </div>
                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg divide-y divide-zinc-200 dark:divide-zinc-800 overflow-hidden bg-white dark:bg-zinc-950 text-xs">
                    <div className="p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center justify-between cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-red-650/10 text-red-650 flex items-center justify-center font-bold text-[10px] shrink-0">WI</div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-zinc-100">West India Region</div>
                          <div className="text-[9px] text-zinc-500">Admin: Vikram Singh</div>
                        </div>
                      </div>
                      <Circle className="text-zinc-300 dark:text-zinc-650" size={14} />
                    </div>
                    <div className="p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 flex items-center justify-between cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-red-650/10 text-red-650 flex items-center justify-center font-bold text-[10px] shrink-0">NI</div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-zinc-100">North India Division</div>
                          <div className="text-[9px] text-zinc-500">Admin: Sonia Gupta</div>
                        </div>
                      </div>
                      <Circle className="text-zinc-300 dark:text-zinc-650" size={14} />
                    </div>
                  </div>
                </div>
              )}

              {activeAction === 'assign-zone' && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Assign Zone</h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Select parent hierarchy first to view available zones.</p>
                  <div className="h-32 border border-dashed border-zinc-250 dark:border-zinc-800 rounded-lg flex flex-col items-center justify-center text-zinc-550 p-4 text-center">
                    <Map className="mb-1.5 text-zinc-400" size={20} />
                    <p className="text-[10px] font-bold">Zone configuration depends on Region assignment.</p>
                  </div>
                </div>
              )}

              {activeAction === 'export' && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Export Store Records</h3>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button className="p-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 rounded-lg hover:border-red-650 transition-all flex flex-col items-center gap-1 shadow-sm">
                      <FileText className="text-emerald-600" size={18} />
                      <span className="text-[10px] font-bold">CSV</span>
                    </button>
                    <button className="p-2 border border-red-650 bg-red-650/5 text-zinc-900 dark:text-zinc-100 rounded-lg flex flex-col items-center gap-1 shadow-sm">
                      <Grid className="text-emerald-700" size={18} />
                      <span className="text-[10px] font-bold">EXCEL</span>
                    </button>
                    <button className="p-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 rounded-lg hover:border-red-650 transition-all flex flex-col items-center gap-1 shadow-sm">
                      <FileText className="text-rose-600" size={18} />
                      <span className="text-[10px] font-bold">PDF</span>
                    </button>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input defaultChecked className="w-3.5 h-3.5 rounded text-red-650 focus:ring-red-650 border-zinc-300 dark:border-zinc-700" type="checkbox" />
                      <span className="text-[10px] font-semibold text-zinc-650 dark:text-zinc-400">Include financial performance metrics</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input defaultChecked className="w-3.5 h-3.5 rounded text-red-650 focus:ring-red-650 border-zinc-300 dark:border-zinc-700" type="checkbox" />
                      <span className="text-[10px] font-semibold text-zinc-650 dark:text-zinc-400">Include store manager contact details</span>
                    </label>
                  </div>
                </div>
              )}

              {activeAction === 'delete' && (
                <div className="space-y-3">
                  <div className="bg-rose-50 dark:bg-rose-955/10 p-3 rounded-lg border border-rose-200 dark:border-rose-900/30 space-y-2">
                    <h3 className="text-xs font-bold text-rose-650 dark:text-red-500 flex items-center gap-1.5 uppercase">
                      <AlertTriangle size={15} />
                      Dangerous Action
                    </h3>
                    <p className="text-[10px] text-rose-800 dark:text-rose-400 leading-normal">
                      You are about to delete <strong>12 selected stores</strong> from the Provisions Enterprise network. This action is irreversible.
                    </p>
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-rose-900 dark:text-rose-455 uppercase tracking-wider">Type CONFIRM to proceed</p>
                      <input 
                        className="w-full h-8.5 px-3 bg-white dark:bg-zinc-950 border border-rose-350 dark:border-rose-900/40 rounded-lg outline-none text-xs text-zinc-900 dark:text-zinc-100 font-mono" 
                        placeholder="CONFIRM" 
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>

        {/* Modal Footer */}
        <footer className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-55 dark:bg-zinc-955 gap-3 shrink-0">
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <HelpCircle size={12} fill="none" />
            <span className="text-[9px] font-bold uppercase tracking-wider">Affects 12 stores</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="h-8.5 px-4 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 text-xs font-bold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleApply}
              className={`h-8.5 px-4 text-xs font-bold rounded-lg shadow-md transition-all active:scale-[0.98] text-white ${
                activeAction === 'delete' 
                  ? 'bg-rose-600 hover:bg-rose-700' 
                  : 'bg-red-650 hover:bg-red-700'
              }`}
            >
              {activeAction === 'delete' ? 'Confirm Delete' : 'Apply Action'}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default BulkAction;
