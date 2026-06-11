import React, { useState, useEffect } from "react";
import { ChevronRight, Plus, Globe, Search, Map, ChevronDown, Building2, Layers, Maximize2, Info, ArrowRight, Store } from "lucide-react";
import StoreAddZoneModal from "./StoreAddZoneModal";
import StoreCoverageMap from "./StoreCoverageMap";
import StoreAssignmentModal from "./StoreAssignmentModal";
import AddRegionModal from "./AddRegionModal";
import StoresTabModal from "./StoresTabModal";
import AnalyticsTabModal from "./AnalyticsTabModal";

export default function StoreZones() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isAddZoneModalOpen, setIsAddZoneModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isAddRegionModalOpen, setIsAddRegionModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  // Debouncing effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Territory Data & Filter Logic
  const [expandedNodes, setExpandedNodes] = useState({
    "ind": true,
    "mh": true,
    "pnq": true
  });

  const toggleExpand = (id) => {
    setExpandedNodes(prev => ({...prev, [id]: !prev[id]}));
  };

  const territoryData = [
    {
      id: "ind", name: "India", type: "country", icon: Globe, iconColor: "text-[var(--primary)]",
      children: [
        {
          id: "mh", name: "Maharashtra", type: "state", icon: Map, iconColor: "text-orange-500",
          children: [
            {
              id: "pnq", name: "Pune Region", type: "region", icon: Building2, active: true,
              children: [
                { id: "za", name: "Zone A (North)", stores: 12, type: "zone" },
                { id: "zb", name: "Zone B (Central)", stores: 8, type: "zone" },
                { id: "zc", name: "Zone C (South)", stores: 15, type: "zone" },
              ]
            }
          ]
        },
        { id: "ka", name: "Karnataka", type: "state", icon: Map, children: [] },
        { id: "dl", name: "Delhi NCR", type: "state", icon: Map, children: [] }
      ]
    }
  ];

  const filterTree = (nodes, term) => {
    if (!term) return nodes;
    const lowerTerm = term.toLowerCase();
    return nodes.map(node => {
      const isMatch = node.name.toLowerCase().includes(lowerTerm);
      const filteredChildren = node.children ? filterTree(node.children, term) : [];
      if (isMatch || filteredChildren.length > 0) {
        return { ...node, children: filteredChildren };
      }
      return null;
    }).filter(Boolean);
  };

  const filteredTerritory = filterTree(territoryData, debouncedSearch);

  const renderTree = (nodes, level = 0) => {
    if (nodes.length === 0 && level === 0) {
      return <div className="text-sm text-zinc-500 p-4 text-center font-medium bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-700">No matching regions or zones found.</div>;
    }
    
    return nodes.map((node, index) => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = debouncedSearch ? true : expandedNodes[node.id];
      const isZone = node.type === "zone";

      if (isZone) {
        return (
          <div key={node.id} className="flex items-center justify-between p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-zinc-400" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{node.name}</span>
            </div>
            <span className="text-[10px] bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded font-bold">{node.stores} Stores</span>
          </div>
        );
      }

      const isRegion = node.type === "region";
      const Icon = node.icon;
      
      const buttonClass = isRegion 
        ? "flex items-center gap-2 w-full text-left font-bold text-[var(--primary)] bg-[var(--primary)]/10 p-2 rounded-lg"
        : node.type === "state" && !hasChildren
          ? "flex items-center gap-2 w-full text-left font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 py-1.5 transition-colors"
          : "flex items-center gap-2 w-full text-left font-bold text-zinc-900 dark:text-zinc-100 py-1.5 group";

      let containerClass = "space-y-1";
      if (level > 0) containerClass += " pl-6";
      if (node.type === "state" && !hasChildren && index > 0) {
        containerClass += " pt-2 mt-2";
        if (index === 1) containerClass += " border-t border-zinc-200 dark:border-zinc-800";
      }

      return (
        <div key={node.id} className={containerClass}>
          <button 
            onClick={() => node.children && toggleExpand(node.id)}
            className={buttonClass}
          >
            {node.children && (
              isExpanded 
                ? <ChevronDown size={18} className={isRegion ? "" : "text-[var(--primary)]"} /> 
                : <ChevronRight size={18} className={`${isRegion ? "" : "text-[var(--primary)]"} group-hover:rotate-90 transition-transform`} />
            )}
            {!node.children && <div className="w-[18px]"></div>}
            {Icon && <Icon size={18} className={node.iconColor || ""} />}
            <span>{node.name}</span>
          </button>

          {hasChildren && isExpanded && (
            <div className={isRegion ? "pl-6 space-y-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-2 mt-2" : ""}>
               {renderTree(node.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Breadcrumbs & Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 font-bold">Store Zones & Regions</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Manage franchise territories, delivery zones, and store allocation.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsAssignModalOpen(true)}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-sm"
            >
              <Store size={18} />
              <span className="hidden md:inline">Assign Stores</span>
            </button>
            <button
              onClick={() => setIsAddZoneModalOpen(true)}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-sm"
            >
              <Plus size={18} />
              <span>Add Zone</span>
            </button>
            <button 
              onClick={() => setIsAddRegionModalOpen(true)}
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold hover:brightness-110 transition-all shadow-md text-sm"
            >
              <Globe size={18} />
              <span>Add Region</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-32">
          <div>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Total Regions</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">18</p>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[10px] text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded font-bold">+2 New</span>
            <svg className="w-16 h-8" viewBox="0 0 100 40">
              <path className="sparkline-path" d="M0,35 Q20,30 40,20 T80,10 T100,5" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="0"></path>
            </svg>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-32">
          <div>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Total Zones</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">64</p>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[10px] text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-0.5 rounded font-bold">Active</span>
            <svg className="w-16 h-8" viewBox="0 0 100 40">
              <path className="sparkline-path" d="M0,10 Q20,25 40,15 T80,30 T100,10" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="100" strokeDashoffset="0"></path>
            </svg>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-32">
          <div>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Assigned Stores</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">152</p>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[10px] text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded font-bold">94% Fill Rate</span>
            <svg className="w-16 h-8" viewBox="0 0 100 40">
              <path className="sparkline-path" d="M0,30 Q30,10 60,35 T100,10" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="100" strokeDashoffset="0"></path>
            </svg>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-32">
          <div>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Revenue</p>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">₹2.4 Cr</p>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[10px] text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded font-bold">↑ 12.5%</span>
            <svg className="w-16 h-8" viewBox="0 0 100 40">
              <path className="sparkline-path" d="M0,35 Q25,30 50,20 T75,10 T100,2" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="0"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Territory Management Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* Section 1: Territory Tree (Left) */}
        <div className="xl:col-span-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden h-[600px] shadow-sm">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3">Territory Hierarchy</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100"
                placeholder="Search region or zone..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
            {renderTree(filteredTerritory)}
          </div>
        </div>

        {/* Section 2 & 3: Details & Table (Right) */}
        <div className="xl:col-span-8 space-y-6">

          {/* Region Details Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-900/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--primary)] text-white flex items-center justify-center rounded-xl shadow-lg">
                  <Building2 size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Pune Region</h2>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Active</span>
                  </div>
                  <p className="text-zinc-500 text-sm flex items-center gap-1 mt-0.5">
                    <span className="font-bold">Code:</span> PNQ-021 <span className="mx-1">|</span> <span className="font-bold">Manager:</span> Rajesh K.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Monthly Rev</p>
                  <p className="text-xl font-bold text-[var(--primary)] mt-0.5">₹42.8 L</p>
                </div>
                <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800"></div>
                <div className="text-right">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Total Zones</p>
                  <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">6</p>
                </div>
              </div>
            </div>

            {/* Tabbed Content */}
            <div className="px-4 md:px-6 overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 scrollbar-none">
              <div className="flex gap-8 min-w-max">
                {["Overview", "Zones (6)", "Stores (35)", "Analytics", "Coverage Map"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 font-bold text-sm transition-colors ${
                      activeTab === tab 
                        ? "border-b-2 border-[var(--primary)] text-[var(--primary)]" 
                        : "text-zinc-500 hover:text-[var(--primary)]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "Overview" && (
              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase text-xs tracking-wider">Demographics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                    <p className="text-[11px] text-zinc-500 font-semibold mb-1">Population Reach</p>
                    <p className="font-bold text-zinc-900 dark:text-zinc-100">3.2M</p>
                  </div>
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                    <p className="text-[11px] text-zinc-500 font-semibold mb-1">Avg. Delivery Time</p>
                    <p className="font-bold text-[var(--primary)]">24 mins</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-40 relative group cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Map coverage visual"
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-white transition-colors">
                      <Maximize2 size={16} />
                      View Full Coverage
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase text-xs tracking-wider">Operational Health</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-zinc-500 font-medium">Zone Efficiency</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">88%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[88%]"></div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-zinc-500 font-medium">Store Utilization</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">72%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary)] w-[72%]"></div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 border border-[var(--primary)]/20 bg-[var(--primary)]/5 rounded-lg flex items-start gap-3">
                    <Info size={18} className="text-[var(--primary)] shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">Pune Region is currently performing 15% above national average for lunch-hour deliveries.</p>
                  </div>
                </div>
              </div>
              </div>
            )}

            {activeTab === "Stores (35)" && (
              <div className="p-4 md:p-6 bg-zinc-50/50 dark:bg-zinc-900/20">
                <StoresTabModal />
              </div>
            )}

            {activeTab === "Analytics" && (
              <div className="p-4 md:p-6 bg-zinc-50/50 dark:bg-zinc-900/20">
                <AnalyticsTabModal />
              </div>
            )}

            {activeTab === "Coverage Map" && (
              <div className="p-4 md:p-6">
                <StoreCoverageMap />
              </div>
            )}
          </div>

          {/* Zones Table */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Zones in Pune Region</h3>
              <button className="text-[var(--primary)] font-bold text-sm hover:underline flex items-center gap-1">
                View All Zones
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 font-bold text-xs uppercase tracking-wider">
                    <th className="px-4 py-3">Zone Name</th>
                    <th className="px-4 py-3">Manager</th>
                    <th className="px-4 py-3 text-center">Stores</th>
                    <th className="px-4 py-3">Efficiency</th>
                    <th className="px-4 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                    <td className="px-4 py-3">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100">Zone A (North)</div>
                      <div className="text-xs text-zinc-500 mt-0.5">Baner, Pashan, Balewadi</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Amit Deshmukh</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold">12</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[var(--primary)] w-[92%]"></div>
                        </div>
                        <span className="text-xs font-bold">92%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold rounded uppercase tracking-wider">Active</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100">Zone B (Central)</div>
                      <div className="text-xs text-zinc-500 mt-0.5">Shivajinagar, FC Road, Camp</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Priya Sharma</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold">8</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500 w-[65%]"></div>
                        </div>
                        <span className="text-xs font-bold">65%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="px-2 py-0.5 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 text-[10px] font-bold rounded uppercase tracking-wider">Understaffed</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100">Zone C (South)</div>
                      <div className="text-xs text-zinc-500 mt-0.5">Katraj, Dhankawadi, Bibwewadi</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">Vikram Malhotra</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold">15</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[var(--primary)] w-[84%]"></div>
                        </div>
                        <span className="text-xs font-bold">84%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold rounded uppercase tracking-wider">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* Modals */}
      <StoreAddZoneModal
        isOpen={isAddZoneModalOpen}
        onClose={() => setIsAddZoneModalOpen(false)}
      />
      <StoreAssignmentModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
      />
      <AddRegionModal
        isOpen={isAddRegionModalOpen}
        onClose={() => setIsAddRegionModalOpen(false)}
        onSaveRegion={(region) => {
          console.log("New Region Saved:", region);
        }}
      />
    </div>
  );
}
