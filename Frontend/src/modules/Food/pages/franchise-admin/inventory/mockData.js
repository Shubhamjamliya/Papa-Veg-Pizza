export const mockSuppliers = [
  { _id: "SUP-001", name: "Durga Dairy Farms", contact: "Rajesh Kumar", email: "orders@durgadairy.com", phone: "+91 98270 12345" },
  { _id: "SUP-002", name: "Bharat Agro Foods", contact: "Sunil Sharma", email: "info@bharatagro.in", phone: "+91 94250 54321" },
  { _id: "SUP-003", name: "National Packaging Ltd.", contact: "Amit Patel", email: "sales@natpack.co.in", phone: "+91 731 4059080" },
  { _id: "SUP-004", name: "Murali Organic Spices", contact: "Venkatesh Iyer", email: "murali@organicspices.com", phone: "+91 94440 98765" },
  { _id: "SUP-005", name: "Shiv Shakti Flour Mills", contact: "Karan Singh", email: "contact@shivshaktifoods.com", phone: "+91 99811 22334" }
];

export const mockIngredients = [
  {
    _id: "ing-1",
    ingredientCode: "ING-001",
    name: "Hand-Tossed Pizza Dough",
    category: "Dough",
    unit: "Piece",
    sku: "DOUGH-HT-10",
    description: "Pre-proved and stretched wheat base for 10-inch standard pizzas.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 50,
    idealStock: 200,
    supplierId: "SUP-005",
    costPerUnit: 45,
    shelfLife: 3,
    expiryTracking: true,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-10T10:00:00Z",
    updatedAt: "2026-06-20T14:30:00Z"
  },
  {
    _id: "ing-2",
    ingredientCode: "ING-002",
    name: "Premium Mozzarella Cheese",
    category: "Cheese",
    unit: "Kg",
    sku: "CHEESE-MOZ-GP",
    description: "Grated and diced low-moisture mozzarella cheese with perfect stretch.",
    image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 15,
    idealStock: 60,
    supplierId: "SUP-001",
    costPerUnit: 480,
    shelfLife: 30,
    expiryTracking: true,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-12T09:15:00Z",
    updatedAt: "2026-06-21T11:00:00Z"
  },
  {
    _id: "ing-3",
    ingredientCode: "ING-003",
    name: "Rich Tomato Marinara Sauce",
    category: "Sauce",
    unit: "Litre",
    sku: "SAUCE-MAR-RT",
    description: "Signature recipe tomato sauce infused with fresh herbs and garlic.",
    image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 20,
    idealStock: 80,
    supplierId: "SUP-002",
    costPerUnit: 120,
    shelfLife: 15,
    expiryTracking: true,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-12T10:30:00Z",
    updatedAt: "2026-06-18T16:20:00Z"
  },
  {
    _id: "ing-4",
    ingredientCode: "ING-004",
    name: "Fresh Diced Red Onion",
    category: "Vegetables",
    unit: "Kg",
    sku: "VEG-ONION-R",
    description: "Crispy diced red onions, sourced locally.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 12,
    idealStock: 40,
    supplierId: "SUP-002",
    costPerUnit: 35,
    shelfLife: 5,
    expiryTracking: false,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-15T08:00:00Z",
    updatedAt: "2026-06-22T08:00:00Z"
  },
  {
    _id: "ing-5",
    ingredientCode: "ING-005",
    name: "Golden Sweet Corn Kernels",
    category: "Vegetables",
    unit: "Kg",
    sku: "VEG-CORN-SW",
    description: "Steamed sweet corn kernels, IQF frozen.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 8,
    idealStock: 30,
    supplierId: "SUP-002",
    costPerUnit: 90,
    shelfLife: 90,
    expiryTracking: true,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-15T08:15:00Z",
    updatedAt: "2026-06-19T09:45:00Z"
  },
  {
    _id: "ing-6",
    ingredientCode: "ING-006",
    name: "Fresh Paneer Cubes",
    category: "Cheese",
    unit: "Kg",
    sku: "CHEESE-PAN-CB",
    description: "Soft cottage cheese paneer cubes, processed daily.",
    image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 10,
    idealStock: 35,
    supplierId: "SUP-001",
    costPerUnit: 380,
    shelfLife: 7,
    expiryTracking: true,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-20T11:00:00Z",
    updatedAt: "2026-06-22T06:00:00Z"
  },
  {
    _id: "ing-7",
    ingredientCode: "ING-007",
    name: "Oregano Spice Sachets",
    category: "Seasoning",
    unit: "Pack",
    sku: "SPICE-ORE-SCH",
    description: "1g dried oregano seasoning packets.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 100,
    idealStock: 500,
    supplierId: "SUP-004",
    costPerUnit: 1.5,
    shelfLife: 180,
    expiryTracking: false,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-22T14:00:00Z",
    updatedAt: "2026-06-15T12:00:00Z"
  },
  {
    _id: "ing-8",
    ingredientCode: "ING-008",
    name: "10-Inch Corrugated Pizza Box",
    category: "Packaging",
    unit: "Piece",
    sku: "BOX-COR-10",
    description: "Eco-friendly food grade corrugated pizza delivery boxes.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 150,
    idealStock: 600,
    supplierId: "SUP-003",
    costPerUnit: 12,
    shelfLife: 365,
    expiryTracking: false,
    status: "ACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-25T15:30:00Z",
    updatedAt: "2026-06-10T10:00:00Z"
  },
  {
    _id: "ing-9",
    ingredientCode: "ING-009",
    name: "Chili Flakes Sachets",
    category: "Seasoning",
    unit: "Pack",
    sku: "SPICE-CHILI-SCH",
    description: "1g crushed red chili flakes packets.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
    reorderLevel: 100,
    idealStock: 500,
    supplierId: "SUP-004",
    costPerUnit: 1.2,
    shelfLife: 180,
    expiryTracking: false,
    status: "INACTIVE",
    createdBy: "Franchise Admin",
    createdAt: "2026-05-22T14:15:00Z",
    updatedAt: "2026-06-12T11:00:00Z"
  }
];

export const mockStoreStocks = {
  "ing-1": [
    { store: "Indore Central", stock: 120, ideal: 200, reorder: 50, batch: "B-DOUGH-8840", status: "Healthy" },
    { store: "Bhopal Zone", stock: 45, ideal: 150, reorder: 40, batch: "B-DOUGH-8841", status: "Low Stock" },
    { store: "Ujjain Branch", stock: 80, ideal: 120, reorder: 30, batch: "B-DOUGH-8842", status: "Healthy" }
  ],
  "ing-2": [
    { store: "Indore Central", stock: 12, ideal: 60, reorder: 15, batch: "B-CHEESE-9022", status: "Low Stock" },
    { store: "Bhopal Zone", stock: 24, ideal: 50, reorder: 12, batch: "B-CHEESE-9023", status: "Healthy" },
    { store: "Ujjain Branch", stock: 5, ideal: 40, reorder: 10, batch: "B-CHEESE-9024", status: "Critical" }
  ],
  "ing-3": [
    { store: "Indore Central", stock: 45, ideal: 80, reorder: 20, batch: "B-SAUCE-110", status: "Healthy" },
    { store: "Bhopal Zone", stock: 18, ideal: 60, reorder: 15, batch: "B-SAUCE-111", status: "Low Stock" },
    { store: "Ujjain Branch", stock: 32, ideal: 50, reorder: 12, batch: "B-SAUCE-112", status: "Healthy" }
  ],
  "ing-4": [
    { store: "Indore Central", stock: 28, ideal: 40, reorder: 12, batch: "N/A", status: "Healthy" },
    { store: "Bhopal Zone", stock: 9, ideal: 30, reorder: 10, batch: "N/A", status: "Low Stock" },
    { store: "Ujjain Branch", stock: 15, ideal: 25, reorder: 8, batch: "N/A", status: "Healthy" }
  ],
  "ing-5": [
    { store: "Indore Central", stock: 22, ideal: 30, reorder: 8, batch: "B-CORN-049", status: "Healthy" },
    { store: "Bhopal Zone", stock: 6, ideal: 25, reorder: 8, batch: "B-CORN-050", status: "Low Stock" },
    { store: "Ujjain Branch", stock: 14, ideal: 20, reorder: 6, batch: "B-CORN-051", status: "Healthy" }
  ],
  "ing-6": [
    { store: "Indore Central", stock: 8, ideal: 35, reorder: 10, batch: "B-PAN-331", status: "Low Stock" },
    { store: "Bhopal Zone", stock: 18, ideal: 30, reorder: 10, batch: "B-PAN-332", status: "Healthy" },
    { store: "Ujjain Branch", stock: 4, ideal: 20, reorder: 8, batch: "B-PAN-333", status: "Critical" }
  ],
  "ing-7": [
    { store: "Indore Central", stock: 420, ideal: 500, reorder: 100, batch: "N/A", status: "Healthy" },
    { store: "Bhopal Zone", stock: 380, ideal: 400, reorder: 80, batch: "N/A", status: "Healthy" },
    { store: "Ujjain Branch", stock: 90, ideal: 300, reorder: 60, batch: "N/A", status: "Low Stock" }
  ],
  "ing-8": [
    { store: "Indore Central", stock: 510, ideal: 600, reorder: 150, batch: "N/A", status: "Healthy" },
    { store: "Bhopal Zone", stock: 120, ideal: 450, reorder: 120, batch: "N/A", status: "Critical" },
    { store: "Ujjain Branch", stock: 320, ideal: 400, reorder: 100, batch: "N/A", status: "Healthy" }
  ]
};

export const mockPurchaseOrders = {
  "ing-1": [
    { _id: "po-1", poNumber: "PO-2026-9042", supplierName: "Shiv Shakti Flour Mills", quantity: 300, rate: 45, amount: 13500, receivedDate: "2026-06-18T10:00:00Z", status: "COMPLETED" },
    { _id: "po-2", poNumber: "PO-2026-8811", supplierName: "Shiv Shakti Flour Mills", quantity: 200, rate: 45, amount: 9000, receivedDate: "2026-05-15T14:20:00Z", status: "COMPLETED" }
  ],
  "ing-2": [
    { _id: "po-3", poNumber: "PO-2026-9110", supplierName: "Durga Dairy Farms", quantity: 50, rate: 480, amount: 24000, receivedDate: "2026-06-15T09:30:00Z", status: "COMPLETED" },
    { _id: "po-4", poNumber: "PO-2026-8930", supplierName: "Durga Dairy Farms", quantity: 80, rate: 470, amount: 37600, receivedDate: "2026-05-20T11:00:00Z", status: "COMPLETED" }
  ],
  "ing-3": [
    { _id: "po-5", poNumber: "PO-2026-9049", supplierName: "Bharat Agro Foods", quantity: 100, rate: 120, amount: 12000, receivedDate: "2026-06-12T16:00:00Z", status: "COMPLETED" }
  ],
  "ing-4": [
    { _id: "po-6", poNumber: "PO-2026-9080", supplierName: "Bharat Agro Foods", quantity: 40, rate: 35, amount: 1400, receivedDate: "2026-06-20T12:00:00Z", status: "COMPLETED" }
  ],
  "ing-5": [
    { _id: "po-7", poNumber: "PO-2026-9081", supplierName: "Bharat Agro Foods", quantity: 50, rate: 90, amount: 4500, receivedDate: "2026-06-19T10:00:00Z", status: "COMPLETED" }
  ],
  "ing-6": [
    { _id: "po-8", poNumber: "PO-2026-9112", supplierName: "Durga Dairy Farms", quantity: 40, rate: 380, amount: 15200, receivedDate: "2026-06-16T09:00:00Z", status: "COMPLETED" }
  ],
  "ing-7": [
    { _id: "po-9", poNumber: "PO-2026-8799", supplierName: "Murali Organic Spices", quantity: 1000, rate: 1.5, amount: 1500, receivedDate: "2026-05-10T14:00:00Z", status: "COMPLETED" }
  ],
  "ing-8": [
    { _id: "po-10", poNumber: "PO-2026-8910", supplierName: "National Packaging Ltd.", quantity: 1000, rate: 12, amount: 12000, receivedDate: "2026-06-02T11:00:00Z", status: "COMPLETED" }
  ]
};

export const mockConsumptionHistory = {
  "ing-1": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 142, consumedQty: "142 Piece", products: "Margherita, Farmhouse Delight, Peppy Paneer" },
    { date: "2026-06-21", store: "Bhopal Zone", orderCount: 88, consumedQty: "88 Piece", products: "Margherita, Veg Supreme, Peppy Paneer" },
    { date: "2026-06-20", store: "Indore Central", orderCount: 165, consumedQty: "165 Piece", products: "Margherita, Peppy Paneer, Double Cheese" }
  ],
  "ing-2": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 142, consumedQty: "14.2 Kg", products: "Double Cheese, Margherita, Peppy Paneer" },
    { date: "2026-06-21", store: "Bhopal Zone", orderCount: 88, consumedQty: "8.8 Kg", products: "Margherita, Double Cheese, Peppy Paneer" }
  ],
  "ing-3": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 142, consumedQty: "7.1 Litre", products: "All Pizza Pizzas" }
  ],
  "ing-4": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 82, consumedQty: "4.1 Kg", products: "Veg Supreme, Peppy Paneer" }
  ],
  "ing-5": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 54, consumedQty: "2.7 Kg", products: "Veg Supreme, Farmhouse Delight" }
  ],
  "ing-6": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 48, consumedQty: "4.8 Kg", products: "Peppy Paneer, Tandoori Paneer" }
  ],
  "ing-7": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 142, consumedQty: "284 Pack", products: "Dine-in/Delivery Accompaniments" }
  ],
  "ing-8": [
    { date: "2026-06-21", store: "Indore Central", orderCount: 110, consumedQty: "110 Piece", products: "Delivery Orders" }
  ]
};

export const mockExpiryBatches = {
  "ing-1": [
    { batchNumber: "B-DOUGH-8840", mfgDate: "2026-06-21", expiryDate: "2026-06-24", quantity: 150, daysRemaining: 2, status: "NEAR EXPRIY" },
    { batchNumber: "B-DOUGH-8799", mfgDate: "2026-06-18", expiryDate: "2026-06-21", quantity: 50, daysRemaining: 0, status: "EXPIRED" }
  ],
  "ing-2": [
    { batchNumber: "B-CHEESE-9022", mfgDate: "2026-06-01", expiryDate: "2026-07-01", quantity: 45, daysRemaining: 9, status: "HEALTHY" },
    { batchNumber: "B-CHEESE-8890", mfgDate: "2026-05-15", expiryDate: "2026-06-15", quantity: 15, daysRemaining: -7, status: "EXPIRED" }
  ],
  "ing-3": [
    { batchNumber: "B-SAUCE-110", mfgDate: "2026-06-18", expiryDate: "2026-07-03", quantity: 60, daysRemaining: 11, status: "HEALTHY" }
  ],
  "ing-5": [
    { batchNumber: "B-CORN-049", mfgDate: "2026-05-01", expiryDate: "2026-08-01", quantity: 30, daysRemaining: 40, status: "HEALTHY" }
  ],
  "ing-6": [
    { batchNumber: "B-PAN-331", mfgDate: "2026-06-20", expiryDate: "2026-06-27", quantity: 30, daysRemaining: 5, status: "NEAR EXPRIY" },
    { batchNumber: "B-PAN-320", mfgDate: "2026-06-13", expiryDate: "2026-06-20", quantity: 10, daysRemaining: -2, status: "EXPIRED" }
  ]
};

export const mockStockTransactions = {
  "ing-1": [
    { date: "2026-06-21T18:30:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90422", quantity: -1, openingStock: 121, closingStock: 120, performedBy: "Rahul Dev (Kitchen)" },
    { date: "2026-06-18T11:00:00Z", store: "Indore Central", type: "Purchase", reference: "PO-2026-9042", quantity: 300, openingStock: 20, closingStock: 320, performedBy: "Indore Central Store Manager" },
    { date: "2026-06-15T10:15:00Z", store: "Bhopal Zone", type: "Adjustment", reference: "ADJ-0091", quantity: -5, openingStock: 50, closingStock: 45, performedBy: "Bhopal Store Manager (Spoilage)" }
  ],
  "ing-2": [
    { date: "2026-06-21T19:00:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90431", quantity: -0.2, openingStock: 12.2, closingStock: 12.0, performedBy: "Isha Sharma (Kitchen)" },
    { date: "2026-06-15T11:30:00Z", store: "Indore Central", type: "Purchase", reference: "PO-2026-9110", quantity: 50, openingStock: 15, closingStock: 65, performedBy: "Indore Central Store Manager" },
    { date: "2026-06-14T15:20:00Z", store: "Ujjain Branch", type: "Wastage", reference: "WST-0032", quantity: -2, openingStock: 7, closingStock: 5, performedBy: "Ujjain Chef (Soured)" }
  ],
  "ing-3": [
    { date: "2026-06-21T12:00:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90390", quantity: -0.5, openingStock: 45.5, closingStock: 45.0, performedBy: "Rahul Dev (Kitchen)" }
  ],
  "ing-4": [
    { date: "2026-06-21T14:20:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90420", quantity: -2, openingStock: 30, closingStock: 28, performedBy: "Rahul Dev (Kitchen)" },
    { date: "2026-06-20T10:00:00Z", store: "Bhopal Zone", type: "Purchase", reference: "PO-2026-9080", quantity: 40, openingStock: 10, closingStock: 50, performedBy: "Bhopal Store Manager" },
    { date: "2026-06-19T11:15:00Z", store: "Ujjain Branch", type: "Adjustment", reference: "ADJ-0081", quantity: -1, openingStock: 16, closingStock: 15, performedBy: "Ujjain Store Manager" }
  ],
  "ing-5": [
    { date: "2026-06-21T15:30:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90421", quantity: -1.5, openingStock: 23.5, closingStock: 22.0, performedBy: "Rahul Dev (Kitchen)" },
    { date: "2026-06-20T09:45:00Z", store: "Indore Central", type: "Purchase", reference: "PO-2026-9081", quantity: 50, openingStock: 5, closingStock: 55, performedBy: "Indore Central Store Manager" },
    { date: "2026-06-19T16:00:00Z", store: "Bhopal Zone", type: "Consumption", reference: "ORD-90380", quantity: -0.8, openingStock: 6.8, closingStock: 6.0, performedBy: "Bhopal Chef" },
    { date: "2026-06-18T10:30:00Z", store: "Ujjain Branch", type: "Adjustment", reference: "ADJ-0082", quantity: -2, openingStock: 16, closingStock: 14, performedBy: "Ujjain Store Manager" }
  ],
  "ing-6": [
    { date: "2026-06-21T16:10:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90425", quantity: -2, openingStock: 10, closingStock: 8, performedBy: "Isha Sharma (Kitchen)" },
    { date: "2026-06-20T11:15:00Z", store: "Bhopal Zone", type: "Purchase", reference: "PO-2026-9112", quantity: 40, openingStock: 5, closingStock: 45, performedBy: "Bhopal Store Manager" },
    { date: "2026-06-19T09:00:00Z", store: "Ujjain Branch", type: "Wastage", reference: "WST-0035", quantity: -1, openingStock: 5, closingStock: 4, performedBy: "Ujjain Chef (Soured)" }
  ],
  "ing-7": [
    { date: "2026-06-21T17:00:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90426", quantity: -20, openingStock: 440, closingStock: 420, performedBy: "Rahul Dev (Kitchen)" },
    { date: "2026-06-20T14:30:00Z", store: "Bhopal Zone", type: "Purchase", reference: "PO-2026-8799", quantity: 1000, openingStock: 200, closingStock: 1200, performedBy: "Bhopal Store Manager" }
  ],
  "ing-8": [
    { date: "2026-06-21T17:45:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90427", quantity: -15, openingStock: 525, closingStock: 510, performedBy: "Rahul Dev (Kitchen)" },
    { date: "2026-06-20T11:00:00Z", store: "Indore Central", type: "Purchase", reference: "PO-2026-8910", quantity: 1000, openingStock: 50, closingStock: 1050, performedBy: "Indore Central Store Manager" }
  ],
  "ing-9": [
    { date: "2026-06-21T18:00:00Z", store: "Indore Central", type: "Consumption", reference: "ORD-90428", quantity: -25, openingStock: 300, closingStock: 275, performedBy: "Rahul Dev (Kitchen)" }
  ]
};
