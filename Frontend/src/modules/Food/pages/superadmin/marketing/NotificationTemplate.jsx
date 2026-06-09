import React, { useState } from 'react';
import { Search, Plus, Bell, MessageSquare, Mail, Smartphone, Edit2, Copy, ArrowLeft } from 'lucide-react';

const TEMPLATES = [
  {
    id: 1,
    category: 'Promotion',
    categoryColor: 'text-[var(--primary)] bg-[var(--primary)]/10',
    title: 'BOGO Tuesday Special',
    description: '"Buy one large pizza and get the second one half off! Valid today only at participating stores..."',
    channels: [{ icon: Bell, title: 'Push' }, { icon: MessageSquare, title: 'SMS' }],
    lastUsed: '2h ago'
  },
  {
    id: 2,
    category: 'Order Updates',
    categoryColor: 'text-indigo-600 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-500/20',
    title: 'Out for Delivery',
    description: '"Your PizzaPulse order is on the move! Track your driver Marco in real-time..."',
    channels: [{ icon: Bell, title: 'Push' }, { icon: Smartphone, title: 'WhatsApp' }],
    lastUsed: '15m ago'
  },
  {
    id: 3,
    category: 'System Alert',
    categoryColor: 'text-red-600 bg-red-500/10 dark:text-red-400 dark:bg-red-500/20',
    title: 'Delayed Preparation',
    description: '"We\'re seeing higher than usual demand. Your order might take 10-15 minutes longer..."',
    channels: [{ icon: Mail, title: 'Email' }],
    lastUsed: 'Yesterday'
  },
  {
    id: 4,
    category: 'Loyalty',
    categoryColor: 'text-zinc-600 bg-zinc-500/10 dark:text-zinc-400 dark:bg-zinc-500/20',
    title: 'Points Milestone',
    description: '"You\'ve earned 500 PulsePoints! That\'s enough for a free side of Garlic Knots..."',
    channels: [{ icon: Bell, title: 'Push' }],
    lastUsed: '4d ago'
  },
  {
    id: 5,
    category: 'Promotion',
    categoryColor: 'text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/20',
    title: 'Late Night Hunger?',
    description: '"Open late! Order any pizza after 10 PM and get free delivery with code NIGHTOWL..."',
    channels: [{ icon: Bell, title: 'Push' }, { icon: MessageSquare, title: 'SMS' }],
    lastUsed: '12h ago'
  }
];

export default function NotificationTemplate({ onBack, onSelectTemplate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Promotions', 'Order Updates', 'Loyalty', 'System Alerts'];

  const filteredTemplates = activeCategory === 'All' 
    ? TEMPLATES 
    : TEMPLATES.filter(t => t.category.toLowerCase().includes(activeCategory.toLowerCase().replace(/s$/, '')));

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24 animate-in fade-in slide-in-from-right-4 duration-300 relative z-50">
      {/* Top Header */}
      <header className="w-full sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between h-16 px-4 md:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center">
            <ArrowLeft size={20} className="text-[var(--primary)]" />
          </button>
          <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Template Library</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <Search size={20} className="text-zinc-500" />
          </button>
          <button onClick={() => onSelectTemplate && onSelectTemplate()} className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all hidden sm:block">
            NEW CAMPAIGN
          </button>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Category Scroll */}
        <section className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-[var(--primary)] text-white shadow-md hover:scale-105' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm'}`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Template Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map(template => (
            <div key={template.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col shadow-sm">
              <div className="h-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800">
                <div className={`absolute inset-0 opacity-60 ${template.categoryColor.split(' ')[1]}`}></div>
                <div className={`relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase shadow-sm tracking-wider ${template.categoryColor.split(' ')[0]}`}>
                  {template.category}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{template.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-4 italic">
                  {template.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex gap-2">
                    {template.channels.map((chan, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center" title={chan.title}>
                        <chan.icon size={16} className="text-zinc-500 dark:text-zinc-400" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase font-bold tracking-wider">
                    Last used: {template.lastUsed}
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950 flex items-center gap-2 border-t border-zinc-200 dark:border-zinc-800">
                <button onClick={() => onSelectTemplate && onSelectTemplate(template)} className="flex-1 bg-[var(--primary)] text-white font-bold text-sm py-2.5 rounded-lg hover:bg-[var(--primary)]/90 active:scale-95 transition-all shadow-sm">
                  Use Template
                </button>
                <button className="p-2.5 text-zinc-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors border border-transparent hover:border-[var(--primary)]/20 bg-white dark:bg-zinc-900 shadow-sm">
                  <Edit2 size={18} />
                </button>
                <button className="p-2.5 text-zinc-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors border border-transparent hover:border-[var(--primary)]/20 bg-white dark:bg-zinc-900 shadow-sm">
                  <Copy size={18} />
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Floating Action Button */}
      <button onClick={() => onSelectTemplate && onSelectTemplate()} className="fixed bottom-8 right-8 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group md:hidden">
        <Plus size={28} />
      </button>
    </div>
  );
}
