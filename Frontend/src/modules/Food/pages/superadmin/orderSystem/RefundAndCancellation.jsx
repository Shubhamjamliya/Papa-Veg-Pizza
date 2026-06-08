import React, { useState } from 'react';
import { 
  ClipboardList, Search, Bell, Clock, 
  AlertTriangle, Filter, Download, MoreVertical,
  ChevronLeft, ChevronRight, CheckSquare,
  ExternalLink, X, CheckCircle, Eye 
} from 'lucide-react';
import { initialRefunds, useDebounce } from './RefundCancellationData';
import RefundCancellationDetails from './RefundCancellationDetails';
import RefundCancellationReport from './RefundCancellationReport';

export default function RefundAndCancellation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedRefundForDetails, setSelectedRefundForDetails] = useState(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Filter refunds based on debounced search term
  const filteredRefunds = initialRefunds.filter(refund => 
    refund.id.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    refund.customer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredRefunds.map(r => r.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const isAllSelected = filteredRefunds.length > 0 && selectedIds.length === filteredRefunds.length;
  const isIndeterminate = selectedIds.length > 0 && selectedIds.length < filteredRefunds.length;

  return (
    <div className="p-4 md:p-6 pb-24 max-w-7xl mx-auto w-full">
      {/* Header Search & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Refunds & Cancellations</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage and process multiple refund requests efficiently.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center bg-white dark:bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm w-full sm:w-64 transition-colors focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)]">
            <Search size={18} className="text-zinc-400 shrink-0" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 text-zinc-900 dark:text-zinc-100 outline-none placeholder-zinc-400" 
              placeholder="Search Refund ID..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2.5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-lg transition-colors relative shrink-0">
            <Bell size={18} className="text-zinc-600 dark:text-zinc-300" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--primary)] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Quick Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Clock size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> 12 New
            </span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Pending Approvals</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">124</h3>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <ClipboardList size={20} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold">Total ₹4.2k</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Processed Today</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">87</h3>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertTriangle size={20} className="text-red-600 dark:text-red-400" />
            </div>
            <span className="text-red-600 dark:text-red-400 text-xs font-bold">High Priority</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Disputed Items</p>
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">05</h3>
        </div>
      </div>

      {/* Table Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Active Requests</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            <Filter size={16} />
            Filter
          </button>
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm font-semibold text-zinc-700 dark:text-zinc-300"
          >
            <Download size={16} />
            Export All
          </button>
        </div>
      </div>

      {/* High-Density List Container */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="p-4 w-12 text-center">
                  <input 
                    className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                    type="checkbox"
                    checked={isAllSelected}
                    ref={input => {
                      if (input) input.indeterminate = isIndeterminate;
                    }}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Refund ID</th>
                <th className="p-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Customer</th>
                <th className="p-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Amount</th>
                <th className="p-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Requested At</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {filteredRefunds.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    No refunds found matching "{searchTerm}"
                  </td>
                </tr>
              ) : (
                filteredRefunds.map((refund) => (
                  <tr 
                    key={refund.id} 
                    className={`group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer ${selectedIds.includes(refund.id) ? 'bg-zinc-50 dark:bg-zinc-800/30' : ''}`}
                    onClick={(e) => {
                      if (e.target.type !== 'checkbox' && !e.target.closest('button')) {
                        handleSelectRow(refund.id);
                      }
                    }}
                  >
                    <td className="p-4 text-center">
                      <input 
                        className="w-4 h-4 rounded border-zinc-300 dark:border-zinc-600 text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                        type="checkbox"
                        checked={selectedIds.includes(refund.id)}
                        onChange={() => handleSelectRow(refund.id)}
                      />
                    </td>
                    <td className="p-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300 font-mono tracking-tight">{refund.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-700">
                          {refund.initials}
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{refund.customer}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-bold text-zinc-900 dark:text-zinc-50">{refund.amount}</td>
                    <td className="p-4">
                      {refund.status === 'New' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold tracking-wide uppercase">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> New
                        </span>
                      )}
                      {refund.status === 'Pending' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[11px] font-bold tracking-wide uppercase">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Pending
                        </span>
                      )}
                      {refund.status === 'Priority' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[11px] font-bold tracking-wide uppercase">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Priority
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">{refund.requestedAt}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRefundForDetails(refund);
                          setIsDetailsOpen(true);
                        }}
                        className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 transition-colors"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Showing {filteredRefunds.length} of {initialRefunds.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 text-zinc-500 bg-transparent" disabled>
              <ChevronLeft size={16} />
            </button>
            <span className="w-8 h-8 flex items-center justify-center bg-[var(--primary)] text-white rounded-lg text-sm font-bold shadow-sm">1</span>
            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-semibold hover:bg-white dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 bg-transparent">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-semibold hover:bg-white dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 bg-transparent">3</button>
            <button className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-white dark:hover:bg-zinc-800 transition-colors text-zinc-500 bg-transparent">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Persistent Bulk Action Bar */}
      <div 
        className={`fixed bottom-0 left-0 lg:left-[280px] right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.4)] p-4 md:px-8 transition-transform duration-300 z-40 flex justify-center ${selectedIds.length > 0 ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
              <CheckSquare size={24} />
            </div>
            <div>
              <p className="text-lg font-bold text-[var(--primary)]">{selectedIds.length} Items Selected</p>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Bulk actions will apply to all selected refund requests.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <button 
              onClick={() => setIsReportModalOpen(true)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-sm font-semibold"
            >
              <ExternalLink size={18} />
              Export
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-sm font-semibold">
              <X size={18} />
              Reject
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm font-semibold shadow-lg shadow-[var(--primary)]/20">
              <CheckCircle size={18} />
              Approve
            </button>
          </div>
        </div>
      </div>

      <RefundCancellationDetails 
        isOpen={isDetailsOpen} 
        onClose={() => setIsDetailsOpen(false)} 
        refund={selectedRefundForDetails} 
      />

      <RefundCancellationReport 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
      />
    </div>
  );
}
