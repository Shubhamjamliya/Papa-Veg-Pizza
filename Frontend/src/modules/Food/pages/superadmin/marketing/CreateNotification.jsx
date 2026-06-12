import React, { useState } from 'react';
import { ChevronRight, Info, Bold, Italic, SmilePlus, Link as LinkIcon, Code, Pizza, ArrowLeft, Flashlight, Camera, Signal, Wifi, Battery, ChevronDown } from 'lucide-react';

export default function CreateNotification({ onBack }) {
  const [formData, setFormData] = useState({
    title: 'Weekend Flash Sale! 🍕',
    category: 'Promotion',
    body: 'Get 50% off any large pizza this weekend only. Use code FLASH50 at checkout. Order now and satisfy your cravings!'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-16 animate-in fade-in slide-in-from-right-4 duration-300 relative z-50">
      {/* Top Header */}
      <header className="w-full sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center h-12 px-4 md:px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center text-black/55 dark:text-white/55">
            <ArrowLeft size={18} className="text-[var(--primary)]" />
          </button>
          <h1 className="text-sm font-bold text-[var(--primary)]">Create Notification</h1>
        </div>
      </header>

      <main className="p-3 md:p-4 max-w-7xl mx-auto space-y-4">
        {/* Stepper */}
        <div className="flex items-center justify-between overflow-x-auto pb-2 gap-3 md:gap-6 scrollbar-none">
          <div className="flex items-center gap-1.5 shrink-0 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-[var(--primary)] after:rounded-full">
            <div className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xs">1</div>
            <span className="text-xs text-[var(--primary)] font-bold whitespace-nowrap">Message Details</span>
          </div>
          <div className="h-[1.5px] flex-1 min-w-[15px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-1.5 shrink-0 opacity-50">
            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 text-black/60 dark:text-white/60 flex items-center justify-center font-bold text-xs">2</div>
            <span className="text-xs text-black/60 dark:text-white/60 font-semibold whitespace-nowrap">Channels</span>
          </div>
          <div className="h-[1.5px] flex-1 min-w-[15px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-1.5 shrink-0 opacity-50">
            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 text-black/60 dark:text-white/60 flex items-center justify-center font-bold text-xs">3</div>
            <span className="text-xs text-black/60 dark:text-white/60 font-semibold whitespace-nowrap">Audience</span>
          </div>
          <div className="h-[1.5px] flex-1 min-w-[15px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-1.5 shrink-0 opacity-50">
            <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 text-black/60 dark:text-white/60 flex items-center justify-center font-bold text-xs">4</div>
            <span className="text-xs text-black/60 dark:text-white/60 font-semibold whitespace-nowrap">Schedule</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider mb-4">Step 1: Message Details</h2>
              <div className="space-y-4">
                {/* Title Input */}
                <div className="flex flex-col gap-1 focus-within:text-[var(--primary)] transition-colors">
                  <label className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase">Notification Title</label>
                  <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-955 border border-zinc-200 dark:border-zinc-800 rounded-lg py-1.5 px-2.5 text-xs focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-black dark:text-white font-semibold" 
                    placeholder="e.g. 50% Off Pepperoni Friday!" 
                    type="text" 
                  />
                </div>
                {/* Category Dropdown */}
                <div className="flex flex-col gap-1 focus-within:text-[var(--primary)] transition-colors">
                  <label className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase">Notification Category</label>
                  <div className="relative">
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-955 border border-zinc-200 dark:border-zinc-800 rounded-lg py-1.5 px-2.5 appearance-none text-xs focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all pr-10 text-black dark:text-white font-semibold cursor-pointer"
                    >
                      <option>Promotion</option>
                      <option>Order Update</option>
                      <option>Loyalty Rewards</option>
                      <option>New Menu Alert</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/50 dark:text-white/50" />
                  </div>
                </div>
                {/* Rich Text Message Body */}
                <div className="flex flex-col gap-1 focus-within:text-[var(--primary)] transition-colors">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-black/70 dark:text-white/70 uppercase">Message Body</label>
                    <span className={`text-[9px] font-bold tracking-widest uppercase ${formData.body.length > 160 ? 'text-red-500' : 'text-[var(--primary)]'}`}>
                      {formData.body.length}/160
                    </span>
                  </div>
                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-955">
                    <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-1 flex gap-0.5 items-center">
                      <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-black/60 dark:text-white/60"><Bold size={12} /></button>
                      <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-black/60 dark:text-white/60"><Italic size={12} /></button>
                      <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-black/60 dark:text-white/60"><SmilePlus size={12} /></button>
                      <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-black/60 dark:text-white/60"><LinkIcon size={12} /></button>
                      <div className="w-[1px] h-4 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>
                      <button className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-black/60 dark:text-white/60"><Code size={12} /></button>
                    </div>
                    <textarea 
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-transparent border-none focus:ring-0 resize-none text-xs outline-none text-black dark:text-white font-medium" 
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Alert Card */}
            <div className="bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-3 rounded-lg flex items-start gap-2.5">
              <Info size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-wider mb-0.5">Optimization Tip</p>
                <p className="text-black/70 dark:text-white/70 text-xs font-semibold leading-normal">Including emojis in your title can increase click-through rates by up to 12% for restaurant promotions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-16">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center shadow-sm">
              <h3 className="text-[10px] font-bold text-black/50 dark:text-white/50 uppercase tracking-wider mb-4">Channel Preview: Push</h3>
              
              {/* Phone Mockup */}
              <div className="relative w-[240px] h-[480px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Wallpaper */}
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp" alt="Lock Screen Wallpaper" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
                </div>
                
                {/* Status Bar */}
                <div className="relative z-10 p-1.5 flex justify-between items-center px-5">
                  <span className="text-white text-[9px] font-bold">9:41</span>
                  <div className="flex gap-1 items-center">
                    <Signal size={10} className="text-white" />
                    <Wifi size={10} className="text-white" />
                    <Battery size={10} className="text-white" />
                  </div>
                </div>
                
                {/* Notification Content */}
                <div className="relative z-10 px-3 pt-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg animate-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-[var(--primary)] rounded flex items-center justify-center">
                          <Pizza size={10} className="text-white" />
                        </div>
                        <span className="text-[9px] font-bold text-slate-800">PIZZAPULSE</span>
                      </div>
                      <span className="text-[9px] text-slate-500">now</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mb-0.5">{formData.title || 'Notification Title'}</p>
                    <p className="text-[10px] text-slate-700 leading-tight">{formData.body || 'Notification Message Body'}</p>
                  </div>
                </div>
                
                {/* Lock Screen Bottom */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-4 px-5">
                  <div className="flex justify-between w-full">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Flashlight size={14} className="text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Camera size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="w-24 h-0.5 bg-white/50 rounded-full"></div>
                </div>
              </div>
              <p className="mt-4 text-[9px] text-center text-black/50 dark:text-white/50 px-2 font-medium">Preview represents a standard iOS lock screen. Actual appearance may vary by device and OS version.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 p-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 flex justify-center z-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <button onClick={onBack} className="w-full sm:w-auto px-4 h-9 text-black/70 dark:text-white/70 text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-lg">Cancel</button>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-4 h-9 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-955 text-black/70 dark:text-white/70 text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all rounded-lg shadow-sm">Save Draft</button>
            <button className="w-full sm:w-auto px-6 h-9 bg-[var(--primary)] text-white font-bold text-xs hover:bg-[var(--primary)]/90 transition-all rounded-lg shadow-md flex items-center justify-center gap-1.5 active:scale-95">
              Next Step
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
// Force re-compilation to clear Vite babel cache
