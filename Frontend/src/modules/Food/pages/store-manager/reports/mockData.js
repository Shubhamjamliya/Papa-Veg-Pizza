// Dynamic Mock Data Generator for Daily Sales Page
// Generates 30 days of high-fidelity daily sales records relative to the current date

const generateMockSalesData = () => {
  const data = [];
  const today = new Date();
  
  // Indian names and pizza items for realism
  const indianNames = [
    "Aarav Sharma", "Ananya Patel", "Rohan Verma", "Aditi Rao", "Vikram Singh",
    "Pooja Hegde", "Kabir Mehta", "Diya Iyer", "Siddharth Malhotra", "Neha Gupta",
    "Rahul Dev", "Vikram Rathore", "Karan Singh", "Rohan Malhotra", "Isha Sharma",
    "Amit Verma", "Pooja Patel", "Deepak Rawat"
  ];

  const pizzaItems = [
    { name: "Paneer Tikka Pizza", price: 499 },
    { name: "Double Cheese Margherita", price: 399 },
    { name: "Veg Supreme Pizza", price: 549 },
    { name: "Farmhouse Delight Pizza", price: 449 },
    { name: "Tandoori Paneer Pizza", price: 519 },
    { name: "Garlic Breadsticks", price: 149 },
    { name: "Choco Lava Cake", price: 129 },
    { name: "Pepsi WebP Bottle", price: 60 }
  ];

  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Seeded random helper based on index to keep data stable across renders
    const seedRandom = (max, min = 0) => {
      const val = Math.sin(i + 1.5) * 10000;
      const rand = val - Math.floor(val);
      return Math.floor(rand * (max - min)) + min;
    };

    const totalOrders = seedRandom(120, 45);
    const completedOrders = Math.floor(totalOrders * 0.9);
    const cancelledOrders = seedRandom(totalOrders - completedOrders, 1);
    const refundedOrders = totalOrders - completedOrders - cancelledOrders;

    // Financials
    const subtotal = completedOrders * seedRandom(550, 350);
    const discountAmount = Math.floor(subtotal * seedRandom(15, 5) / 100);
    const taxAmount = Math.floor((subtotal - discountAmount) * 0.05); // 5% GST on food
    const deliveryCharge = completedOrders * seedRandom(40, 20);
    const totalAmount = subtotal - discountAmount + taxAmount + deliveryCharge;

    const cancelledRevenue = cancelledOrders * seedRandom(500, 350);
    const refundAmount = refundedOrders * seedRandom(450, 300);

    // Payments
    const cashSales = Math.floor(totalAmount * seedRandom(35, 15) / 100);
    const upiSales = Math.floor((totalAmount - cashSales) * seedRandom(65, 45) / 100);
    const cardSales = Math.floor((totalAmount - cashSales - upiSales) * 0.7);
    const walletSales = totalAmount - cashSales - upiSales - cardSales;

    const paymentDistribution = {
      cash: cashSales,
      upi: upiSales,
      card: cardSales,
      wallet: walletSales
    };

    const paymentTransactions = {
      cash: Math.floor(completedOrders * (cashSales / totalAmount)),
      upi: Math.floor(completedOrders * (upiSales / totalAmount)),
      card: Math.floor(completedOrders * (cardSales / totalAmount)),
      wallet: completedOrders - Math.floor(completedOrders * (cashSales / totalAmount)) - Math.floor(completedOrders * (upiSales / totalAmount)) - Math.floor(completedOrders * (cardSales / totalAmount))
    };

    // Sales growth compared to yesterday (simulated)
    const salesGrowth = (seedRandom(150, -100) / 10).toFixed(1);

    // Hourly Sales (from 10:00 to 22:00)
    const hourlySales = [];
    for (let h = 10; h <= 22; h++) {
      const hourStr = `${h.toString().padStart(2, '0')}:00`;
      const hourWeight = h === 13 || h === 14 || h === 20 || h === 21 ? 2.5 : 1.0; // Lunch & dinner peak
      const hrRev = Math.floor((totalAmount / 13) * hourWeight * (seedRandom(120, 80) / 100));
      hourlySales.push({ time: hourStr, revenue: hrRev });
    }

    // Top Items sold this day
    const topSellingItems = [];
    const itemIndices = [0, 1, 2, 3, 4, 5, 6, 7];
    // Shuffle slightly
    itemIndices.sort(() => seedRandom(10, -10));
    for (let j = 0; j < 5; j++) {
      const item = pizzaItems[itemIndices[j]];
      const qty = seedRandom(25, 5);
      topSellingItems.push({
        name: item.name,
        quantity: qty,
        revenue: qty * item.price
      });
    }

    // Top Customers this day
    const topCustomers = [];
    const customerIndices = Array.from({ length: indianNames.length }, (_, k) => k);
    customerIndices.sort(() => seedRandom(10, -10));
    for (let j = 0; j < 5; j++) {
      const name = indianNames[customerIndices[j]];
      const custOrders = seedRandom(3, 1);
      topCustomers.push({
        name: name,
        orders: custOrders,
        totalSpent: custOrders * seedRandom(650, 400)
      });
    }

    data.push({
      date: dateStr,
      revenue: totalAmount,
      totalOrders,
      completedOrders,
      cancelledOrders,
      refundedOrders,
      avgOrderValue: Math.round(totalAmount / completedOrders),
      cashSales,
      onlineSales: upiSales + cardSales + walletSales,
      cancelledRevenue,
      refundAmount,
      salesGrowth: parseFloat(salesGrowth),
      subtotal,
      discountAmount,
      taxAmount,
      deliveryCharge,
      paymentDistribution,
      paymentTransactions,
      orderStatusDistribution: {
        completed: completedOrders,
        cancelled: cancelledOrders,
        refunded: refundedOrders
      },
      hourlySales,
      topSellingItems,
      topCustomers
    });
  }
  return data;
};

export const mockDailySales = generateMockSalesData();

const generateMockOrders = () => {
  const data = [];
  const today = new Date();
  
  const indianNames = [
    "Aarav Sharma", "Ananya Patel", "Rohan Verma", "Aditi Rao", "Vikram Singh",
    "Pooja Hegde", "Kabir Mehta", "Diya Iyer", "Siddharth Malhotra", "Neha Gupta",
    "Rahul Dev", "Vikram Rathore", "Karan Singh", "Rohan Malhotra", "Isha Sharma",
    "Amit Verma", "Pooja Patel", "Deepak Rawat"
  ];

  const pizzaItems = [
    { name: "Paneer Tikka Pizza", price: 499 },
    { name: "Double Cheese Margherita", price: 399 },
    { name: "Veg Supreme Pizza", price: 549 },
    { name: "Farmhouse Delight Pizza", price: 449 },
    { name: "Tandoori Paneer Pizza", price: 519 },
    { name: "Garlic Breadsticks", price: 149 },
    { name: "Choco Lava Cake", price: 129 },
    { name: "Pepsi WebP Bottle", price: 60 }
  ];

  const statuses = ["completed", "completed", "completed", "completed", "cancelled", "refunded", "pending", "preparing", "delivered"];
  const paymentMethods = ["UPI / PhonePe", "UPI / Paytm", "Card / HDFC", "Wallet / Amazon", "COD"];
  const orderTypes = ["delivery", "takeaway", "dine-in"];
  const chefs = ["Chef Vijay", "Chef Sanjay", "Chef Anil"];
  const cashiers = ["Cashier Shubham", "Cashier Amit", "Cashier Pooja"];
  const managers = ["Manager Rohan", "Manager Nilesh"];
  const riders = ["Rider Ramesh Singh", "Rider Vikram Kumar", "Rider Satish Dev"];

  for (let i = 1; i <= 100; i++) {
    // Generate dates spread across the last 30 days
    const d = new Date(today);
    d.setDate(today.getDate() - (i % 30));
    
    // Set random hour
    const hour = 10 + (i % 13);
    const minute = 10 + (i % 50);
    d.setHours(hour, minute, 0, 0);

    const createdAt = d.toISOString();
    
    const seedRandom = (max, min = 0) => {
      const val = Math.sin(i + 2.5) * 10000;
      const rand = val - Math.floor(val);
      return Math.floor(rand * (max - min)) + min;
    };

    const status = statuses[i % statuses.length];
    const paymentMethod = paymentMethods[i % paymentMethods.length];
    const orderType = orderTypes[i % orderTypes.length];
    const totalItems = seedRandom(4, 1);
    
    const items = [];
    let subtotal = 0;
    for (let k = 0; k < totalItems; k++) {
      const item = pizzaItems[(i + k) % pizzaItems.length];
      const qty = seedRandom(3, 1);
      items.push({
        _id: `item-${i}-${k}`,
        productId: `prod-${(i + k) % pizzaItems.length}`,
        name: item.name,
        quantity: qty,
        price: item.price,
        total: qty * item.price
      });
      subtotal += qty * item.price;
    }

    const hasCoupon = i % 4 === 0;
    const coupon = hasCoupon ? {
      _id: `coupon-${i}`,
      code: i % 8 === 0 ? "PIZZA50" : "WELCOME100",
      discountType: i % 8 === 0 ? "fixed" : "percentage",
      discountValue: i % 8 === 0 ? 50 : 10,
    } : null;

    let discountAmount = 0;
    if (coupon) {
      if (coupon.discountType === "fixed") {
        discountAmount = coupon.discountValue;
      } else {
        discountAmount = Math.floor(subtotal * (coupon.discountValue / 100));
      }
    }

    const taxAmount = Math.floor((subtotal - discountAmount) * 0.05);
    const deliveryCharge = orderType === "delivery" ? 40 : 0;
    const totalAmount = subtotal - discountAmount + taxAmount + deliveryCharge;

    const preparationTime = seedRandom(35, 12);
    const deliveryTime = orderType === "delivery" ? seedRandom(40, 15) : 0;

    const customerName = indianNames[i % indianNames.length];
    const customerPhone = `98765${(10000 + i).toString().slice(1)}`;
    const customerEmail = `${customerName.toLowerCase().replace(" ", ".")}@gmail.com`;

    const chef = chefs[i % chefs.length];
    const cashier = cashiers[i % cashiers.length];
    const manager = managers[i % managers.length];
    const rider = orderType === "delivery" ? riders[i % riders.length] : null;

    // Timeline timestamps
    const prepStart = new Date(d.getTime() + 5 * 60000).toISOString();
    const readyTime = new Date(d.getTime() + (5 + preparationTime) * 60000).toISOString();
    const completedTime = new Date(d.getTime() + (5 + preparationTime + 10) * 60000).toISOString();

    const preparationTimeline = [
      { event: "Order Received", timestamp: createdAt },
      { event: "Preparation Started", timestamp: prepStart },
      { event: "Ready For Pickup", timestamp: readyTime },
      { event: "Completed", timestamp: completedTime }
    ];

    const delAssigned = new Date(d.getTime() + 7 * 60000).toISOString();
    const delPicked = new Date(d.getTime() + (7 + 10) * 60000).toISOString();
    const delOut = new Date(d.getTime() + (7 + 15) * 60000).toISOString();
    const delDelivered = new Date(d.getTime() + (7 + 15 + deliveryTime) * 60000).toISOString();

    const deliveryTimeline = orderType === "delivery" ? [
      { event: "Assigned Rider", timestamp: delAssigned },
      { event: "Picked Up", timestamp: delPicked },
      { event: "Out For Delivery", timestamp: delOut },
      { event: "Delivered", timestamp: delDelivered }
    ] : [];

    const reviews = [
      "Extremely tasty pizza! Loved the hot cheese.",
      "Delivery was on time. Good service.",
      "The crust was a bit dry but paneer tikka was great.",
      "Super fresh and loaded toppings! Ordered again.",
      "Nice taste, highly recommended."
    ];
    const rating = i % 5 === 0 ? 3 : i % 3 === 0 ? 4 : 5;
    const reviewText = status === "completed" || status === "delivered" ? reviews[i % reviews.length] : null;

    const refund = status === "refunded" ? {
      _id: `ref-${i}`,
      orderId: `ord-${i}`,
      amount: totalAmount,
      reason: i % 2 === 0 ? "Wrong item delivered" : "Cold food complaints",
      approvedBy: "Manager Rohan",
      status: i % 3 === 0 ? "processed" : "approved",
      createdAt: new Date(d.getTime() + 120 * 60000).toISOString()
    } : null;

    data.push({
      _id: `ord-${i}`,
      orderNumber: `PVP-${1000 + i}`,
      storeId: "st-indore-01",
      customerId: `cust-${i % 8}`,
      customer: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
        address: orderType === "delivery" ? "102, Vijay Nagar, Indore, MP" : "Store Pickup",
        orderHistoryCount: seedRandom(25, 2)
      },
      orderType,
      paymentMethod,
      paymentStatus: status === "refunded" ? "refunded" : status === "cancelled" ? "failed" : "paid",
      orderStatus: status,
      totalAmount,
      subtotal,
      discountAmount,
      taxAmount,
      deliveryCharge,
      couponId: coupon ? coupon._id : null,
      coupon: coupon,
      preparationTime,
      deliveryTime,
      createdAt,
      items,
      preparationTimeline,
      deliveryTimeline,
      staff: {
        chef,
        cashier,
        manager,
        rider
      },
      customerRating: reviewText ? {
        stars: rating,
        reviewText,
        reviewDate: completedTime
      } : null,
      refund
    });
  }
  return data;
};

export const mockDetailedOrders = generateMockOrders();

// Dynamic Mock Data for Kitchen Performance
const generateMockKitchenPerformance = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    const seedRandom = (max, min = 0) => {
      const val = Math.sin(i + 4.5) * 10000;
      const rand = val - Math.floor(val);
      return Math.floor(rand * (max - min)) + min;
    };

    const orders = seedRandom(140, 50);
    const avgPrepTime = seedRandom(28, 14); // in minutes
    const delayedOrders = seedRandom(Math.max(2, Math.floor(orders * 0.12)), 2);
    const wastePercentage = parseFloat((seedRandom(60, 15) / 10).toFixed(1)); // 1.5% to 6.0%
    const efficiency = seedRandom(98, 82); // 82% to 98%
    const shortages = seedRandom(4, 0);

    data.push({
      date: dateStr,
      orders,
      avgPrepTime,
      delayedOrders,
      wastePercentage,
      efficiency,
      shortages,
      sampleOrderId: `PVP-${1000 + seedRandom(99, 1)}`,
      sampleWasteId: `waste-${200 + seedRandom(99, 1)}`
    });
  }
  return data;
};

export const mockStoreKitchenPerformance = generateMockKitchenPerformance();

// Helper generators for details
export const getMockKitchenDayDetails = (date) => {
  // Stable random seed based on date string hash
  let hash = 0;
  for (let i = 0; i < date.length; i++) {
    hash = date.charCodeAt(i) + ((hash << 5) - hash);
  }
  const seedRandom = (max, min = 0) => {
    const val = Math.sin(hash) * 10000;
    const rand = val - Math.floor(val);
    return Math.floor(rand * (max - min)) + min;
  };

  const total = seedRandom(130, 60);
  const delayed = seedRandom(Math.floor(total * 0.15), 1);
  const cancelled = seedRandom(5, 1);
  const completed = total - delayed - cancelled;

  return {
    ordersProcessed: {
      total,
      completed,
      delayed,
      cancelled
    },
    staffOnDuty: [
      { name: "Chef Sanjay Kumar", role: "Pizza Assembly Specialist", ordersHandled: seedRandom(40, 20), avgPrepTime: seedRandom(22, 14) },
      { name: "Chef Anil Sharma", role: "Oven & Baking Lead", ordersHandled: seedRandom(50, 30), avgPrepTime: seedRandom(15, 10) },
      { name: "Chef Priya Patel", role: "Packaging Specialist", ordersHandled: seedRandom(60, 35), avgPrepTime: seedRandom(6, 3) }
    ],
    stationUtilization: {
      pizza: seedRandom(85, 60),
      baking: seedRandom(80, 55),
      packaging: seedRandom(90, 70)
    },
    ingredientUsage: [
      { name: "Mozzarella Cheese", usedQty: `${seedRandom(30, 15)} kg`, remainingQty: `${seedRandom(12, 3)} kg` },
      { name: "Pizza Sauce", usedQty: `${seedRandom(25, 12)} L`, remainingQty: `${seedRandom(8, 2)} L` },
      { name: "Tandoori Paneer", usedQty: `${seedRandom(15, 8)} kg`, remainingQty: `${seedRandom(6, 1)} kg` },
      { name: "Sliced Veggies Mix", usedQty: `${seedRandom(12, 6)} kg`, remainingQty: `${seedRandom(5, 1)} kg` }
    ],
    delays: [
      { orderId: `PVP-${1000 + seedRandom(100)}`, duration: seedRandom(25, 12), reason: "High order volume / Prep queue backlog" },
      { orderId: `PVP-${1000 + seedRandom(100, 101)}`, duration: seedRandom(30, 15), reason: "Mozzarella stock replenishing delay" },
      { orderId: `PVP-${1000 + seedRandom(100, 201)}`, duration: seedRandom(20, 10), reason: "Special instructions customization lag" }
    ],
    complaints: [
      { type: "Delayed Delivery", orderId: `PVP-${1000 + seedRandom(100)}`, description: "Delivery delayed by over 20 minutes from promised time.", status: "Resolved (Coupon Shared)" },
      { type: "Cold Pizza", orderId: `PVP-${1000 + seedRandom(100, 101)}`, description: "Pizza arrived cold, cheese was solidified.", status: "Resolved (Replacement Pizza Sent)" }
    ],
    wasteRecords: [
      { id: `waste-${seedRandom(50, 1)}`, ingredient: "Mozzarella Cheese", quantity: "1.2 kg", cost: 600, reason: "Spill during prep", responsibleStaff: "Chef Sanjay Kumar" },
      { id: `waste-${seedRandom(100, 51)}`, ingredient: "Paneer Cube Pack", quantity: "0.5 kg", cost: 220, reason: "Expired shelf life", responsibleStaff: "Chef Anil Sharma" }
    ]
  };
};

export const getMockDelayAnalysis = (orderId) => {
  return {
    orderId: orderId || "PVP-1024",
    delayDuration: 18,
    reason: "Equipment Failure (Pizza Oven heating element breakdown)",
    responsibleStation: "Baking Station",
    resolution: "Switched baking queue to deck 2 oven, notified maintenance team."
  };
};

export const getMockWasteAnalysis = (wasteId) => {
  return {
    id: wasteId || "waste-105",
    ingredient: "Mozzarella Cheese",
    quantityWasted: "1.8 kg",
    cost: 900,
    reason: "Slicer machine jammed, cutting unevenly, making cheese unusable.",
    responsibleStaff: "Chef Sanjay Kumar",
    createdAt: "2026-06-25T14:30:00Z"
  };
};

// Staff Performance Mock Data
export const mockStaffPerformance = [
  {
    _id: "staff-1",
    name: "Chef Sanjay Kumar",
    role: "Chef",
    station: "Pizza Station",
    profileImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2024-05-15",
    status: "Active",
    attendance: 96,
    orders: 245,
    avgPrepTime: 14.5,
    complaints: 1,
    efficiency: 98,
    rating: 4.8
  },
  {
    _id: "staff-2",
    name: "Chef Anil Sharma",
    role: "Chef",
    station: "Baking Station",
    profileImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2024-08-22",
    status: "Active",
    attendance: 94,
    orders: 210,
    avgPrepTime: 11.2,
    complaints: 0,
    efficiency: 95,
    rating: 4.7
  },
  {
    _id: "staff-3",
    name: "Chef Priya Patel",
    role: "Kitchen Staff",
    station: "Packaging Station",
    profileImage: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2025-01-10",
    status: "Active",
    attendance: 98,
    orders: 280,
    avgPrepTime: 4.8,
    complaints: 2,
    efficiency: 97,
    rating: 4.9
  },
  {
    _id: "staff-4",
    name: "Rohan Verma",
    role: "Cashier",
    station: "N/A",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2025-03-01",
    status: "Active",
    attendance: 92,
    orders: 185,
    avgPrepTime: 2.1,
    complaints: 0,
    efficiency: 94,
    rating: 4.5
  },
  {
    _id: "staff-5",
    name: "Vikram Rathore",
    role: "Delivery Rider",
    station: "N/A",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2025-04-12",
    status: "Active",
    attendance: 90,
    orders: 160,
    avgPrepTime: 24.5,
    complaints: 3,
    efficiency: 88,
    rating: 4.2
  },
  {
    _id: "staff-6",
    name: "Pooja Patel",
    role: "Store Manager",
    station: "N/A",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    joiningDate: "2023-11-01",
    status: "Active",
    attendance: 99,
    orders: 320,
    avgPrepTime: 1.5,
    complaints: 0,
    efficiency: 99,
    rating: 4.9
  }
];

export const getMockStaffDetails = (staffId) => {
  const staff = mockStaffPerformance.find(s => s._id === staffId) || mockStaffPerformance[0];
  
  return {
    profile: {
      photo: staff.profileImage,
      name: staff.name,
      role: staff.role,
      station: staff.station,
      joiningDate: staff.joiningDate,
      status: staff.status,
      employeeId: staff._id.toUpperCase()
    },
    attendanceHistory: [
      { date: "2026-06-25", checkIn: "09:00 AM", checkOut: "05:30 PM", status: "Present" },
      { date: "2026-06-24", checkIn: "08:55 AM", checkOut: "05:32 PM", status: "Present" },
      { date: "2026-06-23", checkIn: "09:02 AM", checkOut: "05:30 PM", status: "Present" },
      { date: "2026-06-22", checkIn: "09:00 AM", checkOut: "05:30 PM", status: "Present" },
      { date: "2026-06-21", checkIn: "--", checkOut: "--", status: "Weekly Off" },
      { date: "2026-06-20", checkIn: "09:15 AM", checkOut: "05:45 PM", status: "Late Checkin" },
      { date: "2026-06-19", checkIn: "09:00 AM", checkOut: "05:30 PM", status: "Present" }
    ],
    attendancePercentage: staff.attendance,
    ordersCompleted: {
      total: staff.orders,
      completed: Math.floor(staff.orders * 0.95),
      delayed: Math.floor(staff.orders * 0.03),
      cancelled: Math.floor(staff.orders * 0.02)
    },
    preparationStats: {
      avgPrepTime: staff.avgPrepTime,
      fastestTime: (staff.avgPrepTime * 0.6).toFixed(1),
      slowestTime: (staff.avgPrepTime * 1.5).toFixed(1),
      efficiency: staff.efficiency
    },
    complaints: [
      { date: "2026-06-18", complaintType: "Incorrect toppings", description: "Customer complained that extra paneer was not added.", status: "Resolved" }
    ],
    achievements: [
      { type: "Employee of the Month", description: "Recognized for highest efficiency and punctuality in May 2026." },
      { type: "Fastest Prep Time", description: "Achieved record 12-minute paneer pizza bake time." }
    ],
    ratings: {
      avgRating: staff.rating,
      reviewCount: 42,
      stars: staff.rating,
      customerFeedback: [
        { reviewer: "Aarav Sharma", stars: 5, comment: "Extremely fast service! Pizza was super hot." },
        { reviewer: "Ananya Patel", stars: 4, comment: "Bake quality was excellent, cheese was bubbly." }
      ]
    }
  };
};

export const getMockStaffComparison = (staffAId, staffBId) => {
  const staffA = mockStaffPerformance.find(s => s._id === staffAId) || mockStaffPerformance[0];
  const staffB = mockStaffPerformance.find(s => s._id === staffBId) || mockStaffPerformance[1];

  return {
    staffA: {
      id: staffA._id,
      name: staffA.name,
      avatar: staffA.profileImage,
      role: staffA.role,
      station: staffA.station
    },
    staffB: {
      id: staffB._id,
      name: staffB.name,
      avatar: staffB.profileImage,
      role: staffB.role,
      station: staffB.station
    },
    comparison: [
      { metric: "Orders Handled", valA: staffA.orders, valB: staffB.orders, winner: staffA.orders > staffB.orders ? "staffA" : "staffB" },
      { metric: "Avg Prep Time", valA: `${staffA.avgPrepTime}m`, valB: `${staffB.avgPrepTime}m`, winner: staffA.avgPrepTime < staffB.avgPrepTime ? "staffA" : "staffB" },
      { metric: "Attendance", valA: `${staffA.attendance}%`, valB: `${staffB.attendance}%`, winner: staffA.attendance > staffB.attendance ? "staffA" : "staffB" },
      { metric: "Complaints Received", valA: staffA.complaints, valB: staffB.complaints, winner: staffA.complaints < staffB.complaints ? "staffA" : "staffB" },
      { metric: "Efficiency Score", valA: `${staffA.efficiency}%`, valB: `${staffB.efficiency}%`, winner: staffA.efficiency > staffB.efficiency ? "staffA" : "staffB" },
      { metric: "Customer Rating", valA: `${staffA.rating} / 5.0`, valB: `${staffB.rating} / 5.0`, winner: staffA.rating > staffB.rating ? "staffA" : "staffB" }
    ]
  };
};



