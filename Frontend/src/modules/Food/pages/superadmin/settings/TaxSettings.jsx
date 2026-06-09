import React from 'react';
import { 
  Calculator, History, Download, Plus, TrendingUp, Globe, Map, CheckCircle, AlertTriangle, 
  ChevronRight, RefreshCw, PlusCircle, XCircle 
} from 'lucide-react';
import RuleManagement from './RuleManagement';
import CreateTaxRule from './CreateTaxRule';
import TaxAuditHistory from './TaxAuditHistory';
import TaxCalculation from './TaxCalculation';

export default function TaxSettings() {
  const [isCreateRuleOpen, setIsCreateRuleOpen] = React.useState(false);
  const [isAuditHistoryOpen, setIsAuditHistoryOpen] = React.useState(false);
  const [isTaxCalculationOpen, setIsTaxCalculationOpen] = React.useState(false);

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4 md:p-6 lg:p-8 min-h-[calc(100vh-60px)] flex flex-col">
      <CreateTaxRule isOpen={isCreateRuleOpen} onClose={() => setIsCreateRuleOpen(false)} />
      <TaxCalculation isOpen={isTaxCalculationOpen} onClose={() => setIsTaxCalculationOpen(false)} />
      
      {isAuditHistoryOpen ? (
        <TaxAuditHistory isOpen={isAuditHistoryOpen} onClose={() => setIsAuditHistoryOpen(false)} />
      ) : (
        <div className="animate-in fade-in duration-300 flex-1 flex flex-col">
          {/* Top App Bar Header inside the layout */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Tax Settings</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage global and region-based tax rules and compliance.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2">
            <button 
              onClick={() => setIsTaxCalculationOpen(true)}
              className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded transition-colors flex items-center gap-2"
            >
              <Calculator size={18} />
              <span className="text-sm font-semibold">Calculator Preview</span>
            </button>
            <button 
              onClick={() => setIsAuditHistoryOpen(true)}
              className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded transition-colors flex items-center gap-2"
            >
              <History size={18} />
              <span className="text-sm font-semibold">Audit Logs</span>
            </button>
            <button className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded transition-colors flex items-center gap-2">
              <Download size={18} />
              <span className="text-sm font-semibold">Export</span>
            </button>
          </div>
          <button 
            onClick={() => setIsCreateRuleOpen(true)}
            className="px-4 py-2 bg-[var(--primary)] text-white hover:opacity-90 rounded-lg transition-all active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <Plus size={18} />
            <span className="text-sm font-semibold">Add Tax Rule</span>
          </button>
        </div>
      </header>

      {/* Section 1: KPI Overview */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Snapshot</h3>
          <select className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm rounded-lg px-3 py-1.5 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all">
            <option>Today</option>
            <option>Week</option>
            <option selected>Month</option>
            <option>Year</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-2">Total Tax Rules</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">125</span>
              <span className="text-xs text-emerald-600 font-semibold flex items-center">
                <TrendingUp size={14} className="mr-1" /> +3
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-2">Active Rules</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">110</span>
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">88%</span>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-2">Countries Covered</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">8</span>
              <Globe size={24} className="text-zinc-400" />
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-2">States Covered</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">125</span>
              <Map size={24} className="text-zinc-400" />
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm border-l-4 border-l-[var(--primary)] hover:-translate-y-0.5 hover:shadow-md transition-all">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-2">Tax Revenue</p>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[var(--primary)]">₹12,45,000</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Collected this month</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Rule Management Table Component */}
        <RuleManagement />

        {/* Tax Coverage & Engine Status */}
        <section className="space-y-6">
          {/* Engine Status Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 space-y-4">
            <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">System Health</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-600" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Tax Rule Engine</span>
                </div>
                <span className="text-xs text-emerald-600 font-bold uppercase">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-emerald-600" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Tax Calculator API</span>
                </div>
                <span className="text-xs text-emerald-600 font-bold uppercase">Operational</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={18} className="text-amber-500" />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Compliance Sync</span>
                </div>
                <span className="text-xs text-amber-500 font-bold uppercase">Sync Delay</span>
              </div>
            </div>
          </div>

          {/* Coverage Tree */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-4 overflow-hidden h-fit">
            <h3 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">Regional Coverage</h3>
            <div className="space-y-2 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 max-h-[400px] overflow-y-auto pr-1">
              {/* India Node */}
              <details className="group" open>
                <summary className="flex items-center gap-2 list-none cursor-pointer p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <ChevronRight size={18} className="text-zinc-400 transition-transform group-open:rotate-90" />
                  <span className="text-sm font-semibold flex-1 text-zinc-900 dark:text-zinc-100">India</span>
                  <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-1.5 rounded font-bold">42 Rules</span>
                </summary>
                <div className="ml-8 mt-1 space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1">
                  <div className="flex justify-between items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-[var(--primary)] cursor-pointer py-1">
                    <span>Madhya Pradesh</span>
                    <span className="text-[10px]">12 Rules</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-[var(--primary)] cursor-pointer py-1">
                    <span>Karnataka</span>
                    <span className="text-[10px]">8 Rules</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-[var(--primary)] cursor-pointer py-1">
                    <span>Maharashtra</span>
                    <span className="text-[10px]">15 Rules</span>
                  </div>
                </div>
              </details>
              
              {/* Gujarat Node */}
              <details className="group">
                <summary className="flex items-center gap-2 list-none cursor-pointer p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <ChevronRight size={18} className="text-zinc-400 transition-transform group-open:rotate-90" />
                  <span className="text-sm font-semibold flex-1 text-zinc-900 dark:text-zinc-100">Gujarat</span>
                  <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-1.5 rounded font-bold">5 Rules</span>
                </summary>
                <div className="ml-8 mt-1 space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 py-1">Ahmedabad</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 py-1">Surat</div>
                </div>
              </details>

              {/* Delhi Node */}
              <details className="group">
                <summary className="flex items-center gap-2 list-none cursor-pointer p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                  <ChevronRight size={18} className="text-zinc-400 transition-transform group-open:rotate-90" />
                  <span className="text-sm font-semibold flex-1 text-zinc-900 dark:text-zinc-100">Delhi</span>
                  <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-1.5 rounded font-bold">8 Rules</span>
                </summary>
                <div className="ml-8 mt-1 space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 py-1">
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 py-1">New Delhi</div>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>

      {/* Section 4: Configuration & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configuration */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Global Configuration</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Enable Global Tax</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Apply base tax rules across all franchises by default.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Region-Based Overrides</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Allow local franchise owners to submit tax override requests.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              </label>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Calculation Method</p>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center gap-2 p-3 border border-[var(--primary)] bg-[var(--primary)]/5 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="calc_method" defaultChecked className="text-[var(--primary)] focus:ring-[var(--primary)] h-4 w-4" />
                  <span className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">Inclusive</span>
                </label>
                <label className="flex items-center gap-2 p-3 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg cursor-pointer transition-colors">
                  <input type="radio" name="calc_method" className="text-[var(--primary)] focus:ring-[var(--primary)] h-4 w-4" />
                  <span className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">Exclusive</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Audit Trail</h3>
            <button className="text-[var(--primary)] text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="flex-1 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 overflow-y-auto max-h-[300px]">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                  <RefreshCw size={16} />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[2px] h-full bg-zinc-200 dark:bg-zinc-800/50"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm text-zinc-900 dark:text-zinc-100"><span className="font-bold">Rahul Sharma</span> updated rule <span className="font-bold">GST MP</span></p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Rate changed from 12% to 18%</p>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase mt-1 block">2 hours ago</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                  <PlusCircle size={16} />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[2px] h-full bg-zinc-200 dark:bg-zinc-800/50"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm text-zinc-900 dark:text-zinc-100"><span className="font-bold">System</span> created new region <span className="font-bold">Goa</span></p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Auto-sync with State Tax Directory completed.</p>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase mt-1 block">5 hours ago</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                  <XCircle size={16} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-900 dark:text-zinc-100"><span className="font-bold">Sarah Jones</span> deactivated <span className="font-bold">KA Retail Tax</span></p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Pending compliance review for Q3.</p>
                <span className="text-[10px] text-zinc-400 font-semibold uppercase mt-1 block">Yesterday</span>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
      )}
    </div>
  );
}
