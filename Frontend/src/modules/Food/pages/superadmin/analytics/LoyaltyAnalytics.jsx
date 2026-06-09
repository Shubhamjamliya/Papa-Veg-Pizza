import React, { useState } from 'react';
import { 
  Calendar, Filter, Sparkles, TrendingUp, Info, TrendingDown, 
  Verified, ArrowRight, MoreHorizontal 
} from 'lucide-react';

export default function LoyaltyAnalytics() {
  const [dateRange, setDateRange] = useState('30D');

  return (
    <div className="animate-fade-in space-y-8 mt-8">
      {/* Dashboard Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50">Loyalty Analytics</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Franchise-wide member engagement and reward performance.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl">
            {['30D', '90D', '1Y'].map(range => (
              <button 
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  dateRange === range 
                    ? 'bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <Calendar size={16} />
            Date Range
          </button>
          <button className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <Filter size={16} />
            Tier: All
          </button>
        </div>
      </div>

      {/* AI Insight Banner */}
      <div className="bg-zinc-950 dark:bg-black rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden shadow-lg border border-zinc-800">
        <div className="bg-[var(--primary)] p-2.5 flex items-center justify-center rounded-xl text-white shadow-md z-10">
          <Sparkles size={20} className="fill-current" />
        </div>
        <p className="text-zinc-200 font-medium z-10 text-sm md:text-base">
          <span className="font-bold text-[var(--primary)]">AI Insight:</span> Loyalty members spend <span className="text-emerald-400 font-bold">2.4x more</span> than non-members on average this month.
        </p>
        <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--primary)] blur-[80px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-[var(--primary)] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Total Loyalty Members</span>
            <span className="text-emerald-600 dark:text-emerald-500 font-bold text-xs flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
              <TrendingUp size={14} /> +12%
            </span>
          </div>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">185,420</div>
          <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full mt-5 overflow-hidden">
            <div className="h-full bg-[var(--primary)] rounded-full w-3/4"></div>
          </div>
        </div>
        
        {/* KPI 2 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-[var(--primary)] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Active Points Balance</span>
            <Info size={16} className="text-zinc-400" />
          </div>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">14.2M</div>
          <p className="text-xs font-semibold text-zinc-500 mt-3">Points liability across system</p>
        </div>

        {/* KPI 3 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-[var(--primary)] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Points Redeemed (MTD)</span>
            <span className="text-rose-600 dark:text-rose-500 font-bold text-xs flex items-center gap-1 bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-md">
              <TrendingDown size={14} /> -4%
            </span>
          </div>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">2.85M</div>
          <p className="text-xs font-semibold text-zinc-500 mt-3">Estimated ₹35L value</p>
        </div>

        {/* KPI 4 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-[var(--primary)] transition-colors">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Conversion Rate</span>
            <span className="text-emerald-600 dark:text-emerald-500 font-bold text-xs flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
              <Verified size={14} /> Target met
            </span>
          </div>
          <div className="text-3xl font-black text-zinc-900 dark:text-zinc-50">68.4%</div>
          <div className="flex gap-1 mt-5">
            <div className="h-1.5 rounded-full flex-1 bg-[var(--primary)]"></div>
            <div className="h-1.5 rounded-full flex-1 bg-[var(--primary)]"></div>
            <div className="h-1.5 rounded-full flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Points Trends (Line Chart) */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Points Earned vs Redeemed (Last 30 Days)</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[var(--primary)] rounded-full"></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Earned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-full"></span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Redeemed</span>
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2 relative">
            {/* Simple SVG Line Chart Simulation */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,150 Q100,140 200,80 T400,100 T600,60 T800,90" fill="transparent" stroke="var(--primary)" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
              <path d="M0,150 Q100,140 200,80 T400,100 T600,60 T800,90 V200 H0 Z" fill="url(#lineGrad)"></path>
              <path d="M0,180 Q100,170 200,150 T400,160 T600,140 T800,155" fill="transparent" stroke="currentColor" className="text-zinc-300 dark:text-zinc-700" strokeDasharray="5,5" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
            </svg>
            {/* X-Axis Labels */}
            <div className="absolute bottom-[-24px] w-full flex justify-between px-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              <span>MAY 01</span>
              <span>MAY 08</span>
              <span>MAY 15</span>
              <span>MAY 22</span>
              <span>MAY 30</span>
            </div>
          </div>
        </div>

        {/* Tier Distribution (Donut Chart) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-8">Loyalty Tier Distribution</h3>
          <div className="relative flex justify-center mb-8">
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="transparent" r="15.9" className="text-zinc-100 dark:text-zinc-800" stroke="currentColor" strokeWidth="3.5"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="var(--primary)" strokeDasharray="100" strokeDashoffset="85" strokeWidth="3.5" className="transition-all duration-1000 ease-out"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#fbbf24" strokeDasharray="100" strokeDashoffset="60" strokeWidth="3.5" className="transition-all duration-1000 ease-out"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#94a3b8" strokeDasharray="100" strokeDashoffset="30" strokeWidth="3.5" className="transition-all duration-1000 ease-out"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-zinc-900 dark:text-zinc-50">185k</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">Members</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]"></span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Platinum</span>
              </div>
              <span className="font-mono text-sm font-medium text-zinc-500">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Gold</span>
              </div>
              <span className="font-mono text-sm font-medium text-zinc-500">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Silver</span>
              </div>
              <span className="font-mono text-sm font-medium text-zinc-500">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700"></span>
                <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Bronze</span>
              </div>
              <span className="font-mono text-sm font-medium text-zinc-500">30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Loyalty Customers Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-950/50">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Top Loyalty Customers</h3>
          <button className="text-[var(--primary)] font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 hover:underline">
            View Full Leaderboard
            <ArrowRight size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Points Balance</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Tier</th>
                <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Last Activity</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
              {[
                { rank: '#01', init: 'MB', name: 'Marcus Bennett', points: '12,450', tier: 'Platinum', activity: '2 hours ago', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' },
                { rank: '#02', init: 'SH', name: 'Sarah Huang', points: '11,200', tier: 'Platinum', activity: 'Yesterday', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
                { rank: '#03', init: 'DW', name: 'David Wright', points: '9,840', tier: 'Gold', activity: '3 days ago', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
                { rank: '#04', init: 'EJ', name: 'Elena Jacobs', points: '8,150', tier: 'Gold', activity: 'May 24, 2024', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' },
              ].map((cust, i) => (
                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm font-bold text-[var(--primary)]">{cust.rank}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${cust.color}`}>
                        {cust.init}
                      </div>
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{cust.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm font-black text-zinc-900 dark:text-zinc-100">{cust.points}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                      cust.tier === 'Platinum' ? 'bg-[var(--primary)] text-white' : 'bg-amber-400 text-amber-950'
                    }`}>
                      {cust.tier}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">{cust.activity}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
