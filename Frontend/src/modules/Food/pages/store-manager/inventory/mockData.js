// Mock Data and Local Storage Database for Pizza Store Inventory
// Prepopulated with premium Indian pizza store ingredients and suppliers

export const initialMockSuppliers = [
  { _id: "sup-001", name: "MMP Dairy Foods, Indore", contact: "+91 94250 12345" },
  { _id: "sup-002", name: "Vrindavan Fresh Farms, Bhopal", contact: "+91 88710 54321" },
  { _id: "sup-003", name: "Rajesh Flour Mills & Grains", contact: "+91 73124 98765" },
  { _id: "sup-004", name: "Global Packaging Solutions, Pithampur", contact: "+91 99887 76655" },
  { _id: "sup-005", name: "Spices of India Co.", contact: "+91 91112 23344" }
];

export const initialMockIngredients = [
  {
    _id: "ing-001",
    storeId: "st-indore-01",
    ingredientName: "Premium Mozzarella Cheese",
    category: "Cheese",
    unit: "KG",
    currentStock: 45.5,
    minimumStock: 15.0,
    reorderLevel: 25.0,
    costPerUnit: 420.00,
    supplierId: "sup-001",
    supplierName: "MMP Dairy Foods, Indore",
    status: "available",
    lastUpdatedBy: "Shubham Jamliya",
    updatedAt: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  },
  {
    _id: "ing-002",
    storeId: "st-indore-01",
    ingredientName: "Dough Flour (Premium Maida)",
    category: "Flour & Dough",
    unit: "KG",
    currentStock: 120.0,
    minimumStock: 40.0,
    reorderLevel: 60.0,
    costPerUnit: 48.00,
    supplierId: "sup-003",
    supplierName: "Rajesh Flour Mills & Grains",
    status: "available",
    lastUpdatedBy: "Vijay Saxena",
    updatedAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    _id: "ing-003",
    storeId: "st-indore-01",
    ingredientName: "Classic Tomato Pizza Sauce",
    category: "Sauce",
    unit: "Litre",
    currentStock: 12.0,
    minimumStock: 10.0,
    reorderLevel: 18.0,
    costPerUnit: 180.00,
    supplierId: "sup-001",
    supplierName: "MMP Dairy Foods, Indore",
    status: "low_stock",
    lastUpdatedBy: "Neha Joshi",
    updatedAt: new Date(Date.now() - 3600000 * 1).toISOString()
  },
  {
    _id: "ing-004",
    storeId: "st-indore-01",
    ingredientName: "Fresh Paneer Cubes (Tikka Size)",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 8.5,
    minimumStock: 10.0,
    reorderLevel: 15.0,
    costPerUnit: 360.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "low_stock",
    lastUpdatedBy: "Ramesh Singh",
    updatedAt: new Date(Date.now() - 1800000).toISOString() // 30m ago
  },
  {
    _id: "ing-005",
    storeId: "st-indore-01",
    ingredientName: "Sliced Jalapenos (Pickled)",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 0.0,
    minimumStock: 5.0,
    reorderLevel: 8.0,
    costPerUnit: 240.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "out_of_stock",
    lastUpdatedBy: "Shubham Jamliya",
    updatedAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    _id: "ing-006",
    storeId: "st-indore-01",
    ingredientName: "Sweet Corn Kernels",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 22.0,
    minimumStock: 8.0,
    reorderLevel: 12.0,
    costPerUnit: 120.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "available",
    lastUpdatedBy: "Vijay Saxena",
    updatedAt: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    _id: "ing-007",
    storeId: "st-indore-01",
    ingredientName: "Fresh Red Onions (Diced)",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 35.0,
    minimumStock: 15.0,
    reorderLevel: 20.0,
    costPerUnit: 35.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "available",
    lastUpdatedBy: "Neha Joshi",
    updatedAt: new Date(Date.now() - 3600000 * 6).toISOString()
  },
  {
    _id: "ing-008",
    storeId: "st-indore-01",
    ingredientName: "Green Capsicum (Tri-cut)",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 28.0,
    minimumStock: 12.0,
    reorderLevel: 18.0,
    costPerUnit: 60.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "available",
    lastUpdatedBy: "Ramesh Singh",
    updatedAt: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    _id: "ing-009",
    storeId: "st-indore-01",
    ingredientName: "Tandoori Pizza Sauce",
    category: "Sauce",
    unit: "Litre",
    currentStock: 1.5,
    minimumStock: 6.0,
    reorderLevel: 10.0,
    costPerUnit: 210.00,
    supplierId: "sup-001",
    supplierName: "MMP Dairy Foods, Indore",
    status: "low_stock",
    lastUpdatedBy: "Shubham Jamliya",
    updatedAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    _id: "ing-010",
    storeId: "st-indore-01",
    ingredientName: "Oregano Seasoning Sachets",
    category: "Packaging & Addons",
    unit: "Box (500 Pcs)",
    currentStock: 8.0,
    minimumStock: 3.0,
    reorderLevel: 5.0,
    costPerUnit: 450.00,
    supplierId: "sup-005",
    supplierName: "Spices of India Co.",
    status: "available",
    lastUpdatedBy: "Vijay Saxena",
    updatedAt: new Date(Date.now() - 3600000 * 15).toISOString()
  },
  {
    _id: "ing-011",
    storeId: "st-indore-01",
    ingredientName: "Chili Flakes Sachets",
    category: "Packaging & Addons",
    unit: "Box (500 Pcs)",
    currentStock: 2.0,
    minimumStock: 3.0,
    reorderLevel: 5.0,
    costPerUnit: 400.00,
    supplierId: "sup-005",
    supplierName: "Spices of India Co.",
    status: "low_stock",
    lastUpdatedBy: "Aman Verma",
    updatedAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    _id: "ing-012",
    storeId: "st-indore-01",
    ingredientName: "Medium Pizza Box (Corrugated)",
    category: "Packaging & Addons",
    unit: "Pcs",
    currentStock: 450.0,
    minimumStock: 200.0,
    reorderLevel: 300.0,
    costPerUnit: 9.50,
    supplierId: "sup-004",
    supplierName: "Global Packaging Solutions, Pithampur",
    status: "available",
    lastUpdatedBy: "Vijay Saxena",
    updatedAt: new Date(Date.now() - 3600000 * 20).toISOString()
  },
  {
    _id: "ing-013",
    storeId: "st-indore-01",
    ingredientName: "Large Pizza Box (Corrugated)",
    category: "Packaging & Addons",
    unit: "Pcs",
    currentStock: 0.0,
    minimumStock: 100.0,
    reorderLevel: 150.0,
    costPerUnit: 14.00,
    supplierId: "sup-004",
    supplierName: "Global Packaging Solutions, Pithampur",
    status: "out_of_stock",
    lastUpdatedBy: "Vijay Saxena",
    updatedAt: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    _id: "ing-014",
    storeId: "st-indore-01",
    ingredientName: "Liquid Cheese Spread",
    category: "Cheese",
    unit: "KG",
    currentStock: 5.0,
    minimumStock: 8.0,
    reorderLevel: 12.0,
    costPerUnit: 320.00,
    supplierId: "sup-001",
    supplierName: "MMP Dairy Foods, Indore",
    status: "low_stock",
    lastUpdatedBy: "Aman Verma",
    updatedAt: new Date(Date.now() - 3600000 * 3).toISOString()
  },
  {
    _id: "ing-015",
    storeId: "st-indore-01",
    ingredientName: "Fresh Mushrooms (Sliced)",
    category: "Veggie & Toppings",
    unit: "KG",
    currentStock: 15.0,
    minimumStock: 5.0,
    reorderLevel: 8.0,
    costPerUnit: 160.00,
    supplierId: "sup-002",
    supplierName: "Vrindavan Fresh Farms, Bhopal",
    status: "available",
    lastUpdatedBy: "Ramesh Singh",
    updatedAt: new Date(Date.now() - 3600000 * 10).toISOString()
  }
];

export const initialMockTransactions = [
  {
    _id: "txn-1001",
    ingredientId: "ing-001",
    storeId: "st-indore-01",
    type: "stock_in",
    quantity: 20.0,
    previousStock: 25.5,
    newStock: 45.5,
    reason: "Fresh morning delivery",
    createdBy: "Shubham Jamliya",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    _id: "txn-1002",
    ingredientId: "ing-004",
    storeId: "st-indore-01",
    type: "stock_out",
    quantity: 5.0,
    previousStock: 13.5,
    newStock: 8.5,
    reason: "Kitchen prep issues - Paneer Tikka",
    createdBy: "Ramesh Singh",
    createdAt: new Date(Date.now() - 1800000).toISOString()
  },
  {
    _id: "txn-1003",
    ingredientId: "ing-003",
    storeId: "st-indore-01",
    type: "adjustment",
    quantity: 12.0,
    previousStock: 15.0,
    newStock: 12.0,
    reason: "Spoilage write-off - expired batch",
    createdBy: "Neha Joshi",
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  },
  {
    _id: "txn-1004",
    ingredientId: "ing-002",
    storeId: "st-indore-01",
    type: "stock_in",
    quantity: 50.0,
    previousStock: 70.0,
    newStock: 120.0,
    reason: "Warehouse replenishment batch #4",
    createdBy: "Vijay Saxena",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    _id: "txn-1005",
    ingredientId: "ing-005",
    storeId: "st-indore-01",
    type: "stock_out",
    quantity: 3.5,
    previousStock: 3.5,
    newStock: 0.0,
    reason: "Used in daily orders kitchen prep",
    createdBy: "Shubham Jamliya",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
  }
];

export const mockConsumptionStats = {
  "ing-001": { today: 8.2, week: 56.4, month: 242.0, averageDaily: 8.0 },
  "ing-002": { today: 22.0, week: 145.0, month: 610.0, averageDaily: 20.3 },
  "ing-003": { today: 3.5, week: 24.1, month: 98.0, averageDaily: 3.2 },
  "ing-004": { today: 2.1, week: 18.2, month: 78.5, averageDaily: 2.6 },
  "ing-005": { today: 0.8, week: 6.4, month: 28.0, averageDaily: 0.9 },
  "ing-006": { today: 3.0, week: 21.0, month: 92.0, averageDaily: 3.1 },
  "ing-007": { today: 5.5, week: 38.0, month: 154.0, averageDaily: 5.1 },
  "ing-008": { today: 4.8, week: 33.2, month: 135.0, averageDaily: 4.5 },
  "ing-009": { today: 1.2, week: 8.5, month: 36.0, averageDaily: 1.2 },
  "ing-010": { today: 0.5, week: 3.2, month: 14.0, averageDaily: 0.4 },
  "ing-011": { today: 0.4, week: 2.8, month: 11.5, averageDaily: 0.3 },
  "ing-012": { today: 85, week: 520, month: 2100, averageDaily: 70 },
  "ing-013": { today: 42, week: 290, month: 1200, averageDaily: 40 },
  "ing-014": { today: 1.5, week: 11.2, month: 48.0, averageDaily: 1.6 },
  "ing-015": { today: 2.4, week: 16.5, month: 72.0, averageDaily: 2.4 }
};

const INGREDIENTS_KEY = "pvp_inventory_ingredients";
const TRANSACTIONS_KEY = "pvp_inventory_transactions";

export const getLocalIngredients = () => {
  try {
    let list = JSON.parse(localStorage.getItem(INGREDIENTS_KEY));
    if (!list || !Array.isArray(list) || list.length === 0) {
      list = initialMockIngredients;
      localStorage.setItem(INGREDIENTS_KEY, JSON.stringify(list));
    }
    return list;
  } catch (e) {
    localStorage.setItem(INGREDIENTS_KEY, JSON.stringify(initialMockIngredients));
    return initialMockIngredients;
  }
};

export const setLocalIngredients = (ingredients) => {
  localStorage.setItem(INGREDIENTS_KEY, JSON.stringify(ingredients));
};

export const getLocalTransactions = () => {
  try {
    let list = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY));
    if (!list || !Array.isArray(list) || list.length === 0) {
      list = initialMockTransactions;
      localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(list));
    }
    return list;
  } catch (e) {
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(initialMockTransactions));
    return initialMockTransactions;
  }
};

export const setLocalTransactions = (transactions) => {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
};

// ==========================================
// Stock Requests Mock Data & Local Storage DB
// ==========================================

export const initialMockStockRequests = [
  {
    _id: "req-001",
    requestNo: "SR-2026-001",
    storeId: "st-indore-01",
    ingredientId: "ing-003",
    ingredientName: "Classic Tomato Pizza Sauce",
    requestedQty: 12.0,
    approvedQty: 0.0,
    urgency: "high",
    reason: "Saturday night prep rush requires extra tomato sauce",
    requestedBy: "Aman Verma",
    approvedBy: "",
    status: "pending",
    remarks: "",
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString() // 3 hours ago
  },
  {
    _id: "req-002",
    requestNo: "SR-2026-002",
    storeId: "st-indore-01",
    ingredientId: "ing-004",
    ingredientName: "Fresh Paneer Cubes (Tikka Size)",
    requestedQty: 15.0,
    approvedQty: 15.0,
    urgency: "critical",
    reason: "Bulk party order for 40 paneer tikka pizzas tomorrow morning",
    requestedBy: "Vijay Saxena",
    approvedBy: "Shubham Jamliya",
    status: "approved",
    remarks: "Approved full quantity for party order",
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString() // 8 hours ago
  },
  {
    _id: "req-003",
    requestNo: "SR-2026-003",
    storeId: "st-indore-01",
    ingredientId: "ing-001",
    ingredientName: "Premium Mozzarella Cheese",
    requestedQty: 80.0,
    approvedQty: 0.0,
    urgency: "low",
    reason: "Requesting excess cheese buffer for upcoming holidays",
    requestedBy: "Aman Verma",
    approvedBy: "Shubham Jamliya",
    status: "rejected",
    remarks: "Rejected. Store has active cheese storage limits, cannot hold over 50kg.",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString() // 1 day ago
  },
  {
    _id: "req-004",
    requestNo: "SR-2026-004",
    storeId: "st-indore-01",
    ingredientId: "ing-002",
    ingredientName: "Dough Flour (Premium Maida)",
    requestedQty: 50.0,
    approvedQty: 50.0,
    urgency: "medium",
    reason: "Regular weekly dough batch replenishment",
    requestedBy: "Vijay Saxena",
    approvedBy: "Shubham Jamliya",
    status: "fulfilled",
    remarks: "Delivered in full by supplier on-site",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString() // 2 days ago
  }
];

export const mockStaffProfiles = {
  "Aman Verma": { name: "Aman Verma", shift: "Morning Shift (09:00 - 17:00)", department: "Kitchen Operations", role: "Kitchen Staff" },
  "Vijay Saxena": { name: "Vijay Saxena", shift: "Evening Shift (17:00 - 01:00)", department: "Baking & Dough Prep", role: "Kitchen Supervisor" },
  "Ramesh Singh": { name: "Ramesh Singh", shift: "General Shift (11:00 - 19:00)", department: "Kitchen Operations", role: "Kitchen Supervisor" },
  "Shubham Jamliya": { name: "Shubham Jamliya", shift: "Store General Hours", department: "Administration", role: "Store Manager" }
};

const STOCK_REQUESTS_KEY = "pvp_stock_requests";

export const getLocalStockRequests = () => {
  try {
    let list = JSON.parse(localStorage.getItem(STOCK_REQUESTS_KEY));
    if (!list || !Array.isArray(list) || list.length === 0) {
      list = initialMockStockRequests;
      localStorage.setItem(STOCK_REQUESTS_KEY, JSON.stringify(list));
    }
    return list;
  } catch (e) {
    localStorage.setItem(STOCK_REQUESTS_KEY, JSON.stringify(initialMockStockRequests));
    return initialMockStockRequests;
  }
};

export const setLocalStockRequests = (requests) => {
  localStorage.setItem(STOCK_REQUESTS_KEY, JSON.stringify(requests));
};

