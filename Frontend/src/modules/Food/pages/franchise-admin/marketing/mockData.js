// Mock data for Papa Veg Pizza Coupons Page (Indian Context)

export const mockStores = [
  { _id: "store-indore-1", name: "Indore Central (Vijay Nagar)" },
  { _id: "store-indore-2", name: "Indore Sudama Nagar" },
  { _id: "store-bhopal-1", name: "Bhopal MP Nagar" },
  { _id: "store-bhopal-2", name: "Bhopal Arera Colony" },
  { _id: "store-ujjain-1", name: "Ujjain Freeganj" },
  { _id: "store-dewas-1", name: "Dewas Bypass Outlet" }
];

export const mockProducts = [
  { _id: "prod-1", name: "Paneer Tikka Pizza", price: 349 },
  { _id: "prod-2", name: "Veg Supreme Pizza", price: 399 },
  { _id: "prod-3", name: "Double Cheese Margherita Pizza", price: 299 },
  { _id: "prod-4", name: "Farmhouse Delight Pizza", price: 329 },
  { _id: "prod-5", name: "Peppy Paneer Spicy Pizza", price: 359 },
  { _id: "prod-6", name: "Classic Garlic Breadsticks", price: 129 },
  { _id: "prod-7", name: "Stuffed Cheese Garlic Bread", price: 179 },
  { _id: "prod-8", name: "Warm Choco Lava Cake", price: 99 },
  { _id: "prod-9", name: "Pepsi Pet Bottle 500ml", price: 50 },
  { _id: "prod-10", name: "Onion Capsicum Veggie Single", price: 199 }
];

export const mockCategories = [
  { _id: "cat-pizzas", name: "Pizzas" },
  { _id: "cat-sides", name: "Sides & Starters" },
  { _id: "cat-desserts", name: "Desserts" },
  { _id: "cat-drinks", name: "Beverages" }
];

export const mockCoupons = [
  {
    _id: "coupon-1",
    couponCode: "PAPA50",
    franchiseId: "fran-central-1",
    storeIds: ["store-indore-1", "store-indore-2", "store-bhopal-1"],
    title: "50% Pizza Bonanza",
    description: "Get 50% off on all pizzas. Valid on orders above ₹399. Maximum discount capped at ₹150.",
    discountType: "percentage",
    discountValue: 50,
    minimumOrderAmount: 399,
    maximumDiscount: 150,
    usageLimit: 1000,
    usagePerCustomer: 2,
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    applicableProducts: ["prod-1", "prod-2", "prod-3", "prod-4", "prod-5"],
    applicableCategories: ["cat-pizzas"],
    customerType: "all",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-01T10:00:00Z"
  },
  {
    _id: "coupon-2",
    couponCode: "VEGSUPREME",
    franchiseId: "fran-central-1",
    storeIds: ["store-indore-1", "store-ujjain-1"],
    title: "Flat ₹100 Off Special",
    description: "Save flat ₹100 on your favorite pizzas. Minimum transaction value ₹499.",
    discountType: "fixed",
    discountValue: 100,
    minimumOrderAmount: 499,
    maximumDiscount: 100,
    usageLimit: 500,
    usagePerCustomer: 1,
    startDate: "2026-06-10",
    endDate: "2026-07-25",
    applicableProducts: [],
    applicableCategories: ["cat-pizzas"],
    customerType: "all",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-10T11:30:00Z"
  },
  {
    _id: "coupon-3",
    couponCode: "FREEDEL",
    franchiseId: "fran-central-1",
    storeIds: ["store-indore-2", "store-bhopal-2", "store-dewas-1"],
    title: "Free Delivery Delight",
    description: "Enjoy zero delivery charges on all orders above ₹299. Satisfy your hunger cravings now!",
    discountType: "free-delivery",
    discountValue: 0,
    minimumOrderAmount: 299,
    maximumDiscount: 60, // Standard delivery charge limit
    usageLimit: 2500,
    usagePerCustomer: 5,
    startDate: "2026-06-15",
    endDate: "2026-09-30",
    applicableProducts: [],
    applicableCategories: [],
    customerType: "all",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-15T09:15:00Z"
  },
  {
    _id: "coupon-4",
    couponCode: "NEWPAPA",
    franchiseId: "fran-central-1",
    storeIds: [], // All stores
    title: "New Customer Flat 30%",
    description: "Welcome to Papa Veg Pizza! Get 30% off on your first order. Minimum order ₹249. Capped at ₹75.",
    discountType: "percentage",
    discountValue: 30,
    minimumOrderAmount: 249,
    maximumDiscount: 75,
    usageLimit: 5000,
    usagePerCustomer: 1,
    startDate: "2026-05-01",
    endDate: "2026-12-31",
    applicableProducts: [],
    applicableCategories: [],
    customerType: "new",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-05-01T08:00:00Z"
  },
  {
    _id: "coupon-5",
    couponCode: "MIDWEEK",
    franchiseId: "fran-central-1",
    storeIds: ["store-ujjain-1", "store-dewas-1"],
    title: "Midweek Pizza Rush",
    description: "Beat the Wednesday blues! Flat ₹80 off on orders above ₹350.",
    discountType: "fixed",
    discountValue: 80,
    minimumOrderAmount: 350,
    maximumDiscount: 80,
    usageLimit: 300,
    usagePerCustomer: 1,
    startDate: "2026-06-01",
    endDate: "2026-06-20", // Expired
    applicableProducts: [],
    applicableCategories: [],
    customerType: "all",
    status: "expired",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-01T12:00:00Z"
  },
  {
    _id: "coupon-6",
    couponCode: "SUNDAYPIZZA",
    franchiseId: "fran-central-1",
    storeIds: ["store-indore-1", "store-indore-2", "store-bhopal-1", "store-bhopal-2"],
    title: "Sunday Feast Special",
    description: "Sunday family lunch sorted. Flat ₹150 off on orders above ₹599.",
    discountType: "fixed",
    discountValue: 150,
    minimumOrderAmount: 599,
    maximumDiscount: 150,
    usageLimit: 800,
    usagePerCustomer: 2,
    startDate: "2026-06-07",
    endDate: "2026-08-30",
    applicableProducts: ["prod-1", "prod-2", "prod-5"],
    applicableCategories: ["cat-pizzas"],
    customerType: "all",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-06T18:00:00Z"
  },
  {
    _id: "coupon-7",
    couponCode: "LOYALPAPA",
    franchiseId: "fran-central-1",
    storeIds: [], // All stores
    title: "Loyalty Tier 30% Off",
    description: "Exclusive reward for our premium members. 30% off up to ₹150. Min order ₹399.",
    discountType: "percentage",
    discountValue: 30,
    minimumOrderAmount: 399,
    maximumDiscount: 150,
    usageLimit: 1000,
    usagePerCustomer: 3,
    startDate: "2026-06-01",
    endDate: "2026-09-30",
    applicableProducts: [],
    applicableCategories: [],
    customerType: "loyalty",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-05-28T14:40:00Z"
  },
  {
    _id: "coupon-8",
    couponCode: "CHEESEBURST",
    franchiseId: "fran-central-1",
    storeIds: ["store-indore-1"],
    title: "Cheese Burst Upgrade Offer",
    description: "Flat ₹50 off on any cheese burst pizza order value above ₹299.",
    discountType: "fixed",
    discountValue: 50,
    minimumOrderAmount: 299,
    maximumDiscount: 50,
    usageLimit: 400,
    usagePerCustomer: 2,
    startDate: "2026-06-05",
    endDate: "2026-06-22", // Expired yesterday
    applicableProducts: ["prod-1", "prod-2", "prod-5"],
    applicableCategories: [],
    customerType: "all",
    status: "expired",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-04T16:25:00Z"
  },
  {
    _id: "coupon-9",
    couponCode: "OFFER100",
    franchiseId: "fran-central-1",
    storeIds: ["store-bhopal-1", "store-bhopal-2"],
    title: "Bhopal Special Pizza Night",
    description: "Save flat ₹100 on mid-night cravings. Capped on orders above ₹450.",
    discountType: "fixed",
    discountValue: 100,
    minimumOrderAmount: 450,
    maximumDiscount: 100,
    usageLimit: 600,
    usagePerCustomer: 1,
    startDate: "2026-06-12",
    endDate: "2026-07-15",
    applicableProducts: [],
    applicableCategories: ["cat-pizzas"],
    customerType: "all",
    status: "inactive", // Paused / Inactive
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-11T13:10:00Z"
  },
  {
    _id: "coupon-10",
    couponCode: "FREECHOCO",
    franchiseId: "fran-central-1",
    storeIds: ["store-ujjain-1"],
    title: "Free Choco Lava Combo",
    description: "Get free dessert + standard free delivery on orders above ₹399.",
    discountType: "free-delivery",
    discountValue: 0,
    minimumOrderAmount: 399,
    maximumDiscount: 99,
    usageLimit: 300,
    usagePerCustomer: 1,
    startDate: "2026-06-18",
    endDate: "2026-08-15",
    applicableProducts: ["prod-8"],
    applicableCategories: ["cat-desserts"],
    customerType: "all",
    status: "active",
    createdBy: "Shubham Jamliya",
    createdAt: "2026-06-17T15:50:00Z"
  }
];

export const mockCouponUsage = [
  // Usage for PAPA50 (coupon-1)
  { _id: "u-1", couponId: "coupon-1", customerId: "cust-1", customerName: "Amit Sharma", orderId: "ORD-9041", discountAmount: 120, usedAt: "2026-06-20T19:30:00Z", orderAmount: 450 },
  { _id: "u-2", couponId: "coupon-1", customerId: "cust-2", customerName: "Pooja Patel", orderId: "ORD-9038", discountAmount: 150, usedAt: "2026-06-21T13:15:00Z", orderAmount: 620 },
  { _id: "u-3", couponId: "coupon-1", customerId: "cust-3", customerName: "Rohan Malhotra", orderId: "ORD-9022", discountAmount: 110, usedAt: "2026-06-22T21:40:00Z", orderAmount: 420 },
  { _id: "u-4", couponId: "coupon-1", customerId: "cust-4", customerName: "Ananya Iyer", orderId: "ORD-9015", discountAmount: 150, usedAt: "2026-06-22T20:10:00Z", orderAmount: 580 },
  
  // Usage for VEGSUPREME (coupon-2)
  { _id: "u-5", couponId: "coupon-2", customerId: "cust-5", customerName: "Vikram Singh", orderId: "ORD-9008", discountAmount: 100, usedAt: "2026-06-18T14:22:00Z", orderAmount: 520 },
  { _id: "u-6", couponId: "coupon-2", customerId: "cust-6", customerName: "Anjali Deshmukh", orderId: "ORD-8994", discountAmount: 100, usedAt: "2026-06-19T20:45:00Z", orderAmount: 550 },
  { _id: "u-7", couponId: "coupon-2", customerId: "cust-1", customerName: "Amit Sharma", orderId: "ORD-8973", discountAmount: 100, usedAt: "2026-06-21T21:05:00Z", orderAmount: 499 },

  // Usage for FREEDEL (coupon-3)
  { _id: "u-8", couponId: "coupon-3", customerId: "cust-7", customerName: "Karan Johar", orderId: "ORD-8980", discountAmount: 50, usedAt: "2026-06-16T12:35:00Z", orderAmount: 320 },
  { _id: "u-9", couponId: "coupon-3", customerId: "cust-8", customerName: "Rahul Dravid", orderId: "ORD-8965", discountAmount: 45, usedAt: "2026-06-19T18:50:00Z", orderAmount: 350 },
  { _id: "u-10", couponId: "coupon-3", customerId: "cust-9", customerName: "Sunita Rao", orderId: "ORD-8951", discountAmount: 60, usedAt: "2026-06-22T19:25:00Z", orderAmount: 410 },

  // Usage for NEWPAPA (coupon-4)
  { _id: "u-11", couponId: "coupon-4", customerId: "cust-10", customerName: "Preeti Zinta", orderId: "ORD-8940", discountAmount: 75, usedAt: "2026-06-05T13:00:00Z", orderAmount: 399 },
  { _id: "u-12", couponId: "coupon-4", customerId: "cust-11", customerName: "Sanjay Dutt", orderId: "ORD-8921", discountAmount: 75, usedAt: "2026-06-12T19:40:00Z", orderAmount: 299 },
  
  // Usage for MIDWEEK (coupon-5 - expired)
  { _id: "u-13", couponId: "coupon-5", customerId: "cust-3", customerName: "Rohan Malhotra", orderId: "ORD-8854", discountAmount: 80, usedAt: "2026-06-10T14:10:00Z", orderAmount: 380 },
  { _id: "u-14", couponId: "coupon-5", customerId: "cust-12", customerName: "Kareena Kapoor", orderId: "ORD-8812", discountAmount: 80, usedAt: "2026-06-17T13:50:00Z", orderAmount: 400 },

  // Usage for SUNDAYPIZZA (coupon-6)
  { _id: "u-15", couponId: "coupon-6", customerId: "cust-2", customerName: "Pooja Patel", orderId: "ORD-8877", discountAmount: 150, usedAt: "2026-06-14T13:10:00Z", orderAmount: 650 },
  { _id: "u-16", couponId: "coupon-6", customerId: "cust-5", customerName: "Vikram Singh", orderId: "ORD-8910", discountAmount: 150, usedAt: "2026-06-21T14:20:00Z", orderAmount: 720 },

  // Usage for LOYALPAPA (coupon-7)
  { _id: "u-17", couponId: "coupon-7", customerId: "cust-13", customerName: "Virat Kohli", orderId: "ORD-8930", discountAmount: 120, usedAt: "2026-06-15T20:15:00Z", orderAmount: 400 },
  { _id: "u-18", couponId: "coupon-7", customerId: "cust-14", customerName: "MS Dhoni", orderId: "ORD-8945", discountAmount: 150, usedAt: "2026-06-22T20:30:00Z", orderAmount: 600 }
];
