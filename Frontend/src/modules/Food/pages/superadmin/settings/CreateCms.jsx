import React, { useState } from 'react';
import { X, Bold, Italic, List, Link as LinkIcon, Image, Code, CloudUpload, Eye } from 'lucide-react';

export default function CreateCms({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('basic');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#271815]/40 backdrop-blur-sm flex items-end md:items-center justify-center font-sans">
      {/* Main Modal Container */}
      <div className="bg-white w-full h-[85vh] md:max-w-2xl md:h-[750px] md:rounded-xl shadow-2xl flex flex-col relative animate-in slide-in-from-bottom duration-300">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-[#e4beb8]">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 hover:bg-[#ffe2dd] rounded-full transition-colors">
              <X className="text-[#271815]" size={24} />
            </button>
            <h2 className="text-2xl font-bold text-[#271815]">New Page</h2>
          </div>
          <span className="text-sm font-semibold tracking-wide bg-[#dae1e3] px-2 py-1 rounded-full text-[#5d6466]">DRAFT</span>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-[#e4beb8] bg-[#fff0ee] whitespace-nowrap">
          <button 
            onClick={() => setActiveTab('basic')}
            className={`flex-none px-6 py-4 text-sm font-semibold tracking-wide transition-all ${activeTab === 'basic' ? 'text-[#b41e15] border-b-2 border-[#b41e15]' : 'text-[#586062]'}`}
          >
            Basic Info
          </button>
          <button 
            onClick={() => setActiveTab('editor')}
            className={`flex-none px-6 py-4 text-sm font-semibold tracking-wide transition-all ${activeTab === 'editor' ? 'text-[#b41e15] border-b-2 border-[#b41e15]' : 'text-[#586062]'}`}
          >
            Content Editor
          </button>
          <button 
            onClick={() => setActiveTab('seo')}
            className={`flex-none px-6 py-4 text-sm font-semibold tracking-wide transition-all ${activeTab === 'seo' ? 'text-[#b41e15] border-b-2 border-[#b41e15]' : 'text-[#586062]'}`}
          >
            SEO
          </button>
          <button 
            onClick={() => setActiveTab('publishing')}
            className={`flex-none px-6 py-4 text-sm font-semibold tracking-wide transition-all ${activeTab === 'publishing' ? 'text-[#b41e15] border-b-2 border-[#b41e15]' : 'text-[#586062]'}`}
          >
            Publishing
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          
          {/* Section: Basic Information */}
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Page Title</label>
                <input 
                  className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm" 
                  placeholder="e.g. Summer Seasonal Menu" 
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">URL Slug</label>
                <div className="flex items-center">
                  <span className="bg-[#ffe2dd] px-2 h-10 flex items-center border border-r-0 border-[#8f706b] rounded-l-lg text-xs text-[#586062]">
                    pizzacore.com/
                  </span>
                  <input 
                    className="flex-1 h-10 px-4 border border-[#8f706b] rounded-r-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm" 
                    placeholder="summer-menu-2024" 
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Category</label>
                  <select className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm bg-white">
                    <option>Promotions</option>
                    <option>Corporate</option>
                    <option>Franchise News</option>
                    <option>Menu Updates</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Author</label>
                  <select className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm bg-white">
                    <option>Admin User</option>
                    <option>Marketing Lead</option>
                    <option>Regional Manager</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section: Content Editor */}
          {activeTab === 'editor' && (
            <div className="space-y-4">
              <div className="border border-[#8f706b] rounded-lg overflow-hidden flex flex-col bg-white h-[400px]">
                {/* Toolbar */}
                <div className="p-2 bg-[#fff0ee] border-b border-[#e4beb8] flex flex-wrap gap-1">
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><Bold size={18} /></button>
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><Italic size={18} /></button>
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><List size={18} /></button>
                  <div className="w-[1px] h-6 bg-[#e4beb8] mx-1"></div>
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><LinkIcon size={18} /></button>
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><Image size={18} /></button>
                  <button className="p-1 hover:bg-white rounded text-[#5b403c]"><Code size={18} /></button>
                </div>
                {/* Editing Area */}
                <div className="flex-1 p-4 text-sm text-[#271815] overflow-y-auto focus:outline-none" contentEditable="true" suppressContentEditableWarning>
                  <p className="text-[#5b403c] italic">Start typing your page content here...</p>
                </div>
                {/* Drag & Drop Placeholder */}
                <div className="p-6 border-t border-dashed border-[#e4beb8] bg-white flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#b41e15]/5 transition-colors">
                  <CloudUpload className="text-[#b41e15] mb-1" size={32} />
                  <p className="text-sm font-semibold tracking-wide text-[#271815]">Drag & Drop media here</p>
                  <p className="text-xs text-[#586062]">or click to browse local files</p>
                </div>
              </div>
            </div>
          )}

          {/* Section: SEO */}
          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Meta Title</label>
                  <span className={`text-[11px] font-medium ${metaTitle.length > 54 ? 'text-[#ba1a1a]' : 'text-[#586062]'}`}>
                    {metaTitle.length} / 60
                  </span>
                </div>
                <input 
                  className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm" 
                  maxLength={60} 
                  placeholder="SEO optimized title..." 
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Meta Description</label>
                  <span className={`text-[11px] font-medium ${metaDesc.length > 144 ? 'text-[#ba1a1a]' : 'text-[#586062]'}`}>
                    {metaDesc.length} / 160
                  </span>
                </div>
                <textarea 
                  className="w-full p-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 focus:border-[#b41e15] outline-none transition-all text-sm resize-none" 
                  maxLength={160} 
                  placeholder="Brief summary for search engines..." 
                  rows={4}
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                />
              </div>
              <div className="p-4 bg-[#dae1e3]/30 rounded-lg border border-[#e4beb8]">
                <p className="text-sm font-semibold tracking-wide text-[#5d6466] flex items-center gap-1 mb-1">
                  <Eye size={18} /> Google Preview
                </p>
                <div className="space-y-1">
                  <div className="text-[#1a0dab] font-medium text-base truncate">
                    {metaTitle || 'Your Page Title Will Appear Here'}
                  </div>
                  <div className="text-[#006621] text-xs">pizzacore.com/summer-menu...</div>
                  <div className="text-[#545454] text-xs line-clamp-2">
                    {metaDesc || 'Your meta description will appear here as a snippet for potential visitors searching on Google...'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: Publishing */}
          {activeTab === 'publishing' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="flex items-start gap-4 p-4 border border-[#8f706b] rounded-xl cursor-pointer hover:bg-[#ffe9e6] transition-colors">
                  <div className="pt-0.5">
                    <input className="w-5 h-5 text-[#b41e15] border-[#8f706b] focus:ring-[#b41e15]" name="publish-status" type="radio" value="draft" defaultChecked />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#271815]">Save as Draft</p>
                    <p className="text-xs text-[#586062]">Only visible to administrators and editors in the CMS dashboard.</p>
                  </div>
                </label>
                <label className="flex items-start gap-4 p-4 border border-[#8f706b] rounded-xl cursor-pointer hover:bg-[#ffe9e6] transition-colors">
                  <div className="pt-0.5">
                    <input className="w-5 h-5 text-[#b41e15] border-[#8f706b] focus:ring-[#b41e15]" name="publish-status" type="radio" value="now" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-[#271815]">Publish Now</p>
                    <p className="text-xs text-[#586062]">Make the page immediately available on the live website.</p>
                  </div>
                </label>
                <label className="flex items-start gap-4 p-4 border border-[#8f706b] rounded-xl cursor-pointer hover:bg-[#ffe9e6] transition-colors">
                  <div className="pt-0.5">
                    <input className="w-5 h-5 text-[#b41e15] border-[#8f706b] focus:ring-[#b41e15]" name="publish-status" type="radio" value="schedule" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold tracking-wide text-[#271815]">Schedule</p>
                    <p className="text-xs text-[#586062] mb-2">Select a date and time for the page to go live automatically.</p>
                    <input className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 outline-none text-xs" type="datetime-local" />
                  </div>
                </label>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-semibold tracking-wide text-[#5b403c]">Tags</label>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="flex items-center gap-1 bg-[#dae1e3] px-2 py-1 rounded-full text-[11px] font-medium text-[#5d6466]">
                    Pizza <button className="hover:text-[#271815] transition-colors"><X size={14} /></button>
                  </span>
                  <span className="flex items-center gap-1 bg-[#dae1e3] px-2 py-1 rounded-full text-[11px] font-medium text-[#5d6466]">
                    Summer <button className="hover:text-[#271815] transition-colors"><X size={14} /></button>
                  </span>
                </div>
                <input className="w-full h-10 px-4 border border-[#8f706b] rounded-lg focus:ring-2 focus:ring-[#b41e15]/20 outline-none text-sm" placeholder="Add tag..." type="text" />
              </div>
            </div>
          )}

        </div>

        {/* Sticky Footer */}
        <div className="p-4 bg-white border-t border-[#e4beb8] grid grid-cols-2 gap-4">
          <button onClick={onClose} className="h-12 flex items-center justify-center border-2 border-[#271815] text-[#271815] text-sm font-semibold tracking-wide rounded-lg active:scale-95 transition-all">
            SAVE DRAFT
          </button>
          <button onClick={onClose} className="h-12 flex items-center justify-center bg-[#b41e15] text-white text-sm font-semibold tracking-wide rounded-lg shadow-lg active:scale-95 transition-all">
            PUBLISH
          </button>
        </div>
        
      </div>
    </div>
  );
}
