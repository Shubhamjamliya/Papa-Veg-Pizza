import React, { useState, useMemo } from 'react';
import { X, Check, ImagePlus, UserPlus, RefreshCw, Star, CheckCircle2, Users, Image, Calendar, ArrowRight, Rocket, Megaphone, Info } from 'lucide-react';

export default function CreateCampaign({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignName, setCampaignName] = useState('Summer Weekend Extravaganza 2024');
  const [campaignType, setCampaignType] = useState('Discount Percentage (%)');
  const [campaignValue, setCampaignValue] = useState('25% OFF');
  const [description, setDescription] = useState('Exclusive weekend discounts for our loyal customers during the peak summer season across all regional franchises.');
  const [startDate, setStartDate] = useState('2024-06-21');
  const [endDate, setEndDate] = useState('2024-09-02');
  const [internalNotes, setInternalNotes] = useState('');
  const [selectedSegments, setSelectedSegments] = useState(['new', 'vip']);

  const toggleSegment = (seg) => {
    setSelectedSegments(prev => 
      prev.includes(seg) ? prev.filter(s => s !== seg) : [...prev, seg]
    );
  };

  const estimatedReach = useMemo(() => {
    let total = 0;
    if (selectedSegments.includes('new')) total += 5200;
    if (selectedSegments.includes('returning')) total += 4250;
    if (selectedSegments.includes('vip')) total += 3000;
    return total;
  }, [selectedSegments]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:pl-[280px] p-4 md:p-8 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-955 w-full max-w-3xl h-[600px] max-h-[85vh] rounded-xl flex flex-col shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header & Stepper */}
        <div className="p-4 md:px-5 md:py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Create New Campaign</h2>
            <button 
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Stepper */}
          <div className="flex items-center justify-between max-w-xl mx-auto px-4 relative">
            {/* Background line */}
            <div className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-0.5 bg-zinc-200 dark:bg-zinc-800"></div>
            {/* Progress line */}
            <div 
              className="absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 h-0.5 bg-[var(--primary)] transition-all duration-500"
              style={{ right: currentStep === 1 ? '85%' : currentStep === 2 ? '50%' : '15%' }}
            ></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-10" onClick={() => setCurrentStep(1)}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 font-bold transition-all text-xs ${
                currentStep >= 1 ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
              }`}>
                {currentStep > 1 ? <Check size={14} /> : '1'}
              </div>
              <span className={`text-xs font-bold ${currentStep >= 1 ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>Basic Details</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-10" onClick={() => setCurrentStep(2)}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 font-bold transition-all text-xs ${
                currentStep >= 2 ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
              }`}>
                {currentStep > 2 ? <Check size={14} /> : '2'}
              </div>
              <span className={`text-xs font-bold ${currentStep >= 2 ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>Target Audience</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer relative z-10" onClick={() => currentStep >= 2 && setCurrentStep(3)}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 font-bold transition-all text-xs ${
                currentStep >= 3 ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
              }`}>
                {currentStep > 3 ? <Check size={14} /> : '3'}
              </div>
              <span className={`text-xs font-bold ${currentStep >= 3 ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-400'}`}>Review &amp; Launch</span>
            </div>
          </div>
        </div>

        {/* Modal Content Container */}
        <div className="flex-1 overflow-y-auto p-3.5 md:p-4 bg-white dark:bg-zinc-950">
          
          {/* STEP 1: Basic Details */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Campaign Name</label>
                    <input 
                      type="text" 
                      className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                      placeholder="e.g. Summer Sizzler 2024"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Campaign Type</label>
                      <select 
                        className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 cursor-pointer"
                        value={campaignType}
                        onChange={(e) => setCampaignType(e.target.value)}
                      >
                        <option value="Discount Percentage (%)">Discount Percentage (%)</option>
                        <option value="Fixed Amount (₹)">Fixed Amount (₹)</option>
                        <option value="Buy One Get One (BOGO)">Buy One Get One (BOGO)</option>
                        <option value="Free Delivery">Free Delivery</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Type Value</label>
                      <input 
                        type="text"
                        className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100"
                        placeholder="e.g. 25% OFF"
                        value={campaignValue}
                        onChange={(e) => setCampaignValue(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Description</label>
                    <textarea 
                      rows={2} 
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 resize-none" 
                      placeholder="Describe the campaign goals and customer-facing message..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* Banner Upload Area */}
                <div className="md:col-span-4 flex flex-col">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Campaign Banner</label>
                  <div className="flex-1 min-h-[140px] md:min-h-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-3 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer relative overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&fm=webp" 
                      alt="Banner Preview" 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity" 
                    />
                    <ImagePlus size={24} className="text-[var(--primary)] mb-1.5 z-10 shrink-0" />
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 z-10">Upload Banner</p>
                    <p className="text-[9px] text-zinc-500 mt-0.5 z-10">PNG, JPG or WEBP<br/>Min. 1200x400px</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Target Audience */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl">
                <h3 className="text-xs font-bold mb-2.5 text-zinc-900 dark:text-zinc-100">Select Customer Segments</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* New Customers */}
                  <div 
                    onClick={() => toggleSegment('new')}
                    className={`group border-2 p-3 rounded-xl transition-all cursor-pointer flex flex-col items-center text-center ${
                      selectedSegments.includes('new') 
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5' 
                        : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-955 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2.5 shrink-0 ${
                      selectedSegments.includes('new') ? 'bg-[var(--primary)] text-white' : 'bg-zinc-150 dark:bg-zinc-850 text-zinc-550'
                    }`}>
                      <UserPlus size={16} />
                    </div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">New Customers</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Users who haven't placed an order yet.</p>
                    {selectedSegments.includes('new') && (
                      <div className="mt-2.5 flex items-center justify-center gap-1 text-[var(--primary)] font-bold text-[10px]">
                        <Check size={14} /> SELECTED
                      </div>
                    )}
                  </div>

                  {/* Returning Customers */}
                  <div 
                    onClick={() => toggleSegment('returning')}
                    className={`group border-2 p-3 rounded-xl transition-all cursor-pointer flex flex-col items-center text-center ${
                      selectedSegments.includes('returning') 
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5' 
                        : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-955 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2.5 shrink-0 ${
                      selectedSegments.includes('returning') ? 'bg-[var(--primary)] text-white' : 'bg-zinc-150 dark:bg-zinc-850 text-zinc-550'
                    }`}>
                      <RefreshCw size={16} />
                    </div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Returning</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Users with 1-5 previous orders.</p>
                    {selectedSegments.includes('returning') && (
                      <div className="mt-2.5 flex items-center justify-center gap-1 text-[var(--primary)] font-bold text-[10px]">
                        <Check size={14} /> SELECTED
                      </div>
                    )}
                  </div>

                  {/* VIP Customers */}
                  <div 
                    onClick={() => toggleSegment('vip')}
                    className={`group border-2 p-3 rounded-xl transition-all cursor-pointer flex flex-col items-center text-center ${
                      selectedSegments.includes('vip') 
                        ? 'border-[var(--primary)] bg-[var(--primary)]/5' 
                        : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-955 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2.5 shrink-0 ${
                      selectedSegments.includes('vip') ? 'bg-[var(--primary)] text-white' : 'bg-zinc-150 dark:bg-zinc-850 text-zinc-550'
                    }`}>
                      <Star size={16} />
                    </div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">VIP Members</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Top 5% of spenders in last 90 days.</p>
                    {selectedSegments.includes('vip') && (
                      <div className="mt-2.5 flex items-center justify-center gap-1 text-[var(--primary)] font-bold text-[10px]">
                        <Check size={14} /> SELECTED
                      </div>
                    )}
                  </div>

                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl">
                  <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-2 block">Geographic Targeting</label>
                  <div className="space-y-1.5">
                    {['New York - Downtown', 'Brooklyn - Heights', 'Queens - Flushing'].map((loc, i) => (
                      <label key={i} className="flex items-center gap-2.5 p-2 bg-white dark:bg-zinc-955 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-200 dark:border-zinc-800">
                        <input type="checkbox" defaultChecked={i < 2} className="text-[var(--primary)] rounded focus:ring-[var(--primary)] border-zinc-300 dark:border-zinc-700 w-3.5 h-3.5 cursor-pointer" />
                        <span className="text-xs text-zinc-755 dark:text-zinc-350">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3.5 rounded-xl flex flex-col justify-center">
                  <label className="text-[10px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-wider mb-2 block">Estimated Reach</label>
                  <div className="flex items-end gap-2 mb-2.5">
                    <span className="text-2xl font-bold text-[var(--primary)]">{estimatedReach.toLocaleString()}</span>
                    <span className="text-xs text-zinc-500 font-semibold pb-0.5">Customers</span>
                  </div>
                  <div className="w-full bg-zinc-250 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[var(--primary)] h-full rounded-full transition-all duration-300" style={{ width: `${(estimatedReach / 12450) * 100}%` }}></div>
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-2 font-medium">Reach updates as segments are selected.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Review & Launch */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Campaign Summary Card */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--primary)]">
                    <Megaphone size={16} />
                  </span>
                  <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Campaign Summary</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Campaign Name</p>
                    <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">{campaignName}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Type</p>
                      <p className="text-xs text-zinc-900 dark:text-zinc-100">{campaignType}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Value</p>
                      <p className="text-xs text-zinc-900 dark:text-zinc-100">{campaignValue}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Description</p>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">{description}</p>
                  </div>
                </div>
              </section>

              {/* Audience & Reach Card */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--primary)]">
                    <Users size={16} />
                  </span>
                  <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Audience & Reach</h2>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-black text-[var(--primary)]">{estimatedReach.toLocaleString()}</span>
                  <span className="text-xs text-zinc-550 dark:text-zinc-400">Estimated Customer Reach</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSegments.map(seg => (
                    <span key={seg} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-805 dark:text-zinc-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {seg === 'new' ? 'New Customers' : seg === 'returning' ? 'Returning Customers' : 'VIP Customers'}
                    </span>
                  ))}
                  {selectedSegments.length === 0 && (
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 italic">No segments selected</span>
                  )}
                </div>
              </section>

              {/* Media Preview */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--primary)]">
                    <Image size={16} />
                  </span>
                  <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Media Preview</h2>
                </div>
                <div className="relative w-full aspect-video rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Campaign pizza banner"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe6-oSatJnnB08ZUbi8RaOEXJH8z5Ho6ENlNJmhejtSog1xJ8T-jEU46NqrZY9rK7CRVuQFrDpB1AsJ_XYE7gkdX85jtpYQodj7fE20VO0y6mWSFzzkaejcdyrP1OVgarT3cFf-im8N7PywTb2aCoEKRW_5KviP9TfXivcqiChtMO-pHjntNftA_U0f3o28nvt6Sv94VngldtoV-5-XjCtZbbZOyOAF9xpQvQMyE-lXFx3L0ToAmhPp_D3gx1by9fZdTFk7FLbVCl7" 
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-[9px] rounded backdrop-blur">1200 x 628 px</div>
                </div>
              </section>

              {/* Schedule */}
              <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--primary)]">
                    <Calendar size={16} />
                  </span>
                  <h2 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">Schedule</h2>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex-1">
                    <p className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">Start Date</p>
                    <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">{startDate}</p>
                  </div>
                  <div className="px-4 text-zinc-400">
                    <ArrowRight size={14} />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">End Date</p>
                    <p className="text-xs text-zinc-900 dark:text-zinc-100 font-semibold">{endDate}</p>
                  </div>
                </div>
              </section>

              {/* Internal Notes */}
              <section className="pb-4">
                <label className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2" htmlFor="notes">Internal Notes</label>
                <textarea 
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 resize-none" 
                  id="notes" 
                  placeholder="Enter final remarks for regional managers..." 
                  rows={3}
                  value={internalNotes}
                  onChange={(e) => setInternalNotes(e.target.value)}
                />
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center shrink-0">
          <button 
            className="h-9 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={onClose}
          >
            Save Draft
          </button>
          <div className="flex gap-3">
            {currentStep > 1 && (
              <button 
                className="h-9 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                onClick={handleBack}
              >
                Previous Step
              </button>
            )}
            <button 
              className="bg-[var(--primary)] text-white h-9 px-5 rounded-lg text-xs font-bold hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              onClick={handleNext}
            >
              {currentStep === 3 ? (
                <>
                  <Rocket size={14} />
                  Launch Campaign
                </>
              ) : (
                'Next Step'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
