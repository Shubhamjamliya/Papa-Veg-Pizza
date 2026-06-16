import React, { useState } from "react";
import { Download, ChevronDown, Plus, Store, CheckCircle, Clock, Ban, ChevronRight } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import FranchiseStoresData from "./FranchiseStoresData";
import FranchiseStoresDetails from "./FranchiseStoresDetails";
// import AddFranchiseStores from "./AddFranchiseStores";
import BulkAction from "./BulkAction";
import ComplianceReport from "./ComplianceReport";

export default function FranchiseStores() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [isAddStoreOpen, setIsAddStoreOpen] = useState(false);
  const [isBulkActionOpen, setIsBulkActionOpen] = useState(false);
  const [isComplianceReportOpen, setIsComplianceReportOpen] = useState(false);
  const [editStoreData, setEditStoreData] = useState(null);

  const handleRowClick = (store) => {
    setSelectedStore(store);
    setIsDrawerOpen(true);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Franchise Stores Report", 14, 15);
    // Use autotable to extract data directly from the HTML table rendered by FranchiseStoresData
    autoTable(doc, {
      html: 'table',
      startY: 20,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185] } // Default blue color
    });
    doc.save("franchise-stores-report.pdf");
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Breadcrumbs & Title Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
        <div className="space-y-0.5">
          <h1 className="text-lg font-bold text-black dark:text-white leading-tight">
            Franchise Stores
          </h1>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">
            Manage all franchise locations, owners, operations and performance
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleExportPDF}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.01] transition-all cursor-pointer font-bold text-[11px]"
          >
            <Download size={14} />
            <span>EXPORT</span>
          </button>
          {/* <button 
            onClick={() => setIsBulkActionOpen(true)}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-white px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.01] transition-all cursor-pointer font-bold text-[11px]"
          >
            <span>BULK ACTIONS</span>
            <ChevronDown size={14} />
          </button> */}
          {/* <button
            onClick={() => { setEditStoreData(null); setIsAddStoreOpen(true); }}
            className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-3.5 py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold text-[11px]"
          >
            <Plus size={14} className="stroke-[3]" />
            <span>ADD NEW STORE</span>
          </button> */}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 select-none">
        {/* Total Stores */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Stores</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">152</h3>
              <span className="text-emerald-500 font-bold text-[8px]">+4.2% vs last month</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
            <Store size={14} />
          </div>
        </div>

        {/* Active Stores */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Active Stores</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-emerald-600 dark:text-emerald-400 mt-0.5">135</h3>
              <span className="text-emerald-500 font-bold text-[8px]">+12 new this week</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-emerald-550/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/30">
            <CheckCircle size={14} />
          </div>
        </div>

        {/* Pending Setup */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Pending Setup</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">10</h3>
              <span className="text-amber-500 font-bold text-[8px]">Avg 14d onboarding</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-amber-550/10 text-amber-650 dark:text-amber-400 shrink-0 border border-amber-100 dark:border-amber-900/30">
            <Clock size={14} />
          </div>
        </div>

        {/* Suspended/Closed */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Suspended / Closed</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-rose-600 dark:text-rose-400 mt-0.5">7</h3>
              <span className="text-rose-500 font-bold text-[8px]">Needs urgent review</span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-rose-550/10 text-rose-650 dark:text-rose-400 shrink-0 border border-rose-100 dark:border-rose-900/30">
            <Ban size={14} />
          </div>
        </div>
      </div>

      {/* Enterprise Data Table with Filters component */}
      <FranchiseStoresData onRowClick={handleRowClick} />

      {/* Dashboard Footnote / Decorative Element */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-zinc-900 dark:bg-zinc-950 text-white p-4 rounded-xl overflow-hidden relative mt-4">
        <div className="space-y-2 z-10">
          <h3 className="text-sm font-bold">Operational Insights</h3>
          <p className="text-zinc-300 opacity-90 text-[11px] leading-relaxed">
            92% of franchise stores have successfully integrated the new Papa Veg 'Green-Chain' inventory management system. Compliance reviews for the remaining 12 units are scheduled for next quarter.
          </p>
          <button
            onClick={() => setIsComplianceReportOpen(true)}
            className="px-4 py-1.5 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-100 transition-all text-[11px] mt-1"
          >
            View Compliance Report
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-5 pointer-events-none z-0">
          <div className="grid grid-cols-4 gap-2 rotate-12 translate-x-12 translate-y-8">
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Store Details Drawer */}
      <FranchiseStoresDetails
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        store={selectedStore}
        onEdit={(store) => {
          setEditStoreData(store);
          setIsAddStoreOpen(true);
        }}
      />

      {/* Add New Store Wizard */}
      {/* <AddFranchiseStores
        isOpen={isAddStoreOpen}
        onClose={() => setIsAddStoreOpen(false)}
        store={editStoreData}
      /> */}

      {/* Bulk Action Modal */}
      <BulkAction
        isOpen={isBulkActionOpen}
        onClose={() => setIsBulkActionOpen(false)}
      />

      {/* Compliance Report Modal */}
      <ComplianceReport
        isOpen={isComplianceReportOpen}
        onClose={() => setIsComplianceReportOpen(false)}
      />
    </div>
  );
}
