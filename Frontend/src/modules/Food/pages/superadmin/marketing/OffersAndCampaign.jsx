import React, { useState } from 'react';
import { Download, Plus, Rocket, CalendarDays, Banknote, LineChart, LayoutGrid } from 'lucide-react';
import { CampaignTable } from './CampaignData';
import CreateCampaign from './CreateCampaign';
import CampaignDetails from './CampaignDetails';
import CampaignCalendar from './CampaignCalendar';

export default function OffersAndCampaign() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard' | 'calendar'

  if (selectedCampaignId) {
    return <CampaignDetails onBack={() => setSelectedCampaignId(null)} campaignId={selectedCampaignId} />;
  }
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full pb-24 space-y-8 animate-in fade-in duration-500">
      
      {/* Action Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Campaign Performance</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">Manage and track your regional pizza marketing initiatives.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-lg flex mr-2">
            <button 
              onClick={() => setViewMode('dashboard')}
              className={`px-3 py-1.5 rounded text-sm font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'dashboard' 
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm' 
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <LayoutGrid size={16} /> Dashboard
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1.5 rounded text-sm font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'calendar' 
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm' 
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <CalendarDays size={16} /> Calendar
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm">
            <Download size={18} />
            <span className="hidden sm:inline">Analytics Report</span>
          </button>
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-md"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Create Campaign</span>
          </button>
        </div>
      </section>

      {viewMode === 'dashboard' ? (
        <>
          {/* KPI Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI Card 1 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <Rocket size={20} />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center text-[11px] font-bold">
              <LineChart size={14} className="mr-1" /> 12%
            </span>
          </div>
          <div className="mt-2">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-1">Active Campaigns</p>
            <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">24</h4>
          </div>
        </div>

        {/* KPI Card 2 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded-lg">
              <CalendarDays size={20} />
            </span>
            <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400">Next 30 days</span>
          </div>
          <div className="mt-2">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-1">Scheduled</p>
            <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">08</h4>
          </div>
        </div>

        {/* KPI Card 3 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <Banknote size={20} />
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center text-[11px] font-bold">
              <LineChart size={14} className="mr-1" /> 28.4%
            </span>
          </div>
          <div className="mt-2">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-1">Total Revenue</p>
            <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">$142,500</h4>
          </div>
        </div>

        {/* KPI Card 4 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex flex-col gap-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
          <div className="flex justify-between items-start">
            <span className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg">
              <LineChart size={20} />
            </span>
            <span className="text-[var(--primary)] flex items-center text-[11px] font-bold">
              Target: 4.5
            </span>
          </div>
          <div className="mt-2">
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-1">Avg. ROI %</p>
            <h4 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">5.2x</h4>
          </div>
        </div>
      </section>

      {/* Revenue Trend & Bento Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col shadow-sm">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Revenue Trend</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Daily campaign revenue aggregation</p>
            </div>
            <select className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm px-3 py-1.5 focus:ring-2 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 transition-all cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-64 w-full relative flex items-end justify-between px-6 pb-6 pt-12 bg-zinc-50/50 dark:bg-zinc-950/50">
            {/* Mock Chart Visualization */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="flex-1 flex items-end gap-2 px-2 h-full z-10">
              {[40, 55, 45, 70, 90, 65, 50, 75, 85, 40, 60, 30].map((height, i) => (
                <div key={i} className={`flex-1 rounded-t-sm transition-colors cursor-pointer hover:bg-[var(--primary)] ${height > 70 ? 'bg-[var(--primary)]' : 'bg-[var(--primary)]/30 dark:bg-[var(--primary)]/50'}`} style={{ height: `${height}%` }} title={`Day ${i+1}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Bento Promo */}
        <div className="bg-[var(--primary)] text-white rounded-xl p-6 relative overflow-hidden flex flex-col justify-between shadow-md">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h4 className="text-xl font-extrabold mb-2 uppercase tracking-tight text-white">Flash Sale Live</h4>
            <p className="text-sm text-white/90 leading-relaxed">Regional Pizza Week is outperforming goals by 14.5%.</p>
          </div>
          <div className="relative z-10 mt-8">
            <div className="text-4xl font-extrabold mb-4 tracking-tighter text-white">42.5k <span className="text-sm font-semibold tracking-normal text-white/80">Conversions</span></div>
            <button className="w-full bg-white text-[var(--primary)] font-bold py-3 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">Boost Campaign</button>
          </div>
        </div>
      </section>

      {/* Filters & High-Density Table */}
      <CampaignTable onRowClick={(id) => setSelectedCampaignId(id)} />
        </>
      ) : (
        <CampaignCalendar />
      )}

      <CreateCampaign isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
}
