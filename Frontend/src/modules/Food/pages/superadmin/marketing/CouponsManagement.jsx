import React, { useState } from 'react';
import { 
  Plus, 
  CheckCircle2, 
  TimerOff, 
  Gift, 
  CircleDollarSign, 
  Percent, 
  Star, 
  TrendingUp,
  Filter,
  ChevronDown
} from 'lucide-react';
import { CouponList } from './CouponsData';
import CreateCoupon from './CreateCoupon';
import CouponAnalysis from './CouponAnalysis';

export default function CouponsManagement() {
  const [activeTab, setActiveTab] = useState('management');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    status: 'All Statuses',
    type: 'Any Type',
    date: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      status: 'All Statuses',
      type: 'Any Type',
      date: ''
    });
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Manage Active Rewards</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">Generate, track, and analyze performance of franchise-wide discount codes.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all"
        >
          <Plus size={18} />
          Create Coupon
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        <button 
          onClick={() => setActiveTab('management')} 
          className={`pb-3 text-sm font-semibold transition-all relative ${activeTab === 'management' ? 'text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
        >
          Overview
          {activeTab === 'management' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('performance')} 
          className={`pb-3 text-sm font-semibold transition-all relative ${activeTab === 'performance' ? 'text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
        >
          Performance
          {activeTab === 'performance' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-t-full"></div>}
        </button>
      </div>

      {activeTab === 'management' ? (
        <>
      {/* KPI Stats (Horizontal Scroll on Mobile) */}
      <div className="flex overflow-x-auto gap-4 mb-8 pb-4 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 snap-x">
        {/* KPI Card 1 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <CheckCircle2 size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Active</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">142</p>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium mt-1">
            <TrendingUp size={12} />
            <span>12% from last week</span>
          </div>
        </div>
        
        {/* KPI Card 2 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <TimerOff size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Expired</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">89</p>
          <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-[10px] font-medium mt-1">
            <TrendingUp size={12} />
            <span>5 expired today</span>
          </div>
        </div>

        {/* KPI Card 3 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <Gift size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Redemptions</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">24.1k</p>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium mt-1">
            <TrendingUp size={12} />
            <span>+2.4k this month</span>
          </div>
        </div>

        {/* KPI Card 4 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <CircleDollarSign size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Revenue</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">$312k</p>
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px] font-medium mt-1">
            <TrendingUp size={12} />
            <span>8% ROI increase</span>
          </div>
        </div>

        {/* KPI Card 5 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <Percent size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Discounted</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">$42.5k</p>
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-[10px] mt-1">
            <span>Total value gifted</span>
          </div>
        </div>

        {/* KPI Card 6 */}
        <div className="min-w-[160px] snap-start flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-2">
            <Star size={18} />
            <span className="text-[11px] font-medium tracking-wide uppercase">Most Used</span>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 truncate mt-1">PIZZA50</p>
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-[10px] mt-1">
            <span>Used 4.2k times</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden mb-8 shadow-sm">
        <div 
          className="p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <div className="flex items-center gap-3 text-[var(--primary)]">
            <Filter size={18} />
            <span className="text-[13px] font-semibold tracking-wide">Advanced Search & Filters</span>
          </div>
          <ChevronDown 
            size={18} 
            className={`text-zinc-400 transition-transform duration-300 ${filtersOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </div>
        
        <div className={`transition-all duration-300 ease-in-out ${filtersOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pb-4 border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Search Code / Title</label>
                <input 
                  type="text" 
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="e.g. SUMMER24" 
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-10 transition-all" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Status</label>
                <select 
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-10 transition-all"
                >
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Expired</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Discount Type</label>
                <select 
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-10 transition-all"
                >
                  <option>Any Type</option>
                  <option>Percentage</option>
                  <option>Fixed Amount</option>
                  <option>BOGO</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Validity Period</label>
                <input 
                  type="date" 
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-10 transition-all" 
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button 
                onClick={clearFilters}
                className="text-zinc-600 dark:text-zinc-300 font-semibold text-[13px] px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Cards List */}
          <CouponList filters={filters} />
        </>
      ) : (
        <CouponAnalysis />
      )}
      
      <CreateCoupon isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
}
