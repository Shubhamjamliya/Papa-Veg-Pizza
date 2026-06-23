// Mock Data for Franchise Admin Sales Reports Page
// Localized with Indian names, Rupee currency, and WebP product images.

export const mockStoresList = [
  { storeId: "store-1", storeName: "Papa Veg Pizza - Indore Central" },
  { storeId: "store-2", storeName: "Papa Veg Pizza - Bhopal Zone" },
  { storeId: "store-3", storeName: "Papa Veg Pizza - Ujjain Branch" },
  { storeId: "store-4", storeName: "Papa Veg Pizza - Gwalior Hub" },
  { storeId: "store-5", storeName: "Papa Veg Pizza - Jabalpur Outlet" }
];

export const mockProductsPerformance = [
  {
    productId: "prod-1",
    productName: "Tandoori Paneer Delight Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=150&q=80&fm=webp",
    quantitySold: 1250,
    revenue: 498750,
    contributionPercentage: 35.4
  },
  {
    productId: "prod-2",
    productName: "Double Cheese Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=150&q=80&fm=webp",
    quantitySold: 1480,
    revenue: 368520,
    contributionPercentage: 26.2
  },
  {
    productId: "prod-3",
    productName: "Farmhouse Veggie Supreme Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80&fm=webp",
    quantitySold: 890,
    revenue: 355110,
    contributionPercentage: 25.2
  },
  {
    productId: "prod-4",
    productName: "Garlic Breadsticks with Cheese Dip",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=150&q=80&fm=webp",
    quantitySold: 980,
    revenue: 126420,
    contributionPercentage: 9.0
  },
  {
    productId: "prod-5",
    productName: "Choco Lava Molten Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=150&q=80&fm=webp",
    quantitySold: 620,
    revenue: 61380,
    contributionPercentage: 4.2
  }
];

export const mockStorePerformanceList = [
  {
    storeId: "store-1",
    storeName: "Papa Veg Pizza - Indore Central",
    orders: 4890,
    revenue: 1680000,
    avgOrderValue: 343.5,
    growthPercentage: 14.5
  },
  {
    storeId: "store-2",
    storeName: "Papa Veg Pizza - Bhopal Zone",
    orders: 3950,
    revenue: 1350000,
    avgOrderValue: 341.7,
    growthPercentage: 11.2
  },
  {
    storeId: "store-3",
    storeName: "Papa Veg Pizza - Ujjain Branch",
    orders: 2210,
    revenue: 720000,
    avgOrderValue: 325.8,
    growthPercentage: 8.4
  },
  {
    storeId: "store-4",
    storeName: "Papa Veg Pizza - Gwalior Hub",
    orders: 1980,
    revenue: 650000,
    avgOrderValue: 328.2,
    growthPercentage: -2.5
  },
  {
    storeId: "store-5",
    storeName: "Papa Veg Pizza - Jabalpur Outlet",
    orders: 1240,
    revenue: 380000,
    avgOrderValue: 306.4,
    growthPercentage: 5.8
  }
];

export const mockRevenueTrends = {
  daily: [
    { date: "Mon", revenue: 145000 },
    { date: "Tue", revenue: 156000 },
    { date: "Wed", revenue: 138000 },
    { date: "Thu", revenue: 162000 },
    { date: "Fri", revenue: 215000 },
    { date: "Sat", revenue: 298000 },
    { date: "Sun", revenue: 275000 }
  ],
  weekly: [
    { date: "Week 1", revenue: 1120000 },
    { date: "Week 2", revenue: 1240000 },
    { date: "Week 3", revenue: 1180000 },
    { date: "Week 4", revenue: 1350000 }
  ],
  monthly: [
    { date: "Jan", revenue: 4200000 },
    { date: "Feb", revenue: 4500000 },
    { date: "Mar", revenue: 4800000 },
    { date: "Apr", revenue: 4100000 },
    { date: "May", revenue: 5200000 },
    { date: "Jun", revenue: 5800000 }
  ],
  yearly: [
    { date: "2024", revenue: 51200000 },
    { date: "2025", revenue: 58400000 },
    { date: "2026", revenue: 64200000 }
  ]
};

export const mockPaymentDistributionData = {
  upi: 55,
  card: 20,
  cash: 15,
  wallet: 10
};

export const initialGeneratedReports = [
  {
    id: "REP-2026-001",
    reportType: "Monthly",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    revenue: 4890000,
    orders: 14280,
    refundAmount: 98500,
    status: "Completed",
    generatedBy: "Rashi Kumar (Admin)",
    createdAt: "2026-06-01T10:15:30.000Z",
    fileUrl: "#"
  },
  {
    id: "REP-2026-002",
    reportType: "Weekly",
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    revenue: 1240000,
    orders: 3620,
    refundAmount: 22400,
    status: "Completed",
    generatedBy: "Amit Sharma (Store Manager)",
    createdAt: "2026-06-08T09:30:00.000Z",
    fileUrl: "#"
  },
  {
    id: "REP-2026-003",
    reportType: "Daily",
    startDate: "2026-06-22",
    endDate: "2026-06-22",
    revenue: 298000,
    orders: 870,
    refundAmount: 5200,
    status: "Completed",
    generatedBy: "Rashi Kumar (Admin)",
    createdAt: "2026-06-23T00:30:15.000Z",
    fileUrl: "#"
  },
  {
    id: "REP-2026-004",
    reportType: "Custom",
    startDate: "2026-06-10",
    endDate: "2026-06-20",
    revenue: 3850000,
    orders: 11120,
    refundAmount: 76000,
    status: "Processing",
    generatedBy: "Isha Verma (Financial Analyst)",
    createdAt: "2026-06-23T11:45:00.000Z",
    fileUrl: null
  }
];

export const mockDashboardSummary = {
  totalRevenue: 4780180,
  totalOrders: 14280,
  avgOrderValue: 334.75,
  refundAmount: 126100,
  taxCollected: 239009,
  netRevenue: 4415071, // Revenue - Refunds - Taxes
  growthPercentage: 12.8,
  topStore: {
    storeName: "Indore Central Outlet",
    revenue: 1680000,
    orders: 4890
  }
};

// --- ORDER REPORTS DATASETS ---

export const mockOrderDashboardSummary = {
  totalOrders: 18450,
  completedOrders: 16920,
  cancelledOrders: 980,
  refundedOrders: 550,
  averagePreparationTime: 14.8,
  averageDeliveryTime: 23.5,
  averageOrderValue: 342.60
};

export const mockOrderStatusDistribution = {
  pending: 120,
  confirmed: 350,
  preparing: 480,
  baking: 290,
  packed: 150,
  outForDelivery: 140,
  delivered: 16920,
  cancelled: 980,
  refunded: 550
};

export const mockOrderTypeDistribution = {
  delivery: 9820,
  takeaway: 5410,
  dineIn: 3220
};

export const mockOrderHourlyHeatmap = [
  // Mon
  { day: "Mon", hour: 11, totalOrders: 42 },
  { day: "Mon", hour: 12, totalOrders: 98 },
  { day: "Mon", hour: 13, totalOrders: 124 },
  { day: "Mon", hour: 14, totalOrders: 82 },
  { day: "Mon", hour: 18, totalOrders: 112 },
  { day: "Mon", hour: 19, totalOrders: 184 },
  { day: "Mon", hour: 20, totalOrders: 245 },
  { day: "Mon", hour: 21, totalOrders: 210 },
  // Tue
  { day: "Tue", hour: 11, totalOrders: 45 },
  { day: "Tue", hour: 12, totalOrders: 105 },
  { day: "Tue", hour: 13, totalOrders: 118 },
  { day: "Tue", hour: 14, totalOrders: 78 },
  { day: "Tue", hour: 18, totalOrders: 120 },
  { day: "Tue", hour: 19, totalOrders: 195 },
  { day: "Tue", hour: 20, totalOrders: 230 },
  { day: "Tue", hour: 21, totalOrders: 205 },
  // Wed
  { day: "Wed", hour: 11, totalOrders: 38 },
  { day: "Wed", hour: 12, totalOrders: 92 },
  { day: "Wed", hour: 13, totalOrders: 110 },
  { day: "Wed", hour: 14, totalOrders: 70 },
  { day: "Wed", hour: 18, totalOrders: 108 },
  { day: "Wed", hour: 19, totalOrders: 175 },
  { day: "Wed", hour: 20, totalOrders: 225 },
  { day: "Wed", hour: 21, totalOrders: 198 },
  // Thu
  { day: "Thu", hour: 11, totalOrders: 50 },
  { day: "Thu", hour: 12, totalOrders: 115 },
  { day: "Thu", hour: 13, totalOrders: 130 },
  { day: "Thu", hour: 14, totalOrders: 85 },
  { day: "Thu", hour: 18, totalOrders: 132 },
  { day: "Thu", hour: 19, totalOrders: 210 },
  { day: "Thu", hour: 20, totalOrders: 260 },
  { day: "Thu", hour: 21, totalOrders: 220 },
  // Fri
  { day: "Fri", hour: 11, totalOrders: 65 },
  { day: "Fri", hour: 12, totalOrders: 140 },
  { day: "Fri", hour: 13, totalOrders: 165 },
  { day: "Fri", hour: 14, totalOrders: 98 },
  { day: "Fri", hour: 18, totalOrders: 185 },
  { day: "Fri", hour: 19, totalOrders: 290 },
  { day: "Fri", hour: 20, totalOrders: 380 },
  { day: "Fri", hour: 21, totalOrders: 310 },
  // Sat
  { day: "Sat", hour: 11, totalOrders: 80 },
  { day: "Sat", hour: 12, totalOrders: 195 },
  { day: "Sat", hour: 13, totalOrders: 220 },
  { day: "Sat", hour: 14, totalOrders: 140 },
  { day: "Sat", hour: 18, totalOrders: 245 },
  { day: "Sat", hour: 19, totalOrders: 390 },
  { day: "Sat", hour: 20, totalOrders: 490 },
  { day: "Sat", hour: 21, totalOrders: 430 },
  // Sun
  { day: "Sun", hour: 11, totalOrders: 75 },
  { day: "Sun", hour: 12, totalOrders: 180 },
  { day: "Sun", hour: 13, totalOrders: 210 },
  { day: "Sun", hour: 14, totalOrders: 130 },
  { day: "Sun", hour: 18, totalOrders: 220 },
  { day: "Sun", hour: 19, totalOrders: 370 },
  { day: "Sun", hour: 20, totalOrders: 460 },
  { day: "Sun", hour: 21, totalOrders: 395 }
];

export const mockStorePerformanceOrders = [
  { storeId: "store-1", storeName: "Papa Veg Pizza - Indore Central", orders: 4890, completedOrders: 4610, cancelledOrders: 180, avgDeliveryTime: 21.2, revenue: 1680000, growthPercentage: 14.5 },
  { storeId: "store-2", storeName: "Papa Veg Pizza - Bhopal Zone", orders: 3950, completedOrders: 3680, cancelledOrders: 170, avgDeliveryTime: 23.4, revenue: 1350000, growthPercentage: 11.2 },
  { storeId: "store-3", storeName: "Papa Veg Pizza - Ujjain Branch", orders: 2210, completedOrders: 2050, cancelledOrders: 90, avgDeliveryTime: 24.8, revenue: 720000, growthPercentage: 8.4 },
  { storeId: "store-4", storeName: "Papa Veg Pizza - Gwalior Hub", orders: 1980, completedOrders: 1810, cancelledOrders: 120, avgDeliveryTime: 25.1, revenue: 650000, growthPercentage: -2.5 },
  { storeId: "store-5", storeName: "Papa Veg Pizza - Jabalpur Outlet", orders: 1240, completedOrders: 1150, cancelledOrders: 50, avgDeliveryTime: 26.5, revenue: 380000, growthPercentage: 5.8 }
];

export const mockDetailedOrderReportsList = [
  { orderId: "ord-1", orderNumber: "PVP-1092", customerName: "Rashi Kumar", storeName: "Papa Veg Pizza - Indore Central", amount: 450, orderType: "Delivery", status: "Delivered", deliveryTime: 22, createdAt: "2026-06-23T11:44:00.000Z" },
  { orderId: "ord-2", orderNumber: "PVP-1093", customerName: "Amit Sharma", storeName: "Papa Veg Pizza - Bhopal Zone", amount: 590, orderType: "Takeaway", status: "Preparing", deliveryTime: 0, createdAt: "2026-06-23T11:50:00.000Z" },
  { orderId: "ord-3", orderNumber: "PVP-1094", customerName: "Rohan Malhotra", storeName: "Papa Veg Pizza - Indore Central", amount: 399, orderType: "Delivery", status: "Out For Delivery", deliveryTime: 15, createdAt: "2026-06-23T11:51:00.000Z" },
  { orderId: "ord-4", orderNumber: "PVP-1095", customerName: "Isha Sharma", storeName: "Papa Veg Pizza - Ujjain Branch", amount: 620, orderType: "Dine-In", status: "Baking", deliveryTime: 0, createdAt: "2026-06-23T11:52:00.000Z" },
  { orderId: "ord-5", orderNumber: "PVP-1096", customerName: "Vikram Rathore", storeName: "Papa Veg Pizza - Gwalior Hub", amount: 320, orderType: "Delivery", status: "Delivered", deliveryTime: 28, createdAt: "2026-06-23T11:20:00.000Z" },
  { orderId: "ord-6", orderNumber: "PVP-1097", customerName: "Pooja Patel", storeName: "Papa Veg Pizza - Jabalpur Outlet", amount: 520, orderType: "Delivery", status: "Cancelled", deliveryTime: 0, createdAt: "2026-06-23T10:15:00.000Z" },
  { orderId: "ord-7", orderNumber: "PVP-1098", customerName: "Karan Singh", storeName: "Papa Veg Pizza - Indore Central", amount: 480, orderType: "Takeaway", status: "Refunded", deliveryTime: 0, createdAt: "2026-06-23T09:40:00.000Z" }
];

export const mockSingleOrderDetail = {
  orderNumber: "PVP-1092",
  customer: {
    name: "Rashi Kumar",
    phone: "+91 99887 76655",
    email: "rashi.kumar@gmail.com",
    address: "142, Palasia Square, Near HDFC Bank, Indore, Madhya Pradesh",
    loyaltyPoints: 350
  },
  items: [
    { name: "Tandoori Paneer Delight Pizza", quantity: 1, price: 399, subtotal: 399, customization: "Extra Paneer, Cheese Burst Base" },
    { name: "Choco Lava Molten Cake", quantity: 1, price: 99, subtotal: 99, customization: "Normal" }
  ],
  payment: {
    method: "UPI (Google Pay)",
    transactionId: "TXN-8840212903",
    amount: 498,
    status: "Paid"
  },
  timeline: [
    { stage: "Placed", timestamp: "2026-06-23T11:44:00.000Z", completed: true },
    { stage: "Confirmed", timestamp: "2026-06-23T11:46:00.000Z", completed: true },
    { stage: "Preparing", timestamp: "2026-06-23T11:48:00.000Z", completed: true },
    { stage: "Baking", timestamp: "2026-06-23T11:51:00.000Z", completed: true },
    { stage: "Packed", timestamp: "2026-06-23T11:55:00.000Z", completed: true },
    { stage: "Assigned", timestamp: "2026-06-23T11:56:00.000Z", completed: true },
    { stage: "Out For Delivery", timestamp: "2026-06-23T11:58:00.000Z", completed: true },
    { stage: "Delivered", timestamp: "2026-06-23T12:06:00.000Z", completed: true }
  ],
  rider: {
    name: "Rahul Dev",
    phone: "+91 98402 12903",
    assignedTime: "2026-06-23T11:56:00.000Z",
    pickupTime: "2026-06-23T11:58:00.000Z",
    deliveryTime: "2026-06-23T12:06:00.000Z"
  },
  invoiceSummary: {
    subtotal: 498,
    tax: 25,
    discount: 50,
    deliveryCharges: 30,
    grandTotal: 503
  }
};

export const initialGeneratedOrderReports = [
  {
    id: "ORD-2026-001",
    reportType: "Monthly",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
    revenue: 4890000,
    orders: 14280,
    refundAmount: 98500,
    status: "Completed",
    generatedBy: "Rashi Kumar (Admin)",
    createdAt: "2026-06-01T10:15:30.000Z",
    fileUrl: "#"
  }
];

