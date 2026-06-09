import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, TrendingUp, CheckCircle, Download, RefreshCw } from 'lucide-react';

export default function CampaignCalendar() {
  const [activeView, setActiveView] = useState('Month');
  const [showToast, setShowToast] = useState(false);

  const handleAddCampaign = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-[700px] animate-in fade-in duration-500 relative">
      
      {/* Calendar View Toolbar */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-t-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
            {['Month', 'Week', 'Timeline'].map((view) => (
              <button 
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-4 py-1.5 text-sm rounded transition-all ${
                  activeView === view 
                    ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold shadow-sm' 
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500"><ChevronLeft size={20} /></button>
            <span className="text-lg font-bold px-2 text-zinc-900 dark:text-zinc-100">October 2024</span>
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]"></span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">BOGO</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Discount</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Festival</span>
          </div>
          <button 
            onClick={handleAddCampaign}
            className="ml-2 flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-sm"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">New Campaign</span>
          </button>
        </div>
      </div>

      {/* Calendar Grid Content */}
      <div className="flex-1 bg-white dark:bg-zinc-900 border-x border-b border-zinc-200 dark:border-zinc-800 rounded-b-xl overflow-x-auto scrollbar-none shadow-sm relative">
        <div className="min-w-[800px] h-full flex flex-col">
          {/* Days Header */}
          <div className="grid grid-cols-7 bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <div key={day} className="py-3 text-center text-[11px] font-bold text-zinc-500 dark:text-zinc-400 tracking-widest">{day}</div>
            ))}
          </div>
          
          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 border-l border-zinc-200 dark:border-zinc-800 flex-1">
            {/* Week 1: Partially prev month */}
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 opacity-40 bg-zinc-50 dark:bg-zinc-800/30 text-xs text-zinc-500 font-medium">29</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 opacity-40 bg-zinc-50 dark:bg-zinc-800/30 text-xs text-zinc-500 font-medium">30</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">1</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">2</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">3</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 relative group z-10">
              4
              <div className="mt-2 relative">
                <div className="h-6 rounded px-2 mb-0.5 flex items-center cursor-pointer transition-transform hover:scale-[1.02] bg-[var(--primary)] text-white text-[10px] font-semibold truncate shadow-sm">
                  Pepperoni BOGO Weekend
                </div>
                {/* Popover Example */}
                <div className="hidden group-hover:block absolute z-50 w-60 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow-xl -mt-20 left-1/2 -translate-x-1/2 before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-white dark:before:bg-zinc-800 before:rotate-45 before:border-b before:border-r before:border-zinc-200 dark:before:border-zinc-700">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-[var(--primary)] truncate">BOGO Promo</span>
                    <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 font-bold rounded-full">Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Redemptions</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">1,240</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Conv. Rate</span>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">12.4%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary)] w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">5</div>
            
            {/* Week 2 */}
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">6</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">7</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 relative group">
              8
              <div className="mt-2">
                <div className="h-6 rounded px-2 mb-0.5 flex items-center cursor-pointer transition-transform hover:scale-[1.02] bg-blue-500 text-white text-[10px] font-semibold truncate shadow-sm">
                  Autumn Discount 15%
                </div>
              </div>
            </div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">9</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">10</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">11</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">12</div>
            
            {/* Week 3 */}
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">13</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 relative bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10">
              14
              <div className="mt-2">
                <div className="h-6 rounded px-2 mb-0.5 flex items-center cursor-pointer transition-transform hover:scale-[1.02] bg-amber-500 text-white text-[10px] font-semibold truncate shadow-sm">
                  Founder's Day Festival
                </div>
              </div>
            </div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10">15</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10">16</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10">17</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">18</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">19</div>
            
            {/* Week 4 */}
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">20</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">21</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">22</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">23</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">24</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">25</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">26</div>
            
            {/* Week 5 */}
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">27</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">28</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">29</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">30</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">31</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 opacity-40 bg-zinc-50 dark:bg-zinc-800/30 text-xs text-zinc-500 font-medium">1</div>
            <div className="min-h-[120px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 opacity-40 bg-zinc-50 dark:bg-zinc-800/30 text-xs text-zinc-500 font-medium">2</div>
          </div>
        </div>
      </div>

      {/* Right Side Quick Insights (Floating on Desktop) */}
      <div className="fixed right-8 bottom-8 w-80 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl p-6 space-y-5 hidden xl:block z-40 animate-in slide-in-from-right-8 duration-500">
        <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
          <TrendingUp size={16} className="text-[var(--primary)]" />
          MONTHLY FORECAST
        </h3>
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-500 font-medium">Active Campaigns</p>
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">4</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-500 font-medium">Est. Reach</p>
              <p className="text-2xl font-bold text-[var(--primary)]">850k</p>
            </div>
          </div>
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <p className="text-[11px] font-bold text-zinc-500 mb-1.5 uppercase tracking-wider">Top Performing</p>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">Pepperoni BOGO Weekend</p>
            <div className="flex items-center gap-2 mt-2.5">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded">+18.2%</span>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">vs last month</span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 pt-2">
            <button className="w-full py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity shadow-sm flex justify-center items-center gap-2">
              <Download size={14} /> Download Calendar PDF
            </button>
            <button className="w-full py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm flex justify-center items-center gap-2">
              <RefreshCw size={14} /> Sync to Google Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Success Feedback Overlay */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-full flex items-center gap-3 shadow-xl transition-opacity duration-300 pointer-events-none z-50 ${showToast ? 'opacity-100' : 'opacity-0'}`}>
        <CheckCircle size={20} className="text-emerald-400 dark:text-emerald-600" />
        <span className="text-sm font-bold">New campaign successfully scheduled</span>
      </div>
    </div>
  );
}
