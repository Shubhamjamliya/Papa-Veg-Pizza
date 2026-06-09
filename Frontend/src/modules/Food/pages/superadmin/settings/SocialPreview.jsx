import React, { useState } from 'react';
import { X, Search, Facebook, Twitter, ChevronDown, Link, RefreshCw, Edit2 } from 'lucide-react';

export default function SocialPreview({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('google');
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[100] flex flex-col justify-end transition-opacity" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="fixed inset-x-0 bottom-0 z-[100] flex flex-col h-[85vh] md:h-auto md:max-h-[85vh] bg-white dark:bg-zinc-900 md:rounded-t-xl md:rounded-b-xl shadow-2xl transition-transform animate-in slide-in-from-bottom-4 md:zoom-in-95 max-w-3xl mx-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50 shrink-0">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Social Preview</span>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">Real-time SEO Simulation</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500 active:scale-95">
            <X size={18} />
          </button>
        </div>

        {/* Modal Content & Tabs */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 pb-6">
          
          {/* Platform Selector (Tabs) */}
          <div className="flex border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-900 z-10">
            <button 
              onClick={() => setActiveTab('google')} 
              className={`flex-1 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'google' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
            >
              <Search size={16} /> Google
            </button>
            <button 
              onClick={() => setActiveTab('facebook')} 
              className={`flex-1 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'facebook' ? 'border-b-2 border-[#1877F2] text-[#1877F2]' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
            >
              <Facebook size={16} /> Facebook
            </button>
            <button 
              onClick={() => setActiveTab('twitter')} 
              className={`flex-1 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'twitter' ? 'border-b-2 border-[#1DA1F2] text-[#1DA1F2]' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
            >
              <Twitter size={16} /> Twitter
            </button>
          </div>

          {/* Preview Area */}
          <div className="p-4 md:p-6">
            
            {/* Google Search Preview */}
            {activeTab === 'google' && (
              <div className="animate-in fade-in duration-300 space-y-4">
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 shadow-sm">
                  <div className="flex flex-col gap-1">
                    <div className="text-[#006621] dark:text-[#81c995] text-xs flex items-center gap-1">
                      https://www.pizzamaster.io/locations/downtown
                      <ChevronDown size={14} />
                    </div>
                    <h3 className="text-[#1a0dab] dark:text-[#8ab4f8] text-lg md:text-xl font-normal leading-tight hover:underline cursor-pointer">
                      The Ultimate Pizza Experience | Pizza Master Downtown
                    </h3>
                    <p className="text-[#545454] dark:text-[#bdc1c6] text-sm mt-1 leading-relaxed">
                      <span className="font-bold text-zinc-600 dark:text-zinc-400">Jan 12, 2024</span> — Order the best artisanal pizza in the city. Fresh ingredients, 24-hour dough fermentation, and local delivery. Check out our seasonal menu...
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-[var(--primary)] uppercase mb-1.5 tracking-wider">SEO Tip</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Your meta title is 55 characters. Perfectly optimized for Google's desktop and mobile SERPs.</p>
                </div>
              </div>
            )}

            {/* Facebook Preview */}
            {activeTab === 'facebook' && (
              <div className="animate-in fade-in duration-300">
                <div className="bg-white border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop" alt="Pizza Preview" className="w-full h-52 object-cover" />
                  <div className="p-4 bg-[#f2f3f5] dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs text-[#606770] dark:text-zinc-400 uppercase font-bold tracking-wider">PIZZAMASTER.IO</div>
                    <div className="text-base font-bold text-[#1d2129] dark:text-zinc-100 leading-tight mt-1">Authentic Wood-Fired Pizza | Experience Excellence</div>
                    <div className="text-sm text-[#606770] dark:text-zinc-400 line-clamp-1 mt-1">Taste the difference with our hand-stretched sourdough and premium toppings...</div>
                  </div>
                </div>
              </div>
            )}

            {/* Twitter Preview */}
            {activeTab === 'twitter' && (
              <div className="animate-in fade-in duration-300">
                <div className="bg-white dark:bg-zinc-900 border border-[#e1e8ed] dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1600&auto=format&fit=crop" alt="Twitter Preview" className="w-full h-48 object-cover" />
                  <div className="p-4 bg-white dark:bg-zinc-900">
                    <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">Authentic Wood-Fired Pizza | Experience Excellence</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">Join us for the best pizza in town. Seasonal ingredients and craft beverages available daily.</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 flex items-center gap-1.5">
                      <Link size={14} />
                      pizzamaster.io
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Preview Actions */}
          <div className="px-4 md:px-6 flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleRefresh}
              className="flex-1 h-11 bg-[var(--primary)] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow"
            >
              <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
              Refresh Preview
            </button>
            <button onClick={onClose} className="flex-1 h-11 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors active:scale-95">
              <Edit2 size={18} />
              Edit Meta Data
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
