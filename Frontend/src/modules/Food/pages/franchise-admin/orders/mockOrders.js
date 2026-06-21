// Mock database for Franchise Live and Completed Orders
// Uses Indian names, stores, rupees, and relative timestamps for real-time accuracy.

export const mockStores = [
  { storeId: "ST-001", storeName: "Papa Veg Pizza - Connaught Place, Delhi" },
  { storeId: "ST-002", storeName: "Papa Veg Pizza - Indiranagar, Bengaluru" },
  { storeId: "ST-003", storeName: "Papa Veg Pizza - Salt Lake, Kolkata" },
  { storeId: "ST-004", storeName: "Papa Veg Pizza - Gachibowli, Hyderabad" },
  { storeId: "ST-005", storeName: "Papa Veg Pizza - Bandra West, Mumbai" },
];

export const mockDeliveryPartners = [
  {
    riderId: "RD-101",
    name: "Rahul Sharma",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    vehicleType: "Electric Bike",
    rating: 4.9,
    totalDeliveries: 1240,
    available: true,
    phone: "+91 98765 43210",
  },
  {
    riderId: "RD-102",
    name: "Amit Patel",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    vehicleType: "Motorcycle",
    rating: 4.7,
    totalDeliveries: 890,
    available: true,
    phone: "+91 91234 56789",
  },
  {
    riderId: "RD-103",
    name: "Karan Singh",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    vehicleType: "Electric Scooter",
    rating: 4.8,
    totalDeliveries: 530,
    available: true,
    phone: "+91 98123 45670",
  },
  {
    riderId: "RD-104",
    name: "Suresh Raina",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    vehicleType: "Bicycle",
    rating: 4.6,
    totalDeliveries: 310,
    available: true,
    phone: "+91 76543 21098",
  },
  {
    riderId: "RD-105",
    name: "Vikram Malhotra",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    vehicleType: "Motorcycle",
    rating: 4.9,
    totalDeliveries: 1540,
    available: false,
    phone: "+91 87654 32109",
  },
];

// Helper to generate relative time
const minutesAgo = (mins) => new Date(Date.now() - mins * 60 * 1000).toISOString();
const minutesHence = (mins) => new Date(Date.now() + mins * 60 * 1000).toISOString();
const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

export const mockOrders = [
  // Active Orders (Live Dashboard)
  {
    id: "ORD-98421",
    orderNumber: "PVP-98421",
    customer: {
      name: "Rajesh Kumar",
      phone: "+91 99887 76655",
      email: "rajesh.kumar@gmail.com",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      address: "Flat 402, Sector 15, Dwarka, New Delhi - 110075",
      coords: { lat: 28.5921, lng: 77.0465 }
    },
    store: {
      storeId: "ST-001",
      name: "Connaught Place, Delhi"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(8),
    estimatedDeliveryTime: minutesHence(22),
    orderStatus: "Preparing", 
    pricing: {
      subtotal: 549,
      tax: 27.45,
      deliveryFee: 40,
      discount: 50,
      total: 566.45
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid", 
    transactionId: "TXN-UPI984210928",
    couponApplied: "PAPA50",
    deliveryPartner: null,
    items: [
      {
        productId: "p1",
        productName: "Double Cheese Margherita Pizza",
        variant: "Medium / Wheat Crust",
        quantity: 1,
        price: 399,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Extra oregano packets, please make it spicy."
      },
      {
        productId: "p2",
        productName: "Cheesy Garlic Bread",
        variant: "Regular",
        quantity: 1,
        price: 150,
        image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=150&q=80",
        specialInstructions: ""
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(8) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(7) },
      { status: "Preparing", updatedBy: "Chef Ramesh", timestamp: minutesAgo(6) }
    ],
    remarks: "Customer requested contactless delivery."
  },
  {
    id: "ORD-98422",
    orderNumber: "PVP-98422",
    customer: {
      name: "Sunita Gupta",
      phone: "+91 98765 01234",
      email: "sunita.g@outlook.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "House 12, Road 4, Indiranagar, Bengaluru - 560038",
      coords: { lat: 12.9716, lng: 77.5946 }
    },
    store: {
      storeId: "ST-002",
      name: "Indiranagar, Bengaluru"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(42),
    estimatedDeliveryTime: minutesAgo(12), 
    orderStatus: "Baking",
    pricing: {
      subtotal: 699,
      tax: 34.95,
      deliveryFee: 30,
      discount: 0,
      total: 763.95
    },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    transactionId: "TXN-CRD552810931",
    couponApplied: null,
    deliveryPartner: null,
    items: [
      {
        productId: "p3",
        productName: "Veg Supreme Burst Pizza",
        variant: "Large",
        quantity: 1,
        price: 699,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Do not add onions."
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(42) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(40) },
      { status: "Preparing", updatedBy: "Chef Vinod", timestamp: minutesAgo(35) },
      { status: "Baking", updatedBy: "Chef Vinod", timestamp: minutesAgo(20) }
    ],
    remarks: "Keep it warm."
  },

  // DELIVERED ORDERS (Completed Orders Dashboard)
  {
    id: "ORD-98401",
    orderNumber: "PVP-98401",
    customer: {
      name: "Amit Sen",
      phone: "+91 98402 12903",
      email: "amit.sen@gmail.com",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      address: "24, Park Street, Kolkata - 700016",
      coords: { lat: 22.5488, lng: 88.3526 }
    },
    store: {
      storeId: "ST-003",
      name: "Salt Lake, Kolkata"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(120),
    deliveredAt: minutesAgo(85), // Delivery time = 35 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 499,
      tax: 24.95,
      deliveryFee: 40,
      discount: 40,
      total: 523.95
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI984012290",
    couponApplied: "VEG10",
    deliveryPartner: {
      riderId: "RD-102",
      name: "Amit Patel",
      vehicleType: "Motorcycle",
      phone: "+91 91234 56789"
    },
    items: [
      {
        productId: "p4",
        productName: "Tandoori Paneer Pizza",
        variant: "Medium / Thin Crust",
        quantity: 1,
        price: 499,
        image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=150&q=80",
        specialInstructions: ""
      }
    ],
    rating: {
      rating: 5,
      review: "Awesome hot pizza delivered on time!",
      sentiment: "Positive", // Positive, Neutral, Negative
      createdAt: minutesAgo(80),
      metrics: {
        deliveryExperience: 5,
        foodQuality: 5,
        packaging: 5,
        overallSatisfaction: 5
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(120) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(118) },
      { status: "Preparing", updatedBy: "Chef Dev", timestamp: minutesAgo(115) },
      { status: "Baking", updatedBy: "Chef Dev", timestamp: minutesAgo(105) },
      { status: "Packed", updatedBy: "Chef Dev", timestamp: minutesAgo(98) },
      { status: "Ready For Pickup", updatedBy: "Chef Dev", timestamp: minutesAgo(96) },
      { status: "Rider Assigned", updatedBy: "System", timestamp: minutesAgo(95) },
      { status: "Out For Delivery", updatedBy: "Rider Amit Patel", timestamp: minutesAgo(93) },
      { status: "Delivered", updatedBy: "Rider Amit Patel", timestamp: minutesAgo(85) }
    ]
  },
  {
    id: "ORD-98402",
    orderNumber: "PVP-98402",
    customer: {
      name: "Meera Nair",
      phone: "+91 70029 88390",
      email: "meera.nair@yahoo.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      address: "House 35, Block B, Indiranagar, Bengaluru - 560038",
      coords: { lat: 12.9784, lng: 77.6408 }
    },
    store: {
      storeId: "ST-002",
      name: "Indiranagar, Bengaluru"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(180),
    deliveredAt: minutesAgo(142), // 38 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 850,
      tax: 42.50,
      deliveryFee: 30,
      discount: 100,
      total: 822.50
    },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    transactionId: "TXN-CRD84023910",
    couponApplied: "SUPERFRANCHISE",
    deliveryPartner: {
      riderId: "RD-101",
      name: "Rahul Sharma",
      vehicleType: "Electric Bike",
      phone: "+91 98765 43210"
    },
    items: [
      {
        productId: "p3",
        productName: "Veg Supreme Burst Pizza",
        variant: "Large",
        quantity: 1,
        price: 699,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80"
      },
      {
        productId: "p2",
        productName: "Cheesy Garlic Bread",
        variant: "Regular",
        quantity: 1,
        price: 151,
        image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 4,
      review: "Good food but delivery took longer than expected.",
      sentiment: "Neutral",
      createdAt: minutesAgo(135),
      metrics: {
        deliveryExperience: 3,
        foodQuality: 5,
        packaging: 4,
        overallSatisfaction: 4
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(180) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(178) },
      { status: "Preparing", updatedBy: "Chef Vinod", timestamp: minutesAgo(175) },
      { status: "Baking", updatedBy: "Chef Vinod", timestamp: minutesAgo(160) },
      { status: "Packed", updatedBy: "Chef Vinod", timestamp: minutesAgo(152) },
      { status: "Ready For Pickup", updatedBy: "Chef Vinod", timestamp: minutesAgo(150) },
      { status: "Rider Assigned", updatedBy: "System", timestamp: minutesAgo(149) },
      { status: "Out For Delivery", updatedBy: "Rider Rahul Sharma", timestamp: minutesAgo(148) },
      { status: "Delivered", updatedBy: "Rider Rahul Sharma", timestamp: minutesAgo(142) }
    ]
  },
  {
    id: "ORD-98403",
    orderNumber: "PVP-98403",
    customer: {
      name: "Karan Johar",
      phone: "+91 98840 12289",
      email: "karan.johar@dharmaprod.in",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
      address: "Bungalow 4, Juhu Scheme, Mumbai - 400049",
      coords: { lat: 19.1026, lng: 72.8242 }
    },
    store: {
      storeId: "ST-005",
      name: "Bandra West, Mumbai"
    },
    orderType: "Delivery",
    placedAt: daysAgo(1),
    deliveredAt: new Date(new Date(daysAgo(1)).getTime() + 32 * 60 * 1000).toISOString(), // 32 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 399,
      tax: 19.95,
      deliveryFee: 50,
      discount: 0,
      total: 468.95
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98403391",
    couponApplied: null,
    deliveryPartner: {
      riderId: "RD-103",
      name: "Karan Singh",
      vehicleType: "Electric Scooter",
      phone: "+91 98123 45670"
    },
    items: [
      {
        productId: "p1",
        productName: "Double Cheese Margherita Pizza",
        variant: "Medium / Regular",
        quantity: 1,
        price: 399,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 5,
      review: "Extra cheesy as requested. Excellent service!",
      sentiment: "Positive",
      createdAt: new Date(new Date(daysAgo(1)).getTime() + 45 * 60 * 1000).toISOString(),
      metrics: {
        deliveryExperience: 5,
        foodQuality: 5,
        packaging: 5,
        overallSatisfaction: 5
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(1) }
    ]
  },
  {
    id: "ORD-98404",
    orderNumber: "PVP-98404",
    customer: {
      name: "Neha Dhupia",
      phone: "+91 88390 12849",
      email: "neha.dhupia@gmail.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "E-102, Bandra Stand, Mumbai - 400050",
      coords: { lat: 19.0436, lng: 72.8231 }
    },
    store: {
      storeId: "ST-005",
      name: "Bandra West, Mumbai"
    },
    orderType: "Delivery",
    placedAt: daysAgo(3),
    deliveredAt: new Date(new Date(daysAgo(3)).getTime() + 45 * 60 * 1000).toISOString(), // 45 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 1098,
      tax: 54.90,
      deliveryFee: 50,
      discount: 100,
      total: 1102.90
    },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    transactionId: "TXN-CRD98404192",
    couponApplied: "SUPERFRANCHISE",
    deliveryPartner: {
      riderId: "RD-105",
      name: "Vikram Malhotra",
      vehicleType: "Motorcycle",
      phone: "+91 87654 32109"
    },
    items: [
      {
        productId: "p1",
        productName: "Double Cheese Margherita Pizza",
        variant: "Medium",
        quantity: 1,
        price: 399,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80"
      },
      {
        productId: "p3",
        productName: "Veg Supreme Burst Pizza",
        variant: "Large",
        quantity: 1,
        price: 699,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 3,
      review: "Pizza was cold. Disappointed.",
      sentiment: "Negative",
      createdAt: new Date(new Date(daysAgo(3)).getTime() + 60 * 60 * 1000).toISOString(),
      metrics: {
        deliveryExperience: 2,
        foodQuality: 3,
        packaging: 2,
        overallSatisfaction: 3
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(3) }
    ]
  },
  {
    id: "ORD-98405",
    orderNumber: "PVP-98405",
    customer: {
      name: "Sanjay Dutt",
      phone: "+91 99911 22334",
      email: "sanjay.dutt@gmail.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      address: "Imperial heights, Pali Hill, Bandra West, Mumbai - 400050",
      coords: { lat: 19.0664, lng: 72.8259 }
    },
    store: {
      storeId: "ST-005",
      name: "Bandra West, Mumbai"
    },
    orderType: "Delivery",
    placedAt: daysAgo(5),
    deliveredAt: new Date(new Date(daysAgo(5)).getTime() + 28 * 60 * 1000).toISOString(), // 28 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 350,
      tax: 17.50,
      deliveryFee: 40,
      discount: 0,
      total: 407.50
    },
    paymentMethod: "COD",
    paymentStatus: "Paid",
    transactionId: null,
    couponApplied: null,
    deliveryPartner: {
      riderId: "RD-104",
      name: "Suresh Raina",
      vehicleType: "Bicycle",
      phone: "+91 76543 21098"
    },
    items: [
      {
        productId: "p2",
        productName: "Cheesy Garlic Bread",
        variant: "Regular",
        quantity: 2,
        price: 150,
        image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 5,
      review: "Extremely fast bicycle delivery. Keep it up!",
      sentiment: "Positive",
      createdAt: new Date(new Date(daysAgo(5)).getTime() + 35 * 60 * 1000).toISOString(),
      metrics: {
        deliveryExperience: 5,
        foodQuality: 5,
        packaging: 5,
        overallSatisfaction: 5
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(5) }
    ]
  },
  {
    id: "ORD-98406",
    orderNumber: "PVP-98406",
    customer: {
      name: "Anil Kapoor",
      phone: "+91 98201 98201",
      email: "anil.k@kapoor.com",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
      address: "JVPD Scheme, Ville Parle, Mumbai - 400049",
      coords: { lat: 19.1086, lng: 72.8315 }
    },
    store: {
      storeId: "ST-004",
      name: "Gachibowli, Hyderabad"
    },
    orderType: "Delivery",
    placedAt: daysAgo(10),
    deliveredAt: new Date(new Date(daysAgo(10)).getTime() + 33 * 60 * 1000).toISOString(), // 33 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 1048,
      tax: 52.40,
      deliveryFee: 40,
      discount: 100,
      total: 1040.40
    },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    transactionId: "TXN-CRD98406180",
    couponApplied: "SUPERFRANCHISE",
    deliveryPartner: {
      riderId: "RD-101",
      name: "Rahul Sharma",
      vehicleType: "Electric Bike",
      phone: "+91 98765 43210"
    },
    items: [
      {
        productId: "p2",
        productName: "Cheesy Garlic Bread",
        variant: "Regular",
        quantity: 2,
        price: 150,
        image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=150&q=80"
      },
      {
        productId: "p4",
        productName: "Tandoori Paneer Pizza",
        variant: "Large",
        quantity: 1,
        price: 748,
        image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 4,
      review: "Very professional. Pizzas were great.",
      sentiment: "Positive",
      createdAt: new Date(new Date(daysAgo(10)).getTime() + 50 * 60 * 1000).toISOString(),
      metrics: {
        deliveryExperience: 4,
        foodQuality: 5,
        packaging: 4,
        overallSatisfaction: 4
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(10) }
    ]
  },
  {
    id: "ORD-98407",
    orderNumber: "PVP-98407",
    customer: {
      name: "Deepika Padukone",
      phone: "+91 98888 88888",
      email: "deepika@padukone.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "Beaubell, Prabhadevi, Mumbai - 400025",
      coords: { lat: 19.0178, lng: 72.8254 }
    },
    store: {
      storeId: "ST-001",
      name: "Connaught Place, Delhi"
    },
    orderType: "Delivery",
    placedAt: daysAgo(15),
    deliveredAt: new Date(new Date(daysAgo(15)).getTime() + 29 * 60 * 1000).toISOString(), // 29 mins
    orderStatus: "Delivered",
    pricing: {
      subtotal: 699,
      tax: 34.95,
      deliveryFee: 40,
      discount: 50,
      total: 723.95
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI9840718392",
    couponApplied: "PAPA50",
    deliveryPartner: {
      riderId: "RD-102",
      name: "Amit Patel",
      vehicleType: "Motorcycle",
      phone: "+91 91234 56789"
    },
    items: [
      {
        productId: "p3",
        productName: "Veg Supreme Burst Pizza",
        variant: "Large",
        quantity: 1,
        price: 699,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80"
      }
    ],
    rating: {
      rating: 5,
      review: "Extremely tasty, standard packaging was neat.",
      sentiment: "Positive",
      createdAt: new Date(new Date(daysAgo(15)).getTime() + 40 * 60 * 1000).toISOString(),
      metrics: {
        deliveryExperience: 5,
        foodQuality: 5,
        packaging: 5,
        overallSatisfaction: 5
      }
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(15) }
    ]
  },
  // CANCELLED ORDERS
  {
    id: "ORD-C001",
    orderNumber: "PVP-C001",
    customer: {
      name: "Rohan Gupta",
      phone: "+91 98765 43210",
      email: "rohan.g@gmail.com",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      address: "Block C-2, Rajouri Garden, New Delhi - 110027",
      coords: { lat: 28.6415, lng: 77.1218 }
    },
    store: { storeId: "ST-001", name: "Connaught Place, Delhi" },
    orderType: "Delivery",
    placedAt: minutesAgo(45),
    createdAt: minutesAgo(45),
    orderStatus: "Cancelled",
    pricing: { subtotal: 450, tax: 22.50, deliveryFee: 40, discount: 0, total: 512.50 },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI985012391",
    items: [
      { productName: "Double Cheese Margherita Pizza", variant: "Medium", quantity: 1, price: 399 },
      { productName: "Pepsi Can", variant: "330ml", quantity: 1, price: 51 }
    ],
    cancellation: {
      cancelledBy: "Rohan Gupta",
      role: "CUSTOMER",
      reason: "Customer Request",
      remarks: "Ordered by mistake, wanted thin crust instead.",
      refundRequired: true,
      refundAmount: 512.50,
      refundStatus: "Pending",
      createdAt: minutesAgo(30)
    },
    refund: {
      refundRequired: true,
      refundAmount: 512.50,
      refundMethod: "UPI",
      refundStatus: "Pending",
      transactionReference: "",
      initiatedAt: "",
      completedAt: ""
    },
    investigation: {
      caseStatus: "Open",
      assignedStaff: "Amit Patel",
      reason: "Disputed customer request cancellation.",
      priority: "Medium",
      description: "Customer claims they cancelled within 60 seconds, but store claims preparation already started.",
      attachments: [],
      notes: "Reviewing store logs to check when preparation was marked.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: minutesAgo(30) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(45) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(43) },
      { status: "Preparing", updatedBy: "Store Admin", timestamp: minutesAgo(40) },
      { status: "Cancellation Initiated", updatedBy: "Customer", timestamp: minutesAgo(30) },
      { status: "Cancelled", updatedBy: "System", timestamp: minutesAgo(30) }
    ]
  },
  {
    id: "ORD-C002",
    orderNumber: "PVP-C002",
    customer: {
      name: "Pooja Sharma",
      phone: "+91 99887 76655",
      email: "pooja.sharma@yahoo.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "Flat 12B, Prestige Heights, Indiranagar, Bengaluru - 560038",
      coords: { lat: 12.9716, lng: 77.5946 }
    },
    store: { storeId: "ST-002", name: "Indiranagar, Bengaluru" },
    orderType: "Delivery",
    placedAt: daysAgo(0),
    createdAt: daysAgo(0),
    orderStatus: "Cancelled",
    pricing: { subtotal: 699, tax: 35.00, deliveryFee: 30, discount: 50, total: 714.00 },
    paymentMethod: "Card",
    paymentStatus: "Paid",
    transactionId: "TXN-CRD98502819",
    items: [
      { productName: "Veg Supreme Burst Pizza", variant: "Large", quantity: 1, price: 699 }
    ],
    cancellation: {
      cancelledBy: "Store Manager Ramesh",
      role: "STORE",
      reason: "Out Of Stock",
      remarks: "Fresh dough ran out due to sudden heavy ordering evening rush.",
      refundRequired: true,
      refundAmount: 714.00,
      refundStatus: "Completed",
      createdAt: minutesAgo(120)
    },
    refund: {
      refundRequired: true,
      refundAmount: 714.00,
      refundMethod: "Card",
      refundStatus: "Completed",
      transactionReference: "REF-CRD98502819X",
      initiatedAt: minutesAgo(110),
      completedAt: minutesAgo(90)
    },
    investigation: {
      caseStatus: "Closed",
      assignedStaff: "Suresh Raina",
      reason: "Out of stock inventory validation.",
      priority: "Low",
      description: "Store ran out of dough. Inventory stock was adjusted manually.",
      attachments: [],
      notes: "Verified restock logs. Refund successfully completed.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: minutesAgo(120) },
        { action: "Refund Processed", staff: "Store Manager Ramesh", timestamp: minutesAgo(110) },
        { action: "Case Closed", staff: "Suresh Raina", timestamp: minutesAgo(90) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(130) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(128) },
      { status: "Cancellation Initiated", updatedBy: "Store Manager Ramesh", timestamp: minutesAgo(120) },
      { status: "Cancelled", updatedBy: "System", timestamp: minutesAgo(120) }
    ]
  },
  {
    id: "ORD-C003",
    orderNumber: "PVP-C003",
    customer: {
      name: "Abhishek Singh",
      phone: "+91 88776 65544",
      email: "abhishek.s@gmail.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      address: "Sector 3, Salt Lake City, Kolkata - 700091",
      coords: { lat: 22.5726, lng: 88.4074 }
    },
    store: { storeId: "ST-003", name: "Salt Lake, Kolkata" },
    orderType: "Delivery",
    placedAt: daysAgo(1),
    createdAt: daysAgo(1),
    orderStatus: "Cancelled",
    pricing: { subtotal: 350, tax: 17.50, deliveryFee: 40, discount: 0, total: 407.50 },
    paymentMethod: "Wallet",
    paymentStatus: "Paid",
    transactionId: "TXN-WLT98503102",
    items: [
      { productName: "Cheesy Garlic Bread", variant: "Regular", quantity: 2, price: 150 }
    ],
    cancellation: {
      cancelledBy: "Chef Dev",
      role: "STORE",
      reason: "Kitchen Issue",
      remarks: "Kitchen oven malfunction. Emergency maintenance called.",
      refundRequired: true,
      refundAmount: 407.50,
      refundStatus: "Initiated",
      createdAt: daysAgo(1)
    },
    refund: {
      refundRequired: true,
      refundAmount: 407.50,
      refundMethod: "Wallet",
      refundStatus: "Initiated",
      transactionReference: "REF-WLT98503102A",
      initiatedAt: daysAgo(1),
      completedAt: ""
    },
    investigation: {
      caseStatus: "Under Review",
      assignedStaff: "Amit Patel",
      reason: "Kitchen equipment downtime incident.",
      priority: "High",
      description: "Oven temperature regulator failed. Store was offline for 3 hours.",
      attachments: [],
      notes: "Awaiting maintenance engineer clearance report.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: daysAgo(1) },
        { action: "Refund Initiated", staff: "Chef Dev", timestamp: daysAgo(1) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(1) },
      { status: "Confirmed", updatedBy: "System", timestamp: daysAgo(1) },
      { status: "Preparing", updatedBy: "Chef Dev", timestamp: daysAgo(1) },
      { status: "Cancellation Initiated", updatedBy: "Chef Dev", timestamp: daysAgo(1) },
      { status: "Cancelled", updatedBy: "System", timestamp: daysAgo(1) }
    ]
  },
  {
    id: "ORD-C004",
    orderNumber: "PVP-C004",
    customer: {
      name: "Neha Dhupia",
      phone: "+91 97766 55443",
      email: "neha.d@gmail.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "Bungalow 7, Juhu Scheme, Mumbai - 400049",
      coords: { lat: 19.1026, lng: 72.8242 }
    },
    store: { storeId: "ST-005", name: "Bandra West, Mumbai" },
    orderType: "Delivery",
    placedAt: daysAgo(2),
    createdAt: daysAgo(2),
    orderStatus: "Cancelled",
    pricing: { subtotal: 550, tax: 27.50, deliveryFee: 40, discount: 0, total: 617.50 },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98504281",
    items: [
      { productName: "Double Cheese Margherita Pizza", variant: "Medium", quantity: 1, price: 399 },
      { productName: "Cheesy Garlic Bread", variant: "Regular", quantity: 1, price: 150 }
    ],
    cancellation: {
      cancelledBy: "Payment Gateway",
      role: "SYSTEM",
      reason: "Payment Failure",
      remarks: "Gateway Timeout. Bank deducted funds but status callback was delayed beyond checkout limit.",
      refundRequired: true,
      refundAmount: 617.50,
      refundStatus: "Pending",
      createdAt: daysAgo(2)
    },
    refund: {
      refundRequired: true,
      refundAmount: 617.50,
      refundMethod: "UPI",
      refundStatus: "Pending",
      transactionReference: "",
      initiatedAt: "",
      completedAt: ""
    },
    investigation: {
      caseStatus: "Open",
      assignedStaff: "Karan Johar",
      reason: "Double charge dispute.",
      priority: "Medium",
      description: "Customer charged twice. One succeeded on gateway but cancelled by client side scheduler timeout.",
      attachments: [],
      notes: "Verifying settlement reports from Razorpay dashboard.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: daysAgo(2) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(2) },
      { status: "Cancellation Initiated", updatedBy: "System", timestamp: daysAgo(2) },
      { status: "Cancelled", updatedBy: "System", timestamp: daysAgo(2) }
    ]
  },
  {
    id: "ORD-C005",
    orderNumber: "PVP-C005",
    customer: {
      name: "Sanjay Dutt",
      phone: "+91 96655 44332",
      email: "sanjay.d@yahoo.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      address: "Imperial heights, Pali Hill, Mumbai - 400050",
      coords: { lat: 19.0664, lng: 72.8259 }
    },
    store: { storeId: "ST-005", name: "Bandra West, Mumbai" },
    orderType: "Delivery",
    placedAt: daysAgo(3),
    createdAt: daysAgo(3),
    orderStatus: "Cancelled",
    pricing: { subtotal: 399, tax: 20.00, deliveryFee: 40, discount: 0, total: 459.00 },
    paymentMethod: "UPI",
    paymentStatus: "Failed",
    transactionId: "TXN-UPIFailed882",
    items: [
      { productName: "Tandoori Paneer Pizza", variant: "Medium", quantity: 1, price: 399 }
    ],
    cancellation: {
      cancelledBy: "System Scheduler",
      role: "SYSTEM",
      reason: "Payment Failure",
      remarks: "User abandoned payment sheet or UPI PIN validation failed.",
      refundRequired: false,
      refundAmount: 0,
      refundStatus: "Rejected",
      createdAt: daysAgo(3)
    },
    refund: {
      refundRequired: false,
      refundAmount: 0,
      refundMethod: "UPI",
      refundStatus: "Rejected",
      transactionReference: "",
      initiatedAt: "",
      completedAt: ""
    },
    investigation: {
      caseStatus: "Closed",
      assignedStaff: "System",
      reason: "Auto-close on payment failure.",
      priority: "Low",
      description: "Abandoned checkout sheet. No money was captured.",
      attachments: [],
      notes: "Confirmed with Razorpay logs: transaction marked as failed by customer bank.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: daysAgo(3) },
        { action: "Case Closed", staff: "System", timestamp: daysAgo(3) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(3) },
      { status: "Cancelled", updatedBy: "System", timestamp: daysAgo(3) }
    ]
  },
  {
    id: "ORD-C006",
    orderNumber: "PVP-C006",
    customer: {
      name: "Deepika Padukone",
      phone: "+91 95544 33221",
      email: "deepika.p@outlook.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      address: "Beaubell, Prabhadevi, Mumbai - 400025",
      coords: { lat: 19.0178, lng: 72.8254 }
    },
    store: { storeId: "ST-001", name: "Connaught Place, Delhi" },
    orderType: "Delivery",
    placedAt: daysAgo(4),
    createdAt: daysAgo(4),
    orderStatus: "Cancelled",
    pricing: { subtotal: 899, tax: 45.00, deliveryFee: 40, discount: 100, total: 884.00 },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98506192",
    items: [
      { productName: "Veg Supreme Burst Pizza", variant: "Large", quantity: 1, price: 699 },
      { productName: "Stuffed Garlic Bread", variant: "Regular", quantity: 1, price: 200 }
    ],
    cancellation: {
      cancelledBy: "Deepika Padukone",
      role: "CUSTOMER",
      reason: "Customer Request",
      remarks: "Guests cancelled, no longer need such a large pizza.",
      refundRequired: true,
      refundAmount: 884.00,
      refundStatus: "Pending",
      createdAt: daysAgo(4)
    },
    refund: {
      refundRequired: true,
      refundAmount: 884.00,
      refundMethod: "UPI",
      refundStatus: "Pending",
      transactionReference: "",
      initiatedAt: "",
      completedAt: ""
    },
    investigation: {
      caseStatus: "Open",
      assignedStaff: "Amit Patel",
      reason: "High amount customer refund claim.",
      priority: "High",
      description: "High ticket size refund. Customer claims cancellation happened within grace window.",
      attachments: [],
      notes: "Checking if order preparation was already in transit or packing phase.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: daysAgo(4) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(4) },
      { status: "Confirmed", updatedBy: "System", timestamp: daysAgo(4) },
      { status: "Preparing", updatedBy: "Chef vinod", timestamp: daysAgo(4) },
      { status: "Cancellation Initiated", updatedBy: "Customer", timestamp: daysAgo(4) },
      { status: "Cancelled", updatedBy: "System", timestamp: daysAgo(4) }
    ]
  },
  {
    id: "ORD-C007",
    orderNumber: "PVP-C007",
    customer: {
      name: "Amit Patel",
      phone: "+91 94433 22110",
      email: "amit.patel@gmail.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      address: "Plot 42, Sector 12, Dwarka, Delhi - 110078",
      coords: { lat: 28.5921, lng: 77.0465 }
    },
    store: { storeId: "ST-004", name: "Gachibowli, Hyderabad" },
    orderType: "Delivery",
    placedAt: daysAgo(5),
    createdAt: daysAgo(5),
    orderStatus: "Cancelled",
    pricing: { subtotal: 399, tax: 20.00, deliveryFee: 40, discount: 50, total: 409.00 },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98507819",
    items: [
      { productName: "Tandoori Paneer Pizza", variant: "Medium", quantity: 1, price: 399 }
    ],
    cancellation: {
      cancelledBy: "Store Manager Sunil",
      role: "STORE",
      reason: "Out Of Stock",
      remarks: "Paneer stock finished, customer refused toppings substitution.",
      refundRequired: true,
      refundAmount: 409.00,
      refundStatus: "Completed",
      createdAt: daysAgo(5)
    },
    refund: {
      refundRequired: true,
      refundAmount: 409.00,
      refundMethod: "UPI",
      refundStatus: "Completed",
      transactionReference: "REF-UPI98507819C",
      initiatedAt: daysAgo(5),
      completedAt: daysAgo(5)
    },
    investigation: {
      caseStatus: "Closed",
      assignedStaff: "Suresh Raina",
      reason: "Store cancellation verification.",
      priority: "Low",
      description: "Store initiated refund directly due to stock outage.",
      attachments: [],
      notes: "Checked logs. Auto-refunded and successfully credited.",
      auditLogs: [
        { action: "Case Opened", staff: "System", timestamp: daysAgo(5) },
        { action: "Case Closed", staff: "System", timestamp: daysAgo(5) }
      ]
    },
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: daysAgo(5) },
      { status: "Confirmed", updatedBy: "System", timestamp: daysAgo(5) },
      { status: "Cancellation Initiated", updatedBy: "Store Manager Sunil", timestamp: daysAgo(5) },
      { status: "Cancelled", updatedBy: "System", timestamp: daysAgo(5) }
    ]
  }
];

// Historical aggregates for Recharts completed orders trend graphs
export const mockRevenueTrends = [
  { date: "01 Jun", revenue: 8400, orders: 12 },
  { date: "05 Jun", revenue: 14500, orders: 20 },
  { date: "10 Jun", revenue: 11000, orders: 15 },
  { date: "15 Jun", revenue: 19500, orders: 28 },
  { date: "18 Jun", revenue: 25400, orders: 36 },
  { date: "20 Jun", revenue: 32000, orders: 45 },
  { date: "21 Jun", revenue: 28500, orders: 39 }
];

export const mockRatingsDistribution = [
  { rating: "5★", count: 24, fill: "#10b981" },
  { rating: "4★", count: 14, fill: "#3b82f6" },
  { rating: "3★", count: 5, fill: "#eab308" },
  { rating: "2★", count: 2, fill: "#f97316" },
  { rating: "1★", count: 1, fill: "#ef4444" }
];

export const mockTopStoresRevenue = [
  { storeName: "Connaught Place, Delhi", revenue: 124500 },
  { storeName: "Bandra West, Mumbai", revenue: 98400 },
  { storeName: "Indiranagar, Bengaluru", revenue: 85200 },
  { storeName: "Gachibowli, Hyderabad", revenue: 64200 },
  { storeName: "Salt Lake, Kolkata", revenue: 45600 }
];

// Reorder & Customer Analytics mock database
export const mockReorderAnalytics = {
  "ORD-98401": {
    lifetimeOrders: 14,
    previousOrderCount: 13,
    avgSpend: 480,
    repeatFrequency: "Once every 6 days",
    favoriteCategory: "Tandoori Specialties",
    recommendedUpsell: [
      { productName: "Paneer Calzone pocket", price: 180, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=100" },
      { productName: "Stuffed Garlic Breadsticks", price: 160, image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?w=100" }
    ],
    mostOrderedProducts: [
      { name: "Tandoori Paneer Pizza", count: 8, spend: 3992 },
      { name: "Pepsi Black Can", count: 6, spend: 360 }
    ],
    chartData: [
      { month: "Jan", orders: 1 },
      { month: "Feb", orders: 2 },
      { month: "Mar", orders: 3 },
      { month: "Apr", orders: 2 },
      { month: "May", orders: 4 },
      { month: "Jun", orders: 2 }
    ]
  },
  "ORD-98402": {
    lifetimeOrders: 28,
    previousOrderCount: 27,
    avgSpend: 690,
    repeatFrequency: "Once every 4 days",
    favoriteCategory: "Veg Supreme Meals",
    recommendedUpsell: [
      { productName: "Choco Lava Melt cup", price: 110, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=100" },
      { productName: "Potato Wedges bucket", price: 120, image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?w=100" }
    ],
    mostOrderedProducts: [
      { name: "Veg Supreme Burst Pizza", count: 18, spend: 12582 },
      { name: "Cheesy Garlic Bread", count: 12, spend: 1812 }
    ],
    chartData: [
      { month: "Jan", orders: 3 },
      { month: "Feb", orders: 5 },
      { month: "Mar", orders: 4 },
      { month: "Apr", orders: 6 },
      { month: "May", orders: 8 },
      { month: "Jun", orders: 2 }
    ]
  }
};

// CANCELLED ORDERS ANALYTICS AND CHARTS MOCK DATA
export const mockCancelledAnalytics = {
  cancelledTodayCount: 3,
  customerCancellationsCount: 3,
  storeCancellationsCount: 3,
  refundPendingCount: 3,
  totalOrdersCount: 148,
  cancelledOrdersCount: 7,
  mostCommonReason: "Customer Request",
  refundAmountThisMonth: 1837.00,
  cancelledRevenue: 4154.50,
  averageRefundTime: "45 mins",
  highestCancellationStore: "Bandra West, Mumbai",
  highestCancellationStorePercentage: "4.8%"
};

export const mockCancellationTrend = [
  { date: "15 Jun", cancelledOrders: 1 },
  { date: "16 Jun", cancelledOrders: 0 },
  { date: "17 Jun", cancelledOrders: 2 },
  { date: "18 Jun", cancelledOrders: 1 },
  { date: "19 Jun", cancelledOrders: 3 },
  { date: "20 Jun", cancelledOrders: 1 },
  { date: "21 Jun", cancelledOrders: 2 }
];

export const mockCancellationReasons = [
  { name: "Customer Request", value: 3, fill: "#f97316" }, // Orange
  { name: "Out Of Stock", value: 2, fill: "#ef4444" }, // Red
  { name: "Kitchen Issue", value: 1, fill: "#8b5cf6" }, // Purple
  { name: "Payment Failure", value: 1, fill: "#3b82f6" }, // Blue
  { name: "System Failure", value: 0, fill: "#6b7280" } // Gray
];

export const mockStoreCancellations = [
  { name: "Bandra West", percentage: 4.8 },
  { name: "Connaught Place", percentage: 3.5 },
  { name: "Gachibowli", percentage: 2.1 },
  { name: "Indiranagar", percentage: 1.8 },
  { name: "Salt Lake", percentage: 1.2 }
];

export const mockRefundStatusDistribution = [
  { name: "Pending", value: 3, fill: "#3b82f6" }, // Blue
  { name: "Initiated", value: 1, fill: "#eab308" }, // Amber
  { name: "Completed", value: 3, fill: "#10b981" }, // Emerald
  { name: "Rejected", value: 0, fill: "#ef4444" } // Red
];
