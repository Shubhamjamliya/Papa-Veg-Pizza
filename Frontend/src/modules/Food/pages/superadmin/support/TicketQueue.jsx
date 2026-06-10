import React, { useState } from 'react';
import { Search, AlertTriangle, ChevronsUp, ChevronUp, Eye, Reply, UserPlus, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const TicketQueue = ({ onTicketSelect, onAssignClick }) => {
    const [activeStatus, setActiveStatus] = useState('All');
    const [activePriority, setActivePriority] = useState('All');

    return (
        <div className="space-y-6">
            {/* Hero Search & Filter Section */}
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-4 md:p-6">
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Ticket Explorer</h2>
                        <div className="relative w-full md:w-96 group">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[var(--primary)] transition-colors" />
                            <input 
                                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-50" 
                                placeholder="Search Ticket ID, Subject, or User..." 
                                type="text"
                            />
                        </div>
                    </div>
                    
                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-2">
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">Status:</span>
                        {['All', 'Open', 'Pending', 'Resolved'].map(status => (
                            <button 
                                key={status}
                                onClick={() => setActiveStatus(status)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                                    activeStatus === status 
                                    ? 'bg-[var(--primary)] text-white' 
                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                        
                        <div className="hidden sm:block h-6 w-px bg-zinc-200 dark:bg-zinc-700 mx-2"></div>
                        
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1 mt-2 sm:mt-0">Priority:</span>
                        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                            <button 
                                onClick={() => setActivePriority('Urgent')}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                                    activePriority === 'Urgent' ? 'bg-red-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${activePriority === 'Urgent' ? 'bg-white' : 'bg-red-500'}`}></span> Urgent
                            </button>
                            <button 
                                onClick={() => setActivePriority('High')}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                                    activePriority === 'High' ? 'bg-orange-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${activePriority === 'High' ? 'bg-white' : 'bg-orange-500'}`}></span> High
                            </button>
                            <button 
                                onClick={() => setActivePriority('Normal')}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                                    activePriority === 'Normal' ? 'bg-blue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                }`}
                            >
                                <span className={`w-2 h-2 rounded-full ${activePriority === 'Normal' ? 'bg-white' : 'bg-blue-500'}`}></span> Normal
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Table Section */}
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                            <tr>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider whitespace-nowrap">Ticket #</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Subject</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider whitespace-nowrap">User Type</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Category</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Priority</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Status</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider whitespace-nowrap">SLA Remaining</th>
                                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {/* Ticket 1 */}
                            <tr onClick={() => onTicketSelect && onTicketSelect('#TK-8821')} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer">
                                <td className="px-4 py-4 font-mono text-sm font-bold text-[var(--primary)]">#TK-8821</td>
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">API Gateway Authentication Failure</span>
                                        <span className="text-xs text-zinc-500 truncate w-48 mt-0.5">Reporting intermittent 401 errors on production...</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">Enterprise</span>
                                </td>
                                <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400 font-medium">Infrastructure</td>
                                <td className="px-4 py-4">
                                    <span className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-semibold text-sm">
                                        <AlertTriangle className="w-4 h-4" /> Urgent
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 text-xs font-bold">Open</span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-4/5"></div>
                                        </div>
                                        <span className="text-xs font-bold text-red-600 dark:text-red-400">14m</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Reply"><Reply className="w-4 h-4" /></button>
                                        <button onClick={(e) => { e.stopPropagation(); onAssignClick && onAssignClick(); }} className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Assign"><UserPlus className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                            {/* Ticket 2 */}
                            <tr onClick={() => onTicketSelect && onTicketSelect('#TK-8754')} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer">
                                <td className="px-4 py-4 font-mono text-sm font-bold text-[var(--primary)]">#TK-8754</td>
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Dashboard widgets not loading</span>
                                        <span className="text-xs text-zinc-500 truncate w-48 mt-0.5">Analytics components showing loading spinner indefinitely...</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">Premium</span>
                                </td>
                                <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400 font-medium">Frontend</td>
                                <td className="px-4 py-4">
                                    <span className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400 font-semibold text-sm">
                                        <ChevronsUp className="w-4 h-4" /> High
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 text-xs font-bold">Pending</span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-1/2"></div>
                                        </div>
                                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400">4h 12m</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Reply"><Reply className="w-4 h-4" /></button>
                                        <button onClick={(e) => { e.stopPropagation(); onAssignClick && onAssignClick(); }} className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Assign"><UserPlus className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                            {/* Ticket 3 */}
                            <tr onClick={() => onTicketSelect && onTicketSelect('#TK-8690')} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer">
                                <td className="px-4 py-4 font-mono text-sm font-bold text-[var(--primary)]">#TK-8690</td>
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Typo in billing invoice</span>
                                        <span className="text-xs text-zinc-500 truncate w-48 mt-0.5">Company name misspelled on the June invoice...</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-2 py-1 rounded bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-wider">Basic</span>
                                </td>
                                <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400 font-medium">Billing</td>
                                <td className="px-4 py-4">
                                    <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                                        <ChevronUp className="w-4 h-4" /> Normal
                                    </span>
                                </td>
                                <td className="px-4 py-4">
                                    <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-bold">In Review</span>
                                </td>
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-[var(--primary)] w-1/4"></div>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">22h</span>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-right">
                                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                                        <button className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Reply"><Reply className="w-4 h-4" /></button>
                                        <button onClick={(e) => { e.stopPropagation(); onAssignClick && onAssignClick(); }} className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-[var(--primary)] transition-colors" title="Assign"><UserPlus className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Showing 1 to 3 of 124 results</span>
                    <div className="flex items-center gap-1.5">
                        <button className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-50 transition-colors" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-[var(--primary)] text-white text-sm font-bold shadow-sm">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium transition-colors">3</button>
                        <span className="text-zinc-500 text-sm font-medium px-1">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium transition-colors">14</button>
                        <button className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FAB for quick action (Floating Action Button) */}
            <button className="fixed bottom-6 right-6 md:bottom-12 md:right-12 w-14 h-14 rounded-2xl bg-[var(--primary)] text-white shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center z-40 group overflow-hidden">
                <Plus className="w-6 h-6 flex-shrink-0" />
                <span className="max-w-0 group-hover:max-w-xs group-hover:ml-2 overflow-hidden transition-all duration-300 text-sm font-bold whitespace-nowrap">New Ticket</span>
            </button>
        </div>
    );
};

export default TicketQueue;
