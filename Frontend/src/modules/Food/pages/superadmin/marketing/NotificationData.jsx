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
      case 'Push': return <Bell size={20} />;
      case 'Email': return <Mail size={20} />;
      case 'WhatsApp': return <MessageCircle size={20} />;
      case 'SMS': return <MessageSquare size={20} />;
      default: return <Bell size={20} />;
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
      default: return 'bg-zinc-100 text-zinc-700';
    }
  };

  return (
    <div className="space-y-3">
      {filteredData.length > 0 ? filteredData.map((notif) => (
        <div 
          key={notif.id} 
          onClick={() => onSelect && onSelect(notif)}
          className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:shadow-sm transition-all group cursor-pointer hover:border-[var(--primary)]/30 active:scale-[0.99]"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className={`w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 ${getIconColorClass(notif.channel)}`}>
              {getIcon(notif.channel)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{notif.title}</h4>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-medium mt-1">
                <span>{notif.channel}</span>
                <span>•</span>
                <span>{notif.time}</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 gap-2 sm:gap-1 mt-2 sm:mt-0 pl-14 sm:pl-0">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getStatusClasses(notif.status)} uppercase tracking-wide`}>
              {notif.status}
            </span>
            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{notif.count}</span>
          </div>
        </div>
      )) : (
        <div className="p-8 text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">No notifications match your search.</p>
        </div>
      )}
    </div>
  );
}
