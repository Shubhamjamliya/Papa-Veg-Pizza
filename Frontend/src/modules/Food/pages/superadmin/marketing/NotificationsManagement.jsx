import React, { useState } from 'react';
import { Megaphone, Users, MoreVertical, Bell, Mail, MessageSquare, MessageCircle, Filter, Search, LayoutTemplate } from 'lucide-react';
import { NotificationList } from './NotificationData';
import CreateNotification from './CreateNotification';
import NotificationTemplate from './NotificationTemplate';
import NotificationAnalysis from './NotificationAnalysis';

export default function NotificationsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [isTemplateMode, setIsTemplateMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  if (selectedNotification) {
    return <NotificationAnalysis notification={selectedNotification} onBack={() => setSelectedNotification(null)} />;
  }

  if (isCreateMode) {
    return <CreateNotification onBack={() => setIsCreateMode(false)} />;
  }

  if (isTemplateMode) {
    return (
      <NotificationTemplate 
        onBack={() => setIsTemplateMode(false)}
        onSelectTemplate={() => {
          setIsTemplateMode(false);
          setIsCreateMode(true);
        }}
      />
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full pb-24 space-y-8 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Page Title */}
        <section className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Notifications Management</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Manage customer engagement across all channels.</p>
        </section>

        {/* Quick Actions */}
        <section className="flex gap-3 overflow-x-auto scrollbar-none pb-2 md:pb-0">
          <button 
            onClick={() => setIsCreateMode(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all shrink-0"
          >
            <Megaphone size={18} />
            Create Notification
          </button>
          <button 
            onClick={() => setIsTemplateMode(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 text-[var(--primary)] border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 transition-all shrink-0 shadow-sm"
          >
            <LayoutTemplate size={18} />
            Templates
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 text-[var(--primary)] border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 transition-all shrink-0 shadow-sm">
            <Users size={18} />
            Audience Builder
          </button>
        </section>
      </div>

      {/* KPI Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Sent Today', val: '12.4k', trend: '+8%', tColor: 'text-emerald-600 dark:text-emerald-400', fillW: '65%', fillC: 'bg-[var(--primary)]' },
          { label: 'Open Rate', val: '24.2%', trend: '+5%', tColor: 'text-emerald-600 dark:text-emerald-400', fillW: '45%', fillC: 'bg-[var(--primary)]' },
          { label: 'CTR', val: '4.8%', trend: '-1.2%', tColor: 'text-red-600 dark:text-red-400', fillW: '20%', fillC: 'bg-red-500' },
          { label: 'Revenue', val: '$42.5k', trend: '+12%', tColor: 'text-emerald-600 dark:text-emerald-400', fillW: '80%', fillC: 'bg-emerald-500' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:-translate-y-0.5 transition-transform">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{kpi.label}</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">{kpi.val}</span>
              <span className={`text-[10px] font-bold ${kpi.tColor}`}>{kpi.trend}</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 mt-4 rounded-full overflow-hidden">
              <div className={`${kpi.fillC} h-full transition-all duration-1000`} style={{ width: kpi.fillW }}></div>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Charts Section (Delivery Trend) */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">Delivery Trend (7d)</h3>
            <MoreVertical size={16} className="text-zinc-400 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" />
          </div>
          <div className="h-40 flex items-end justify-between gap-1.5 px-2">
            {[40, 60, 55, 85, 70, 95, 80].map((h, i) => (
              <div key={i} className="w-full bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 rounded-t-md relative group h-full flex items-end overflow-hidden">
                <div className="w-full bg-[var(--primary)] rounded-t-md transition-all duration-700 ease-out" style={{ height: `${h}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 px-1 text-[10px] font-bold text-zinc-500 tracking-widest">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
          </div>
        </section>

        {/* Channel Performance */}
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-center">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-6">Channel Performance</h3>
          <div className="space-y-6">
            {[
              { label: 'Push', val: '5.2k', fill: '45%', icon: Bell, color: 'bg-[var(--primary)]' },
              { label: 'Email', val: '4.8k', fill: '40%', icon: Mail, color: 'bg-blue-500' },
              { label: 'SMS', val: '1.2k', fill: '15%', icon: MessageSquare, color: 'bg-red-500' },
              { label: 'WhatsApp', val: '1.2k', fill: '15%', icon: MessageCircle, color: 'bg-emerald-500' }
            ].map((chan, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 font-semibold text-zinc-700 dark:text-zinc-300">
                    <chan.icon size={16} className="text-zinc-400" /> {chan.label}
                  </span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{chan.val}</span>
                </div>
                <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`${chan.color} h-full transition-all duration-1000 ease-out`} style={{ width: chan.fill }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Filter Bar */}
      <section className="flex gap-3 items-center">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-[var(--primary)] outline-none transition-shadow text-zinc-900 dark:text-zinc-100 shadow-sm" 
            placeholder="Search notifications..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm active:scale-95">
          <Filter size={18} />
        </button>
      </section>

      {/* Recent Notifications List */}
      <section className="space-y-4 pb-12">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest px-1">Recent Notifications</h3>
        <NotificationList searchTerm={searchTerm} onSelect={setSelectedNotification} />
      </section>
    </div>
  );
}
