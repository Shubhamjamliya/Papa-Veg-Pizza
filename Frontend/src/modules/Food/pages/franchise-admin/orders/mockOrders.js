// Mock database for Franchise Live Orders
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

export const mockOrders = [
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
    orderStatus: "Preparing", // Pending, Confirmed, Preparing, Baking, Packed, Ready For Pickup, Rider Assigned, Out For Delivery
    pricing: {
      subtotal: 549,
      tax: 27.45,
      deliveryFee: 40,
      discount: 50,
      total: 566.45
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid", // Pending, Paid, Failed, Refunded
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
    estimatedDeliveryTime: minutesAgo(12), // Overdue by 12 mins
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
  {
    id: "ORD-98423",
    orderNumber: "PVP-98423",
    customer: {
      name: "Aarav Mehta",
      phone: "+91 95544 33221",
      email: "aarav.mehta@yahoo.com",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
      address: "A-504, Prestige Heights, Outer Ring Road, Gachibowli, Hyderabad - 500032",
      coords: { lat: 17.4483, lng: 78.3741 }
    },
    store: {
      storeId: "ST-004",
      name: "Gachibowli, Hyderabad"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(15),
    estimatedDeliveryTime: minutesHence(15),
    orderStatus: "Confirmed",
    pricing: {
      subtotal: 420,
      tax: 21,
      deliveryFee: 45,
      discount: 42,
      total: 444
    },
    paymentMethod: "NetBanking",
    paymentStatus: "Paid",
    transactionId: "TXN-NET38290129",
    couponApplied: "WELCOME10",
    deliveryPartner: null,
    items: [
      {
        productId: "p4",
        productName: "Tandoori Paneer Pizza",
        variant: "Medium / Thin Crust",
        quantity: 1,
        price: 420,
        image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Add extra paneer cubes."
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(15) },
      { status: "Confirmed", updatedBy: "Manager Rohan", timestamp: minutesAgo(14) }
    ],
    remarks: ""
  },
  {
    id: "ORD-98424",
    orderNumber: "PVP-98424",
    customer: {
      name: "Priya Sharma",
      phone: "+91 88776 65544",
      email: "priya.s@gmail.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      address: "B-21, Salt Lake Sector 3, Kolkata - 700097",
      coords: { lat: 22.5726, lng: 88.3639 }
    },
    store: {
      storeId: "ST-003",
      name: "Salt Lake, Kolkata"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(30),
    estimatedDeliveryTime: minutesHence(5),
    orderStatus: "Packed",
    pricing: {
      subtotal: 349,
      tax: 17.45,
      deliveryFee: 40,
      discount: 0,
      total: 406.45
    },
    paymentMethod: "COD",
    paymentStatus: "Pending",
    transactionId: null,
    couponApplied: null,
    deliveryPartner: null,
    items: [
      {
        productId: "p5",
        productName: "Capsicum Feast Pizza",
        variant: "Medium",
        quantity: 1,
        price: 349,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Bake it crispy."
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(30) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(29) },
      { status: "Preparing", updatedBy: "Chef Amit", timestamp: minutesAgo(28) },
      { status: "Baking", updatedBy: "Chef Amit", timestamp: minutesAgo(18) },
      { status: "Packed", updatedBy: "Chef Amit", timestamp: minutesAgo(2) }
    ],
    remarks: ""
  },
  {
    id: "ORD-98425",
    orderNumber: "PVP-98425",
    customer: {
      name: "Vikram Sen",
      phone: "+91 99008 87766",
      email: "v.sen@rediffmail.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      address: "Sea View Towers, Carter Road, Bandra West, Mumbai - 400050",
      coords: { lat: 19.0596, lng: 72.8295 }
    },
    store: {
      storeId: "ST-005",
      name: "Bandra West, Mumbai"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(40),
    estimatedDeliveryTime: minutesHence(10),
    orderStatus: "Out For Delivery",
    pricing: {
      subtotal: 820,
      tax: 41,
      deliveryFee: 50,
      discount: 100,
      total: 811
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98425391",
    couponApplied: "SUPERFRANCHISE",
    deliveryPartner: {
      riderId: "RD-101",
      name: "Rahul Sharma",
      vehicleType: "Electric Bike",
      phone: "+91 98765 43210"
    },
    items: [
      {
        productId: "p6",
        productName: "Farm Fresh Delight Pizza",
        variant: "Large",
        quantity: 1,
        price: 599,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Extra cheese burst crust."
      },
      {
        productId: "p7",
        productName: "Choco Lava Cake",
        variant: "Regular",
        quantity: 2,
        price: 110,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Deliver hot."
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(40) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(38) },
      { status: "Preparing", updatedBy: "Chef Maya", timestamp: minutesAgo(35) },
      { status: "Baking", updatedBy: "Chef Maya", timestamp: minutesAgo(25) },
      { status: "Packed", updatedBy: "Chef Maya", timestamp: minutesAgo(15) },
      { status: "Ready For Pickup", updatedBy: "Chef Maya", timestamp: minutesAgo(12) },
      { status: "Rider Assigned", updatedBy: "System", timestamp: minutesAgo(10) },
      { status: "Out For Delivery", updatedBy: "Rider Rahul Sharma", timestamp: minutesAgo(5) }
    ],
    remarks: "Call before reaching."
  },
  {
    id: "ORD-98426",
    orderNumber: "PVP-98426",
    customer: {
      name: "Amit Rawat",
      phone: "+91 88223 34455",
      email: "amit.rawat@gmail.com",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
      address: "E-12, Lajpat Nagar 3, New Delhi - 110024",
      coords: { lat: 28.5708, lng: 77.2402 }
    },
    store: {
      storeId: "ST-001",
      name: "Connaught Place, Delhi"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(2),
    estimatedDeliveryTime: minutesHence(38),
    orderStatus: "Pending",
    pricing: {
      subtotal: 299,
      tax: 14.95,
      deliveryFee: 40,
      discount: 0,
      total: 353.95
    },
    paymentMethod: "COD",
    paymentStatus: "Pending",
    transactionId: null,
    couponApplied: null,
    deliveryPartner: null,
    items: [
      {
        productId: "p8",
        productName: "Golden Corn Pizza",
        variant: "Medium",
        quantity: 1,
        price: 299,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80",
        specialInstructions: ""
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(2) }
    ],
    remarks: ""
  },
  {
    id: "ORD-98427",
    orderNumber: "PVP-98427",
    customer: {
      name: "Sneha Patel",
      phone: "+91 97766 55443",
      email: "sneha.p@gmail.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      address: "15, Koramangala 4th Block, Bengaluru - 560034",
      coords: { lat: 12.9341, lng: 77.6253 }
    },
    store: {
      storeId: "ST-002",
      name: "Indiranagar, Bengaluru"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(12),
    estimatedDeliveryTime: minutesHence(18),
    orderStatus: "Ready For Pickup",
    pricing: {
      subtotal: 450,
      tax: 22.5,
      deliveryFee: 35,
      discount: 0,
      total: 507.5
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI98427184",
    couponApplied: null,
    deliveryPartner: null,
    items: [
      {
        productId: "p2",
        productName: "Cheesy Garlic Bread",
        variant: "Regular",
        quantity: 3,
        price: 150,
        image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Add extra seasoning."
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(12) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(11) },
      { status: "Preparing", updatedBy: "Chef Dev", timestamp: minutesAgo(10) },
      { status: "Packed", updatedBy: "Chef Dev", timestamp: minutesAgo(3) },
      { status: "Ready For Pickup", updatedBy: "Chef Dev", timestamp: minutesAgo(1) }
    ],
    remarks: ""
  },
  {
    id: "ORD-98428",
    orderNumber: "PVP-98428",
    customer: {
      name: "Rohan Das",
      phone: "+91 99112 23344",
      email: "rohan.das@hotmail.com",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
      address: "Pocket C, Mayur Vihar Phase 2, Delhi - 110091",
      coords: { lat: 28.6128, lng: 77.3012 }
    },
    store: {
      storeId: "ST-001",
      name: "Connaught Place, Delhi"
    },
    orderType: "Delivery",
    placedAt: minutesAgo(25),
    estimatedDeliveryTime: minutesHence(5),
    orderStatus: "Rider Assigned",
    pricing: {
      subtotal: 580,
      tax: 29,
      deliveryFee: 40,
      discount: 50,
      total: 599
    },
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    transactionId: "TXN-UPI984281273",
    couponApplied: "PAPA50",
    deliveryPartner: {
      riderId: "RD-103",
      name: "Karan Singh",
      vehicleType: "Electric Scooter",
      phone: "+91 98123 45670"
    },
    items: [
      {
        productId: "p9",
        productName: "Spicy Paneer & Capsicum Pizza",
        variant: "Medium / Thin Crust",
        quantity: 1,
        price: 430,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80",
        specialInstructions: "Add extra spice flakes."
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
      { status: "Placed", updatedBy: "Customer", timestamp: minutesAgo(25) },
      { status: "Confirmed", updatedBy: "System", timestamp: minutesAgo(24) },
      { status: "Preparing", updatedBy: "Chef Amit", timestamp: minutesAgo(23) },
      { status: "Baking", updatedBy: "Chef Amit", timestamp: minutesAgo(15) },
      { status: "Packed", updatedBy: "Chef Amit", timestamp: minutesAgo(8) },
      { status: "Ready For Pickup", updatedBy: "Chef Amit", timestamp: minutesAgo(5) },
      { status: "Rider Assigned", updatedBy: "System", timestamp: minutesAgo(2) }
    ],
    remarks: ""
  }
];
