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
import { CouponList, initialCoupons } from './CouponsData';
import CreateCoupon from './CreateCoupon';
import EditCoupon from './EditCoupon';
import CouponDetails from './CouponDetails';
import CouponAnalysis from './CouponAnalysis';

export default function CouponsManagement() {
  const [activeTab, setActiveTab] = useState('management');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [coupons, setCoupons] = useState(initialCoupons);
  const [showRecommendation, setShowRecommendation] = useState(true);
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

  const handleEditClick = (coupon) => {
    setSelectedCoupon(coupon);
    setIsEditModalOpen(true);
  };

  const handleViewClick = (coupon) => {
    setSelectedCoupon(coupon);
    setIsViewModalOpen(true);
  };

  const handleSaveCoupon = (updatedCoupon) => {
    setCoupons(prev => 
      prev.map(c => c.id === updatedCoupon.id ? updatedCoupon : c)
    );
  };

  const handleExtendLimit = () => {
    setCoupons(prev => 
      prev.map(c => 
        c.code === 'SUMMER50' 
          ? { ...c, maxRedemptions: Math.round(c.maxRedemptions * 1.2) } 
          : c
      )
    );
    setShowRecommendation(false);
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <div>
          <h2 className="text-lg font-bold text-black dark:text-white tracking-tight">Manage Active Rewards</h2>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">Generate, track, and analyze performance of franchise-wide discount codes.</p>
        </div>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-[var(--primary)] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all"
        >
          <Plus size={14} />
          Create Coupon
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
        <button 
          onClick={() => setActiveTab('management')} 
          className={`pb-2 text-xs font-bold transition-all relative ${activeTab === 'management' ? 'text-[var(--primary)]' : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'}`}
        >
          Overview
          {activeTab === 'management' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('performance')} 
          className={`pb-2 text-xs font-bold transition-all relative ${activeTab === 'performance' ? 'text-[var(--primary)]' : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'}`}
        >
          Performance
          {activeTab === 'performance' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] rounded-t-full"></div>}
        </button>
      </div>

      {activeTab === 'management' ? (
        <>
      {/* KPI Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4 select-none">
        {/* KPI Card 1 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Active</span>
            <p className="text-lg font-black text-black dark:text-white">142</p>
            <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold mt-0.5">
              <TrendingUp size={12} />
              <span>+12%</span>
            </div>
          </div>
          <div className="p-1.5 bg-emerald-500/10 text-emerald-500 rounded-lg shrink-0">
            <CheckCircle2 size={14} />
          </div>
        </div>
        
        {/* KPI Card 2 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Expired</span>
            <p className="text-lg font-black text-black dark:text-white">89</p>
            <div className="flex items-center gap-0.5 text-red-600 dark:text-red-400 text-[10px] font-semibold mt-0.5">
              <TrendingUp size={12} />
              <span>5 today</span>
            </div>
          </div>
          <div className="p-1.5 bg-red-500/10 text-red-500 rounded-lg shrink-0">
            <TimerOff size={14} />
          </div>
        </div>

        {/* KPI Card 3 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Redemptions</span>
            <p className="text-lg font-black text-black dark:text-white">24.1k</p>
            <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold mt-0.5">
              <TrendingUp size={12} />
              <span>+2.4k</span>
            </div>
          </div>
          <div className="p-1.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg shrink-0">
            <Gift size={14} />
          </div>
        </div>

        {/* KPI Card 4 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Revenue</span>
            <p className="text-lg font-black text-black dark:text-white">₹312k</p>
            <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold mt-0.5">
              <TrendingUp size={12} />
              <span>8% ROI</span>
            </div>
          </div>
          <div className="p-1.5 bg-blue-500/10 text-blue-500 rounded-lg shrink-0">
            <CircleDollarSign size={14} />
          </div>
        </div>

        {/* KPI Card 5 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Discounted</span>
            <p className="text-lg font-black text-black dark:text-white">₹42.5k</p>
            <div className="text-[10px] font-semibold text-black/60 dark:text-white/60 mt-0.5">Total gifted</div>
          </div>
          <div className="p-1.5 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
            <Percent size={14} />
          </div>
        </div>

        {/* KPI Card 6 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider">Most Used</span>
            <p className="text-xs font-black text-black dark:text-white truncate max-w-[80px]">PIZZA50</p>
            <div className="text-[10px] font-semibold text-black/60 dark:text-white/60 mt-0.5">4.2k times</div>
          </div>
          <div className="p-1.5 bg-purple-500/10 text-purple-500 rounded-lg shrink-0">
            <Star size={14} />
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden mb-4 shadow-sm">
        <div 
          className="p-3 flex items-center justify-between cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <div className="flex items-center gap-2 text-[var(--primary)]">
            <Filter size={14} />
            <span className="text-xs font-bold tracking-wide">Advanced Search & Filters</span>
          </div>
          <ChevronDown 
            size={14} 
            className={`text-zinc-400 transition-transform duration-300 ${filtersOpen ? 'rotate-180' : 'rotate-0'}`} 
          />
        </div>
        
        <div className={`transition-all duration-300 ease-in-out ${filtersOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-3 pb-3 border-t border-zinc-100 dark:border-zinc-800 pt-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase">Search Code / Title</label>
                <input 
                  type="text" 
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="e.g. SUMMER24" 
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-black dark:text-white focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-8 transition-all font-semibold" 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase">Status</label>
                <select 
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-black dark:text-white focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-8 transition-all font-semibold cursor-pointer"
                >
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Expired</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase">Discount Type</label>
                <select 
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-black dark:text-white focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-8 transition-all font-semibold cursor-pointer"
                >
                  <option>Any Type</option>
                  <option>Percentage</option>
                  <option>Fixed Amount</option>
                  <option>BOGO</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-bold text-black dark:text-white uppercase">Validity Period</label>
                <input 
                  type="date" 
                  name="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 text-xs text-black dark:text-white focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] outline-none h-8 transition-all font-semibold" 
                />
              </div>
            </div>
            <div className="flex justify-end mt-3 gap-2">
              <button 
                onClick={clearFilters}
                className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white font-bold text-xs px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Cards List */}
          <CouponList 
            filters={filters} 
            coupons={coupons}
            onEdit={handleEditClick}
            onView={handleViewClick}
            onExtendLimit={handleExtendLimit}
            showRecommendation={showRecommendation}
            onDismissRecommendation={() => setShowRecommendation(false)}
          />
        </>
      ) : (
        <CouponAnalysis />
      )}
      
      <CreateCoupon isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      <EditCoupon 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        coupon={selectedCoupon} 
        onSave={handleSaveCoupon} 
      />
      <CouponDetails 
        isOpen={isViewModalOpen} 
        onClose={() => setIsViewModalOpen(false)} 
        coupon={selectedCoupon} 
      />
    </div>
  );
}
