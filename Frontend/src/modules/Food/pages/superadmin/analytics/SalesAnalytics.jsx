import React, { useState } from 'react';
import {
  History, ArrowRightLeft, Calendar, Download, ChevronDown, Filter,
  ShoppingBasket, TrendingUp, Wallet, Tag, Receipt, Undo, Sparkles, Zap, IndianRupee
} from 'lucide-react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip as RechartsTooltip
} from 'recharts';

import CompareStore from './CompareStore';
import ProductPerformance from './ProductPerformance';

export default function SalesAnalytics() {
  const [dateRange, setDateRange] = useState("Oct 1 - Oct 31, 2023");
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 },
    { name: 'Jul', value: 7000 },
    { name: 'Aug', value: 6500 },
    { name: 'Sep', value: 8000 },
    { name: 'Oct', value: 7500 },
    { name: 'Nov', value: 9000 },
    { name: 'Dec', value: 8500 },
  ];

  const kpis = [
    { label: 'TOTAL REVENUE', value: '₹1.25Cr', trend: '+12%', icon: IndianRupee, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20', up: true },
    { label: 'TOTAL ORDERS', value: '45,210', trend: '+8%', icon: ShoppingBasket, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/20', up: true },
    { label: 'AOV', value: '₹478', trend: '-2%', icon: TrendingUp, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/20', up: false },
    { label: 'NET SALES', value: '₹1.08Cr', trend: '+10%', icon: Wallet, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/20', up: true },
  ];

  const subKpis = [
    { label: 'DISCOUNTS', value: '₹5.25L', icon: Tag, color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/20' },
    { label: 'TAX', value: '₹11.5L', icon: Receipt, color: 'text-sky-600 bg-sky-50 dark:bg-sky-950/20' },
    { label: 'REFUNDS', value: '₹1.80L', icon: Undo, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/20' }
  ];

  return (
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto animate-fade-down pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">Sales Analytics</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mt-1 font-medium">
            <History size={14} />
            Last Updated: Today, 14:45 PM
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setIsCompareModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm text-sm font-bold"
          >
            <ArrowRightLeft size={16} />
            <span>Compare Stores</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm text-sm font-bold">
            <Calendar size={16} />
            <span>Schedule Report</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--primary)] text-white rounded-xl hover:opacity-90 transition-opacity shadow-md text-sm font-bold">
            <Download size={16} />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[64px] z-30 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 mb-8 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-3 flex-1">
          {/* Selects */}
          <div className="relative min-w-[160px]">
            <select
              className="w-full appearance-none bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none cursor-pointer"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option>Oct 1 - Oct 31, 2023</option>
              <option>Last 7 Days</option>
              <option>Custom Range</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
          </div>

          {['India', 'All States', 'All Franchise', 'All Order Types'].map((opt, i) => (
            <div key={i} className="relative min-w-[140px]">
              <select className="w-full appearance-none bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none cursor-pointer">
                <option>{opt}</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            </div>
          ))}

          <button className="p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm">
            <Filter size={18} />
          </button>
        </div>
        <div className="flex items-center gap-3 pl-4 border-l border-zinc-200 dark:border-zinc-800">
          <button className="px-4 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-bold text-sm transition-colors">Reset</button>
          <button className="px-6 py-2.5 bg-[var(--primary)] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md">Apply</button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)] transition-colors group cursor-default">
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2.5 rounded-xl ${kpi.color}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center ${kpi.up ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20' : 'text-rose-600 bg-rose-50 dark:bg-rose-950/20'}`}>
                  {kpi.trend}
                </span>
              </div>
              <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1.5 tracking-wider">{kpi.label}</h3>
              <p className="text-2xl font-black text-zinc-900 dark:text-zinc-50 mb-3">{kpi.value}</p>
              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--primary)] rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          );
        })}
        {subKpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={`sub-${idx}`} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className={`p-2.5 rounded-xl ${kpi.color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 mb-1.5 tracking-wider">{kpi.label}</h3>
              <p className="text-2xl font-black text-zinc-900 dark:text-zinc-50">{kpi.value}</p>
            </div>
          );
        })}
      </div>

      {/* Main Data Visualizations */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Revenue Trend Chart */}
        <div className="col-span-12 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Revenue Trend Over Time</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Comparative analysis of gross sales volume</p>
            </div>
            <div className="flex bg-zinc-50 dark:bg-zinc-950 p-1 rounded-xl">
              {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((period) => (
                <button key={period} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${period === 'Monthly' ? 'bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}>
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val / 1000}k`} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--tw-colors-zinc-900)', color: 'white' }} />
                <Area type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">Regional Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden h-[280px] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
              {/* Mock Map Image */}
              <div className="absolute inset-0 opacity-50 dark:opacity-30 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex gap-4">
                  <span className="w-4 h-4 bg-[var(--primary)] rounded-full animate-pulse"></span>
                  <span className="w-3 h-3 bg-[var(--primary)]/60 rounded-full"></span>
                </div>
                <span className="bg-zinc-900 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider shadow-lg">LIVE METRICS</span>
              </div>
            </div>
            <div className="overflow-x-auto pr-2">
              <table className="w-full text-left">
                <thead className="border-b border-zinc-200 dark:border-zinc-800">
                  <tr>
                    <th className="pb-3 text-xs uppercase tracking-wider text-zinc-500 font-bold">Region</th>
                    <th className="pb-3 text-xs uppercase tracking-wider text-zinc-500 font-bold text-right">Revenue</th>
                    <th className="pb-3 text-xs uppercase tracking-wider text-zinc-500 font-bold text-right">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
                  {[
                    { region: 'North India', rev: '₹42.5L', growth: '+15.2%', up: true },
                    { region: 'West India', rev: '₹38.2L', growth: '+8.4%', up: true },
                    { region: 'South India', rev: '₹29.8L', growth: '-2.1%', up: false },
                    { region: 'East India', rev: '₹14.5L', growth: '+4.3%', up: true },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                      <td className="py-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">{row.region}</td>
                      <td className="py-4 text-sm font-black text-right text-zinc-700 dark:text-zinc-300">{row.rev}</td>
                      <td className={`py-4 text-sm font-black text-right ${row.up ? 'text-emerald-500' : 'text-rose-500'}`}>{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Category Mix */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-8">Category Revenue</h3>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 relative mb-10 mt-4 shadow-xl rounded-full">
              <div className="absolute inset-0 rounded-full border-[18px] border-emerald-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[18px] border-[var(--primary)]" style={{ clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)' }}></div>
              <div className="absolute inset-[18px] bg-white dark:bg-zinc-900 rounded-full flex flex-col items-center justify-center shadow-inner">
                <p className="text-xl font-black text-zinc-900 dark:text-zinc-50">₹1.25Cr</p>
                <p className="text-[10px] text-zinc-400 font-bold tracking-wider mt-1">GROSS REVENUE</p>
              </div>
            </div>
            <div className="w-full space-y-4 px-2">
              {[
                { label: 'Veg Pizzas', value: '55%', color: 'bg-emerald-500' },
                { label: 'Non-Veg Pizzas', value: '32%', color: 'bg-[var(--primary)]' },
                { label: 'Sides & Drinks', value: '13%', color: 'bg-zinc-400' },
              ].map((cat, i) => (
                <div key={i} className="flex justify-between items-center text-sm p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800/50">
                  <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-semibold">
                    <span className={`w-3 h-3 rounded-full ${cat.color} shadow-sm`}></span>
                    {cat.label}
                  </div>
                  <span className="font-black text-zinc-900 dark:text-zinc-100">{cat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Store Performance Tables */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 xl:col-span-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Top Performing Stores</h3>
            <button className="text-[var(--primary)] font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead className="bg-zinc-100/50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Store Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Revenue</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Orders</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
                {[
                  { name: 'CP New Delhi', rank: 1, rev: '₹12.45L', orders: '4,520', health: 'bg-emerald-500' },
                  { name: 'Koramangala, BLR', rank: 2, rev: '₹11.20L', orders: '3,890', health: 'bg-emerald-500' },
                  { name: 'Bandra West, MUM', rank: 3, rev: '₹9.80L', orders: '3,120', health: 'bg-amber-500' },
                ].map((store, i) => (
                  <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{store.name}</span>
                        {store.rank && <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-bold border border-emerald-200 dark:border-emerald-800">#{store.rank}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-black text-zinc-900 dark:text-zinc-100">{store.rev}</td>
                    <td className="px-6 py-4 text-right font-semibold text-zinc-700 dark:text-zinc-300">{store.orders}</td>
                    <td className="px-6 py-4 text-center"><span className={`w-2.5 h-2.5 rounded-full ${store.health} inline-block shadow-sm`}></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-bold text-rose-600 dark:text-rose-500">Lowest Performing Stores</h3>
            <button className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 font-bold text-sm">Audit Stores</button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead className="bg-zinc-100/50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Store Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Revenue</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Growth %</th>
                  <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-center">Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
                {[
                  { name: 'Sector 12, GGN', rev: '₹1.20L', growth: '-12.4%', health: 'bg-rose-500' },
                  { name: 'Salt Lake, KOL', rev: '₹1.45L', growth: '-8.1%', health: 'bg-rose-500' },
                  { name: 'Anna Nagar, CHE', rev: '₹1.80L', growth: '-2.3%', health: 'bg-amber-500' },
                ].map((store, i) => (
                  <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-4 font-bold text-rose-600 dark:text-rose-400">{store.name}</td>
                    <td className="px-6 py-4 text-right font-black text-zinc-900 dark:text-zinc-100">{store.rev}</td>
                    <td className={`px-6 py-4 text-right font-bold ${store.growth.startsWith('-') ? 'text-rose-500' : 'text-emerald-500'}`}>{store.growth}</td>
                    <td className="px-6 py-4 text-center"><span className={`w-2.5 h-2.5 rounded-full ${store.health} inline-block shadow-sm`}></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Product & Advanced Insights Section */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Selling Products Bento */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">Top Selling Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { name: 'Classic Margherita', units: '12,450', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400&fm=webp' },
                { name: 'Pepperoni Feast', units: '9,210', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400&fm=webp' },
                { name: 'Farmhouse Special', units: '7,840', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=400&fm=webp' }
              ].map((prod, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedProduct(prod)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm cursor-pointer"
                >
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent flex flex-col justify-end p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold text-sm leading-tight mb-1">{prod.name}</p>
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">{prod.units} Units Sold</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hourly Sales Heatmap */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm col-span-1 md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Hourly Sales Heatmap</h3>
              <div className="flex items-center gap-3 text-xs text-zinc-500 font-bold bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-800">
                <span>Low</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-[var(--primary)] opacity-20 rounded-sm"></div>
                  <div className="w-3 h-3 bg-[var(--primary)] opacity-50 rounded-sm"></div>
                  <div className="w-3 h-3 bg-[var(--primary)] opacity-100 rounded-sm"></div>
                </div>
                <span>High</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="min-w-[600px] pb-2">
                <div className="flex mb-3">
                  <div className="w-14"></div>
                  <div className="flex-1 flex justify-between text-[10px] uppercase font-bold text-zinc-400 px-1">
                    <span>10 AM</span><span>12 PM</span><span>02 PM</span><span>04 PM</span><span>06 PM</span><span>08 PM</span><span>10 PM</span><span>12 AM</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'MONDAY', data: [0.1, 0.1, 0.3, 0.4, 0.3, 0.6, 0.8, 0.8, 0.6, 0.4] },
                    { day: 'FRIDAY', data: [0.3, 0.4, 0.6, 0.8, 0.9, 0.9, 0.9, 0.9, 0.6, 0.4] },
                    { day: 'SUNDAY', data: [0.4, 0.6, 0.8, 0.9, 0.9, 0.6, 0.4, 0.3, 0.3, 0.1] },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-14 text-[10px] font-bold text-zinc-500">{row.day}</span>
                      <div className="flex-1 h-8 flex gap-1">
                        {row.data.map((val, j) => (
                          <div key={j} className="flex-1 rounded-[4px] bg-[var(--primary)] transition-opacity hover:opacity-100 cursor-pointer" style={{ opacity: Math.max(0.1, val) }}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations & Quick Help */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-zinc-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden flex-1 border border-zinc-800">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 text-emerald-400">
                <Zap size={20} className="fill-current" />
                <h3 className="text-lg font-bold text-white">AI Business Insights</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl backdrop-blur-sm cursor-default">
                  <p className="text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                    Dynamic Pricing Opportunity
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">Orders for 'Pepperoni Feast' spike by 40% on Friday nights. Consider a 10% price premium between 7PM-9PM.</p>
                  <button className="text-emerald-400 font-bold text-xs border-b border-emerald-400/30 pb-0.5 hover:text-emerald-300 hover:border-emerald-300 transition-colors">Apply Optimization</button>
                </div>
                <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl backdrop-blur-sm cursor-default">
                  <p className="text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                    Stock Shortage Alert
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">Mozzarella consumption in North India is outpacing supply by 18%. Reorder 2 days earlier than scheduled.</p>
                  <button className="text-emerald-400 font-bold text-xs border-b border-emerald-400/30 pb-0.5 hover:text-emerald-300 hover:border-emerald-300 transition-colors">Contact Suppliers</button>
                </div>
                <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 p-4 rounded-xl backdrop-blur-sm cursor-default">
                  <p className="text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                    Churn Risk Detected
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">3 Franchisees in West region have a 15% drop in AOV. Recommend local loyalty campaign rollout.</p>
                  <button className="text-emerald-400 font-bold text-xs border-b border-emerald-400/30 pb-0.5 hover:text-emerald-300 hover:border-emerald-300 transition-colors">View Stores</button>
                </div>
              </div>
            </div>
            {/* Background aesthetic blur */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-5">Export Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Include Customer Metadata', defaultChecked: true },
                { label: 'Exclude Tax Details', defaultChecked: false },
                { label: 'Daily Aggregation', defaultChecked: true },
              ].map((setting, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" defaultChecked={setting.defaultChecked} className="peer w-5 h-5 appearance-none rounded border-2 border-zinc-300 dark:border-zinc-700 checked:bg-[var(--primary)] checked:border-[var(--primary)] transition-all cursor-pointer" />
                    <svg className="absolute w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 p-0.5 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{setting.label}</span>
                </label>
              ))}
              <button className="w-full mt-4 py-3 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm shadow-sm">
                Configure Automation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CompareStore isOpen={isCompareModalOpen} onClose={() => setIsCompareModalOpen(false)} />
      <ProductPerformance isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
    </div>
  );
}
