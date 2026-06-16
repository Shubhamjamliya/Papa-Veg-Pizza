import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter, Plus, AlertTriangle, ArrowLeft, Calendar } from 'lucide-react';
import CreateBanners from './CreateBanners';

export default function BannerCalendar({ onBack }) {
  const [activeView, setActiveView] = useState('Month');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentMonth, setCurrentMonth] = useState('October 2023');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [showConflictInfo, setShowConflictInfo] = useState(false);

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Header Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 bg-zinc-50 dark:bg-zinc-950">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-1.5 hover:bg-zinc-150 dark:hover:bg-zinc-800 rounded-full transition-colors text-black/50 dark:text-white/50"
            title="Back to Promotions List"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white tracking-tight">Banner Calendar</h3>
            <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">Schedule and orchestrate your app/web visual assets.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--primary)] text-white rounded-lg text-xs font-bold hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-md"
          >
            <Plus size={14} />
            <span>Create Banner</span>
          </button>
        </div>
      </div>

      {/* Calendar Controls */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
            {['Month', 'Week', 'Timeline'].map((view) => (
              <button 
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1 text-xs rounded font-bold transition-all ${
                  activeView === view 
                    ? 'bg-white dark:bg-zinc-700 text-black dark:text-white shadow-sm' 
                    : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                }`}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentMonth(currentMonth === 'October 2023' ? 'September 2023' : 'October 2023')}
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-[var(--primary)] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-bold text-xs w-28 text-center text-zinc-800 dark:text-zinc-100">{currentMonth}</span>
            <button 
              onClick={() => setCurrentMonth(currentMonth === 'October 2023' ? 'November 2023' : 'October 2023')}
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-[var(--primary)] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative w-48 sm:w-60">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500">
              <Search size={14} />
            </span>
            <input 
              type="text"
              placeholder="Search banner title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs outline-none focus:ring-1 focus:ring-[var(--primary)] dark:text-zinc-100 placeholder:text-zinc-400"
            />
          </div>
          <button className="flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter size={14} />
            <span>Filters</span>
          </button>
        </div>
      </section>

      {/* Calendar Grid Container */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        {/* Days Header */}
        <div className="grid grid-cols-7 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 font-bold text-[10px] uppercase tracking-wider py-2 text-center border-b border-zinc-200 dark:border-zinc-800">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        
        {/* Calendar Cells Grid */}
        <div className="grid grid-cols-7 border-l border-zinc-200 dark:border-zinc-800">
          {/* Row 1 (Sept 24-30, inactive) */}
          {[24, 25, 26, 27, 28, 29, 30].map(day => (
            <div key={`prev-${day}`} className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-400 dark:text-zinc-650 bg-zinc-50 dark:bg-zinc-950/40 opacity-60">{day}</div>
          ))}
          
          {/* Row 2 (Oct 1-7) */}
          {[1, 2, 3, 4, 5, 6, 7].map(day => (
            <div key={`oct-${day}`} className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">{day}</div>
          ))}
          
          {/* Row 3 (Oct 8-14) */}
          {[8, 9, 10, 11, 12, 13, 14].map(day => (
            <div key={`oct-${day}`} className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">{day}</div>
          ))}

          {/* Row 4 (Oct 15-21 with multi-day banner) */}
          {[15, 16, 17, 18, 19, 20].map(day => (
            <div key={`oct-${day}`} className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">{day}</div>
          ))}
          {/* Oct 21 spans 3 cells to the right */}
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400 relative">
            21
            <div 
              onClick={() => setSelectedBanner({ name: "Weekend BOGO Blowout", type: "Homepage Slider", date: "Oct 21 - Oct 23", reach: "45,000", revenue: "₹32,400" })}
              className="absolute inset-x-2 top-8 w-[calc(300%+16px)] z-10 h-6 px-2 rounded bg-[var(--primary)] text-white text-[10px] font-bold flex items-center cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md truncate"
              title="Weekend BOGO Blowout"
            >
              Weekend BOGO Blowout
            </div>
          </div>

          {/* Row 5 (Oct 22-28 with multi-day banners & conflicts) */}
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-450 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-950/40 opacity-60">22</div>
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-450 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-950/40 opacity-60">23</div>
          {/* Oct 24 Highlighted active today */}
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 bg-[var(--primary)]/5 dark:bg-[var(--primary)]/10 relative">
            <span className="bg-[var(--primary)] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">24</span>
            {/* App Slider Banner spanning 3 cells */}
            <div 
              onClick={() => setSelectedBanner({ name: "App First Order - 50% Off", type: "App Slider", date: "Oct 24 - Oct 26", reach: "80,000", revenue: "₹51,800" })}
              className="absolute inset-x-2 top-8 w-[calc(300%+16px)] z-20 h-6 px-2 rounded bg-blue-600 text-white text-[10px] font-bold flex items-center cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md truncate"
              title="App First Order - 50% Off"
            >
              App First Order - 50% Off
            </div>
          </div>
          {/* Oct 25 has Family Size Savings and Warning Conflict */}
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400 relative">
            25
            {/* Family Size Savings popup spanning 3 cells */}
            <div 
              onClick={() => setSelectedBanner({ name: "Family Size Savings", type: "Popup", date: "Oct 25 - Oct 27", reach: "110,000", revenue: "₹65,000" })}
              className="absolute inset-x-2 top-[62px] w-[calc(300%+16px)] z-10 h-6 px-2 rounded bg-green-600 text-white text-[10px] font-bold flex items-center cursor-pointer transition-all hover:scale-[1.01] hover:shadow-md truncate"
              title="Family Size Savings"
            >
              Family Size Savings
            </div>
            {/* Warning Indicator */}
            <div className="absolute top-2 right-2 flex items-center justify-center cursor-pointer" onClick={() => setShowConflictInfo(true)}>
              <AlertTriangle size={15} className="text-red-500 fill-red-500/10" />
              <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">3</div>
            </div>
          </div>
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">26</div>
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">27</div>
          <div className="min-h-[90px] border-r border-b border-zinc-200 dark:border-zinc-800 p-2 text-[10px] font-bold text-zinc-700 dark:text-zinc-400">28</div>
        </div>
      </div>

      {/* Conflict Dialog */}
      {showConflictInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-sm w-full rounded-xl p-4 shadow-2xl relative text-xs">
            <h4 className="font-bold text-sm text-red-600 flex items-center gap-1.5 mb-2">
              <AlertTriangle size={16} /> Scheduling Overlaps (3 Banners)
            </h4>
            <p className="text-zinc-650 dark:text-zinc-400 mb-3 leading-relaxed">
              Multiple high-priority banners are scheduled to display simultaneously on Oct 25 on the homepage container.
            </p>
            <div className="space-y-2 border-t border-zinc-150 dark:border-zinc-850 pt-2">
              <div className="flex justify-between font-semibold text-zinc-800 dark:text-zinc-200">
                <span>1. Weekend BOGO Blowout</span>
                <span className="text-[10px] px-1.5 bg-zinc-100 dark:bg-zinc-800 rounded uppercase">Homepage</span>
              </div>
              <div className="flex justify-between font-semibold text-zinc-800 dark:text-zinc-200">
                <span>2. App First Order - 50% Off</span>
                <span className="text-[10px] px-1.5 bg-zinc-100 dark:bg-zinc-800 rounded uppercase">App Slider</span>
              </div>
              <div className="flex justify-between font-semibold text-zinc-800 dark:text-zinc-200">
                <span>3. Family Size Savings</span>
                <span className="text-[10px] px-1.5 bg-zinc-100 dark:bg-zinc-800 rounded uppercase">Popup</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => setShowConflictInfo(false)}
                className="px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-bold"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner Detail Modal */}
      {selectedBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-sm w-full rounded-xl p-4 shadow-2xl relative text-xs">
            <h4 className="font-bold text-sm text-[var(--primary)] mb-2 flex items-center gap-1.5">
              <Calendar size={16} /> Banner Information
            </h4>
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Name:</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">{selectedBanner.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Type:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedBanner.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Date Range:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedBanner.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Reach:</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{selectedBanner.reach} users</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">Estimated Revenue:</span>
                <span className="font-bold text-[var(--primary)]">{selectedBanner.revenue}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => setSelectedBanner(null)}
                className="px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Schedule List */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-100">Upcoming Schedule</h3>
          <button className="text-[var(--primary)] text-xs font-bold hover:underline">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Banner Item 1 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex gap-3 hover:shadow-md hover:border-[var(--primary)]/30 transition-all group cursor-pointer">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80&fm=webp" 
                alt="Winter Hot Deal" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[9px] uppercase font-bold text-[var(--primary)] tracking-widest">Homepage Slider</span>
              <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-100 truncate mt-0.5">Winter Hot Deal</h4>
              <div className="flex items-center gap-1 text-zinc-500 mt-1">
                <Calendar size={12} />
                <span className="text-[10px] font-medium">Nov 01 - Nov 15</span>
              </div>
            </div>
          </div>

          {/* Banner Item 2 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex gap-3 hover:shadow-md hover:border-[var(--primary)]/30 transition-all group cursor-pointer">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?w=200&q=80&fm=webp" 
                alt="Late Night Munchies" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[9px] uppercase font-bold text-zinc-500 tracking-widest">App Slider</span>
              <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-100 truncate mt-0.5">Late Night Munchies</h4>
              <div className="flex items-center gap-1 text-zinc-500 mt-1">
                <Calendar size={12} />
                <span className="text-[10px] font-medium">Nov 10 - Nov 20</span>
              </div>
            </div>
          </div>

          {/* Banner Item 3 */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex gap-3 hover:shadow-md hover:border-[var(--primary)]/30 transition-all group cursor-pointer">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=200&q=80&fm=webp" 
                alt="Weekend Special" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-widest">Popup</span>
              <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-100 truncate mt-0.5">Weekend Special</h4>
              <div className="flex items-center gap-1 text-zinc-500 mt-1">
                <Calendar size={12} />
                <span className="text-[10px] font-medium">Nov 15 - Nov 17</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CreateBanners isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
}
