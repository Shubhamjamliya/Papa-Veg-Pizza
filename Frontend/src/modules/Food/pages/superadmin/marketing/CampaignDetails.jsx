import React from 'react';
import { X, Pause, Play, Edit, TrendingUp, Users, Calendar, ArrowRight, Megaphone } from 'lucide-react';

export default function CampaignDetails({ campaignId, campaigns, setCampaigns, onEdit, onClose }) {
  const campaign = campaigns.find(c => c.id === campaignId);

  if (!campaign) return null;

  const isPaused = campaign.status === 'Paused';

  const handlePauseToggle = () => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === campaign.id) {
        return {
          ...c,
          status: isPaused ? 'Active' : 'Paused'
        };
      }
      return c;
    }));
  };

  // Calculate percentage of budget spent
  const budget = campaign.budget || 0;
  const spent = campaign.spent || 0;
  const spendPercentage = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:pl-[280px] p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-lg h-[600px] max-h-[85vh] rounded-xl flex flex-col shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900 shrink-0">
          <div>
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Megaphone size={16} className="text-[var(--primary)]" />
              Campaign Details
            </h2>
            <p className="text-[10px] text-zinc-500 font-medium">ID: CAMP-000{campaign.id} • Code: {campaign.code}</p>
          </div>
          <button 
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content (Compact Campaign-Related Info Only) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          
          {/* Status and Banner Card */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm relative group bg-zinc-50 dark:bg-zinc-900">
            <div className="h-32 w-full overflow-hidden relative">
              <img 
                src={campaign.imgUrl || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp"} 
                alt={campaign.name} 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${
                  campaign.status === 'Active' ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' :
                  campaign.status === 'Paused' ? 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20' :
                  campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' :
                  'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700'
                }`}>
                  {campaign.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white text-base font-extrabold tracking-tight">{campaign.name}</h3>
              </div>
            </div>
          </div>

          {/* Core Settings / Parameters */}
          <section className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</p>
              <p className="text-xs text-zinc-800 dark:text-zinc-300 leading-relaxed font-medium mt-0.5">
                {campaign.description || "No description provided."}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Campaign Type</p>
                <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold mt-0.5">{campaign.type}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Promo Value</p>
                <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold mt-0.5">{campaign.value || "N/A"}</p>
              </div>
            </div>
          </section>

          {/* Financials (Rupee-based) & Target Reach */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Budget & Spend */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Financial Progress</p>
                <div className="flex items-baseline gap-1 mt-1.5">
                  <span className="text-base font-black text-zinc-900 dark:text-zinc-100">₹{spent.toLocaleString()}</span>
                  <span className="text-[10px] text-zinc-500 font-bold">/ ₹{budget.toLocaleString()} spent</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[var(--primary)] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${spendPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1 text-[9px] text-zinc-500 font-bold">
                  <span>{spendPercentage}% Used</span>
                  <span>₹{(budget - spent).toLocaleString()} Left</span>
                </div>
              </div>
            </div>

            {/* Campaign Stats */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl grid grid-cols-2 gap-2">
              <div className="flex flex-col justify-center border-r border-zinc-200 dark:border-zinc-800 pr-2">
                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                  <TrendingUp size={12} className="text-emerald-500" />
                  ROI Rate
                </p>
                <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 mt-1">{campaign.roi || "--"}</span>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">Target: 4.5x</span>
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                  <Users size={12} className="text-[var(--primary)]" />
                  Total Reach
                </p>
                <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 mt-1">
                  {(campaign.reach || 0).toLocaleString()}
                </span>
                <span className="text-[9px] text-zinc-500 font-bold mt-0.5">Estimated users</span>
              </div>
            </div>
          </section>

          {/* Validity Schedule */}
          <section className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={14} className="text-zinc-500" />
              <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Campaign Schedule</p>
            </div>
            <div className="flex justify-between items-center text-xs pt-1">
              <div className="flex-1">
                <p className="text-[9px] text-zinc-400 font-bold">Start Date</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{campaign.startDate}</p>
              </div>
              <div className="px-4 text-zinc-450 dark:text-zinc-550">
                <ArrowRight size={14} />
              </div>
              <div className="flex-1 text-right">
                <p className="text-[9px] text-zinc-400 font-bold">End Date</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{campaign.endDate}</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Actions (Pause, Edit, Close) */}
        <div className="px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center shrink-0">
          <div className="flex gap-2">
            <button 
              onClick={handlePauseToggle}
              className={`h-9 px-3.5 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                isPaused 
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400' 
                  : 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-400'
              }`}
            >
              {isPaused ? (
                <>
                  <Play size={14} className="fill-current" /> Resume
                </>
              ) : (
                <>
                  <Pause size={14} className="fill-current" /> Pause
                </>
              )}
            </button>
            <button 
              onClick={() => onEdit(campaign.id)}
              className="h-9 px-3.5 bg-[var(--primary)] text-white rounded-lg text-xs font-bold hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Edit size={14} /> Edit Campaign
            </button>
          </div>
          <button 
            className="h-9 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
