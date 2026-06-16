import React, { useState } from 'react';
import {
    Download, UserPlus, ArrowUp, ArrowDown,
    Check, Truck, ClipboardList, AlertTriangle, RotateCcw,
    Timer, Activity
} from 'lucide-react';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import DeliveryData from './DeliveryData';
import DeliveryDetails from './DeliveryDetails';
import AssignRider from './AssignRider';

// PDF Stylesheet with premium brand coloring (#7e3866)
const pdfStyles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#FCFCFD',
        fontFamily: 'Helvetica',
        color: '#1F2937'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#7e3866',
        paddingBottom: 15,
        marginBottom: 25
    },
    brandTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#7e3866',
        letterSpacing: 0.5
    },
    brandSubtitle: {
        fontSize: 9,
        color: '#6B7280',
        marginTop: 2,
        fontWeight: 'normal'
    },
    metaContainer: {
        textAlign: 'right'
    },
    metaLabel: {
        fontSize: 8,
        color: '#9CA3AF',
        textTransform: 'uppercase'
    },
    metaValue: {
        fontSize: 9,
        color: '#374151',
        fontWeight: 'bold',
        marginTop: 2
    },
    table: {
        display: 'table',
        width: 'auto',
        marginTop: 10
    },
    tableRowHeader: {
        flexDirection: 'row',
        backgroundColor: '#7e3866',
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 6
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignItems: 'center'
    },
    tableColHeader: {
        color: '#FFFFFF',
        fontSize: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    tableCol: {
        fontSize: 8,
        color: '#374151'
    },
    colId: { width: '12%' },
    colOrder: { width: '25%' },
    colCustomer: { width: '18%' },
    colStore: { width: '15%' },
    colRider: { width: '12%' },
    colStatus: { width: '10%' },
    colCreated: { width: '8%' },
    badge: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    badgePickedUp: { backgroundColor: '#EFF6FF', color: '#1D4ED8' },
    badgePending: { backgroundColor: '#FEF3C7', color: '#D97706' },
    badgeDelivered: { backgroundColor: '#ECFDF5', color: '#047857' },
    badgeAssigned: { backgroundColor: '#F3E8FF', color: '#6B21A8' },
    badgeReturned: { backgroundColor: '#FEF2F2', color: '#B91C1C' },
    badgeDefault: { backgroundColor: '#F3F4F6', color: '#4B5563' }
});

// PDF Document Component
const DeliveryPDFDocument = ({ deliveries }) => {
    const getStatusStyle = (status) => {
        switch (status) {
            case 'PICKED UP': return pdfStyles.badgePickedUp;
            case 'PENDING': return pdfStyles.badgePending;
            case 'DELIVERED': return pdfStyles.badgeDelivered;
            case 'ASSIGNED': return pdfStyles.badgeAssigned;
            case 'RETURNED': return pdfStyles.badgeReturned;
            default: return pdfStyles.badgeDefault;
        }
    };

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={pdfStyles.page}>
                <View style={pdfStyles.headerContainer}>
                    <View>
                        <Text style={pdfStyles.brandTitle}>PAPA VEG PIZZA</Text>
                        <Text style={pdfStyles.brandSubtitle}>Superadmin Delivery Management Live Report</Text>
                    </View>
                    <View style={pdfStyles.metaContainer}>
                        <Text style={pdfStyles.metaLabel}>Generated On</Text>
                        <Text style={pdfStyles.metaValue}>{new Date().toLocaleString('en-IN')}</Text>
                    </View>
                </View>

                <View style={pdfStyles.table}>
                    <View style={pdfStyles.tableRowHeader}>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colId]}>ID</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colOrder]}>Order Items</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colCustomer]}>Customer</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colStore]}>Store</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colRider]}>Rider</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colStatus]}>Status</Text>
                        <Text style={[pdfStyles.tableColHeader, pdfStyles.colCreated]}>Created</Text>
                    </View>

                    {deliveries.map((delivery, i) => (
                        <View key={i} style={pdfStyles.tableRow}>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colId, { fontWeight: 'bold', color: '#7e3866' }]}>
                                {delivery.id}
                            </Text>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colOrder]}>{delivery.order}</Text>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colCustomer]}>{delivery.customer}</Text>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colStore]}>{delivery.store}</Text>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colRider]}>{delivery.rider}</Text>
                            <View style={[pdfStyles.colStatus]}>
                                <Text style={[pdfStyles.badge, getStatusStyle(delivery.status)]}>
                                    {delivery.status}
                                </Text>
                            </View>
                            <Text style={[pdfStyles.tableCol, pdfStyles.colCreated]}>{delivery.created}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default function DeliveryManagement() {
    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [deliveries, setDeliveries] = useState([
        { id: '#PV-9821', order: 'Lg. Margherita + Coke', customer: 'Sarah Jenkins', store: 'Downtown (D1)', rider: 'Marcus R.', status: 'PICKED UP', distance: '3.2 km', eta: '12 mins', created: '12:45 PM', statusColor: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20' },
        { id: '#PV-9822', order: 'Family Feast Pk', customer: 'Robert Fox', store: 'West End (W4)', rider: 'Unassigned', status: 'PENDING', distance: '5.1 km', eta: '-', created: '12:52 PM', statusColor: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20' },
        { id: '#PV-9819', order: 'Veg Supreme Med', customer: 'Elena Gilbert', store: 'East Side (E2)', rider: 'Jordan S.', status: 'DELIVERED', distance: '1.8 km', eta: 'Arrived', created: '12:30 PM', statusColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20' },
        { id: '#PV-9823', order: 'Garlic Bread x4', customer: 'Alex Wong', store: 'Downtown (D1)', rider: 'Lily T.', status: 'ASSIGNED', distance: '2.4 km', eta: '18 mins', created: '12:58 PM', statusColor: 'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20' },
        { id: '#PV-9818', order: 'Paneer Special', customer: 'Deepak K.', store: 'North Hub (N7)', rider: 'Amara L.', status: 'RETURNED', distance: '4.5 km', eta: '-', created: '12:15 PM', statusColor: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20' },
    ]);

    const handleExport = async () => {
        try {
            setIsExporting(true);
            const blob = await pdf(<DeliveryPDFDocument deliveries={deliveries} />).toBlob();
            saveAs(blob, `deliveries_report_${new Date().toISOString().slice(0, 10)}.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsExporting(false);
        }
    };
    return (
        <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full flex flex-col xl:flex-row gap-4">
            {/* Main Content Canvas */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
                {/* Page Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
                    <div className="space-y-0.5">
                        <h1 className="text-lg font-bold text-black dark:text-white leading-tight">Delivery Management</h1>
                        <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">Monitor, assign and track deliveries across all franchise stores in real time.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                        <button 
                            onClick={handleExport}
                            disabled={isExporting}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-955 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-[11px] font-bold shadow-sm active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Download size={12} className={isExporting ? "animate-bounce text-black/60 dark:text-white/60" : "text-black/60 dark:text-white/60"} />
                            <span>{isExporting ? 'Exporting...' : 'Export'}</span>
                        </button>
                        {/* <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-955 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-[11px] font-bold shadow-sm active:scale-95 cursor-pointer">
                            <span>Bulk Assign</span>
                        </button> */}
                        {/* <button 
                            onClick={() => setIsAssignModalOpen(true)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition-all text-[11px] font-bold shadow-md active:scale-95 cursor-pointer"
                        >
                            <UserPlus size={14} />
                            <span>Assign Rider</span>
                        </button> */}
                    </div>
                </div>

                {/* KPI Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4 select-none">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Deliveries</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-black dark:text-white mt-0.5">1,482</h3>
                                <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                                    +12% <ArrowUp size={8} />
                                </span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
                            <Truck size={14} />
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Active Deliveries</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-[var(--primary)] mt-0.5">42</h3>
                                <span className="text-black/60 dark:text-white/60 font-semibold text-[8px]">LIVE NOW</span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
                            <ClipboardList size={14} />
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Delivered Today</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-black dark:text-white mt-0.5">1,390</h3>
                                <span className="text-black/60 dark:text-white/60 font-semibold text-[8px]">94% GOAL</span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-900/20">
                            <Check size={14} strokeWidth={3} />
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md border-t-2 border-t-red-500">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Failed Deliveries</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-rose-500 mt-0.5">8</h3>
                                <span className="text-rose-600 dark:text-rose-450 font-bold text-[8px] flex items-center gap-0.5">
                                    -2% <ArrowDown size={8} />
                                </span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 shrink-0 border border-rose-100 dark:border-rose-900/30">
                            <AlertTriangle size={14} className="stroke-red-500" />
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Avg Time</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-black dark:text-white mt-0.5">24m</h3>
                                <span className="text-[var(--primary)] font-bold text-[8px]">FASTEST</span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-850 text-black/60 dark:text-white/60 shrink-0 border border-zinc-200 dark:border-zinc-700">
                            <Timer size={14} />
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-between transition-shadow hover:shadow-md">
                        <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">On-Time %</span>
                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                <h3 className="text-lg font-black text-black dark:text-white mt-0.5">98.2%</h3>
                                <span className="text-black/60 dark:text-white/60 font-semibold text-[8px]">TARGET 95%</span>
                            </div>
                        </div>
                        <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
                            <Activity size={14} />
                        </div>
                    </div>
                </div>

                {/* Data Component */}
                <DeliveryData onSelectDelivery={setSelectedDelivery} deliveries={deliveries} />
            </div>

            {/* Right Activity Sidebar */}
            <aside className="hidden xl:flex flex-col w-[260px] shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden h-[calc(100vh-200px)] sticky top-6">
                <div className="p-3.5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
                    <h3 className="font-bold text-xs text-black dark:text-white">Delivery Activity</h3>
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-full font-bold border border-emerald-500/20 animate-pulse">LIVE</span>
                </div>

                <div className="flex-1 overflow-y-auto p-3.5 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                    {/* Activity Item */}
                    <div className="flex gap-3 relative">
                        <div className="absolute left-[9px] top-5 bottom-[-16px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-5 w-5 rounded-full bg-emerald-500 flex-shrink-0 z-10 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <Check className="text-white" size={8} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-[11px] text-black dark:text-white leading-snug"><span className="font-bold">#PV-9819</span> delivered by <span className="font-bold">Jordan S.</span></p>
                            <p className="text-[9px] font-semibold text-black/60 dark:text-white/60 mt-0.5">Just now • East Side Zone</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-3 relative">
                        <div className="absolute left-[9px] top-5 bottom-[-16px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex-shrink-0 z-10 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <Truck className="text-white" size={8} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-[11px] text-black dark:text-white leading-snug"><span className="font-bold">#PV-9821</span> picked up by <span className="font-bold">Marcus R.</span></p>
                            <p className="text-[9px] font-semibold text-black/60 dark:text-white/60 mt-0.5">4 mins ago • Downtown Store</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-3 relative">
                        <div className="absolute left-[9px] top-5 bottom-[-16px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-5 w-5 rounded-full bg-purple-500 flex-shrink-0 z-10 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <ClipboardList className="text-white" size={8} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-[11px] text-black dark:text-white leading-snug"><span className="font-bold">#PV-9823</span> assigned to <span className="font-bold">Lily T.</span></p>
                            <p className="text-[9px] font-semibold text-black/60 dark:text-white/60 mt-0.5">8 mins ago • Auto-assigned</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-3 relative">
                        <div className="absolute left-[9px] top-5 bottom-[-16px] w-px bg-zinc-200 dark:bg-zinc-800"></div>
                        <div className="h-5 w-5 rounded-full bg-amber-500 flex-shrink-0 z-10 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <AlertTriangle className="text-white" size={8} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-[11px] text-black dark:text-white leading-snug"><span className="font-bold">#PV-9822</span> pending for 10+ mins</p>
                            <p className="text-[9px] font-bold text-amber-600 mt-0.5">Critical • Manual action required</p>
                        </div>
                    </div>

                    {/* Activity Item */}
                    <div className="flex gap-3 relative">
                        <div className="h-5 w-5 rounded-full bg-rose-500 flex-shrink-0 z-10 border-2 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                            <RotateCcw className="text-white" size={8} strokeWidth={3} />
                        </div>
                        <div className="pt-0.5">
                            <p className="text-[11px] text-black dark:text-white leading-snug"><span className="font-bold">#PV-9818</span> returned to North Hub</p>
                            <p className="text-[9px] font-semibold text-black/60 dark:text-white/60 mt-0.5">22 mins ago • Customer not home</p>
                        </div>
                    </div>
                </div>

                <div className="p-2.5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                    <button className="w-full py-1.5 text-[10px] font-bold text-[var(--primary)] hover:bg-[var(--primary)]/5 border border-transparent hover:border-[var(--primary)]/20 transition-all rounded-lg cursor-pointer">View Full Log</button>
                </div>
            </aside>

            <DeliveryDetails delivery={selectedDelivery} onClose={() => setSelectedDelivery(null)} />
            <AssignRider isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} />
        </div>
    );
}
