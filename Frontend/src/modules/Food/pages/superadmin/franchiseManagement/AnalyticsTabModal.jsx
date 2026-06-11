import React from "react";
import { LineChart, TrendingUp, Download } from "lucide-react";

export default function AnalyticsTabModal() {
  return (
    <div className="space-y-6">
      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--primary)]/5 p-6 rounded-xl border border-[var(--primary)]/20 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shrink-0 shadow-sm">
            <LineChart size={20} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Key Growth Insight</h3>
            <p className="text-base text-zinc-900 dark:text-zinc-100 mt-1">Highest performing zone: <span className="font-bold">Zone A (Hinjewadi)</span></p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Zone A contributed to 42% of total region revenue this month.</p>
          </div>
        </div>
        <div className="bg-emerald-500/5 p-6 rounded-xl border border-emerald-500/20 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm">
            <TrendingUp size={20} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">Performance Metric</h3>
            <p className="text-base text-zinc-900 dark:text-zinc-100 mt-1">Growth: <span className="font-bold text-emerald-600 dark:text-emerald-500">+12.5% vs last month</span></p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Average daily orders increased by 115 across all active stores.</p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Growth Line Chart (Mock) */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Revenue Growth</h3>
            <select className="bg-transparent border-none text-sm font-bold text-zinc-500 dark:text-zinc-400 focus:ring-0 cursor-pointer outline-none">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="h-64 relative flex items-end justify-between gap-2 border-b border-l border-zinc-200 dark:border-zinc-800 px-2 pb-1">
            {/* Mock Chart Bars */}
            {[
              { height: '40%', label: '₹8.2M', active: false },
              { height: '55%', label: '₹9.1M', active: false },
              { height: '48%', label: '₹8.7M', active: false },
              { height: '65%', label: '₹10.4M', active: false },
              { height: '78%', label: '₹11.8M', active: false },
              { height: '92%', label: '₹12.4M', active: true }
            ].map((bar, i) => (
              <div key={i} className="flex-1 bg-[var(--primary)]/10 rounded-t group relative" style={{ height: bar.height }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap shadow-lg">
                  {bar.label}
                </div>
                <div className={`w-full h-full bg-gradient-to-t from-[var(--primary)]/20 to-[var(--primary)]/40 rounded-t ${bar.active ? 'border-t-4 border-[var(--primary)]' : ''}`}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold text-zinc-500 uppercase px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Store Performance Bar Chart */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6">Top 5 Stores (Order Volume)</h3>
          <div className="space-y-4">
            {[
              { name: 'Hinjewadi', orders: '5,420', percent: '95%' },
              { name: 'Baner', orders: '4,890', percent: '85%' },
              { name: 'Kharadi', orders: '3,200', percent: '60%' },
              { name: 'Kothrud', orders: '2,850', percent: '50%' },
              { name: 'Viman Nagar', orders: '2,100', percent: '35%' }
            ].map((store, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold uppercase text-zinc-500">
                  <span>{store.name}</span>
                  <span className="text-zinc-900 dark:text-zinc-100">{store.orders} orders</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--primary)] rounded-full" style={{ width: store.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Async Actionable Area */}
      <div className="bg-zinc-900 dark:bg-zinc-800 text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 shadow-md">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold">Operational Efficiency Report</h4>
          <p className="text-sm text-zinc-400 mt-1">The June report for Pune Region is now available for deep-dive analysis.</p>
        </div>
        <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg text-sm font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap active:scale-95">
          <Download size={18} /> Export Region Data
        </button>
      </div>
    </div>
  );
}
