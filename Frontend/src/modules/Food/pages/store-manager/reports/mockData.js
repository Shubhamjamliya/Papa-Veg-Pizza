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
