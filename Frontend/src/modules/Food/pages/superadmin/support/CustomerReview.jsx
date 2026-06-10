import React, { useState } from 'react';
import { 
    Download, Trash2, CheckCircle2, X, ChevronDown, 
    Star, StarHalf, Edit2, MoreVertical, AlertTriangle, 
    Reply, ChevronLeft, ChevronRight, Filter 
} from 'lucide-react';

const CustomerReview = ({ onRowClick }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const reviews = [
        {
            id: '#REV-4921',
            name: 'Alex Martinez',
            rating: 4.5,
            status: 'Published',
            sentiment: 'Positive',
            statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            sentimentColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            actionIcon: <Edit2 className="w-5 h-5" />
        },
        {
            id: '#REV-4920',
            name: 'Sarah Chen',
            rating: 2.0,
            status: 'Flagged',
            sentiment: 'Critical',
            statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            sentimentColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
            actionIcon: <AlertTriangle className="w-5 h-5 text-orange-500" />
        },
        {
            id: '#REV-4919',
            name: 'James Wilson',
            rating: 5.0,
            status: 'Pending',
            sentiment: 'Neutral',
            statusColor: 'bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300',
            sentimentColor: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
            actionIcon: <Reply className="w-5 h-5" />
        },
        {
            id: '#REV-4918',
            name: 'Emma Thompson',
            rating: 4.0,
            status: 'Published',
            sentiment: 'Positive',
            statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            sentimentColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            actionIcon: <Edit2 className="w-5 h-5" />
        }
    ];

    const toggleAllRows = () => {
        if (selectedRows.length === reviews.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(reviews.map(r => r.id));
        }
    };

    const toggleRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const clearSelection = () => {
        setSelectedRows([]);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(<StarHalf key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />);
            } else {
                stars.push(<Star key={i} className="w-4 h-4 text-zinc-300 dark:text-zinc-600" />);
            }
        }
        return stars;
    };

    return (
        <div className="w-full relative pb-20">
            {/* Header section */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Customer Reviews</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mt-1">Manage and respond to recent feedback</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 p-2 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-700 shadow-sm">
                        <Download className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Bulk Action Bar */}
            {selectedRows.length > 0 && (
                <div className="flex items-center justify-between bg-[var(--primary)] text-white px-4 py-3 rounded-xl mb-4 animate-in slide-in-from-top-4 duration-300 shadow-md">
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-sm">{selectedRows.length} selected</span>
                        <div className="h-4 w-[1px] bg-white/30"></div>
                        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-white/80 transition-colors">
                            <Trash2 className="w-4 h-4" /> Delete
                        </button>
                        <button className="flex items-center gap-1.5 text-sm font-medium hover:text-white/80 transition-colors">
                            <CheckCircle2 className="w-4 h-4" /> Approve
                        </button>
                    </div>
                    <button onClick={clearSelection} className="hover:bg-white/20 p-1 rounded-md transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Table Container */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <div className="w-full">
                    {/* Sticky Header */}
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 flex items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                        <div className="flex items-center gap-4 w-full">
                            <input 
                                type="checkbox" 
                                className="w-5 h-5 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                                checked={selectedRows.length === reviews.length && reviews.length > 0}
                                onChange={toggleAllRows}
                            />
                            <div className="grid grid-cols-12 gap-4 w-full text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                <span className="col-span-5 md:col-span-4 flex items-center gap-1">
                                    Review ID <ChevronDown className="w-4 h-4" />
                                </span>
                                <span className="col-span-4 md:col-span-5 hidden sm:block">Rating & Status</span>
                                <span className="col-span-7 sm:col-span-3 text-right">Actions</span>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Body */}
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {reviews.map((review) => (
                            <div 
                                key={review.id} 
                                className="flex items-center px-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group cursor-pointer"
                                onClick={() => onRowClick && onRowClick(review.id)}
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                                        checked={selectedRows.includes(review.id)}
                                        onChange={() => toggleRow(review.id)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div className="grid grid-cols-12 gap-4 w-full items-center">
                                        <div className="col-span-7 sm:col-span-5 md:col-span-4">
                                            <p className="font-bold text-zinc-900 dark:text-zinc-50">{review.id}</p>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">{review.name}</p>
                                        </div>
                                        <div className="col-span-5 hidden md:block">
                                            <div className="flex items-center gap-1 mb-1.5">
                                                {renderStars(review.rating)}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${review.statusColor}`}>
                                                    {review.status}
                                                </span>
                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${review.sentimentColor}`}>
                                                    {review.sentiment}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-span-5 sm:col-span-7 md:col-span-3 text-right flex justify-end gap-1">
                                            <button 
                                                className="p-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 rounded-lg transition-colors text-zinc-500"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {review.actionIcon}
                                            </button>
                                            <button 
                                                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Footer */}
                    <div className="bg-zinc-50 dark:bg-zinc-800/20 px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-zinc-200 dark:border-zinc-800 gap-4">
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Showing 1-4 of 128</span>
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 disabled:opacity-30 transition-colors" disabled>
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-1">
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white text-sm font-bold">1</span>
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium cursor-pointer transition-colors">2</span>
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium cursor-pointer transition-colors">3</span>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button: Quick Filter */}
            <button 
                onClick={() => setIsFilterOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary)] text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-50 lg:hidden"
            >
                <Filter className="w-6 h-6" />
            </button>

            {/* Quick Filter Overlay */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-end justify-center transition-opacity duration-300">
                    <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-t-3xl p-6 transform transition-transform duration-300 animate-in slide-in-from-bottom-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Quick Filters</h3>
                            <button 
                                onClick={() => setIsFilterOpen(false)}
                                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 block">Sentiment</label>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-semibold text-sm border border-blue-200 dark:border-blue-800 cursor-pointer">Positive</span>
                                    <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-medium text-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer">Neutral</span>
                                    <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-medium text-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer">Critical</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 block">Status</label>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-medium text-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer">Published</span>
                                    <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-medium text-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer">Pending</span>
                                    <span className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-medium text-sm border border-zinc-200 dark:border-zinc-700 cursor-pointer">Flagged</span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button 
                                    onClick={() => setIsFilterOpen(false)}
                                    className="w-full bg-[var(--primary)] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-colors"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerReview;
