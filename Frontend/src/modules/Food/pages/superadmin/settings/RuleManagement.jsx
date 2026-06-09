import React, { useState, useEffect } from 'react';
import { Search, Filter, Edit2, Copy, Ban, CheckCircle } from 'lucide-react';

const initialRules = [
  { id: 1, name: 'GST (Central + State)', desc: 'Goods and Services Tax', region: 'India > MP', rate: '18%', status: 'Active' },
  { id: 2, name: 'VAT (Standard)', desc: 'Value Added Tax', region: 'UAE', rate: '5%', status: 'Active' },
  { id: 3, name: 'State Sales Tax', desc: 'Retail Pizza Sales', region: 'USA > California', rate: '7.25%', status: 'Inactive' },
  { id: 4, name: 'Service Cess', desc: 'Additional Luxury Surcharge', region: 'India > KA', rate: '1%', status: 'Active' },
];

export default function RuleManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const filteredRules = initialRules.filter(rule => 
    rule.name.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
    rule.region.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <section className="xl:col-span-2 space-y-4">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Rule Management</h3>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search rules..." 
                className="w-full pl-9 pr-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 transition-shadow"
              />
            </div>
            <button className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Tax Name</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Region</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Rate</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredRules.map((rule) => (
                <tr key={rule.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{rule.name}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{rule.desc}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300">{rule.region}</td>
                  <td className="px-4 py-3 text-sm font-bold text-[var(--primary)]">{rule.rate}</td>
                  <td className="px-4 py-3">
                    {rule.status === 'Active' ? (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-[11px] font-bold">Active</span>
                    ) : (
                      <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded-full text-[11px] font-bold">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded transition-colors" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded transition-colors" title="Duplicate">
                        <Copy size={16} />
                      </button>
                      {rule.status === 'Active' ? (
                        <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors" title="Deactivate">
                          <Ban size={16} />
                        </button>
                      ) : (
                        <button className="p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded transition-colors" title="Activate">
                          <CheckCircle size={16} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredRules.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    No rules found matching "{debouncedTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex justify-between items-center mt-auto">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Showing {filteredRules.length} of {initialRules.length} rules</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs text-zinc-600 dark:text-zinc-400 disabled:opacity-50" disabled>Previous</button>
            <button className="px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs bg-[var(--primary)] text-white font-medium shadow-sm">1</button>
            <button className="px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">2</button>
            <button className="px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
