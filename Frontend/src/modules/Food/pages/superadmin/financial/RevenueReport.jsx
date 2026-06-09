import React, { useState, useEffect } from 'react';
import { Calendar, Map, Store, Download, Plus, Search, TrendingUp, DollarSign } from 'lucide-react';
import RevenueData from './RevenueData';
import RevenueReportDetails from './RevenueReportDetails';
import RevenueForecasting from './RevenueForecasting';
import RevenueAuditing from './RevenueAuditing';

export default function RevenueReport() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState(252); // 4m 12s in seconds
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'forecasting' | 'auditing'

  // Auto-Refresh Timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        setCurrentTime(new Date());
        return 300; // Reset to 5m
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins}m ${secs}s`;
  };

  if (showDetails) {
    return <RevenueReportDetails onBack={() => setShowDetails(false)} />;
  }

  return (
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto w-full space-y-8 min-h-screen animate-fade-in relative pb-24">
      
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            Revenue Reports
          </h2>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">Executive Financial Intelligence</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-xl w-full sm:w-auto">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'overview' ? 'bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Historical
          </button>
          <button 
            onClick={() => setActiveTab('forecasting')}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'forecasting' ? 'bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Forecasting
          </button>
          <button 
            onClick={() => setActiveTab('auditing')}
            className={`flex-1 sm:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'auditing' ? 'bg-white dark:bg-zinc-900 text-[var(--primary)] shadow-sm' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
          >
            Auditing
          </button>
        </div>
      </header>

      {activeTab === 'forecasting' ? (
        <RevenueForecasting />
      ) : activeTab === 'auditing' ? (
        <RevenueAuditing />
      ) : (
        <>
          {/* Sticky Filter Bar */}
          <section className="sticky top-[72px] z-30 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 flex flex-wrap gap-4 items-center justify-between shadow-sm">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 cursor-pointer hover:border-[var(--primary)] transition-all">
            <Calendar size={16} className="text-zinc-500 dark:text-zinc-400" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Last 30 Days</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 cursor-pointer hover:border-[var(--primary)] transition-all">
            <Map size={16} className="text-zinc-500 dark:text-zinc-400" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">All Regions</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 cursor-pointer hover:border-[var(--primary)] transition-all">
            <Store size={16} className="text-zinc-500 dark:text-zinc-400" />
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">All Stores</span>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none items-center justify-center flex gap-2 px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors font-bold text-sm bg-zinc-100 dark:bg-zinc-800 sm:bg-transparent rounded-lg">
            <Download size={16} />
            Export CSV
          </button>
          <button 
            onClick={() => setShowDetails(true)}
            className="flex-1 sm:flex-none bg-[var(--primary)] text-white px-5 py-2 rounded-lg font-bold text-sm shadow-sm hover:brightness-110 active:scale-95 transition-all"
          >
            Detailed Analysis
          </button>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4">
        {/* KPI 1: Gross Revenue */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)]/30 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Gross Revenue</span>
            <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-[10px] font-bold">+12.4%</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹2.45Cr</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">vs last period</p>
          </div>
          <div className="h-8 w-full overflow-hidden flex items-end">
            <svg className="w-full h-full stroke-emerald-500 fill-emerald-500/10 stroke-[2] drop-shadow-sm" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 25 L10 22 L20 28 L30 15 L40 18 L50 10 L60 14 L70 5 L80 12 L90 8 L100 2 V30 H0 Z" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>

        {/* KPI 2: Net Revenue */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)]/30 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Net Revenue</span>
            <span className="text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded text-[10px] font-bold">+8.5%</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹2.08Cr</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Post-deductions</p>
          </div>
          <div className="h-8 w-full overflow-hidden flex items-end">
            <svg className="w-full h-full stroke-[var(--primary)] fill-[var(--primary)]/10 stroke-[2] drop-shadow-sm" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 20 L20 22 L40 15 L60 18 L80 10 L100 5 V30 H0 Z" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>

        {/* KPI 3: Franchise Fee */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)]/30 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Franchise Fee</span>
            <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-[10px] font-bold">+15.2%</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹1.82Cr</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Store collections</p>
          </div>
          <div className="h-8 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full mt-auto flex overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[75%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 4: Commission */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)]/30 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Commission</span>
            <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-[10px] font-bold">+4.2%</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹26.4L</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Service fee share</p>
          </div>
          <div className="h-8 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full mt-auto flex overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-zinc-400 dark:bg-zinc-500 w-[40%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 5: Refunds */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-error/20 dark:border-rose-900/30 rounded-xl shadow-sm hover:border-error/50 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Refunds</span>
            <span className="text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded text-[10px] font-bold">-2.1% trend</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹5.25L</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Disputes & Cancellations</p>
          </div>
          <div className="h-8 w-full overflow-hidden flex items-end">
            <svg className="w-full h-full stroke-rose-500 fill-rose-500/10 stroke-[2] drop-shadow-sm" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 5 L20 12 L40 8 L60 18 L80 15 L100 25 V30 H0 Z" vectorEffect="non-scaling-stroke"></path>
            </svg>
          </div>
        </div>

        {/* KPI 6: Tax */}
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:border-[var(--primary)]/30 transition-all group flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Tax (GST)</span>
            <span className="text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-[10px] font-bold">Neutral</span>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">₹21.8L</h3>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">Total tax collected</p>
          </div>
          <div className="flex gap-1 mt-auto pb-3">
            <div className="w-full h-1.5 bg-[var(--primary)] rounded-full"></div>
            <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Line Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Revenue Trends</h3>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">Gross vs Net Revenue performance across 7 weeks</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Gross</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400">Net</span>
              </div>
            </div>
          </div>
          
          <div className="h-[250px] w-full relative">
            {/* Simulated Chart Grid */}
            <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-zinc-200 dark:border-zinc-800 pb-6 pl-2">
              <div className="border-t border-zinc-100 dark:border-zinc-800/50 w-full h-0"></div>
              <div className="border-t border-zinc-100 dark:border-zinc-800/50 w-full h-0"></div>
              <div className="border-t border-zinc-100 dark:border-zinc-800/50 w-full h-0"></div>
              <div className="border-t border-zinc-100 dark:border-zinc-800/50 w-full h-0"></div>
            </div>
            
            {/* SVG Chart Lines */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pb-6 pl-2" viewBox="0 0 700 300" preserveAspectRatio="none">
              {/* Net Line */}
              <polyline fill="none" points="0,200 100,180 200,210 300,140 400,160 500,100 600,120 700,50" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke" className="dark:stroke-zinc-600"></polyline>
              {/* Gross Line */}
              <polyline fill="none" points="0,180 100,150 200,170 300,100 400,120 500,60 600,80 700,20" stroke="var(--primary)" strokeLinecap="round" strokeWidth="4" vectorEffect="non-scaling-stroke"></polyline>
              {/* Points */}
              <circle cx="300" cy="100" fill="var(--primary)" r="5" stroke="#fff" strokeWidth="2" className="dark:stroke-zinc-900"></circle>
              <circle cx="500" cy="60" fill="var(--primary)" r="5" stroke="#fff" strokeWidth="2" className="dark:stroke-zinc-900"></circle>
              <circle cx="700" cy="20" fill="var(--primary)" r="5" stroke="#fff" strokeWidth="2" className="dark:stroke-zinc-900"></circle>
            </svg>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-2">
              <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span>
            </div>
          </div>
        </div>

        {/* Payment Distribution Donut */}
        <div className="bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-6">Payment Methods</h3>
          
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              {/* Donut Segments */}
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="var(--primary)" strokeDasharray="42 58" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#71717a" strokeDasharray="28 72" strokeDashoffset="-42" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#d4d4d8" strokeDasharray="15 85" strokeDashoffset="-70" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#3b82f6" strokeDasharray="10 90" strokeDashoffset="-85" strokeWidth="4"></circle>
              <circle cx="18" cy="18" fill="transparent" r="15.9" stroke="#e4e4e7" strokeDasharray="5 95" strokeDashoffset="-95" strokeWidth="4"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">100%</span>
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Volume</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]"></div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">UPI</span>
              </div>
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">42%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-500"></div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Credit Card</span>
              </div>
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Debit Card</span>
              </div>
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">15%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Cash</span>
              </div>
              <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">10%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Regions & Top Stores */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Regional Heat Map Style Bar Chart */}
        <div className="bg-white dark:bg-zinc-900 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Regional Performance</h3>
            <button className="text-xs text-[var(--primary)] font-bold hover:underline">Map View</button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">North Region</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono font-medium text-xs">₹82.4L (Lead)</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[85%] rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">South Region</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono font-medium text-xs">₹76.1L</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[78%] rounded-full opacity-80"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">West Region</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono font-medium text-xs">₹48.9L</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[52%] rounded-full opacity-60"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">East Region</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono font-medium text-xs">₹37.6L</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[var(--primary)] w-[38%] rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Store Ranking Table (Extracted Component) */}
        <div className="h-full">
          <RevenueData />
        </div>
      </section>
      </>
      )}

      {/* Footer */}
      <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Generated on {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} • Refreshing in <span className="font-mono text-[var(--primary)] font-bold">{formatTimeLeft()}</span>
        </p>
      </footer>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 group z-50 transition-all shadow-[var(--primary)]/30">
        <Plus size={24} />
        <span className="absolute right-full mr-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          New Audit Ticket
        </span>
      </button>

    </div>
  );
}
