import React, { useState } from 'react';
import { Truck, X, Bike, Star, Phone, MessageCircle, Check } from 'lucide-react';
import DeliveryFailureModal from './DeliveryFailureModal';

export default function DeliveryDetails({ delivery, onClose }) {
    const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);

    if (!delivery) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" onClick={onClose}></div>
            <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] lg:w-[40%] bg-white dark:bg-zinc-900 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] z-50 flex flex-col transform transition-transform duration-300">
                {/* Drawer Header */}
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-950/50">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl">
                            <Truck size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50">Delivery Details</h2>
                            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Order {delivery.id}</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-500 dark:text-zinc-400 transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                    {/* Status & ETA Section */}
                    <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse shadow-sm"></div>
                            <span className="text-sm text-[var(--primary)] uppercase font-extrabold tracking-tight">Live: {delivery.status}</span>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Estimated Arrival</p>
                            <p className="text-base font-bold text-zinc-900 dark:text-zinc-50 mt-0.5">{delivery.eta} <span className="text-xs text-rose-500 ml-1">(+4 min)</span></p>
                        </div>
                    </div>

                    {/* Live Map Section */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Real-time Transit</h3>
                            <span className="text-[10px] font-extrabold text-blue-500 uppercase tracking-widest cursor-pointer hover:underline">Full View</span>
                        </div>
                        <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 relative group shadow-inner">
                            <img className="w-full h-full object-cover opacity-80" alt="Live Map" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80&fm=webp" />
                            {/* Floating Rider Overlay (simulated) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 p-1.5 rounded-full shadow-lg border-[3px] border-[var(--primary)]">
                                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                                    <Bike className="text-[var(--primary)]" size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rider Info Section */}
                    <div className="space-y-3">
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Assigned Courier</h3>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                            <div className="relative shrink-0">
                                <img className="w-16 h-16 rounded-full object-cover bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-sm" alt="Courier" src={`https://i.pravatar.cc/150?u=${delivery.rider.replace(' ', '')}`} />
                                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-zinc-900 rounded-full p-1 shadow-sm">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900"></div>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-50">{delivery.rider}</h4>
                                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
                                            <Bike size={14} /> Electric E-Bike • ID 2291
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end gap-1 text-[var(--primary)]">
                                            <Star size={14} className="fill-current" />
                                            <span className="text-sm font-extrabold">4.9</span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mt-0.5">2.1k trips</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <button className="flex-1 py-2 bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm active:scale-95">
                                        <Phone size={14} /> Call
                                    </button>
                                    <button className="flex-1 py-2 bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm active:scale-95">
                                        <MessageCircle size={14} /> Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* General Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-zinc-50/50 dark:bg-zinc-950/50 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Store</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{delivery.store}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Customer</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{delivery.customer}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Order Items</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{delivery.order}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Order Type</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Express Priority</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Delivery Address</p>
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-tight mt-0.5">452 Greenwich St,<br/>Unit 4B, NY 10013</p>
                            </div>
                        </div>
                    </div>

                    {/* Financial Section */}
                    <div className="space-y-3">
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Transaction Breakdown</h3>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Fee</p>
                                <p className="text-sm font-black text-zinc-900 dark:text-zinc-50 mt-1">$4.50</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Tip</p>
                                <p className="text-sm font-black text-zinc-900 dark:text-zinc-50 mt-1">$8.00</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Payout</p>
                                <p className="text-sm font-black text-zinc-900 dark:text-zinc-50 mt-1">$12.50</p>
                            </div>
                            <div className="bg-[var(--primary)]/10 border border-[var(--primary)]/20 p-3 rounded-xl text-center shadow-sm">
                                <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">Net</p>
                                <p className="text-sm font-black text-[var(--primary)] mt-1">$3.20</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Delivery Timeline */}
                    <div className="space-y-4 pt-2">
                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50">Delivery Timeline</h3>
                        <div className="space-y-0 relative pb-4">
                            {/* Connecting Line */}
                            <div className="absolute left-[15px] top-4 bottom-8 w-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
                            
                            {/* Timeline Item: Created */}
                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-[7px] top-1 w-[18px] h-[18px] rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center z-10 border-[3px] border-white dark:border-zinc-900 shadow-sm">
                                    <Check size={10} className="text-zinc-500" strokeWidth={4} />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="mt-[-2px]">
                                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-none">Assignment Created</p>
                                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">System auto-match successful</p>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400">{delivery.created}</span>
                                </div>
                            </div>
                            
                            {/* Timeline Item: Picked Up */}
                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-[7px] top-1 w-[18px] h-[18px] rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center z-10 border-[3px] border-white dark:border-zinc-900 shadow-sm">
                                    <Check size={10} className="text-zinc-500" strokeWidth={4} />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="mt-[-2px]">
                                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-none">Picked Up</p>
                                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">Departed from {delivery.store}</p>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400">14:28</span>
                                </div>
                            </div>
                            
                            {/* Timeline Item: Active */}
                            <div className="relative pl-10 pb-6">
                                <div className="absolute left-[3px] top-0 w-[26px] h-[26px] rounded-full bg-[var(--primary)] flex items-center justify-center z-10 border-[3px] border-white dark:border-zinc-900 shadow-md">
                                    <Truck size={12} className="text-white" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="mt-0.5">
                                        <p className="text-sm font-extrabold text-[var(--primary)] leading-none">{delivery.status === 'DELIVERED' ? 'Delivered' : 'Out for Delivery'}</p>
                                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">Currently 0.8 miles from destination</p>
                                    </div>
                                    <span className="text-[10px] font-black text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded tracking-wide uppercase">Live</span>
                                </div>
                            </div>
                            
                            {/* Timeline Item: Future */}
                            <div className="relative pl-10">
                                <div className="absolute left-[11px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 z-10"></div>
                                <div className="flex justify-between items-start opacity-50">
                                    <div className="mt-[-2px]">
                                        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-none">Delivered</p>
                                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-1.5">Pending arrival</p>
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-400">Est. {delivery.eta}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Drawer Footer Actions */}
                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-3 px-4 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-xl text-xs font-extrabold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-sm active:scale-95">
                            Reassign Rider
                        </button>
                        <button className="py-3 px-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-extrabold hover:opacity-90 transition-opacity shadow-sm active:scale-95">
                            Support Ticket
                        </button>
                    </div>
                    <button 
                        onClick={() => setIsFailureModalOpen(true)}
                        className="w-full py-3 px-4 bg-rose-50 dark:bg-rose-900/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/50 rounded-xl text-xs font-extrabold hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-colors shadow-sm active:scale-95 flex justify-center items-center gap-2"
                    >
                        Mark Delivery Failed
                    </button>
                </div>
            </div>
            <DeliveryFailureModal isOpen={isFailureModalOpen} onClose={() => setIsFailureModalOpen(false)} orderId={delivery.id} />
        </>
    );
}
