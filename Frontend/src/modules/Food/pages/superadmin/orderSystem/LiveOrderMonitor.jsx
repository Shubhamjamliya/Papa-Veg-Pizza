import React, { useState, useEffect } from 'react';
import { 
  Filter, Maximize, Activity, ChefHat, Bike, AlertTriangle, 
  CheckCircle2, MapPin, Timer, UserX, Package 
} from 'lucide-react';
import { liveOrderStats, liveOrders, topStores, criticalAlerts, useDebounce } from './LiveOrderData';
import LiveOrderDetails from './LiveOrderDetails';
import LiveOrderTracking from './LiveOrderTracking';

export default function LiveOrderMonitor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  
  const [isStoreDetailsOpen, setIsStoreDetailsOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [selectedTrackingOrder, setSelectedTrackingOrder] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Simulation of real-time KPI updates
  const [activeOrders, setActiveOrders] = useState(liveOrderStats.activeOrders.count);
  const [preparing, setPreparing] = useState(liveOrderStats.preparing.count);
  const [delivery, setDelivery] = useState(liveOrderStats.delivery.count);
  const [alerts, setAlerts] = useState(liveOrderStats.criticalAlerts.count);

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = ['kpi'];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      if (randomAction === 'kpi') {
        const kpis = ['activeOrders', 'preparing', 'delivery', 'alerts'];
        const randomKpiId = kpis[Math.floor(Math.random() * kpis.length)];
        
        const delta = Math.random() > 0.5 ? 1 : -1;
        if (randomKpiId === 'activeOrders') setActiveOrders(prev => Math.max(0, prev + delta));
        if (randomKpiId === 'preparing') setPreparing(prev => Math.max(0, prev + delta));
        if (randomKpiId === 'delivery') setDelivery(prev => Math.max(0, prev + delta));
        if (randomKpiId === 'alerts') setAlerts(prev => Math.max(0, prev + delta));
      }
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-6 pb-24 lg:pb-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes header-pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }
        .header-live-pulse { animation: header-pulse 2s infinite ease-in-out; }
        @keyframes blink-green {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        .status-blink { animation: blink-green 1.5s infinite step-end; }
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        .shimmer-effect {
            background: linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%);
            background-size: 200% 100%;
            animation: shimmer 3s infinite linear;
            pointer-events: none;
            position: absolute;
            inset: 0;
            z-index: 10;
        }
        @keyframes slide-in-right {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .alert-entrance { animation: slide-in-right 0.5s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
            .header-live-pulse, .status-blink, .shimmer-effect, .alert-entrance {
                animation: none !important;
                transform: none !important;
            }
        }
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e4beba; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #5b403d; }
        .order-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .order-card:hover { transform: translateY(-4px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
      `}} />

      {/* Dashboard Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Live Monitoring</h2>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full border border-red-200 dark:border-red-900/50">
            <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 header-live-pulse"></span>
            <span className="text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">Live</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500 status-blink"></span>
            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold">Connected</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search Orders..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="px-4 py-2 w-full sm:w-64 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)] outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">
            <Filter size={18} />
            <span className="text-sm font-semibold hidden sm:inline">Filters</span>
          </button>
          <button className="flex items-center justify-center h-9 w-9 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">
            <Maximize size={18} />
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <div className="shimmer-effect"></div>
          <div className="flex justify-between items-start mb-2 relative z-20">
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Active Orders</span>
            <Activity size={20} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="flex items-end gap-2 relative z-20 mt-2">
            <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-none">{activeOrders}</span>
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-1">{liveOrderStats.activeOrders.trend}</span>
          </div>
        </div>
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <div className="shimmer-effect"></div>
          <div className="flex justify-between items-start mb-2 relative z-20">
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Preparing</span>
            <ChefHat size={20} className="text-[var(--primary)]" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-none relative z-20 mt-2">{preparing}</div>
        </div>
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <div className="shimmer-effect"></div>
          <div className="flex justify-between items-start mb-2 relative z-20">
            <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Out for Delivery</span>
            <Bike size={20} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-none relative z-20 mt-2">{delivery}</div>
        </div>
        <div className="relative overflow-hidden bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-200 dark:border-red-900/30 shadow-sm flex flex-col justify-between">
          <div className="shimmer-effect opacity-30"></div>
          <div className="flex justify-between items-start mb-2 relative z-20">
            <span className="text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">Critical Alerts</span>
            <AlertTriangle size={20} className="text-red-600 dark:text-red-500 header-live-pulse" />
          </div>
          <div className="text-3xl font-bold text-red-700 dark:text-red-400 leading-none relative z-20 mt-2">{alerts}</div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Live Order Board (Bento Style) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Live Order Board</h3>
              <div className="flex gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
                <button 
                  onClick={() => setFilterType('All')}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filterType === 'All' ? 'bg-white dark:bg-zinc-700 text-[var(--primary)] shadow-sm' : 'text-zinc-500 dark:text-zinc-400'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilterType('Priority')}
                  className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${filterType === 'Priority' ? 'bg-white dark:bg-zinc-700 text-[var(--primary)] shadow-sm' : 'text-zinc-500 dark:text-zinc-400'}`}
                >
                  Priority
                </button>
              </div>
            </div>
            
            <div className="flex overflow-x-auto gap-4 pb-4 custom-scrollbar snap-x">
              {/* New Orders Column */}
              <div className="min-w-[280px] flex-shrink-0 snap-start">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-400"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">New ({liveOrders.new.length})</span>
                </div>
                <div className="flex flex-col gap-3">
                  {liveOrders.new.map((order, i) => (
                    <div key={i} className="order-card p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[var(--primary)] transition-colors cursor-pointer">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{order.id}</span>
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold timestamp">{order.time}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-1 mb-3">{order.items}</p>
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${order.type === 'VIP' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'}`}>
                          {order.type}
                        </span>
                        <span className="text-sm font-bold text-[var(--primary)]">{order.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparing Column */}
              <div className="min-w-[280px] flex-shrink-0 snap-start">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Preparing ({liveOrders.preparing.length})</span>
                </div>
                <div className="flex flex-col gap-3">
                  {liveOrders.preparing.map((order, i) => (
                    <div key={i} className="order-card p-3.5 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl cursor-pointer">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{order.id}</span>
                        <span className="text-[var(--primary)] text-xs font-semibold">{order.timeInPrep}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-1 mb-3">{order.items}</p>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[var(--primary)] h-full" style={{width: order.progress}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready Column */}
              <div className="min-w-[280px] flex-shrink-0 snap-start">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Ready ({liveOrders.ready.length})</span>
                </div>
                <div className="flex flex-col gap-3">
                  {liveOrders.ready.map((order, i) => (
                    <div key={i} className="order-card p-3.5 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl cursor-pointer">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{order.id}</span>
                        <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-1 mb-3">{order.items}</p>
                      <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold active:scale-95 transition-all">Dispatch</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Column */}
              <div className="min-w-[280px] flex-shrink-0 snap-start">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Delivery ({liveOrders.delivery.length})</span>
                </div>
                <div className="flex flex-col gap-3">
                  {liveOrders.delivery.map((order, i) => (
                    <div 
                      key={i} 
                      onClick={() => { setSelectedTrackingOrder({ ...order, riderId: 'RD-992' + i }); setIsTrackingOpen(true); }}
                      className="order-card p-3.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700 cursor-pointer"
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{order.id}</span>
                        <Bike size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-3">ETA: {order.eta} • Rider: {order.rider}</p>
                      <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 w-fit px-2 py-1 rounded">
                        <MapPin size={12} />
                        <span className="text-[10px] font-bold">{order.distance}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Store Performance Mini-Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Top Store Performance</h3>
              <span className="text-[var(--primary)] text-sm font-bold cursor-pointer hover:underline">View All Stores</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                    <th className="py-3 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider first:rounded-tl-lg">STORE NAME</th>
                    <th className="py-3 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">ACTIVE ORDERS</th>
                    <th className="py-3 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider last:rounded-tr-lg">AVG. PREP TIME</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {topStores.map((store, i) => (
                    <tr 
                      key={i} 
                      onClick={() => { setSelectedStore(store); setIsStoreDetailsOpen(true); }}
                      className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
                    >
                      <td className="py-3 px-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{store.name}</td>
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold">
                          {store.activeOrders} Orders
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-mono text-zinc-600 dark:text-zinc-300 font-medium">{store.avgPrepTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Critical Alerts */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm h-full flex flex-col">
            <div className="p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-600 dark:text-red-500" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Critical Alerts</h3>
              </div>
              <span className="bg-red-600 text-white px-2.5 py-0.5 rounded text-xs font-bold">4</span>
            </div>
            
            <div className="p-4 md:p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
              {/* Alert Items */}
              {criticalAlerts.map((alert, i) => (
                <div key={i} className={`alert-entrance p-4 rounded-xl border-l-4 flex gap-3 shadow-sm ${
                  alert.type === 'timer' ? 'bg-red-50 dark:bg-red-900/10 border-red-500' :
                  alert.type === 'rider' ? 'bg-red-50 dark:bg-red-900/10 border-[var(--primary)]' :
                  'bg-zinc-50 dark:bg-zinc-800/50 border-zinc-400'
                }`} style={{animationDelay: `${(i+1)*0.1}s`}}>
                  {alert.type === 'timer' && <Timer size={20} className="text-red-600 dark:text-red-500 mt-0.5 shrink-0" />}
                  {alert.type === 'rider' && <UserX size={20} className="text-[var(--primary)] mt-0.5 shrink-0" />}
                  {alert.type === 'inventory' && <Package size={20} className="text-zinc-500 dark:text-zinc-400 mt-0.5 shrink-0" />}
                  
                  <div>
                    <p className={`text-sm font-bold leading-tight ${
                      alert.type === 'timer' ? 'text-red-900 dark:text-red-200' :
                      alert.type === 'rider' ? 'text-red-900 dark:text-red-200' :
                      'text-zinc-900 dark:text-zinc-100'
                    }`}>
                      {alert.id ? `Order ${alert.id} ` : ''}{alert.title}
                    </p>
                    <p className={`text-xs mt-1.5 ${
                      alert.type === 'timer' || alert.type === 'rider' ? 'text-red-800 dark:text-red-300/80' : 'text-zinc-600 dark:text-zinc-400'
                    }`}>
                      {alert.store ? `Store: ${alert.store}. ` : ''}{alert.reason}
                    </p>
                    
                    {alert.type === 'timer' && (
                      <div className="mt-3 flex gap-2">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-all">Assign Help</button>
                        <button className="bg-white dark:bg-zinc-800 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider hover:bg-red-50 dark:hover:bg-red-900/30 active:scale-95 transition-all">Notify Store</button>
                      </div>
                    )}
                    {alert.type === 'rider' && (
                      <div className="mt-3">
                        <button className="bg-[var(--primary)] hover:opacity-90 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-all">Manual Dispatch</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LiveOrderDetails 
        isOpen={isStoreDetailsOpen} 
        onClose={() => setIsStoreDetailsOpen(false)} 
        store={selectedStore} 
      />

      <LiveOrderTracking 
        isOpen={isTrackingOpen} 
        onClose={() => setIsTrackingOpen(false)} 
        order={selectedTrackingOrder} 
      />
    </div>
  );
}
