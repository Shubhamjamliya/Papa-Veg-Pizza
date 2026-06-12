import React, { useState, useEffect } from "react";
import { X, Info, Phone, Mail, MapPin, ArrowUp, ArrowDown, Star, StarHalf } from "lucide-react";
import { toast } from "sonner";

export default function FranchiseStoresDetails({ isOpen, onClose, store, onEdit }) {
  const [activeTab, setActiveTab] = useState("basic");

  // Reset tab when a new store is opened
  useEffect(() => {
    if (isOpen) {
      setActiveTab("basic");
    }
  }, [isOpen, store]);

  const handleArchive = () => {
    toast.success(`Store ${store?.name || "Indiranagar Central"} has been archived.`);
    onClose();
  };

  const handleEdit = () => {
    if (onEdit) onEdit(store);
  };

  // Don't render internal drawer DOM unless it's open (or rely on translation CSS)
  // Let's use standard translate-x for the drawer.
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed right-0 top-0 h-screen w-full sm:w-[420px] lg:w-[450px] bg-white dark:bg-zinc-950 z-50 shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-start">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {store?.name || "Indiranagar Central"}
              </h2>
              <span className="bg-[var(--secondary)]/10 text-[var(--secondary)] text-[10px] font-semibold px-1.5 py-0.5 rounded border border-[var(--secondary)]/20">
                {store?.id || "PV-INC-084"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className={`w-2 h-2 rounded-full animate-pulse ${store?.status === 'Active' ? 'bg-emerald-500' : store?.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
              <span className="text-zinc-500 font-bold uppercase">{store?.status || 'ACTIVE'} STORE</span>
              <span className="text-zinc-400 mx-0.5">•</span>
              <span className="text-zinc-500 font-semibold">Joined May 2022</span>
            </div>
          </div>
          <button 
            className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400" 
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex gap-4 overflow-x-auto scrollbar-none">
          {['basic', 'contact', 'location', 'operations', 'performance'].map((tab) => (
            <button
              key={tab}
              className={`py-2 text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab 
                  ? 'border-[var(--primary)] text-[var(--primary)]' 
                  : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'basic' && "Basic Info"}
              {tab === 'contact' && "Contact"}
              {tab === 'location' && "Location"}
              {tab === 'operations' && "Operations"}
              {tab === 'performance' && "Performance"}
            </button>
          ))}
        </div>

        {/* Scrollable Content Canvas */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 p-3.5 bg-white dark:bg-zinc-950">
          
          {/* Basic Information Section */}
          {activeTab === 'basic' && (
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Legal Entity Name</label>
                  <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">Veg Delight Enterprises LLP</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">GST Number</label>
                  <div>
                    <p className="font-mono text-[10px] text-zinc-900 dark:text-zinc-100 px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded inline-block">29AAACG1234F1Z5</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Store Manager</label>
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold text-[10px]">
                      {store?.owner ? store.owner.split(' ').map(n => n[0]).join('') : 'RK'}
                    </div>
                    <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">{store?.owner || "Rajesh Kumar"}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">FSSAI License</label>
                  <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">11222999000456</p>
                </div>
              </div>

              <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 border-dashed">
                <h4 className="text-xs font-bold mb-2 flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
                  <Info className="text-[var(--primary)]" size={16} />
                  Store Bio
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs">
                  High-traffic flagship outlet located in the heart of {store?.region || "Indiranagar"}. This branch specializes in express delivery and dine-in experiences, consistently ranking in the top 5th percentile for customer satisfaction scores across the Region.
                </p>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <section className="space-y-3.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-3.5 p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                <div className="bg-[var(--primary)]/10 p-2.5 rounded-full text-[var(--primary)]">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Primary Phone</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{store?.phone || "+91 98765 43210"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3.5 p-2.5 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                <div className="bg-[var(--primary)]/10 p-2.5 rounded-full text-[var(--primary)]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Store Email</p>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">contact@papavegpizza.com</p>
                </div>
              </div>
            </section>
          )}

          {/* Location Section */}
          {activeTab === 'location' && (
            <section className="space-y-3.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="w-full h-40 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 relative group">
                <img 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" 
                  alt="Map view" 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
                />
                <div className="absolute bottom-2 left-2 bg-white dark:bg-zinc-900 shadow-lg px-2 py-1 rounded-md flex items-center gap-1.5">
                  <MapPin className="text-[var(--primary)]" size={14} fill="currentColor" />
                  <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100">12.9716° N, 77.5946° E</span>
                </div>
              </div>
              <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Physical Address</p>
                <p className="text-xs text-zinc-900 dark:text-zinc-100">{store?.location || "No. 456, 12th Main Road, Bengaluru, Karnataka"}</p>
              </div>
            </section>
          )}

          {/* Operations Section */}
          {activeTab === 'operations' && (
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Delivery Radius</p>
                  <div className="flex items-end gap-0.5">
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">5.5</span>
                    <span className="text-zinc-500 text-[10px] mb-0.5">km</span>
                  </div>
                  <div className="mt-2.5 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--primary)] w-[70%]"></div>
                  </div>
                </div>
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Avg. Prep Time</p>
                  <div className="flex items-end gap-0.5">
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">14</span>
                    <span className="text-zinc-500 text-[10px] mb-0.5">mins</span>
                  </div>
                  <div className="mt-2.5 h-1 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[45%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mb-2">Store Hours</h4>
                <div className="space-y-1">
                  <div className="flex justify-between items-center py-1.5 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 text-xs">Monday - Friday</span>
                    <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">11:00 AM - 11:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-500 text-xs">Saturday - Sunday</span>
                    <span className="font-bold text-xs text-[var(--primary)]">10:00 AM - 01:00 AM</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Performance Summary Section */}
          {activeTab === 'performance' && (
            <section className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Total Orders</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">12,450</span>
                    <span className="text-emerald-500 font-bold text-[10px] flex items-center">
                      <ArrowUp size={10} />12%
                    </span>
                  </div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Revenue</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{store?.revenue || "₹8.2L"}</span>
                    <span className="text-emerald-500 font-bold text-[10px] flex items-center">
                      <ArrowUp size={10} />8%
                    </span>
                  </div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Avg. Value</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">₹658</span>
                    <span className="text-red-500 font-bold text-[10px] flex items-center">
                      <ArrowDown size={10} />2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Simple Trend Charts */}
              <div className="space-y-4">
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Revenue Trend</h5>
                      <p className="text-[10px] text-zinc-500">Last 30 Days</p>
                    </div>
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
                      <span className="text-[10px] text-zinc-500">Current Period</span>
                    </div>
                  </div>
                  {/* Mock Chart Visualization */}
                  <div className="h-24 w-full flex items-end gap-1">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 80, 90, 85, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t-sm transition-colors cursor-pointer ${h === 95 ? 'bg-[var(--primary)]' : 'bg-[var(--primary)]/20 hover:bg-[var(--primary)]'}`} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <h5 className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Customer Ratings</h5>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">4.8</span>
                      <div className="flex text-orange-400">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <StarHalf size={16} fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-[10px] text-zinc-500 mt-1">Based on 2.4k reviews</p>
                  </div>
                  <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <h5 className="text-[10px] font-bold text-zinc-500 uppercase mb-2">Fulfillment Rate</h5>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">99.2%</span>
                      <div className="w-6 h-6 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin-slow"></div>
                    </div>
                    <p className="text-[10px] text-emerald-500 mt-1 font-semibold">Critical Target: &gt;98%</p>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between gap-3">
          <button 
            onClick={handleArchive}
            className="flex-1 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-xs rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Archive Store
          </button>
          <button 
            onClick={handleEdit}
            className="flex-1 py-2 bg-[var(--primary)] text-white font-semibold text-xs rounded-lg hover:brightness-110 shadow-md active:scale-95 transition-all"
          >
            Edit Information
          </button>
        </div>
      </div>
    </>
  );
}
