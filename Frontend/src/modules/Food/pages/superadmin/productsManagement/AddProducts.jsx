import React, { useState } from "react";
import { X, UploadCloud, ChevronRight, Loader2 } from "lucide-react";

export default function AddProducts({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Success: Transitioning to Step 2: Pricing');
      // In a real flow, this might navigate to the next step or update state
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="flex flex-col bg-white dark:bg-zinc-950 overflow-hidden w-full h-full md:max-w-3xl md:h-[85vh] md:max-h-[800px] md:shadow-2xl md:rounded-xl">
        
        {/* Header: Progress Indicator */}
        <header className="bg-white dark:bg-zinc-950 px-4 py-6 border-b border-zinc-200 dark:border-zinc-800 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Add New Product</h1>
            <button 
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500" 
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between w-full relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-100 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
            
            {/* Step 1: Details (Active) */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[var(--primary)]/20">1</div>
              <span className="text-xs font-bold text-[var(--primary)] hidden md:block">Details</span>
            </div>
            {/* Step 2: Pricing */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xs border border-zinc-200 dark:border-zinc-700">2</div>
              <span className="text-xs font-bold text-zinc-400 hidden md:block">Pricing</span>
            </div>
            {/* Step 3: Inventory */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xs border border-zinc-200 dark:border-zinc-700">3</div>
              <span className="text-xs font-bold text-zinc-400 hidden md:block">Inventory</span>
            </div>
            {/* Step 4: Customization */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xs border border-zinc-200 dark:border-zinc-700">4</div>
              <span className="text-xs font-bold text-zinc-400 hidden md:block">Customization</span>
            </div>
            {/* Step 5: Store */}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-xs border border-zinc-200 dark:border-zinc-700">5</div>
              <span className="text-xs font-bold text-zinc-400 hidden md:block">Store</span>
            </div>
          </div>
        </header>

        {/* Main Content Canvas (Step 1: Basic Details) */}
        <main className="flex-1 overflow-y-auto px-4 py-8 md:px-8 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          <form className="space-y-6" id="step-1-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Product Name */}
              <div className="col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Product Name</label>
                <input 
                  className="w-full h-12 px-4 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100" 
                  placeholder="e.g. Spicy Garden Delight" 
                  type="text"
                />
              </div>

              {/* SKU & Category */}
              <div className="col-span-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">SKU</label>
                <input 
                  className="w-full h-12 px-4 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100" 
                  placeholder="PV-10293-PIZ" 
                  type="text"
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Category</label>
                <select className="w-full h-12 px-4 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100">
                  <option>Signature Pizzas</option>
                  <option>Classic Sides</option>
                  <option>Vegan Specials</option>
                  <option>Beverages</option>
                </select>
              </div>

              {/* Dietary & Health */}
              <div className="col-span-1">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Dietary Type</label>
                <div className="flex gap-3">
                  <label className="flex-1 cursor-pointer">
                    <input className="hidden peer" name="dietary" type="radio" value="veg" defaultChecked />
                    <div className="h-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all text-sm font-bold">
                      Vegetarian
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input className="hidden peer" name="dietary" type="radio" value="vegan" />
                    <div className="h-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-lg peer-checked:bg-emerald-50 dark:peer-checked:bg-emerald-900/20 peer-checked:border-emerald-500 peer-checked:text-emerald-600 dark:peer-checked:text-emerald-400 transition-all text-sm font-bold">
                      Vegan
                    </div>
                  </label>
                </div>
              </div>

              {/* Prep Time & Calories */}
              <div className="col-span-1 flex gap-3">
                <div className="flex-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Prep Time (min)</label>
                  <input 
                    className="w-full h-12 px-4 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100" 
                    placeholder="15" 
                    type="number"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Calories</label>
                  <input 
                    className="w-full h-12 px-4 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] outline-none transition-all text-sm text-zinc-900 dark:text-zinc-100" 
                    placeholder="240" 
                    type="number"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="col-span-1 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-2">Product Image</label>
                <div className="relative w-full aspect-video md:aspect-auto md:h-48 rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center justify-center group hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors cursor-pointer overflow-hidden">
                  <img 
                    alt="Pizza Preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ntUCKstWxWZ0WB0AGhE0vIgCyQYCLKgiOJZs9yAxUgsbLoPuKrHdP08GkRAEWQE_pasbNYCCySxfzv_WwjOvwIOjeaWSlL8Tfv5yAhA3IFqzMKn03mDFHTt42UhBDGElSbjzXUZbCCQF89fOWDY_Aw1vs3a_3jote_GORN4EVwxWmSoPMmBJgol-lVWuCsmLdPPVO9njDiwAPteLgvIc3X5z2FMLSwq5jTuS36S-OcFfb55EHJaiss_u93BYzMGpWpPBd5vIK2Y"
                  />
                  <div className="flex flex-col items-center text-zinc-400 group-hover:text-[var(--primary)] transition-colors z-10">
                    <UploadCloud size={40} className="mb-3" />
                    <span className="text-base font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-[var(--primary)] transition-colors">Drag & drop or click to upload</span>
                    <span className="text-xs font-medium opacity-70 mt-1">PNG, JPG up to 10MB</span>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </main>

        {/* Footer Actions */}
        <footer className="bg-zinc-50 dark:bg-zinc-900/50 p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4 md:px-8">
          <button 
            onClick={onClose}
            className="flex-1 md:flex-none md:min-w-[120px] h-12 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex-[2] md:flex-none md:ml-auto md:min-w-[160px] h-12 rounded-xl bg-[var(--primary)] text-white font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span>Next</span>
                <ChevronRight size={20} />
              </>
            )}
          </button>
        </footer>
      </div>
    </div>
  );
}
