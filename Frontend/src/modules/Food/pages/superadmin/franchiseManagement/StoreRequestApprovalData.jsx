import React, { useState, useEffect } from "react";
import { Search, Eye, CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function StoreRequestApprovalData({ onRowClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const initialRequests = [
    {
      id: "#RQ-2023-001",
      applicant: "Amit Sharma",
      city: "Mumbai",
      investment: "₹50-75L",
      status: "Pending",
    },
    {
      id: "#RQ-2023-002",
      applicant: "Priya Rai",
      city: "Delhi",
      investment: "₹75L+",
      status: "Under Review",
    },
    {
      id: "#RQ-2023-003",
      applicant: "Rohan Das",
      city: "Bangalore",
      investment: "₹25-50L",
      status: "Approved",
    },
    {
      id: "#RQ-2023-004",
      applicant: "Vikram Singh",
      city: "Pune",
      investment: "₹50-75L",
      status: "Pending",
    },
  ];

  const filteredRequests = initialRequests.filter(req => 
    req.applicant.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    req.city.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    req.id.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="xl:col-span-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
      <div className="p-4 md:p-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h5 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Recent Store Requests</h5>
        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
            placeholder="Search applicant or city..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Request ID</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Applicant Name</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">City</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Investment</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredRequests.map((req, idx) => (
              <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer" onClick={() => onRowClick && onRowClick(req)}>
                <td className="px-6 py-4 font-mono text-sm text-[var(--primary)] font-medium">{req.id}</td>
                <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{req.applicant}</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">{req.city}</td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">{req.investment}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-[10px] rounded uppercase font-bold
                    ${req.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 
                      req.status === 'Under Review' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 
                      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-zinc-500" 
                      title="Review"
                      onClick={(e) => { e.stopPropagation(); onRowClick && onRowClick(req); }}
                    >
                      <Eye size={18} />
                    </button>
                    <button className="p-2 hover:bg-[var(--primary)]/10 rounded text-[var(--primary)]" title="Approve" onClick={(e) => e.stopPropagation()}>
                      <CheckCircle size={18} />
                    </button>
                    <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-red-500" title="Reject" onClick={(e) => e.stopPropagation()}>
                      <XCircle size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredRequests.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-zinc-500 text-sm">
                  No requests found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 md:p-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
        <p className="text-xs text-zinc-500">Showing 1 to {filteredRequests.length} of {initialRequests.length} entries</p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 text-zinc-500" disabled>
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[var(--primary)] text-white font-bold text-xs shadow-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs text-zinc-700 dark:text-zinc-300">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs text-zinc-700 dark:text-zinc-300">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-500">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
