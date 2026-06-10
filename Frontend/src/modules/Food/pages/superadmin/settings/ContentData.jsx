import React, { useState, useEffect, useMemo } from 'react';
import { Search, Home, Info, Utensils, Tag, MoreVertical } from 'lucide-react';

export default function ContentData() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const initialData = useMemo(() => [
    {
      id: 1,
      name: "Home Page",
      icon: Home,
      status: "Published",
      author: "Marco Rossi",
      lastModified: "2h ago",
      statusClass: "bg-green-100 text-green-800 border-green-200"
    },
    {
      id: 2,
      name: "About Us",
      icon: Info,
      status: "Published",
      author: "Sofia Conti",
      lastModified: "Yesterday",
      statusClass: "bg-green-100 text-green-800 border-green-200"
    },
    {
      id: 3,
      name: "Menu - Seasonal",
      icon: Utensils,
      status: "Draft",
      author: "Chef Alessandro",
      lastModified: "3d ago",
      statusClass: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      id: 4,
      name: "Summer Offers",
      icon: Tag,
      status: "Pending",
      author: "Marketing Lead",
      lastModified: "Just now",
      statusClass: "bg-red-100 text-red-800 border-red-200"
    }
  ], []);

  const filteredData = useMemo(() => {
    return initialData.filter(page => 
      page.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      page.author.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      page.status.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, initialData]);

  return (
    <section className="xl:col-span-2 bg-white rounded-xl border border-[#e4beb8] overflow-hidden">
      <div className="p-6 border-b border-[#e4beb8] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center">
        <h3 className="text-xl font-semibold text-[#271815]">Website Architecture</h3>
        <div className="flex items-center gap-2 bg-[#fff0ee] px-3 py-1.5 rounded-lg border border-[#e4beb8]/50 focus-within:border-[#b41e15] transition-colors">
          <Search size={18} className="text-[#586062]" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full sm:w-32 md:w-48 outline-none text-[#271815] placeholder:text-[#586062]" 
            placeholder="Filter pages..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#fff0ee]">
              <th className="px-6 py-4 text-sm font-semibold tracking-wide text-[#586062] uppercase">Page Name</th>
              <th className="px-6 py-4 text-sm font-semibold tracking-wide text-[#586062] uppercase">Status</th>
              <th className="px-6 py-4 text-sm font-semibold tracking-wide text-[#586062] uppercase">Author</th>
              <th className="px-6 py-4 text-sm font-semibold tracking-wide text-[#586062] uppercase">Last Modified</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e4beb8]">
            {filteredData.length > 0 ? (
              filteredData.map(page => {
                const IconComponent = page.icon;
                return (
                  <tr key={page.id} className="hover:bg-[#f9dcd8] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <IconComponent size={20} className="text-[#b41e15]" />
                        <span className="text-base text-[#271815]">{page.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border ${page.statusClass}`}>
                        {page.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#5b403c]">{page.author}</td>
                    <td className="px-6 py-4 text-xs text-[#586062]">{page.lastModified}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-[#dae1e3] text-[#586062] rounded-full transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-[#586062] text-sm">
                  No pages found matching "{debouncedSearch}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-[#fff0ee] text-center border-t border-[#e4beb8]">
        <button className="text-[#b41e15] text-sm font-semibold tracking-wide hover:underline">View All 248 Pages</button>
      </div>
    </section>
  );
}
