import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import DeliveryMapModal from "@food/components/user/DeliveryMapModal"
import DeliveryOrCollectionModal from "@food/components/user/DeliveryOrCollectionModal"
import { useLocationStore } from "@food/store/locationStore"
import { useLocationGuard } from "@food/hooks/useLocationGuard"
import logoNew from "@/assets/logo1.png"

const MENU_ITEMS = {
  pizzas: [
    {
      id: "fiery-schezwan",
      title: "Fiery Schezwan Veggie",
      price: 299,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
      description: "Fiery schezwan sauce, dynamic mozzarella, onions, sweet bell peppers, and fresh greens.",
      sizes: ["Oval 10in Crafted Flatz", "Personal Pan", "Medium Hand Tossed", "Large Stuffed Crust"]
    },
    {
      id: "smokey-bbq",
      title: "Smokey BBQ Veggie",
      price: 299,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=80",
      description: "Rich smokey BBQ base, melted mozzarella, loaded red onions, golden sweet corn, and BBQ drizzle.",
      sizes: ["Oval 10in Crafted Flatz", "Personal Pan", "Medium Hand Tossed", "Large Stuffed Crust"]
    },
    {
      id: "paneer-makhni",
      title: "Paneer Makhni Masala",
      price: 299,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80",
      description: "Indian style Makhni sauce, premium marinated paneer cubes, capsicum, red onions, and tomatoes.",
      sizes: ["Oval 10in Crafted Flatz", "Personal Pan", "Medium Hand Tossed", "Large Stuffed Crust"]
    },
    {
      id: "overloaded-veggies",
      title: "Overloaded Veggies",
      price: 299,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=80",
      description: "Black olives, mushrooms, sweet corn, red onions, tri-color bell peppers, and jalapeños.",
      sizes: ["Oval 10in Crafted Flatz", "Personal Pan", "Medium Hand Tossed", "Large Stuffed Crust"]
    }
  ],
  burgers: [
    {
      id: "crispy-veg-burger",
      title: "Crispy Veg Burger",
      price: 149,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80",
      description: "Crispy mixed vegetable patty, fresh lettuce, tomatoes, and creamy classic mayonnaise."
    },
    {
      id: "spicy-paneer-burger",
      title: "Spicy Paneer Burger",
      price: 189,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
      description: "Spicy marinated paneer patty, layered with spicy dressing, melted cheese, and sliced onions."
    }
  ],
  breads: [
    {
      id: "garlic-bread-stix",
      title: "Garlic Bread Stix",
      price: 119,
      image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&auto=format&fit=crop&q=80",
      description: "Freshly baked garlic bread sticks served warm with creamy dynamic dipping sauce."
    },
    {
      id: "cheese-garlic-bread",
      title: "Cheese Garlic Bread",
      price: 149,
      image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=500&auto=format&fit=crop&q=80",
      description: "Toasted thick bread slices loaded with garlic butter, fresh parsley, and gooey melted mozzarella."
    }
  ],
  pasta: [
    {
      id: "creamy-mushroom-penne",
      title: "Creamy Mushroom Penne",
      price: 249,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
      description: "Penne tossed in a rich, creamy white parmesan sauce loaded with fresh button mushrooms and garlic herbs."
    },
    {
      id: "spiced-arrabbiata",
      title: "Spiced Arrabbiata Pasta",
      price: 229,
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80",
      description: "Penne pasta in a fiery, spiced San Marzano tomato sauce infused with fresh garlic, chili flakes, and basil leaves."
    }
  ],
  desserts: [
    {
      id: "warm-brownie",
      title: "Warm Chocolate Brownie",
      price: 129,
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&auto=format&fit=crop&q=80",
      description: "Rich, dense chocolate brownie served warm with a shiny, gooey dark chocolate glaze on top."
    },
    {
      id: "choco-volcano",
      title: "Choco Volcano Cake",
      price: 139,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
      description: "Freshly baked soft chocolate sponge cake with a molten, oozing chocolate lava core inside."
    }
  ],
  drinks: [
    {
      id: "water-bottle",
      title: "Purified Water Bottle",
      price: 40,
      image: "/food/bisleri_water_bottle.png",
      description: "Ice-cold premium mineral packaged drinking water for refreshment."
    },
    {
      id: "pepsi-cola",
      title: "Pepsi Cola (500ml)",
      price: 60,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80",
      description: "500ml bottle of cold, sparkling carbonated Pepsi cola beverage."
    }
  ]
}

export default function MenuList() {
  const navigate = useNavigate()
  const { isModalOpen, closeLocationModal, confirmLocation, locationConfirmed } = useLocationStore()
  const checkLocation = useLocationGuard()
  const location = useLocation()
  const [isDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("appTheme")
    return savedTheme ? savedTheme === "dark" : true
  })
  const [activeTab, setActiveTab] = useState("pizzas")
  const [isVegetarian, setIsVegetarian] = useState(true)
  const [showServiceSelector, setShowServiceSelector] = useState(false)
  const [showMapModal, setShowMapModal] = useState(false)
  const [showStoreModal, setShowStoreModal] = useState(false)
  const [showCarModal, setShowCarModal] = useState(false)
  const [deliveryAddress, setDeliveryAddress] = useState(() => {
    return locationConfirmed ? (localStorage.getItem("deliveryAddress") || "") : ""
  })
  const [takeawayHut, setTakeawayHut] = useState(() => {
    return locationConfirmed ? (localStorage.getItem("takeawayHut") || "") : ""
  })
  const [carNumber, setCarNumber] = useState(() => {
    return locationConfirmed ? (localStorage.getItem("carNumber") || "") : ""
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")

  // Debouncing logic for search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)
    return () => {
      clearTimeout(handler)
    }
  }, [searchQuery])

  // Reset search query when active category tab changes
  useEffect(() => {
    setSearchQuery("")
  }, [activeTab])

  // Sync local location state with global location confirmation changes
  useEffect(() => {
    if (locationConfirmed) {
      setDeliveryAddress(localStorage.getItem("deliveryAddress") || "")
      setTakeawayHut(localStorage.getItem("takeawayHut") || "")
      setCarNumber(localStorage.getItem("carNumber") || "")
    } else {
      setDeliveryAddress("")
      setTakeawayHut("")
      setCarNumber("")
    }
  }, [locationConfirmed])
  const [activeService, setActiveService] = useState(localStorage.getItem("activeService") || "delivery")
  const [toast, setToast] = useState({ visible: false, message: "" })

  // Sync global location modal open state with local modal trigger
  useEffect(() => {
    if (isModalOpen) {
      setShowServiceSelector(true)
    } else {
      setShowServiceSelector(false)
    }
  }, [isModalOpen])

  const triggerToast = (message) => {
    setToast({ visible: true, message })
    setTimeout(() => {
      setToast({ visible: false, message: "" })
    }, 2500)
  }

  useEffect(() => {
    if (location.state?.category) {
      const cat = location.state.category
      if (cat === "pizza") setActiveTab("pizzas")
      else if (cat === "burger") setActiveTab("burgers")
      else if (cat === "bread") setActiveTab("breads")
      else if (cat === "pasta" || cat === "desserts" || cat === "drinks") {
        setActiveTab(cat)
      }
    }
  }, [location.state])
  const [locationName, setLocationName] = useState(localStorage.getItem("deliveryAddress") || "")
  const [cart, setCart] = useState({})

  // Custom Customize Modal States
  const [customizeItem, setCustomizeItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedToppings, setSelectedToppings] = useState([])
  const [selectedCheeseDip, setSelectedCheeseDip] = useState([])
  const [selectedKetchup, setSelectedKetchup] = useState([])
  const [selectedBreadDips, setSelectedBreadDips] = useState([])

  // Load fonts and icons
  useEffect(() => {
    const linkFonts = document.createElement("link")
    linkFonts.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap"
    linkFonts.rel = "stylesheet"
    document.head.appendChild(linkFonts)

    const linkIcons = document.createElement("link")
    linkIcons.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    linkIcons.rel = "stylesheet"
    document.head.appendChild(linkIcons)

    // Load active location
    const storedLoc = localStorage.getItem("deliveryAddress")
    if (storedLoc) {
      setLocationName(storedLoc)
      setDeliveryAddress(storedLoc)
    }

    return () => {
      document.head.removeChild(linkFonts)
      document.head.removeChild(linkIcons)
    }
  }, [])

  const addToCart = (item, size = "") => {
    const key = size ? `${item.id}-${size}` : item.id
    setCart(prev => {
      const existing = prev[key]
      const newQty = existing ? existing.quantity + 1 : 1
      return {
        ...prev,
        [key]: {
          ...item,
          selectedSize: size,
          quantity: newQty
        }
      }
    })

    // Save to global localStorage cart for sync
    const currentLocalCart = JSON.parse(localStorage.getItem("userCart") || "{}")
    currentLocalCart[key] = (currentLocalCart[key] || 0) + 1
    localStorage.setItem("userCart", JSON.stringify(currentLocalCart))

    // Dispatch event to trigger Home basket recalculation
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const totalCartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)
  const totalCartPrice = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // Filter menu items by debounced search query (case-insensitive, match title or description)
  const filteredItems = (MENU_ITEMS[activeTab] || []).filter((item) => {
    const titleMatch = item.title?.toLowerCase().includes(debouncedQuery.toLowerCase())
    const descMatch = item.description?.toLowerCase().includes(debouncedQuery.toLowerCase())
    return titleMatch || descMatch
  })

  const modalTextPrimary = isDarkMode ? "text-white" : "text-zinc-900"
  const modalTextSecondary = isDarkMode ? "text-zinc-400" : "text-zinc-500"
  const modalLabelMuted = isDarkMode ? "text-white/50" : "text-zinc-400 font-bold"
  const modalCheckboxText = isDarkMode ? "text-white/80" : "text-zinc-750 font-semibold"
  const modalBorder = isDarkMode ? "border-white/10" : "border-zinc-200"

  return (
    <div className={`min-h-screen flex justify-center transition-colors duration-300 ${isDarkMode ? "bg-[#0a0a0a]" : "bg-gray-100"}`}>
      <div className={`w-full max-w-md min-h-screen pb-32 font-body-md overflow-x-hidden relative shadow-2xl border-x ${
        isDarkMode ? "border-zinc-800/40" : "border-gray-200/50"
      }`} style={{ backgroundColor: isDarkMode ? "#111111" : "#fbf9f8", color: isDarkMode ? "#e5e2e1" : "#1c1b1b" }}>
      {/* CSS overrides to keep design exact */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-card {
          background: ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.92)"} !important;
          backdrop-filter: blur(20px) !important;
          border: 1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(229, 57, 53, 0.16)"} !important;
          box-shadow: ${isDarkMode ? "none" : "0 10px 30px -5px rgba(229, 57, 53, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.06)"} !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .glass-card:hover {
          box-shadow: ${isDarkMode ? "none" : "0 20px 40px -8px rgba(229, 57, 53, 0.16), 0 10px 20px -6px rgba(0, 0, 0, 0.08)"} !important;
          border-color: ${isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(229, 57, 53, 0.3)"} !important;
          transform: translateY(-2px) !important;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none !important; }
        .hide-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        
        .font-headline-lg-mobile {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: 28px !important;
          line-height: 34px !important;
        }
        .font-body-md {
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          line-height: 24px !important;
          font-weight: 400 !important;
        }
        .font-label-sm {
          font-family: 'Inter', sans-serif !important;
          font-size: 12px !important;
          line-height: 16px !important;
          font-weight: 600 !important;
          letter-spacing: 0.05em !important;
        }
        
        .veg-box {
          border: 2px solid #00C853;
          width: 14px;
          height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .veg-circle {
          background-color: #00C853;
          border-radius: 50%;
          width: 6px;
          height: 6px;
        }
        .text-primary {
          color: #E53935 !important;
        }
        .bg-primary {
          background-color: #E53935 !important;
        }
        .text-on-primary {
          color: #ffffff !important;
        }
        
        .bg-surface\/80 {
          background-color: ${isDarkMode ? "rgba(19, 19, 19, 0.8)" : "rgba(255, 255, 255, 0.8)"} !important;
        }
        .bg-surface\/85 {
          background-color: ${isDarkMode ? "rgba(19, 19, 19, 0.85)" : "rgba(255, 255, 255, 0.85)"} !important;
        }
        .bg-surface\/90 {
          background-color: ${isDarkMode ? "rgba(19, 19, 19, 0.9)" : "rgba(255, 255, 255, 0.9)"} !important;
        }
        .bg-surface {
          background-color: ${isDarkMode ? "#131313" : "#ffffff"} !important;
        }
        .border-white\/10 {
          border-color: ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"} !important;
        }
        .border-white\/12 {
          border-color: ${isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.1)"} !important;
        }
        .bg-white\/5 {
          background-color: ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)"} !important;
        }
        .text-white\/70 {
          color: ${isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(19, 19, 19, 0.7)"} !important;
        }
        .text-white\/50 {
          color: ${isDarkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(19, 19, 19, 0.5)"} !important;
        }
        .bg-black\/40 {
          background-color: ${isDarkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.5)"} !important;
        }
        `
      }} />

      {/* Custom Toast Alert */}
      {toast.visible && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-55 bg-[#E53935] text-white px-6 py-3 rounded-full shadow-2xl glass-card font-label-sm text-xs border border-white/20 animate-bounce">
          {toast.message}
        </div>
      )}

      {/* Top Header Navigation */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-45 bg-surface/90 backdrop-blur-xl border-b border-white/10 h-16 flex items-center justify-between px-5 transition-colors duration-300">
        <button
          onClick={() => navigate("/user")}
          className={`material-symbols-outlined hover:opacity-85 active:scale-95 cursor-pointer bg-transparent border-0 outline-none ${isDarkMode ? "text-white" : "text-[#131313]"}`}
        >
          arrow_back
        </button>
        {/* Brand logo design */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <img
            src={logoNew}
            alt="Papa Veg Pizza Logo"
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-8"></div>
      </header>

      {/* Categories horizontal tabs */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 w-full max-w-md z-45 bg-surface/85 backdrop-blur-md border-b border-white/10 px-5 flex overflow-x-auto hide-scrollbar py-3 gap-3">
        {[
          { id: "deals", label: "Deals", action: () => navigate("/user/deals") },
          { id: "pizzas", label: "Pizzas" },
          { id: "burgers", label: "Burgers" },
          { id: "breads", label: "Breads" },
          { id: "pasta", label: "Pasta" },
          { id: "desserts", label: "Desserts" },
          { id: "drinks", label: "Drinks" }
        ].map((tab) => {
          const isSelected = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.action) {
                  tab.action()
                } else {
                  setActiveTab(tab.id)
                }
              }}
              className={`px-5 py-2 rounded-lg font-label-sm text-xs uppercase font-extrabold cursor-pointer border transition-all active:scale-95 duration-200 ${isSelected
                ? "bg-primary border-primary text-white shadow-[0_4px_12px_rgba(229,57,53,0.3)]"
                : isDarkMode
                  ? "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                  : "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200/70 shadow-sm"
                }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Main Categories Layout container */}
      <main className="mt-36 px-5 space-y-6 max-w-lg mx-auto pt-4">

        {/* Vegetarian Toggle Switch bar */}
        <section className="glass-card rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="veg-box"><span className="veg-circle"></span></span>
            <span className="font-label-sm uppercase text-xs tracking-wider font-bold">Vegetarian Only</span>
          </div>
          {/* Custom Toggle Switch */}
          <div
            onClick={() => setIsVegetarian(!isVegetarian)}
            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all flex items-center ${isVegetarian ? "bg-[#00C853]" : "bg-white/15"}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-all transform ${isVegetarian ? "translate-x-6" : ""}`} />
          </div>
        </section>

        {/* Localized deals & location alert indicator */}
        <section
          onClick={() => setShowServiceSelector(true)}
          className={`rounded-2xl p-4 flex items-center justify-between cursor-pointer active:opacity-90 transition-all border ${
            isDarkMode 
              ? "bg-white/5 border-white/10 text-white shadow-none" 
              : "bg-white border-primary/20 text-slate-800 shadow-[0_8px_20px_-4px_rgba(229,57,53,0.06)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl font-bold">local_pizza</span>
            <div className="text-left">
              <h4 className={`text-xs font-black uppercase tracking-wide ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                {locationName ? "Delivering to:" : "Add your location"}
              </h4>
              <p className={`text-[11px] line-clamp-1 max-w-[200px] leading-tight ${isDarkMode ? "text-white/60" : "text-slate-500"}`}>
                {locationName || "See your local deals and pizzas"}
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary text-lg font-bold">arrow_forward_ios</span>
        </section>

        {/* Section Header */}
        <div className="flex flex-col gap-3 pb-2 border-b border-white/5">
          <div className="flex items-center justify-between">
            <h2 className={`font-headline-lg-mobile capitalize ${isDarkMode ? "text-white" : "text-[#131313]"}`}>{activeTab}</h2>
            <span className="text-xs opacity-50 font-bold">{filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'}</span>
          </div>
          
          {/* Debounced Search Bar */}
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50 pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeTab}...`}
              className={`w-full h-9 pl-9 pr-8 rounded-full text-xs font-semibold outline-none transition-all duration-300 border ${
                isDarkMode
                  ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  : "bg-zinc-100 border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:bg-white focus:border-zinc-350 focus:ring-1 focus:ring-zinc-250"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 outline-none cursor-pointer flex items-center justify-center p-0 hover:opacity-85 text-zinc-400"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </div>
        </div>

         {/* Menu list grid */}
        <section className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl overflow-hidden flex flex-row p-4 gap-4 border border-white/12 hover-glow transition-all duration-300">
              
              {/* Left Details: Title, Price, Description, Size Selector */}
              <div className="flex-1 flex flex-col justify-between h-full min-w-0 text-left">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="veg-box scale-75 shrink-0"><span className="veg-circle"></span></span>
                    {item.badge && (
                      <span className="bg-[#E53935]/10 text-[#E53935] text-[8px] font-black uppercase px-1.5 py-0.5 rounded tracking-wide">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-headline-md-mobile text-sm leading-snug font-extrabold truncate ${isDarkMode ? "text-white" : "text-[#131313]"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[10px] leading-normal line-clamp-2 ${isDarkMode ? "text-white/60" : "text-zinc-500"}`}>
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-primary font-black text-sm">₹{item.price}</span>
                  
                  {/* Size Selector as a clean, rounded pill */}
                  {item.sizes && (
                    <div className="relative">
                      <select
                        defaultValue={item.sizes[0]}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className={`h-6 max-w-[90px] bg-[#131313]/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-full pl-2.5 pr-5 text-[9px] font-extrabold select-none outline-none appearance-none cursor-pointer truncate ${isDarkMode ? "text-white" : "text-[#131313]"}`}
                      >
                        {item.sizes.map((s) => (
                          <option key={s} value={s} className={`font-bold text-[9px] ${isDarkMode ? "bg-[#131313] text-white" : "bg-white text-[#131313]"}`}>{s}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/50 text-[10px] pointer-events-none">
                        keyboard_arrow_down
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Product Image & ADD Button Stack */}
              <div className="relative flex flex-col items-center shrink-0 pb-3">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/10 shadow-sm">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.title}
                    src={item.image}
                  />
                </div>
                
                {/* ADD Button overlapping bottom of image */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <button
                    onClick={() => checkLocation(() => addToCart(item, selectedSize))}
                    className="h-7 px-5 bg-[#E53935] hover:bg-red-700 text-white rounded-full font-label-sm text-[10px] uppercase font-black cursor-pointer border-0 active:scale-95 transition-all shadow-md shadow-[#E53935]/20 flex items-center justify-center whitespace-nowrap min-w-[65px]"
                  >
                    Add
                  </button>
                  
                  {/* Small customise hint below add button */}
                  {(activeTab === "pizzas" || activeTab === "breads") && (
                    <button
                      onClick={() => checkLocation(() => setCustomizeItem(item))}
                      className="mt-1 text-[#E53935] hover:text-red-700 text-[8px] font-extrabold uppercase bg-transparent border-0 outline-none cursor-pointer tracking-wider whitespace-nowrap"
                    >
                      Customise
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-16 opacity-50 space-y-3">
              <span className="material-symbols-outlined text-4xl">
                {searchQuery ? "search_off" : "local_pizza"}
              </span>
              <p className="font-bold text-xs uppercase tracking-wider">
                {searchQuery ? "No items match your search" : "No items available in this category"}
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Floating Customize Overlay Modal */}
      {customizeItem && (
        <div className={`fixed inset-0 z-55 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm ${isDarkMode ? "dark" : ""}`}>
          <div className="w-full max-w-sm glass-card rounded-3xl p-6 space-y-4 shadow-2xl">
            <h3 className={`font-headline-lg-mobile text-lg ${modalTextPrimary}`}>Customize {customizeItem.title}</h3>
            <p className={`text-xs ${modalTextSecondary}`}>Personalize your toppings and selection details for {customizeItem.title}:</p>

            {customizeItem.sizes && (
              <div className="space-y-1.5">
                <span className={`text-[10px] uppercase font-bold tracking-wider ${modalLabelMuted}`}>Choose Crust size</span>
                <div className="flex flex-wrap gap-2">
                  {customizeItem.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-2 rounded-lg font-label-sm text-[10px] uppercase font-bold cursor-pointer border transition-all ${selectedSize === s
                        ? "bg-primary border-primary text-white"
                        : isDarkMode
                          ? "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                          : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200/60"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-1.5 pt-2">
              {activeTab === "pizzas" && (
                <>
                  {/* TOPPINGS */}
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${modalLabelMuted}`}>TOPPINGS</span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Fresh Tomatoes",
                        "Mushroom",
                        "Sweet Corn",
                        "Pineapples",
                        "Red Paprika",
                        "Jalapenos",
                        "Olives",
                        "Paneer",
                        "Capsicum",
                        "Onions"
                      ].map(opt => (
                        <label key={opt} className={`flex items-center space-x-2 text-xs cursor-pointer ${modalCheckboxText}`}>
                          <input type="checkbox" className="accent-[#E53935]" checked={selectedToppings.includes(opt)} onChange={() => {
                            setSelectedToppings(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
                          }} />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Cheese & Dip */}
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${modalLabelMuted}`}>Cheese & Dip</span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Extra Cheese",
                        "Mozzarella",
                        "Cheese Dip",
                        "Jalapeno Dip",
                        "Hot & Garlic Dip",
                        "Peri Peri Dip",
                        "Korma Dip"
                      ].map(opt => (
                        <label key={opt} className={`flex items-center space-x-2 text-xs cursor-pointer ${modalCheckboxText}`}>
                          <input type="checkbox" className="accent-[#E53935]" checked={selectedCheeseDip.includes(opt)} onChange={() => {
                            setSelectedCheeseDip(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
                          }} />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Choose Your ketchup */}
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${modalLabelMuted}`}>Choose Your ketchup</span>
                    <label className={`flex items-center space-x-2 text-xs cursor-pointer ${modalCheckboxText}`}>
                      <input type="checkbox" className="accent-[#E53935]" checked={selectedKetchup.includes("Ketchup")} onChange={() => {
                        setSelectedKetchup(prev => prev.includes("Ketchup") ? [] : ["Ketchup"]);
                      }} />
                      <span>Ketchup</span>
                    </label>
                  </div>
                </>
              )}
              {activeTab === "breads" && (
                <div className="space-y-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${modalLabelMuted}`}>DIPS</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Jalapeno Dip",
                      "Peri Peri Dip",
                      "Cheese Dip"
                    ].map(opt => (
                      <label key={opt} className={`flex items-center space-x-2 text-xs cursor-pointer ${modalCheckboxText}`}>
                        <input type="checkbox" className="accent-[#E53935]" checked={selectedBreadDips.includes(opt)} onChange={() => {
                          setSelectedBreadDips(prev => prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]);
                        }} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`flex gap-3 pt-4 border-t ${modalBorder}`}>
              <button
                onClick={() => setCustomizeItem(null)}
                className={`flex-1 h-11 font-bold rounded-xl text-xs uppercase cursor-pointer border transition-all ${
                  isDarkMode 
                    ? "bg-white/5 hover:bg-white/10 border-white/10 text-white" 
                    : "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  addToCart(customizeItem, selectedSize)
                  setCustomizeItem(null)
                }}
                className="flex-1 h-11 bg-primary hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase cursor-pointer border-0 shadow-[0_4px_12px_rgba(229,57,53,0.25)] active:scale-95 transition-all"
              >
                Confirm Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delivery Map Modal Selector */}
      <DeliveryMapModal
        show={showMapModal}
        onClose={() => setShowMapModal(false)}
        deliveryAddress={deliveryAddress}
        setDeliveryAddress={(addr) => {
          setDeliveryAddress(addr)
          setLocationName(addr)
        }}
        setActiveService={setActiveService}
        triggerToast={triggerToast}
        isDarkMode={isDarkMode}
      />

      {/* Delivery or Collection Selection Modal */}
      <DeliveryOrCollectionModal
        show={showServiceSelector}
        onClose={() => {
          setShowServiceSelector(false)
          if (isModalOpen) closeLocationModal()
        }}
        onSelect={(id) => {
          if (id === "delivery") {
            if (!deliveryAddress) {
              setDeliveryAddress("Joshi Colony, Bk Sindhi Colony, Indore, Indore")
            }
            setShowMapModal(true)
          } else if (id === "takeaway") {
            setShowStoreModal(true)
          } else if (id === "incar") {
            setShowCarModal(true)
          } else if (id === "train") {
            navigate("/user/deliver-on-train")
          }
        }}
        isDarkMode={isDarkMode}
      />

      {/* Takeaway Store Finder Modal */}
      {showStoreModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm dark">
          <div className="w-full max-w-sm glass-card rounded-3xl p-6 space-y-4 text-left bg-[#131313] border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-lg-mobile text-lg text-white">Find your nearest hut</h3>
              <button
                onClick={() => setShowStoreModal(false)}
                className="material-symbols-outlined text-white/50 hover:text-white cursor-pointer bg-transparent border-0 outline-none"
              >
                close
              </button>
            </div>
            <p className="text-xs opacity-60 leading-relaxed text-white">
              We suggested the following Pizza Veg Huts near your coordinates:
            </p>

            {/* Store List Options */}
            <div className="space-y-3">
              {[
                { id: "hut-cp", name: "Pizza Veg Hut - Connaught Place", dist: "0.8 km", status: "Open Now", hours: "11 AM - 11 PM" },
                { id: "hut-kb", name: "Pizza Veg Hut - Karol Bagh", dist: "2.1 km", status: "Open Now", hours: "11 AM - 11 PM" },
                { id: "hut-sk", name: "Pizza Veg Hut - Saket Terminal", dist: "4.5 km", status: "Closed", hours: "Opens tomorrow" }
              ].map((store) => (
                <div
                  key={store.id}
                  onClick={() => {
                    setTakeawayHut(store.name)
                    setLocationName(store.name)
                    confirmLocation({
                      address: store.name,
                      serviceType: "takeaway"
                    })
                    setShowStoreModal(false)
                    triggerToast(`Selected outlet: ${store.name}`)
                  }}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-between cursor-pointer active:scale-98 transition-all"
                >
                  <div className="text-left space-y-1">
                    <h4 className="text-xs font-bold text-white leading-tight">{store.name}</h4>
                    <div className="flex gap-2 text-[9px] font-bold">
                      <span className="text-[#00C853]">{store.status}</span>
                      <span className="opacity-50">•</span>
                      <span className="opacity-60">{store.hours}</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <span className="text-[10px] bg-[#E53935]/10 text-[#E53935] px-2 py-0.5 rounded font-black tracking-wide">{store.dist}</span>
                    <span className="material-symbols-outlined text-xs text-white/40">arrow_forward_ios</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* In-Car Details Modal */}
      {showCarModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm dark">
          <div className="w-full max-w-sm glass-card rounded-3xl p-6 space-y-4 text-left bg-[#131313] border border-white/10">
            <div className="flex justify-between items-center">
              <h3 className="font-headline-lg-mobile text-lg text-white">In-Car Dining</h3>
              <button
                onClick={() => setShowCarModal(false)}
                className="material-symbols-outlined text-white/50 hover:text-white cursor-pointer bg-transparent border-0 outline-none"
              >
                close
              </button>
            </div>
            <p className="text-xs opacity-60 leading-relaxed text-white">
              Please enter your car number or vehicle registration details so we can deliver your hot pizza straight to your window:
            </p>

            {/* Input field */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase opacity-50 font-bold tracking-wider text-white">Car Number</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. DL 3C AB 1234"
                  value={carNumber}
                  onChange={(e) => setCarNumber(e.target.value)}
                  className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-xs font-bold text-white outline-none"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-sm">
                  directions_car
                </span>
              </div>
            </div>

            {/* Confirm button */}
            <button
              onClick={() => {
                const cleanCar = carNumber.trim()
                if (!cleanCar) {
                  triggerToast("Please enter a valid car number")
                  return
                }
                setCarNumber(cleanCar)
                setLocationName(cleanCar)
                confirmLocation({
                  address: cleanCar,
                  serviceType: "incar"
                })
                setShowCarModal(false)
                triggerToast("Car details confirmed!")
              }}
              className="w-full h-11 bg-[#E53935] text-on-primary font-bold rounded-xl text-xs uppercase cursor-pointer border-0 shadow-lg active:scale-95 transition-all"
            >
              Confirm Vehicle
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Cart basket FAB */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none z-45">
          <button
            onClick={() => {
              navigate("/user/cart")
            }}
            className="absolute right-4 bottom-0 pointer-events-auto w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(229,57,53,0.4)] flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-[28px]">shopping_basket</span>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-on-primary-container rounded-full text-[10px] font-bold flex items-center justify-center border border-primary animate-bounce">
              {totalCartCount}
            </div>
          </button>
        </div>
      )}
      </div>
    </div>
  )
}
