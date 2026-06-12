import React, { useState, useEffect } from 'react';
import { Bell, Mail, MessageSquare, MessageCircle } from 'lucide-react';

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'Free Garlic Knots with Order!',
    channel: 'Push',
    time: '2 mins ago',
    status: 'Completed',
    count: '4,502'
  },
  {
    id: 2,
    title: 'Weekend Special: Buy 1 Get 1',
    channel: 'Email',
    time: '45 mins ago',
    status: 'Sending',
    count: '1,240'
  },
  {
    id: 3,
    title: 'Order #4212 is out for delivery!',
    channel: 'WhatsApp',
    time: '2 hours ago',
    status: 'Completed',
    count: '842'
  },
  {
    id: 4,
    title: 'Store Update: Holiday Hours',
    channel: 'SMS',
    time: '5 hours ago',
    status: 'Failed',
    count: '0'
  }
];

export function NotificationList({ searchTerm, onSelect }) {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [filteredData, setFilteredData] = useState(NOTIFICATIONS_DATA);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearch) {
      const lower = debouncedSearch.toLowerCase();
      setFilteredData(NOTIFICATIONS_DATA.filter(n => 
        n.title.toLowerCase().includes(lower) || 
        n.channel.toLowerCase().includes(lower) ||
        n.status.toLowerCase().includes(lower)
      ));
    } else {
      setFilteredData(NOTIFICATIONS_DATA);
    }
  }, [debouncedSearch]);

  const getIcon = (channel) => {
    switch (channel) {
      case 'Push': return <Bell size={14} />;
      case 'Email': return <Mail size={14} />;
      case 'WhatsApp': return <MessageCircle size={14} />;
      case 'SMS': return <MessageSquare size={14} />;
      default: return <Bell size={14} />;
    }
  };

  const getIconColorClass = (channel) => {
    switch (channel) {
      case 'Push': return 'text-[var(--primary)]';
      case 'Email': return 'text-blue-500';
      case 'WhatsApp': return 'text-green-600';
      case 'SMS': return 'text-red-500';
      default: return 'text-[var(--primary)]';
    }
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400';
      case 'Sending': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400';
      case 'Failed': return 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400';
      default: return 'bg-zinc-100 text-black/70 dark:bg-zinc-800 dark:text-white/70';
    }
  };

  return (
    <div className="space-y-2">
      {filteredData.length > 0 ? filteredData.map((notif) => (
        <div 
          key={notif.id} 
          onClick={() => onSelect && onSelect(notif)}
          className="flex flex-col sm:flex-row sm:items-center gap-3 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:shadow-sm transition-all group cursor-pointer hover:border-[var(--primary)]/30 active:scale-[0.99]"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className={`w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-805 flex items-center justify-center shrink-0 ${getIconColorClass(notif.channel)}`}>
              {getIcon(notif.channel)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-black dark:text-white truncate">{notif.title}</h4>
              <div className="flex items-center gap-1.5 text-[9px] text-black/50 dark:text-white/50 font-semibold mt-0.5">
                <span>{notif.channel}</span>
                <span>•</span>
                <span>{notif.time}</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 gap-2 sm:gap-0.5 mt-1 sm:mt-0 pl-11 sm:pl-0">
            <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${getStatusClasses(notif.status)} uppercase tracking-wide`}>
              {notif.status}
            </span>
            <span className="text-xs font-bold text-black dark:text-white">{notif.count}</span>
          </div>
        </div>
      )) : (
        <div className="p-6 text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <p className="text-black/60 dark:text-white/60 text-xs font-semibold">No notifications match your search.</p>
        </div>
      )}
    </div>
  );
}
