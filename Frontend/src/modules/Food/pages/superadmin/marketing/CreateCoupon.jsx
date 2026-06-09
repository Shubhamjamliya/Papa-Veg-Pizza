import React, { useState } from 'react';
import { X, Info, Banknote, Check } from 'lucide-react';

export default function CreateCoupon({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  if (!isOpen) return null;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const steps = [
    { id: 1, title: "General Info" },
    { id: 2, title: "Discount Rules" },
    { id: 3, title: "Order Conditions" },
    { id: 4, title: "Restrictions" },
    { id: 5, title: "Applicability" },
    { id: 6, title: "Validity" },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
      {/* Multi-step Modal */}
      <div className="bg-white dark:bg-zinc-950 w-full max-w-4xl max-h-[795px] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900">
          <div>
            <h3 className="text-2xl font-bold text-[var(--primary)]">Create New Coupon</h3>
            <p className="text-sm text-zinc-500">Follow the steps to configure your franchise discount code</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
            <X size={24} className="text-zinc-500" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden min-h-[500px]">
          {/* Stepper Sidebar (Desktop) */}
          <div className="hidden md:flex w-64 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-6 flex-col gap-6">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className={`flex items-center gap-4 ${isActive || isCompleted ? '' : 'opacity-50'}`}>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold
                    ${isActive ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/10' : ''}
                    ${isCompleted ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : ''}
                    ${!isActive && !isCompleted ? 'border-zinc-300 text-zinc-500' : ''}
                  `}>
                    {isCompleted ? <Check size={16} /> : step.id}
                  </div>
                  <span className={`text-sm font-semibold ${isActive ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step Content Canvas */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white dark:bg-zinc-950">
            
            {/* Step 1: General Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--primary)] p-2 bg-[var(--primary)]/10 rounded-lg">
                    <Info size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">General Information</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Coupon Code*</label>
                    <input type="text" className="w-full h-10 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] uppercase outline-none dark:text-zinc-100" placeholder="e.g. PIZZAPARTY25" />
                    <p className="text-[10px] text-zinc-500">Customers will enter this code at checkout.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Campaign Name*</label>
                    <input type="text" className="w-full h-10 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" placeholder="e.g. Summer Bonanza" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Description</label>
                    <textarea className="w-full border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 p-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" placeholder="Describe the promotion details..." rows={3}></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Coupon Type</label>
                    <select className="w-full h-10 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100">
                      <option>Public Discount</option>
                      <option>Exclusive/Member Only</option>
                      <option>First Order Only</option>
                      <option>Referral Reward</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Discount Rules */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--primary)] p-2 bg-[var(--primary)]/10 rounded-lg">
                    <Banknote size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Discount Rules</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Discount Type</label>
                    <div className="flex gap-4">
                      <label className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded p-3 flex items-center gap-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <input type="radio" name="discount_type" className="text-[var(--primary)] focus:ring-[var(--primary)]" defaultChecked />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">Percentage (%)</span>
                      </label>
                      <label className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded p-3 flex items-center gap-3 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <input type="radio" name="discount_type" className="text-[var(--primary)] focus:ring-[var(--primary)]" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">Fixed Amount ($)</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Value*</label>
                    <div className="relative">
                      <input type="number" className="w-full h-10 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" placeholder="0.00" />
                      <span className="absolute right-4 top-2.5 text-zinc-500">%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Maximum Discount Limit</label>
                    <div className="relative">
                      <span className="absolute left-4 top-2.5 text-zinc-500">$</span>
                      <input type="number" className="w-full h-10 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 pl-8 pr-4 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100" placeholder="No limit" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for Steps 3, 4, 6 */}
            {[3, 4, 6].includes(currentStep) && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--primary)] p-2 bg-[var(--primary)]/10 rounded-lg">
                    <Info size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Step {currentStep} Configuration</h4>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">This is where you configure step {currentStep} details.</p>
              </div>
            )}

            {/* Step 5: Applicability Preview */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--primary)] p-2 bg-[var(--primary)]/10 rounded-lg">
                    <Info size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Applicability Configuration</h4>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">Configure where this coupon can be applied.</p>

                <div className="mt-12 p-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center text-center">
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fm=webp" alt="PizzaCorp Visual Identity" className="w-24 h-24 mb-4 object-cover rounded-full shadow-md" />
                  <h5 className="text-sm font-bold text-[var(--primary)] mt-4">PizzaCorp Visual Identity</h5>
                  <p className="text-xs text-zinc-500 max-w-xs mt-1">Your coupons will be applied across our high-performance franchise network with automated stock validation.</p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-3 w-full md:w-auto">
            <button onClick={onClose} className="flex-1 md:flex-none px-6 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">Cancel</button>
            <button className="flex-1 md:flex-none px-6 py-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">Save Draft</button>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            {currentStep > 1 && (
              <button onClick={prevStep} className="px-6 py-2 border border-[var(--primary)] text-[var(--primary)] text-sm font-semibold rounded hover:bg-[var(--primary)]/5 transition-all">
                Back
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button onClick={nextStep} className="flex-1 md:flex-none px-6 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all">
                Next Step
              </button>
            ) : (
              <button onClick={onClose} className="flex-1 md:flex-none px-6 py-2 bg-[var(--primary)] text-white text-sm font-semibold rounded shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all">
                Publish Coupon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
