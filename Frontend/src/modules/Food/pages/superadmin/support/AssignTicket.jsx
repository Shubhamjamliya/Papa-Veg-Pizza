import React, { useState } from 'react';
import { X, Users, ArrowDown, Menu, AlertTriangle, AlertOctagon, Calendar, UserCheck, History, Info } from 'lucide-react';

const AssignTicket = ({ isOpen, onClose }) => {
    const [priority, setPriority] = useState('high');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-zinc-900/50 dark:bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-5xl flex gap-6 max-h-[90vh] min-h-0">
                {/* Modal Container */}
                <div className="flex-1 min-h-0 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
                    {/* Header */}
                    <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
                        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Assign Ticket</h2>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            <X className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto flex-1 space-y-6 min-h-0">
                        {/* Support Agent */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Support Agent</label>
                            <div className="relative">
                                <select className="w-full h-12 pl-4 pr-10 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-lg appearance-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm text-zinc-900 dark:text-zinc-50 outline-none">
                                    <option value="">Select an agent...</option>
                                    <option value="1">Marco Rossi (Senior Support)</option>
                                    <option value="2">Sarah Jenkins (Customer Success)</option>
                                    <option value="3">David Chen (Technical Specialist)</option>
                                    <option value="4">Elena Rodriguez (Franchise Lead)</option>
                                </select>
                                <ArrowDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                            </div>
                        </div>

                        {/* Team Assignment Toggle */}
                        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center gap-4">
                                <Users className="w-6 h-6 text-[var(--primary)]" />
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Team Assignment</p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Allow multiple agents in the team to view</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                            </label>
                        </div>

                        {/* Priority */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Priority Level</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <button
                                    onClick={() => setPriority('low')}
                                    className={`flex flex-col items-center justify-center py-3 px-2 border rounded-lg transition-all active:scale-95 ${priority === 'low' ? 'border-[var(--primary)] bg-blue-50 dark:bg-[var(--primary)]/10 text-[var(--primary)] shadow-sm' : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500'}`}
                                >
                                    <ArrowDown className="w-5 h-5" />
                                    <span className="text-xs font-bold mt-1">Low</span>
                                </button>
                                <button
                                    onClick={() => setPriority('medium')}
                                    className={`flex flex-col items-center justify-center py-3 px-2 border rounded-lg transition-all active:scale-95 ${priority === 'medium' ? 'border-[var(--primary)] bg-blue-50 dark:bg-[var(--primary)]/10 text-[var(--primary)] shadow-sm' : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500'}`}
                                >
                                    <Menu className="w-5 h-5" />
                                    <span className="text-xs font-bold mt-1">Medium</span>
                                </button>
                                <button
                                    onClick={() => setPriority('high')}
                                    className={`flex flex-col items-center justify-center py-3 px-2 border rounded-lg transition-all active:scale-95 ${priority === 'high' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 shadow-sm' : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500'}`}
                                >
                                    <AlertTriangle className="w-5 h-5" />
                                    <span className="text-xs font-bold mt-1">High</span>
                                </button>
                                <button
                                    onClick={() => setPriority('critical')}
                                    className={`flex flex-col items-center justify-center py-3 px-2 border rounded-lg transition-all active:scale-95 ${priority === 'critical' ? 'border-red-500 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 shadow-sm' : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500'}`}
                                >
                                    <AlertOctagon className="w-5 h-5" />
                                    <span className="text-xs font-bold mt-1">Critical</span>
                                </button>
                            </div>
                        </div>

                        {/* Due Date */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Due Date</label>
                            <div className="relative">
                                <input type="date" className="w-full h-12 pl-4 pr-10 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm text-zinc-900 dark:text-zinc-50 outline-none css-date-icon-hidden" />
                                <Calendar className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                            </div>
                        </div>

                        {/* Internal Notes */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Internal Notes</label>
                            <textarea className="w-full p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all text-sm text-zinc-900 dark:text-zinc-50 resize-none outline-none" placeholder="Provide additional context for the agent..." rows="4"></textarea>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-4 mt-auto shrink-0">
                        <button onClick={onClose} className="px-6 h-10 rounded-lg text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors active:scale-95">
                            Cancel
                        </button>
                        <button onClick={onClose} className="px-8 h-10 bg-[var(--primary)] text-white rounded-lg text-sm font-bold shadow-md hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
                            <UserCheck className="w-5 h-5" />
                            Assign Ticket
                        </button>
                    </div>
                </div>

                {/* Secondary Context Information (Desktop Only) */}
                <div className="hidden lg:flex flex-col gap-4 w-80 shrink-0">
                    <div className="p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-3">Ticket Summary</h3>
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">#4492 - API Integration Failure</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">The franchise portal is unable to fetch real-time inventory updates from the central kitchen API...</p>
                            <div className="flex gap-2 flex-wrap pt-2">
                                <span className="px-2 py-1 bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 rounded-full font-bold text-[10px] uppercase">Bug Report</span>
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 rounded-full font-bold text-[10px] uppercase">High Impact</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h3 className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider mb-3">Recent Assignment</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                                <History className="w-4 h-4 text-zinc-500" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Moved to Triage</p>
                                <p className="text-[10px] text-zinc-500 font-medium">2 hours ago by System</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-[var(--primary)] shrink-0" />
                            <p className="text-xs font-medium text-zinc-800 dark:text-zinc-400 leading-relaxed">Assigning a ticket notifies the agent immediately via mobile and email.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hiding default date icon CSS */}
            <style jsx>{`
                .css-date-icon-hidden::-webkit-calendar-picker-indicator {
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default AssignTicket;
