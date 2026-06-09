import React, { useState } from 'react';
import { Download, Upload, Bell, User, Banknote, CheckCircle2, XCircle, Hourglass, Undo2, WalletCards, CreditCard, Landmark, Smartphone, MonitorSmartphone } from 'lucide-react';
import PaymentsData from './PaymentsData';
import RefundModal from './RefundModal';
import PaymentDetails from './PaymentDetails';

export default function PaymentsManagement() {
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isTransactionDrawerOpen, setIsTransactionDrawerOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleProcessRefund = (transaction) => {
    setSelectedTransaction(transaction);
    setIsRefundModalOpen(true);
  };

  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsTransactionDrawerOpen(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto w-full space-y-8 min-h-screen animate-fade-in">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
            Payments Management
          </h2>
          <nav className="hidden md:flex gap-6 mt-4">
            <button className="text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1 font-semibold text-sm">Overview</button>
            <button className="text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all font-semibold text-sm pb-1 border-b-2 border-transparent hover:border-[var(--primary)]">Settlements</button>
            <button className="text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all font-semibold text-sm pb-1 border-b-2 border-transparent hover:border-[var(--primary)]">Reconciliation</button>
          </nav>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <div className="flex gap-2 mr-4 border-r border-zinc-200 dark:border-zinc-800 pr-4">
            <button className="px-4 py-2 text-sm font-bold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2">
              <Download size={16} />
              Reports
            </button>
            <button className="px-4 py-2 text-sm font-bold bg-[var(--primary)] text-white rounded-lg hover:brightness-110 shadow-sm active:scale-95 transition-all flex items-center gap-2">
              <Upload size={16} />
              Export
            </button>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors">
            <Bell size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Section 1: KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* KPI 1 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/30 dark:hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Total Payments</p>
            <Banknote size={20} className="text-[var(--primary)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">₹4,85,600</h3>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-1.5 py-0.5 rounded flex items-center">
              + 12%
            </span>
          </div>
          <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-[var(--primary)] w-3/4 rounded-full"></div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Successful</p>
            <CheckCircle2 size={20} className="text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">1,240</h3>
            <span className="text-[10px] font-bold text-emerald-600">97.4%</span>
          </div>
          <div className="h-2 w-full bg-emerald-50 dark:bg-emerald-950/20 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-emerald-500 w-[97.4%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-rose-500/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Failed</p>
            <XCircle size={20} className="text-rose-500" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">42</h3>
            <span className="text-[10px] font-bold text-rose-500">2.1%</span>
          </div>
          <div className="h-2 w-full bg-rose-50 dark:bg-rose-950/20 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-rose-500 w-[2.1%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-amber-500/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Pending</p>
            <Hourglass size={20} className="text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">18</h3>
            <span className="text-[10px] font-bold text-amber-500">Processing</span>
          </div>
          <div className="h-2 w-full bg-amber-50 dark:bg-amber-950/20 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-amber-500 w-[5%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 5 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-indigo-500/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Refund Amount</p>
            <Undo2 size={20} className="text-indigo-500" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">₹32,500</h3>
            <span className="text-[10px] font-bold text-indigo-500">-4% WoW</span>
          </div>
          <div className="h-2 w-full bg-indigo-50 dark:bg-indigo-950/20 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-indigo-500 w-[15%] rounded-full"></div>
          </div>
        </div>

        {/* KPI 6 */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-[var(--primary)]/30 transition-all group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">Gateway Revenue</p>
            <Landmark size={20} className="text-[var(--primary)]" />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <h3 className="text-xl font-black text-zinc-900 dark:text-zinc-100">₹15,400</h3>
            <span className="text-[10px] font-bold text-[var(--primary)]">Fee Share</span>
          </div>
          <div className="h-2 w-full bg-[var(--primary)]/10 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-[var(--primary)] w-[40%] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Analytics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Daily Volume Chart Placeholder */}
        <div className="lg:col-span-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100">Daily Payment Volume</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                <span className="text-xs text-zinc-500 font-medium">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-zinc-500 font-medium">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <span className="text-xs text-zinc-500 font-medium">Failed</span>
              </div>
            </div>
          </div>
          {/* Mock Bar Chart */}
          <div className="h-64 flex items-end gap-3 px-2 border-b border-l border-zinc-200 dark:border-zinc-800">
            <div className="flex-1 h-[60%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[70%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[45%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[65%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[80%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[85%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[65%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[75%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[90%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[95%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[55%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
            <div className="flex-1 h-[75%] bg-zinc-100 dark:bg-zinc-800 rounded-t relative overflow-hidden group hover:opacity-90 cursor-pointer transition-opacity">
              <div className="absolute bottom-0 left-0 w-full h-[80%] bg-[var(--primary)]/20"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--primary)]"></div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] font-bold text-zinc-400 uppercase px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Payment Method Chart */}
        <div className="lg:col-span-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
          <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-6">Payment Methods</h4>
          <div className="relative w-40 h-40 mx-auto mb-8 group cursor-pointer">
            <div className="absolute inset-0 rounded-full border-[10px] border-[var(--primary)] border-t-zinc-600 border-r-amber-500 border-l-zinc-200 dark:border-l-zinc-800 rotate-45 group-hover:scale-105 transition-transform"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-zinc-900 dark:text-zinc-100">1.2k</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Orders</span>
            </div>
          </div>
          <div className="space-y-4 mt-auto">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--primary)]"></div><span className="text-zinc-700 dark:text-zinc-300 font-medium">UPI (GPay/PhonePe)</span></div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">42%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-zinc-600"></div><span className="text-zinc-700 dark:text-zinc-300 font-medium">Credit Card</span></div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">28%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500"></div><span className="text-zinc-700 dark:text-zinc-300 font-medium">Debit Card</span></div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">15%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800"></div><span className="text-zinc-700 dark:text-zinc-300 font-medium">Net Banking</span></div>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">15%</span>
            </div>
          </div>
        </div>

        {/* Gateway Performance */}
        <div className="lg:col-span-12 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-6">Gateway Performance</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Gateway 1 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <WalletCards className="text-[var(--primary)]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Razorpay</p>
                  <p className="text-[10px] text-emerald-600 font-bold">99.2% Success</p>
                </div>
              </div>
              <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-[var(--primary)] w-[75%]"></div>
                <div className="h-full bg-[var(--primary)]/30 w-[24.2%]"></div>
                <div className="h-full bg-rose-500 w-[0.8%]"></div>
              </div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-wider uppercase">Revenue: <span className="text-zinc-900 dark:text-zinc-100">₹3,42,000</span></p>
            </div>

            {/* Gateway 2 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <CreditCard className="text-[var(--primary)]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Stripe</p>
                  <p className="text-[10px] text-emerald-600 font-bold">98.5% Success</p>
                </div>
              </div>
              <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-[var(--primary)] w-[15%]"></div>
                <div className="h-full bg-[var(--primary)]/30 w-[83.5%]"></div>
                <div className="h-full bg-rose-500 w-[1.5%]"></div>
              </div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-wider uppercase">Revenue: <span className="text-zinc-900 dark:text-zinc-100">₹72,800</span></p>
            </div>

            {/* Gateway 3 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Smartphone className="text-[var(--primary)]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">PhonePe</p>
                  <p className="text-[10px] text-rose-500 font-bold">91.2% Success</p>
                </div>
              </div>
              <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-[var(--primary)] w-[8%]"></div>
                <div className="h-full bg-[var(--primary)]/30 w-[83.2%]"></div>
                <div className="h-full bg-rose-500 w-[8.8%]"></div>
              </div>
              <p className="text-[10px] font-bold text-rose-500 animate-pulse tracking-wider uppercase">CRITICAL: DOWN IN SOUTH</p>
            </div>

            {/* Gateway 4 */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MonitorSmartphone className="text-[var(--primary)]" size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Paytm</p>
                  <p className="text-[10px] text-emerald-600 font-bold">97.8% Success</p>
                </div>
              </div>
              <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-[var(--primary)] w-[2%]"></div>
                <div className="h-full bg-[var(--primary)]/30 w-[95.8%]"></div>
                <div className="h-full bg-rose-500 w-[2.2%]"></div>
              </div>
              <p className="text-[10px] text-zinc-500 font-bold tracking-wider uppercase">Revenue: <span className="text-zinc-900 dark:text-zinc-100">₹10,200</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Table and Filter component */}
      <PaymentsData
        onProcessRefund={handleProcessRefund}
        onViewTransaction={handleViewTransaction}
      />

      <RefundModal
        isOpen={isRefundModalOpen}
        onClose={() => setIsRefundModalOpen(false)}
        transaction={selectedTransaction}
      />

      <PaymentDetails
        isOpen={isTransactionDrawerOpen}
        onClose={() => setIsTransactionDrawerOpen(false)}
        transaction={selectedTransaction}
      />

    </div>
  );
}
