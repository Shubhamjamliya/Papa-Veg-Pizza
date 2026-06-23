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
