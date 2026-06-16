import React, { useState } from 'react';
import { Download, Plus, Rocket, CalendarDays, Banknote, LineChart, LayoutGrid } from 'lucide-react';
import { CampaignTable } from './CampaignData';
import CreateCampaign from './CreateCampaign';
import CampaignDetails from './CampaignDetails';
import CampaignCalendar from './CampaignCalendar';
import EditCampaign from './EditCampaign';

export default function OffersAndCampaign() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [editingCampaignId, setEditingCampaignId] = useState(null);
  const [viewMode, setViewMode] = useState('dashboard'); // 'dashboard' | 'calendar'

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Supreme Summer Feast",
      code: "SUMMER2024",
      type: "Bundle Deal",
      duration: "Jun 01 - Aug 31",
      roi: "6.4x",
      status: "Active",
      imgUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fm=webp",
      description: "Enjoy supreme weekend pizza feasts with our exclusive summer deals. High conversions and bulk family orders.",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
      budget: 15000,
      spent: 12450,
      reach: 12450,
      value: "Buy 2 Get 1 Free"
    },
    {
      id: 2,
      name: "Night Owl Special",
      code: "LATE20",
      type: "Fixed Discount",
      duration: "Jul 15 - Jul 22",
      roi: "3.2x",
      status: "Scheduled",
      imgUrl: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=400&q=80&fm=webp",
      description: "Late night cravings satisfied! Get flat discount on pizzas ordered between 11 PM and 3 AM.",
      startDate: "2024-07-15",
      endDate: "2024-07-22",
      budget: 8000,
      spent: 0,
      reach: 6000,
      value: "₹150 OFF"
    },
    {
      id: 3,
      name: "BOGO Friday Blitz",
      code: "BOGOFRIDAY",
      type: "Buy 1 Get 1",
      duration: "Jan 01 - Apr 30",
      roi: "4.1x",
      status: "Completed",
      imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&fm=webp",
      description: "Friday frenzy pizza party! Buy one large pizza and get another medium pizza absolutely free.",
      startDate: "2024-01-01",
      endDate: "2024-04-30",
      budget: 20000,
      spent: 18500,
      reach: 15400,
      value: "BOGO Free"
    },
    {
      id: 4,
      name: "Spicy Weekend Deal",
      code: "HOTWEEK",
      type: "Percentage %",
      duration: "Ongoing",
      roi: "8.2x",
      status: "Active",
      imgUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&q=80&fm=webp",
      description: "Spice up your weekends with an extra percentage off on all thin crust and spicy signature pizzas.",
      startDate: "2024-05-01",
      endDate: "2024-12-31",
      budget: 12000,
      spent: 9800,
      reach: 10200,
      value: "20% OFF"
    }
  ]);

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4 animate-in fade-in duration-500">

      {/* Action Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white tracking-tight">Campaign Performance</h3>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">Manage and track your regional pizza marketing initiatives.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-zinc-150 dark:bg-zinc-850 p-1 rounded-lg flex mr-1">
            <button
              onClick={() => setViewMode('dashboard')}
              className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-all ${viewMode === 'dashboard'
                  ? 'bg-white dark:bg-zinc-700 text-black dark:text-white shadow-sm'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                }`}
            >
              <LayoutGrid size={12} /> Dashboard
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1.5 transition-all ${viewMode === 'calendar'
                  ? 'bg-white dark:bg-zinc-700 text-black dark:text-white shadow-sm'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                }`}
            >
              <CalendarDays size={12} /> Calendar
            </button>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] text-white rounded-lg text-xs font-bold hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-md"
          >
            <Plus size={14} />
            <span className="hidden sm:inline">Create Campaign</span>
          </button>
        </div>
      </section>

      {viewMode === 'dashboard' ? (
        <>
          {/* KPI Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* KPI Card 1 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Active Campaigns</span>
                <h4 className="text-lg font-black text-black dark:text-white">
                  {campaigns.filter(c => c.status === 'Active').length}
                </h4>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center text-[10px] font-bold mt-0.5">
                  <LineChart size={12} className="mr-0.5" /> +12%
                </span>
              </div>
              <div className="p-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg shrink-0">
                <Rocket size={14} />
              </div>
            </div>

            {/* KPI Card 2 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Scheduled</span>
                <h4 className="text-lg font-black text-black dark:text-white">
                  {campaigns.filter(c => c.status === 'Scheduled').length}
                </h4>
                <span className="text-[10px] font-semibold text-black/60 dark:text-white/60 mt-0.5">Next 30 days</span>
              </div>
              <div className="p-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg shrink-0">
                <CalendarDays size={14} />
              </div>
            </div>

            {/* KPI Card 3 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Total Revenue</span>
                <h4 className="text-lg font-black text-black dark:text-white">₹1,42,500</h4>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center text-[10px] font-bold mt-0.5">
                  <LineChart size={12} className="mr-0.5" /> +28.4%
                </span>
              </div>
              <div className="p-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg shrink-0">
                <Banknote size={14} />
              </div>
            </div>

            {/* KPI Card 4 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Avg. ROI %</span>
                <h4 className="text-lg font-black text-black dark:text-white">5.2x</h4>
                <span className="text-[var(--primary)] flex items-center text-[10px] font-bold mt-0.5">
                  Target: 4.5
                </span>
              </div>
              <div className="p-1.5 bg-purple-500/10 text-purple-500 rounded-lg shrink-0">
                <LineChart size={14} />
              </div>
            </div>
          </section>

          {/* Revenue Trend & Bento Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col shadow-sm">
              <div className="p-3.5 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white">Revenue Trend</h4>
                  <p className="text-[10px] text-black/60 dark:text-white/60 mt-0.5">Daily campaign revenue aggregation</p>
                </div>
                <select className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs px-2.5 py-1 focus:ring-2 focus:ring-[var(--primary)] outline-none text-black dark:text-white transition-all cursor-pointer font-semibold">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                </select>
              </div>
              <div className="h-36 w-full relative flex items-end justify-between px-4 pb-4 pt-8 bg-zinc-50/50 dark:bg-zinc-950/50">
                {/* Mock Chart Visualization */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="flex-1 flex items-end gap-1.5 px-1 h-full z-10">
                  {[40, 55, 45, 70, 90, 65, 50, 75, 85, 40, 60, 30].map((height, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm transition-colors cursor-pointer hover:bg-[var(--primary)] ${height > 70 ? 'bg-[var(--primary)]' : 'bg-[var(--primary)]/30 dark:bg-[var(--primary)]/50'}`} style={{ height: `${height}%` }} title={`Day ${i + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Bento Promo */}
            <div className="bg-[var(--primary)] text-white rounded-xl p-3.5 relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h4 className="text-xs font-bold mb-1 uppercase tracking-tight text-white">Flash Sale Live</h4>
                <p className="text-xs text-white/90 leading-relaxed">Regional Pizza Week is outperforming goals by 14.5%.</p>
              </div>
              <div className="relative z-10 mt-4">
                <div className="text-lg font-black mb-2 tracking-tighter text-white">42.5k <span className="text-xs font-semibold tracking-normal text-white/80">Conversions</span></div>
                <button className="w-full bg-white text-[var(--primary)] font-bold py-1.5 rounded-lg text-xs hover:bg-zinc-50 transition-colors shadow-sm">Boost Campaign</button>
              </div>
            </div>
          </section>

          {/* Filters & High-Density Table */}
          <CampaignTable campaigns={campaigns} onRowClick={(id) => setSelectedCampaignId(id)} />
        </>
      ) : (
        <CampaignCalendar />
      )}

      {/* Create Campaign Modal */}
      <CreateCampaign isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />

      {/* Campaign Details Modal */}
      {selectedCampaignId && (
        <CampaignDetails 
          campaignId={selectedCampaignId}
          campaigns={campaigns}
          setCampaigns={setCampaigns}
          onEdit={(id) => {
            setSelectedCampaignId(null);
            setEditingCampaignId(id);
          }}
          onClose={() => setSelectedCampaignId(null)} 
        />
      )}

      {/* Edit Campaign Modal */}
      {editingCampaignId && (
        <EditCampaign 
          campaignId={editingCampaignId}
          campaigns={campaigns}
          setCampaigns={setCampaigns}
          onClose={() => setEditingCampaignId(null)}
        />
      )}
    </div>
  );
}
