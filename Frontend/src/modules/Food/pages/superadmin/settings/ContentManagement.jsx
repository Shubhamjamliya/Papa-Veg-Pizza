import React, { useState } from 'react';
import { Upload, Plus, FileText, ArrowRight, Edit2, LayoutDashboard, MessageCircleQuestion, Image as ImageIcon } from 'lucide-react';
import ContentData from './ContentData';
import CreateCms from './CreateCms';
import FaqManagement from './FaqManagement';
import MediaLibrary from './MediaLibrary';

export default function ContentManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMainTab, setActiveMainTab] = useState('dashboard');

  return (
    <div className="p-4 md:p-8 space-y-6 bg-[#fff8f7] text-[#271815] min-h-screen font-sans">
      
      {/* Top Level Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar border-b border-[#e4beb8] pb-2">
        <button 
          onClick={() => setActiveMainTab('dashboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${
            activeMainTab === 'dashboard' ? 'bg-[#ffe2dd] text-[#b41e15]' : 'text-[#586062] hover:bg-[#fff0ee]'
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>
        <button 
          onClick={() => setActiveMainTab('faqs')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${
            activeMainTab === 'faqs' ? 'bg-[#ffe2dd] text-[#b41e15]' : 'text-[#586062] hover:bg-[#fff0ee]'
          }`}
        >
          <MessageCircleQuestion size={18} />
          FAQs
        </button>
        <button 
          onClick={() => setActiveMainTab('media')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all ${
            activeMainTab === 'media' ? 'bg-[#ffe2dd] text-[#b41e15]' : 'text-[#586062] hover:bg-[#fff0ee]'
          }`}
        >
          <ImageIcon size={18} />
          Media
        </button>
      </div>

      {activeMainTab === 'dashboard' ? (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Page Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#271815]">Content Management</h1>
          <p className="text-sm text-[#586062]">Manage your multi-unit franchise digital assets and page configurations from a central node.</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <button className="flex items-center gap-2 bg-white border border-[#8f706b] px-4 md:px-6 py-2 rounded-lg hover:bg-[#ffe9e6] transition-colors">
            <Upload size={20} className="text-[#271815]" />
            <span className="text-sm font-semibold tracking-wide text-[#271815]">Upload Media</span>
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#b41e15] text-white px-4 md:px-6 py-2 rounded-lg hover:shadow-lg transition-all active:scale-95"
          >
            <Plus size={20} />
            <span className="text-sm font-semibold tracking-wide">Create New Page</span>
          </button>
        </div>
      </section>

      {/* KPI Grid (Bento Style) */}
      <section className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="col-span-2 lg:col-span-2 p-6 bg-[#d8392b] text-[#fffcff] rounded-xl flex flex-col justify-between h-32 border border-[#b41e15]/20 relative overflow-hidden group">
          <div className="z-10">
            <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Total Pages</p>
            <h2 className="text-3xl font-bold">248</h2>
          </div>
          <FileText className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform" />
        </div>
        <div className="p-6 bg-white border border-[#e4beb8] rounded-xl flex flex-col justify-between h-32 hover:border-[#b41e15] transition-colors">
          <p className="text-xs font-medium text-[#586062]">Published</p>
          <h2 className="text-2xl font-bold text-[#271815]">210</h2>
        </div>
        <div className="p-6 bg-white border border-[#e4beb8] rounded-xl flex flex-col justify-between h-32 hover:border-[#b41e15] transition-colors">
          <p className="text-xs font-medium text-[#586062]">Drafts</p>
          <h2 className="text-2xl font-bold text-[#271815]">38</h2>
        </div>
        <div className="p-6 bg-white border border-[#e4beb8] rounded-xl flex flex-col justify-between h-32 hover:border-[#b41e15] transition-colors">
          <p className="text-xs font-medium text-[#586062]">Pending</p>
          <h2 className="text-2xl font-bold text-[#ba1a1a]">12</h2>
        </div>
        <div className="col-span-2 lg:col-span-1 p-6 bg-[#dae1e3] text-[#5d6466] rounded-xl flex flex-col justify-between h-32 border border-[#e4beb8] hover:border-[#b41e15] transition-colors">
          <p className="text-xs font-medium text-[#5d6466]/70">Media Files</p>
          <h2 className="text-2xl font-bold">1,540</h2>
        </div>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* CMS Pages Table Container */}
        <ContentData />

        {/* Recent Activity Timeline */}
        <section className="bg-white rounded-xl border border-[#e4beb8] p-6 space-y-6">
          <h3 className="text-xl font-semibold text-[#271815]">Activity Feed</h3>
          <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#e4beb8]">
            <div className="relative pl-8 flex gap-4 group">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#b41e15] border-4 border-white z-10"></div>
              <div className="flex-1">
                <p className="text-sm text-[#271815]">
                  <span className="font-bold">Sofia Conti</span> updated <span className="text-[#b41e15] font-semibold">About Us</span>
                </p>
                <span className="text-xs text-[#586062]">2 hours ago • Franchise Global</span>
                <div className="mt-2 p-2 bg-[#ffe2dd] rounded border border-[#e4beb8]/30 text-xs italic text-[#271815]">
                  "Modified headquarters address and team bios."
                </div>
              </div>
            </div>
            <div className="relative pl-8 flex gap-4 group">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#586062] border-4 border-white z-10"></div>
              <div className="flex-1">
                <p className="text-sm text-[#271815]">
                  <span className="font-bold">Chef Alessandro</span> created a draft for <span className="text-[#b41e15] font-semibold">Winter Special Menu</span>
                </p>
                <span className="text-xs text-[#586062]">Yesterday</span>
              </div>
            </div>
            <div className="relative pl-8 flex gap-4 group">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white z-10"></div>
              <div className="flex-1">
                <p className="text-sm text-[#271815]">
                  <span className="font-bold">System</span> automatically published <span className="text-[#b41e15] font-semibold">Flash Sale Pop-up</span>
                </p>
                <span className="text-xs text-[#586062]">2 days ago</span>
              </div>
            </div>
            <div className="relative pl-8 flex gap-4 group">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#b41e15] border-4 border-white z-10"></div>
              <div className="flex-1">
                <p className="text-sm text-[#271815]">
                  <span className="font-bold">Marco Rossi</span> uploaded 12 new <span className="text-[#b41e15] font-semibold">Food Photography</span> assets
                </p>
                <span className="text-xs text-[#586062]">3 days ago</span>
              </div>
            </div>
          </div>
          <button className="w-full py-4 border border-[#e4beb8] rounded-lg text-[#586062] text-sm font-semibold tracking-wide hover:bg-[#ffe9e6] transition-colors">Show More History</button>
        </section>
      </div>

      {/* Featured Media Highlight */}
      <section className="bg-[#f9dcd8] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden">
        <div className="flex-1 space-y-4 z-10">
          <div className="inline-flex px-2 py-1 bg-[#b41e15] text-white text-[10px] font-bold rounded uppercase">Media Library Update</div>
          <h3 className="text-2xl font-bold text-[#271815]">High-Resolution Asset Sync</h3>
          <p className="text-sm text-[#5b403c] max-w-md">Your 2024 Seasonal Photography pack is now synced across all 12 franchise websites. Ensure all menu items are updated before the weekend rush.</p>
          <button className="bg-[#271815] text-[#fff8f7] px-6 py-2 rounded-lg text-sm font-semibold tracking-wide flex items-center gap-2 hover:bg-[#3e2c2a] transition-colors w-max">
            Go to Assets <ArrowRight size={18} />
          </button>
        </div>
        <div className="w-full md:w-80 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white z-10 shrink-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Pizza Photography" 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop&fm=webp" 
          />
        </div>
        <div className="absolute right-0 top-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 gap-1 h-full w-full">
            <div className="col-span-1 bg-[#b41e15] h-full"></div>
            <div className="col-span-1 bg-transparent h-full"></div>
            <div className="col-span-1 bg-[#b41e15] h-full"></div>
            <div className="col-span-9 bg-transparent h-full"></div>
          </div>
        </div>
      </section>
      </div>
      ) : activeMainTab === 'faqs' ? (
        <FaqManagement />
      ) : (
        <MediaLibrary />
      )}

      <button 
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-8 right-6 w-14 h-14 bg-[#b41e15] text-white rounded-full shadow-2xl flex items-center justify-center z-[50] active:scale-90 transition-transform"
      >
        <Edit2 size={24} />
      </button>

      <CreateCms isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
