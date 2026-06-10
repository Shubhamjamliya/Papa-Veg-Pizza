import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, User, Pizza } from "lucide-react"

export default function EditUserProfile({ isOpen, onClose, customer, onSave }) {
  const [formData, setFormData] = useState(customer || {})

  useEffect(() => {
    if (customer) {
      setFormData(customer)
    }
  }, [customer])

  if (!isOpen || !customer) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-3xl h-fit max-h-[90vh] overflow-y-auto bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl z-[160] scrollbar-none"
          >
            <div className="flex justify-between items-center pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-6">
              <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                <User size={24} className="text-[var(--primary)]" />
                Edit Profile: {customer.id}
              </h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                <X size={20} className="text-zinc-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Card: Basic Details */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      {formData.avatar ? (
                        <img
                          alt={formData.name}
                          src={formData.avatar}
                          className="w-24 h-24 rounded-full object-cover border-4 border-[var(--primary)]/10"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--primary)] to-amber-500 text-white flex items-center justify-center font-bold text-3xl shadow-md border-4 border-white dark:border-zinc-800">
                          {formData.name?.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name || ""} 
                        onChange={handleChange}
                        required
                        className="w-full p-2.5 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:border-[var(--primary)] text-zinc-800 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Email Address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email || ""} 
                          onChange={handleChange}
                          required
                          className="w-full pl-10 p-2.5 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:border-[var(--primary)] text-zinc-800 dark:text-zinc-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input 
                          type="text" 
                          name="phone" 
                          value={formData.phone || ""} 
                          onChange={handleChange}
                          required
                          className="w-full pl-10 p-2.5 text-sm border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:border-[var(--primary)] text-zinc-800 dark:text-zinc-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Status & Loyalty */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
                    <div className="relative z-10 space-y-5">
                      <div>
                        <label className="text-[9px] font-bold opacity-80 uppercase tracking-wider block mb-1.5">Status</label>
                        <select 
                          name="status"
                          value={formData.status || "ACTIVE"}
                          onChange={handleChange}
                          className="w-full p-3 text-sm border border-white/20 rounded-xl bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                        >
                          <option value="ACTIVE" className="text-black">ACTIVE</option>
                          <option value="BLOCKED" className="text-black">BLOCKED</option>
                          <option value="SUSPENDED" className="text-black">SUSPENDED</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[9px] font-bold opacity-80 uppercase tracking-wider block mb-1.5">Loyalty Tier</label>
                        <select 
                          name="loyalty"
                          value={formData.loyalty || "Gold Tier"}
                          onChange={handleChange}
                          className="w-full p-3 text-sm border border-white/20 rounded-xl bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                        >
                          <option value="Silver Tier" className="text-black">Silver Tier</option>
                          <option value="Gold Tier" className="text-black">Gold Tier</option>
                          <option value="Platinum Tier" className="text-black">Platinum Tier</option>
                          <option value="Elite VIP" className="text-black">Elite VIP</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-[9px] font-bold opacity-80 uppercase tracking-wider block mb-1.5">Wallet Balance (₹)</label>
                        <input 
                          type="number" 
                          name="walletBalance" 
                          value={formData.walletBalance || 0} 
                          onChange={handleChange}
                          className="w-full p-3 text-sm border border-white/20 rounded-xl bg-black/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10">
                      <Pizza size={140} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-extrabold rounded-2xl shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
