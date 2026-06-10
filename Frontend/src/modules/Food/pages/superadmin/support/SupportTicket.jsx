import React, { useState } from 'react';
import { Plus, Ticket, Hourglass, CheckCircle2, BadgeCheck, AlertTriangle, Clock, TrendingUp, PackageSearch } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TicketQueue from './TicketQueue';
import TicketDetails from './TicketDetails';
import AssignTicket from './AssignTicket';
import EscalateTicket from './EscalateTicket';
import UpdateTicket from './UpdateTicket';

const trendData = [
  { name: 'Mon', tickets: 120 },
  { name: 'Tue', tickets: 180 },
  { name: 'Wed', tickets: 150 },
  { name: 'Thu', tickets: 280 },
  { name: 'Fri', tickets: 200 },
  { name: 'Sat', tickets: 90 },
  { name: 'Sun', tickets: 70 },
];

const SupportTicket = () => {
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isEscalateModalOpen, setIsEscalateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 space-y-8 pb-24 w-full animate-in fade-in duration-500">
      {/* Hero Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Support Tickets</h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mt-1">Manage customer, franchise, rider, and internal support requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center w-full md:w-auto gap-2 px-6 py-2.5 bg-[var(--primary)] text-white rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-sm">
            <Plus className="w-5 h-5" /> Create Ticket
          </button>
        </div>
      </section>

      {/* KPI Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Card: Open */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
              <Ticket className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase text-[var(--primary)] font-bold bg-[var(--primary)]/10 px-2 py-1 rounded-full">+12%</span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Open Tickets</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">1,284</p>
          </div>
          <div className="mt-5 h-8 flex items-end">
            <div className="w-full bg-[var(--primary)]/20 h-2 rounded-full overflow-hidden">
              <div className="bg-[var(--primary)] h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Card: Pending */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
              <Hourglass className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase text-orange-600 font-bold bg-orange-100 dark:bg-orange-500/20 dark:text-orange-400 px-2 py-1 rounded-full">-4%</span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Pending</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">456</p>
          </div>
          <div className="mt-5 h-8 w-full flex items-end pb-1">
            <svg className="w-full h-8 text-orange-500 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 10 5, 20 12 T 40 8 T 60 15 T 80 5 T 100 10" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>

        {/* Card: Resolved Today */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase text-emerald-600 font-bold bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400 px-2 py-1 rounded-full">+24%</span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Resolved Today</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">182</p>
          </div>
          <div className="mt-5 h-8 w-full flex items-end pb-1">
            <svg className="w-full h-8 text-emerald-500 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 18 L 10 14 L 20 16 L 30 10 L 40 12 L 50 6 L 60 8 L 70 2 L 80 5 L 100 0" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>

        {/* Card: SLA Compliance */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase text-blue-600 font-bold bg-blue-100 dark:bg-blue-500/20 dark:text-blue-400 px-2 py-1 rounded-full">On Target</span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">SLA Compliance</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">98.2%</p>
          </div>
          <div className="mt-5 flex items-center justify-between text-xs font-semibold">
            <span className="text-zinc-500 dark:text-zinc-400">Target: 95%</span>
            <span className="text-blue-600 dark:text-blue-400">Excellent</span>
          </div>
        </div>

        {/* Card: High Priority */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">High Priority</p>
            <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-1">42</p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-red-500 rounded-full"></div>
            </div>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">33% active</span>
          </div>
        </div>

        {/* Card: Avg Res Time */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Avg Res Time</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">2h 14m</p>
          </div>
          <p className="mt-5 text-xs font-medium text-zinc-500 dark:text-zinc-400 italic">15m faster than yesterday</p>
        </div>

        {/* Card: Escalated */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Escalated</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">12</p>
          </div>
          <div className="mt-5 flex items-center gap-1">
            <span className="text-xs font-semibold text-red-500">High workload detected</span>
          </div>
        </div>

        {/* Card: Closed */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              <PackageSearch className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Total Closed</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">8,421</p>
          </div>
          <div className="mt-5 flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-700"></div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-300 dark:bg-zinc-600"></div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-400 dark:bg-zinc-500"></div>
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-500 dark:bg-zinc-400 flex items-center justify-center text-[10px] text-white font-bold">+5</div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ticket Trend Line Chart */}
        <div className="lg:col-span-2 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Ticket Volume Trend</h3>
            <select className="text-sm font-medium border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="flex-grow w-full h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary, #005ab4)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary, #005ab4)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e2eb" className="dark:stroke-zinc-700" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} tickMargin={10} className="text-zinc-500 dark:text-zinc-400" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} className="text-zinc-500 dark:text-zinc-400" />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e0e2eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'var(--surface-container-lowest, #fff)' }}
                  itemStyle={{ color: 'var(--primary, #005ab4)', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="tickets" stroke="var(--primary, #005ab4)" strokeWidth={3} fillOpacity={1} fill="url(#colorTickets)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-6">Tickets by Category</h3>
          <div className="flex-grow flex items-center justify-center relative my-4">
            {/* Doughnut Chart Simulation */}
            <div className="relative w-48 h-48 rounded-full border-[24px] border-zinc-50 dark:border-zinc-800 flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 rounded-full border-[24px] border-[var(--primary)] hover:opacity-90 transition-opacity cursor-pointer" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[24px] border-blue-400 hover:opacity-90 transition-opacity cursor-pointer" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[24px] border-orange-400 hover:opacity-90 transition-opacity cursor-pointer" style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 75%)' }}></div>
              <div className="flex flex-col items-center mt-[-24px] ml-[-24px]">
                <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1.2k</span>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Total</span>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center text-sm p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--primary)] shadow-sm"></div>
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Customer Support</span>
              </div>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">45%</span>
            </div>
            <div className="flex justify-between items-center text-sm p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-400 shadow-sm"></div>
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Franchise Queries</span>
              </div>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">30%</span>
            </div>
            <div className="flex justify-between items-center text-sm p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-400 shadow-sm"></div>
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Rider Relations</span>
              </div>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">15%</span>
            </div>
            <div className="flex justify-between items-center text-sm p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700 shadow-sm"></div>
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Internal IT</span>
              </div>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">10%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Rendering based on state */}
      {selectedTicketId ? (
          <TicketDetails 
            ticketId={selectedTicketId} 
            onBack={() => setSelectedTicketId(null)} 
            onAssignClick={() => setIsAssignModalOpen(true)} 
            onEscalateClick={() => setIsEscalateModalOpen(true)} 
            onStatusClick={() => setIsUpdateModalOpen(true)}
          />
      ) : (
          <TicketQueue onTicketSelect={setSelectedTicketId} onAssignClick={() => setIsAssignModalOpen(true)} />
      )}

      </div>

      {/* Assign Modal */}
      <AssignTicket isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} />
      
      {/* Escalate Modal */}
      <EscalateTicket isOpen={isEscalateModalOpen} onClose={() => setIsEscalateModalOpen(false)} ticketId={selectedTicketId} />

      {/* Update Status Modal */}
      <UpdateTicket isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} ticketId={selectedTicketId} />
    </>
  );
};

export default SupportTicket;
