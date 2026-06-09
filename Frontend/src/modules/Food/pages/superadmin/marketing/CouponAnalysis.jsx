import React, { useState } from 'react';
import { 
  Calendar, ChevronDown, Download, Zap, Ticket, TrendingUp, 
  Banknote, Gift, TrendingDown, ShoppingBasket, MoreVertical, User
} from 'lucide-react';

export default function CouponAnalysis() {
  const [hoveredBar, setHoveredBar] = useState(null);

  // Mock data for chart
  const bars = [40, 60, 45, 75, 95, 55, 85, 35, 50, 65];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Quick Filters & Bulk Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 p-2 rounded-lg transition-colors">
          <Calendar size={18} className="text-zinc-500 dark:text-zinc-400" />
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Last 30 Days</span>
          <ChevronDown size={16} className="text-zinc-500 dark:text-zinc-400" />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
            <Download size={16} /> Export
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md">
            <Zap size={16} /> Bulk Activate
          </button>
        </div>
      </div>

      {/* KPI Cards Grid (Bento Style) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between h-32 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">Total Uses</p>
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <Ticket size={18} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">12,842</h3>
            <p className="text-xs font-medium flex items-center gap-1 text-emerald-600 dark:text-emerald-400 mt-1">
              <TrendingUp size={14} /> +14.2%
            </p>
          </div>
        </div>

        <div className="col-span-1 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between h-32 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">Revenue</p>
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <Banknote size={18} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">$84.2k</h3>
            <p className="text-xs font-medium flex items-center gap-1 text-emerald-600 dark:text-emerald-400 mt-1">
              <TrendingUp size={14} /> +8.5%
            </p>
          </div>
        </div>

        <div className="col-span-1 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between h-32 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">Discount Given</p>
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <Gift size={18} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">$12.4k</h3>
            <p className="text-xs font-medium flex items-center gap-1 text-red-600 dark:text-red-400 mt-1">
              <TrendingDown size={14} /> -2.1%
            </p>
          </div>
        </div>

        <div className="col-span-1 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between h-32 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">AOV</p>
            <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <ShoppingBasket size={18} />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">$28.40</h3>
            <p className="text-xs font-medium flex items-center gap-1 text-emerald-600 dark:text-emerald-400 mt-1">
              <TrendingUp size={14} /> +5.4%
            </p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Usage Chart */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Daily Coupon Usage</h4>
            <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              <MoreVertical size={18} className="text-zinc-500" />
            </button>
          </div>
          <div className="h-48 relative flex items-end gap-1.5 px-2">
            {bars.map((height, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
                className={`flex-1 rounded-t transition-colors cursor-pointer ${
                  hoveredBar === i ? 'bg-[var(--primary)]' : 
                  height > 80 ? 'bg-[var(--primary)]' : 
                  'bg-[var(--primary)]/20 dark:bg-[var(--primary)]/40'
                }`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
            
            {/* Chart Tooltip Simulation */}
            <div className={`absolute top-4 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded-md transition-opacity pointer-events-none shadow-lg ${hoveredBar !== null ? 'opacity-100' : 'opacity-0'}`}>
              Peak: 842 uses
            </div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest px-2">
            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
          </div>
        </div>

        {/* Revenue vs Customer Acquisition */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">New Customers Acquired</h4>
            <div className="flex gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">REVENUE</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">CUSTOMERS</span>
              </div>
            </div>
          </div>
          <div className="h-48 flex items-center justify-center relative">
            <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
              <path d="M0 120 Q 50 100, 100 110 T 200 60 T 300 80 T 400 40" fill="none" stroke="var(--primary, #b41e15)" strokeWidth="3"></path>
              <path d="M0 140 Q 50 130, 100 135 T 200 110 T 300 120 T 400 90" fill="none" stroke="#71717a" strokeDasharray="4" strokeWidth="2"></path>
              <path d="M0 120 Q 50 100, 100 110 T 200 60 T 300 80 T 400 40 V 150 H 0 Z" fill="rgba(180, 30, 21, 0.05)"></path>
            </svg>
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest px-2">
            <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
          </div>
        </div>
      </div>

      {/* Usage History (Dense Mobile List) */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Recent Usage History</h4>
          <button className="text-[var(--primary)] font-bold text-xs uppercase hover:underline">View All</button>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          
          {[
            { name: "Marcus Holloway", order: "#PZ-2938", store: "Brooklyn", code: "PIZZA50", discount: "-$14.50" },
            { name: "Sarah Connor", order: "#PZ-2940", store: "Manhattan", code: "FIRST10", discount: "-$8.20" },
            { name: "James Wilson", order: "#PZ-2945", store: "Queens", code: "BOGO_MON", discount: "-$22.00" },
            { name: "Elena Rodriguez", order: "#PZ-2948", store: "Bronx", code: "WEEKEND20", discount: "-$12.00" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 flex justify-between items-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                  <User size={20} className="text-zinc-500 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Order <span className="font-mono">{item.order}</span> • Store: {item.store}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block px-2 py-0.5 rounded bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold mb-1">
                  {item.code}
                </div>
                <p className="text-sm font-bold text-red-600 dark:text-red-400">{item.discount}</p>
              </div>
            </div>
          ))}

        </div>
        <div className="p-4 text-center">
          <button className="text-zinc-500 dark:text-zinc-400 text-xs font-bold opacity-60 hover:opacity-100 flex items-center justify-center w-full gap-2 transition-opacity">
            Load More <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
