import React, { useState } from 'react';
import { 
  ArrowLeft, MoreVertical, X, Check, Bell, Mail, MessageSquare, 
  MessageCircle, ChevronDown, Eye, Pizza, Smartphone, Monitor, 
  Watch, ArrowRight, Info, Users, Calendar, Sparkles, AlertCircle, BellRing
} from 'lucide-react';

const TEMPLATES = {
  'Weekend Promo - Standard': {
    title: "Weekend Flash Sale! 🍕",
    body: "Get 50% off any large pizza this weekend when ordering through the app. Don't miss out!"
  },
  'New Menu Launch': {
    title: "New Pizzas Alert! 🔥",
    body: "Introducing our new artisanal thin-crust signatures. Buy one get one free all day today!"
  },
  'Holiday Special Flash Sale': {
    title: "Holiday Feast Deal 🎄",
    body: "Feast with your family! Order any 3 medium pizzas and get free garlic bread + Pepsi. Valid today only."
  },
  'Loyalty Member Anniversary': {
    title: "Happy Anniversary! 🎉",
    body: "As a valued member, enjoy a free dessert pizza on your next order. Thank you for being with us!"
  }
};

export default function CreateNotification({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [title, setTitle] = useState('Weekend Flash Sale! 🍕');
  const [category, setCategory] = useState('Promotion');
  const [body, setBody] = useState("Get 50% off any large pizza this weekend when ordering through the app. Don't miss out!");
  
  // Step 2 States: Channel selection
  const [channels, setChannels] = useState({
    push: true,
    email: true,
    sms: false,
    whatsapp: false
  });
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [previewDevice, setPreviewDevice] = useState('mobile'); // 'mobile' | 'desktop' | 'watch'
  
  // Step 3 States: Audience
  const [audienceType, setAudienceType] = useState('segments'); // 'all' | 'segments'
  const [selectedSegments, setSelectedSegments] = useState(['new', 'vip']);
  const [geoTarget, setGeoTarget] = useState(['Downtown', 'Brooklyn']);

  // Step 4 States: Scheduling
  const [sendType, setSendType] = useState('now'); // 'now' | 'scheduled'
  const [scheduleDate, setScheduleDate] = useState('2024-06-21');
  const [scheduleTime, setScheduleTime] = useState('18:00');
  
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!isOpen) return null;

  const handleTemplateChange = (e) => {
    const val = e.target.value;
    setSelectedTemplate(val);
    if (TEMPLATES[val]) {
      setTitle(TEMPLATES[val].title);
      setBody(TEMPLATES[val].body);
      
      setToastMessage(`Template "${val}" loaded successfully!`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const toggleChannel = (key) => {
    setChannels(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSegment = (seg) => {
    setSelectedSegments(prev => 
      prev.includes(seg) ? prev.filter(s => s !== seg) : [...prev, seg]
    );
  };

  const toggleGeo = (loc) => {
    setGeoTarget(prev => 
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulate final creation
      setToastMessage('Notification campaign scheduled successfully!');
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onClose();
        setCurrentStep(1);
      }, 1500);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onClose();
    }
  };

  // Helper function to render the Live Preview panel
  const renderPreview = () => {
    return (
      <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 lg:p-6 min-h-[380px] flex flex-col items-center justify-between relative overflow-hidden shadow-inner w-full">
        {/* Subtle Visual Background Flourishes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--primary)]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-xs flex flex-col items-center flex-1 justify-center">
          <div className="flex items-center gap-1.5 mb-3 self-start">
            <Eye size={14} className="text-[var(--primary)]" />
            <span className="text-[9px] font-bold text-zinc-550 dark:text-zinc-400 uppercase tracking-widest">Live Preview</span>
          </div>

          {/* DEVICE 1: Smartphone Preview */}
          {previewDevice === 'mobile' && (
            <div className="relative mx-auto border-[6px] border-zinc-800 dark:border-zinc-700 rounded-[2rem] h-[340px] w-full max-w-[170px] bg-black shadow-lg overflow-hidden animate-in zoom-in-95 duration-200">
              {/* Wallpaper backdrop */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fm=webp')` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
              </div>
              
              {/* Status Bar */}
              <div className="absolute top-0 w-full h-5 flex justify-between items-center px-4 z-20">
                <span className="text-white text-[7px] font-bold">9:41</span>
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white/40 rounded-full scale-75"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full scale-75"></div>
                  <div className="w-1 h-1 bg-white rounded-full scale-75"></div>
                </div>
              </div>
              
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-b-lg z-30"></div>
              
              {/* Notification Bubble */}
              <div className="absolute top-8 left-2 right-2 z-40">
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <div className="w-3.5 h-3.5 bg-[var(--primary)] rounded flex items-center justify-center text-white shrink-0">
                        <Pizza size={8} />
                      </div>
                      <span className="text-[7px] font-black text-zinc-700 dark:text-zinc-300 uppercase tracking-tighter">PizzaPulse</span>
                    </div>
                    <span className="text-[7px] text-zinc-400">now</span>
                  </div>
                  <h5 className="font-extrabold text-[9px] text-zinc-900 dark:text-white leading-tight mb-0.5 truncate">{title || 'Notification Title'}</h5>
                  <p className="text-[8px] text-zinc-600 dark:text-zinc-350 leading-tight line-clamp-3">{body || 'Notification Message Body'}</p>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/60 rounded-full z-20"></div>
            </div>
          )}

          {/* DEVICE 2: Desktop Windows Notification */}
          {previewDevice === 'desktop' && (
            <div className="w-full bg-zinc-200/50 dark:bg-zinc-800/40 rounded-xl p-3 border border-zinc-200/80 dark:border-zinc-800/80 shadow-inner min-h-[220px] flex items-center justify-center animate-in zoom-in-95 duration-200">
              <div className="w-64 bg-white dark:bg-zinc-950 rounded-lg p-2.5 border-l-4 border-[var(--primary)] shadow-md flex gap-2.5 relative">
                <div className="w-7 h-7 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0">
                  <Pizza size={14} />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="font-bold text-[10px] text-zinc-900 dark:text-zinc-100 truncate">{title || 'Notification Title'}</h5>
                  <p className="text-[9px] text-zinc-550 dark:text-zinc-400 leading-relaxed mt-0.5 line-clamp-2">{body || 'Notification Message Body'}</p>
                  <span className="text-[8px] text-zinc-400 mt-1 block">via PizzaPulse</span>
                </div>
                <button className="absolute top-1.5 right-1.5 text-zinc-400 hover:text-zinc-650">
                  <X size={8} />
                </button>
              </div>
            </div>
          )}

          {/* DEVICE 3: Smartwatch Face */}
          {previewDevice === 'watch' && (
            <div className="relative border-4 border-zinc-800 dark:border-zinc-700 rounded-[2rem] h-[150px] w-[140px] bg-black shadow-lg overflow-hidden flex flex-col items-center justify-center p-2.5 text-center z-10 animate-in zoom-in-95 duration-200">
              <div className="absolute inset-0 bg-zinc-950/20 backdrop-blur-[1px] z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-1 max-w-[120px]">
                <div className="w-5 h-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-md">
                  <Pizza size={10} />
                </div>
                <span className="text-[7px] font-bold text-[var(--primary)] uppercase tracking-wider">PizzaPulse</span>
                <h5 className="font-extrabold text-[8px] text-white leading-tight truncate w-full">{title || 'Notification Title'}</h5>
                <p className="text-[8px] text-zinc-350 leading-tight line-clamp-2 w-full">{body || 'Notification Message Body'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Device Toggles */}
        <div className="mt-3 flex justify-center gap-2 relative z-20 shrink-0">
          <button 
            type="button"
            onClick={() => setPreviewDevice('mobile')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              previewDevice === 'mobile' ? 'bg-[var(--primary)] text-white shadow' : 'bg-white text-zinc-500 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 hover:border-[var(--primary)]'
            }`}
          >
            <Smartphone size={13} />
          </button>
          <button 
            type="button"
            onClick={() => setPreviewDevice('desktop')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              previewDevice === 'desktop' ? 'bg-[var(--primary)] text-white shadow' : 'bg-white text-zinc-500 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 hover:border-[var(--primary)]'
            }`}
          >
            <Monitor size={13} />
          </button>
          <button 
            type="button"
            onClick={() => setPreviewDevice('watch')}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              previewDevice === 'watch' ? 'bg-[var(--primary)] text-white shadow' : 'bg-white text-zinc-500 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 hover:border-[var(--primary)]'
            }`}
          >
            <Watch size={13} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center lg:pl-[280px] p-3 sm:p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-zinc-955 w-full max-w-5xl h-[620px] max-h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shrink-0">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Create New Notification</h2>
              <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">Campaign Wizard • Step {currentStep} of 4</p>
            </div>
            <button 
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full"
              onClick={onClose}
            >
              <X size={16} />
            </button>
          </div>

          {/* Stepper Progress bar style */}
          <div className="flex items-center justify-between max-w-xl mx-auto px-4 relative mt-2 select-none">
            {/* Background line */}
            <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 bg-zinc-255 dark:bg-zinc-800"></div>
            {/* Progress line */}
            <div 
              className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 bg-[var(--primary)] transition-all duration-500"
              style={{ right: currentStep === 1 ? '75%' : currentStep === 2 ? '50%' : currentStep === 3 ? '25%' : '0%' }}
            ></div>

            {/* Step circles */}
            {[
              { num: 1, label: 'Message Details' },
              { num: 2, label: 'Channel Selection' },
              { num: 3, label: 'Audience Target' },
              { num: 4, label: 'Review & Schedule' }
            ].map(step => (
              <div 
                key={step.num}
                onClick={() => currentStep >= step.num && setCurrentStep(step.num)}
                className="flex flex-col items-center gap-1 group cursor-pointer relative z-10"
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 font-bold transition-all text-[10px] ${
                  currentStep >= step.num 
                    ? 'bg-[var(--primary)] border-[var(--primary)] text-white' 
                    : 'bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-500'
                }`}>
                  {currentStep > step.num ? <Check size={10} /> : step.num}
                </div>
                <span className={`text-[9px] font-bold tracking-tight hidden sm:block ${currentStep >= step.num ? 'text-[var(--primary)]' : 'text-zinc-500 dark:text-zinc-450'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Split View Area (Sidebar + Scrollable form Content) */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          
          {/* Navigation Drawer (Sidebar) */}
          <aside className="hidden lg:flex flex-col justify-between border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 w-60 shrink-0 select-none pb-4">
            <nav className="p-3 space-y-1">
              {[
                { num: 1, label: 'Message Details' },
                { num: 2, label: 'Channel Selection' },
                { num: 3, label: 'Audience Selection' },
                { num: 4, label: 'Review & Schedule' }
              ].map(step => (
                <div 
                  key={step.num}
                  onClick={() => currentStep >= step.num && setCurrentStep(step.num)}
                  className={`rounded-lg px-3 py-2 flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
                    currentStep === step.num 
                      ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-xs' 
                      : 'text-zinc-750 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-850 font-medium text-xs'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    currentStep === step.num 
                      ? 'bg-[var(--primary)] text-white' 
                      : currentStep > step.num 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'
                  }`}>
                    {currentStep > step.num ? <Check size={8} /> : step.num}
                  </div>
                  <span>{step.label}</span>
                </div>
              ))}
            </nav>
            {/* Campaign Tips Card at bottom of sidebar */}
            <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col gap-1 shadow-sm">
                <span className="text-[9px] font-bold text-[var(--primary)] uppercase tracking-wider flex items-center gap-1 select-none">
                  <Sparkles size={10} /> CAMPAIGN TIPS
                </span>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-normal font-semibold">
                  Multi-channel campaigns see a 34% higher conversion rate than single-channel blasts.
                </p>
              </div>
            </div>
          </aside>

          {/* Main content body */}
          <main className="flex-1 overflow-y-auto p-4 bg-white dark:bg-zinc-950 custom-scrollbar pb-10">
            
            {/* STEP 1: Message Details */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start animate-in fade-in slide-in-from-right-4 duration-200">
                <div className="lg:col-span-6 space-y-3">
                  <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-3.5">
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Step 1: Message Details</h3>
                    <div className="space-y-3 text-xs">
                      {/* Title */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Notification Title</label>
                        <input 
                          type="text"
                          className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100" 
                          placeholder="e.g. 50% Off Pepperoni Friday!"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      {/* Category */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Notification Category</label>
                        <select
                          className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 cursor-pointer"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Promotion</option>
                          <option>Order Update</option>
                          <option>Loyalty Rewards</option>
                          <option>New Menu Alert</option>
                        </select>
                      </div>
                      {/* Message Body */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Message Body</label>
                          <span className={`text-[8px] font-bold uppercase ${body.length > 160 ? 'text-red-500' : 'text-zinc-400'}`}>
                            {body.length}/160
                          </span>
                        </div>
                        <textarea 
                          className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg p-2.5 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-100 resize-none" 
                          placeholder="Describe the campaign goals and customer-facing message..."
                          rows={3}
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tip Card */}
                  <div className="bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-3 rounded-lg flex items-start gap-2.5">
                    <Info size={14} className="text-[var(--primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[8px] font-bold text-[var(--primary)] uppercase tracking-wider mb-0.5">Optimization Tip</p>
                      <p className="text-zinc-700 dark:text-zinc-300 text-[10px] font-semibold leading-normal">
                        Including emojis in your title can increase click-through rates by up to 12% for restaurant promotions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Live Preview Panel */}
                <div className="lg:col-span-6">
                  {renderPreview()}
                </div>
              </div>
            )}

            {/* STEP 2: Channel Selection (Mockups exact style conversion) */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start animate-in fade-in slide-in-from-right-4 duration-200">
                
                {/* Left Column: Channel Selection */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-100 uppercase tracking-wider">Select Channels</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Choose how your notification will be delivered to customers.</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {/* Push Notification checkbox */}
                    <label 
                      onClick={() => toggleChannel('push')}
                      className={`group flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 border-2 rounded-xl cursor-pointer hover:shadow-md transition-all select-none ${
                        channels.push ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          channels.push ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                        }`}>
                          <BellRing size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Push Notification</p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-405 mt-0.5">High visibility mobile alert</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        channels.push ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-zinc-300 dark:border-zinc-700'
                      }`}>
                        {channels.push && <Check size={12} />}
                      </div>
                    </label>

                    {/* Email checkbox */}
                    <label 
                      onClick={() => toggleChannel('email')}
                      className={`group flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 border-2 rounded-xl cursor-pointer hover:shadow-md transition-all select-none ${
                        channels.email ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          channels.email ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                        }`}>
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Email</p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-405 mt-0.5">Detailed markdown templates</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        channels.email ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-zinc-300 dark:border-zinc-700'
                      }`}>
                        {channels.email && <Check size={12} />}
                      </div>
                    </label>

                    {/* SMS checkbox */}
                    <label 
                      onClick={() => toggleChannel('sms')}
                      className={`group flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 border-2 rounded-xl cursor-pointer hover:shadow-md transition-all select-none ${
                        channels.sms ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          channels.sms ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                        }`}>
                          <MessageSquare size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">SMS</p>
                          <p className="text-[10px] text-zinc-550 dark:text-zinc-405 mt-0.5">Urgent text-based messages</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        channels.sms ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-zinc-300 dark:border-zinc-700'
                      }`}>
                        {channels.sms && <Check size={12} />}
                      </div>
                    </label>

                    {/* WhatsApp checkbox */}
                    <label 
                      onClick={() => toggleChannel('whatsapp')}
                      className={`group flex items-center justify-between p-3.5 bg-white dark:bg-zinc-900 border-2 rounded-xl cursor-pointer hover:shadow-md transition-all select-none ${
                        channels.whatsapp ? 'border-[var(--primary)] bg-[var(--primary)]/5' : 'border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          channels.whatsapp ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                        }`}>
                          <MessageCircle size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">WhatsApp</p>
                          <p className="text-[10px] text-zinc-550 dark:text-zinc-405 mt-0.5">Interactive social messaging</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        channels.whatsapp ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'border-zinc-300 dark:border-zinc-700'
                      }`}>
                        {channels.whatsapp && <Check size={12} />}
                      </div>
                    </label>
                  </div>

                  {/* Saved Templates select box */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">TEMPLATES</h4>
                    <div className="relative">
                      <select 
                        value={selectedTemplate}
                        onChange={handleTemplateChange}
                        className="w-full h-11 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] text-xs text-zinc-800 dark:text-zinc-100 cursor-pointer font-bold"
                      >
                        <option value="">Saved Templates (Select to pre-fill)</option>
                        {Object.keys(TEMPLATES).map(name => (
                          <option key={name} value={name}>{name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Preview Panel */}
                <div className="lg:col-span-6">
                  {renderPreview()}
                </div>
              </div>
            )}

            {/* STEP 3: Audience Selection */}
            {currentStep === 3 && (
              <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-150 uppercase tracking-wider">Step 3: Audience Selection</h3>
                
                <div className="space-y-4 text-xs">
                  {/* Select Broad Audience Type */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block">Target Audience Scope</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-zinc-800 dark:text-zinc-200">
                        <input 
                          type="radio" 
                          name="audienceType"
                          value="all"
                          checked={audienceType === 'all'}
                          onChange={() => setAudienceType('all')}
                          className="text-[var(--primary)] focus:ring-[var(--primary)] w-3.5 h-3.5"
                        />
                        Send to All Customers
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-zinc-800 dark:text-zinc-200">
                        <input 
                          type="radio" 
                          name="audienceType"
                          value="segments"
                          checked={audienceType === 'segments'}
                          onChange={() => setAudienceType('segments')}
                          className="text-[var(--primary)] focus:ring-[var(--primary)] w-3.5 h-3.5"
                        />
                        Filter by Segments
                      </label>
                    </div>
                  </div>

                  {/* Segment Filters */}
                  {audienceType === 'segments' && (
                    <div className="space-y-3 border-t border-zinc-100 dark:border-zinc-805 pt-3">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Select Target Segments</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            { id: 'new', label: 'New Customers', desc: 'No orders placed yet' },
                            { id: 'returning', label: 'Returning Customers', desc: '1-5 previous orders' },
                            { id: 'vip', label: 'VIP Members', desc: 'Top 5% of spenders' }
                          ].map(seg => (
                            <div 
                              key={seg.id}
                              onClick={() => toggleSegment(seg.id)}
                              className={`border p-2.5 rounded-xl cursor-pointer select-none transition-all flex flex-col justify-between ${
                                selectedSegments.includes(seg.id)
                                  ? 'border-[var(--primary)] bg-[var(--primary)]/5 font-bold text-[var(--primary)]'
                                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 hover:bg-zinc-100/30'
                              }`}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[11px] text-zinc-800 dark:text-zinc-100">{seg.label}</span>
                                {selectedSegments.includes(seg.id) && <Check size={12} className="text-[var(--primary)]" />}
                              </div>
                              <span className="text-[9px] text-zinc-400 leading-none">{seg.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Geographic Targeting */}
                      <div className="space-y-2 pt-2">
                        <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Geographic Scope</label>
                        <div className="flex flex-wrap gap-2">
                          {['Downtown', 'Brooklyn', 'Queens', 'Flushing', 'Staten Island'].map(loc => (
                            <button
                              key={loc}
                              type="button"
                              onClick={() => toggleGeo(loc)}
                              className={`px-3 py-1.5 rounded-full font-bold text-[10px] transition-all select-none border ${
                                geoTarget.includes(loc)
                                  ? 'bg-[var(--primary)] text-white border-[var(--primary)]'
                                  : 'bg-zinc-50 border-zinc-250 dark:border-zinc-800 text-zinc-650 hover:bg-zinc-100 dark:text-zinc-355'
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* STEP 4: Review & Schedule */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                
                {/* Summary Box */}
                <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-4">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-150 uppercase tracking-wider">Step 4: Review Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Message Summary */}
                    <div className="space-y-2 bg-zinc-50 dark:bg-zinc-950/40 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Message Details</p>
                      <div>
                        <span className="text-[10px] font-medium text-zinc-450 uppercase">Title:</span>
                        <p className="font-bold text-zinc-800 dark:text-zinc-100 mt-0.5">{title}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-medium text-zinc-450 uppercase">Category:</span>
                        <p className="font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">{category}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-medium text-zinc-450 uppercase">Message Body:</span>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-normal mt-0.5">{body}</p>
                      </div>
                    </div>

                    {/* Delivery & Audience Summary */}
                    <div className="space-y-2 bg-zinc-50 dark:bg-zinc-950/40 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Delivery Channels</p>
                        <div className="flex flex-wrap gap-1.5">
                          {Object.keys(channels).map(c => channels[c] && (
                            <span key={c} className="px-2 py-0.5 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold uppercase rounded text-[9px]">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <p className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider">Audience Target</p>
                        <p className="font-semibold text-zinc-700 dark:text-zinc-305">
                          {audienceType === 'all' 
                            ? 'All Registered Customers' 
                            : `Filtered Segments: ${selectedSegments.join(', ').toUpperCase()}`}
                        </p>
                        <p className="text-[10px] text-zinc-450">Geographic scope: {geoTarget.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scheduling Parameters */}
                <div className="bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm space-y-4">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-150 uppercase tracking-wider">Dispatch Schedule</h3>
                  
                  <div className="space-y-4 text-xs">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-550 uppercase tracking-wider block">When should this be sent?</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-zinc-800 dark:text-zinc-205">
                          <input 
                            type="radio" 
                            name="sendType"
                            value="now"
                            checked={sendType === 'now'}
                            onChange={() => setSendType('now')}
                            className="text-[var(--primary)] focus:ring-[var(--primary)] w-3.5 h-3.5"
                          />
                          Immediately (upon approval)
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-zinc-800 dark:text-zinc-205">
                          <input 
                            type="radio" 
                            name="sendType"
                            value="scheduled"
                            checked={sendType === 'scheduled'}
                            onChange={() => setSendType('scheduled')}
                            className="text-[var(--primary)] focus:ring-[var(--primary)] w-3.5 h-3.5"
                          />
                          Schedule for Later
                        </label>
                      </div>
                    </div>

                    {/* Date Time Picker Inputs */}
                    {sendType === 'scheduled' && (
                      <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-3 animate-in fade-in duration-200">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Date</label>
                          <input 
                            type="date"
                            className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-105" 
                            value={scheduleDate}
                            onChange={(e) => setScheduleDate(e.target.value)}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Time</label>
                          <input 
                            type="time"
                            className="w-full h-9 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg px-3 text-xs focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all dark:text-zinc-105" 
                            value={scheduleTime}
                            onChange={(e) => setScheduleTime(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

          </main>
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center shrink-0">
          <button 
            onClick={handleBack}
            className="px-4 py-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 text-xs font-bold transition-all active:scale-95 hover:bg-zinc-150 dark:hover:bg-zinc-800 rounded-lg"
          >
            {currentStep === 1 ? "Cancel" : "Back"}
          </button>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="px-4 h-9 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all rounded-lg shadow-sm"
            >
              Save Draft
            </button>
            <button 
              onClick={handleNext}
              className="bg-[var(--primary)] text-white h-9 px-6 rounded-lg text-xs font-bold hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              {currentStep === 4 ? (
                <>
                  <Sparkles size={14} /> Launch Campaign
                </>
              ) : (
                <>
                  Next Step <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Success/Error Toast Overlay */}
      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-zinc-850 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-full flex items-center gap-2.5 shadow-xl transition-opacity duration-300 pointer-events-none z-50 animate-bounce">
          <Check size={18} className="text-emerald-500" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
// Clear Vite cache trigger: CreateNotification-modal-version-v1
