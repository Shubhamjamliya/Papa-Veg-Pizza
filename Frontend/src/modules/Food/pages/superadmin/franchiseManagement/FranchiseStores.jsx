import React, { useState } from "react";
import { Download, ChevronDown, Plus, Store, CheckCircle, Clock, Ban, ChevronRight } from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import FranchiseStoresData from "./FranchiseStoresData";
import FranchiseStoresDetails from "./FranchiseStoresDetails";
import AddFranchiseStores from "./AddFranchiseStores";
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
    <div className="p-6 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Breadcrumbs & Title Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Franchise Stores</h2>
            <p className="text-zinc-500 mt-1">Manage all franchise locations, owners, operations and performance.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={handleExportPDF}
              className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm"
            >
              <Download size={16} />
              Export
            </button>
            <button 
              onClick={() => setIsBulkActionOpen(true)}
              className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 font-semibold rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm"
            >
              Bulk Actions
              <ChevronDown size={16} />
            </button>
            <button
              onClick={() => { setEditStoreData(null); setIsAddStoreOpen(true); }}
              className="px-5 py-2 bg-[var(--primary)] text-white font-semibold rounded-lg hover:brightness-110 shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center gap-2 text-sm"
            >
              <Plus size={18} />
              Add New Store
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Stores */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[var(--primary)]/10 rounded-lg text-[var(--primary)]">
              <Store size={20} />
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[var(--primary)]">+4.2%</span>
              <p className="text-[10px] text-zinc-500">vs last month</p>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Total Stores</h3>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">152</div>
          </div>
          <div className="mt-4 h-12 w-full flex items-end gap-1">
            <div className="flex-1 bg-[var(--primary)]/20 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all"></div>
            <div className="flex-1 bg-[var(--primary)]/20 h-[45%] rounded-t-sm group-hover:h-[55%] transition-all"></div>
            <div className="flex-1 bg-[var(--primary)]/20 h-[35%] rounded-t-sm group-hover:h-[45%] transition-all"></div>
            <div className="flex-1 bg-[var(--primary)] h-[60%] rounded-t-sm"></div>
            <div className="flex-1 bg-[var(--primary)]/20 h-[50%] rounded-t-sm group-hover:h-[60%] transition-all"></div>
            <div className="flex-1 bg-[var(--primary)] h-[80%] rounded-t-sm"></div>
          </div>
        </div>

        {/* Active Stores */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
              <CheckCircle size={20} />
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-emerald-600">+12</span>
              <p className="text-[10px] text-zinc-500">new this week</p>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Active Stores</h3>
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">135</div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[88%]"></div>
            </div>
            <span className="text-[10px] font-bold text-zinc-500">88%</span>
          </div>
        </div>

        {/* Pending Setup */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
              <Clock size={20} />
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-amber-600">Avg 14d</span>
              <p className="text-[10px] text-zinc-500">onboarding time</p>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Pending Setup</h3>
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">10</div>
          </div>
          <div className="mt-4 flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-700 dark:text-zinc-300">JD</div>
            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center text-[10px] font-bold text-zinc-700 dark:text-zinc-300">AK</div>
            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-400 dark:bg-zinc-500 flex items-center justify-center text-[10px] font-bold text-white">+8</div>
          </div>
        </div>

        {/* Suspended/Closed */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
              <Ban size={20} />
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-red-600">-2%</span>
              <p className="text-[10px] text-zinc-500">improvement</p>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Suspended/Closed</h3>
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">7</div>
          </div>
          <div className="mt-4 flex gap-1 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs text-zinc-500 italic">Needs urgent review</span>
          </div>
        </div>
      </div>

      {/* Enterprise Data Table with Filters component */}
      <FranchiseStoresData onRowClick={handleRowClick} />

      {/* Dashboard Footnote / Decorative Element */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900 dark:bg-zinc-950 text-white p-8 rounded-2xl overflow-hidden relative mt-8">
        <div className="space-y-4 z-10">
          <h3 className="text-xl font-bold">Operational Insights</h3>
          <p className="text-zinc-300 opacity-90 text-sm">
            92% of franchise stores have successfully integrated the new Papa Veg 'Green-Chain' inventory management system. Compliance reviews for the remaining 12 units are scheduled for next quarter.
          </p>
          <button 
            onClick={() => setIsComplianceReportOpen(true)}
            className="px-6 py-2 bg-white text-zinc-900 font-bold rounded-lg hover:bg-zinc-100 transition-all text-sm mt-2"
          >
            View Compliance Report
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none z-0">
          <div className="grid grid-cols-4 gap-2 rotate-12 translate-x-12 translate-y-8">
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
            <div className="h-24 w-24 bg-white rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Mobile FAB */}
      <button
        onClick={() => { setEditStoreData(null); setIsAddStoreOpen(true); }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-2xl flex items-center justify-center md:hidden z-50 active:scale-95 transition-transform"
      >
        <Plus size={24} />
      </button>

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
      <AddFranchiseStores
        isOpen={isAddStoreOpen}
        onClose={() => setIsAddStoreOpen(false)}
        store={editStoreData}
      />

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
