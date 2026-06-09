import React, { useState, useEffect } from 'react';
import { ArrowLeft, MoreVertical, Eye, MousePointerClick, Percent, ShoppingCart, TrendingUp, TrendingDown, Settings, Link as LinkIcon, Calendar, MapPin, PauseCircle, Edit } from 'lucide-react';

export default function BannerPreview({ banner, onBack }) {
  const [previewMode, setPreviewMode] = useState('Mobile');
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimateBars(true), 100);
  }, []);

  // Mock data for the chart based on HTML
  const chartData = [
    { day: 'Mon', hImp: 'h-20', hClk: 'h-12' },
    { day: 'Tue', hImp: 'h-24', hClk: 'h-14' },
    { day: 'Wed', hImp: 'h-32', hClk: 'h-20' },
    { day: 'Thu', hImp: 'h-28', hClk: 'h-16' },
    { day: 'Fri', hImp: 'h-36', hClk: 'h-24' },
    { day: 'Sat', hImp: 'h-20', hClk: 'h-12' },
    { day: 'Sun', hImp: 'h-24', hClk: 'h-14' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24 animate-in fade-in slide-in-from-right-4 duration-300 relative z-50">
      {/* Top App Bar */}
      <header className="w-full sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center h-16 px-4 md:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center">
            <ArrowLeft size={24} className="text-[var(--primary)]" />
          </button>
          <h1 className="text-xl font-bold text-[var(--primary)] truncate max-w-[200px] md:max-w-md">{banner?.title || 'Weekend BOGO Blowout'}</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {banner?.status || 'Active'}
          </span>
          <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <MoreVertical size={20} className="text-zinc-500" />
          </button>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-5xl mx-auto space-y-6">
        {/* Preview Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Banner Preview</h2>
            <div className="flex bg-zinc-200 dark:bg-zinc-800 p-1 rounded-lg">
              <button 
                onClick={() => setPreviewMode('Mobile')}
                className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all shadow-sm ${previewMode === 'Mobile' ? 'bg-white dark:bg-zinc-900 text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
              >
                Mobile
              </button>
              <button 
                onClick={() => setPreviewMode('Desktop')}
                className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all shadow-sm ${previewMode === 'Desktop' ? 'bg-white dark:bg-zinc-900 text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
              >
                Desktop
              </button>
            </div>
          </div>
          
          <div className={`relative mx-auto rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-center transition-all duration-500 ${previewMode === 'Mobile' ? 'w-full md:w-[375px] aspect-[9/16] md:aspect-[4/5]' : 'w-full aspect-[16/9] md:aspect-[21/9]'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <img 
              src={banner?.image || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp"} 
              alt="Preview" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 p-6 w-full h-full flex flex-col justify-center items-start text-white">
              <span className="bg-[var(--primary)] px-2 py-1 rounded text-[10px] font-bold mb-2 uppercase shadow-sm">
                LIMITED TIME
              </span>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-2 tracking-tight">
                Buy 1 Get 1
              </h3>
              <p className="text-sm md:text-base opacity-90 mb-6 max-w-[220px] md:max-w-xs font-medium">
                Signature Pizzas only. Every Saturday & Sunday.
              </p>
              <button className="bg-[var(--primary)] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--primary)]/90 active:scale-95 transition-all">
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* Analytics Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Impressions', val: '245,670', trend: '+12%', icon: Eye, color: 'text-emerald-600', TIcon: TrendingUp },
            { label: 'Clicks', val: '12,780', trend: '+8.4%', icon: MousePointerClick, color: 'text-emerald-600', TIcon: TrendingUp },
            { label: 'CTR', val: banner?.ctr || '5.2%', trend: '-0.2%', icon: Percent, color: 'text-red-600', TIcon: TrendingDown },
            { label: 'Conversions', val: '840', trend: '+15.1%', icon: ShoppingCart, color: 'text-emerald-600', TIcon: TrendingUp },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-32 hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1.5 uppercase tracking-wider">
                <stat.icon size={14} className="text-zinc-400" /> {stat.label}
              </span>
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{stat.val}</div>
                <div className={`text-xs flex items-center gap-1 font-semibold mt-1 ${stat.color}`}>
                  <stat.TIcon size={12} /> {stat.trend}
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Charts */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Performance Trends</h3>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Last 7 Days</span>
            </div>
            
            <div className="h-48 flex items-end justify-between gap-2 px-2 pt-6">
              {chartData.map((data, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <div className={`w-full max-w-[40px] bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 rounded-t ${data.hImp} group-hover:bg-[var(--primary)]/20 dark:group-hover:bg-[var(--primary)]/30 transition-colors relative`}>
                    <div className={`absolute bottom-0 w-full bg-[var(--primary)] rounded-t transition-all duration-1000 ease-in-out ${animateBars ? data.hClk : 'h-0'}`}></div>
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500 mt-3">{data.day}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[var(--primary)]/20"></div>
                <span className="text-[11px] font-semibold text-zinc-500">Impressions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[var(--primary)]"></div>
                <span className="text-[11px] font-semibold text-zinc-500">Clicks</span>
              </div>
            </div>
          </section>

          {/* Settings Summary */}
          <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <Settings size={18} className="text-zinc-400" /> Settings Summary
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <LinkIcon size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 mb-0.5">Redirect Target</div>
                  <div className="text-sm text-zinc-900 dark:text-zinc-100 font-bold">Category: Signature Pizzas</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <Calendar size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 mb-0.5">Schedule</div>
                  <div className="text-sm text-zinc-900 dark:text-zinc-100 font-bold">Jun 01 - Jun 30, 2024</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-700">
                  <MapPin size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500 mb-0.5">Display Locations</div>
                  <div className="text-sm text-zinc-900 dark:text-zinc-100 font-bold">Homepage, App Home Screen</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Sticky Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 flex justify-center gap-4 z-50">
        <div className="w-full max-w-5xl mx-auto flex gap-4">
          <button className="flex-1 md:flex-none md:w-48 border-2 border-[var(--primary)] text-[var(--primary)] font-bold py-3 rounded-xl hover:bg-[var(--primary)]/5 active:scale-95 transition-all flex items-center justify-center gap-2">
            <Edit size={18} /> Edit Banner
          </button>
          <button className="flex-1 md:flex-none md:w-56 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold py-3 rounded-xl hover:bg-zinc-800 dark:hover:bg-white active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg">
            <PauseCircle size={18} /> Pause Campaign
          </button>
        </div>
      </footer>
    </div>
  );
}
