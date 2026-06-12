import React, { useState } from 'react';
import {
  ShoppingCart, X, User, Search, Pizza,
  Minus, Plus, Trash2, Banknote, CreditCard,
  Truck, Phone, Store, MessageCircle, Send
} from 'lucide-react';

export default function AddManualOrder({ isOpen, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [quantities, setQuantities] = useState({ item1: 1, item2: 2 });
  const [instructionsFocused, setInstructionsFocused] = useState(null);

  if (!isOpen) return null;

  const updateQuantity = (item, delta) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(1, prev[item] + delta)
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div className="w-full max-w-4xl bg-white dark:bg-zinc-950 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto animate-in fade-in zoom-in duration-300">

          {/* Header */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-[var(--primary)]" size={28} />
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Create Manual Order</h1>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400 active:scale-95"
            >
              <X size={20} />
            </button>
          </header>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">

            {/* Section 1: Customer Information */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--primary)]">
                  <User size={20} />
                  <h2 className="text-sm font-bold uppercase tracking-wider">Customer Information</h2>
                </div>
                {/* <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-xs font-bold hover:bg-[var(--primary)]/5 transition-colors">
                  <Search size={16} />
                  Search Existing Customer
                </button> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500">Customer Name</label>
                  <input
                    className="w-full h-10 px-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                    placeholder="e.g. John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500">Phone Number</label>
                  <input
                    className="w-full h-10 px-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-zinc-500">Delivery Address</label>
                  <textarea
                    className="w-full p-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 resize-none"
                    placeholder="Full street address, apartment, or landmark..."
                    rows={2}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Order Details */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-[var(--primary)]">
                <Pizza size={20} />
                <h2 className="text-sm font-bold uppercase tracking-wider">Order Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500">Select Store</label>
                  <select className="w-full h-10 px-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none text-sm text-zinc-900 dark:text-zinc-100 appearance-none">
                    <option>Papa Veg - MG Road Outlet</option>
                    <option>Papa Veg - Indiranagar Outlet</option>
                    <option>Papa Veg - Koramangala HQ</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500">Search & Add Items</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      className="w-full h-10 pl-10 pr-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                      placeholder="Search Pizzas, Sides, or Drinks..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950">
                <table className="w-full text-left border-collapse min-w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase">Item</th>
                      <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase text-center w-32">Qty</th>
                      <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase text-right w-24">Price</th>
                      <th className="px-4 py-3 text-xs font-bold text-zinc-500 uppercase text-right w-16">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">

                    {/* Item 1 */}
                    <tr className={`transition-colors group ${instructionsFocused === 1 ? 'bg-zinc-50 dark:bg-zinc-900/30' : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/30'}`}>
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Farm Fresh Pizza (Large)</span>
                          <input
                            className="mt-1 text-xs bg-transparent border-none p-0 focus:ring-0 text-zinc-500 placeholder:text-zinc-400 outline-none w-full"
                            placeholder="No onions, extra spice..."
                            type="text"
                            onFocus={() => setInstructionsFocused(1)}
                            onBlur={() => setInstructionsFocused(null)}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => updateQuantity('item1', -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center text-zinc-900 dark:text-zinc-100">{quantities.item1}</span>
                          <button
                            onClick={() => updateQuantity('item1', 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:brightness-110 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-bold text-zinc-900 dark:text-zinc-100">₹499.00</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-full transition-colors active:scale-90">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>

                    {/* Item 2 */}
                    <tr className={`transition-colors group ${instructionsFocused === 2 ? 'bg-zinc-50 dark:bg-zinc-900/30' : 'hover:bg-zinc-50 dark:hover:bg-zinc-900/30'}`}>
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Garlic Breadsticks</span>
                          <input
                            className="mt-1 text-xs bg-transparent border-none p-0 focus:ring-0 text-zinc-500 placeholder:text-zinc-400 outline-none w-full"
                            placeholder="Extra dip please"
                            type="text"
                            onFocus={() => setInstructionsFocused(2)}
                            onBlur={() => setInstructionsFocused(null)}
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => updateQuantity('item2', -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center text-zinc-900 dark:text-zinc-100">{quantities.item2}</span>
                          <button
                            onClick={() => updateQuantity('item2', 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:brightness-110 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-bold text-zinc-900 dark:text-zinc-100">₹240.00</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-full transition-colors active:scale-90">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Summary & Payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">

              {/* Payment & Source */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Payment Method</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setPaymentMethod('cash')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'cash' ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] dark:bg-[var(--primary)]/20 dark:text-red-400' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-[var(--primary)]'}`}
                    >
                      <Banknote className="mb-1" size={20} />
                      <span className="text-xs font-semibold">Cash</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('online')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'online' ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] dark:bg-[var(--primary)]/20 dark:text-red-400' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-[var(--primary)]'}`}
                    >
                      <CreditCard className="mb-1" size={20} />
                      <span className="text-xs font-semibold">Online</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('cod')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${paymentMethod === 'cod' ? 'border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] dark:bg-[var(--primary)]/20 dark:text-red-400' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:border-[var(--primary)]'}`}
                    >
                      <Truck className="mb-1" size={20} />
                      <span className="text-xs font-semibold text-center leading-tight">Card on Del</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Order Source</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold border border-indigo-200 dark:border-indigo-800/50 cursor-pointer">
                      <Phone size={14} /> Phone Call
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                      <Store size={14} /> Walk-in
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                      <MessageCircle size={14} /> WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Financial Summary */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-3 h-fit">
                <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <span>Subtotal (3 items)</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">₹739.00</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <span>Taxes (GST 5%)</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">₹36.95</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
                  <span>Delivery Fee</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Free</span>
                </div>
                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-4"></div>
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Grand Total</span>
                  <span className="text-2xl font-black text-[var(--primary)] dark:text-red-400">₹775.95</span>
                </div>
              </div>
            </div>
          </main>

          {/* Footer Actions */}
          <footer className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Manual Override Active</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors active:scale-95"
              >
                Cancel
              </button>
              <button className="flex-1 sm:flex-none px-8 py-2.5 rounded-lg bg-[var(--primary)] text-white text-sm font-bold shadow-sm hover:shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                <Send size={16} />
                Place Order
              </button>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}
