import React, { useState, useEffect } from "react";
import { X, ArrowRight, ArrowLeft, Check, HelpCircle, Camera, Image, Lightbulb, ChevronDown, ArrowDownUp, Tag, TrendingUp, Leaf, Settings, Sparkles, Search, Info, ClipboardCheck } from "lucide-react";

export default function AddCategoryModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [parentCategory, setParentCategory] = useState("");
  const [displayPriority, setDisplayPriority] = useState("10");
  const [selectedBadges, setSelectedBadges] = useState(["Vegetarian"]);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");

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
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-zinc-50 dark:ring-zinc-900 transition-colors ${isActiveStep || isCompletedStep
                        ? "bg-[var(--primary)] text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                      }`}
                  >
                    {isCompletedStep ? <Check size={16} strokeWidth={3} /> : step.num}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold hidden sm:block ${isActiveStep || isCompletedStep ? "text-[var(--primary)]" : "text-zinc-400"
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
                    <span className={`ml-3 text-xs font-bold px-2.5 py-1 rounded-lg transition-colors ${isActive
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

          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Page Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Media</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Upload the visual identity for your new pizza category. High-quality imagery increases customer conversion rates.</p>
              </div>

              {/* Bento Grid Layout for Media Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Thumbnail Section */}
                <div className="md:col-span-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Category Icon</h3>
                    <HelpCircle className="text-[var(--primary)]" size={16} />
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">A square image used in menu lists and filters (1:1 ratio).</p>

                  <div className="flex-1 w-full rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 aspect-square flex flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
                    <div className="p-4 rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-all">
                      <Camera className="text-[var(--primary)]" size={32} />
                    </div>
                    <div className="text-center">
                      <span className="text-base font-bold block text-[var(--primary)]">Upload Thumbnail</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">PNG or JPG, max 2MB</span>
                    </div>
                  </div>
                </div>

                {/* Hero Banner Section */}
                <div className="md:col-span-7 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Hero Banner</h3>
                    <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Recommended</div>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Large format banner displayed at the top of the category page (16:9 ratio).</p>

                  <div className="flex-1 w-full rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 aspect-video flex flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
                    <div className="p-4 rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-all">
                      <Image className="text-[var(--primary)]" size={32} />
                    </div>
                    <div className="text-center">
                      <span className="text-base font-bold block text-[var(--primary)]">Upload Banner</span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">High resolution, min 1920x1080px</span>
                    </div>
                  </div>
                </div>

                {/* Guidelines Card (Wide) */}
                <div className="md:col-span-12 bg-white dark:bg-zinc-900 border-l-4 border-[var(--primary)] p-6 rounded-xl shadow-sm flex items-start gap-4">
                  <Lightbulb className="text-[var(--primary)] mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">Photography Tips</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Use natural lighting and ensure the pizza fills at least 60% of the frame. Avoid busy backgrounds to keep the focus on the product ingredients.</p>
                  </div>
                </div>

                {/* Visual Reference / Preview */}
                <div className="md:col-span-12 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 overflow-hidden">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-6">Style Inspiration</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 relative group overflow-hidden">
                      <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Inspiration 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX6-3A-0NA7c021WPbJ4mbzApsB6vwMyTr7lF8ezA-2je4qX4OUJpGKmAjJXYulJLY5Mnx_Vv4_GkSH6_n_F1u_EUY8aQ5Fbw-a9myQb1CGk8i34F8U-QQQm1ItXv0NAvO5lRS0kNjvcUuG5bG5nz56Yd3ZrDSuniSzCoLginWrcuF9s7B7RqZpEwIBzwML_got-4Vu3sm61JbV8LFv9l3YXZJI0VybUcXLf-pEsPmalYruTr2FPcOWGDq1xIap9X6PHACyR04mTU" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 relative group overflow-hidden">
                      <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Inspiration 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgZTuHlPD1RB_qKon9c1tqL66tkBA2Mcy1EWzgBF_t5TbmYMK1k0sOss1Zsc96CYbMCtX6N2DNTsWWt-Qs2ejOJXdsy5vk_cDeiQgXQYEryCdCMXkUg_JPJzEWZkR27D5KEtwAkXtdS966sXpPmmzhKUAv9_kA9F261sTyGD4rZAjCEEsEzURgyAJEF8EA6Qicd3OtcTOAH1MrFLB9KlMccuHMoaNnEJtWQczteQF4FvrxfBZArs-l8_ylO-Gxs1h_SrAj0GR0kt0" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 relative group overflow-hidden">
                      <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Inspiration 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlKfRC8U_eip7gyXGxZpuwyfCrDAQeP895qYjQjUdy1PzW2C14ikvwZ30YrC_FXHoAUo1PWW7nT29r3AbPMSvHQ_zwX8JPNyp2CCD8TcUHXfZTyMcQc1Ml0esym_EL0NXkKVCerJ1UFZu7mzrX6NXwUQIw07FjEl--6xX9NrnhFwCL_yxqp4SUl3MBg3LGCm0XHHdvKGnnv66FEYweQ29tp0aX2MhAQksaf6V2ICE8fwluutB0_SOff92W7ZUeQZhrPMXJEi0fzk" />
                    </div>
                    <div className="aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 relative group overflow-hidden">
                      <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Inspiration 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA8pTJJGfdARfzunMaB_0z5WOKNFtj64u9maEaD1YIArgH1aIJ-82W2IZ26BrWdU5BSAzy37a9XUb2kdGKuyccD411WoQykbRVfziaeFLohGhFB-EbROaX6TLq_pXigGUuaj31nt-H1g97zq5STuQADrWPwzUtb3a34jMoxakvnnGTMqrzVC0AKRNQaaICg9coSsQWbXmV7AfEmGN6zRAjdFivsVcgrRgYiwwUgbCXXGt8PF5mArd5QQIU3PWAnhBABlfxyYOEoPw" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Page Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 bg-[var(--primary)] h-8 rounded-full"></div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Attributes</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-12 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">

                  <form className="space-y-8">
                    {/* Parent Category & Display Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block">Parent Category</label>
                        <div className="relative group">
                          <select
                            value={parentCategory}
                            onChange={(e) => setParentCategory(e.target.value)}
                            className="w-full h-12 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all dark:text-zinc-100"
                          >
                            <option value="">None (Top Level)</option>
                            <option value="pizzas">Pizzas</option>
                            <option value="sides">Sides & Appetizers</option>
                            <option value="beverages">Beverages</option>
                            <option value="desserts">Desserts</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-3.5 pointer-events-none text-zinc-400" size={18} />
                        </div>
                        <p className="text-xs text-zinc-500">Select if this is a sub-category of an existing menu section.</p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block">Display Priority</label>
                        <div className="relative">
                          <input
                            value={displayPriority}
                            onChange={(e) => setDisplayPriority(e.target.value)}
                            className="w-full h-12 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700 rounded-lg px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-all dark:text-zinc-100"
                            placeholder="0"
                            type="number"
                          />
                          <ArrowDownUp className="absolute right-4 top-3.5 text-zinc-400" size={18} />
                        </div>
                        <p className="text-xs text-zinc-500">Lower numbers appear first in the menu (e.g., 0, 1, 2).</p>
                      </div>
                    </div>

                    {/* Category Badges */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block">Category Badges</label>
                      <div className="flex flex-wrap gap-3 p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                        {['New', 'Popular', 'Vegetarian'].map((badge) => {
                          const isSelected = selectedBadges.includes(badge);
                          let Icon = Tag;
                          if (badge === 'Popular') Icon = TrendingUp;
                          if (badge === 'Vegetarian') Icon = Leaf;

                          return (
                            <button
                              key={badge}
                              onClick={() => {
                                if (isSelected) {
                                  setSelectedBadges(selectedBadges.filter(b => b !== badge));
                                } else {
                                  setSelectedBadges([...selectedBadges, badge]);
                                }
                              }}
                              className={`group flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-medium transition-all active:scale-95 ${isSelected
                                  ? badge === 'Vegetarian'
                                    ? 'bg-emerald-100 text-emerald-800 border-emerald-500 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-500/50'
                                    : 'bg-[var(--primary)] text-white border-[var(--primary)]'
                                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                                }`}
                              type="button"
                            >
                              <Icon size={16} />
                              {badge}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-zinc-500">Tags will appear next to the category name in the customer app.</p>
                    </div>

                    {/* Feature Preview Card */}
                    <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl relative overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="text-base font-bold text-amber-700 dark:text-amber-500 mb-2">Internal Metadata</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">These attributes help the restaurant's operational team organize the kitchen displays and inventory flow based on menu structure.</p>
                      </div>
                      <div className="absolute -right-4 -bottom-4 opacity-10 text-amber-700 dark:text-amber-500">
                        <Settings size={120} />
                      </div>
                    </div>
                  </form>
                </div>

                {/* Auxiliary Information */}
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex gap-4 shadow-sm">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Lightbulb className="text-[var(--primary)]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">Naming Tip</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Use concise, appetizing names. Instead of "Flat Dough with Cheese", try "Classic Margherita".</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 flex gap-4 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles className="text-emerald-600 dark:text-emerald-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">Visual Hierarchy</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Priority 0 items always anchor the start of the menu navigation for better conversion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Headline Section */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">SEO Settings</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Optimize how this category appears in search engine results to attract more customers.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form Section */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                    {/* Meta Title */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-base font-bold text-zinc-900 dark:text-zinc-100" htmlFor="meta-title">Meta Title</label>
                        <span className={`text-xs font-medium ${metaTitle.length > 54 ? 'text-red-500' : 'text-zinc-500 dark:text-zinc-400'}`}>
                          {metaTitle.length}/60
                        </span>
                      </div>
                      <input
                        id="meta-title"
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        maxLength={60}
                        className="w-full h-12 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm"
                        placeholder="e.g. Gourmet Veggie Pizzas | Papa Veg Pizza"
                      />
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Appears as the clickable link in search results.</p>
                    </div>

                    {/* Meta Description */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-base font-bold text-zinc-900 dark:text-zinc-100" htmlFor="meta-desc">Meta Description</label>
                        <span className={`text-xs font-medium ${metaDesc.length > 144 ? 'text-red-500' : 'text-zinc-500 dark:text-zinc-400'}`}>
                          {metaDesc.length}/160
                        </span>
                      </div>
                      <textarea
                        id="meta-desc"
                        value={metaDesc}
                        onChange={(e) => setMetaDesc(e.target.value)}
                        maxLength={160}
                        className="w-full h-32 p-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm resize-none"
                        placeholder="Discover our selection of premium vegetarian pizzas crafted with farm-fresh ingredients..."
                      ></textarea>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">A brief summary of the category (optimal length 150-160 chars).</p>
                    </div>

                    {/* Canonical URL */}
                    <div className="space-y-2">
                      <label className="text-base font-bold text-zinc-900 dark:text-zinc-100" htmlFor="canonical-url">Canonical URL</label>
                      <div className="flex flex-col sm:flex-row sm:items-center border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20 transition-all bg-white dark:bg-zinc-950">
                        <span className="bg-zinc-50 dark:bg-zinc-900/50 px-4 py-2 sm:h-12 flex items-center text-zinc-500 dark:text-zinc-400 text-sm border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-zinc-800 whitespace-nowrap">
                          papavegpizza.com/menu/
                        </span>
                        <input
                          id="canonical-url"
                          type="text"
                          value={canonicalUrl}
                          onChange={(e) => setCanonicalUrl(e.target.value)}
                          className="flex-1 w-full h-12 px-4 bg-transparent text-zinc-900 dark:text-zinc-100 outline-none text-sm"
                          placeholder="category-name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search Preview Sidebar */}
                <div className="lg:col-span-5 space-y-4 sticky top-8">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 px-1">Search Preview</h3>
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <Search className="text-[var(--primary)]" size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">Google Desktop Preview</p>
                        <p className="text-sm font-medium text-[var(--primary)]">Live result appearance</p>
                      </div>
                    </div>

                    {/* Google Card Mockup */}
                    <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950 shadow-inner overflow-hidden">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100">P</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] text-[#202124] dark:text-[#dadce0] font-sans">Papa Veg Pizza</span>
                          <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-none font-sans">
                            https://papavegpizza.com › menu › <span className="truncate max-w-[100px] inline-block align-bottom">{canonicalUrl || slug || "..."}</span>
                          </span>
                        </div>
                      </div>
                      <h4 className={`text-xl leading-tight mb-1 truncate font-sans ${metaTitle ? 'text-[#1a0dab] dark:text-[#8ab4f8]' : 'text-[#1a0dab]/50 dark:text-[#8ab4f8]/50'}`}>
                        {metaTitle || "Enter a Meta Title..."}
                      </h4>
                      <p className={`text-sm leading-snug line-clamp-2 font-sans ${metaDesc ? 'text-[#4d5156] dark:text-[#bdc1c6]' : 'text-[#4d5156]/50 dark:text-[#bdc1c6]/50'}`}>
                        {metaDesc || "Start typing a meta description to see how it will appear in the search engine result snippet here."}
                      </p>
                    </div>

                    <div className="mt-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500">
                      <p className="text-xs font-bold text-amber-800 dark:text-amber-500 flex items-center gap-2 uppercase tracking-wide">
                        <Lightbulb size={16} /> SEO TIP
                      </p>
                      <p className="text-sm mt-1 text-amber-900 dark:text-amber-200/80">Include keywords like "Vegetarian", "Pizza", and "Healthy" for better ranking.</p>
                    </div>
                  </div>

                  {/* Visual Context Asset */}
                  <div className="relative h-48 w-full rounded-xl overflow-hidden group shadow-md border border-zinc-200 dark:border-zinc-800">
                    <img
                      alt="Professional Pizza Photography"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8CgXu4EKWCTiUY1yeiW4FZcqfeJ_8u-FFfoidr6_O5hWztZeIgK-SN6WXjTAXRExJhKTMDrrFaQxla-v_tW7SXHKNyQflXBIw13MddGndakeME1zEW5Egi_BTlciyvxlaA7GQdJS9-Htmhg0mKCvpDuWKxowqLrRk1WEr47-km9YftR5ebfqUOv0lvYG7H2psgdlE3TIe4cOa-AvLflISzAIUCKt7S0pjHYgBYDVegu3OnahsbGlhzLULrE_RYySaNoHHNVLv7lI"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent mix-blend-multiply"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-base font-bold">Attract Organic Traffic</p>
                      <p className="text-white/80 text-xs font-medium">High-quality SEO descriptions improve click-through rates by up to 30%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Review & Finalize</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Verify the category details before publishing to the live menu.</p>
              </div>

              {/* Bento Grid Layout for Summary */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Basic Details Card */}
                <div className="md:col-span-7 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <Info className="text-[var(--primary)]" size={20} /> Basic Details
                      </h3>
                      <button onClick={() => setCurrentStep(1)} className="text-[var(--primary)] hover:bg-[var(--primary)]/10 px-3 py-1 rounded-full text-sm font-bold transition-colors">Edit</button>
                    </div>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Category Name</dt>
                        <dd className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1">{categoryName || "Not Set"}</dd>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Status</dt>
                          <dd className="mt-1">
                            {isActive ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                                Inactive
                              </span>
                            )}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Internal Code</dt>
                          <dd className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">CAT-{categoryName.substring(0, 4).toUpperCase() || "NEW"}-001</dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Media Preview Card */}
                <div className="md:col-span-5 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800">
                  <div className="p-6 pb-2 flex items-center justify-between">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <Image className="text-[var(--primary)]" size={20} /> Media
                    </h3>
                    <button onClick={() => setCurrentStep(2)} className="text-[var(--primary)] hover:bg-[var(--primary)]/10 px-3 py-1 rounded-full text-sm font-bold transition-colors">Edit</button>
                  </div>
                  <div className="p-6 pt-2">
                    <div className="relative group rounded-lg overflow-hidden h-40 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      <img
                        alt="Category Thumbnail"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuU_VJFu2Jps9piZ1npHJGQeFiDoFZ5hmiMVy0Rivn2b4Vm4qkuMh7wZkyIqCaIg4IpHPr1ok50Rkf3RdcT05siTh8HWmeNs-p3hQgZCdjYfe0tBrFteK8sg_CVjR6t0fwFLJpy59cKa_ZKpZfRZD_rctcvfOO8KMKGDQq98WN-IODxSBGD87fEf7dNcUDW_8ku_h2J_T9b0xFK53OdJgBPvnSsN5rlFnzbkWJnPWx189dgH_Ust4JdyTpjR_u_AtiSlisE_Cctjw"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-bold">
                        1.2 MB • JPG
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attributes Card */}
                <div className="md:col-span-4 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <Tag className="text-[var(--primary)]" size={20} /> Attributes
                    </h3>
                    <button onClick={() => setCurrentStep(3)} className="text-[var(--primary)] hover:bg-[var(--primary)]/10 px-3 py-1 rounded-full text-sm font-bold transition-colors">Edit</button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Priority Level</dt>
                      <dd className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${parseInt(displayPriority) < 10 ? 'bg-[var(--primary)]' : 'bg-zinc-400'}`}></span> {parseInt(displayPriority) < 10 ? 'High' : 'Normal'} (Index {displayPriority || 10})
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Applied Badges</dt>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedBadges.length > 0 ? selectedBadges.map(badge => (
                          <span key={badge} className="px-2 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold rounded-lg border border-zinc-200 dark:border-zinc-700">
                            {badge}
                          </span>
                        )) : (
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">None</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO Card */}
                <div className="md:col-span-8 bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <Search className="text-[var(--primary)]" size={20} /> SEO Metadata
                    </h3>
                    <button onClick={() => setCurrentStep(4)} className="text-[var(--primary)] hover:bg-[var(--primary)]/10 px-3 py-1 rounded-full text-sm font-bold transition-colors">Edit</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Page Title</dt>
                      <dd className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">{metaTitle || `${categoryName} | Papa Veg Pizza`}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Slug</dt>
                      <dd className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1 font-mono bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 break-all">
                        /menu/{canonicalUrl || slug || "..."}
                      </dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Meta Description</dt>
                      <dd className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 italic">
                        "{metaDesc || description || `Discover our collection of ${categoryName}.`}"
                      </dd>
                    </div>
                  </div>
                </div>

                {/* Final Checklist Section */}
                <div className="md:col-span-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-8 border border-dashed border-zinc-300 dark:border-zinc-700 mt-4">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                    <ClipboardCheck className="text-[var(--primary)]" size={24} /> Final Validation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:-translate-y-1 transition-transform">
                      <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 rounded-full flex items-center justify-center shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Visible on App</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Live in customer menu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:-translate-y-1 transition-transform">
                      <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 rounded-full flex items-center justify-center shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Menu Assigned</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Attached to Main Dinner</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:-translate-y-1 transition-transform">
                      <div className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 rounded-full flex items-center justify-center shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Tags Verified</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Schema.org markup ready</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
