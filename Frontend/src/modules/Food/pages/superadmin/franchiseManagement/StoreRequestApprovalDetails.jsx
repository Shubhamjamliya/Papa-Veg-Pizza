import React, { useState } from "react";
import { X, User, Briefcase, BarChart2, CheckCircle, FileText, BadgeCheck, Clock, Hourglass, Eye, Download, Gavel, XCircle, Info, FilePlus, ShieldCheck } from "lucide-react";
import RequestDocumentsModal from "./RequestDocumentsModal";
import RequestSentSuccessModal from "./RequestSentSuccessModal";

export default function StoreRequestApprovalDetails({ isOpen, onClose, request }) {
  const [decision, setDecision] = useState("approve");
  const [isRequestDocsOpen, setIsRequestDocsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [requestedDocs, setRequestedDocs] = useState([]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8" id="modal-overlay">
      <div className="bg-zinc-50 dark:bg-zinc-950 w-full max-w-6xl h-[95vh] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800">
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 relative">
          
          <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-5xl mx-auto w-full">
            
            {/* Modal Header Content */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    Review Request: <span className="text-[var(--primary)]">{request?.id || "#RQ-2023-001"}</span>
                  </h1>
                  <p className="text-sm text-zinc-500 mt-1">Submitted on Oct 24, 2023 • 10:45 AM</p>
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 uppercase tracking-wider
                    ${request?.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 
                      request?.status === 'Under Review' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 
                      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'}`}>
                    <Clock size={14} />
                    {request?.status || "PENDING"}
                  </span>
                  <button 
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Bento Grid Layout for Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-200 dark:bg-zinc-800">
                {/* Section: Applicant Details */}
                <div className="md:col-span-4 bg-white dark:bg-zinc-900 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4 text-[var(--primary)]">
                    <User size={20} />
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Applicant Details</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Full Name</p>
                      <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">{request?.applicant || "Amit Sharma"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Contact</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">+91 98765 43210</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">{request?.applicant ? request.applicant.toLowerCase().replace(' ', '.') + "@email.com" : "amit.sharma@email.com"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Residential Address</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">Flat 402, Lotus Heights, Worli, {request?.city || "Mumbai"}, MH - 400018</p>
                    </div>
                  </div>
                </div>

                {/* Section: Business Info */}
                <div className="md:col-span-4 bg-white dark:bg-zinc-900 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4 text-orange-500">
                    <Briefcase size={20} />
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Business Info</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 p-4 rounded-lg border border-orange-200 dark:border-orange-800/50">
                      <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">Investment Capacity</p>
                      <p className="text-xl font-bold">{request?.investment || "₹50L - ₹1Cr"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Target Location</p>
                      <p className="text-sm font-bold text-blue-600 dark:text-blue-400">South {request?.city || "Mumbai"}, MH</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">F&B Experience</p>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">10+ years in premium dining & quick-service operations</p>
                    </div>
                  </div>
                </div>

                {/* Section: Internal Review & Risk */}
                <div className="md:col-span-4 bg-white dark:bg-zinc-900 p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-4 text-blue-500">
                    <BarChart2 size={20} />
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Internal Review</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wide opacity-80">Risk Score</p>
                        <p className="text-xl font-bold">85/100</p>
                      </div>
                      <span className="px-3 py-1 bg-white dark:bg-blue-900 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-300 rounded-full text-[10px] font-bold">LOW RISK</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Verification Status</p>
                      <div className="flex items-center gap-1 mt-1 text-emerald-600 dark:text-emerald-500 font-bold text-sm">
                        <ShieldCheck size={16} />
                        <span>Background Check Cleared</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Super Admin Notes</label>
                      <textarea className="w-full mt-1 p-2 text-sm border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 outline-none h-20 resize-none dark:text-zinc-100" placeholder="Add confidential notes..."></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Verification Section */}
              <div className="p-4 md:p-6 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                    <FileText size={20} />
                    <h2 className="text-lg font-semibold">Documents Verification</h2>
                  </div>
                  <span className="text-xs font-bold text-zinc-500">4 Documents Provided</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">
                        <th className="p-3 font-semibold rounded-tl-lg">Document Name</th>
                        <th className="p-3 font-semibold">Status</th>
                        <th className="p-3 font-semibold">Upload Date</th>
                        <th className="p-3 font-semibold text-right rounded-tr-lg">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-100 dark:divide-zinc-800">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">PAN Card</td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-500 text-xs font-bold">
                            <BadgeCheck size={16} /> Verified
                          </span>
                        </td>
                        <td className="p-3 text-sm text-zinc-500">24 Oct 2023</td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end gap-3">
                            <Eye size={18} className="text-[var(--primary)] cursor-pointer hover:scale-110 transition-transform" title="Preview" />
                            <Download size={18} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer hover:scale-110 transition-transform" title="Download" />
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">Aadhar Card</td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-500 text-xs font-bold">
                            <BadgeCheck size={16} /> Verified
                          </span>
                        </td>
                        <td className="p-3 text-sm text-zinc-500">24 Oct 2023</td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end gap-3">
                            <Eye size={18} className="text-[var(--primary)] cursor-pointer hover:scale-110 transition-transform" title="Preview" />
                            <Download size={18} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer hover:scale-110 transition-transform" title="Download" />
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">GST Registration</td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-orange-500 dark:text-orange-400 text-xs font-bold">
                            <Clock size={16} /> Pending Review
                          </span>
                        </td>
                        <td className="p-3 text-sm text-zinc-500">25 Oct 2023</td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end gap-3">
                            <Eye size={18} className="text-[var(--primary)] cursor-pointer hover:scale-110 transition-transform" title="Preview" />
                            <Download size={18} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer hover:scale-110 transition-transform" title="Download" />
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">Bank Statement (6 Months)</td>
                        <td className="p-3">
                          <span className="flex items-center gap-1 text-blue-500 dark:text-blue-400 text-xs font-bold">
                            <Hourglass size={16} /> Under Review
                          </span>
                        </td>
                        <td className="p-3 text-sm text-zinc-500">25 Oct 2023</td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end gap-3">
                            <Eye size={18} className="text-[var(--primary)] cursor-pointer hover:scale-110 transition-transform" title="Preview" />
                            <Download size={18} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer hover:scale-110 transition-transform" title="Download" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Approval Decision Section */}
              <div className="p-4 md:p-6 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-6 text-zinc-900 dark:text-zinc-100">
                  <Gavel size={20} />
                  <h2 className="text-lg font-semibold">Approval Decision</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-3">Decision Type</p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      <label className="cursor-pointer group">
                        <input checked={decision === 'approve'} onChange={() => setDecision('approve')} className="peer hidden" name="decision" type="radio" />
                        <div className="text-center p-2 sm:p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all text-xs font-bold flex flex-col items-center gap-1 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800">
                          <CheckCircle size={20} /> Approve
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input checked={decision === 'reject'} onChange={() => setDecision('reject')} className="peer hidden" name="decision" type="radio" />
                        <div className="text-center p-2 sm:p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg peer-checked:bg-red-50 dark:peer-checked:bg-red-900/20 peer-checked:border-red-500 peer-checked:text-red-600 dark:peer-checked:text-red-400 transition-all text-xs font-bold flex flex-col items-center gap-1 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800">
                          <XCircle size={20} /> Reject
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input checked={decision === 'info'} onChange={() => setDecision('info')} className="peer hidden" name="decision" type="radio" />
                        <div className="text-center p-2 sm:p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg peer-checked:bg-orange-50 dark:peer-checked:bg-orange-900/20 peer-checked:border-orange-500 peer-checked:text-orange-600 dark:peer-checked:text-orange-400 transition-all text-xs font-bold flex flex-col items-center gap-1 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800">
                          <Info size={20} /> Need Info
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-3">Decision Comments</p>
                    <textarea className="w-full p-3 text-sm border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 outline-none h-24 resize-none dark:text-zinc-100" placeholder="Provide reasoning for your decision..."></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Visuals (Contextual Graphic) */}
            <div className="mt-8 hidden md:block">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dashboard view" 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">Verify with Confidence</h3>
                    <p className="text-sm opacity-90 max-w-lg">Our AI-driven risk assessment helps you scale the Papa Veg Pizza family faster and safer.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Fixed Footer Actions inside Modal */}
        <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 flex flex-wrap gap-4 justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] rounded-b-xl shrink-0">
          <div className="hidden sm:block flex-1">
            <p className="text-xs font-bold text-zinc-500">Last updated by Admin: 25 Oct 2023</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              className="flex-1 sm:flex-none px-6 h-10 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              onClick={onClose}
            >
              Reject
            </button>
            <button 
              onClick={() => setIsRequestDocsOpen(true)}
              className="flex-1 sm:flex-none px-6 h-10 bg-orange-500 text-white font-bold text-sm rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <FilePlus size={16} /> <span className="hidden sm:inline">Request Docs</span>
            </button>
            <button 
              className="flex-[2] sm:flex-none px-8 h-10 bg-[var(--primary)] text-white font-bold text-sm rounded-lg hover:brightness-110 transition-all shadow-md flex items-center justify-center gap-2"
              onClick={onClose}
            >
              <BadgeCheck size={18} /> Approve Request
            </button>
          </div>
        </div>

      </div>

      <RequestDocumentsModal 
        isOpen={isRequestDocsOpen} 
        onClose={() => setIsRequestDocsOpen(false)} 
        request={request}
        onRequestSent={(docs) => {
          setRequestedDocs(docs);
          setIsRequestDocsOpen(false);
          setIsSuccessOpen(true);
        }}
      />

      <RequestSentSuccessModal 
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        onReturnDashboard={() => {
          setIsSuccessOpen(false);
          onClose(); // Close details modal as well to return fully back
        }}
        request={request}
        requestedDocs={requestedDocs}
      />
    </div>
  );
}
