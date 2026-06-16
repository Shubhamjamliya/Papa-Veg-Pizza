import React, { useState } from 'react';
import { X, Info, Banknote, Check, PiggyBank, ChevronDown, Settings2, UserPlus, Users, Star, AlertCircle, Infinity as InfinityIcon, User, CalendarClock, Store, Layers, Search, Filter, Tag, CalendarCheck, CalendarX, Globe, Trash2, Edit3, Rocket, Clock } from 'lucide-react';

export default function CreateCoupon({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [discountType, setDiscountType] = useState('percentage');
  const [discountValue, setDiscountValue] = useState('');
  const [maxDiscount, setMaxDiscount] = useState('');
  const [minOrderValue, setMinOrderValue] = useState('');
  const [maxOrderValue, setMaxOrderValue] = useState('');
  const [customerTypes, setCustomerTypes] = useState(['existing', 'vip']);
  const [firstOrderOnly, setFirstOrderOnly] = useState(false);
  const [totalUsageLimit, setTotalUsageLimit] = useState('500');
  const [perCustomerLimit, setPerCustomerLimit] = useState('1');
  const [dailyUsageLimit, setDailyUsageLimit] = useState('');
  const [storeWiseLimit, setStoreWiseLimit] = useState('25');
  const [allowStacking, setAllowStacking] = useState(false);
  const [applicabilityType, setApplicabilityType] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(['PIZ-001', 'PIZ-009']);
  const [selectedCategories, setSelectedCategories] = useState(['CAT-PIZ']);
  const [selectedStores, setSelectedStores] = useState(['STR-DT']);
  const [startDate, setStartDate] = useState('2026-06-16T12:00');
  const [endDate, setEndDate] = useState('2026-07-16T23:59');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [autoExpire, setAutoExpire] = useState(true);
  const [initialStatus, setInitialStatus] = useState('draft');
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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center lg:pl-[280px] p-4">
      {/* Multi-step Modal */}
      <div className="bg-white dark:bg-zinc-950 w-full max-w-3xl h-[600px] max-h-[85vh] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800">
        
        {/* Modal Header */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900">
          <div>
            <h3 className="text-sm font-bold text-[var(--primary)]">Create New Coupon</h3>
            <p className="text-[10px] text-zinc-500 mt-0.5">Follow the steps to configure your franchise discount code</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all">
            <X size={18} className="text-zinc-500" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden min-h-0">
          {/* Stepper Sidebar (Desktop) */}
          <div className="hidden md:flex w-48 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 p-4 flex-col gap-4">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className={`flex items-center gap-4 ${isActive || isCompleted ? '' : 'opacity-50'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0
                    ${isActive ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/10' : ''}
                    ${isCompleted ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : ''}
                    ${!isActive && !isCompleted ? 'border-zinc-300 text-zinc-500' : ''}
                  `}>
                    {isCompleted ? <Check size={12} /> : step.id}
                  </div>
                  <span className={`text-xs font-bold ${isActive ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step Content Canvas */}
          <div className="flex-1 overflow-y-auto p-3.5 md:p-4 bg-white dark:bg-zinc-955">
            
            {/* Step 1: General Info */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
                    <Info size={16} />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">General Information</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Coupon Code*</label>
                    <input type="text" className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] uppercase outline-none dark:text-zinc-100 text-xs bg-zinc-50/50" placeholder="e.g. PIZZAPARTY25" />
                    <p className="text-[9px] text-zinc-500">Customers will enter this code at checkout.</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Campaign Name*</label>
                    <input type="text" className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs bg-zinc-50/50" placeholder="e.g. Summer Bonanza" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Description</label>
                    <textarea className="w-full border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 p-2.5 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs bg-zinc-50/50 resize-none" placeholder="Describe the promotion details..." rows={2}></textarea>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Coupon Type</label>
                    <select className="w-full h-9 border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 px-3 rounded focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none dark:text-zinc-100 text-xs bg-zinc-50/50">
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
            {currentStep === 2 && (() => {
              const val = Number(discountValue) || 0;
              const max = maxDiscount || '';
              
              let previewTitle = 'Calculation';
              let previewDescription = 'Enter values to see how much your customers will save.';
              let showBadge = val > 0;
              let badgeText = '';

              if (val > 0) {
                if (discountType === 'percentage') {
                  previewTitle = `${val}% OFF`;
                  previewDescription = `Customers receive a ${val}% discount on their order total.`;
                  badgeText = max ? `up to ₹${max}` : `based on order`;
                } else {
                  previewTitle = `₹${val} OFF`;
                  previewDescription = `A flat discount of ₹${val} will be applied to the final bill.`;
                  badgeText = `₹${val} flat`;
                }
              }

              return (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
                      <Banknote size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Discount Rules</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Form Fields */}
                    <div className="space-y-3">
                      {/* Discount Type */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider" htmlFor="discount-type">Discount Type</label>
                        <div className="relative">
                          <select 
                            className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded px-3 pr-8 appearance-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all cursor-pointer" 
                            id="discount-type"
                            value={discountType}
                            onChange={(e) => setDiscountType(e.target.value)}
                          >
                            <option value="percentage">Percentage (%)</option>
                            <option value="fixed">Fixed Amount (₹)</option>
                          </select>
                          <ChevronDown size={14} className="absolute right-3 top-2.5 pointer-events-none text-zinc-400" />
                        </div>
                      </div>

                      {/* Discount Value */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider" htmlFor="discount-value">Discount Value</label>
                        <div className="relative flex items-center">
                          <input 
                            className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded px-3 pr-10 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                            id="discount-value" 
                            placeholder="0" 
                            type="number"
                            value={discountValue}
                            onChange={(e) => setDiscountValue(e.target.value)}
                          />
                          <div className="absolute right-3 flex items-center text-zinc-400 text-xs font-semibold border-l border-zinc-200 dark:border-zinc-800 pl-3">
                            <span>{discountType === 'percentage' ? '%' : '₹'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Maximum Discount */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider" htmlFor="max-discount">Maximum Discount (Optional)</label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3 flex items-center text-zinc-400 text-xs font-semibold">
                            <span>₹</span>
                          </div>
                          <input 
                            className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded pl-7 pr-3 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                            id="max-discount" 
                            placeholder="No limit" 
                            type="number"
                            value={maxDiscount}
                            onChange={(e) => setMaxDiscount(e.target.value)}
                          />
                        </div>
                        <span className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-tight">Limits the total discount amount if using percentage.</span>
                      </div>
                    </div>

                    {/* Real-time Preview Card */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Live Preview</span>
                      <div className="bg-zinc-50/50 dark:bg-zinc-900/30 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2.5 relative overflow-hidden h-full min-h-[160px]" id="preview-card">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]"></div>
                        <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)]" id="preview-icon">
                          <PiggyBank size={20} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50" id="preview-title">{previewTitle}</h4>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 max-w-[200px]" id="preview-description">
                            {previewDescription}
                          </p>
                        </div>
                        {showBadge && (
                          <div className="bg-[var(--primary)] px-3 py-1 rounded-full text-white text-[9px] font-bold tracking-wide animate-fade-in" id="preview-badge">
                            Customer saves <span id="save-amount">{badgeText}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Step 3: Order Conditions */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
                    <Settings2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Step 3: Order Conditions</h4>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Set requirements for the coupon to be applicable.</p>
                  </div>
                </div>

                {/* Order Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                      Minimum Order Value (₹)
                      <span className="text-[var(--primary)]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs font-semibold">₹</span>
                      <input 
                        className="w-full h-9 pl-7 pr-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                        placeholder="0.00" 
                        type="number"
                        value={minOrderValue}
                        onChange={(e) => setMinOrderValue(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Maximum Order Value (₹)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xs font-semibold">₹</span>
                      <input 
                        className="w-full h-9 pl-7 pr-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                        placeholder="No limit" 
                        type="number"
                        value={maxOrderValue}
                        onChange={(e) => setMaxOrderValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Applicable Customer Types (Multi-select Chip Group) */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Applicable Customer Types</label>
                  <div className="flex flex-wrap gap-2">
                    {/* New Customers */}
                    <button 
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-full text-xs font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer ${
                        customerTypes.includes('new') 
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]' 
                          : 'border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                      }`}
                      onClick={() => {
                        setCustomerTypes(prev => 
                          prev.includes('new') ? prev.filter(t => t !== 'new') : [...prev, 'new']
                        );
                      }}
                    >
                      <UserPlus size={14} />
                      <span>New Customers</span>
                    </button>

                    {/* Existing Customers */}
                    <button 
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-full text-xs font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer ${
                        customerTypes.includes('existing') 
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]' 
                          : 'border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                      }`}
                      onClick={() => {
                        setCustomerTypes(prev => 
                          prev.includes('existing') ? prev.filter(t => t !== 'existing') : [...prev, 'existing']
                        );
                      }}
                    >
                      <Users size={14} />
                      <span>Existing Customers</span>
                    </button>

                    {/* VIP Customers */}
                    <button 
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-full text-xs font-semibold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer ${
                        customerTypes.includes('vip') 
                          ? 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]' 
                          : 'border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                      }`}
                      onClick={() => {
                        setCustomerTypes(prev => 
                          prev.includes('vip') ? prev.filter(t => t !== 'vip') : [...prev, 'vip']
                        );
                      }}
                    >
                      <Star size={14} className={customerTypes.includes('vip') ? 'fill-current' : ''} />
                      <span>VIP Customers</span>
                    </button>
                  </div>
                </div>

                {/* First Order Only Toggle */}
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl flex items-center justify-between border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-850 flex items-center justify-center text-[var(--primary)] border border-zinc-200 dark:border-zinc-700 shadow-sm">
                      <AlertCircle size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900 dark:text-zinc-50">First Order Only</p>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Restrict coupon use to the customer's very first purchase.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      className="sr-only peer" 
                      type="checkbox" 
                      checked={firstOrderOnly}
                      onChange={(e) => setFirstOrderOnly(e.target.checked)}
                    />
                    <div className="w-10 h-5.5 bg-zinc-300 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 4: Usage Restrictions */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Step 4: Usage Restrictions</h4>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Control how many times this coupon can be used.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column: Primary Numeric Limits */}
                  <div className="space-y-3">
                    <div className="group space-y-1">
                      <label className="block text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Total Usage Limit</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                          <InfinityIcon size={16} />
                        </span>
                        <input 
                          className="w-full h-9 pl-9 pr-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                          placeholder="e.g. 1000" 
                          type="number" 
                          value={totalUsageLimit}
                          onChange={(e) => setTotalUsageLimit(e.target.value)}
                        />
                      </div>
                      <p className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-tight">Total times the coupon can be redeemed across the system.</p>
                    </div>

                    <div className="group space-y-1">
                      <label className="block text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Per Customer Limit</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                          <User size={16} />
                        </span>
                        <input 
                          className="w-full h-9 pl-9 pr-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                          placeholder="e.g. 1" 
                          type="number" 
                          value={perCustomerLimit}
                          onChange={(e) => setPerCustomerLimit(e.target.value)}
                        />
                      </div>
                      <p className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-tight">Maximum times a unique customer can use this coupon.</p>
                    </div>
                  </div>

                  {/* Right Column: Secondary Numeric Limits */}
                  <div className="space-y-3">
                    <div className="group space-y-1">
                      <label className="block text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Daily Usage Limit</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                          <CalendarClock size={16} />
                        </span>
                        <input 
                          className="w-full h-9 pl-9 pr-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                          placeholder="Unlimited" 
                          type="number"
                          value={dailyUsageLimit}
                          onChange={(e) => setDailyUsageLimit(e.target.value)}
                        />
                      </div>
                      <p className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-tight">Limit redemptions per 24-hour cycle.</p>
                    </div>

                    <div className="group space-y-1">
                      <label className="block text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider">Store Wise Limit</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                          <Store size={16} />
                        </span>
                        <input 
                          className="w-full h-9 pl-9 pr-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                          placeholder="e.g. 50" 
                          type="number" 
                          value={storeWiseLimit}
                          onChange={(e) => setStoreWiseLimit(e.target.value)}
                        />
                      </div>
                      <p className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-tight">Maximum redemptions allowed per individual store location.</p>
                    </div>
                  </div>

                  {/* Full Width Section: Advanced Logic */}
                  <div className="md:col-span-2 p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-850 flex items-center justify-center text-[var(--primary)] border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0">
                        <Layers size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-50">Allow Coupon Stacking</h4>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Can this be used alongside other active promotions or vouchers?</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={allowStacking}
                        onChange={(e) => setAllowStacking(e.target.checked)}
                      />
                      <div className="w-10 h-5.5 bg-zinc-300 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                    </label>
                  </div>
                </div>

                {/* Info Banner */}
                <div className="p-3 bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg flex gap-2.5">
                  <span className="text-zinc-400 shrink-0 mt-0.5">
                    <Info size={15} />
                  </span>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Pro Tip: Setting limits to '0' or leaving them blank typically defaults to 'Unlimited'. Ensure your franchise-wide usage doesn't exceed your quarterly marketing budget.
                  </p>
                </div>
              </div>
            )}

            {/* Step 6: Validity */}
            {currentStep === 6 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="text-[var(--primary)] p-1.5 bg-[var(--primary)]/10 rounded-lg">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Step 6: Validity</h4>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Set the active period and final status.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Start Date & Time */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CalendarCheck size={14} className="text-zinc-400" />
                      Start Date &amp; Time
                    </label>
                    <input 
                      className="w-full h-9 px-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                      type="datetime-local" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  {/* End Date & Time */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CalendarX size={14} className="text-zinc-400" />
                      End Date &amp; Time
                    </label>
                    <input 
                      className="w-full h-9 px-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all" 
                      type="datetime-local" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>

                  {/* Timezone */}
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe size={14} className="text-zinc-400" />
                      Timezone
                    </label>
                    <div className="relative">
                      <select 
                        className="w-full h-9 px-3 pr-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all cursor-pointer appearance-none"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                      >
                        <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                        <option value="Europe/London">Europe/London (GMT+1)</option>
                        <option value="America/New_York">America/New_York (GMT-4)</option>
                        <option value="America/Chicago">America/Chicago (GMT-5)</option>
                        <option value="America/Los_Angeles">America/Los_Angeles (GMT-7)</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-2.5 pointer-events-none text-zinc-400" />
                    </div>
                  </div>

                  {/* Auto Expire Toggle */}
                  <div className="md:col-span-2 flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-850 flex items-center justify-center text-[var(--primary)] border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0">
                        <Trash2 size={15} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900 dark:text-zinc-50">Auto Expire</p>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Automatically disable coupon when end date is reached.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer select-none">
                      <input 
                        className="sr-only peer" 
                        type="checkbox" 
                        checked={autoExpire}
                        onChange={(e) => setAutoExpire(e.target.checked)}
                      />
                      <div className="w-10 h-5.5 bg-zinc-300 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4.5 after:w-4.5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                    </label>
                  </div>

                  {/* Initial Status */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Settings2 size={14} className="text-zinc-400" />
                      Initial Status
                    </label>
                    <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg gap-1 border border-zinc-200 dark:border-zinc-800">
                      <button 
                        type="button"
                        className={`flex-1 py-1.5 flex items-center justify-center gap-2 rounded font-semibold text-xs transition-all cursor-pointer ${
                          initialStatus === 'draft' 
                            ? 'bg-white dark:bg-zinc-850 shadow-sm text-[var(--primary)] border border-zinc-200 dark:border-zinc-700' 
                            : 'text-zinc-550 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                        }`}
                        onClick={() => setInitialStatus('draft')}
                      >
                        <Edit3 size={14} />
                        Draft
                      </button>
                      <button 
                        type="button"
                        className={`flex-1 py-1.5 flex items-center justify-center gap-2 rounded font-semibold text-xs transition-all cursor-pointer ${
                          initialStatus === 'active' 
                            ? 'bg-white dark:bg-zinc-850 shadow-sm text-[var(--primary)] border border-zinc-200 dark:border-zinc-700' 
                            : 'text-zinc-550 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'
                        }`}
                        onClick={() => setInitialStatus('active')}
                      >
                        <Rocket size={14} />
                        Active
                      </button>
                    </div>
                    <p className="text-[9px] text-zinc-500 dark:text-zinc-400 italic">
                      * Active status will make the coupon immediately available to systems if the start date is in the past.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Applicability Preview */}
            {currentStep === 5 && (() => {
              const productsList = [
                { id: 'PIZ-001', name: 'Double Pepperoni Feast (Large)', sku: 'PIZ-001', price: '18.99', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvT6tM3Ibyn8VEIcjyZCoiob2BIVRf-e7v4kSZwuU5De8THCUumcrnB1yaLBC2rzHyhDifW_592WGJ0NeOTPvgu2tNjMShQ0hfHNRMh7EqcYGmVJKrw2kszK9YUCPZVzuYWCVxbP5cZfGt-DMZ_a_3GS8iT0x8mwUeWt72AiCIwTW-tCXgBs5-imUSFJ218Cl9ebTr8bfFJf9Tk1HyPwhxcVh5wIidW97si2z8yMeyl291ffd38hyErnsARhC4W_vIERWsOLqd-VOf' },
                { id: 'PIZ-042', name: 'Artisan Margherita', sku: 'PIZ-042', price: '16.50', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxPYou6lbu0_XdvT_nj0uuWhK29LCGZ8gphxeTNfHDVde5LghydNIwNhc8E6VdF0cJc-P1xtXFS2dP7FPM26bWD3lQlgBPq510DTQnY4nvbeF-aB0w2ohbvB-MtXgFW7yGh2EiE6tgm2PMbbEjqmuS5XwsgaXX1JEc9vRUIJ3ezcw18KM2GkwYHmrsrpN31PFoPoTWbfaJgyG6Fb_OG-8iAMvVI0m_iG5znY5uu-Klq2VC5Kr20bXgbnC7e2ffCp8IKDqsO4siCKEs' },
                { id: 'PIZ-009', name: 'Smoky BBQ Chicken', sku: 'PIZ-009', price: '19.99', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoAcZ5IpNjTw8X1r_jcyJAKcJfOqapcRkP3Nwoi-gkgix1a3HEzncB4eMH3P8tud2xZbesu81CjquRbqpH4diOKaCwEYwjvRsSVXKJf6ZPDBHIl2u0T4-BtMC6mIlxCulfMgAXWV9fLo1GM7ZGjcVfPx_wmGBZhQspo8D04anHkqdo_cqkUej3SCYd-TTwgPQLmNz5VlngUJMc0rrNefVMHKrNaaS25kjgIpTT_7voogEQg5LjS26JWSOzXAdmx21e7d-Hf7Cj6lwR' },
                { id: 'SID-002', name: 'Garlic Knots (6pcs)', sku: 'SID-002', price: '5.99', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2wcNvwlFxsL9f61EI3dpejBJQGCeb4r_KCy-9pC2QHreepSoQ61TF3ipDxQW07zkOkTAnN4hBIRw7UEh0hDDvllajVVqyjdkHyQa3M5JCvaTjgJDer9dCnhpiP82GXHVt6MrFtg56TdNdLvGjo9Yh6gI92KSv3y-05OYOfHLcg9ddUm4aWPw3iBBT-KoD-vaGN9J6oPVArzRW8ciJRz9gZjzsVFXScRjULBUNKy1lJjdXk8X93F94QUtuFKzeXycmKDpWpL5MFpYs' },
                { id: 'SID-015', name: 'Crispy Seasoned Fries', sku: 'SID-015', price: '4.50', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbj3gBXo4ii36B3C5X3BLkUYPQxHbfxzxSDl97z9lPOOqvp8fJQHW5nLw8qgxKEJpnMdVq_z9YZ7IufcrvbIcGnSI0jUpRolWG1B2FsqWOWkW9yIlW8HhW8U3lX6cXoly9pOeTFcvqoxyWkVtSGNiALBTVoK92vMBpRgVbQVm-kZFd7FJme42F4ft0A7KfpY78H_f4xjr5bgI9N-YjTi5lNFWBd2JkiesHN6sN9E9KZrV43HlTO4R-yWbqGxg7UUpVV90bIUY9j_Ao' }
              ];

              const categoriesList = [
                { id: 'CAT-PIZ', name: 'Classic Pizzas', sku: 'CAT-PIZ', count: 12 },
                { id: 'CAT-SID', name: 'Gourmet Sides', sku: 'CAT-SID', count: 8 },
                { id: 'CAT-BEV', name: 'Soft Drinks & Beverages', sku: 'CAT-BEV', count: 15 },
                { id: 'CAT-DES', name: 'Sweet Desserts', sku: 'CAT-DES', count: 6 },
                { id: 'CAT-CMB', name: 'Family Combos', sku: 'CAT-CMB', count: 4 }
              ];

              const storesList = [
                { id: 'STR-DT', name: 'Papa Veg Pizza - Downtown', sku: 'STR-DT', location: 'Main Street' },
                { id: 'STR-MR', name: 'Papa Veg Pizza - Mall Road', sku: 'STR-MR', location: 'City Mall' },
                { id: 'STR-WE', name: 'Papa Veg Pizza - West End', sku: 'STR-WE', location: 'Sector 15' },
                { id: 'STR-AP', name: 'Papa Veg Pizza - Airport Food Court', sku: 'STR-AP', location: 'Terminal 2' },
                { id: 'STR-HW', name: 'Papa Veg Pizza - Highway Stop', sku: 'STR-HW', location: 'Karnal Highway' }
              ];

              let currentList = [];
              let selectedItems = [];
              let setSelectedItems = null;
              let itemTypeLabel = '';
              let skuLabel = 'SKU';
              let countTextLabel = '';

              if (applicabilityType === 'products') {
                currentList = productsList;
                selectedItems = selectedProducts;
                setSelectedItems = setSelectedProducts;
                itemTypeLabel = 'Product Information';
                skuLabel = 'SKU';
                countTextLabel = 'products';
              } else if (applicabilityType === 'categories') {
                currentList = categoriesList;
                selectedItems = selectedCategories;
                setSelectedItems = setSelectedCategories;
                itemTypeLabel = 'Category Information';
                skuLabel = 'Category Code';
                countTextLabel = 'categories';
              } else if (applicabilityType === 'stores') {
                currentList = storesList;
                selectedItems = selectedStores;
                setSelectedItems = setSelectedStores;
                itemTypeLabel = 'Store Information';
                skuLabel = 'Store Code';
                countTextLabel = 'stores';
              }

              const filteredItems = currentList.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.sku.toLowerCase().includes(searchQuery.toLowerCase())
              );

              const isAllSelected = filteredItems.length > 0 && filteredItems.every(p => selectedItems.includes(p.id));

              const handleSelectAll = () => {
                if (isAllSelected) {
                  setSelectedItems(prev => prev.filter(id => !filteredItems.some(p => p.id === id)));
                } else {
                  const newSelected = [...selectedItems];
                  filteredItems.forEach(p => {
                    if (!newSelected.includes(p.id)) {
                      newSelected.push(p.id);
                    }
                  });
                  setSelectedItems(newSelected);
                }
              };

              const handleSelectItem = (id) => {
                setSelectedItems(prev => 
                  prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
                );
              };

              const isAllProductsMode = applicabilityType === 'all';

              const searchPlaceholder = applicabilityType === 'products' 
                ? 'Search products by name or SKU...' 
                : applicabilityType === 'categories' 
                  ? 'Search categories by name or code...' 
                  : 'Search stores by name or code...';

              return (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Step 5: Applicability</h4>
                      <p className="text-[10px] text-zinc-500 mt-0.5">Choose which products or stores this coupon applies to. You can target specific items or global franchise locations.</p>
                    </div>
                  </div>

                  {/* Applicability Type Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider" htmlFor="applicability-type">Applicability Type</label>
                    <div className="relative">
                      <select 
                        className="w-full h-9 px-3 pr-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none transition-all cursor-pointer" 
                        id="applicability-type"
                        value={applicabilityType}
                        onChange={(e) => {
                          setApplicabilityType(e.target.value);
                          setSearchQuery('');
                        }}
                      >
                        <option value="all">All Products</option>
                        <option value="products">Selected Products</option>
                        <option value="categories">Selected Categories</option>
                        <option value="stores">Selected Stores</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-2.5 pointer-events-none text-zinc-400" />
                    </div>
                  </div>

                  {/* Search & Selection Area (Conditional UI) */}
                  <div className={`space-y-3 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all ${isAllProductsMode ? 'opacity-40 pointer-events-none grayscale' : ''}`} id="selection-area">
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative flex-1">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input 
                          className="w-full h-9 pl-9 pr-3 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-xs text-zinc-900 dark:text-zinc-100 outline-none" 
                          placeholder={searchPlaceholder}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          disabled={isAllProductsMode}
                        />
                      </div>
                      <button 
                        type="button"
                        className="h-9 px-3 flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-xs text-zinc-650 dark:text-zinc-350 cursor-pointer"
                        disabled={isAllProductsMode}
                      >
                        <Filter size={12} />
                        <span>Filter</span>
                      </button>
                    </div>

                    {/* Item List Container */}
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
                      <div className="bg-zinc-50 dark:bg-zinc-955 px-3 py-2 flex items-center border-b border-zinc-200 dark:border-zinc-800 select-none">
                        <input 
                          className="w-3.5 h-3.5 rounded text-[var(--primary)] border-zinc-300 focus:ring-[var(--primary)] cursor-pointer transition-all" 
                          type="checkbox"
                          checked={isAllSelected}
                          onChange={handleSelectAll}
                          disabled={isAllProductsMode}
                        />
                        <span className="ml-3 text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{itemTypeLabel}</span>
                      </div>
                      <div className="max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                        {filteredItems.map(item => {
                          const isChecked = selectedItems.includes(item.id);
                          return (
                            <div 
                              key={item.id} 
                              className="flex items-center px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/50 hover:bg-zinc-50/50 dark:hover:bg-zinc-955 transition-colors group cursor-pointer"
                              onClick={() => !isAllProductsMode && handleSelectItem(item.id)}
                            >
                              <input 
                                checked={isChecked}
                                onChange={() => {}} // Handled by row click
                                className="w-3.5 h-3.5 rounded text-[var(--primary)] border-zinc-300 focus:ring-[var(--primary)] cursor-pointer transition-all" 
                                type="checkbox"
                                disabled={isAllProductsMode}
                              />
                              <div className="ml-3 flex-1 flex items-center gap-3">
                                {/* Icon or Image */}
                                {applicabilityType === 'products' ? (
                                  <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-850 flex-shrink-0 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                                    <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
                                  </div>
                                ) : applicabilityType === 'categories' ? (
                                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                                    <Tag size={16} />
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                                    <Store size={16} />
                                  </div>
                                )}
                                <div className="flex flex-col">
                                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-50 leading-tight">{item.name}</span>
                                  <span className="text-[9px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                                    {skuLabel}: {item.sku} 
                                    {applicabilityType === 'products' && ` • ₹${item.price}`}
                                    {applicabilityType === 'categories' && ` • ${item.count} items`}
                                    {applicabilityType === 'stores' && ` • ${item.location}`}
                                  </span>
                                </div>
                              </div>
                              {isChecked && (
                                <span className="text-[9px] text-[var(--primary)] font-extrabold px-1.5 py-0.5 bg-[var(--primary)]/10 rounded tracking-wide animate-fade-in uppercase">Selected</span>
                              )}
                            </div>
                          );
                        })}
                        {filteredItems.length === 0 && (
                          <div className="p-6 text-center text-xs text-zinc-400">No matching items found</div>
                        )}
                      </div>
                      
                      {/* List Footer / Selected Count */}
                      <div className="bg-zinc-50 dark:bg-zinc-955 px-3 py-2 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 select-none">
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400 italic">Showing {filteredItems.length} of {applicabilityType === 'products' ? 128 : applicabilityType === 'categories' ? 24 : 12} {countTextLabel}</span>
                        <span className="text-[10px] text-[var(--primary)] font-bold">{isAllProductsMode ? 'All' : selectedItems.length} {countTextLabel} Selected</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex flex-col md:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex gap-3 w-full md:w-auto">
            <button onClick={onClose} className="flex-1 md:flex-none h-9 px-4 text-xs font-bold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">Cancel</button>
            <button className="flex-1 md:flex-none h-9 px-4 text-xs font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all">Save Draft</button>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            {currentStep > 1 && (
              <button onClick={prevStep} className="h-9 px-4 border border-[var(--primary)] text-[var(--primary)] text-xs font-bold rounded hover:bg-[var(--primary)]/5 transition-all">
                Back
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button onClick={nextStep} className="flex-1 md:flex-none h-9 px-5 bg-[var(--primary)] text-white text-xs font-bold rounded shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all">
                Next Step
              </button>
            ) : (
              <button onClick={onClose} className="flex-1 md:flex-none h-9 px-5 bg-[var(--primary)] text-white text-xs font-bold rounded shadow-md hover:bg-[var(--primary)]/90 active:scale-95 transition-all">
                Publish Coupon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
