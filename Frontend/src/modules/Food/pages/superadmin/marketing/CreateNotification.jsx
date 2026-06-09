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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24 animate-in fade-in slide-in-from-right-4 duration-300 relative z-50">
      {/* Top Header */}
      <header className="w-full sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center h-16 px-4 md:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center">
            <ArrowLeft size={20} className="text-[var(--primary)]" />
          </button>
          <h1 className="text-lg font-bold text-[var(--primary)]">Create Notification</h1>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Stepper */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 gap-4 md:gap-8 scrollbar-none">
          <div className="flex items-center gap-2 shrink-0 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-[var(--primary)] after:rounded-full">
            <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-sm text-[var(--primary)] font-bold whitespace-nowrap">Message Details</span>
          </div>
          <div className="h-[2px] flex-1 min-w-[20px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-2 shrink-0 opacity-50">
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold whitespace-nowrap">Channels</span>
          </div>
          <div className="h-[2px] flex-1 min-w-[20px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-2 shrink-0 opacity-50">
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center font-bold text-sm">3</div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold whitespace-nowrap">Audience</span>
          </div>
          <div className="h-[2px] flex-1 min-w-[20px] bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="flex items-center gap-2 shrink-0 opacity-50">
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center font-bold text-sm">4</div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 font-semibold whitespace-nowrap">Schedule</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Step 1: Message Details</h2>
              <div className="space-y-5">
                {/* Title Input */}
                <div className="flex flex-col gap-1.5 focus-within:text-[var(--primary)] transition-colors">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Notification Title</label>
                  <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-zinc-900 dark:text-zinc-100" 
                    placeholder="e.g. 50% Off Pepperoni Friday!" 
                    type="text" 
                  />
                </div>
                {/* Category Dropdown */}
                <div className="flex flex-col gap-1.5 focus-within:text-[var(--primary)] transition-colors">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Notification Category</label>
                  <div className="relative">
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 appearance-none text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all pr-10 text-zinc-900 dark:text-zinc-100"
                    >
                      <option>Promotion</option>
                      <option>Order Update</option>
                      <option>Loyalty Rewards</option>
                      <option>New Menu Alert</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" />
                  </div>
                </div>
                {/* Rich Text Message Body */}
                <div className="flex flex-col gap-1.5 focus-within:text-[var(--primary)] transition-colors">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Message Body</label>
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${formData.body.length > 160 ? 'text-red-500' : 'text-[var(--primary)]'}`}>
                      {formData.body.length}/160
                    </span>
                  </div>
                  <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-950">
                    <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-1.5 flex gap-1 items-center">
                      <button className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-zinc-600 dark:text-zinc-400"><Bold size={16} /></button>
                      <button className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-zinc-600 dark:text-zinc-400"><Italic size={16} /></button>
                      <button className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-zinc-600 dark:text-zinc-400"><SmilePlus size={16} /></button>
                      <button className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-zinc-600 dark:text-zinc-400"><LinkIcon size={16} /></button>
                      <div className="w-[1px] h-5 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>
                      <button className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition-colors text-zinc-600 dark:text-zinc-400"><Code size={16} /></button>
                    </div>
                    <textarea 
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      className="w-full p-4 bg-transparent border-none focus:ring-0 resize-none text-sm outline-none text-zinc-900 dark:text-zinc-100" 
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary Alert Card */}
            <div className="bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-4 rounded-lg flex items-start gap-3">
              <Info size={20} className="text-[var(--primary)] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-1">Optimization Tip</p>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm">Including emojis in your title can increase click-through rates by up to 12% for restaurant promotions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Preview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 md:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col items-center shadow-sm">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Channel Preview: Push</h3>
              
              {/* Phone Mockup */}
              <div className="relative w-[280px] h-[560px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Wallpaper */}
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80&fm=webp" alt="Lock Screen Wallpaper" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
                </div>
                
                {/* Status Bar */}
                <div className="relative z-10 p-2 flex justify-between items-center px-6">
                  <span className="text-white text-[10px] font-bold">9:41</span>
                  <div className="flex gap-1 items-center">
                    <Signal size={12} className="text-white" />
                    <Wifi size={12} className="text-white" />
                    <Battery size={12} className="text-white" />
                  </div>
                </div>
                
                {/* Notification Content */}
                <div className="relative z-10 px-4 pt-12">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg animate-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 bg-[var(--primary)] rounded flex items-center justify-center">
                          <Pizza size={12} className="text-white" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-800">PIZZAPULSE</span>
                      </div>
                      <span className="text-[10px] text-slate-500">now</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{formData.title || 'Notification Title'}</p>
                    <p className="text-xs text-slate-700 leading-tight">{formData.body || 'Notification Message Body'}</p>
                  </div>
                </div>
                
                {/* Lock Screen Bottom */}
                <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6 px-6">
                  <div className="flex justify-between w-full">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Flashlight size={18} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Camera size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="w-32 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>
              <p className="mt-6 text-[10px] text-center text-zinc-500 px-4">Preview represents a standard iOS lock screen. Actual appearance may vary by device and OS version.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 flex justify-center z-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <button onClick={onBack} className="w-full sm:w-auto px-6 h-12 text-zinc-600 dark:text-zinc-300 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors rounded-lg">Cancel</button>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 h-12 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all rounded-lg shadow-sm">Save Draft</button>
            <button className="w-full sm:w-auto px-8 h-12 bg-[var(--primary)] text-white font-bold hover:bg-[var(--primary)]/90 transition-all rounded-lg shadow-md flex items-center justify-center gap-2 active:scale-95">
              Next Step
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
