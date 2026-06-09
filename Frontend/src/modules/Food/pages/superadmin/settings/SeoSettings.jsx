import React, { useState, useEffect } from 'react';
import { Network, ShieldCheck, BadgeCheck, Filter, Search, CheckCircle, AlertTriangle, XCircle, RefreshCw, DownloadCloud, Radio, Edit2, CheckSquare, Eye, ExternalLink } from 'lucide-react';
import EditSeoSettings from './EditSeoSettings';
import SocialPreview from './SocialPreview';

export default function SeoSettings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const initialPages = [
    {
      id: 1,
      name: "Home Page",
      url: "pizza-master.com/",
      status: "Excellent",
      statusColor: "bg-green-100 text-green-700",
      tags: [
        { label: "INDEXED", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" },
        { label: "OG READY", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" },
        { label: "META OK", color: "bg-[var(--primary)]/10 text-[var(--primary)]" },
      ]
    },
    {
      id: 2,
      name: "Blog: Perfect Crust",
      url: "/blog/perfect-crust",
      status: "Good",
      statusColor: "bg-amber-100 text-amber-700",
      tags: [
        { label: "INDEXED", color: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400" },
        { label: "OG MISSING", color: "bg-red-100 text-red-700" },
      ]
    }
  ];

  const filteredPages = initialPages.filter(page => 
    page.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
    page.url.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      
      {/* Header Actions */}
      <section className="space-y-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">SEO Settings</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage meta tags, indexing, and social previews.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[var(--primary)] text-white py-2 px-4 rounded-lg text-sm font-bold shadow hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2">
            <Network size={18} />
            Sitemap
          </button>
          <button className="flex-1 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-2 px-4 rounded-lg text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all active:scale-95 flex items-center justify-center gap-2">
            <ShieldCheck size={18} />
            Health Scan
          </button>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg flex flex-col justify-between shadow-sm">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">Indexed Pages</span>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">156</span>
            <span className="text-xs font-bold text-green-600">+12</span>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-full relative flex items-center justify-center" style={{ background: 'conic-gradient(var(--primary) calc(92 * 1%), #e5e7eb 0)' }}>
              <div className="absolute inset-1 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-[var(--primary)]">92%</span>
              </div>
            </div>
            <BadgeCheck size={20} className="text-[var(--primary)]" />
          </div>
          <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Health Score</p>
        </div>

        <div className="col-span-2 bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-between shadow-sm">
          <div className="space-y-1">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase">Warnings</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">12 Meta</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">8 OG Tags</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-bold">Last Sync</p>
            <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mt-0.5">09 Jun, 10:45 AM</p>
          </div>
        </div>
      </section>

      {/* SEO Pages Management */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Page Management</h2>
          <button className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <Filter size={20} />
          </button>
        </div>
        
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-sm text-zinc-900 dark:text-zinc-100 transition-all" 
            placeholder="Search pages..." 
          />
        </div>

        <div className="space-y-3">
          {filteredPages.map(page => (
            <div key={page.id} className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-3 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{page.name}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{page.url}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${page.statusColor}`}>{page.status}</span>
                  <button onClick={() => setIsPreviewModalOpen(true)} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 hover:text-blue-500 transition-colors active:scale-95" title="Preview">
                    <Eye size={16} />
                  </button>
                  <button onClick={() => setIsEditModalOpen(true)} className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-400 hover:text-[var(--primary)] transition-colors active:scale-95" title="Edit">
                    <Edit2 size={16} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {page.tags.map((tag, idx) => (
                  <span key={idx} className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${tag.color}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {filteredPages.length === 0 && (
            <div className="text-center py-6 text-zinc-500 text-sm">No pages found matching "{searchTerm}"</div>
          )}
        </div>
      </section>

      {/* Health Monitor */}
      <section className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Global SEO Checklist</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-600" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Meta Titles</span>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">All Pages</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-green-600" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Meta Descriptions</span>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">All Pages</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle size={18} className="text-amber-500" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Canonical URLs</span>
            </div>
            <span className="text-xs font-medium text-amber-600">3 Missing</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <XCircle size={18} className="text-red-500" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Structured Data</span>
            </div>
            <span className="text-xs font-medium text-red-600">Required</span>
          </div>
        </div>
      </section>

      {/* Sitemap Management */}
      <section className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Sitemap</h2>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Auto-gen</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>
        </div>
        
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Current URL</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">/sitemap_index.xml</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Total URLs</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">248 Pages</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center gap-1.5 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <RefreshCw size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Regen</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <DownloadCloud size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Fetch</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 p-3 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Radio size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Ping</span>
          </button>
        </div>
      </section>

      {/* Robots Configuration */}
      <section className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Robots & Indexing</h2>
        
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Allow Search Crawling</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Global indexation setting</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Image Indexing</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Allow Google Images to index media</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-zinc-300 dark:bg-zinc-600 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>
          
          <div className="space-y-2 pt-2">
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Robots.txt Preview</p>
            <div className="bg-zinc-950 text-zinc-300 p-4 rounded-lg font-mono text-xs leading-loose overflow-x-auto">
              User-agent: *<br/>
              Disallow: /admin/<br/>
              Disallow: /checkout/<br/>
              Allow: /<br/>
              <br/>
              Sitemap: https://pizza-master.com/sitemap.xml
            </div>
          </div>
        </div>
      </section>

      {/* Social Preview Center */}
      <section className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Social Previews</h2>
          <button onClick={() => setIsPreviewModalOpen(true)} className="flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline">
            View Simulator <ExternalLink size={14} />
          </button>
        </div>
        
        <div className="flex border-b border-zinc-200 dark:border-zinc-800">
          <button className="flex-1 py-2 text-[var(--primary)] font-bold text-sm border-b-2 border-[var(--primary)]">Google</button>
          <button className="flex-1 py-2 text-zinc-500 dark:text-zinc-400 font-bold text-sm hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Facebook</button>
          <button className="flex-1 py-2 text-zinc-500 dark:text-zinc-400 font-bold text-sm hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Twitter</button>
        </div>
        
        <div className="space-y-3 pt-2">
          <div className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline cursor-pointer">Pizza Master | Handcrafted Artisanal Pizza Delivered Fast</div>
          <div className="text-green-700 dark:text-green-500 text-sm">https://pizza-master.com/</div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">Experience the best artisanal pizza. Fresh ingredients, 400-degree stone ovens, and authentic recipes from the heart of Italy to your doorstep.</p>
          <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 mt-3 relative group">
            <img 
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop" 
              alt="Gourmet Pizza" 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button onClick={() => setIsPreviewModalOpen(true)} className="bg-white text-zinc-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                <Eye size={16} /> Open Detailed Simulator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent SEO Activities */}
      <section className="space-y-4 pb-8">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Recent Activity</h2>
        
        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
          
          <div className="relative pl-10">
            <div className="absolute left-0 top-1 w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-zinc-950">
              <Edit2 size={12} className="text-red-600 dark:text-red-400" />
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">SEO Manager updated Meta Title</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">"Best Pizza" &rarr; "Authentic Pizza Master"</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1.5">2 HOURS AGO</p>
          </div>
          
          <div className="relative pl-10">
            <div className="absolute left-0 top-1 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-zinc-950">
              <RefreshCw size={12} className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Marketing Team generated Sitemap</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">248 URLs processed successfully</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1.5">6 HOURS AGO</p>
          </div>
          
          <div className="relative pl-10">
            <div className="absolute left-0 top-1 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center border-4 border-zinc-50 dark:border-zinc-950">
              <CheckSquare size={12} className="text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">System Health Scan Complete</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Score improved from 88% to 92%</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1.5">YESTERDAY</p>
          </div>
          
        </div>
      </section>

      {/* Edit SEO Modal */}
      <EditSeoSettings isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
      
      {/* Social Preview Modal */}
      <SocialPreview isOpen={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)} />

    </div>
  );
}
