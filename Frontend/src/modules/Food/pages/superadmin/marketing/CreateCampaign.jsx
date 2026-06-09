import React, { useState } from 'react';
import { X, Check, ImagePlus, UserPlus, RefreshCw, Star } from 'lucide-react';

export default function CreateCampaign({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulate finish
      onClose();
      // Reset step
      setTimeout(() => setCurrentStep(1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-4xl max-h-[795px] h-full md:h-auto rounded-xl flex flex-col shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header & Stepper */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Create New Campaign</h2>
            <button 
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Stepper */}
          <div className="flex items-center justify-between max-w-2xl mx-auto px-6 relative">
            {/* Background line */}
            <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
            {/* Progress line */}
            <div 
              className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-0.5 bg-[var(--primary)] transition-all duration-500"
              style={{ right: currentStep === 1 ? '85%' : '50%' }}
            ></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-10" onClick={() => setCurrentStep(1)}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all ${
                currentStep >= 1 ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
              }`}>
                {currentStep > 1 ? <Check size={20} /> : '1'}
              </div>
              <span className={`text-sm font-bold ${currentStep >= 1 ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>Basic Details</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-10" onClick={() => setCurrentStep(2)}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold transition-all ${
                currentStep >= 2 ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
              }`}>
                {currentStep > 2 ? <Check size={20} /> : '2'}
              </div>
              <span className={`text-sm font-bold ${currentStep >= 2 ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>Target Audience</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 group cursor-not-allowed opacity-50 relative z-10">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-500 font-bold">
                3
              </div>
              <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400">Review & Launch</span>
            </div>
          </div>
        </div>

        {/* Modal Content Container */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white dark:bg-zinc-950">
          
          {/* STEP 1: Basic Details */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-5">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Campaign Name</label>
                    <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="e.g. Summer Sizzler 2024" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Campaign Type</label>
                    <select className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100">
                      <option>Discount Percentage (%)</option>
                      <option>Fixed Amount ($)</option>
                      <option>Buy One Get One (BOGO)</option>
                      <option>Free Delivery</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Description</label>
                    <textarea rows={4} className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" placeholder="Describe the campaign goals and customer-facing message..."></textarea>
                  </div>
                </div>

                {/* Banner Upload Area */}
                <div className="md:col-span-4 flex flex-col">
                  <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">Campaign Banner</label>
                  <div className="flex-1 min-h-[200px] border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-4 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer relative overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&fm=webp" 
                      alt="Banner Preview" 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity" 
                    />
                    <ImagePlus size={32} className="text-[var(--primary)] mb-2 z-10" />
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 z-10">Upload Banner</p>
                    <p className="text-xs text-zinc-500 mt-1 z-10">PNG, JPG or WEBP<br/>Min. 1200x400px</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Target Audience */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-100">Select Customer Segments</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* New Customers */}
                  <div className="group border-2 border-[var(--primary)] bg-[var(--primary)]/5 p-4 rounded-xl transition-all cursor-pointer relative flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center mb-3 text-white">
                      <UserPlus size={24} />
                    </div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">New Customers</p>
                    <p className="text-xs text-zinc-500 mt-1">Users who haven't placed an order yet.</p>
                    <div className="mt-4 flex items-center justify-center gap-1 text-[var(--primary)] font-bold text-xs">
                      <Check size={16} /> SELECTED
                    </div>
                  </div>

                  {/* Returning Customers */}
                  <div className="group border-2 border-transparent border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-4 rounded-xl hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-pointer flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white text-zinc-500 transition-colors">
                      <RefreshCw size={24} />
                    </div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Returning</p>
                    <p className="text-xs text-zinc-500 mt-1">Users with 1-5 previous orders.</p>
                  </div>

                  {/* VIP Customers */}
                  <div className="group border-2 border-transparent border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-4 rounded-xl hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all cursor-pointer flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white text-zinc-500 transition-colors">
                      <Star size={24} />
                    </div>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">VIP Members</p>
                    <p className="text-xs text-zinc-500 mt-1">Top 5% of spenders in last 90 days.</p>
                  </div>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl">
                  <label className="text-sm text-zinc-900 dark:text-zinc-100 font-bold mb-3 block">Geographic Targeting</label>
                  <div className="space-y-2">
                    {['New York - Downtown', 'Brooklyn - Heights', 'Queens - Flushing'].map((loc, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-zinc-950 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-200 dark:border-zinc-800">
                        <input type="checkbox" defaultChecked={i < 2} className="text-[var(--primary)] rounded focus:ring-[var(--primary)] border-zinc-300 dark:border-zinc-700" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl flex flex-col justify-center">
                  <label className="text-sm text-zinc-900 dark:text-zinc-100 font-bold mb-3 block">Estimated Reach</label>
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-4xl font-bold text-[var(--primary)]">12,450</span>
                    <span className="text-sm text-zinc-500 font-medium pb-1">Customers</span>
                  </div>
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-[var(--primary)] h-full w-3/4 rounded-full"></div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-3 font-medium">Highly relevant segment selected.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center">
          <button 
            className="px-6 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={onClose}
          >
            Save Draft
          </button>
          <div className="flex gap-4">
            {currentStep > 1 && (
              <button 
                className="px-6 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                onClick={handleBack}
              >
                Previous Step
              </button>
            )}
            <button 
              className="bg-[var(--primary)] text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95"
              onClick={handleNext}
            >
              {currentStep === 2 ? 'Confirm Selection' : 'Next Step'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
