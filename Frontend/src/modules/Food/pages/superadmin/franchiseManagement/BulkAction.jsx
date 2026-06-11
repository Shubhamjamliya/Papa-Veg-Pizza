import React, { useState } from 'react';
import { 
  Layers, X, CheckCircle, RefreshCw, Globe, MapPin, Download, Trash2, 
  ChevronDown, Info, Search, Circle, Map, FileText, Grid, AlertTriangle, HelpCircle 
} from 'lucide-react';

export default function BulkAction({ isOpen, onClose }) {
  const [activeAction, setActiveAction] = useState('update-status');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Bulk Actions Modal */}
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <Layers className="text-[var(--primary)]" size={24} />
            <h2 className="text-xl font-bold text-zinc-900">Bulk Actions</h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal" 
            className="p-1 hover:bg-zinc-100 rounded-full transition-colors text-zinc-500"
          >
            <X size={24} />
          </button>
        </header>

        {/* Selection Summary Bar */}
        <div className="bg-[var(--primary)]/5 px-6 py-2 flex items-center justify-between border-b border-[var(--primary)]/10">
          <div className="flex items-center gap-1">
            <CheckCircle className="text-[var(--primary)]" size={20} />
            <span className="text-sm font-semibold text-[var(--primary)]">12 Stores Selected</span>
          </div>
          <button className="text-[var(--primary)] text-sm font-semibold hover:underline">Clear Selection</button>
        </div>

        <div className="flex flex-1 overflow-hidden flex-col sm:flex-row">
          {/* Action List (Vertical Selection) */}
          <nav className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-zinc-200 bg-zinc-50 overflow-y-auto">
            <ul className="py-2">
              <li>
                <button 
                  className={`w-full text-left px-6 py-4 flex items-center gap-2 transition-colors ${activeAction === 'update-status' ? 'bg-white border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm' : 'hover:bg-zinc-100 text-zinc-600'}`}
                  onClick={() => setActiveAction('update-status')}
                >
                  <RefreshCw size={20} />
                  <span className="text-sm">Update Status</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-6 py-4 flex items-center gap-2 transition-colors ${activeAction === 'assign-region' ? 'bg-white border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm' : 'hover:bg-zinc-100 text-zinc-600'}`}
                  onClick={() => setActiveAction('assign-region')}
                >
                  <Globe size={20} />
                  <span className="text-sm">Assign to Region</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-6 py-4 flex items-center gap-2 transition-colors ${activeAction === 'assign-zone' ? 'bg-white border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm' : 'hover:bg-zinc-100 text-zinc-600'}`}
                  onClick={() => setActiveAction('assign-zone')}
                >
                  <MapPin size={20} />
                  <span className="text-sm">Assign to Zone</span>
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-6 py-4 flex items-center gap-2 transition-colors ${activeAction === 'export' ? 'bg-white border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm' : 'hover:bg-zinc-100 text-zinc-600'}`}
                  onClick={() => setActiveAction('export')}
                >
                  <Download size={20} />
                  <span className="text-sm">Export Data</span>
                </button>
              </li>
              <li className="mt-8 border-t border-zinc-200 pt-2">
                <button 
                  className={`w-full text-left px-6 py-4 flex items-center gap-2 transition-colors ${activeAction === 'delete' ? 'bg-red-50 border-l-4 border-red-600 text-red-600 font-bold' : 'hover:bg-red-50 text-red-600'}`}
                  onClick={() => setActiveAction('delete')}
                >
                  <Trash2 size={20} />
                  <span className="text-sm font-semibold">Delete Selected</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Action Configuration Area */}
          <main className="flex-1 p-6 overflow-y-auto bg-white">
            <div>
              {activeAction === 'update-status' && (
                <div className="action-panel">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Update Store Status</h3>
                  <p className="text-sm text-zinc-500 mb-6">Modify the operational status for all 12 selected franchise locations.</p>
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-zinc-900 mb-1 block">New Status</span>
                      <div className="relative">
                        <select className="w-full h-10 px-4 bg-white border border-zinc-300 rounded-lg appearance-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-sm">
                          <option value="active">Active (Operational)</option>
                          <option value="pending">Pending (Review)</option>
                          <option value="suspended">Suspended (Action Required)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" size={20} />
                      </div>
                    </label>
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex gap-4">
                      <Info className="text-amber-600 shrink-0" size={20} />
                      <p className="text-sm text-amber-800">Changing status to "Suspended" will temporarily disable online ordering and POS access for these stores.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAction === 'assign-region' && (
                <div className="action-panel">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Assign Region</h3>
                  <p className="text-sm text-zinc-500 mb-6">Reassign stores to a new regional management hierarchy.</p>
                  <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                    <input 
                      className="w-full h-12 pl-11 pr-4 bg-white border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-sm" 
                      placeholder="Search regions (e.g. Northeast, West Coast...)" 
                      type="text"
                    />
                  </div>
                  <div className="border border-zinc-200 rounded-lg divide-y divide-zinc-200">
                    <div className="p-4 hover:bg-zinc-50 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">NE</div>
                        <div>
                          <div className="text-sm font-semibold">Northeast Division</div>
                          <div className="text-[12px] opacity-60">Admin: Sarah Jenkins</div>
                        </div>
                      </div>
                      <Circle className="text-zinc-300" size={20} />
                    </div>
                    <div className="p-4 hover:bg-zinc-50 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs">SE</div>
                        <div>
                          <div className="text-sm font-semibold">Southeast Metro</div>
                          <div className="text-[12px] opacity-60">Admin: Michael Chen</div>
                        </div>
                      </div>
                      <Circle className="text-zinc-300" size={20} />
                    </div>
                  </div>
                </div>
              )}

              {activeAction === 'assign-zone' && (
                <div className="action-panel">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Assign Delivery Zone</h3>
                  <p className="text-sm text-zinc-500 mb-6">Select a regional parent first to view available zones.</p>
                  <div className="h-48 border-2 border-dashed border-zinc-300 rounded-lg flex flex-col items-center justify-center text-zinc-500">
                    <Map className="mb-2" size={32} />
                    <p className="text-sm">Zone selection depends on Region assignment.</p>
                  </div>
                </div>
              )}

              {activeAction === 'export' && (
                <div className="action-panel">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Export Store Data</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <button className="p-4 border border-zinc-200 rounded-lg hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all flex flex-col items-center gap-2">
                      <FileText className="text-green-600" size={32} />
                      <span className="text-sm font-semibold">CSV</span>
                    </button>
                    <button className="p-4 border border-[var(--primary)] bg-[var(--primary)]/5 rounded-lg flex flex-col items-center gap-2 shadow-sm ring-1 ring-[var(--primary)]">
                      <Grid className="text-green-700" size={32} />
                      <span className="text-sm font-semibold">Excel</span>
                    </button>
                    <button className="p-4 border border-zinc-200 rounded-lg hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all flex flex-col items-center gap-2">
                      <FileText className="text-red-600" size={32} />
                      <span className="text-sm font-semibold">PDF</span>
                    </button>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input defaultChecked className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-300" type="checkbox" />
                      <span className="text-sm text-zinc-900">Include financial performance metrics</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input defaultChecked className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-300" type="checkbox" />
                      <span className="text-sm text-zinc-900">Include store manager contact details</span>
                    </label>
                  </div>
                </div>
              )}

              {activeAction === 'delete' && (
                <div className="action-panel">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                      <AlertTriangle size={24} />
                      Dangerous Action
                    </h3>
                    <p className="text-sm text-red-800 mb-6">
                      You are about to delete <strong>12 selected stores</strong> from the Provisions Enterprise network. This action is irreversible.
                    </p>
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-red-900 uppercase tracking-wider">Type CONFIRM to proceed</p>
                      <input 
                        className="w-full h-10 px-4 bg-white border border-red-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500/20 font-mono" 
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
        <footer className="px-6 py-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between bg-zinc-50 gap-4">
          <div className="flex items-center gap-1 text-zinc-500">
            <HelpCircle size={18} />
            <span className="text-xs font-semibold">Affects 12 entities</span>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="flex-1 sm:flex-none h-10 px-6 border border-zinc-300 text-zinc-700 font-semibold rounded-lg hover:bg-white transition-colors"
            >
              Cancel
            </button>
            <button 
              className={`flex-1 sm:flex-none h-10 px-8 font-bold rounded-lg shadow-md transition-all active:scale-[0.98] ${
                activeAction === 'delete' 
                  ? 'bg-red-600 text-white shadow-red-600/20 hover:bg-red-700' 
                  : 'bg-[var(--primary)] text-white shadow-[var(--primary)]/20 hover:brightness-110'
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
