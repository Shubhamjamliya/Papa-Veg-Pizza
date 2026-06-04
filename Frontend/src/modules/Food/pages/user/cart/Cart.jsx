import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Clock } from "lucide-react"
import { useCart } from "@food/context/CartContext"
import ApplyCoupon from "./ApplyCoupon"
import AddGiftCard from "./AddGiftCard"

const ALL_PRODUCTS = {
  "margherita-supreme": {
    id: "margherita-supreme",
    name: "Margherita Supreme",
    price: 299,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBluz4eCNAilJO6yR3_OFzJkONQMKo9XRScol5o2w_wqSUPMQDImok1wr4UrTbZd0tDM7eicy98AOUq9ORUm23pi_z6uJuyeKQ3_tMtGkycxVZqFNywk1nb7d0RmEboytoVC-L__LD3BvG4JNTz3ZyFOnr8AyX-1ztogKmbBa3797PAAs2KoxmP2fFsZ_kMnaS2D-lsv6J0g5sQojmKXNF9d470loeENjh89lAF_TJu4TG-lB2oxnC2s56TPYL6h1CjXGleROU_bDPc",
    description: "Buffalo mozzarella, San Marzano tomatoes, fresh basil."
  },
  "farmhouse-delight": {
    id: "farmhouse-delight",
    name: "Farmhouse Delight",
    price: 349,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Rib9mlrsig1haXvSfhY1zS2NGAIwUFig_-dDDTjQXBRJ_hdwzvKhvSs4X_KczL-USNdycC0vnIVox-Oyrmt5zbOdPneq43yDpJwEWYB3CSCU5gL7rFmEitcAS-QChuUXgeCi6WJcn32uqxZfLupJCZNO4YVg04lB8Y1JIsHt8L0bgON_2RuBMVL02rBMhN5haheBGgLGmqbDG4wUP7bqztn0gWQKQQedaHRRZ14BMbnbI7P9oZaCYPYkXEol9_8DJ3BLamRCaUpO",
    description: "Mushrooms, onions, peppers, and sweet corn."
  },
  "fiery-schezwan": {
    id: "fiery-schezwan",
    name: "Fiery Schezwan Veggie",
    price: 299,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
    description: "Fiery schezwan sauce, dynamic mozzarella, onions, sweet bell peppers, and fresh greens."
  },
  "smokey-bbq": {
    id: "smokey-bbq",
    name: "Smokey BBQ Veggie",
    price: 299,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=80",
    description: "Rich smokey BBQ base, melted mozzarella, loaded red onions, golden sweet corn, and BBQ drizzle."
  },
  "paneer-makhni": {
    id: "paneer-makhni",
    name: "Paneer Makhni Masala",
    price: 299,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80",
    description: "Indian style Makhni sauce, premium marinated paneer cubes, capsicum, red onions, and tomatoes."
  },
  "overloaded-veggies": {
    id: "overloaded-veggies",
    name: "Overloaded Veggies",
    price: 299,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=80",
    description: "Black olives, mushrooms, sweet corn, red onions, tri-color bell peppers, and jalapeños."
  },
  "crispy-veg-burger": {
    id: "crispy-veg-burger",
    name: "Crispy Veg Burger",
    price: 149,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80",
    description: "Crispy mixed vegetable patty, fresh lettuce, tomatoes, and creamy classic mayonnaise."
  },
  "spicy-paneer-burger": {
    id: "spicy-paneer-burger",
    name: "Spicy Paneer Burger",
    price: 189,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
    description: "Spicy marinated paneer patty, layered with spicy dressing, melted cheese, and sliced onions."
  },
  "garlic-bread-stix": {
    id: "garlic-bread-stix",
    name: "Garlic Bread Stix",
    price: 119,
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=500&auto=format&fit=crop&q=80",
    description: "Freshly baked garlic bread sticks served warm with creamy dynamic dipping sauce."
  },
  "cheese-garlic-bread": {
    id: "cheese-garlic-bread",
    name: "Cheese Garlic Bread",
    price: 149,
    image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=500&auto=format&fit=crop&q=80",
    description: "Toasted thick bread slices loaded with garlic butter, fresh parsley, and gooey melted mozzarella."
  },
  "creamy-mushroom-penne": {
    id: "creamy-mushroom-penne",
    name: "Creamy Mushroom Penne",
    price: 249,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
    description: "Penne tossed in a rich, creamy white parmesan sauce loaded with fresh button mushrooms and garlic herbs."
  },
  "spiced-arrabbiata": {
    id: "spiced-arrabbiata",
    name: "Spiced Arrabbiata Pasta",
    price: 229,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80",
    description: "Penne pasta in a fiery, spiced San Marzano tomato sauce infused with fresh garlic, chili flakes, and basil leaves."
  },
  "warm-brownie": {
    id: "warm-brownie",
    name: "Warm Chocolate Brownie",
    price: 129,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&auto=format&fit=crop&q=80",
    description: "Rich, dense chocolate brownie served warm with a shiny, gooey dark chocolate glaze on top."
  },
  "choco-volcano": {
    id: "choco-volcano",
    name: "Choco Volcano Cake",
    price: 139,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
    description: "Freshly baked soft chocolate sponge cake with a molten, oozing chocolate lava core inside."
  },
  "water-bottle": {
    id: "water-bottle",
    name: "Purified Water Bottle",
    price: 40,
    image: "/food/bisleri_water_bottle.png",
    description: "Ice-cold premium mineral packaged drinking water for refreshment."
  },
  "pepsi-cola": {
    id: "pepsi-cola",
    name: "Pepsi Cola (500ml)",
    price: 60,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80",
    description: "500ml bottle of cold, sparkling carbonated Pepsi cola beverage."
  }
}

export default function Cart() {
  const navigate = useNavigate()
  const { replaceCart } = useCart()

  // State Management
  const [cartItems, setCartItems] = useState([])
  const [orderTypeInfo, setOrderTypeInfo] = useState("Order for Today 11:30")
  const [showCouponModal, setShowCouponModal] = useState(false)
  const [showGiftCardModal, setShowGiftCardModal] = useState(false)
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [appliedGiftCard, setAppliedGiftCard] = useState(null)

  // Resolve Cart items from userCart localStorage on mount
  useEffect(() => {
    const resolveAndSyncCart = () => {
      const stored = JSON.parse(localStorage.getItem("userCart") || "{}")
      const list = []
      
      Object.entries(stored).forEach(([key, qty]) => {
        if (qty <= 0) return
        
        let baseId = key
        let size = ""
        
        const matchedBaseId = Object.keys(ALL_PRODUCTS).find(id => key.startsWith(id))
        if (matchedBaseId) {
          baseId = matchedBaseId
          if (key.length > matchedBaseId.length) {
            size = key.slice(matchedBaseId.length + 1)
          }
        }
        
        const prod = ALL_PRODUCTS[baseId]
        if (prod) {
          list.push({
            key,
            id: key,
            itemId: baseId,
            name: size ? `${prod.name} (${size})` : prod.name,
            price: prod.price,
            image: prod.image,
            description: prod.description,
            size,
            quantity: qty,
            restaurant: "Papa Veg Pizza",
            restaurantId: "papa-veg-pizza-1"
          })
        }
      })
      
      setCartItems(list)
      replaceCart(list)
    }

    resolveAndSyncCart()
    
    // Listen for updates from other tabs/pages
    window.addEventListener("cartUpdated", resolveAndSyncCart)
    return () => window.removeEventListener("cartUpdated", resolveAndSyncCart)
  }, [replaceCart])

  // Resolve active location / delivery slot
  useEffect(() => {
    const activeService = localStorage.getItem("activeService") || "delivery"
    if (activeService === "takeaway") {
      const hut = localStorage.getItem("takeawayHut") || "Nearest Outlet"
      setOrderTypeInfo(`Takeaway: ${hut}`)
    } else if (activeService === "incar") {
      const car = localStorage.getItem("carNumber") || "Vehicle Dining"
      setOrderTypeInfo(`In-Car Dining: ${car}`)
    } else {
      // For delivery and generic case, show Today 11:30 to match Image 1
      setOrderTypeInfo("Order for Today 11:30")
    }
  }, [])

  // Modifying Item Quantity Handler
  const updateItemQty = (key, delta) => {
    const stored = JSON.parse(localStorage.getItem("userCart") || "{}")
    const newQty = (stored[key] || 0) + delta
    
    if (newQty <= 0) {
      delete stored[key]
    } else {
      stored[key] = newQty
    }
    
    localStorage.setItem("userCart", JSON.stringify(stored))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  // Calculate pricing sums
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  let discount = 0
  if (appliedCoupon) {
    if (subtotal >= appliedCoupon.minOrder) {
      discount = appliedCoupon.discount
    }
  }

  let giftCardValue = 0
  if (appliedGiftCard) {
    giftCardValue = Math.min(appliedGiftCard.value, subtotal - discount)
  }

  const total = Math.max(0, subtotal - discount - giftCardValue)

  return (
    <div className="min-h-screen bg-zinc-50 pb-36 text-zinc-900 font-sans flex flex-col">
      {/* Custom Global Scrollbar Hider and Styling injection */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none !important; }
        .hide-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
        `
      }} />

      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-zinc-200 px-4 py-3 flex items-center justify-between z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="p-1 text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors active:scale-95"
        >
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-[17px] font-extrabold text-zinc-900 absolute left-1/2 -translate-x-1/2">Your Cart</h1>
        <div className="w-8" />
      </header>

      {/* Order Type / Schedule Card */}
      <div className="flex items-center gap-3 bg-white px-5 py-4 border-b border-zinc-200 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500">
          <Clock size={18} />
        </div>
        <span className="text-[13px] font-bold text-zinc-800">{orderTypeInfo}</span>
      </div>

      {/* Order List Header */}
      <div className="flex justify-between items-center px-5 pt-6 pb-2">
        <h2 className="text-base font-extrabold text-zinc-900">Order List</h2>
        <button 
          onClick={() => navigate("/user/menu")} 
          className="text-emerald-600 font-extrabold text-sm hover:opacity-80 transition-opacity active:scale-95"
        >
          + Add more
        </button>
      </div>

      {/* Cart Items Area */}
      <div className="bg-white border-y border-zinc-200 divide-y divide-zinc-100">
        {cartItems.length === 0 ? (
          <div className="py-16 px-6 text-center text-zinc-400 font-bold text-sm">
            Looks like you haven't added any item to your Cart yet
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.key} className="p-5 flex items-start gap-4">
              {/* Veg Indicator Square Box */}
              <div className="mt-1.5 border-2 border-emerald-600 w-3.5 h-3.5 flex items-center justify-center shrink-0">
                <div className="bg-emerald-600 rounded-full w-1.5 h-1.5" />
              </div>
              
              {/* Info Details */}
              <div className="flex-1 text-left space-y-1">
                <h4 className="font-extrabold text-[14px] text-zinc-900 leading-tight">
                  {item.name}
                </h4>
                {item.size && (
                  <p className="text-[11px] text-zinc-500 font-semibold">
                    Size: {item.size}
                  </p>
                )}
                <p className="text-sm text-zinc-900 font-extrabold">
                  ₹{item.price * item.quantity}
                </p>
              </div>

              {/* Quantity Changer */}
              <div className="flex items-center border border-zinc-250 rounded-lg h-9 overflow-hidden bg-white shadow-xs">
                <button 
                  onClick={() => updateItemQty(item.key, -1)}
                  className="px-3 h-full flex items-center justify-center text-zinc-500 font-bold text-lg hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                >
                  -
                </button>
                <span className="px-2 font-extrabold text-xs text-zinc-800 min-w-[20px] text-center">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => updateItemQty(item.key, 1)}
                  className="px-3 h-full flex items-center justify-center text-zinc-500 font-bold text-lg hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Promos & Discounts Section */}
      <div className="mt-4 bg-white border-y border-zinc-200 divide-y divide-zinc-100">
        {/* Coupon Apply Row */}
        <div 
          onClick={() => !appliedCoupon && setShowCouponModal(true)}
          className="p-5 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-[22px] font-bold">local_offer</span>
            <div className="text-left">
              {appliedCoupon ? (
                <div>
                  <p className="text-sm font-extrabold text-zinc-900">
                    Coupon {appliedCoupon.code} applied!
                  </p>
                  <p className="text-xs text-emerald-600 font-bold">
                    ₹{discount} saved on this order
                  </p>
                </div>
              ) : (
                <p className="text-sm font-bold text-zinc-800">Apply Coupon</p>
              )}
            </div>
          </div>
          {appliedCoupon ? (
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setAppliedCoupon(null)
              }}
              className="text-red-500 text-xs font-bold hover:underline active:scale-95"
            >
              Remove
            </button>
          ) : (
            <span className="material-symbols-outlined text-emerald-600 text-xl font-bold">chevron_right</span>
          )}
        </div>

        {/* Gift Card Add Row */}
        <div 
          onClick={() => !appliedGiftCard && setShowGiftCardModal(true)}
          className="p-5 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-zinc-650 text-[22px]">featured_play_list</span>
            <div className="text-left">
              {appliedGiftCard ? (
                <div>
                  <p className="text-sm font-extrabold text-zinc-900">
                    Gift Card Applied
                  </p>
                  <p className="text-xs text-emerald-600 font-bold">
                    ₹{giftCardValue} balance used
                  </p>
                </div>
              ) : (
                <p className="text-sm font-bold text-zinc-800">Add Gift Card</p>
              )}
            </div>
          </div>
          {appliedGiftCard ? (
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setAppliedGiftCard(null)
              }}
              className="text-red-500 text-xs font-bold hover:underline active:scale-95"
            >
              Remove
            </button>
          ) : (
            <span className="material-symbols-outlined text-emerald-600 text-xl font-bold">chevron_right</span>
          )}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 px-5 pt-3 pb-8 z-30 flex flex-col gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-bold text-zinc-400">
            Prices are GST-inclusive
          </span>
          <span className="text-sm font-black text-zinc-950">
            Total: ₹{total}
          </span>
        </div>
        
        <button
          onClick={() => {
            if (cartItems.length > 0) {
              navigate("/user/cart/checkout")
            }
          }}
          disabled={cartItems.length === 0}
          className={`w-full h-12 rounded-xl text-xs font-extrabold transition-all uppercase tracking-wider ${
            cartItems.length > 0 
              ? "bg-[#155E37] text-white hover:bg-emerald-800 active:scale-98 shadow-md cursor-pointer" 
              : "bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-250"
          }`}
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Coupon Modal Overlay */}
      <ApplyCoupon
        show={showCouponModal}
        onClose={() => setShowCouponModal(false)}
        onApply={(coupon) => setAppliedCoupon(coupon)}
        cartTotal={subtotal}
      />

      {/* Gift Card Modal Overlay */}
      <AddGiftCard
        show={showGiftCardModal}
        onClose={() => setShowGiftCardModal(false)}
        onApply={(card) => setAppliedGiftCard(card)}
      />
    </div>
  )
}
