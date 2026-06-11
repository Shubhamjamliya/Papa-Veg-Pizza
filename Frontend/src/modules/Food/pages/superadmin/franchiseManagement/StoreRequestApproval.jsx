import React, { useState } from "react";
import { ChevronRight, Download, SlidersHorizontal, Layers, Store, Eye, CheckCircle, XCircle } from "lucide-react";
import StoreRequestApprovalData from "./StoreRequestApprovalData";
import StoreRequestApprovalDetails from "./StoreRequestApprovalDetails";
import BulkActionStore from "./BulkActionStore";

export default function StoreRequestApproval() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isBulkActionOpen, setIsBulkActionOpen] = useState(false);
  const [selectedRequestIds, setSelectedRequestIds] = useState([]);

  const [requests, setRequests] = useState([
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
  ]);

  const handleRowClick = (req) => {
    setSelectedRequest(req);
    setIsDetailsOpen(true);
  };

  const handleToggleSelectRequest = (id) => {
    setSelectedRequestIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAllRequests = (filteredIds, checked) => {
    if (checked) {
      setSelectedRequestIds((prev) => {
        const newSelected = [...prev];
        filteredIds.forEach((id) => {
          if (!newSelected.includes(id)) {
            newSelected.push(id);
          }
        });
        return newSelected;
      });
    } else {
      setSelectedRequestIds((prev) => prev.filter((id) => !filteredIds.includes(id)));
    }
  };

  const handleClearSelection = () => {
    setSelectedRequestIds([]);
  };

  const handleApplyBulkAction = (payload) => {
    if (payload.actionType === "update-status") {
      setRequests((prev) =>
        prev.map((req) =>
          payload.requestIds.includes(req.id) ? { ...req, status: payload.status } : req
        )
      );
      // Optional: Clear selection after status update
      setSelectedRequestIds([]);
    } else if (payload.actionType === "delete") {
      setRequests((prev) => prev.filter((req) => !payload.requestIds.includes(req.id)));
      setSelectedRequestIds([]);
    } else if (payload.actionType === "request-docs") {
      console.log("Documents requested:", payload.documents, "for requests:", payload.requestIds);
    } else if (payload.actionType === "assign-reviewer") {
      console.log("Reviewer assigned:", payload.reviewer, "priority:", payload.priority, "for requests:", payload.requestIds);
    }
  };

  // Calculate counts dynamically from state
  const pendingCount = requests.filter((r) => r.status === "Pending").length;
  const underReviewCount = requests.filter((r) => r.status === "Under Review").length;
  const approvedCount = requests.filter((r) => r.status === "Approved").length;
  const rejectedCount = requests.filter((r) => r.status === "Rejected").length;

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Breadcrumbs & Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Store Requests & Approvals</h2>
            <p className="text-zinc-500 mt-2 max-w-2xl text-sm">Manage franchise applications, approvals, document verification, and onboarding workflows efficiently.</p>
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm shadow-sm">
              <Download size={16} />
              Export Requests
            </button>
            <button
              onClick={() => setIsBulkActionOpen(true)}
              className="px-5 py-2 bg-[var(--primary)] text-white font-semibold rounded-lg hover:brightness-110 shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center gap-2 text-sm"
            >
              <Layers size={18} />
              Bulk Actions {selectedRequestIds.length > 0 && `(${selectedRequestIds.length})`}
            </button>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pending */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
              <Store size={20} />
            </div>
            <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Pending</div>
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Pending Requests</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{pendingCount}</h4>
              {/* Sparkline simulation */}
              <div className="h-8 w-20 bg-amber-500/10 rounded relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-500/30 dark:bg-amber-500/50" style={{ clipPath: 'polygon(0% 100%, 0% 40%, 20% 60%, 40% 30%, 60% 70%, 80% 20%, 100% 50%, 100% 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Under Review */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
              <Eye size={20} />
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Under Review</div>
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Under Review</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{underReviewCount}</h4>
              <div className="h-8 w-20 bg-blue-500/10 rounded relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/30 dark:bg-blue-500/50" style={{ clipPath: 'polygon(0% 100%, 0% 70%, 25% 40%, 50% 60%, 75% 20%, 100% 40%, 100% 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Approved */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <CheckCircle size={20} />
            </div>
            <div className="bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Approved</div>
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Approved</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{approvedCount}</h4>
              <div className="h-8 w-20 bg-[var(--primary)]/10 rounded relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[var(--primary)]/30" style={{ clipPath: 'polygon(0% 100%, 0% 80%, 20% 50%, 40% 40%, 60% 30%, 80% 20%, 100% 10%, 100% 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Rejected */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
              <XCircle size={20} />
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Rejected</div>
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Rejected</p>
            <div className="flex items-end justify-between">
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{rejectedCount}</h4>
              <div className="h-8 w-20 bg-red-500/10 rounded relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-500/30 dark:bg-red-500/50" style={{ clipPath: 'polygon(0% 100%, 0% 20%, 30% 80%, 60% 40%, 100% 90%, 100% 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid - Large Table & Info Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

        {/* Table Container Component */}
        <StoreRequestApprovalData
          onRowClick={handleRowClick}
          requests={requests}
          selectedRequestIds={selectedRequestIds}
          onToggleSelectRequest={handleToggleSelectRequest}
          onToggleSelectAllRequests={handleToggleSelectAllRequests}
        />

        {/* Side Panel / Quick Insights */}
        <div className="flex flex-col gap-6 xl:col-span-1">
          {/* Distribution Card */}
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm">
            <h6 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Territory Distribution</h6>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                  <span>North India</span>
                  <span className="font-bold text-[var(--primary)]">42%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--primary)]" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                  <span>West India</span>
                  <span className="font-bold text-orange-500">35%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                  <span>South India</span>
                  <span className="font-bold text-blue-500">23%</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Visual Insight */}
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col flex-1 min-h-[300px]">
            <div className="p-6 pb-4">
              <h6 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Regional Hotspots</h6>
              <p className="text-xs text-zinc-500 leading-relaxed">Top performing cities currently receiving highest application volume.</p>
            </div>
            <div className="flex-1 relative bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <img
                alt="Map distribution"
                className="w-full h-full object-cover grayscale opacity-50 dark:opacity-30"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-12 -left-8 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-2 shadow-lg animate-bounce z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                      <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Mumbai Hotspot</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-[var(--primary)]/20 rounded-full animate-ping flex items-center justify-center">
                    <div className="w-4 h-4 bg-[var(--primary)] rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoreRequestApprovalDetails
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        request={selectedRequest}
      />

      <BulkActionStore
        isOpen={isBulkActionOpen}
        onClose={() => setIsBulkActionOpen(false)}
        selectedRequests={requests.filter((r) => selectedRequestIds.includes(r.id))}
        onClearSelection={handleClearSelection}
        onApplyAction={handleApplyBulkAction}
      />
    </div>
  );
}
