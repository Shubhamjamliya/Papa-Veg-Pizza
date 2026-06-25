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

