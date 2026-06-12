import React, { useState } from 'react';
import { ChevronRight, Plus, Users, Edit3, Shield, History, ShieldCheck, Building2, Store, ChefHat, X, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import RolesPermissionTable from './RolesPermissionTable';
import RolesPermissionDetails from './RolesPermissionDetails';
import CreateRoleModal from './CreateRoleModal';

export const INITIAL_ROLES = [
  {
    id: "2",
    name: "Area Supervisor",
    subtitle: "Customized for regional ops",
    description: "Management of specific franchise territories including multiple stores and staff.",
    type: "Custom",
    users: 12,
    permissionsCount: "64",
    permissionsTotal: 148,
    scope: "Franchise",
    status: "Active"
  },
  {
    id: "3",
    name: "Delivery Lead",
    subtitle: "Fleet management access",
    description: "Standard role for delivery tracking and fleet management.",
    type: "Custom",
    users: 8,
    permissionsCount: "24",
    permissionsTotal: 148,
    scope: "Store",
    status: "Suspended"
  },
  {
    id: "4",
    name: "Audit Executive",
    subtitle: "Read-only financial audit",
    description: "Read-only access for financial and compliance audits.",
    type: "Custom",
    users: 3,
    permissionsCount: "14",
    permissionsTotal: 148,
    scope: "Global",
    status: "Active"
  }
];

export default function RolesPermissionManagement() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isCreateRoleOpen, setIsCreateRoleOpen] = useState(false);
  const [roles, setRoles] = useState(INITIAL_ROLES);

  const handleDeleteRole = (roleId) => {
    setRoles(prev => prev.filter(r => r.id !== roleId));
  };

  const handlePreviewRole = (role) => {
    setSelectedRole(role);
    setIsDrawerOpen(true);
  };

  return (
    <div className="p-3 md:p-4 pb-12 max-w-7xl mx-auto bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full space-y-4">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3 pt-2">
        <div className="space-y-0.5">
          <h1 className="text-lg font-bold text-black dark:text-white leading-tight">
            Roles & Permissions
          </h1>
          <p className="text-[10px] font-semibold text-black/70 dark:text-white/70 mt-0.5">
            Manage platform roles, permissions, and access control policies
          </p>
        </div>

        <button
          onClick={() => setIsCreateRoleOpen(true)}
          className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-3.5 py-1.5 rounded-lg flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer font-bold text-[11px]"
        >
          <Plus size={14} className="stroke-[3]" />
          <span>CREATE NEW ROLE</span>
        </button>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 select-none">
        {/* Total Roles */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Roles</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">12</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> +2
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-100 dark:border-blue-900/30">
            <Users size={14} />
          </div>
        </div>

        {/* Custom Roles */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Custom Roles</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">6</h3>
              <span className="text-amber-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> 0
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-600 shrink-0 border border-amber-100 dark:border-amber-900/30">
            <Edit3 size={14} />
          </div>
        </div>

        {/* Total Permissions */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Total Permissions</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">148</h3>
              <span className="text-emerald-500 font-bold text-[8px] flex items-center gap-0.5">
                <TrendingUp size={10} /> +12
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 border border-[var(--primary)]/20">
            <Shield size={14} />
          </div>
        </div>

        {/* Recently Updated */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider truncate">Recently Updated</span>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h3 className="text-lg font-black text-black dark:text-white mt-0.5">3</h3>
              <span className="text-[var(--primary)] font-bold text-[8px] flex items-center gap-0.5">
                <History size={10} /> Today
              </span>
            </div>
          </div>
          <div className="p-1.5 rounded-md bg-teal-550/10 text-teal-650 shrink-0 border border-teal-100 dark:border-teal-900/30">
            <History size={14} />
          </div>
        </div>
      </div>

      {/* Core System Roles */}
      <section className="space-y-3 mb-4 select-none">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-black dark:text-white">Core System Roles</h3>
          <button className="text-[var(--primary)] text-xs font-bold flex items-center gap-0.5 hover:underline">
            View All
            <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-center mb-3">
              <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center">
                <Building2 size={18} />
              </div>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/50 dark:text-white/50 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">System</span>
            </div>
            <h4 className="text-sm font-bold mb-1 group-hover:text-[var(--primary)] text-black dark:text-white transition-colors">Franchise Admin</h4>
            <p className="text-[11px] text-black/70 dark:text-white/70 mb-3 h-8 line-clamp-2">Management of specific franchise territories including multiple stores and staff.</p>
            <div className="flex gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-2">
              <div>
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">USERS</div>
                <div className="text-sm font-bold text-black dark:text-white">24</div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-3">
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">PERMISSIONS</div>
                <div className="text-sm font-bold text-black dark:text-white">86</div>
              </div>
            </div>
          </div>

          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-center mb-3">
              <div className="w-8 h-8 rounded-md bg-teal-600 text-white flex items-center justify-center">
                <Store size={18} />
              </div>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/50 dark:text-white/50 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">System</span>
            </div>
            <h4 className="text-sm font-bold mb-1 group-hover:text-[var(--primary)] text-black dark:text-white transition-colors">Store Manager</h4>
            <p className="text-[11px] text-black/70 dark:text-white/70 mb-3 h-8 line-clamp-2">Full control over a single store location, inventory, and staff rosters.</p>
            <div className="flex gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-2">
              <div>
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">USERS</div>
                <div className="text-sm font-bold text-black dark:text-white">112</div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-3">
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">PERMISSIONS</div>
                <div className="text-sm font-bold text-black dark:text-white">42</div>
              </div>
            </div>
          </div>

          <div className="min-w-[280px] flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-lg hover:border-[var(--primary)] transition-colors cursor-pointer group">
            <div className="flex justify-between items-center mb-3">
              <div className="w-8 h-8 rounded-md bg-amber-500 text-white flex items-center justify-center">
                <ChefHat size={18} />
              </div>
              <span className="bg-zinc-100 dark:bg-zinc-800 text-black/50 dark:text-white/50 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">System</span>
            </div>
            <h4 className="text-sm font-bold mb-1 group-hover:text-[var(--primary)] text-black dark:text-white transition-colors">Kitchen Staff</h4>
            <p className="text-[11px] text-black/70 dark:text-white/70 mb-3 h-8 line-clamp-2">Access to order fulfillment, inventory logs, and kitchen workflow tools.</p>
            <div className="flex gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-2">
              <div>
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">USERS</div>
                <div className="text-sm font-bold text-black dark:text-white">450+</div>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-3">
                <div className="text-[9px] font-bold text-black/50 dark:text-white/50">PERMISSIONS</div>
                <div className="text-sm font-bold text-black dark:text-white">18</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Table Section */}
      <RolesPermissionTable
        rolesList={roles}
        onPreviewRole={handlePreviewRole}
        onDeleteRole={handleDeleteRole}
      />

      {/* Render the Drawer inline instead of through router */}
      <RolesPermissionDetails
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        role={selectedRole}
      />

      <CreateRoleModal
        isOpen={isCreateRoleOpen}
        onClose={() => setIsCreateRoleOpen(false)}
      />
    </div>
  );
}
