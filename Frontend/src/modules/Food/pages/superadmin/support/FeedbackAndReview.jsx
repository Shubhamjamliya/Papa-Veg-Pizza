import React, { useState, useEffect } from 'react';
import { Filter, Share, Star, MessageSquare, Clock, Frown, Store as StoreIcon } from 'lucide-react';
import CustomerReview from './CustomerReview';
import ReviewDetails from './ReviewDetails';
import Feedback from './Feedback';
import RejectReviewModal from './RejectReviewModal';
import ReplyReview from './ReplyReview';
import AssignFeedback from './AssignFeedback';

const FeedbackAndReview = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [animateCharts, setAnimateCharts] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState(null);
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [feedbackToAssign, setFeedbackToAssign] = useState(null);

    useEffect(() => {
        // Trigger chart animation after mount
        const timer = setTimeout(() => {
            setAnimateCharts(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 space-y-8 pb-24 w-full animate-in fade-in duration-500">
            {/* Secondary Navigation (Tabs) */}
            <div className="flex gap-8 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto scrollbar-hide">
                <button 
                    onClick={() => setActiveTab('Dashboard')}
                    className={`pb-3 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'Dashboard' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-[var(--primary)]'}`}
                >
                    Dashboard
                </button>
                <button 
                    onClick={() => setActiveTab('Feedback Inbox')}
                    className={`pb-3 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'Feedback Inbox' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-[var(--primary)]'}`}
                >
                    Feedback Inbox
                </button>
                <button 
                    onClick={() => setActiveTab('All Reviews')}
                    className={`pb-3 text-sm font-bold whitespace-nowrap transition-colors ${activeTab === 'All Reviews' ? 'border-b-2 border-[var(--primary)] text-[var(--primary)]' : 'text-zinc-500 hover:text-[var(--primary)]'}`}
                >
                    All Reviews
                </button>
            </div>

            {activeTab === 'Dashboard' && (
                <div className="space-y-8 animate-in fade-in duration-500">

            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Overview</h2>
                <div className="flex gap-2">
                    <button className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center justify-center shadow-sm">
                        <Filter className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center justify-center shadow-sm">
                        <Share className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* KPI Bento Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Avg Rating */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <Star className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-full">+2.4%</span>
                    </div>
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">Avg Rating</p>
                        <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">4.2</p>
                    </div>
                </div>

                {/* Total Reviews */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <MessageSquare className="w-7 h-7 text-zinc-600 dark:text-zinc-400" />
                    </div>
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">Total Reviews</p>
                        <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">1.2k</p>
                    </div>
                </div>

                {/* Pending Moderation */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <Clock className="w-7 h-7 text-orange-500 dark:text-orange-400" />
                    </div>
                    <div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">Pending</p>
                        <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">45</p>
                    </div>
                </div>

                {/* Negative Feedback */}
                <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl shadow-sm border border-red-200 dark:border-red-900/30 flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <Frown className="w-7 h-7 text-red-600 dark:text-red-400" />
                        <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <div>
                        <p className="text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">Negative</p>
                        <p className="text-3xl font-bold text-red-700 dark:text-red-300 mt-1">12</p>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Rating Distribution */}
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-lg">Rating Distribution</h3>
                    <div className="flex items-end justify-between h-48 gap-2">
                        {/* Bars (5 to 1 star) */}
                        <div className="flex flex-col items-center flex-1 group">
                            <div className="w-full bg-[var(--primary)] dark:bg-blue-500 rounded-t-lg transition-all duration-1000 ease-out group-hover:opacity-80" style={{ height: animateCharts ? '85%' : '0%' }}></div>
                            <span className="text-xs font-bold mt-3 text-zinc-500 dark:text-zinc-400">5★</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 group">
                            <div className="w-full bg-[var(--primary)]/80 dark:bg-blue-500/80 rounded-t-lg transition-all duration-1000 ease-out group-hover:opacity-80" style={{ height: animateCharts ? '60%' : '0%' }}></div>
                            <span className="text-xs font-bold mt-3 text-zinc-500 dark:text-zinc-400">4★</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 group">
                            <div className="w-full bg-[var(--primary)]/60 dark:bg-blue-500/60 rounded-t-lg transition-all duration-1000 ease-out group-hover:opacity-80" style={{ height: animateCharts ? '35%' : '0%' }}></div>
                            <span className="text-xs font-bold mt-3 text-zinc-500 dark:text-zinc-400">3★</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 group">
                            <div className="w-full bg-[var(--primary)]/40 dark:bg-blue-500/40 rounded-t-lg transition-all duration-1000 ease-out group-hover:opacity-80" style={{ height: animateCharts ? '15%' : '0%' }}></div>
                            <span className="text-xs font-bold mt-3 text-zinc-500 dark:text-zinc-400">2★</span>
                        </div>
                        <div className="flex flex-col items-center flex-1 group">
                            <div className="w-full bg-red-400 dark:bg-red-500/80 rounded-t-lg transition-all duration-1000 ease-out group-hover:opacity-80" style={{ height: animateCharts ? '8%' : '0%' }}></div>
                            <span className="text-xs font-bold mt-3 text-zinc-500 dark:text-zinc-400">1★</span>
                        </div>
                    </div>
                </div>

                {/* Sentiment Analysis */}
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-lg">Sentiment Analysis</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-around flex-1 gap-6">
                        <div className="relative w-40 h-40">
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                                <circle className="stroke-zinc-100 dark:stroke-zinc-800" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>
                                <circle className="stroke-[var(--primary)] dark:stroke-blue-500 transition-all duration-1000" cx="18" cy="18" fill="none" r="16" strokeDasharray={animateCharts ? "75, 100" : "0, 100"} strokeWidth="4"></circle>
                                <circle className="stroke-orange-400 transition-all duration-1000" cx="18" cy="18" fill="none" r="16" strokeDasharray={animateCharts ? "15, 100" : "0, 100"} strokeDashoffset="-75" strokeWidth="4"></circle>
                                <circle className="stroke-red-500 transition-all duration-1000" cx="18" cy="18" fill="none" r="16" strokeDasharray={animateCharts ? "10, 100" : "0, 100"} strokeDashoffset="-90" strokeWidth="4"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">75%</span>
                                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Positive</span>
                            </div>
                        </div>
                        <div className="space-y-4 w-full sm:w-auto">
                            <div className="flex items-center gap-3 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                                <div className="w-3 h-3 rounded-full bg-[var(--primary)] dark:bg-blue-500 shadow-sm"></div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex-1">Positive</span>
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">75%</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                                <div className="w-3 h-3 rounded-full bg-orange-400 shadow-sm"></div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex-1">Neutral</span>
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">15%</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex-1">Negative</span>
                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews by Store Leaderboard */}
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-800/20">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-lg">Reviews by Store</h3>
                    <button className="text-sm text-[var(--primary)] font-bold hover:underline transition-all">View All</button>
                </div>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {/* Store 1 */}
                    <div className="p-5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 flex items-center justify-center shadow-inner">
                                <StoreIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base">Downtown Hub</p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">248 Reviews</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base flex items-center justify-end gap-1">
                                4.8 <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                            </p>
                            <p className="text-xs text-[var(--primary)] font-bold uppercase tracking-wider mt-1">Top Performer</p>
                        </div>
                    </div>
                    {/* Store 2 */}
                    <div className="p-5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 flex items-center justify-center shadow-inner">
                                <StoreIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base">East Side Express</p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">192 Reviews</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base flex items-center justify-end gap-1">
                                4.2 <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                            </p>
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Average</p>
                        </div>
                    </div>
                    {/* Store 3 */}
                    <div className="p-5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 flex items-center justify-center shadow-inner">
                                <StoreIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base">North Plaza</p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">156 Reviews</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-zinc-900 dark:text-zinc-50 text-base flex items-center justify-end gap-1">
                                3.9 <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                            </p>
                            <p className="text-xs text-red-500 font-bold uppercase tracking-wider mt-1">Needs Attention</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )}

            {activeTab === 'Feedback Inbox' && (
                <div className="animate-in fade-in duration-500">
                    <Feedback onAssign={(id) => {
                        setFeedbackToAssign(id);
                        setIsAssignModalOpen(true);
                    }} />
                </div>
            )}

            {activeTab === 'All Reviews' && (
                <div className="animate-in fade-in duration-500">
                    <CustomerReview onRowClick={(id) => setSelectedReviewId(id)} />
                </div>
            )}

            <ReviewDetails 
                isOpen={!!selectedReviewId} 
                onClose={() => setSelectedReviewId(null)} 
                reviewId={selectedReviewId} 
                onReject={() => setIsRejectModalOpen(true)}
                onReply={() => setIsReplyModalOpen(true)}
            />

            <RejectReviewModal 
                isOpen={isRejectModalOpen}
                onClose={() => setIsRejectModalOpen(false)}
                reviewId={selectedReviewId}
            />

            <ReplyReview 
                isOpen={isReplyModalOpen}
                onClose={() => setIsReplyModalOpen(false)}
                reviewId={selectedReviewId}
            />

            <AssignFeedback 
                isOpen={isAssignModalOpen}
                onClose={() => setIsAssignModalOpen(false)}
                reviewId={feedbackToAssign}
            />
        </div>
    );
};

export default FeedbackAndReview;
