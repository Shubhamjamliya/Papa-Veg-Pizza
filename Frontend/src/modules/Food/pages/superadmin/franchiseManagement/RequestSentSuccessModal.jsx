import React from "react";
import { Check, ClipboardList, TrendingUp, LayoutDashboard } from "lucide-react";

export default function RequestSentSuccessModal({ isOpen, onClose, onReturnDashboard, request, requestedDocs = [] }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-950 z-[60] overflow-y-auto" id="success-overlay">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        
        {/* Success State Illustration Section */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-8 border-2 border-emerald-500 shadow-[0_0_40px_rgba(16,175,80,0.2)]">
            <Check size={48} className="text-emerald-600 dark:text-emerald-400 stroke-[3]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">Document Request Sent</h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-12">
            A notification has been sent to <span className="font-semibold text-zinc-900 dark:text-zinc-100">{request?.applicant || "Amit Sharma"}</span> requesting the following documents: <span className="text-[var(--primary)] italic font-medium">{requestedDocs.length > 0 ? requestedDocs.join(", ") : "GST Registration, Bank Statement"}</span>. The applicant has been notified of the due date: <span className="font-semibold text-zinc-900 dark:text-zinc-100">Nov 15, 2023</span>.
          </p>
        </div>

        {/* Next Steps Bento-style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 max-w-3xl">
          {/* Action Card 1 */}
          <div 
            onClick={onClose}
            className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <ClipboardList size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Return to Requests</h3>
                <p className="text-sm text-zinc-500">Manage other pending document requests for potential franchisees.</p>
              </div>
            </div>
          </div>

          {/* Action Card 2 */}
          <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">View Application Timeline</h3>
                <p className="text-sm text-zinc-500">Check {request?.applicant?.split(" ")[0] || "Amit"}'s overall application progress and pending milestones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <div className="w-full flex justify-center">
          <button 
            onClick={onReturnDashboard}
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            Return to Dashboard
            <LayoutDashboard size={20} />
          </button>
        </div>

        {/* Subtle Decorative Background Pattern */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-[-1]">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>

      </div>
    </div>
  );
}
