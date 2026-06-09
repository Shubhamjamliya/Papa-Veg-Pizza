import React, { useState } from 'react';
import { Search, Upload, CalendarDays, Plus } from 'lucide-react';
import { BannersList } from './BannersData';
import CreateBanners from './CreateBanners';
import BannerPreview from './BannerPreview';

export default function BannersAndPromotions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Banner Type');
  const [filterStatus, setFilterStatus] = useState('Status');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  if (selectedBanner) {
    return <BannerPreview banner={selectedBanner} onBack={() => setSelectedBanner(null)} />;
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full pb-24 space-y-8 animate-in fade-in duration-500">
      
      {/* Page Header Actions */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Promotion Management</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Create, schedule, and monitor promotional banners for app and web.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            <Upload size={18} /> <span className="hidden sm:inline">Bulk Upload</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            <CalendarDays size={18} /> <span className="hidden sm:inline">Banner Calendar</span>
          </button>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-bold hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-md"
          >
            <Plus size={18} /> Create Banner
          </button>
        </div>
      </div>

      {/* KPI Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { label: 'Active Banners', val: '12', trend: '+5%', tColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Scheduled', val: '8', trend: 'Steady', tColor: 'text-zinc-600 dark:text-zinc-400' },
          { label: 'Total Impressions', val: '1.2M', trend: '+12%', tColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Total Clicks', val: '45k', trend: '+8.4%', tColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Avg CTR', val: '3.75%', trend: '+0.5%', tColor: 'text-emerald-600 dark:text-emerald-400' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between shadow-sm hover:-translate-y-0.5 transition-transform">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">{kpi.label}</p>
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{kpi.val}</h4>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className={`text-[10px] font-bold ${kpi.tColor}`}>{kpi.trend}</span>
              <div className="flex-1 h-6 bg-zinc-50 dark:bg-zinc-800/50 rounded overflow-hidden relative">
                {/* Fake sparkline simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                <svg viewBox="0 0 100 24" className="w-full h-full stroke-emerald-500 fill-none" strokeWidth="2">
                   <polyline points="0,20 20,15 40,18 60,10 80,12 100,5"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
        {/* Revenue Impact (Highlighted) */}
        <div className="bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 p-4 border border-[var(--primary)]/20 rounded-xl flex flex-col justify-between shadow-sm hover:-translate-y-0.5 transition-transform">
          <div>
            <p className="text-xs font-medium text-[var(--primary)] mb-1">Revenue Impact</p>
            <h4 className="text-2xl font-bold text-[var(--primary)]">$84.2k</h4>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[10px] font-bold text-[var(--primary)]">+15%</span>
            <div className="flex-1 h-6 bg-white/50 dark:bg-black/10 rounded overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent"></div>
              <svg viewBox="0 0 100 24" className="w-full h-full stroke-[var(--primary)] fill-none" strokeWidth="2">
                 <polyline points="0,20 20,18 40,15 60,12 80,8 100,5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Revenue Generated Overview</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Attributed sales performance for the last 30 days.</p>
          </div>
          <div className="flex gap-2">
            <button className="text-xs font-bold px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md">Day</button>
            <button className="text-xs font-bold px-3 py-1.5 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md transition-colors">Week</button>
          </div>
        </div>
        
        <div className="h-64 w-full relative flex items-end gap-1 sm:gap-2 px-2">
          {/* Simple Bar Chart Visualization */}
          {[40, 55, 70, 45, 85, 95, 65, 40, 75, 50, 30, 60, 90, 45, 70, 80, 55, 40, 65, 95].map((height, i) => (
             <div 
               key={i} 
               className={`flex-1 transition-colors rounded-t-sm relative group cursor-pointer ${
                 i === 5 ? 'bg-[var(--primary)]/30 dark:bg-[var(--primary)]/40 border-x border-t border-[var(--primary)]/50' : 'bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 dark:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30'
               }`} 
               style={{ height: `${height}%` }}
             >
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
                 ${(height * 12).toFixed(0)}
               </div>
             </div>
          ))}
          {/* Legend */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 pt-3 border-t border-zinc-200 dark:border-zinc-800 translate-y-full">
            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">30 Days Ago</span>
            <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Today</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 bg-zinc-50 dark:bg-zinc-800/30 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl mt-12">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow text-zinc-900 dark:text-zinc-100 placeholder-zinc-400" 
            placeholder="Search by title, coupon code..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <select 
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] outline-none text-zinc-700 dark:text-zinc-300"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option>Banner Type</option>
            <option>Homepage Slider</option>
            <option>App Slider</option>
            <option>Popup</option>
            <option>Sidebar</option>
          </select>
          <select 
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-[var(--primary)] outline-none text-zinc-700 dark:text-zinc-300"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option>Status</option>
            <option>Active</option>
            <option>Scheduled</option>
            <option>Expired</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Banners Listing */}
      <BannersList searchTerm={searchTerm} filterType={filterType} filterStatus={filterStatus} onPreview={setSelectedBanner} />

      <CreateBanners isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
}
