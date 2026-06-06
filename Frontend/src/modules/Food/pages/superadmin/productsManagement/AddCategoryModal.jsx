import React, { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function AddCategoryModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  // Auto-generate slug when category name changes
  useEffect(() => {
    const generatedSlug = categoryName
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    setSlug(generatedSlug);
  }, [categoryName]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { num: 1, label: "Basic Info" },
    { num: 2, label: "Media" },
    { num: 3, label: "Attributes" },
    { num: 4, label: "SEO" },
    { num: 5, label: "Review" },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      {/* Multi-Step Modal Container */}
      <div className="bg-white dark:bg-zinc-950 w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header & Stepper */}
        <div className="px-6 pt-6 pb-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Add New Category</h2>
            <button 
              onClick={onClose}
              className="text-zinc-400 hover:text-[var(--primary)] transition-colors p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Stepper */}
          <div className="flex items-center justify-between px-4 relative">
            {/* Progress Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
            {/* Progress Line Active */}
            <div 
              className="absolute top-1/2 left-0 h-[2px] bg-[var(--primary)] -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {/* Steps */}
            {steps.map(step => {
              const isActiveStep = currentStep === step.num;
              const isCompletedStep = currentStep > step.num;
              
              return (
                <div key={step.num} className="relative z-10 flex flex-col items-center gap-1">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-zinc-50 dark:ring-zinc-900 transition-colors ${
                      isActiveStep || isCompletedStep 
                        ? "bg-[var(--primary)] text-white" 
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {isCompletedStep ? <Check size={16} strokeWidth={3} /> : step.num}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold hidden sm:block ${
                    isActiveStep || isCompletedStep ? "text-[var(--primary)]" : "text-zinc-400"
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="category_name">Category Name</label>
                  <input 
                    id="category_name" 
                    type="text" 
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all" 
                    placeholder="e.g. Signature Pizzas" 
                  />
                  <p className="text-[10px] text-zinc-500 italic">Required for customer-facing menus.</p>
                </div>
                {/* Slug */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="category_slug">Slug</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-zinc-400 font-medium text-sm">/cat/</span>
                    <input 
                      id="category_slug" 
                      type="text" 
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      className="w-full pl-12 pr-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all" 
                      placeholder="signature-pizzas" 
                    />
                  </div>
                  <p className="text-[10px] text-zinc-500 italic">Unique URL identifier.</p>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300" htmlFor="category_desc">Description</label>
                <textarea 
                  id="category_desc" 
                  rows="4" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none" 
                  placeholder="Describe the offerings in this category for the menu page..."
                ></textarea>
              </div>

              {/* Status Toggle & Options */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">Category Status</span>
                    <p className="text-xs text-zinc-500">Set whether this category is visible in the shop.</p>
                  </div>
                  {/* Status Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                    <span className={`ml-3 text-xs font-bold px-2.5 py-1 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" 
                        : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}>
                      {isActive ? "Active" : "Inactive"}
                    </span>
                  </label>
                </div>
              </div>

              {/* Visual Accent Card */}
              <div className="relative rounded-xl h-24 overflow-hidden group">
                <img 
                  className="w-full h-full object-cover grayscale opacity-30 dark:opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCChcuhe5BVrEI9HY8ev0yqaymmjjVvA0QnSOgBVy9lXuHSDURuVshLvUN2cyIC-4fW4IdEFuYzd_BCcPSZzyrJcvaMGXMTGsn2OYlAW3I4a1JwcM3KDpXJoG4wjPjG_e8sWpUiNtwYuIfU-huxaqJ-TqQK73auOf1xdOH_KJvYmiULU-qL21zo6xJZm_MGq8sEYxNaCMBhguvTBaEs_faCg4CadAJ0SdemQu0kInytYNCFJI9n9OgiPniLVvJczUY9rUyiI45JSrk" 
                  alt="Pizza Prep" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 dark:from-zinc-950/90 to-transparent flex items-center px-6">
                  <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 italic max-w-xs leading-relaxed">
                    Tip: Categories with clear descriptions have 15% higher conversion rates.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep > 1 && (
            <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 mb-4">
                <span className="text-2xl font-bold">{currentStep}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Step {currentStep} Prototype</h3>
              <p className="text-zinc-500 text-sm max-w-md">
                This is a placeholder for step {currentStep} ({steps.find(s => s.num === currentStep)?.label}). 
                Implement the fields as required by your business logic.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
          {currentStep === 1 ? (
            <button 
              onClick={onClose}
              className="px-6 py-2 rounded-xl text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
          ) : (
            <button 
              onClick={handlePrev}
              className="px-6 py-2 rounded-xl text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Previous
            </button>
          )}
          
          <div className="flex items-center gap-3">
            {currentStep < 5 ? (
              <button 
                onClick={handleNext}
                className="bg-[var(--primary)] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                Next Step
                <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={onClose}
                className="bg-emerald-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                Save Category
                <Check size={16} />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
