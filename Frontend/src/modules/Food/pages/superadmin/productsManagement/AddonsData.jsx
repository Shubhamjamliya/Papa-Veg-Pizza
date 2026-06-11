import React, { useState, useEffect } from "react";
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function AddonsData({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterGroup, setFilterGroup] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Debouncing search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Dummy Add-ons Data
  const initialAddons = [
    {
      id: 1,
      name: "Paneer Tikka",
      group: "Veg Toppings",
      type: "Topping",
      price: "₹2.50",
      stock: 45,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZTkkBAyqNPLRsPP-Xs6y13Z7onXSmHdsJjTfXuqbyPrCAKldR0zP3eOueTOxgEgxd21Sn5GN3P_Lalo0loAXBYjzUimsy8hHzFVoQ4lAmoap2rDpBZKaK5QDMEkARlCqDavU9PCx_GxzQitcQoZKJFr09VLmbXZYJPXn-XhslMYTeNSWZflhY5Lfuda1ukn94A0N4q0NlNNj8IkJBbMfoA4bNloY7Xwsc9nB7QobgKyNSswjF2WWQQ-W_dUxvCH7BQ4zIfANUsA",
    },
    {
      id: 2,
      name: "Extra Mozzarella",
      group: "Cheese Add-ons",
      type: "Add-on",
      price: "₹1.99",
      stock: 0,
      status: "Out of Stock",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKS6ZSMxJLbDeIensAT1kuWvrTZzXHEYNPuTB3jJXJR5fG-_oWKVIdqhoO9xUc5eqxaaeWl171Z29MKk-qhA5il_0EHPqgiVsjZkomO1FvJ_wec5SS_iu6daCm4MLmpNr3iHh7iEw2OggXEZ0o2RYfa838KPcCEVJZdy8gqJSMUuQB47syWZQU2CjZBJTvfYLuvdQGHq3Kz8-X5F7tCLTtW2gxUy4UbeKyIG49FC3q3jjgrgeH1u2CjARujuVblNlLanXEMxu_ev8",
    },
    {
      id: 3,
      name: "Garlic Mayo Dip",
      group: "Dips",
      type: "Dip",
      price: "₹0.50",
      stock: 120,
      status: "Active",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZav2_qE8LirVS4JBEhFM05HhGSbx8xPMMeqNF-PlbomqIr2G8bptCXRdm-ZfkfOWbSHXPcVoZBuT-J6mwIFrB3GFXukq4wvucUZavYy5fMcH0cLyhCNaCfITM3om6yRP8BhdY_CbMRSU-heTp9SDSgiknNu-U0NdFCn4F3ziVnqzRG5Qe85gKRaMIZ2hsTQC2h3QR3UTfEuvszQyxd8DXm6-FNx2Cqi6yaLUrg-x4y7VH09A21KKzFV1hE5sV1h2MrB3DutT14fI",
    }
  ];

  const filteredAddons = initialAddons.filter(addon => {
    const matchesSearch = addon.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
                          addon.group.toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchesGroup = filterGroup ? addon.group === filterGroup : true;
    const matchesType = filterType ? addon.type === filterType : true;
    const matchesStatus = filterStatus ? addon.status === filterStatus : true;
    
    return matchesSearch && matchesGroup && matchesType && matchesStatus;
  });

  const resetFilters = () => {
    setFilterGroup("");
    setFilterType("");
    setFilterStatus("");
    setSearchTerm("");
  };

  return (
    <section className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
      {/* Search and Filters Header */}
      <div className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
            placeholder="Search add-ons..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 border text-sm font-bold rounded-lg transition-colors w-full sm:w-auto justify-center shadow-sm ${
              showFilters 
                ? 'bg-[var(--primary)] text-white border-[var(--primary)]' 
                : 'bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'
            }`}
          >
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="p-4 md:p-6 bg-zinc-50 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Group</label>
            <select 
              className="w-full h-10 px-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] text-zinc-900 dark:text-zinc-100"
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
            >
              <option value="">All Groups</option>
              <option value="Veg Toppings">Veg Toppings</option>
              <option value="Cheese Add-ons">Cheese Add-ons</option>
              <option value="Dips">Dips</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Type</label>
            <select 
              className="w-full h-10 px-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] text-zinc-900 dark:text-zinc-100"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Topping">Topping</option>
              <option value="Add-on">Add-on</option>
              <option value="Dip">Dip</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</label>
            <select 
              className="w-full h-10 px-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[var(--primary)] text-zinc-900 dark:text-zinc-100"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="flex items-end">
            <button 
              onClick={resetFilters}
              className="h-10 px-4 w-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Item Name</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Group</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {filteredAddons.map(item => (
              <tr 
                key={item.id} 
                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  {item.group}
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-bold shadow-sm">
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {item.price}
                </td>
                <td className={`px-6 py-4 text-sm font-bold ${item.stock === 0 ? "text-red-500" : "text-zinc-900 dark:text-zinc-100"}`}>
                  {item.stock} units
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1.5 text-xs font-bold ${item.status === 'Active' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${item.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onViewDetails) onViewDetails(item);
                    }}
                    className="text-zinc-400 hover:text-[var(--primary)] transition-colors p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))}
            
            {filteredAddons.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-zinc-500">
                  No addons found matching "{searchTerm}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 md:p-6 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row justify-between items-center border-t border-zinc-200 dark:border-zinc-800 gap-4">
        <p className="text-sm font-bold text-zinc-500">Showing {filteredAddons.length} of 84 items</p>
        <div className="flex gap-2">
          <button className="px-2 py-1 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 text-zinc-700 dark:text-zinc-300" disabled>
            <ChevronLeft size={18} />
          </button>
          <button className="px-3 py-1 border border-[var(--primary)] rounded-lg bg-[var(--primary)] text-white font-bold shadow-sm">1</button>
          <button className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-bold">2</button>
          <button className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-bold">...</button>
          <button className="px-2 py-1 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
