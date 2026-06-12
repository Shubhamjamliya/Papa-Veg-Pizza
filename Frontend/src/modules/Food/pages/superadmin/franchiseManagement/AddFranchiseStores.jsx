import React, { useState } from "react";
import { X, Check, MapPin, Upload, ArrowRight, BadgeCheck } from "lucide-react";

export default function AddFranchiseStores({ isOpen, onClose, store }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const isEditMode = !!store;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6" id="modal-overlay">
      {/* Wizard Modal Container */}
      <div className="bg-white dark:bg-zinc-955 w-full max-w-3xl h-[85vh] md:h-[620px] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800">

        {/* Modal Header */}
        <div className="px-4 py-3 md:px-5 md:py-3.5 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900 shrink-0">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{isEditMode ? "Edit Franchise Store" : "Add New Franchise Store"}</h3>
            <p className="text-zinc-500 text-[11px] mt-0.5">{isEditMode ? "Update details for an existing location." : "Onboard a new location to the Papa Veg network."}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        <div className="px-4 py-2.5 md:px-5 md:py-3 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between overflow-x-auto scrollbar-none shrink-0">
          {[
            { step: 1, label: "Basic Details" },
            { step: 2, label: "Location" },
            { step: 3, label: "Business Info" },
            { step: 4, label: "Operations" }
          ].map((s, idx) => (
            <div key={s.step} className={`flex items-center gap-1.5 md:gap-2.5 ${idx < 3 ? 'flex-1' : ''} relative min-w-max pr-4 md:pr-0`}>
              <div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all duration-300
                  ${currentStep > s.step ? 'bg-[var(--primary)] border-[var(--primary)] text-white' :
                    currentStep === s.step ? 'text-[var(--primary)] border-[var(--primary)]' :
                      'text-zinc-500 border-zinc-300 dark:border-zinc-700'}`
                }
              >
                {currentStep > s.step ? <Check size={14} strokeWidth={3} /> : s.step}
              </div>
              <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${currentStep >= s.step ? 'text-[var(--primary)]' : 'text-zinc-500'}`}>
                {s.label}
              </span>
              {idx < 3 && (
                <div className="h-[2px] w-6 md:flex-1 bg-zinc-200 dark:bg-zinc-800 mx-1.5 md:mx-3"></div>
              )}
            </div>
          ))}
        </div>

        {/* Wizard Steps Content */}
        <div className="flex-1 overflow-y-auto p-3.5 md:p-5">

          {/* Step 1: Basic Details */}
          {currentStep === 1 && (
            <section className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Store Name</label>
                  <input defaultValue={store?.name || ""} className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="e.g. Papa Veg Downtown" type="text" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Store Unique Code</label>
                  <input defaultValue={store?.id || ""} className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all font-mono dark:text-zinc-100" placeholder="PV-DT-001" type="text" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Franchise Owner</label>
                  <select className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100">
                    <option>Select an approved owner...</option>
                    <option>Rajiv Malhotra (MAL-9012)</option>
                    <option>Sonia Gupta (GUP-4432)</option>
                    <option>Vikram Singh (SIN-1102)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Contact Number</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">+91</span>
                    <input defaultValue={store?.phone?.replace("+91 ", "") || ""} className="w-full h-9 pl-10 pr-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="9876543210" type="tel" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Manager Email</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="manager@papaveg.com" type="email" />
                </div>
              </div>
            </section>
          )}

          {/* Step 2: Location */}
          {currentStep === 2 && (
            <section className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                <div className="md:col-span-2 space-y-4 md:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Complete Address</label>
                    <textarea defaultValue={store?.location || ""} className="w-full p-2.5 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="Suite 405, Green Plaza, MG Road..." rows="2"></textarea>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4.5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Region</label>
                      <select className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none">
                        <option>Northern Hub</option>
                        <option>Southern Coastal</option>
                        <option>Western Metro</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Pincode</label>
                      <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" placeholder="110001" type="text" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 h-48 md:h-auto">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1.5 block">Map Picker</label>
                  <div className="w-full h-[calc(100%-20px)] min-h-[160px] rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden relative bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                      alt="Map"
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
                    />
                    <div className="z-10 bg-white/90 dark:bg-zinc-900/90 p-2 rounded shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col items-center">
                      <MapPin className="text-[var(--primary)]" size={18} fill="currentColor" />
                      <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 uppercase mt-0.5">Pick Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: Business Info */}
          {currentStep === 3 && (
            <section className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">GST Number</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg font-mono dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" placeholder="22AAAAA0000A1Z5" type="text" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">PAN Card Number</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg font-mono dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" placeholder="ABCDE1234F" type="text" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">FSSAI License Number</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" placeholder="100XXXXXXXXXXX" type="text" />
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2.5">Required Documents</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4.5">
                  <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-3.5 flex flex-col items-center justify-center text-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                    <Upload className="text-[var(--primary)] mb-1.5 group-hover:scale-110 transition-transform" size={16} />
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Lease Agreement</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">PDF, Max 5MB</p>
                  </div>
                  <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-3.5 flex flex-col items-center justify-center text-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                    <Upload className="text-[var(--primary)] mb-1.5 group-hover:scale-110 transition-transform" size={16} />
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Store Interior Photos</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">JPG, Max 10MB</p>
                  </div>
                  <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-3.5 flex flex-col items-center justify-center text-center hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer group">
                    <Upload className="text-[var(--primary)] mb-1.5 group-hover:scale-110 transition-transform" size={16} />
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Health Certificate</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5">PDF, Max 5MB</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Step 4: Operations */}
          {currentStep === 4 && (
            <section className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Operating Hours</label>
                  <div className="flex items-center gap-1.5">
                    <input className="flex-1 h-9 px-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-xs" type="time" defaultValue="09:00" />
                    <span className="text-zinc-500 text-xs">to</span>
                    <input className="flex-1 h-9 px-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none text-xs" type="time" defaultValue="23:00" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Delivery Radius (km)</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" type="number" defaultValue="5" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Min Order Value (₹)</label>
                  <input className="w-full h-9 px-3 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg dark:text-zinc-100 focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none" type="number" defaultValue="250" />
                </div>
              </div>

              <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <div className="bg-zinc-50 dark:bg-zinc-900 px-3 py-2 flex justify-between items-center">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase">Holiday Calendar Management</h4>
                  <button className="text-[var(--primary)] font-bold text-[10px] uppercase hover:underline">+ Add Holiday</button>
                </div>
                <div className="p-3.5 space-y-2">
                  <div className="flex justify-between items-center p-2.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">Diwali Festival</p>
                      <p className="text-[10px] text-zinc-500">Oct 31, 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-[9px] font-bold rounded">CLOSED</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">Store Renovation</p>
                      <p className="text-[10px] text-zinc-500">Nov 12 - Nov 15, 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] text-[9px] font-bold rounded">SCHEDULED</span>
                  </div>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-4 py-3 md:px-5 md:py-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col-reverse sm:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              className={`flex-1 sm:flex-none px-4 h-9 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs transition-all ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
              disabled={currentStep === 1}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button 
              className="flex-1 sm:flex-none px-4 h-9 rounded-lg text-zinc-500 font-bold text-xs hover:text-zinc-900 dark:hover:text-zinc-100 transition-all hidden sm:block"
              onClick={() => {
                alert("Store details have been saved to drafts.");
                onClose();
              }}
            >
              Save Draft
            </button>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            {currentStep < totalSteps ? (
              <button
                className="flex-1 sm:flex-none px-6 h-9 rounded-lg bg-[var(--secondary)] text-white font-bold text-xs hover:brightness-110 transition-all shadow-sm flex items-center justify-center gap-1.5"
                onClick={handleNext}
              >
                <span>Next Step</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                className="flex-1 sm:flex-none px-6 h-9 rounded-lg bg-[var(--primary)] text-white font-bold text-xs hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-1.5"
                onClick={() => {
                  onClose();
                  // Additional save logic would go here
                }}
              >
                <span>{isEditMode ? "Update Store" : "Create Store"}</span>
                <BadgeCheck size={14} />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
