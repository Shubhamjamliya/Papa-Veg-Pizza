import React, { useState, useEffect, useRef } from 'react';
import { 
    ArrowLeft, MoreVertical, AlertTriangle, Clock, Reply, UserPlus, CheckCircle, 
    Calendar, ShoppingBag, CreditCard, ExternalLink, MessageSquare, Image as ImageIcon,
    Paperclip, Send, StickyNote, Zap
} from 'lucide-react';

const TicketDetails = ({ ticketId, onBack, onAssignClick, onEscalateClick, onStatusClick }) => {
    const [activeTab, setActiveTab] = useState('info');
    const [isMobile, setIsMobile] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [activeTab]);

    return (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm min-h-[600px] animate-in fade-in duration-300">
            {/* Header for mobile back button */}
            <div className="w-full md:hidden flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
                <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                </button>
                <span className="font-semibold text-zinc-900 dark:text-zinc-50">Ticket Details</span>
                <button className="p-2 -mr-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <MoreVertical className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                </button>
            </div>

            {/* Left Side: Tabs & Details */}
            <aside className={`w-full md:w-[400px] border-r border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden ${isMobile && activeTab === 'timeline' ? 'hidden' : 'flex'}`}>
                {/* Desktop Back Header */}
                <div className="hidden md:flex items-center gap-2 p-4 border-b border-zinc-200 dark:border-zinc-800">
                    <button onClick={onBack} className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Back to Queue</span>
                </div>

                {/* Tabs Navigation */}
                <nav className="flex border-b border-zinc-200 dark:border-zinc-800 px-4 pt-4 gap-6 overflow-x-auto hide-scrollbar">
                    <button onClick={() => setActiveTab('info')} className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === 'info' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50'}`}>Info</button>
                    <button onClick={() => setActiveTab('customer')} className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${activeTab === 'customer' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50'}`}>Customer</button>
                    <button onClick={() => setActiveTab('timeline')} className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors md:hidden ${activeTab === 'timeline' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50'}`}>Conversation</button>
                </nav>

                {/* Tab Panels */}
                <div className="flex-1 overflow-y-auto p-6">
                    {/* Panel: Info */}
                    {activeTab === 'info' && (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Ticket ID</p>
                                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">{ticketId || '#SF-9042'}</h2>
                                    </div>
                                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold">OPEN</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Priority</p>
                                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span className="font-bold text-sm">Urgent</span>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-100 dark:border-zinc-800">
                                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">SLA Deadline</p>
                                        <div className="flex items-center gap-2 text-[var(--primary)] font-bold text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>2h 14m</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Quick Actions */}
                                <div className="pt-4 space-y-3">
                                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-1">Quick Actions</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex flex-col items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] text-zinc-600 dark:text-zinc-300 transition-all group">
                                            <Reply className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-bold uppercase">Reply</span>
                                        </button>
                                        <button onClick={onAssignClick} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] text-zinc-600 dark:text-zinc-300 transition-all group">
                                            <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-bold uppercase">Assign</span>
                                        </button>
                                        <button onClick={onStatusClick} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] text-zinc-600 dark:text-zinc-300 transition-all group">
                                            <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-bold uppercase">Status</span>
                                        </button>
                                        <button onClick={onEscalateClick} className="flex flex-col items-center gap-2 p-3 rounded-xl border border-red-200 dark:border-red-900/30 hover:bg-red-600 hover:text-white hover:border-red-600 text-red-600 dark:text-red-400 transition-all group">
                                            <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span className="text-[10px] font-bold uppercase">Escalate</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Details List */}
                            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 space-y-4 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 font-medium">Source</span>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Web Portal</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 font-medium">Assigned To</span>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Marcus Chen</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 font-medium">Created</span>
                                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">Oct 24, 10:30 AM</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Panel: Customer */}
                    {activeTab === 'customer' && (
                        <div className="space-y-8 animate-in fade-in duration-300">
                            <div className="flex flex-col items-center text-center space-y-4 pt-2">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-zinc-100 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-400 font-bold text-3xl overflow-hidden shadow-sm">
                                        SJ
                                    </div>
                                    <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Sarah Johnson</h3>
                                    <p className="text-[var(--primary)] font-semibold text-sm">Enterprise User</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 flex items-center justify-between border border-zinc-100 dark:border-zinc-800 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Member Since</span>
                                    </div>
                                    <span className="font-bold text-zinc-900 dark:text-zinc-50">Jan 2022</span>
                                </div>
                                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 flex items-center justify-between border border-zinc-100 dark:border-zinc-800 text-sm">
                                    <div className="flex items-center gap-3">
                                        <ShoppingBag className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Total Orders</span>
                                    </div>
                                    <span className="font-bold text-zinc-900 dark:text-zinc-50">142</span>
                                </div>
                                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-4 flex items-center justify-between border border-zinc-100 dark:border-zinc-800 text-sm">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">Lifetime Spend</span>
                                    </div>
                                    <span className="font-bold text-zinc-900 dark:text-zinc-50">$12,450.00</span>
                                </div>
                            </div>
                            
                            <div className="pt-2">
                                <button className="w-full py-3 px-4 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-sm">
                                    <ExternalLink className="w-4 h-4" />
                                    View CRM Profile
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Right Side: Conversation Timeline */}
            <section className={`flex-1 flex flex-col bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden ${isMobile && activeTab !== 'timeline' ? 'hidden' : 'flex'}`}>
                {/* Timeline Header */}
                <div className="h-14 px-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
                        {isMobile && (
                            <button onClick={() => setActiveTab('info')} className="mr-2 p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}
                        <MessageSquare className="w-5 h-5 text-zinc-500" />
                        <span className="font-bold text-sm">Timeline History</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span> Customer</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Internal Note</span>
                    </div>
                </div>

                {/* Chat Area */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
                    {/* System Event */}
                    <div className="flex justify-center">
                        <span className="bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wider">Ticket Created • Oct 24, 10:30 AM</span>
                    </div>

                    {/* Customer Message */}
                    <div className="flex gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold flex-shrink-0">SJ</div>
                        <div className="space-y-1">
                            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-tl-none p-4 shadow-sm">
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">Hello Support Team, I'm having trouble accessing my dashboard after the latest update. Every time I try to log in, I get a '500 Server Error' message. Could you please investigate?</p>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-medium pl-1">Sarah Johnson • 10:32 AM</span>
                        </div>
                    </div>

                    {/* Admin Reply */}
                    <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-300 flex-shrink-0">MC</div>
                        <div className="space-y-1 items-end flex flex-col">
                            <div className="bg-[var(--primary)] text-white rounded-2xl rounded-tr-none p-4 shadow-md">
                                <p className="text-sm leading-relaxed">Hi Sarah, I'm sorry to hear that. Let me check our logs to see what's causing that 500 error. I'll get back to you shortly.</p>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-medium pr-1">Marcus Chen • 10:45 AM</span>
                        </div>
                    </div>

                    {/* Internal Note */}
                    <div className="flex justify-center px-4">
                        <div className="w-full max-w-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-4 flex gap-3 items-start relative overflow-hidden shadow-sm">
                            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                            <StickyNote className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <div className="space-y-1">
                                <p className="font-bold text-xs uppercase tracking-tight text-orange-700 dark:text-orange-400">Internal Note</p>
                                <p className="text-sm text-orange-900 dark:text-orange-200 italic leading-relaxed">"Confirmed server logs show a database connection timeout for Sarah's shard. Escalating to DevOps for immediate restart."</p>
                                <p className="text-[10px] text-orange-600/70 dark:text-orange-400/70 font-medium pt-1">Added by Marcus Chen • 10:48 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* Attachment Message */}
                    <div className="flex gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold flex-shrink-0">SJ</div>
                        <div className="space-y-2">
                            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-tl-none p-4 shadow-sm">
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">Thanks, Marcus. Here is a screenshot of the error page I'm seeing.</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 rounded-lg p-2 border border-zinc-200 dark:border-zinc-700 flex items-center gap-3 w-64 group cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded flex items-center justify-center">
                                    <ImageIcon className="w-5 h-5 text-zinc-500" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-50 truncate">error_log_001.webp</p>
                                    <p className="text-[10px] text-zinc-500 font-medium">1.2 MB</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-medium pl-1">Sarah Johnson • 11:02 AM</span>
                        </div>
                    </div>
                </div>

                {/* Message Input Area */}
                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                    <div className="flex gap-2 mb-3">
                        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 transition-colors">Public Reply</button>
                        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-orange-100 hover:text-orange-700 dark:hover:bg-orange-500/20 dark:hover:text-orange-400 transition-colors">Internal Note</button>
                    </div>
                    <div className="relative">
                        <textarea className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4 pr-24 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent min-h-[100px] resize-none text-sm text-zinc-900 dark:text-zinc-50 transition-colors" placeholder="Type your message here..."></textarea>
                        <div className="absolute bottom-3 right-3 flex items-center gap-2">
                            <button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                <Paperclip className="w-5 h-5" />
                            </button>
                            <button className="bg-[var(--primary)] text-white p-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform flex items-center justify-center">
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TicketDetails;
