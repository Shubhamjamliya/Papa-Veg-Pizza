export const mockStores = [
  { id: "store-1", name: "Papa Veg Pizza - Indore Central", city: "Indore", rating: 4.8 },
  { id: "store-2", name: "Papa Veg Pizza - Bhopal Zone", city: "Bhopal", rating: 4.6 },
  { id: "store-3", name: "Papa Veg Pizza - Ujjain Branch", city: "Ujjain", rating: 4.4 },
  { id: "store-4", name: "Papa Veg Pizza - Gwalior Hub", city: "Gwalior", rating: 4.5 },
  { id: "store-5", name: "Papa Veg Pizza - Jabalpur Outlet", city: "Jabalpur", rating: 4.2 }
];

export const mockCustomers = [
  { id: "cust-1", name: "Amit Sharma", phone: "+91 98260 12345", email: "amit.sharma@gmail.com" },
  { id: "cust-2", name: "Priya Patel", phone: "+91 99770 55443", email: "priya.patel@yahoo.com" },
  { id: "cust-3", name: "Rohan Malhotra", phone: "+91 98930 54321", email: "rohan.malhotra@outlook.com" },
  { id: "cust-4", name: "Rashi Kumar", phone: "+91 99887 76655", email: "rashi.kumar@gmail.com" },
  { id: "cust-5", name: "Vikram Rathore", phone: "+91 88401 22894", email: "vikram.rathore@gmail.com" },
  { id: "cust-6", name: "Sneha Reddy", phone: "+91 74029 88390", email: "sneha.reddy@gmail.com" },
  { id: "cust-7", name: "Karan Johar", phone: "+91 97520 98765", email: "karan.johar@gmail.com" },
  { id: "cust-8", name: "Shweta Tiwari", phone: "+91 98260 99887", email: "shweta.tiwari@gmail.com" }
];

// Helper to generate revenue records for the past 30 days
const generateRevenueRecords = () => {
  const records = [];
  const now = new Date();
  
  // Base daily values per store
  const storeBases = {
    "store-1": { baseRev: 45000, baseOrders: 90, expPct: 0.65 },
    "store-2": { baseRev: 35000, baseOrders: 70, expPct: 0.68 },
    "store-3": { baseRev: 22000, baseOrders: 45, expPct: 0.70 },
    "store-4": { baseRev: 18000, baseOrders: 38, expPct: 0.72 },
    "store-5": { baseRev: 14000, baseOrders: 30, expPct: 0.75 }
  };

  for (let i = 0; i < 30; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const dateString = date.toISOString().split("T")[0];

    // Weekend multiplier
    const dayOfWeek = date.getDay();
    const multiplier = (dayOfWeek === 0 || dayOfWeek === 6) ? 1.45 : 1.0; // Sunday & Saturday peak

    mockStores.forEach(store => {
      const base = storeBases[store.id];
      // Random fluctuations (+/- 15%)
      const rand = 0.85 + Math.random() * 0.3;
      
      const totalOrders = Math.round(base.baseOrders * multiplier * rand);
      const grossRevenue = Math.round(base.baseRev * multiplier * rand);
      
      const discountAmount = Math.round(grossRevenue * (0.06 + Math.random() * 0.04)); // 6-10% discount
      const refundAmount = Math.random() < 0.15 ? Math.round(grossRevenue * 0.02) : 0; // 15% chance of small refund
      
      const deliveryCharges = totalOrders * 30; // ₹30 delivery charge average
      const taxCollected = Math.round((grossRevenue - discountAmount) * 0.05); // 5% GST
      
      const netRevenue = grossRevenue - discountAmount - refundAmount + deliveryCharges + taxCollected;
      const totalExpenses = Math.round(netRevenue * base.expPct); // 65-75% expenses
      const totalProfit = netRevenue - totalExpenses;

      records.push({
        _id: `rev-${store.id}-${dateString}`,
        franchiseId: store.id,
        date: dateString,
        totalOrders,
        grossRevenue,
        discountAmount,
        refundAmount,
        deliveryCharges,
        taxCollected,
        netRevenue,
        totalExpenses,
        totalProfit
      });
    });
  }
  return records;
};

export const mockFranchiseRevenue = generateRevenueRecords();

// Top products mock data
export const mockTopProducts = [
  { name: "Paneer Tikka Pizza", quantity: 1420, revenue: 566580, contribution: 32 },
  { name: "Veg Supreme Pizza", quantity: 980, revenue: 391020, contribution: 22 },
  { name: "Margherita Pizza", quantity: 840, revenue: 209160, contribution: 12 },
  { name: "Farmhouse Delight Pizza", quantity: 720, revenue: 230400, contribution: 13 },
  { name: "Garlic Breadsticks", quantity: 950, revenue: 122550, contribution: 7 },
  { name: "Chocolate Lava Cake", quantity: 810, revenue: 80190, contribution: 5 },
  { name: "Pepsi Cold Drink", quantity: 1200, revenue: 60000, contribution: 3 },
  { name: "Capsicum Onion Pizza", quantity: 310, revenue: 58900, contribution: 3 },
  { name: "Spicy Paneer Pocket", quantity: 240, revenue: 28800, contribution: 2 },
  { name: "Tomato Basil Soup", quantity: 120, revenue: 10800, contribution: 1 }
];

// Refund summary list
export const mockRefundRequests = [
  { id: "REF-90410", orderId: "PVP-1092", reason: "Cold pizza delivered after 75 mins delay", amount: 439, status: "Completed", processedBy: "Admin Shubham", date: "2026-06-22" },
  { id: "REF-90398", orderId: "PVP-1088", reason: "Wrong toppings - Paneer Tikka instead of Veg Supreme", amount: 399, status: "Completed", processedBy: "System Auto", date: "2026-06-21" },
  { id: "REF-90352", orderId: "PVP-1075", reason: "Order cancelled by store due to out of stock cheese", amount: 320, status: "Completed", processedBy: "Admin Shubham", date: "2026-06-20" },
  { id: "REF-90341", orderId: "PVP-1064", reason: "Burnt crust and missing garlic dip add-on", amount: 150, status: "Refunded", processedBy: "System Auto", date: "2026-06-19" },
  { id: "REF-90320", orderId: "PVP-1051", reason: "Payment deducted twice, order rejected by gateway", amount: 590, status: "Completed", processedBy: "Admin Shubham", date: "2026-06-18" },
  { id: "REF-90299", orderId: "PVP-1040", reason: "Rider spill/damaged pizza during transport", amount: 499, status: "Cancelled", processedBy: "System Auto", date: "2026-06-17" }
];
