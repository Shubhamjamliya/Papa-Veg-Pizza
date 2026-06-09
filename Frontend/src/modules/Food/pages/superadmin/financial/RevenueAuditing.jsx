import React, { useState } from 'react';
import { 
  Search, Filter, Download, FileText, ChevronLeft, ChevronRight, 
  ChevronDown, TrendingUp, TrendingDown, DollarSign, RotateCcw, 
  ShoppingCart, X 
} from 'lucide-react';

export default function RevenueAuditing() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      
      {/* Page Header with Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Revenue Auditing</h2>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">Analyze cross-store liquidity and payment settlements</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-sm font-medium text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 transition-all" 
              placeholder="Search order numbers, regions..." 
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm font-bold text-zinc-700 dark:text-zinc-300">
            <Filter size={18} />
            Filter
          </button>
          <div className="hidden sm:block h-6 w-px bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm font-bold text-zinc-700 dark:text-zinc-300">
            <Download size={18} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg shadow-md hover:brightness-110 active:scale-95 transition-all text-sm font-bold shadow-[var(--primary)]/20">
            <FileText size={18} />
            Export PDF
          </button>
        </div>
      </div>

      {/* Table Controls & Grouping */}
      <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Group By:</span>
          <div className="flex bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-lg">
            <button className="px-4 py-1.5 bg-white dark:bg-zinc-900 text-[var(--primary)] font-bold text-sm rounded-md shadow-sm">Franchise Owner</button>
            <button className="px-4 py-1.5 text-zinc-500 dark:text-zinc-400 font-bold text-sm hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors rounded-md">Region</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hidden sm:block">Showing: 1 - 25 of 1,248</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"><ChevronLeft size={18} /></button>
            <button className="w-8 h-8 flex items-center justify-center border border-[var(--primary)] rounded bg-[var(--primary)] text-white font-bold text-sm shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-sm transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1200px]">
            <thead className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider sticky left-0 bg-zinc-50 dark:bg-zinc-950 z-20 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a]">Owner / Entity</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Orders</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Gross Revenue</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Taxes</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Refunds</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Net Revenue</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-center">Growth %</th>
                <th className="px-4 py-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50 text-sm">
              
              {/* Row Group: Global Enterprises */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="px-6 py-3 font-bold text-[var(--primary)] italic" colSpan="9">
                  <div className="flex items-center gap-2">
                    <ChevronDown size={16} />
                    Global Enterprises Inc. (Western Region)
                  </div>
                </td>
              </tr>
              
              {/* Data Rows */}
              <tr className="hover:bg-[var(--primary)]/5 transition-colors group">
                <td className="px-6 py-4 sticky left-0 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 z-10 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a] font-medium text-zinc-900 dark:text-zinc-100">Store #1042 - Seattle</td>
                <td className="px-4 py-4 text-zinc-500 dark:text-zinc-400 font-medium">Oct 24, 2023</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-700 dark:text-zinc-300">1,248</td>
                <td className="px-4 py-4 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">$54,290.00</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-500 dark:text-zinc-400">$4,343.20</td>
                <td className="px-4 py-4 text-right font-mono text-rose-600 dark:text-rose-400 font-medium">-$1,120.50</td>
                <td className="px-4 py-4 text-right font-mono font-black text-[var(--primary)]">$48,826.30</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-800/30">
                    <TrendingUp size={12} /> +12.4%
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={toggleDrawer} className="text-[var(--primary)] hover:underline font-bold text-sm">Drill-down</button>
                </td>
              </tr>
              
              <tr className="hover:bg-[var(--primary)]/5 transition-colors group">
                <td className="px-6 py-4 sticky left-0 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 z-10 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a] font-medium text-zinc-900 dark:text-zinc-100">Store #1085 - Portland</td>
                <td className="px-4 py-4 text-zinc-500 dark:text-zinc-400 font-medium">Oct 24, 2023</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-700 dark:text-zinc-300">892</td>
                <td className="px-4 py-4 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">$38,120.00</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-500 dark:text-zinc-400">$3,049.60</td>
                <td className="px-4 py-4 text-right font-mono text-rose-600 dark:text-rose-400 font-medium">-$450.00</td>
                <td className="px-4 py-4 text-right font-mono font-black text-[var(--primary)]">$34,620.40</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-800/30">
                    <TrendingUp size={12} /> +4.1%
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={toggleDrawer} className="text-[var(--primary)] hover:underline font-bold text-sm">Drill-down</button>
                </td>
              </tr>

              <tr className="hover:bg-[var(--primary)]/5 transition-colors group">
                <td className="px-6 py-4 sticky left-0 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 z-10 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a] font-medium text-zinc-900 dark:text-zinc-100">Store #1201 - San Francisco</td>
                <td className="px-4 py-4 text-zinc-500 dark:text-zinc-400 font-medium">Oct 23, 2023</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-700 dark:text-zinc-300">2,105</td>
                <td className="px-4 py-4 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">$89,450.00</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-500 dark:text-zinc-400">$7,603.25</td>
                <td className="px-4 py-4 text-right font-mono text-rose-600 dark:text-rose-400 font-medium">-$2,840.10</td>
                <td className="px-4 py-4 text-right font-mono font-black text-[var(--primary)]">$79,006.65</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 rounded-full text-xs font-bold border border-rose-200 dark:border-rose-800/30">
                    <TrendingDown size={12} /> -2.8%
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={toggleDrawer} className="text-[var(--primary)] hover:underline font-bold text-sm">Drill-down</button>
                </td>
              </tr>

              <tr className="hover:bg-[var(--primary)]/5 transition-colors group">
                <td className="px-6 py-4 sticky left-0 bg-white dark:bg-zinc-900 group-hover:bg-zinc-50 dark:group-hover:bg-zinc-800/50 z-10 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a] font-medium text-zinc-900 dark:text-zinc-100">Store #1402 - Denver</td>
                <td className="px-4 py-4 text-zinc-500 dark:text-zinc-400 font-medium">Oct 23, 2023</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-700 dark:text-zinc-300">542</td>
                <td className="px-4 py-4 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">$22,180.00</td>
                <td className="px-4 py-4 text-right font-mono text-zinc-500 dark:text-zinc-400">$1,774.40</td>
                <td className="px-4 py-4 text-right font-mono text-rose-600 dark:text-rose-400 font-medium">-$120.00</td>
                <td className="px-4 py-4 text-right font-mono font-black text-[var(--primary)]">$20,285.60</td>
                <td className="px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-200 dark:border-emerald-800/30">
                    <TrendingUp size={12} /> +18.7%
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button onClick={toggleDrawer} className="text-[var(--primary)] hover:underline font-bold text-sm">Drill-down</button>
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-zinc-50 dark:bg-zinc-950/50 border-t-2 border-zinc-200 dark:border-zinc-800">
              <tr>
                <td className="px-6 py-5 sticky left-0 bg-zinc-50 dark:bg-zinc-950 z-10 font-black text-zinc-900 dark:text-zinc-100 shadow-[1px_0_0_0_#e4e4e7] dark:shadow-[1px_0_0_0_#27272a]">TOTAL (Selected Filter)</td>
                <td className="px-4 py-5"></td>
                <td className="px-4 py-5 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">4,787</td>
                <td className="px-4 py-5 text-right font-mono font-black text-zinc-900 dark:text-zinc-100">$204,040.00</td>
                <td className="px-4 py-5 text-right font-mono font-bold text-zinc-900 dark:text-zinc-100">$16,770.45</td>
                <td className="px-4 py-5 text-right font-mono font-bold text-rose-600 dark:text-rose-400">-$4,530.60</td>
                <td className="px-4 py-5 text-right font-mono font-black text-[var(--primary)]">$182,738.95</td>
                <td className="px-4 py-5 text-center">
                  <span className="text-emerald-700 dark:text-emerald-400 font-black">+6.5% AVG</span>
                </td>
                <td className="px-4 py-5"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Quick Insights (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <DollarSign size={24} />
            </div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">+5.2% vs LW</span>
          </div>
          <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Net Settlement</h4>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mt-1">$182,738.95</div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-lg">
              <RotateCcw size={24} />
            </div>
            <span className="text-rose-600 dark:text-rose-400 font-bold text-xs">+1.8% vs LW</span>
          </div>
          <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Refund Rate</h4>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mt-1">2.22%</div>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
          <div className="z-10 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 text-[var(--primary)] rounded-lg">
                <ShoppingCart size={24} />
              </div>
            </div>
            <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Average Order Value</h4>
            <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mt-1">$42.62</div>
          </div>
          {/* Abstract pattern for high-end feel */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Right Side Detail Drawer (Hidden by default) */}
      <div 
        className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 z-[100] ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 md:p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Order Details</h3>
            <button 
              onClick={toggleDrawer}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <div className="flex flex-col gap-6">
              
              <div className="p-5 bg-zinc-50 dark:bg-zinc-900/80 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Transaction ID</div>
                <div className="text-xl font-black text-[var(--primary)] font-mono">#TXN-882910-AQ</div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Status</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Settled</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Timestamp</span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Oct 24, 2023 14:32:01</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Payment Method</span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Visa •••• 4242</span>
                </div>
                <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Customer</span>
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Alex Thompson</span>
                </div>
              </div>
              
              <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 shadow-sm mt-2">
                <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-4 uppercase tracking-wider">Itemized Summary</div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <span>Premium Subscription (Annual)</span>
                    <span className="font-mono">$149.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <span>Priority Support Add-on</span>
                    <span className="font-mono">$25.00</span>
                  </div>
                  <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2"></div>
                  <div className="flex justify-between font-black text-base text-zinc-900 dark:text-zinc-100">
                    <span>Total Paid</span>
                    <span className="font-mono">$174.00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="w-full py-3.5 bg-white dark:bg-zinc-900 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-xl hover:bg-[var(--primary)]/5 active:scale-[0.98] transition-all shadow-sm">
                  Initiate Partial Refund
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity"
          onClick={toggleDrawer}
        ></div>
      )}

    </div>
  );
}
