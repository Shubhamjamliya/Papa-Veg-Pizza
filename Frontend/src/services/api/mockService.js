import { initialStores, initialManagers } from "../../modules/Food/pages/franchise-admin/storeManagement/mockStoresData.js";

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
  { id: "cat-1", name: "Pizzas", status: "Active", description: "Freshly baked vegetarian pizzas", order: 1, isGlobal: true, isApproved: true },
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
  managers: getStorageItem("managers", initialManagers)
};

const saveDB = () => {
  Object.keys(db).forEach((key) => {
    setStorageItem(key, db[key]);
  });
};

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

  // Default Fallback: Success for all operations so the admin panel continues working
  return successRes({ success: true, message: "Stubbed operational response" });
}
