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
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto animate-fade-down pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">Customer Analytics</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mt-1 font-medium">
            <Clock size={14} />
            Updated 2m ago
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <RefreshCw size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm">
            <Filter size={18} />
          </button>
          <button 
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-2.5 rounded-xl font-bold transition-opacity hover:opacity-90 active:scale-95 shadow-md text-sm"
          >
            Export
          </button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800 mb-8">
        <button 
          onClick={() => setActiveView('customer')}
          className={`py-3 px-6 font-bold text-sm uppercase tracking-wider transition-all border-b-2 ${
            activeView === 'customer' 
              ? 'border-[var(--primary)] text-[var(--primary)]' 
              : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          Customer Overview
        </button>
        <button 
          onClick={() => setActiveView('loyalty')}
          className={`py-3 px-6 font-bold text-sm uppercase tracking-wider transition-all border-b-2 ${
            activeView === 'loyalty' 
              ? 'border-[var(--primary)] text-[var(--primary)]' 
              : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          Loyalty Program
        </button>
      </div>

      {activeView === 'customer' ? (
        <>
          {/* Sticky Filters */}
          <div className="sticky top-[64px] z-30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-8 shadow-sm flex gap-3 overflow-x-auto scrollbar-none">
        {['Last 30 Days', 'All Regions', 'Segment', 'Loyalty'].map((filter, i) => (
          <button key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 whitespace-nowrap text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <span>{filter}</span>
            <ChevronDown size={14} />
          </button>
        ))}
      </div>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Customers', val: '245k', trend: '+5.2%', icon: Users },
          { label: 'New This Month', val: '12.4k', trend: '+8%', icon: UserPlus },
          { label: 'Avg. CLV', val: '₹1,250', trend: '+12%', icon: IndianRupee },
          { label: 'Retention', val: '72%', trend: 'Steady', icon: Heart, steady: true }
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:border-[var(--primary)] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[var(--primary)]">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">{kpi.label}</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-zinc-900 dark:text-zinc-50">{kpi.val}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${kpi.steady ? 'text-zinc-600 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'}`}>{kpi.trend}</span>
              </div>
            </div>
          )
        })}
      </section>

      {/* AI Insight Card & Composition */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Insight */}
        <div className="xl:col-span-2 p-6 bg-zinc-950 dark:bg-black text-white rounded-2xl border border-zinc-800 overflow-hidden relative shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-[var(--primary)]">
              <Sparkles size={20} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-wider">Executive Insight</span>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-zinc-200">
              VIP customers represent <span className="font-black text-emerald-400">4.2%</span> of your base but contribute <span className="font-black text-emerald-400">42%</span> of total revenue this quarter.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 opacity-5 translate-x-1/4 -translate-y-1/4">
            <Activity size={200} />
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        </div>

        {/* Composition */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6 w-full text-left">Composition</h3>
          <div className="relative w-32 h-32 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" fill="transparent" r="50" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800" strokeWidth="16"></circle>
              <circle cx="64" cy="64" fill="transparent" r="50" stroke="var(--primary)" strokeDasharray="314" strokeDashoffset="125" strokeWidth="16" className="drop-shadow-sm"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-50">60%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 font-semibold text-zinc-700 dark:text-zinc-300">
                <div className="w-3 h-3 rounded-full bg-[var(--primary)] shadow-sm"></div> 
                Returning
              </div>
              <span className="font-black text-zinc-900 dark:text-zinc-50">60%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 font-semibold text-zinc-700 dark:text-zinc-300">
                <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 shadow-sm"></div> 
                New
              </div>
              <span className="font-black text-zinc-900 dark:text-zinc-50">40%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Acquisition Growth Trend */}
        <div className="xl:col-span-2 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6">Acquisition Growth</h3>
          <div className="h-56 w-full flex items-end justify-between gap-2">
            {[40, 55, 45, 70, 85, 65, 95].map((h, i) => (
              <div key={i} className={`w-full rounded-t-lg transition-all duration-500 hover:opacity-100 cursor-pointer ${i === 6 ? 'bg-[var(--primary)] shadow-sm' : 'bg-[var(--primary)] opacity-30 hover:bg-[var(--primary)] hover:opacity-80'}`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Churn Card */}
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col justify-center">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Churn Risk</h3>
          <div className="flex flex-col items-center justify-center py-6 border border-rose-100 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-950/10 rounded-xl">
            <div className="text-rose-600 dark:text-rose-500 font-black text-5xl mb-3">12%</div>
            <div className="px-3 py-1.5 bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-rose-200 dark:border-rose-800">
              <AlertTriangle size={14} />
              NEEDS ATTENTION
            </div>
          </div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-6 text-center leading-relaxed">
            <span className="font-bold text-rose-600 dark:text-rose-500">1.2k VIPs</span> at risk of churn this month.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Segmentation Horizontal Scroll */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 overflow-hidden">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-6">Customer Segments</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-none pb-2">
            <div className="flex-shrink-0 w-48 p-5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-sm border-l-4 border-l-amber-500">
              <span className="font-bold block text-base text-zinc-900 dark:text-zinc-50">VIP</span>
              <span className="text-xs font-medium text-zinc-500 mt-1 block">Spent &gt; ₹10k</span>
              <div className="mt-6 text-3xl font-black text-zinc-900 dark:text-zinc-50">8.4k</div>
            </div>
            <div className="flex-shrink-0 w-48 p-5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-sm border-l-4 border-l-[var(--primary)]">
              <span className="font-bold block text-base text-zinc-900 dark:text-zinc-50">Frequent</span>
              <span className="text-xs font-medium text-zinc-500 mt-1 block">&gt; 3 orders/mo</span>
              <div className="mt-6 text-3xl font-black text-zinc-900 dark:text-zinc-50">42.1k</div>
            </div>
            <div className="flex-shrink-0 w-48 p-5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-xl shadow-sm border-l-4 border-l-rose-500">
              <span className="font-bold block text-base text-zinc-900 dark:text-zinc-50">At Risk</span>
              <span className="text-xs font-medium text-zinc-500 mt-1 block">Inactive &gt; 30d</span>
              <div className="mt-6 text-3xl font-black text-zinc-900 dark:text-zinc-50">15.2k</div>
            </div>
          </div>
        </section>

        {/* Retention Matrix Placeholder */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Cohort Retention</h3>
            <span className="text-[10px] font-bold text-[var(--primary)] hover:underline cursor-pointer">VIEW FULL MATRIX</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {[100, 90, 80, 70, 60, 100, 85, 75, 65, 50].map((op, i) => (
              <div key={i} className="h-10 bg-[var(--primary)] rounded-md transition-opacity hover:opacity-100 cursor-pointer" style={{ opacity: op / 100 }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
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
