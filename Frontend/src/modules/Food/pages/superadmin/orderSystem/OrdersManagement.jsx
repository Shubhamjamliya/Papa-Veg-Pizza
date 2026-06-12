import React, { useState, useMemo } from 'react';
import { 
  Download, Plus, ShoppingCart, TrendingUp, Calendar, Timer, 
  CheckCircle2, XCircle, TrendingDown, CreditCard, IndianRupee, 
  Hourglass, Filter, ChevronDown, Search, Eye, ChevronLeft, 
  ChevronRight, Utensils, Truck, ArrowRight 
} from 'lucide-react';
import { initialOrders, useDebounce } from './OrdersData';
import OrderDetails from './OrderDetails';
import { UpdateStatusModal, AssignRiderModal } from './OrderModals';
import AddManualOrder from './AddManualOrder';
import LogisticsMap from './LogisticsMap';

export default function OrdersManagement() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [storeFilter, setStoreFilter] = useState('All Stores');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isUpdateStatusModalOpen, setIsUpdateStatusModalOpen] = useState(false);
  const [isAssignRiderModalOpen, setIsAssignRiderModalOpen] = useState(false);
  const [isAddManualOrderOpen, setIsAddManualOrderOpen] = useState(false);
  const [isLogisticsMapOpen, setIsLogisticsMapOpen] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredOrders = useMemo(() => {
    return initialOrders.filter(order => {
      const matchesSearch = 
        order.id.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
        order.customerName.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All Statuses' || order.status === statusFilter;
      const matchesStore = storeFilter === 'All Stores' || order.store === storeFilter;

      return matchesSearch && matchesStatus && matchesStore;
    });
  }, [debouncedSearchTerm, statusFilter, storeFilter]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Active
          </span>
        );
      case 'Out for Delivery':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium text-xs">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Out for Delivery
          </span>
        );
      case 'Delivered':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
            <CheckCircle2 size={14} className="text-emerald-500" /> Delivered
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-medium text-xs">
            <XCircle size={14} /> Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 pb-24 lg:pb-8 w-full">
      {/* Page Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Orders Management</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Monitor and manage all franchise orders in real-time.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
            <Download size={18} /> Export Reports
          </button>
          <button 
            onClick={() => setIsAddManualOrderOpen(true)}
            className="bg-[var(--primary)] text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 shadow-sm transition-all active:scale-95"
          >
            <Plus size={18} /> Manual Order
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[var(--primary)]">
              <ShoppingCart size={20} />
            </div>
            <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">+12.5% <TrendingUp size={14} /></span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Total Orders</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1,284</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[var(--primary)]">
              <Calendar size={20} />
            </div>
            <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">+4.2% <TrendingUp size={14} /></span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Today</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">156</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
              <Timer size={20} className="animate-pulse" />
            </div>
            <span className="text-zinc-500 dark:text-zinc-400 font-medium text-xs">Live</span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Active</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">24</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-emerald-600">
              <CheckCircle2 size={20} />
            </div>
            <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">98% Success</span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Delivered</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1,210</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
              <XCircle size={20} />
            </div>
            <span className="text-red-600 font-medium text-xs flex items-center gap-1">-2% <TrendingDown size={14} /></span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Cancelled</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">18</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-blue-600">
              <CreditCard size={20} />
            </div>
            <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">+8% <TrendingUp size={14} /></span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">AOV</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">₹452.00</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[var(--primary)]">
              <IndianRupee size={20} />
            </div>
            <span className="text-emerald-600 font-medium text-xs flex items-center gap-1">+18% <TrendingUp size={14} /></span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Revenue</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">₹70,450</h4>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400">
              <Hourglass size={20} />
            </div>
            <span className="text-zinc-500 dark:text-zinc-400 font-medium text-xs">High Priority</span>
          </div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Pending</p>
          <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">06</h4>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl mb-6 border border-zinc-200 dark:border-zinc-800">
        <div 
          className="flex items-center justify-between cursor-pointer mb-2" 
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
            <Filter size={20} />
            <h3 className="text-base font-semibold">Advanced Filters</h3>
          </div>
          <ChevronDown 
            size={20} 
            className={`text-zinc-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
          />
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Date Range</label>
              <input 
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none" 
                type="date"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Order Status</label>
              <select 
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Out for Delivery</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Store Location</label>
              <select 
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                value={storeFilter}
                onChange={(e) => setStoreFilter(e.target.value)}
              >
                <option>All Stores</option>
                <option>Mumbai - Bandra</option>
                <option>Delhi - CP</option>
                <option>Bangalore - Indiranagar</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Franchise Group</label>
              <select className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none">
                <option>All Groups</option>
                <option>North India Ops</option>
                <option>South Region Pvt</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Orders Table Container */}
        <div className="xl:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Recent Orders</h3>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                <input 
                  className="pl-9 pr-4 py-1.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-full text-sm text-zinc-800 dark:text-zinc-200 focus:ring-1 focus:ring-[var(--primary)] outline-none w-full sm:w-64 transition-all" 
                  placeholder="Search orders..." 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-zinc-50 dark:bg-zinc-900/80 sticky top-0">
                <tr>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 uppercase tracking-wider">Order #</th>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 uppercase tracking-wider">Customer</th>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 uppercase tracking-wider">Store</th>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 text-right uppercase tracking-wider">Amount</th>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 text-center uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 font-semibold text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 text-center uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                      <td className="px-5 py-4 font-mono text-sm text-zinc-900 dark:text-zinc-100">{order.id}</td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{order.customerName}</span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">{order.customerPhone}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-zinc-700 dark:text-zinc-300">{order.store}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100 text-right">{order.amount}</td>
                      <td className="px-5 py-4 text-center">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button 
                          className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-[var(--primary)]"
                          onClick={() => {
                            setSelectedOrder(order);
                            setIsDrawerOpen(true);
                          }}
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-5 py-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                      No orders found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-auto p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Showing {filteredOrders.length} of {initialOrders.length} orders</span>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="px-2.5 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-md">1</button>
              <button className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">2</button>
              <button className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">3</button>
              <button className="p-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Live Tracking Widget */}
        <aside className="flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Live Order Flow</h3>
              <span className="inline-flex px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-[10px] uppercase tracking-wider">Real-time</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                  <Utensils size={18} className="text-[var(--primary)]" />
                  <div className="absolute -top-1 -right-1 bg-[var(--primary)] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 font-bold">12</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Kitchen Prep</span>
                    <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">45% Capacity</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[var(--primary)] h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                  <Truck size={18} className="text-emerald-500" />
                  <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 font-bold">08</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Out for Delivery</span>
                    <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">High Traffic</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                  <CheckCircle2 size={18} className="text-blue-500" />
                  <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900 font-bold">156</div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Today's Completed</span>
                    <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">Daily Goal 80%</span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsLogisticsMapOpen(true)}
              className="w-full mt-6 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm font-semibold hover:bg-[var(--primary)] hover:text-white transition-all"
            >
              View Full Logistics Map
            </button>
          </div>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
            <img 
              alt="Pizza Branding" 
              className="w-full h-36 object-cover" 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800&h=400"
            />
            <div className="p-4">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">Weekly Promotion</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">"The Veggie Supreme" is trending in Mumbai region with 40% increase in orders.</p>
              <button className="mt-4 text-[var(--primary)] text-xs font-semibold flex items-center gap-1 hover:underline group">
                Manage Promos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Action Button (FAB) - Mobile Only Contextual */}
      <button 
        onClick={() => setIsAddManualOrderOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-[var(--primary)] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40"
      >
        <Plus size={24} />
      </button>

      {/* Order Details Drawer */}
      <OrderDetails 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        order={selectedOrder} 
        onUpdateStatus={() => setIsUpdateStatusModalOpen(true)}
        onAssignRider={() => setIsAssignRiderModalOpen(true)}
      />

      {/* Modals */}
      <UpdateStatusModal 
        isOpen={isUpdateStatusModalOpen} 
        onClose={() => setIsUpdateStatusModalOpen(false)} 
        order={selectedOrder} 
      />
      <AssignRiderModal 
        isOpen={isAssignRiderModalOpen} 
        onClose={() => setIsAssignRiderModalOpen(false)} 
        order={selectedOrder} 
      />
      <AddManualOrder 
        isOpen={isAddManualOrderOpen} 
        onClose={() => setIsAddManualOrderOpen(false)} 
      />
      <LogisticsMap 
        isOpen={isLogisticsMapOpen} 
        onClose={() => setIsLogisticsMapOpen(false)} 
      />
    </div>
  );
}
