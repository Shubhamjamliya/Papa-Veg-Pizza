import React, { useState } from "react";
import {
  Layers,
  X,
  RefreshCw,
  FileText,
  UserPlus,
  Download,
  Trash2,
  AlertTriangle,
  Info,
  HelpCircle,
  Check,
  ChevronDown,
  FileSpreadsheet,
  FileUp,
  FileIcon
} from "lucide-react";

export default function BulkActionStore({
  isOpen,
  onClose,
  selectedRequests = [],
  onClearSelection,
  onApplyAction,
}) {
  const [activeTab, setActiveTab] = useState("update-status");
  const [status, setStatus] = useState("");
  const [reason, setReason] = useState("");
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [reviewer, setReviewer] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [exportFormat, setExportFormat] = useState("Excel");
  const [exportOptions, setExportOptions] = useState({
    financials: true,
    contacts: true,
    risk: false,
  });
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  if (!isOpen) return null;

  const count = selectedRequests.length;

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const toggleDoc = (doc) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(selectedDocs.filter((d) => d !== doc));
    } else {
      setSelectedDocs([...selectedDocs, doc]);
    }
  };

  const getStatusImpactText = () => {
    switch (status) {
      case "approve":
        return `Moving status to 'Approve' will automatically trigger legal onboarding workflows and notify the selected ${count} franchise applicants via email.`;
      case "reject":
        return `Rejecting these requests will immediately terminate the application process and send automated rejection emails to the selected ${count} applicants.`;
      case "under_review":
        return `This will transition the selected ${count} requests to the 'Under Review' stage and assign them to the active verification queue.`;
      case "pending_info":
        return `This will flag the selected ${count} requests as 'Pending Info (Incomplete)' and prompt the applicants to submit missing documents.`;
      default:
        return "Please select a target status to view the specific operational impact of this action.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      actionType: activeTab,
      requestIds: selectedRequests.map((r) => r.id),
    };

    if (activeTab === "update-status") {
      if (!status) return;
      payload.status = status;
      payload.reason = reason;
    } else if (activeTab === "request-docs") {
      if (selectedDocs.length === 0) return;
      payload.documents = selectedDocs;
      payload.instructions = reason;
    } else if (activeTab === "assign-reviewer") {
      if (!reviewer) return;
      payload.reviewer = reviewer;
      payload.priority = priority;
    } else if (activeTab === "export") {
      payload.format = exportFormat;
      payload.options = exportOptions;
    } else if (activeTab === "delete") {
      if (deleteConfirmText !== "DELETE") return;
    }

    onApplyAction(payload);
    onClose();
  };

  const isFormValid = () => {
    if (count === 0) return false;
    if (activeTab === "update-status") {
      return status !== "";
    }
    if (activeTab === "request-docs") {
      return selectedDocs.length > 0;
    }
    if (activeTab === "assign-reviewer") {
      return reviewer !== "";
    }
    if (activeTab === "export") {
      return true;
    }
    if (activeTab === "delete") {
      return deleteConfirmText === "DELETE";
    }
    return false;
  };

  const documentOptions = [
    "PAN Card",
    "Aadhar Card",
    "GST Registration Certificate",
    "Bank Statement (6 Months)",
    "F&B Experience Certificate",
    "Business Plan Proposal",
  ];

  return (
    <div className="fixed inset-0 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Bulk Actions Modal Content */}
      <div className="bg-white dark:bg-zinc-950 w-full max-w-[850px] h-[640px] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="px-6 h-16 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 shrink-0 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <Layers className="text-[var(--primary)]" size={22} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Bulk Actions</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Summary Bar */}
        <div className="px-6 py-3 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 shrink-0">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            <strong className="text-[var(--primary)]">{count} Requests</strong> Selected for global modification
          </p>
          {count > 0 && (
            <button
              onClick={onClearSelection}
              className="text-xs font-bold text-[var(--primary)] hover:underline decoration-2 underline-offset-4"
            >
              Clear Selection
            </button>
          )}
        </div>

        {/* Body: Sidebar + Content */}
        <div className="flex-1 flex overflow-hidden flex-col sm:flex-row">
          {/* Action Sidebar */}
          <nav className="w-full sm:w-56 bg-zinc-50 dark:bg-zinc-900/30 border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between py-4 shrink-0 overflow-y-auto">
            <div className="space-y-1 px-2">
              <button
                type="button"
                onClick={() => setActiveTab("update-status")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === "update-status"
                    ? "bg-white dark:bg-zinc-800 border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40"
                }`}
              >
                <RefreshCw size={18} className={activeTab === "update-status" ? "animate-spin-slow text-[var(--primary)]" : ""} />
                <span className="text-sm font-semibold">Update Status</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("request-docs")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === "request-docs"
                    ? "bg-white dark:bg-zinc-800 border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40"
                }`}
              >
                <FileText size={18} />
                <span className="text-sm font-semibold">Request Documents</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("assign-reviewer")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === "assign-reviewer"
                    ? "bg-white dark:bg-zinc-800 border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40"
                }`}
              >
                <UserPlus size={18} />
                <span className="text-sm font-semibold">Assign Reviewer</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("export")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === "export"
                    ? "bg-white dark:bg-zinc-800 border-l-4 border-[var(--primary)] text-[var(--primary)] font-bold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40"
                }`}
              >
                <Download size={18} />
                <span className="text-sm font-semibold">Export Data</span>
              </button>
            </div>

            <div className="px-4 mt-8 sm:mt-auto">
              <button
                type="button"
                onClick={() => setActiveTab("delete")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                  activeTab === "delete"
                    ? "bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 text-red-600 font-bold shadow-sm"
                    : "text-red-500 dark:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-950/10"
                }`}
              >
                <Trash2 size={18} />
                <span className="text-sm font-semibold">Delete Requests</span>
              </button>
            </div>
          </nav>

          {/* Action View Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-white dark:bg-zinc-950 custom-scrollbar">
            {count === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-500 dark:text-zinc-400 space-y-4">
                <Layers size={48} className="text-zinc-300 dark:text-zinc-700 animate-pulse" />
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">No Requests Selected</h4>
                  <p className="text-sm mt-1 max-w-sm">Please close this modal and select at least one franchise request from the list to apply bulk changes.</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                
                {/* View 1: Update Status */}
                {activeTab === "update-status" && (
                  <div className="space-y-5">
                    <header>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Update Application Status</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Bulk modify the progress of selected franchise requests.</p>
                    </header>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Change Status To</label>
                      <div className="relative">
                        <select
                          value={status}
                          onChange={handleStatusChange}
                          required
                          className="w-full h-11 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 appearance-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-sm transition-all cursor-pointer dark:text-zinc-100"
                        >
                          <option value="" disabled>Select new status...</option>
                          <option value="Approved">Approve Applications</option>
                          <option value="Rejected">Reject Applications</option>
                          <option value="Under Review">Mark Under Review</option>
                          <option value="Pending">Mark Pending / Incomplete</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 dark:text-zinc-400" size={18} />
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 flex gap-4 transition-colors ${
                      status === "Approved" ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400" :
                      status === "Rejected" ? "bg-red-50 dark:bg-red-950/20 border-red-500 text-red-800 dark:text-red-400" :
                      status === "Under Review" ? "bg-blue-50 dark:bg-blue-950/20 border-blue-500 text-blue-800 dark:text-blue-400" :
                      status === "Pending" ? "bg-amber-50 dark:bg-amber-950/20 border-amber-500 text-amber-800 dark:text-amber-400" :
                      "bg-zinc-50 dark:bg-zinc-900/50 border-zinc-300 text-zinc-600 dark:text-zinc-400"
                    }`}>
                      <Info className="shrink-0 mt-0.5" size={18} />
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-wider">Operational Impact Note</p>
                        <p className="text-sm leading-relaxed">{getStatusImpactText()}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Reason for Change</label>
                      <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value.slice(0, 500))}
                        className="w-full p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all resize-none dark:text-zinc-100 h-28"
                        placeholder="Enter internal notes for this bulk operation..."
                      />
                      <p className="text-right text-xs text-zinc-400">{reason.length} / 500 characters</p>
                    </div>
                  </div>
                )}

                {/* View 2: Request Documents */}
                {activeTab === "request-docs" && (
                  <div className="space-y-5">
                    <header>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Request Additional Documents</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Request specific documentation updates from all selected applicants in bulk.</p>
                    </header>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Select Documents Needed</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {documentOptions.map((doc) => {
                          const isChecked = selectedDocs.includes(doc);
                          return (
                            <button
                              key={doc}
                              type="button"
                              onClick={() => toggleDoc(doc)}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all ${
                                isChecked
                                  ? "border-[var(--primary)] bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 text-zinc-900 dark:text-zinc-100 font-semibold"
                                  : "border-zinc-200 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                                isChecked
                                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                                  : "border-zinc-350 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                              }`}>
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </div>
                              <span className="text-xs">{doc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-lg flex gap-4 text-amber-800 dark:text-amber-400">
                      <Info className="shrink-0 mt-0.5" size={18} />
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-wider">Note on Alerts</p>
                        <p className="text-sm leading-relaxed">Applicants will be notified immediately to upload the checked documents through their franchisee portal login link.</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Custom Instructions</label>
                      <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value.slice(0, 500))}
                        className="w-full p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all resize-none dark:text-zinc-100 h-24"
                        placeholder="Add special instructions or requirements for uploading..."
                      />
                      <p className="text-right text-xs text-zinc-400">{reason.length} / 500 characters</p>
                    </div>
                  </div>
                )}

                {/* View 3: Assign Reviewer */}
                {activeTab === "assign-reviewer" && (
                  <div className="space-y-5">
                    <header>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Assign Primary Reviewer</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Set the review officer for the selected application requests.</p>
                    </header>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Select Reviewer</label>
                      <div className="relative">
                        <select
                          value={reviewer}
                          onChange={(e) => setReviewer(e.target.value)}
                          required
                          className="w-full h-11 px-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 appearance-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-sm transition-all cursor-pointer dark:text-zinc-100"
                        >
                          <option value="" disabled>Select reviewer...</option>
                          <option value="Sarah Jenkins">Sarah Jenkins (Northeast Division)</option>
                          <option value="Michael Chen">Michael Chen (Southeast Metro)</option>
                          <option value="Rahul Verma">Rahul Verma (Operations Manager)</option>
                          <option value="Priyesh Patel">Priyesh Patel (Risk Assessment)</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 dark:text-zinc-400" size={18} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Set Processing Priority</label>
                      <div className="grid grid-cols-4 gap-2">
                        {["Low", "Medium", "High", "Critical"].map((prio) => (
                          <button
                            key={prio}
                            type="button"
                            onClick={() => setPriority(prio)}
                            className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                              priority === prio
                                ? prio === "Critical"
                                  ? "bg-red-650 text-white border-red-650"
                                  : prio === "High"
                                  ? "bg-orange-500 text-white border-orange-500"
                                  : prio === "Medium"
                                  ? "bg-blue-600 text-white border-blue-600"
                                  : "bg-zinc-600 text-white border-zinc-650"
                                : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                            }`}
                          >
                            {prio}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-550 p-4 rounded-lg flex gap-4 text-blue-800 dark:text-blue-400">
                      <Info className="shrink-0 mt-0.5" size={18} />
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-wider">Task Assignment</p>
                        <p className="text-sm leading-relaxed">This reviewer will be assigned as the primary owner for all {count} requests, and their tasks/approvals queue will be populated immediately.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 4: Export Data */}
                {activeTab === "export" && (
                  <div className="space-y-5">
                    <header>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Export Application Data</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Download data sheets for the {count} selected requests.</p>
                    </header>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Format</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "Excel", label: "Excel (.xlsx)", icon: FileSpreadsheet, color: "text-green-600" },
                          { id: "CSV", label: "CSV (.csv)", icon: FileUp, color: "text-blue-600" },
                          { id: "PDF", label: "PDF (.pdf)", icon: FileIcon, color: "text-red-500" },
                        ].map((fmt) => {
                          const IconComp = fmt.icon;
                          const isSel = exportFormat === fmt.id;
                          return (
                            <button
                              key={fmt.id}
                              type="button"
                              onClick={() => setExportFormat(fmt.id)}
                              className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${
                                isSel
                                  ? "border-[var(--primary)] bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 ring-2 ring-[var(--primary)]/20"
                                  : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                              }`}
                            >
                              <IconComp className={`${fmt.color}`} size={32} />
                              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{fmt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">Export Preferences</label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 cursor-pointer select-none group">
                          <input
                            type="checkbox"
                            checked={exportOptions.financials}
                            onChange={(e) => setExportOptions({ ...exportOptions, financials: e.target.checked })}
                            className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-350 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                          />
                          <span className="text-sm text-zinc-750 dark:text-zinc-350 group-hover:text-zinc-900 dark:group-hover:text-zinc-150">Include financial performance & investment capacity</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer select-none group">
                          <input
                            type="checkbox"
                            checked={exportOptions.contacts}
                            onChange={(e) => setExportOptions({ ...exportOptions, contacts: e.target.checked })}
                            className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-350 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                          />
                          <span className="text-sm text-zinc-750 dark:text-zinc-350 group-hover:text-zinc-900 dark:group-hover:text-zinc-150">Include applicant contact details and residential address</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer select-none group">
                          <input
                            type="checkbox"
                            checked={exportOptions.risk}
                            onChange={(e) => setExportOptions({ ...exportOptions, risk: e.target.checked })}
                            className="w-4 h-4 rounded text-[var(--primary)] focus:ring-[var(--primary)] border-zinc-350 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                          />
                          <span className="text-sm text-zinc-750 dark:text-zinc-350 group-hover:text-zinc-900 dark:group-hover:text-zinc-150">Include internal risk assessment audit logs</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 5: Delete */}
                {activeTab === "delete" && (
                  <div className="space-y-5">
                    <header>
                      <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-1 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-red-650" />
                        Dangerous Action Warning
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Permanently delete selected franchise applications.</p>
                    </header>

                    <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-lg border border-red-200 dark:border-red-900 text-red-800 dark:text-red-400 space-y-3">
                      <p className="text-sm leading-relaxed">
                        You are about to delete <strong>{count} selected store requests</strong> from the Papa Veg Pizza network.
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-red-755 dark:text-red-305">
                        This action is irreversible. All data, submitted documents, and status logs will be permanently removed.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider block">
                        Type <code className="font-mono bg-red-100 dark:bg-red-950 px-1.5 py-0.5 rounded text-red-600">DELETE</code> to confirm
                      </label>
                      <input
                        value={deleteConfirmText}
                        onChange={(e) => setDeleteConfirmText(e.target.value)}
                        placeholder="DELETE"
                        required
                        className="w-full h-11 px-4 rounded-lg border border-red-200 dark:border-red-900 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-100"
                        type="text"
                      />
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 h-20 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
          <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-450">
            <HelpCircle size={16} />
            <span className="text-xs font-semibold">
              Affects {count} {count === 1 ? "entity" : "entities"}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              type="button"
              className="px-5 h-10 border border-zinc-200 dark:border-zinc-800 rounded-lg font-semibold text-sm text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 transition-all active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              type="button"
              className={`px-6 h-10 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
                !isFormValid()
                  ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-650 cursor-not-allowed shadow-none"
                  : activeTab === "delete"
                  ? "bg-red-600 hover:bg-red-750 text-white shadow-red-600/20"
                  : "bg-[var(--primary)] hover:brightness-110 text-white shadow-[var(--primary)]/20"
              }`}
            >
              {activeTab === "delete" ? "Confirm Delete" : "Apply Action"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
