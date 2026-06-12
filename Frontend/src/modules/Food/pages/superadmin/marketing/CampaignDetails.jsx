import React, { useState } from 'react';
import { ArrowLeft, Pause, Edit, TrendingUp, Star, MapPin, ArrowRight } from 'lucide-react';

export default function CampaignDetails({ onBack }) {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Performance', 'Audience', 'Ad Creatives', 'Settings'];

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4 animate-in fade-in duration-500">
      {/* Header with Back button */}
      <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <button 
          onClick={onBack}
          className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-black/50 dark:text-white/50"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 className="text-lg font-bold text-black dark:text-white tracking-tight">Campaign Details</h2>
      </div>

      {/* Hero Campaign Overview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 relative overflow-hidden shadow-sm">
          <div className="absolute top-4 right-4 flex gap-1.5 z-10">
            <button className="px-2.5 py-1.5 bg-zinc-50 dark:bg-zinc-800 text-black/70 dark:text-white/70 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all flex items-center gap-1">
              <Pause size={14} /> <span className="hidden sm:inline">Pause</span>
            </button>
            <button className="px-2.5 py-1.5 bg-[var(--primary)] text-white rounded-lg text-xs font-bold hover:shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center gap-1">
              <Edit size={14} /> <span className="hidden sm:inline">Edit</span>
            </button>
          </div>
          
          <div className="flex flex-col h-full justify-between pt-12 md:pt-0 relative z-0">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-200 dark:border-emerald-500/20">Active</span>
                <span className="text-[10px] text-black/50 dark:text-white/50 font-semibold">ID: CAMP-9283-BOGO</span>
              </div>
              <h3 className="text-base font-black text-black dark:text-white mb-2 tracking-tight">Weekend BOGO Blowout</h3>
              <p className="text-xs text-black/70 dark:text-white/70 max-w-xl leading-relaxed">
                Incentivizing weekend pizza parties with Buy-One-Get-One-Free offer on all large signatures. Targeting high-value dormant customers across metropolitan zones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-3 border-t border-zinc-150 dark:border-zinc-800">
              <div>
                <p className="text-[9px] text-black dark:text-white uppercase tracking-wider font-bold mb-1">Budget Utilization</p>
                <div className="flex items-end gap-1.5">
                  <span className="text-base font-black text-black dark:text-white">$12,450</span>
                  <span className="text-[10px] text-black/50 dark:text-white/50 mb-0.5 font-bold">/ $15,000</span>
                </div>
                <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-[var(--primary)] rounded-full" style={{ width: '83%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-[9px] text-black dark:text-white uppercase tracking-wider font-bold mb-1">Current ROI</p>
                <div className="flex items-end gap-1.5 text-[var(--primary)]">
                  <span className="text-base font-black">4.2x</span>
                  <TrendingUp size={14} className="mb-0.5" />
                </div>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">+12% vs last week</p>
              </div>
              <div>
                <p className="text-[9px] text-black dark:text-white uppercase tracking-wider font-bold mb-1">Days Remaining</p>
                <div className="flex items-end gap-1.5">
                  <span className="text-base font-black text-black dark:text-white">4 Days</span>
                  <span className="text-[10px] text-black/50 dark:text-white/50 mb-0.5 font-bold">of 14</span>
                </div>
                <p className="text-[10px] text-black/70 dark:text-white/70 mt-1 font-semibold">Ends: Sun, Oct 22</p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Visual Card */}
        <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden relative border border-zinc-200 dark:border-zinc-800 group h-[180px] lg:h-auto shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp" 
            alt="Pizza Background" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
            <p className="text-white font-bold text-xs">Performance Score</p>
            <div className="flex items-center gap-1 mt-1.5">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <Star size={14} className="text-white/50" />
              <span className="text-white ml-1 text-xs font-bold">Excellent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 text-xs font-bold relative px-1 whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? 'text-[var(--primary)]' 
                : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Performance Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Performance Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
              <h4 className="text-xs font-bold text-black dark:text-white">Campaign Growth</h4>
              <div className="flex gap-1.5">
                <button className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800 text-black/60 dark:text-white/60 text-[10px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700">Clicks</button>
                <button className="px-2.5 py-1 bg-[var(--primary)] text-white text-[10px] font-semibold rounded-md shadow-sm transition-opacity hover:opacity-90">Conversions</button>
              </div>
            </div>
            
            {/* Chart Mockup */}
            <div className="h-36 w-full relative flex items-end justify-between gap-1.5 pt-4 pl-8 pr-1">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[9px] text-black/40 dark:text-white/40 font-medium pb-4">
                <span>2.5k</span><span>2k</span><span>1.5k</span><span>1k</span><span>500</span><span>0</span>
              </div>
              
              {/* Grid Lines */}
              <div className="absolute inset-0 pl-6 flex flex-col justify-between pointer-events-none opacity-20 dark:opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border-t border-zinc-300 dark:border-zinc-705 w-full"></div>
                ))}
              </div>
              
              {/* Animated Bars */}
              {[40, 65, 55, 85, 75, 95].map((height, i) => (
                <div key={i} className="flex-1 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 dark:bg-[var(--primary)]/20 dark:hover:bg-[var(--primary)]/30 transition-all rounded-t-sm relative group cursor-pointer z-10" style={{ height: `${height}%` }}>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold pointer-events-none whitespace-nowrap">
                    {(height * 24).toFixed(0)}
                  </div>
                </div>
              ))}
              <div className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all rounded-t-sm h-[90%] relative group cursor-pointer z-10 shadow-sm">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold pointer-events-none">
                  2.1k
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-4 text-[9px] font-semibold text-black/40 dark:text-white/40 pl-8 pr-1 uppercase tracking-wider">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
              <h4 className="text-xs font-bold text-black dark:text-white">Orders Generated</h4>
              <button className="text-[var(--primary)] text-[10px] font-bold flex items-center gap-1 hover:underline">
                View All <ArrowRight size={12} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap border-collapse">
                <thead className="bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800 text-black dark:text-white text-[10px] uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-3 py-2">Order ID</th>
                    <th className="px-3 py-2">Customer</th>
                    <th className="px-3 py-2 text-center">Items</th>
                    <th className="px-3 py-2 text-right">Value</th>
                    <th className="px-3 py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-850/30 transition-colors group">
                    <td className="px-3 py-2 font-mono text-xs font-bold text-[var(--primary)]">#ORD-5542</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-black/70 dark:text-white/70">JD</div>
                        <span className="text-xs font-bold text-black dark:text-white">Jane Doe</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center text-xs text-black/70 dark:text-white/70">2x Large Pepperoni</td>
                    <td className="px-3 py-2 text-right font-bold text-black dark:text-white text-xs">$34.50</td>
                    <td className="px-3 py-2 text-right">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 text-[9px] rounded-full font-bold">Delivering</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-850/30 transition-colors group">
                    <td className="px-3 py-2 font-mono text-xs font-bold text-[var(--primary)]">#ORD-5541</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-black/70 dark:text-white/70">MK</div>
                        <span className="text-xs font-bold text-black dark:text-white">Mike Knight</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center text-xs text-black/70 dark:text-white/70">1x Meat Feast, 1x Veggie</td>
                    <td className="px-3 py-2 text-right font-bold text-black dark:text-white text-xs">$42.00</td>
                    <td className="px-3 py-2 text-right">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[9px] rounded-full font-bold">Delivered</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-850/30 transition-colors group">
                    <td className="px-3 py-2 font-mono text-xs font-bold text-[var(--primary)]">#ORD-5539</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-[10px] font-bold text-black/70 dark:text-white/70">SA</div>
                        <span className="text-xs font-bold text-black dark:text-white">Sam Anderson</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center text-xs text-black/70 dark:text-white/70">3x Signature Mix</td>
                    <td className="px-3 py-2 text-right font-bold text-black dark:text-white text-xs">$58.20</td>
                    <td className="px-3 py-2 text-right">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[9px] rounded-full font-bold">Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Rail Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          
          {/* Conversion Funnel Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
            <h4 className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">Conversion Funnel</h4>
            <div className="space-y-4">
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-black dark:text-white">Impressions</span>
                  <span className="text-xs font-bold text-black dark:text-white">42,500</span>
                </div>
                <div className="w-full h-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                  <div className="h-full bg-[var(--primary)]/40 dark:bg-[var(--primary)]/50" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-black dark:text-white">Clicks (3.2%)</span>
                  <span className="text-xs font-bold text-black dark:text-white">1,360</span>
                </div>
                <div className="w-full h-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                  <div className="h-full bg-[var(--primary)]/70 dark:bg-[var(--primary)]/80" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[var(--primary)]">Conversions (12.4%)</span>
                  <span className="text-xs font-bold text-[var(--primary)]">168</span>
                </div>
                <div className="w-full h-6 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/10 rounded-lg overflow-hidden">
                  <div className="h-full bg-[var(--primary)] shadow-sm" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Audience Distribution */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 shadow-sm">
            <h4 className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-2">Top Performing Regions</h4>
            <div className="space-y-3">
              {[
                { name: 'Downtown Core', val: '42%' },
                { name: 'West Suburbs', val: '28%' },
                { name: 'Eastern Heights', val: '18%' },
                { name: 'North Port', val: '12%' },
              ].map((loc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-black/50 dark:text-white/50" />
                    <span className="text-xs font-semibold text-black/70 dark:text-white/70">{loc.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[var(--primary)]">{loc.val}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <div className="rounded-xl h-28 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80&fm=webp" 
                  alt="Map Background" 
                  className="w-full h-full object-cover opacity-50 grayscale dark:opacity-30" 
                />
                <div className="absolute inset-0 bg-[var(--primary)]/5"></div>
                <div className="absolute w-3 h-3 bg-[var(--primary)] rounded-full border-2 border-white dark:border-zinc-900 animate-ping"></div>
                <div className="absolute w-2 h-2 bg-[var(--primary)] rounded-full border border-white dark:border-zinc-900"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
