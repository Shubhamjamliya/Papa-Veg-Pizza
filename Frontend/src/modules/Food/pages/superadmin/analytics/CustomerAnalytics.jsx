import React, { useState } from 'react';
import { 
  Clock, RefreshCw, Filter, ChevronDown, Users, UserPlus, 
  IndianRupee, Heart, Sparkles, Activity, AlertTriangle, MonitorPlay
} from 'lucide-react';
import CustomerAnalyticsData from './CustomerAnalyticsData';
import CustomerAnalyticsDetails from './CustomerAnalyticsDetails';
import LoyaltyAnalytics from './LoyaltyAnalytics';
import ExportReport from './ExportReport';

export default function CustomerAnalytics() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [activeView, setActiveView] = useState('customer');
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-955 min-h-screen w-full space-y-4 animate-fade-down">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-lg font-bold text-black dark:text-white">Customer Analytics</h2>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 flex items-center gap-1 mt-0.5">
            <Clock size={11} />
            Updated 2m ago
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-black/70 dark:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <RefreshCw size={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-black/70 dark:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <Filter size={14} />
          </button>
          <button 
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-1.5 bg-[var(--primary)] text-white px-4 h-8 rounded-lg font-bold transition-opacity hover:opacity-90 active:scale-95 shadow-md text-xs"
          >
            Export
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-2">
        <button 
          onClick={() => setActiveView('customer')}
          className={`py-1.5 px-3 font-bold text-xs uppercase tracking-wider transition-all border-b-2 ${
            activeView === 'customer' 
              ? 'border-[var(--primary)] text-[var(--primary)]' 
              : 'border-transparent text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
          }`}
        >
          Customer Overview
        </button>
        <button 
          onClick={() => setActiveView('loyalty')}
          className={`py-1.5 px-3 font-bold text-xs uppercase tracking-wider transition-all border-b-2 ${
            activeView === 'loyalty' 
              ? 'border-[var(--primary)] text-[var(--primary)]' 
              : 'border-transparent text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
          }`}
        >
          Loyalty Program
        </button>
      </div>

      {activeView === 'customer' ? (
        <>
          {/* Sticky Filters */}
          <div className="sticky top-[48px] z-30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl p-2 shadow-sm flex gap-2 overflow-x-auto scrollbar-none">
            {['Last 30 Days', 'All Regions', 'Segment', 'Loyalty'].map((filter, i) => (
              <button key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-955 whitespace-nowrap text-[10px] font-bold text-black/70 dark:text-white/70 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <span>{filter}</span>
                <ChevronDown size={11} />
              </button>
            ))}
          </div>

          {/* KPI Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {[
              { label: 'Total Customers', val: '245k', trend: '+5.2%', icon: Users },
              { label: 'New This Month', val: '12.4k', trend: '+8%', icon: UserPlus },
              { label: 'Avg. CLV', val: '₹1,250', trend: '+12%', icon: IndianRupee },
              { label: 'Retention', val: '72%', trend: 'Steady', icon: Heart, steady: true }
            ].map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)] transition-colors group cursor-default">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">{kpi.label}</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-black dark:text-white">{kpi.val}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${kpi.steady ? 'text-black/50 dark:text-white/50 bg-zinc-100 dark:bg-zinc-800' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'}`}>{kpi.trend}</span>
                    </div>
                  </div>
                  <div className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-[var(--primary)]">
                    <Icon size={16} />
                  </div>
                </div>
              )
            })}
          </section>
      {/* AI Insight Card & Composition */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Insight */}
        <div className="xl:col-span-2 p-3.5 bg-zinc-955 dark:bg-black text-white rounded-xl border border-zinc-800 overflow-hidden relative shadow-md">
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 mb-2.5 text-[var(--primary)]">
              <Sparkles size={16} className="fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Executive Insight</span>
            </div>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-zinc-200">
              VIP customers represent <span className="font-black text-emerald-400">4.2%</span> of your base but contribute <span className="font-black text-emerald-400">42%</span> of total revenue this quarter.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-36 h-36 opacity-[0.03] translate-x-1/4 -translate-y-1/4">
            <Activity size={120} />
          </div>
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[var(--primary)] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        </div>

        {/* Composition */}
        <div className="p-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider mb-4 w-full text-left">Composition</h3>
          <div className="relative w-24 h-24 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
              <circle cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800" strokeWidth="16"></circle>
              <circle cx="64" cy="64" fill="transparent" r="50" stroke="var(--primary)" strokeDasharray="314" strokeDashoffset="125" strokeWidth="16" className="drop-shadow-sm"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-lg font-black text-black dark:text-white">60%</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] shadow-sm"></div> 
                Returning
              </div>
              <span className="font-black text-black dark:text-white">60%</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 shadow-sm"></div> 
                New
              </div>
              <span className="font-black text-black dark:text-white">40%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Acquisition Growth Trend */}
        <div className="xl:col-span-2 p-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider mb-4">Acquisition Growth</h3>
          <div className="h-32 w-full flex items-end justify-between gap-1.5">
            {[40, 55, 45, 70, 85, 65, 95].map((h, i) => (
              <div key={i} className={`w-full rounded-t transition-all duration-500 hover:opacity-100 cursor-pointer ${i === 6 ? 'bg-[var(--primary)] shadow-sm' : 'bg-[var(--primary)] opacity-30 hover:bg-[var(--primary)] hover:opacity-80'}`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2.5 text-[9px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Churn Card */}
        <div className="p-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col justify-center">
          <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider mb-3">Churn Risk</h3>
          <div className="flex flex-col items-center justify-center py-4 border border-rose-100 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-950/10 rounded-lg">
            <div className="text-rose-600 dark:text-rose-500 font-black text-3xl mb-1.5">12%</div>
            <div className="px-2 py-1 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400 rounded-full text-[9px] font-bold flex items-center gap-1 shadow-sm border border-rose-200 dark:border-rose-800">
              <AlertTriangle size={12} />
              NEEDS ATTENTION
            </div>
          </div>
          <p className="text-xs font-semibold text-black/70 dark:text-white/70 mt-4 text-center leading-relaxed">
            <span className="font-bold text-rose-600 dark:text-rose-500">1.2k VIPs</span> at risk of churn this month.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Segmentation Horizontal Scroll */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-3.5 overflow-hidden">
          <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider mb-4">Customer Segments</h3>
          <div className="flex gap-3 overflow-x-auto scrollbar-none pb-1.5">
            <div className="flex-shrink-0 w-36 p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-sm border-l-4 border-l-amber-500">
              <span className="font-bold block text-xs text-black dark:text-white">VIP</span>
              <span className="text-[9px] font-medium text-black/50 dark:text-white/50 mt-0.5 block">Spent &gt; ₹10k</span>
              <div className="mt-4 text-xl font-black text-black dark:text-white">8.4k</div>
            </div>
            <div className="flex-shrink-0 w-36 p-3 bg-zinc-50 dark:bg-zinc-955 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-sm border-l-4 border-l-[var(--primary)]">
              <span className="font-bold block text-xs text-black dark:text-white">Frequent</span>
              <span className="text-[9px] font-medium text-black/50 dark:text-white/50 mt-0.5 block"> &gt; 3 orders/mo</span>
              <div className="mt-4 text-xl font-black text-black dark:text-white">42.1k</div>
            </div>
            <div className="flex-shrink-0 w-36 p-3 bg-zinc-50 dark:bg-zinc-955 border border-zinc-100 dark:border-zinc-800 rounded-lg shadow-sm border-l-4 border-l-rose-500">
              <span className="font-bold block text-xs text-black dark:text-white">At Risk</span>
              <span className="text-[9px] font-medium text-black/50 dark:text-white/50 mt-0.5 block">Inactive &gt; 30d</span>
              <div className="mt-4 text-xl font-black text-black dark:text-white">15.2k</div>
            </div>
          </div>
        </section>

        {/* Retention Matrix Placeholder */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-3.5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider">Cohort Retention</h3>
            <span className="text-[9px] font-bold text-[var(--primary)] hover:underline cursor-pointer">VIEW FULL MATRIX</span>
          </div>
          <div className="grid grid-cols-5 gap-1 mb-1.5">
            {[100, 90, 80, 70, 60, 100, 85, 75, 65, 50].map((op, i) => (
              <div key={i} className="h-6 bg-[var(--primary)] rounded transition-opacity hover:opacity-100 cursor-pointer" style={{ opacity: op / 100 }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2.5 text-[9px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
            <span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
          </div>
        </section>
      </div>

      <CustomerAnalyticsData onCustomerClick={setSelectedCustomer} />
      </>
      ) : (
        <LoyaltyAnalytics />
      )}

      <CustomerAnalyticsDetails 
        isOpen={!!selectedCustomer} 
        onClose={() => setSelectedCustomer(null)} 
        customer={selectedCustomer} 
      />

      <ExportReport 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
      />
    </div>
  );
}
