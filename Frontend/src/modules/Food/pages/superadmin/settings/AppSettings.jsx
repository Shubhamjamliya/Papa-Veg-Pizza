import React, { useState, useEffect } from 'react';
import {
  RefreshCw,
  Search,
  UploadCloud,
  Trash2,
  Image as ImageIcon,
  Folder,
  ShoppingBag,
  UserPlus,
  Wallet,
  CheckCircle,
  Smartphone,
  Globe,
  Store,
  Bike,
  History,
  HeadphonesIcon,
  MoreVertical
} from 'lucide-react';
import EditSettings from './EditSettings';
import ConfigureMaintenance from './ConfigureMaintenance';

export default function AppSettings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('Save Changes');
  const [isEditSettingsOpen, setIsEditSettingsOpen] = useState(false);
  const [isMaintenanceConfigOpen, setIsMaintenanceConfigOpen] = useState(false);

  // Debouncing for search bar
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const handleSave = () => {
    setIsSaving(true);
    setSaveStatus('Saving...');
    setTimeout(() => {
      setSaveStatus('Saved');
      setTimeout(() => {
        setIsSaving(false);
        setSaveStatus('Save Changes');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8 min-h-screen">
      <EditSettings isOpen={isEditSettingsOpen} onClose={() => setIsEditSettingsOpen(false)} />
      <ConfigureMaintenance isOpen={isMaintenanceConfigOpen} onClose={() => setIsMaintenanceConfigOpen(false)} />
      {/* Top App Bar Header inside the layout */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">App Settings</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Manage global platform configurations and maintenance</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors duration-200">
            <RefreshCw size={18} />
            <span className="text-sm font-semibold">Refresh</span>
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 rounded text-sm font-semibold text-white shadow-sm transition-all ${
              saveStatus === 'Saved' ? 'bg-emerald-600' : 'bg-[var(--primary)] hover:opacity-90 active:scale-95'
            }`}
          >
            {saveStatus}
          </button>
        </div>
      </header>

      {/* Section 1: Settings Overview (KPI Cards) */}
      <section className="mb-8">
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
          {/* General Settings KPI */}
          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">General Status</span>
              <button onClick={() => setIsEditSettingsOpen(true)} className="text-[var(--primary)] text-sm font-semibold hover:underline">Edit</button>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Active</span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">PizzaOS Enterprise</span>
            </div>
            <div className="mt-1">
              <p className="text-xs text-[var(--primary)]">admin.pizzaos.com</p>
            </div>
          </div>
          {/* Localization KPI */}
          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Region</span>
              <button className="text-[var(--primary)] text-sm font-semibold hover:underline">Edit</button>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">INR (₹)</span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Asia/Kolkata Timezone</span>
            </div>
          </div>
          {/* Feature Flags KPI */}
          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">Active Features</span>
              <button className="text-[var(--primary)] text-sm font-semibold hover:underline">Manage</button>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">06</span>
              <div className="flex flex-wrap gap-1 mt-1">
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 rounded text-[10px] font-bold">ORDERS</span>
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded text-[10px] font-bold">WALLET</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded text-[10px] font-bold">FRANCHISE</span>
              </div>
            </div>
          </div>
          {/* Maintenance KPI */}
          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">System Status</span>
              <button onClick={() => setIsMaintenanceConfigOpen(true)} className="text-[var(--primary)] text-sm font-semibold hover:underline">Config</button>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">Online</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Branding Management */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Branding Management</h2>
              <MoreVertical size={20} className="text-zinc-400 cursor-pointer" />
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 block mb-2">Main App Logo</label>
                  <div className="w-full h-32 bg-zinc-50 dark:bg-zinc-800/50 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <UploadCloud size={32} className="text-zinc-400" />
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Drop image here or <span className="text-[var(--primary)] font-bold">Upload</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded border border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Current: primary_logo.webp</span>
                  <Trash2 size={16} className="text-red-500 cursor-pointer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block mb-2">Dark Mode Logo</label>
                    <div className="w-full h-20 bg-zinc-900 rounded-lg flex items-center justify-center">
                      <ImageIcon size={24} className="text-white" />
                    </div>
                    <button className="w-full mt-2 py-1 text-[11px] font-semibold border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Update</button>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block mb-2">Favicon</label>
                    <div className="w-full h-20 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-[var(--primary)] rounded"></div>
                    </div>
                    <button className="w-full mt-2 py-1 text-[11px] font-semibold border border-zinc-300 dark:border-zinc-700 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Update</button>
                  </div>
                </div>
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded flex items-center gap-2">
                  <Folder size={16} className="text-zinc-400" />
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">Storage Path: uploads/settings/branding/v1/</span>
                </div>
              </div>
            </div>
          </article>

          {/* Feature Management */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Feature Management</h2>
            </div>
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {/* Toggle Row */}
              <div className="p-6 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                    <ShoppingBag size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Enable Orders</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Allow customers to place real-time orders.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              {/* Toggle Row */}
              <div className="p-6 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <UserPlus size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Guest Checkout</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Allow orders without creating an account.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              {/* Toggle Row */}
              <div className="p-6 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <Wallet size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Wallet System</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Enable digital credits and top-ups.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full peer peer-checked:bg-[var(--primary)] transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </article>

          {/* Parameter Control */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Parameter Control</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search parameters..." 
                    className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-shadow"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                    <th className="px-6 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">NAME</th>
                    <th className="px-6 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">VALUE</th>
                    <th className="px-6 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {[
                    { name: 'Min Order Value', value: '₹299.00', status: 'ACTIVE' },
                    { name: 'Global Tax Rate', value: '5% GST', status: 'ACTIVE' }
                  ].filter(item => item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())).map((param, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                      <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{param.name}</td>
                      <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">{param.value}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-[10px] font-bold">
                          {param.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {debouncedSearchTerm && [
                    { name: 'Min Order Value', value: '₹299.00', status: 'ACTIVE' },
                    { name: 'Global Tax Rate', value: '5% GST', status: 'ACTIVE' }
                  ].filter(item => item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())).length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                        No parameters found matching "{debouncedSearchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        {/* Right Column */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Maintenance Card */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-500 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-emerald-600 dark:text-emerald-500" />
                <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-400">System Healthy</h2>
              </div>
              <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full border border-emerald-200 dark:border-emerald-800 uppercase">Online</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Maintenance mode is disabled. Platforms are operating normally.</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded opacity-60">
                <Smartphone size={20} className="text-zinc-700 dark:text-zinc-300" />
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300">APP</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded opacity-60">
                <Globe size={20} className="text-zinc-700 dark:text-zinc-300" />
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300">WEB</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded opacity-60">
                <Store size={20} className="text-zinc-700 dark:text-zinc-300" />
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300">POS</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded opacity-60">
                <Bike size={20} className="text-zinc-700 dark:text-zinc-300" />
                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300">RIDER</span>
              </div>
            </div>
            <button onClick={() => setIsMaintenanceConfigOpen(true)} className="w-full py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-semibold rounded hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              Configure Maintenance
            </button>
          </article>

          {/* Activity Log */}
          <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Recent Activity</h2>
              <History size={18} className="text-zinc-400" />
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">Logo Updated</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Admin (sarah.d) changed Branding.</p>
                  <p className="text-[10px] text-zinc-400">10:45 AM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">Wallet Enabled</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">System auto-triggered flag.</p>
                  <p className="text-[10px] text-zinc-400">09:00 PM</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 text-center">
              <button className="text-[var(--primary)] text-sm font-semibold hover:underline">Full Log</button>
            </div>
          </article>

          {/* Help Card */}
          <article className="bg-[var(--primary)] text-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-semibold mb-2">Need Assistance?</h3>
              <p className="text-xs opacity-90 mb-4">Our technical team is available 24/7 for platform support.</p>
              <button className="w-full py-2 bg-white text-[var(--primary)] rounded text-sm font-semibold shadow-sm active:scale-95 transition-transform hover:bg-zinc-50">
                Support Ticket
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <HeadphonesIcon size={80} />
            </div>
          </article>
        </aside>
      </div>
    </div>
  );
}
