import React from 'react';
import { X, AlertTriangle, Info, ChevronDown, Camera, ShieldAlert } from 'lucide-react';

export default function DeliveryFailureModal({ isOpen, onClose, orderId }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 border border-zinc-200 dark:border-zinc-800">
                
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
                    <div className="flex items-center gap-2.5">
                        <AlertTriangle className="text-rose-500" size={20} />
                        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Mark Delivery Failed</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                        <X size={18} />
                    </button>
                </div>
                
                {/* Modal Body */}
                <div className="p-6 space-y-6">
                    {/* Alert Banner */}
                    <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 flex gap-3 shadow-sm">
                        <Info className="text-rose-500 shrink-0 mt-0.5" size={18} />
                        <p className="text-sm font-medium text-rose-700 dark:text-rose-400 leading-relaxed">
                            Confirming failure will notify the customer and trigger the return-to-warehouse protocol for Order <span className="font-bold">{orderId || '#ORD-8821'}</span>.
                        </p>
                    </div>
                    
                    {/* Form Field: Reason */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Failure Reason</label>
                        <div className="relative">
                            <select className="w-full h-11 px-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none appearance-none cursor-pointer text-sm font-medium text-zinc-800 dark:text-zinc-200 shadow-sm transition-all">
                                <option disabled selected value="">Select a reason...</option>
                                <option>Customer Unreachable</option>
                                <option>Wrong Address</option>
                                <option>Vehicle Breakdown</option>
                                <option>Safety / Access Issue</option>
                                <option>Customer Refused Delivery</option>
                                <option>Damaged Item</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" size={18} />
                        </div>
                    </div>
                    
                    {/* Form Field: Notes */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Notes</label>
                        <textarea 
                            className="w-full p-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none min-h-[100px] text-sm font-medium text-zinc-800 dark:text-zinc-200 resize-none shadow-sm transition-all placeholder:text-zinc-400" 
                            placeholder="Provide additional context for the dispatch team..."
                        ></textarea>
                    </div>
                    
                    {/* Form Field: Photo Proof */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Photo Proof Upload</label>
                        <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-8 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-zinc-800/30 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Camera className="text-[var(--primary)]" size={20} />
                            </div>
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Click to upload or drag photo</span>
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">Supports JPG, PNG (Max 5MB)</span>
                        </div>
                    </div>
                </div>
                
                {/* Modal Footer */}
                <div className="px-6 py-4 bg-zinc-50/50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
                    <button 
                        onClick={onClose}
                        className="px-6 h-10 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 text-sm font-bold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors active:scale-95 shadow-sm"
                    >
                        Cancel
                    </button>
                    <button className="px-6 h-10 bg-rose-500 text-white text-sm font-bold rounded-xl shadow-sm hover:bg-rose-600 transition-all active:scale-95 flex items-center gap-2">
                        <ShieldAlert size={16} />
                        Save Failure
                    </button>
                </div>
            </div>
        </div>
    );
}
