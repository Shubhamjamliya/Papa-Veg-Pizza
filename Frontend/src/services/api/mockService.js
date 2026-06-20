import { initialStores, initialManagers, initialStoreApprovals, initialStorePerformance, initialOperatingHours } from "../../modules/Food/pages/franchise-admin/storeManagement/mockStoresData.js";

// Helper to load/save mock data from LocalStorage
const getStorageItem = (key, defaultVal) => {
  try {
    const val = localStorage.getItem(`mock_db_${key}`);
    return val ? JSON.parse(val) : defaultVal;
  } catch (_) {
    return defaultVal;
  }
};

const setStorageItem = (key, val) => {
  try {
    localStorage.setItem(`mock_db_${key}`, JSON.stringify(val));
  } catch (_) {}
};

// Initial Seed Data
const initialCategories = [
  { id: "cat-1", name: "Pizzas", status: "Active", description: "Freshly vegetarian pizzas", order: 1, isGlobal: true, isApproved: true },
  { id: "cat-2", name: "Beverages", status: "Active", description: "Soft drinks and milkshakes", order: 2, isGlobal: true, isApproved: true },
  { id: "cat-3", name: "Sides", status: "Active", description: "Garlic breads, dips and sides", order: 3, isGlobal: true, isApproved: true },
  { id: "cat-4", name: "Desserts", status: "Draft", description: "Choco lava cakes and ice creams", order: 4, isGlobal: false, isApproved: false }
];

const initialRestaurants = [
  { id: "rest-1", name: "Papa Veg Pizza - Central Outlet", email: "central@papaveg.com", phone: "9876543210", address: "Sector 15, Central Market, Noida", status: "approved", isActive: true, cuisines: ["Italian", "Fast Food"], commission: 15 },
  { id: "rest-2", name: "Papa Veg Pizza - East Delhi", email: "eastdelhi@papaveg.com", phone: "9876543211", address: "Preet Vihar, New Delhi", status: "approved", isActive: true, cuisines: ["Italian", "Desserts"], commission: 12 },
  { id: "rest-3", name: "Veg Hub Franchise", email: "veghub@example.com", phone: "9876543212", address: "Indiranagar, Bangalore", status: "pending", isActive: false, cuisines: ["Italian", "Beverages"], commission: 10 }
];

const initialFoods = [
  { id: "food-1", name: "Margherita Pizza", category: "cat-1", categoryName: "Pizzas", price: 249, description: "Classic cheese pizza with rich tomato sauce", status: "Active", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", isVeg: true, isApproved: true },
  { id: "food-2", name: "Veg Supreme Pizza", category: "cat-1", categoryName: "Pizzas", price: 399, description: "Loaded with onion, capsicum, tomato, mushroom & olives", status: "Active", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", isVeg: true, isApproved: true },
  { id: "food-3", name: "Garlic Breadsticks", category: "cat-3", categoryName: "Sides", price: 129, description: "Baked garlic breadsticks served with creamy dip", status: "Active", image: "https://images.unsplash.com/photo-1544982503-9f984c14501a", isVeg: true, isApproved: true },
  { id: "food-4", name: "Chocolate Lava Cake", category: "cat-4", categoryName: "Desserts", price: 99, description: "Warm chocolate cake with a gooey chocolate center", status: "Active", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c", isVeg: true, isApproved: false }
];

const initialOrders = [
  { id: "660c1d2eef20092c4820a011", orderNumber: "PVP-1092", customer: { name: "Rashi Kumar", phone: "9988776655" }, restaurant: { name: "Papa Veg Pizza - Central Outlet" }, items: [{ name: "Veg Supreme Pizza", quantity: 1, price: 399 }], total: 439, status: "delivered", paymentMethod: "Online", createdAt: new Date(Date.now() - 3600000).toISOString() },
  { id: "660c1d2eef20092c4820a012", orderNumber: "PVP-1093", customer: { name: "Amit Sharma", phone: "9988776654" }, restaurant: { name: "Papa Veg Pizza - East Delhi" }, items: [{ name: "Margherita Pizza", quantity: 2, price: 249 }], total: 548, status: "preparing", paymentMethod: "COD", createdAt: new Date().toISOString() }
];

const initialTickets = [
  { id: "ticket-1", subject: "Refund query", description: "Customer requesting refund for order PVP-1091", status: "open", priority: "high", user: { name: "Rashi Kumar", role: "customer" }, createdAt: new Date().toISOString() },
  { id: "ticket-2", subject: "Commission settlement", description: "Franchise owner asking about monthly payouts", status: "pending", priority: "medium", user: { name: "Rajesh Gupta", role: "franchise" }, createdAt: new Date(Date.now() - 86400000).toISOString() }
];

const initialEmergencyReports = [
  { id: "report-1", title: "Accident reported", description: "Rider reported a minor road incident near sector 62", status: "pending", priority: "high", createdAt: new Date().toISOString() }
];

// Initialize Database Collections
let db = {
  categories: getStorageItem("categories", initialCategories),
  restaurants: getStorageItem("restaurants", initialRestaurants),
  foods: getStorageItem("foods", initialFoods),
  orders: getStorageItem("orders", initialOrders),
  tickets: getStorageItem("tickets", initialTickets),
  emergencyReports: getStorageItem("emergencyReports", initialEmergencyReports),
  stores: getStorageItem("stores", initialStores),
  managers: getStorageItem("managers", initialManagers),
  storeApprovals: getStorageItem("storeApprovals", initialStoreApprovals),
  storePerformance: getStorageItem("storePerformance", initialStorePerformance),
  operatingHours: getStorageItem("operatingHours", initialOperatingHours)
};

// Sync stores and managers to ensure new approvals data is available in existing localStorage
initialStores.forEach(s => {
  if (!db.stores.some(ds => ds._id === s._id)) {
    db.stores.push(s);
  }
});
initialManagers.forEach(m => {
  const existingIdx = db.managers.findIndex(dm => dm.id === m.id);
  if (existingIdx === -1) {
    db.managers.push(m);
  } else if (db.managers[existingIdx].name !== m.name) {
    db.managers[existingIdx] = { ...db.managers[existingIdx], ...m };
  }
});
initialStorePerformance.forEach(p => {
  const existingIdx = db.storePerformance.findIndex(dp => dp._id === p._id);
  if (existingIdx === -1) {
    db.storePerformance.push(p);
  } else {
    // If the local record has 0 revenue/orders or missing storeId (which indicates placeholder data), overwrite with seeded data
    if ((db.storePerformance[existingIdx].revenue === 0 || !db.storePerformance[existingIdx].storeId) && p.revenue > 0) {
      db.storePerformance[existingIdx] = { ...db.storePerformance[existingIdx], ...p };
    } else {
      db.storePerformance[existingIdx] = { ...p, ...db.storePerformance[existingIdx] };
    }
  }
});
initialOperatingHours.forEach(oh => {
  const existingIdx = db.operatingHours.findIndex(doh => doh._id === oh._id);
  if (existingIdx === -1) {
    db.operatingHours.push(oh);
  } else {
    db.operatingHours[existingIdx] = { ...oh, ...db.operatingHours[existingIdx] };
  }
});

const saveDB = () => {
  Object.keys(db).forEach((key) => {
    setStorageItem(key, db[key]);
  });
};

saveDB();

// Request Processor
export function handleMockRequest(config) {
  const url = String(config.url || "").replace(/\\/g, "/");
  const method = String(config.method || "get").toLowerCase();
  const data = config.data ? (typeof config.data === "string" ? JSON.parse(config.data) : config.data) : null;

  console.log(`[Mock Server] [${method.toUpperCase()}] ${url}`, data);

  // Helper response builders
  const successRes = (payload) => ({ success: true, status: 200, data: { success: true, data: payload } });
  const successMsg = (msg, payload = null) => ({ success: true, status: 200, data: { success: true, message: msg, data: payload } });
  const errorRes = (msg, status = 400) => ({ success: false, status, data: { success: false, message: msg } });

  // 1. Authentication & Profile
  if (url.includes("/food/auth/admin/login") || url.includes("/auth/admin/login")) {
    const email = data?.email || "";
    if (email.includes("admin")) {
      return {
        success: true,
        status: 200,
        data: {
          success: true,
          data: {
            accessToken: "mockHeader.eyJleHAiOjk5OTk5OTk5OTksInJvbGUiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluLTEifQ==.mockSignature",
            refreshToken: "mock-admin-refresh-token-12345",
            user: { id: "admin-1", name: "Papa Veg Admin", email: email || "admin@papavegpizza.com", role: "superadmin" }
          }
        }
      };
    }
    return errorRes("Invalid email or password");
  }

  if (url.includes("/food/auth/me") || url.includes("/auth/me")) {
    return {
      success: true,
      status: 200,
      data: {
        success: true,
        data: {
          id: "admin-1",
          name: "Papa Veg Admin",
          email: "admin@papavegpizza.com",
          role: "superadmin",
          profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        }
      }
    };
  }

  if (url.includes("/food/auth/logout") || url.includes("/auth/logout")) {
    return successMsg("Logged out successfully");
  }

  // 2. Sidebar Badges
  if (url.includes("/food/admin/sidebar-badges")) {
    const pendingRests = db.restaurants.filter(r => r.status === "pending").length;
    const pendingCats = db.categories.filter(c => c.status === "Draft").length;
    const pendingFds = db.foods.filter(f => !f.isApproved).length;
    const openTickets = db.tickets.filter(t => t.status === "open").length;
    return successRes({
      pendingRestaurants: pendingRests,
      pendingCategories: pendingCats,
      pendingFoods: pendingFds,
      supportTickets: openTickets
    });
  }

  // 3. Dashboard Stats
  if (url.includes("/food/admin/dashboard-stats") || url.match(/\/admin\/dashboard$/)) {
    return successRes({
      revenue: 52000,
      orders: 245,
      activeStores: 12,
      activeRiders: 34,
      lowStock: 5,
      refunds: 3,
      avgOrderValue: 212,
      customerSatisfaction: 4.7
    });
  }

  if (url.includes("/admin/dashboard/revenue")) {
    return successRes([
      { date: "Mon", revenue: 42000, orders: 198 },
      { date: "Tue", revenue: 48000, orders: 226 },
      { date: "Wed", revenue: 52000, orders: 245 },
      { date: "Thu", revenue: 50000, orders: 235 },
      { date: "Fri", revenue: 58000, orders: 270 },
      { date: "Sat", revenue: 72000, orders: 340 },
      { date: "Sun", revenue: 65000, orders: 310 }
    ]);
  }

  if (url.includes("/admin/dashboard/live-orders")) {
    return successRes([
      { id: "PVP-9042", store: "Papa Veg Pizza - Indore Central", customer: "Rohan Malhotra", status: "preparing", time: "08:24 PM", amount: 450, phone: "9826012345", address: "12, Palasia Square, Indore", items: [{ name: "Paneer Tikka Pizza", quantity: 1, price: 399 }, { name: "Pepsi", quantity: 1, price: 51 }], payment: "Online - Paid", assignedStaff: { kitchen: "Chef Anil", rider: "Karan Singh" }, notes: "Extra spicy, double cheese" },
      { id: "PVP-9041", store: "Papa Veg Pizza - Bhopal Zone", customer: "Isha Sharma", status: "confirmed", time: "08:28 PM", amount: 590, phone: "9893054321", address: "Plot 45, Maharana Pratap Nagar, Bhopal", items: [{ name: "Veg Supreme Pizza", quantity: 1, price: 499 }, { name: "Garlic Bread", quantity: 1, price: 91 }], payment: "COD - Unpaid", assignedStaff: { kitchen: "Chef Sunita", rider: "Pending Allocation" }, notes: "Awaiting preparation start" },
      { id: "PVP-9039", store: "Papa Veg Pizza - Ujjain Branch", customer: "Amit Verma", status: "baking", time: "08:15 PM", amount: 380, phone: "9752098765", address: "102, Freeganj, Ujjain", items: [{ name: "Margherita Pizza", quantity: 2, price: 190 }], payment: "Online - Paid", assignedStaff: { kitchen: "Chef Anil", rider: "Rahul Dev" }, notes: "No onions" },
      { id: "PVP-9038", store: "Papa Veg Pizza - Gwalior Hub", customer: "Pooja Patel", status: "packed", time: "08:10 PM", amount: 320, phone: "9977055443", address: "G-4, Deen Dayal Nagar, Gwalior", items: [{ name: "Farmhouse Delight Pizza", quantity: 1, price: 320 }], payment: "Online - Paid", assignedStaff: { kitchen: "Chef Manoj", rider: "Vikram Rathore" }, notes: "Delivery before 9 PM" },
      { id: "PVP-9036", store: "Papa Veg Pizza - Indore Central", customer: "Deepak Rawat", status: "out_for_delivery", time: "08:02 PM", amount: 520, phone: "9826099887", address: "Flat 304, Royal Palms, Indore", items: [{ name: "Tandoori Paneer Pizza", quantity: 1, price: 421 }, { name: "Choco Lava Cake", quantity: 1, price: 99 }], payment: "Online - Paid", assignedStaff: { kitchen: "Chef Anil", rider: "Rahul Dev" }, notes: "Leave at security gate" }
    ]);
  }

  if (url.includes("/admin/dashboard/store-performance")) {
    return successRes([
      { name: "Indore Central", orders: 120, revenue: 324000, rating: 4.8, completion: 98 },
      { name: "Bhopal Zone", orders: 95, revenue: 256000, rating: 4.6, completion: 96 },
      { name: "Ujjain Branch", orders: 60, revenue: 162000, rating: 4.4, completion: 94 },
      { name: "Gwalior Hub", orders: 50, revenue: 135000, rating: 4.5, completion: 95 },
      { name: "Jabalpur Outlet", orders: 40, revenue: 108000, rating: 4.2, completion: 92 },
      { name: "Dewas Hub", orders: 30, revenue: 81000, rating: 4.3, completion: 93 },
      { name: "Pithampur Point", orders: 25, revenue: 67000, rating: 4.1, completion: 90 },
      { name: "Ratlam Outlet", orders: 22, revenue: 59000, rating: 4.5, completion: 96 },
      { name: "Sagar Hub", orders: 18, revenue: 48000, rating: 4.0, completion: 89 },
      { name: "Rewa Branch", orders: 15, revenue: 40000, rating: 4.2, completion: 91 }
    ]);
  }

  if (url.includes("/admin/dashboard/inventory-alerts")) {
    return successRes([
      { ingredient: "Processed Pizza Cheese", store: "Indore Central", currentStock: 12, reorderLevel: 50, unit: "kg" },
      { ingredient: "Wheat Pizza Dough Base", store: "Ujjain Branch", currentStock: 14, reorderLevel: 80, unit: "units" },
      { ingredient: "Fresh Diced Paneer cubes", store: "Bhopal Zone", currentStock: 8, reorderLevel: 30, unit: "kg" },
      { ingredient: "Sweet Corn Kernels", store: "Gwalior Hub", currentStock: 25, reorderLevel: 20, unit: "kg" },
      { ingredient: "Chipotle & Jalapeno Dips", store: "Indore Central", currentStock: 35, reorderLevel: 100, unit: "tubes" }
    ]);
  }

  if (url.includes("/admin/dashboard/delivery-performance")) {
    return successRes({
      metrics: {
        activeRiders: 34,
        deliveredOrders: 215,
        avgDeliveryTime: 24,
        failedDeliveries: 2
      },
      hourlyChart: [
        { hour: "12 PM", deliveries: 25 },
        { hour: "2 PM", deliveries: 32 },
        { hour: "4 PM", deliveries: 18 },
        { hour: "6 PM", deliveries: 45 },
        { hour: "8 PM", deliveries: 65 },
        { hour: "10 PM", deliveries: 30 }
      ]
    });
  }

  if (url.includes("/admin/dashboard/customer-activity")) {
    return successRes({
      newCustomers: 45,
      repeatCustomers: 120,
      loyaltyMembers: 350,
      avgRating: 4.7
    });
  }

  if (url.includes("/search") || url.match(/\/search$/)) {
    const q = String(config.params?.q || "").toLowerCase().trim();
    if (!q) {
      return successRes({ orders: [], stores: [], products: [], customers: [], riders: [] });
    }

    // Filter local entities based on search query
    const filteredOrders = db.orders.filter(o => 
      o.id.toLowerCase().includes(q) || 
      o.orderNumber?.toLowerCase().includes(q) ||
      o.customer?.name?.toLowerCase().includes(q)
    );

    const filteredStores = db.restaurants.filter(r => 
      r.name.toLowerCase().includes(q) ||
      r.address.toLowerCase().includes(q)
    );

    const filteredProducts = db.foods.filter(f => 
      f.name.toLowerCase().includes(q) ||
      f.description.toLowerCase().includes(q)
    );

    // Simulated customers from orders
    const allCustomers = [
      { name: "Rashi Kumar", phone: "9988776655", email: "rashi@example.com" },
      { name: "Amit Sharma", phone: "9988776654", email: "amit@example.com" },
      { name: "Rohan Malhotra", phone: "9826012345", email: "rohan@example.com" },
      { name: "Isha Sharma", phone: "9893054321", email: "isha@example.com" }
    ];
    const filteredCustomers = allCustomers.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.phone.includes(q)
    );

    const allRiders = [
      { name: "Ramesh Rider", phone: "9876543230" },
      { name: "Suresh Rider", phone: "9876543231" },
      { name: "Rahul Dev", phone: "9840212903" },
      { name: "Karan Singh", phone: "9752098765" }
    ];
    const filteredRiders = allRiders.filter(r => 
      r.name.toLowerCase().includes(q) ||
      r.phone.includes(q)
    );

    return successRes({
      orders: filteredOrders,
      stores: filteredStores,
      products: filteredProducts,
      customers: filteredCustomers,
      riders: filteredRiders
    });
  }

  // 4. Categories Management
  if (url.includes("/food/admin/categories")) {
    if (method === "get") {
      return successRes(db.categories);
    }
    if (method === "post") {
      const newCat = {
        id: `cat-${Date.now()}`,
        name: data?.name || "New Category",
        status: data?.status || "Active",
        description: data?.description || "",
        order: db.categories.length + 1,
        isGlobal: Boolean(data?.isGlobal),
        isApproved: true
      };
      db.categories.push(newCat);
      saveDB();
      return successMsg("Category created successfully", newCat);
    }

    // Match id parameter e.g. /food/admin/categories/cat-1
    const match = url.match(/\/food\/admin\/categories\/([^/]+)/);
    if (match) {
      const id = match[1];
      if (method === "patch") {
        const catIdx = db.categories.findIndex(c => c.id === id);
        if (catIdx !== -1) {
          db.categories[catIdx] = { ...db.categories[catIdx], ...data };
          saveDB();
          return successMsg("Category updated successfully", db.categories[catIdx]);
        }
        return errorRes("Category not found", 404);
      }
      if (method === "delete") {
        db.categories = db.categories.filter(c => c.id !== id);
        saveDB();
        return successMsg("Category deleted successfully");
      }
    }
  }

  // Categories approval and toggles
  const catToggleMatch = url.match(/\/food\/admin\/categories\/([^/]+)\/toggle/);
  if (catToggleMatch) {
    const id = catToggleMatch[1];
    const catIdx = db.categories.findIndex(c => c.id === id);
    if (catIdx !== -1) {
      db.categories[catIdx].status = db.categories[catIdx].status === "Active" ? "Draft" : "Active";
      saveDB();
      return successMsg("Category status toggled successfully", db.categories[catIdx]);
    }
    return errorRes("Category not found", 404);
  }

  const catApproveMatch = url.match(/\/food\/admin\/categories\/([^/]+)\/approve/);
  if (catApproveMatch) {
    const id = catApproveMatch[1];
    const catIdx = db.categories.findIndex(c => c.id === id);
    if (catIdx !== -1) {
      db.categories[catIdx].status = "Active";
      db.categories[catIdx].isApproved = true;
      saveDB();
      return successMsg("Category approved successfully", db.categories[catIdx]);
    }
    return errorRes("Category not found", 404);
  }

  // 5. Restaurants Management
  if (url.includes("/food/admin/restaurants")) {
    if (method === "get") {
      if (url.includes("/pending")) {
        return successRes(db.restaurants.filter(r => r.status === "pending"));
      }
      return successRes(db.restaurants);
    }
    if (method === "post") {
      const newRest = {
        id: `rest-${Date.now()}`,
        name: data?.name || "New Outlet",
        email: data?.email || "",
        phone: data?.phone || "",
        address: data?.address || "",
        status: "approved",
        isActive: true,
        cuisines: data?.cuisines || [],
        commission: Number(data?.commission || 15)
      };
      db.restaurants.push(newRest);
      saveDB();
      return successMsg("Restaurant created successfully", newRest);
    }

    const match = url.match(/\/food\/admin\/restaurants\/([^/]+)/);
    if (match) {
      const id = match[1];
      if (method === "patch") {
        const restIdx = db.restaurants.findIndex(r => r.id === id);
        if (restIdx !== -1) {
          db.restaurants[restIdx] = { ...db.restaurants[restIdx], ...data };
          saveDB();
          return successMsg("Restaurant details updated", db.restaurants[restIdx]);
        }
        return errorRes("Restaurant not found", 404);
      }
      if (method === "delete") {
        db.restaurants = db.restaurants.filter(r => r.id !== id);
        saveDB();
        return successMsg("Restaurant deleted successfully");
      }
    }
  }

  // Restaurant approvals
  const restApproveMatch = url.match(/\/food\/admin\/restaurants\/([^/]+)\/approve/);
  if (restApproveMatch) {
    const id = restApproveMatch[1];
    const restIdx = db.restaurants.findIndex(r => r.id === id);
    if (restIdx !== -1) {
      db.restaurants[restIdx].status = "approved";
      db.restaurants[restIdx].isActive = true;
      saveDB();
      return successMsg("Restaurant approved successfully", db.restaurants[restIdx]);
    }
    return errorRes("Restaurant not found", 404);
  }

  const restRejectMatch = url.match(/\/food\/admin\/restaurants\/([^/]+)\/reject/);
  if (restRejectMatch) {
    const id = restRejectMatch[1];
    const restIdx = db.restaurants.findIndex(r => r.id === id);
    if (restIdx !== -1) {
      db.restaurants[restIdx].status = "rejected";
      db.restaurants[restIdx].isActive = false;
      saveDB();
      return successMsg("Restaurant application rejected", db.restaurants[restIdx]);
    }
    return errorRes("Restaurant not found", 404);
  }

  // 6. Food Catalog (Products)
  if (url.includes("/food/admin/foods")) {
    if (method === "get") {
      if (url.includes("/pending-approvals")) {
        return successRes(db.foods.filter(f => !f.isApproved));
      }
      return successRes(db.foods);
    }
    if (method === "post") {
      const categoryItem = db.categories.find(c => c.id === data?.category);
      const newFood = {
        id: `food-${Date.now()}`,
        name: data?.name || "New Food Item",
        category: data?.category || "",
        categoryName: categoryItem ? categoryItem.name : "Uncategorized",
        price: Number(data?.price || 0),
        description: data?.description || "",
        status: data?.status || "Active",
        image: data?.image || "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        isVeg: data?.isVeg !== false,
        isApproved: true
      };
      db.foods.push(newFood);
      saveDB();
      return successMsg("Product created successfully", newFood);
    }

    const match = url.match(/\/food\/admin\/foods\/([^/]+)/);
    if (match) {
      const id = match[1];
      if (method === "patch") {
        const foodIdx = db.foods.findIndex(f => f.id === id);
        if (foodIdx !== -1) {
          db.foods[foodIdx] = { ...db.foods[foodIdx], ...data };
          saveDB();
          return successMsg("Product updated successfully", db.foods[foodIdx]);
        }
        return errorRes("Product not found", 404);
      }
      if (method === "delete") {
        db.foods = db.foods.filter(f => f.id !== id);
        saveDB();
        return successMsg("Product deleted successfully");
      }
    }
  }

  // Food approvals
  const foodApproveMatch = url.match(/\/food\/admin\/foods\/([^/]+)\/approve/);
  if (foodApproveMatch) {
    const id = foodApproveMatch[1];
    const foodIdx = db.foods.findIndex(f => f.id === id);
    if (foodIdx !== -1) {
      db.foods[foodIdx].isApproved = true;
      saveDB();
      return successMsg("Product approved successfully", db.foods[foodIdx]);
    }
    return errorRes("Product not found", 404);
  }

  const foodRejectMatch = url.match(/\/food\/admin\/foods\/([^/]+)\/reject/);
  if (foodRejectMatch) {
    const id = foodRejectMatch[1];
    const foodIdx = db.foods.findIndex(f => f.id === id);
    if (foodIdx !== -1) {
      db.foods = db.foods.filter(f => f.id !== id);
      saveDB();
      return successMsg("Product registration rejected & removed", null);
    }
    return errorRes("Product not found", 404);
  }

  // 7. Orders Management
  if (url.includes("/food/admin/orders")) {
    if (method === "get") {
      const match = url.match(/\/food\/admin\/orders\/([^/]+)/);
      if (match) {
        const id = match[1];
        const order = db.orders.find(o => o.id === id);
        if (order) return successRes(order);
        return errorRes("Order not found", 404);
      }
      return successRes(db.orders);
    }
  }

  // 8. Support tickets
  if (url.includes("/food/admin/support-tickets")) {
    if (method === "get") {
      return successRes(db.tickets);
    }
    const match = url.match(/\/food\/admin\/support-tickets\/([^/]+)/);
    if (match) {
      const id = match[1];
      if (method === "patch") {
        const ticketIdx = db.tickets.findIndex(t => t.id === id);
        if (ticketIdx !== -1) {
          db.tickets[ticketIdx] = { ...db.tickets[ticketIdx], ...data };
          saveDB();
          return successMsg("Ticket status updated", db.tickets[ticketIdx]);
        }
        return errorRes("Ticket not found", 404);
      }
    }
  }

  // 9. Delivery Partners and Emergencies
  if (url.includes("/food/admin/delivery/partners")) {
    return successRes([
      { id: "del-1", name: "Ramesh Rider", phone: "9876543230", status: "online", vehicleNumber: "DL-3S-AQ-1234", vehicleType: "Bike" },
      { id: "del-2", name: "Suresh Rider", phone: "9876543231", status: "offline", vehicleNumber: "DL-3S-AQ-1235", vehicleType: "Electric Scooter" }
    ]);
  }

  if (url.includes("/food/admin/delivery/join-requests")) {
    return successRes([
      { id: "del-req-1", name: "Vikram Singh", phone: "9876543232", vehicleType: "Bike", status: "pending" }
    ]);
  }

  if (url.includes("/food/admin/safety-emergency-reports")) {
    return successRes(db.emergencyReports);
  }

  // 10. Settings & Fallbacks
  if (url.includes("/food/admin/business-settings")) {
    return successRes({
      name: "Papa Veg Pizza",
      logo: "/assets/logo1.png",
      favicon: "/favicon.ico",
      contactEmail: "info@papavegpizza.com",
      contactPhone: "+91 9988776655",
      taxRate: 5,
      deliveryFeePerKm: 15,
      minimumOrderValue: 150
    });
  }

  if (url.includes("/food/admin/fee-settings") || url.includes("/food/admin/referral-settings")) {
    return successRes({ success: true });
  }

  // --- STORES MANAGEMENT MOCK ENDPOINTS ---

  // GET /users/:id
  const userIdMatch = url.match(/\/users\/([^/]+)$/);
  if (userIdMatch && method === "get") {
    const id = userIdMatch[1];
    const mgr = db.managers.find(m => m.id === id);
    if (mgr) return successRes(mgr);
    return errorRes("User not found", 404);
  }

  // GET /users (managers or staff)
  if (url.includes("/users")) {
    const role = config.params?.role || "";
    if (role === "store_manager") {
      return successRes(db.managers);
    }
    // Return staff for this store
    return successRes([
      { name: "Suresh Patel", role: "Kitchen Chef", phone: "9826011122", status: "On Duty" },
      { name: "Rahul Deshmukh", role: "Kitchen Helper", phone: "9752099988", status: "On Duty" },
      { name: "Amit Yadav", role: "Delivery Rider", phone: "9977088822", status: "Active" },
      { name: "Sunita Verma", role: "Cashier", phone: "9893044455", status: "On Duty" }
    ]);
  }

  // GET /orders?storeId=
  if (url.includes("/orders") && config.params?.storeId) {
    return successRes([
      { id: "PVP-9042", customer: "Rohan Malhotra", amount: 450, status: "delivered", createdAt: new Date(Date.now() - 10 * 60000).toISOString() },
      { id: "PVP-9041", customer: "Isha Sharma", amount: 590, status: "preparing", createdAt: new Date(Date.now() - 25 * 60000).toISOString() },
      { id: "PVP-9039", customer: "Amit Verma", amount: 380, status: "preparing", createdAt: new Date(Date.now() - 40 * 60000).toISOString() },
      { id: "PVP-9038", customer: "Pooja Patel", amount: 320, status: "delivered", createdAt: new Date(Date.now() - 75 * 60000).toISOString() },
      { id: "PVP-9036", customer: "Deepak Rawat", amount: 520, status: "cancelled", createdAt: new Date(Date.now() - 120 * 60000).toISOString() }
    ]);
  }

  // GET /inventory?storeId=
  if (url.includes("/inventory") && config.params?.storeId) {
    return successRes([
      { item: "Processed Pizza Cheese", quantity: "12 kg", threshold: "50 kg", status: "Low Stock" },
      { item: "Wheat Pizza Dough Base", quantity: "80 units", threshold: "100 units", status: "Low Stock" },
      { item: "Fresh Diced Paneer Cubes", quantity: "18 kg", threshold: "15 kg", status: "In Stock" },
      { item: "Sweet Corn Kernels", quantity: "25 kg", threshold: "20 kg", status: "In Stock" },
      { item: "Tomato Pizza Sauce", quantity: "35 litres", threshold: "40 litres", status: "Low Stock" }
    ]);
  }

  // GET /reviews?storeId=
  if (url.includes("/reviews") && config.params?.storeId) {
    return successRes([
      { rating: 5, comment: "Superb pizza! Extremely cheesy and hot. Highly recommended.", customer: "Rajesh Joshi", date: "2026-06-19" },
      { rating: 4, comment: "Good taste, garlic bread was also nice. Timely delivery.", customer: "Shweta Tiwari", date: "2026-06-18" },
      { rating: 5, comment: "Papa Veg Pizza Indore has the best Margherita in town!", customer: "Karan Johar", date: "2026-06-15" }
    ]);
  }

  // GET /stores/dashboard-kpis
  if (url.includes("/stores/dashboard-kpis")) {
    const unarchived = db.stores.filter(s => s.isArchived !== true);
    const activeStores = unarchived.filter(s => s.status === "Active");
    const openNow = activeStores.filter(s => s.isOpen === true).length;
    const closedStores = unarchived.filter(s => s.status === "Closed").length;
    const totalRating = unarchived.reduce((sum, s) => sum + (s.averageRating || 0), 0);
    const avgRating = unarchived.length > 0 ? (totalRating / unarchived.length).toFixed(1) : "0.0";
    
    return successRes({
      totalStores: unarchived.length,
      activeStoresCount: activeStores.length,
      openNowCount: openNow,
      closedStoresCount: closedStores,
      averageRating: parseFloat(avgRating),
      ordersToday: 1246
    });
  }

  // GET /stores/:id/performance
  if (url.match(/\/stores\/([^/]+)\/performance$/)) {
    const match = url.match(/\/stores\/([^/]+)\/performance$/);
    const id = match[1];
    const store = db.stores.find(s => s._id === id);
    if (!store) return errorRes("Store not found", 404);

    return successRes({
      ordersToday: Math.floor(Math.random() * 50) + 20,
      weeklyOrders: Math.floor(Math.random() * 300) + 150,
      monthlyRevenue: Math.floor(Math.random() * 200000) + 100000,
      averageRating: store.averageRating || 4.5,
      cancellationRate: "1.2%",
      completionRate: "98.8%",
      revenueTrend: [
        { name: "Mon", revenue: 12000 },
        { name: "Tue", revenue: 15000 },
        { name: "Wed", revenue: 18000 },
        { name: "Thu", revenue: 14000 },
        { name: "Fri", revenue: 22000 },
        { name: "Sat", revenue: 28000 },
        { name: "Sun", revenue: 25000 }
      ],
      ordersTrend: [
        { name: "Mon", orders: 40 },
        { name: "Tue", orders: 50 },
        { name: "Wed", orders: 60 },
        { name: "Thu", orders: 45 },
        { name: "Fri", orders: 75 },
        { name: "Sat", orders: 95 },
        { name: "Sun", orders: 85 }
      ],
      topProducts: [
        { name: "Veg Supreme Pizza", sales: 120 },
        { name: "Margherita Pizza", sales: 95 },
        { name: "Garlic Breadsticks", sales: 80 }
      ],
      customerRatings: [
        { rating: "5 Star", count: 140 },
        { rating: "4 Star", count: 45 },
        { rating: "3 Star", count: 12 },
        { rating: "2 Star", count: 3 },
        { rating: "1 Star", count: 1 }
      ]
    });
  }

  // GET /stores/:id/hours
  if (url.match(/\/stores\/([^/]+)\/hours$/)) {
    const match = url.match(/\/stores\/([^/]+)\/hours$/);
    const id = match[1];
    const store = db.stores.find(s => s._id === id);
    if (!store) return errorRes("Store not found", 404);

    const schedule = store.operatingHours || [
      { day: "Monday", openTime: "11:00", closeTime: "23:00", isHoliday: false },
      { day: "Tuesday", openTime: "11:00", closeTime: "23:00", isHoliday: false },
      { day: "Wednesday", openTime: "11:00", closeTime: "23:00", isHoliday: false },
      { day: "Thursday", openTime: "11:00", closeTime: "23:00", isHoliday: false },
      { day: "Friday", openTime: "11:00", closeTime: "23:00", isHoliday: false },
      { day: "Saturday", openTime: "11:00", closeTime: "23:30", isHoliday: false },
      { day: "Sunday", openTime: "11:00", closeTime: "23:30", isHoliday: false }
    ];
    return successRes(schedule);
  }

  // PATCH /stores/:id/status
  if (method === "patch" && url.match(/\/stores\/([^/]+)\/status$/)) {
    const match = url.match(/\/stores\/([^/]+)\/status$/);
    const id = match[1];
    const storeIdx = db.stores.findIndex(s => s._id === id);
    if (storeIdx !== -1) {
      db.stores[storeIdx].status = data.status;
      db.stores[storeIdx].isOpen = data.status === "Active";
      db.stores[storeIdx].statusChangeReason = data.reason || "";
      db.stores[storeIdx].updatedAt = new Date().toISOString();
      saveDB();
      return successMsg("Store status updated successfully", db.stores[storeIdx]);
    }
    return errorRes("Store not found", 404);
  }

  // PATCH /stores/:id/hours
  if (method === "patch" && url.match(/\/stores\/([^/]+)\/hours$/)) {
    const match = url.match(/\/stores\/([^/]+)\/hours$/);
    const id = match[1];
    const storeIdx = db.stores.findIndex(s => s._id === id);
    if (storeIdx !== -1) {
      db.stores[storeIdx].operatingHours = data.hours || data;
      db.stores[storeIdx].updatedAt = new Date().toISOString();
      saveDB();
      return successMsg("Operating hours updated successfully", db.stores[storeIdx]);
    }
    return errorRes("Store not found", 404);
  }

  // PATCH or DELETE or GET /stores/:id
  const storeIdMatch = url.match(/\/stores\/([^/]+)$/);
  if (storeIdMatch) {
    const id = storeIdMatch[1];
    const storeIdx = db.stores.findIndex(s => s._id === id);
    
    if (method === "get") {
      if (storeIdx !== -1) {
        return successRes(db.stores[storeIdx]);
      }
      return errorRes("Store not found", 404);
    }
    
    if (method === "patch") {
      if (storeIdx !== -1) {
        db.stores[storeIdx] = {
          ...db.stores[storeIdx],
          ...data,
          address: {
            ...db.stores[storeIdx].address,
            ...(data.address || {})
          },
          updatedAt: new Date().toISOString()
        };
        saveDB();
        return successMsg("Store details updated successfully", db.stores[storeIdx]);
      }
      return errorRes("Store not found", 404);
    }

    if (method === "delete") {
      if (storeIdx !== -1) {
        db.stores[storeIdx].isArchived = true;
        db.stores[storeIdx].status = "Closed";
        db.stores[storeIdx].isOpen = false;
        db.stores[storeIdx].updatedAt = new Date().toISOString();
        saveDB();
        return successMsg("Store archived successfully");
      }
      return errorRes("Store not found", 404);
    }
  }

  // 10. Store Approvals Dashboard endpoint
  if (url.includes("/store-approvals/dashboard")) {
    const pending = db.storeApprovals.filter(s => s.status === "Pending").length;
    const approved = db.storeApprovals.filter(s => s.status === "Approved").length;
    const rejected = db.storeApprovals.filter(s => s.status === "Rejected").length;
    return successRes({
      pendingApprovals: pending || 18,
      approvedToday: approved || 7,
      rejectedStores: rejected || 4,
      avgApprovalTime: 3.2
    });
  }

  // 11. Store Approvals Audit timeline
  const auditMatch = url.match(/\/store-approvals\/([^/]+)\/audit$/);
  if (auditMatch) {
    const id = auditMatch[1];
    const app = db.storeApprovals.find(s => s._id === id);
    if (!app) return errorRes("Approval record not found", 404);
    
    const logs = [
      { actor: app.submittedBy || "Franchise Manager", action: "Submitted", date: app.createdAt, remarks: app.remarks || "No remarks" }
    ];
    if (app.status === "Approved") {
      logs.push({ actor: app.approvedBy || "Super Admin", action: "Approved", date: app.approvedAt || new Date().toISOString(), remarks: "Store approved and configuration activated." });
    } else if (app.status === "Rejected") {
      logs.push({ actor: "Super Admin", action: "Rejected", date: app.approvedAt || new Date().toISOString(), remarks: `Rejected: ${app.rejectionReason}` });
    }
    return successRes(logs);
  }

  // 12. Store Approvals Documents Zip download
  if (url.match(/\/store-approvals\/([^/]+)\/documents$/)) {
    return successMsg("Document zip download simulation started.");
  }

  // 13. PATCH approve store approval
  if (method === "patch" && url.match(/\/store-approvals\/([^/]+)\/approve$/)) {
    const match = url.match(/\/store-approvals\/([^/]+)\/approve$/);
    const id = match[1];
    const appIdx = db.storeApprovals.findIndex(s => s._id === id);
    if (appIdx !== -1) {
      db.storeApprovals[appIdx].status = "Approved";
      db.storeApprovals[appIdx].approvedBy = "Super Admin";
      db.storeApprovals[appIdx].approvedAt = new Date().toISOString();
      
      // Also ensure corresponding store in db.stores is set to Active and isOpen is true
      const storeId = db.storeApprovals[appIdx].storeId;
      const storeIdx = db.stores.findIndex(s => s._id === storeId);
      if (storeIdx !== -1) {
        db.stores[storeIdx].status = "Active";
        db.stores[storeIdx].isOpen = true;
        db.stores[storeIdx].updatedAt = new Date().toISOString();
      } else {
        // Create new store if it doesn't exist
        const app = db.storeApprovals[appIdx];
        const newStore = {
          _id: storeId,
          franchiseId: app.franchiseId || "fran-1",
          storeCode: app.storeCode,
          storeName: app.storeName,
          managerId: app.managerId,
          phone: app.phone,
          email: app.email,
          address: app.address,
          status: "Active",
          storeType: app.storeType,
          openingDate: new Date().toISOString().split("T")[0],
          currentCapacity: 0,
          totalOrders: 0,
          averageRating: 5.0,
          isOpen: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        db.stores.unshift(newStore);
      }
      saveDB();
      return successMsg("Store approved successfully", db.storeApprovals[appIdx]);
    }
    return errorRes("Approval record not found", 404);
  }

  // 14. PATCH reject store approval
  if (method === "patch" && url.match(/\/store-approvals\/([^/]+)\/reject$/)) {
    const match = url.match(/\/store-approvals\/([^/]+)\/reject$/);
    const id = match[1];
    const appIdx = db.storeApprovals.findIndex(s => s._id === id);
    if (appIdx !== -1) {
      db.storeApprovals[appIdx].status = "Rejected";
      db.storeApprovals[appIdx].rejectionReason = data.reason || "Documents Incomplete";
      db.storeApprovals[appIdx].approvedBy = "Super Admin";
      db.storeApprovals[appIdx].approvedAt = new Date().toISOString();
      db.storeApprovals[appIdx].remarks = data.comments || "";
      
      // Update corresponding store in db.stores to Inactive / Closed
      const storeId = db.storeApprovals[appIdx].storeId;
      const storeIdx = db.stores.findIndex(s => s._id === storeId);
      if (storeIdx !== -1) {
        db.stores[storeIdx].status = "Closed";
        db.stores[storeIdx].isOpen = false;
        db.stores[storeIdx].updatedAt = new Date().toISOString();
      }
      saveDB();
      return successMsg("Store rejected successfully", db.storeApprovals[appIdx]);
    }
    return errorRes("Approval record not found", 404);
  }

  // 15. GET list of approvals
  if (url.includes("/store-approvals")) {
    if (method === "get") {
      let filtered = [...db.storeApprovals];
      const search = config.params?.search || "";
      const status = config.params?.status || "";
      const city = config.params?.city || "";
      const managerId = config.params?.managerId || "";
      const startDate = config.params?.startDate || "";
      const endDate = config.params?.endDate || "";
      const sort = config.params?.sort || "createdAt";
      const order = config.params?.order || "desc";

      if (search) {
        const q = search.toLowerCase().trim();
        filtered = filtered.filter(s => 
          s.storeName.toLowerCase().includes(q) ||
          s._id.toLowerCase().includes(q) ||
          (s.managerName || "").toLowerCase().includes(q)
        );
      }

      if (status && status !== "All") {
        filtered = filtered.filter(s => s.status === status);
      }

      if (city && city !== "All") {
        filtered = filtered.filter(s => s.address?.city === city);
      }

      if (managerId && managerId !== "All") {
        filtered = filtered.filter(s => s.managerId === managerId);
      }

      if (startDate) {
        filtered = filtered.filter(s => new Date(s.createdAt) >= new Date(startDate));
      }
      if (endDate) {
        filtered = filtered.filter(s => new Date(s.createdAt) <= new Date(endDate + "T23:59:59.999Z"));
      }

      // Sorting
      filtered.sort((a, b) => {
        let valA = a[sort];
        let valB = b[sort];
        if (typeof valA === "string") {
          return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
        return order === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
      });

      const page = parseInt(config.params?.page || "1", 10);
      const limit = parseInt(config.params?.limit || "10", 10);
      const totalCount = filtered.length;

      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);

      return successRes({
        approvals: paginated,
        totalCount,
        page,
        limit
      });
    }
  }

  // GET or POST /stores
  if (url.includes("/stores")) {
    if (method === "get") {
      let filtered = db.stores.filter(s => s.isArchived !== true);
      
      const search = config.params?.search || "";
      const status = config.params?.status || "";
      const type = config.params?.type || "";
      const isOpen = config.params?.isOpen || "";
      const manager = config.params?.manager || "";
      const sort = config.params?.sort || "";
      const order = config.params?.order || "asc";
      
      if (search) {
        const q = search.toLowerCase().trim();
        filtered = filtered.filter(s => 
          s.storeName.toLowerCase().includes(q) ||
          s.storeCode.toLowerCase().includes(q) ||
          (s.address?.city || "").toLowerCase().includes(q)
        );
      }
      
      if (status && status !== "All") {
        filtered = filtered.filter(s => s.status === status);
      }
      
      if (type && type !== "All") {
        filtered = filtered.filter(s => s.storeType === type);
      }
      
      if (isOpen) {
        const openBool = isOpen === "true" || isOpen === true;
        filtered = filtered.filter(s => s.isOpen === openBool);
      }
      
      if (manager && manager !== "All") {
        filtered = filtered.filter(s => s.managerId === manager);
      }
      
      // Sorting
      if (sort) {
        filtered.sort((a, b) => {
          let valA = a[sort];
          let valB = b[sort];
          if (sort === "city") {
            valA = a.address?.city || "";
            valB = b.address?.city || "";
          }
          if (typeof valA === "string") {
            return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
          }
          return order === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
        });
      }
      
      const page = parseInt(config.params?.page || "1", 10);
      const limit = parseInt(config.params?.limit || "10", 10);
      const totalCount = filtered.length;
      
      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);
      
      return successRes({
        stores: paginated,
        totalCount,
        page,
        limit
      });
    }

    if (method === "post") {
      const newStore = {
        _id: `store-${Date.now()}`,
        franchiseId: "fran-1",
        storeCode: data.storeCode || `PVP-STR-${Date.now().toString().slice(-4)}`,
        storeName: data.storeName || "New Store Outlet",
        managerId: data.managerId || "",
        phone: data.phone || "",
        email: data.email || "",
        address: {
          line1: data.address?.line1 || "",
          city: data.address?.city || "",
          state: data.address?.state || "",
          pincode: data.address?.pincode || "",
          coordinates: data.address?.coordinates || [75.8763, 22.7196]
        },
        status: data.status || "Active",
        storeType: data.storeType || "Regular",
        openingDate: data.openingDate || new Date().toISOString().split("T")[0],
        currentCapacity: data.currentCapacity || 25,
        totalOrders: 0,
        averageRating: 5.0,
        isOpen: data.status === "Active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      db.stores.unshift(newStore);
      saveDB();
      return successMsg("Store created successfully", newStore);
    }
  }

  // --- STORE PERFORMANCE ANALYTICS MOCK ENDPOINTS ---

  // GET /store-performance/dashboard
  if (url.includes("/store-performance/dashboard")) {
    const activePerfs = db.storePerformance.filter(p => p.status === "Active");
    const totalRev = activePerfs.reduce((sum, p) => sum + (p.revenue || 0), 0);
    const totalOrd = activePerfs.reduce((sum, p) => sum + (p.totalOrders || 0), 0);
    const avgPrep = activePerfs.length > 0 ? Math.round(activePerfs.reduce((sum, p) => sum + (p.avgPreparationTime || 0), 0) / activePerfs.length) : 14;
    const avgDel = activePerfs.length > 0 ? Math.round(activePerfs.reduce((sum, p) => sum + (p.avgDeliveryTime || 0), 0) / activePerfs.length) : 24;
    const avgRating = activePerfs.length > 0 ? (activePerfs.reduce((sum, p) => sum + (p.customerRating || 0), 0) / activePerfs.length).toFixed(1) : "4.8";
    
    // Best store is the one with the highest performanceScore
    let bestStoreName = "Papa Veg Pizza - Indore Central";
    if (activePerfs.length > 0) {
      const sortedByScore = [...activePerfs].sort((a, b) => b.performanceScore - a.performanceScore);
      bestStoreName = sortedByScore[0].storeName;
    }

    return successRes({
      revenueToday: totalRev || 185000,
      ordersToday: totalOrd || 1260,
      avgPreparationTime: avgPrep || 14,
      avgDeliveryTime: avgDel || 24,
      customerRating: parseFloat(avgRating) || 4.8,
      cancellationRate: 2.1,
      inventoryWaste: 3.0,
      bestStore: bestStoreName
    });
  }

  // GET /store-performance/revenue
  if (url.includes("/store-performance/revenue")) {
    return successRes({
      daily: [
        { time: "Mon", revenue: 85000 },
        { time: "Tue", revenue: 98000 },
        { time: "Wed", revenue: 112000 },
        { time: "Thu", revenue: 95000 },
        { time: "Fri", revenue: 142050 },
        { time: "Sat", revenue: 185000 },
        { time: "Sun", revenue: 165000 }
      ],
      weekly: [
        { time: "Week 1", revenue: 650000 },
        { time: "Week 2", revenue: 780000 },
        { time: "Week 3", revenue: 890000 },
        { time: "Week 4", revenue: 1120000 }
      ],
      monthly: [
        { time: "Jan", revenue: 2400000 },
        { time: "Feb", revenue: 2800000 },
        { time: "Mar", revenue: 3100000 },
        { time: "Apr", revenue: 2900000 },
        { time: "May", revenue: 3800000 },
        { time: "Jun", revenue: 4200000 }
      ]
    });
  }

  // GET /store-performance/orders
  if (url.includes("/store-performance/orders")) {
    return successRes([
      { time: "Mon", completed: 580, cancelled: 12 },
      { time: "Tue", completed: 620, cancelled: 15 },
      { time: "Wed", completed: 740, cancelled: 18 },
      { time: "Thu", completed: 690, cancelled: 10 },
      { time: "Fri", completed: 950, cancelled: 22 },
      { time: "Sat", completed: 1260, cancelled: 26 },
      { time: "Sun", completed: 1100, cancelled: 20 }
    ]);
  }

  // GET /store-performance/ratings
  if (url.includes("/store-performance/ratings")) {
    return successRes([
      { time: "Mon", rating: 4.6 },
      { time: "Tue", rating: 4.7 },
      { time: "Wed", rating: 4.8 },
      { time: "Thu", rating: 4.6 },
      { time: "Fri", rating: 4.7 },
      { time: "Sat", rating: 4.8 },
      { time: "Sun", rating: 4.9 }
    ]);
  }

  // GET /store-performance/comparison
  if (url.includes("/store-performance/comparison")) {
    const list = db.storePerformance.filter(p => p.status === "Active").slice(0, 5);
    return successRes(
      list.map(p => ({
        name: p.storeName.replace("Papa Veg Pizza - ", ""),
        revenue: p.revenue,
        orders: p.totalOrders,
        rating: p.customerRating,
        cancellation: parseFloat(((p.cancelledOrders / (p.totalOrders || 1)) * 100).toFixed(1))
      }))
    );
  }

  // GET /store-performance/busy-hours
  if (url.includes("/store-performance/busy-hours")) {
    return successRes([
      { hour: "11 AM", density: 30 },
      { hour: "12 PM", density: 55 },
      { hour: "1 PM", density: 85 },
      { hour: "2 PM", density: 60 },
      { hour: "3 PM", density: 40 },
      { hour: "4 PM", density: 35 },
      { hour: "5 PM", density: 45 },
      { hour: "6 PM", density: 70 },
      { hour: "7 PM", density: 90 },
      { hour: "8 PM", density: 100 },
      { hour: "9 PM", density: 95 },
      { hour: "10 PM", density: 75 },
      { hour: "11 PM", density: 40 }
    ]);
  }

  // GET /store-performance/compare
  if (url.includes("/store-performance/compare")) {
    let storeIdsStr = config.params?.storeIds || "";
    if (!storeIdsStr) {
      const match = url.match(/[?&]storeIds=([^&]+)/);
      if (match) storeIdsStr = decodeURIComponent(match[1]);
    }
    const storeIds = storeIdsStr ? storeIdsStr.split(",") : [];
    
    // Find matching performance records
    let perfs = db.storePerformance.filter(p => storeIds.includes(p.storeId) || storeIds.includes(p._id));
    
    // Fallback to seed data if localStorage db is out of sync or missing these records
    if (perfs.length === 0 && initialStorePerformance) {
      perfs = initialStorePerformance.filter(p => storeIds.includes(p.storeId) || storeIds.includes(p._id));
    }
    
    return successRes(perfs);
  }

  // GET /store-performance/export
  if (url.includes("/store-performance/export")) {
    return successMsg("Report export started. Your file will download automatically.");
  }

  // Single Store Analytics subroutes
  const singleStorePerfMatch = url.match(/\/store-performance\/([^/]+)\/([^/]+)$/);
  if (singleStorePerfMatch) {
    const storeId = singleStorePerfMatch[1];
    const subRoute = singleStorePerfMatch[2];
    const perf = db.storePerformance.find(p => p.storeId === storeId) || db.storePerformance[0];

    if (subRoute === "revenue") {
      return successRes({
        todayRevenue: perf.revenue || 56000,
        weeklyRevenue: (perf.revenue * 6.5) || 364000,
        monthlyRevenue: (perf.revenue * 27) || 1512000,
        avgOrderValue: perf.avgOrderValue || 200,
        trend: [
          { time: "Mon", revenue: perf.revenue * 0.7 },
          { time: "Tue", revenue: perf.revenue * 0.8 },
          { time: "Wed", revenue: perf.revenue * 0.9 },
          { time: "Thu", revenue: perf.revenue * 0.8 },
          { time: "Fri", revenue: perf.revenue * 1.1 },
          { time: "Sat", revenue: perf.revenue },
          { time: "Sun", revenue: perf.revenue * 0.95 }
        ],
        paymentMethods: [
          { name: "UPI / NetBanking", value: 65 },
          { name: "Credit / Debit Cards", value: 25 },
          { name: "Cash on Delivery", value: 10 }
        ],
        distribution: [
          { category: "Pizzas", value: 60 },
          { category: "Sides & Garlic Bread", value: 25 },
          { category: "Beverages", value: 10 },
          { category: "Desserts", value: 5 }
        ]
      });
    }

    if (subRoute === "orders") {
      return successRes({
        totalOrders: perf.totalOrders || 280,
        completedOrders: perf.completedOrders || 274,
        cancelledOrders: perf.cancelledOrders || 6,
        completionRate: parseFloat(((perf.completedOrders / (perf.totalOrders || 1)) * 100).toFixed(1)) || 97.9,
        avgOrdersPerHour: Math.round(perf.totalOrders / 12) || 23,
        dailyOrders: [
          { time: "Mon", completed: 180, cancelled: 4 },
          { time: "Tue", completed: 210, cancelled: 5 },
          { time: "Wed", completed: 230, cancelled: 6 },
          { time: "Thu", completed: 220, cancelled: 3 },
          { time: "Fri", completed: 260, cancelled: 8 },
          { time: "Sat", completed: perf.completedOrders, cancelled: perf.cancelledOrders },
          { time: "Sun", completed: 250, cancelled: 5 }
        ],
        statusDistribution: [
          { name: "Delivered", value: 92 },
          { name: "Cancelled", value: 2.1 },
          { name: "Returned / Failed", value: 5.9 }
        ],
        peakHours: [
          { hour: "12 PM - 2 PM", count: 85 },
          { hour: "2 PM - 6 PM", count: 45 },
          { hour: "6 PM - 9 PM", count: 120 },
          { hour: "9 PM - 11 PM", count: 70 }
        ]
      });
    }

    if (subRoute === "ratings") {
      return successRes({
        avgRating: perf.customerRating || 4.8,
        totalReviews: 840,
        positiveReviews: 790,
        negativeReviews: 50,
        distribution: [
          { rating: "5 Star", count: 680 },
          { rating: "4 Star", count: 110 },
          { rating: "3 Star", count: 35 },
          { rating: "2 Star", count: 10 },
          { rating: "1 Star", count: 5 }
        ],
        trend: [
          { time: "Jan", rating: 4.5 },
          { time: "Feb", rating: 4.6 },
          { time: "Mar", rating: 4.6 },
          { time: "Apr", rating: 4.7 },
          { time: "May", rating: 4.8 },
          { time: "Jun", rating: perf.customerRating || 4.8 }
        ],
        recentReviews: [
          { customer: "Rohan Malhotra", rating: 5, comment: "Double cheese margherita was extremely hot and loaded!", date: "2026-06-20" },
          { customer: "Isha Sharma", rating: 4, comment: "Quick delivery and nice service. Dips were super tasty.", date: "2026-06-20" },
          { customer: "Amit Patel", rating: 5, comment: "Perfect crust and amazing paneer tikka pizza!", date: "2026-06-19" },
          { customer: "Sneha Varma", rating: 3, comment: "Pizza was good but delivery took around 40 minutes.", date: "2026-06-18" },
          { customer: "Manoj Joshi", rating: 5, comment: "Fabulous, standard taste is maintained.", date: "2026-06-17" }
        ]
      });
    }

    if (subRoute === "inventory") {
      return successRes({
        wastePercent: perf.inventoryWaste || 2.2,
        outOfStockItems: 2,
        stockTurnover: 12.4,
        lowStockAlerts: 4,
        wasteTrend: [
          { time: "Mon", waste: perf.inventoryWaste * 0.9 },
          { time: "Tue", waste: perf.inventoryWaste * 1.1 },
          { time: "Wed", waste: perf.inventoryWaste * 0.8 },
          { time: "Thu", waste: perf.inventoryWaste },
          { time: "Fri", waste: perf.inventoryWaste * 1.2 },
          { time: "Sat", waste: perf.inventoryWaste },
          { time: "Sun", waste: perf.inventoryWaste * 0.95 }
        ],
        consumption: [
          { ingredient: "Processed Cheese", consumed: 85, reorder: false },
          { ingredient: "Pizza Sauce", consumed: 72, reorder: false },
          { ingredient: "Wheat Flour", consumed: 94, reorder: true },
          { ingredient: "Fresh Paneer", consumed: 60, reorder: false }
        ]
      });
    }

    if (subRoute === "products") {
      return successRes({
        list: [
          { product: "Double Cheese Margherita", sold: 1200, revenue: 298800, rating: 4.9, popularity: 98 },
          { product: "Paneer Tikka Pizza", sold: 950, revenue: 379050, rating: 4.8, popularity: 95 },
          { product: "Garlic Breadsticks", sold: 800, revenue: 103200, rating: 4.7, popularity: 89 },
          { product: "Veg Supreme Pizza", sold: 680, revenue: 271320, rating: 4.6, popularity: 85 },
          { product: "Choco Lava Cake", sold: 620, revenue: 61380, rating: 4.8, popularity: 82 }
        ],
        chart: [
          { name: "Margherita", sold: 1200 },
          { name: "Paneer Tikka", sold: 950 },
          { name: "Garlic Bread", sold: 800 },
          { name: "Veg Supreme", sold: 680 },
          { name: "Choco Lava", sold: 620 }
        ]
      });
    }

    if (subRoute === "staff") {
      return successRes({
        ordersProcessed: perf.completedOrders || 274,
        avgPrepTime: perf.avgPreparationTime || 12,
        efficiencyScore: 92,
        performance: [
          { name: "Chef Suresh (Kitchen)", orders: 120, rating: 4.9 },
          { name: "Chef Anil (Oven)", orders: 95, rating: 4.8 },
          { name: "Rider Karan (Delivery)", orders: 35, rating: 4.7 },
          { name: "Rider Rahul (Delivery)", orders: 24, rating: 4.6 }
        ],
        productivity: [
          { hour: "11 AM - 3 PM", speed: 90 },
          { hour: "3 PM - 7 PM", speed: 94 },
          { hour: "7 PM - 11 PM", speed: 92 }
        ]
      });
    }
  }

  // GET /store-performance
  if (url.includes("/store-performance")) {
    if (method === "get") {
      let filtered = [...db.storePerformance];
      
      const search = config.params?.search || "";
      const storeId = config.params?.storeId || "";
      const status = config.params?.status || "";
      const type = config.params?.type || "";
      const city = config.params?.city || "";
      const sort = config.params?.sort || "";
      const order = config.params?.order || "asc";

      if (search) {
        const q = search.toLowerCase().trim();
        filtered = filtered.filter(p => 
          p.storeName.toLowerCase().includes(q) ||
          p.storeId.toLowerCase().includes(q)
        );
      }

      if (storeId && storeId !== "All") {
        filtered = filtered.filter(p => p.storeId === storeId);
      }

      if (status && status !== "All") {
        filtered = filtered.filter(p => p.status === status);
      }

      if (type && type !== "All") {
        filtered = filtered.filter(p => p.storeType === type);
      }

      if (city && city !== "All") {
        filtered = filtered.filter(p => p.city === city);
      }

      // Sorting
      if (sort) {
        filtered.sort((a, b) => {
          let valA = a[sort];
          let valB = b[sort];
          if (typeof valA === "string") {
            return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
          }
          return order === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
        });
      }

      const page = parseInt(config.params?.page || "1", 10);
      const limit = parseInt(config.params?.limit || "10", 10);
      const totalCount = filtered.length;

      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);

      return successRes({
        list: paginated,
        totalCount,
        page,
        limit
      });
    }
  }

  // GET /operating-hours/dashboard
  if (url.includes("/operating-hours/dashboard")) {
    const activeStores = db.stores.filter(s => s.status === "Active" && s.isArchived !== true);
    const openNow = activeStores.filter(s => s.isOpen === true).length;
    const closedStores = db.stores.filter(s => s.isOpen === false || s.status === "Closed").length;
    
    // Count 24x7 stores
    const count24x7 = db.operatingHours.filter(oh => {
      const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
      return days.every(d => oh[d] && oh[d].open === "12:00 AM" && oh[d].close === "12:00 AM" && !oh[d].isClosed);
    }).length;

    // Count holiday closures
    const holidayCount = db.operatingHours.filter(oh => oh.holidaySchedule && oh.holidaySchedule.length > 0).length;

    return successRes({
      storesOpenNow: openNow || 8,
      storesClosed: closedStores || 4,
      stores24x7: count24x7 || 2,
      holidayClosures: holidayCount || 5,
      upcomingChanges: 3
    });
  }

  // GET /operating-hours/export
  if (url.includes("/operating-hours/export")) {
    return successMsg("Report export started. Your file will download automatically.");
  }

  // POST /operating-hours/copy
  if (url.includes("/operating-hours/copy")) {
    const sourceStoreId = data?.sourceStoreId;
    const destStoreId = data?.destStoreId;
    
    const sourceOh = db.operatingHours.find(oh => oh.storeId === sourceStoreId);
    const destIdx = db.operatingHours.findIndex(oh => oh.storeId === destStoreId);
    
    if (sourceOh && destIdx !== -1) {
      db.operatingHours[destIdx] = {
        ...db.operatingHours[destIdx],
        monday: { ...sourceOh.monday },
        tuesday: { ...sourceOh.tuesday },
        wednesday: { ...sourceOh.wednesday },
        thursday: { ...sourceOh.thursday },
        friday: { ...sourceOh.friday },
        saturday: { ...sourceOh.saturday },
        sunday: { ...sourceOh.sunday },
        updatedBy: "Super Admin",
        updatedAt: new Date().toISOString()
      };
      if (!db.operatingHours[destIdx].auditLogs) db.operatingHours[destIdx].auditLogs = [];
      db.operatingHours[destIdx].auditLogs.unshift({
        updatedBy: "Super Admin",
        action: "Copied Timings",
        date: new Date().toISOString(),
        remarks: `Copied schedule from store ${sourceStoreId}`
      });
      saveDB();
      return successMsg("Schedule copied successfully.");
    }
    return errorRes("Source or destination store not found.", 404);
  }

  // PATCH /operating-hours/bulk-update
  if (url.includes("/operating-hours/bulk-update")) {
    const storeIds = data?.storeIds || [];
    const weekdays = data?.weekdays || [];
    const open = data?.open || "09:00 AM";
    const close = data?.close || "10:00 PM";
    const isClosed = data?.isClosed || false;

    db.operatingHours.forEach((oh) => {
      if (storeIds.includes(oh.storeId)) {
        weekdays.forEach(day => {
          const d = day.toLowerCase();
          if (oh[d]) {
            oh[d] = { open, close, isClosed };
          }
        });
        oh.updatedBy = "Super Admin";
        oh.updatedAt = new Date().toISOString();
        if (!oh.auditLogs) oh.auditLogs = [];
        oh.auditLogs.unshift({
          updatedBy: "Super Admin",
          action: "Bulk Updated Timings",
          date: new Date().toISOString(),
          remarks: `Bulk updated days: ${weekdays.join(", ")}`
        });
      }
    });
    saveDB();
    return successMsg("Bulk update completed successfully.");
  }

  // Store-specific operations
  const storeStatusMatch = url.match(/\/stores\/([^/]+)\/status$/);
  if (storeStatusMatch && method === "patch") {
    const storeId = storeStatusMatch[1];
    const storeIdx = db.stores.findIndex(s => s._id === storeId);
    
    if (storeIdx !== -1) {
      const newStatus = data?.status || "Closed";
      const newIsOpen = data?.isOpen !== undefined ? data.isOpen : false;
      
      db.stores[storeIdx].status = newStatus;
      db.stores[storeIdx].isOpen = newIsOpen;
      db.stores[storeIdx].updatedAt = new Date().toISOString();
      
      // Also add audit log
      const ohIdx = db.operatingHours.findIndex(oh => oh.storeId === storeId);
      if (ohIdx !== -1) {
        if (!db.operatingHours[ohIdx].auditLogs) db.operatingHours[ohIdx].auditLogs = [];
        db.operatingHours[ohIdx].auditLogs.unshift({
          updatedBy: "Super Admin",
          action: "Status Changed / Temporary Closure",
          date: new Date().toISOString(),
          remarks: `Status updated to ${newStatus}. Closure reason: ${data?.reason || "N/A"}`
        });
        db.operatingHours[ohIdx].updatedAt = new Date().toISOString();
      }
      
      saveDB();
      return successMsg("Store status updated successfully.");
    }
    return errorRes("Store not found.", 404);
  }

  const specificOhHolidaysMatch = url.match(/\/operating-hours\/([^/]+)\/holidays$/);
  if (specificOhHolidaysMatch && method === "patch") {
    const storeId = specificOhHolidaysMatch[1];
    const ohIdx = db.operatingHours.findIndex(oh => oh.storeId === storeId);
    
    if (ohIdx !== -1) {
      db.operatingHours[ohIdx].holidaySchedule = data?.holidaySchedule || [];
      db.operatingHours[ohIdx].updatedBy = "Super Admin";
      db.operatingHours[ohIdx].updatedAt = new Date().toISOString();
      
      if (!db.operatingHours[ohIdx].auditLogs) db.operatingHours[ohIdx].auditLogs = [];
      db.operatingHours[ohIdx].auditLogs.unshift({
        updatedBy: "Super Admin",
        action: "Updated Holiday Schedule",
        date: new Date().toISOString(),
        remarks: `Updated holidays. Total defined: ${data?.holidaySchedule?.length || 0}`
      });
      
      saveDB();
      return successRes(db.operatingHours[ohIdx]);
    }
    return errorRes("Operating hours not found.", 404);
  }

  const specificOhMatch = url.match(/\/operating-hours\/([^/]+)$/);
  if (specificOhMatch) {
    const storeId = specificOhMatch[1];
    const oh = db.operatingHours.find(o => o.storeId === storeId);
    
    if (method === "get") {
      if (oh) return successRes(oh);
      return errorRes("Operating hours not found.", 404);
    }
    
    if (method === "patch") {
      const ohIdx = db.operatingHours.findIndex(o => o.storeId === storeId);
      if (ohIdx !== -1) {
        db.operatingHours[ohIdx] = {
          ...db.operatingHours[ohIdx],
          ...data,
          updatedBy: "Super Admin",
          updatedAt: new Date().toISOString()
        };
        if (!db.operatingHours[ohIdx].auditLogs) db.operatingHours[ohIdx].auditLogs = [];
        db.operatingHours[ohIdx].auditLogs.unshift({
          updatedBy: "Super Admin",
          action: "Updated Weekly Hours",
          date: new Date().toISOString(),
          remarks: "Modified days of week timings"
        });
        
        saveDB();
        return successRes(db.operatingHours[ohIdx]);
      }
      return errorRes("Operating hours not found.", 404);
    }
  }

  // GET /operating-hours (Listing with search, pagination, sort, filter)
  if (url.includes("/operating-hours") && method === "get") {
    let list = db.operatingHours.map(oh => {
      const store = db.stores.find(s => s._id === oh.storeId) || { storeName: "Unknown Store", storeCode: "N/A", status: "Closed", isOpen: false, storeType: "Regular", address: { city: "Indore" } };
      return {
        _id: oh._id,
        storeId: oh.storeId,
        storeName: store.storeName,
        storeCode: store.storeCode,
        status: store.status,
        isOpen: store.isOpen,
        storeType: store.storeType,
        city: store.address?.city || "Indore",
        schedule: oh,
        lastUpdated: oh.updatedAt
      };
    });

    const search = config.params?.search || "";
    const status = config.params?.status || "";
    const type = config.params?.type || "";
    const city = config.params?.city || "";
    const sort = config.params?.sort || "storeName";
    const order = config.params?.order || "asc";

    if (search) {
      const q = search.toLowerCase().trim();
      list = list.filter(item => 
        item.storeName.toLowerCase().includes(q) ||
        item.storeCode.toLowerCase().includes(q)
      );
    }

    if (status && status !== "All") {
      const isOpenVal = status === "Open";
      list = list.filter(item => item.isOpen === isOpenVal);
    }

    if (type && type !== "All") {
      list = list.filter(item => item.storeType === type);
    }

    if (city && city !== "All") {
      list = list.filter(item => item.city.toLowerCase() === city.toLowerCase());
    }

    // Sort
    list.sort((a, b) => {
      let valA = a[sort];
      let valB = b[sort];
      if (typeof valA === "string") {
        return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return order === "asc" ? (valA || 0) - (valB || 0) : (valB || 0) - (valA || 0);
    });

    const page = parseInt(config.params?.page || "1", 10);
    const limit = parseInt(config.params?.limit || "10", 10);
    const totalCount = list.length;

    const startIndex = (page - 1) * limit;
    const paginated = list.slice(startIndex, startIndex + limit);

    return successRes({
      list: paginated,
      totalCount,
      page,
      limit
    });
  }

  // Default Fallback: Success for all operations so the admin panel continues working
  return successRes({ success: true, message: "Stubbed operational response" });
}
