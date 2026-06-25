export const mockCustomers = [
  {
    _id: "cust-1",
    name: "Aarav Sharma",
    mobile: "9876543210",
    email: "aarav.sharma@gmail.com",
    totalOrders: 14,
    totalSpent: 6480,
    loyaltyPoints: 320,
    lastOrderDate: "2026-06-24T12:30:00Z",
    createdAt: "2025-08-15T10:00:00Z"
  },
  {
    _id: "cust-2",
    name: "Ananya Patel",
    mobile: "9123456789",
    email: "ananya.patel@yahoo.com",
    totalOrders: 8,
    totalSpent: 3820,
    loyaltyPoints: 190,
    lastOrderDate: "2026-06-25T11:15:00Z",
    createdAt: "2025-11-20T14:30:00Z"
  },
  {
    _id: "cust-3",
    name: "Rohan Verma",
    mobile: "9812345678",
    email: "rohan.verma@outlook.com",
    totalOrders: 1,
    totalSpent: 450,
    loyaltyPoints: 20,
    lastOrderDate: "2026-06-25T15:10:00Z",
    createdAt: "2026-06-25T15:00:00Z"
  },
  {
    _id: "cust-4",
    name: "Aditi Rao",
    mobile: "9988776655",
    email: "aditi.rao@gmail.com",
    totalOrders: 25,
    totalSpent: 12450,
    loyaltyPoints: 620,
    lastOrderDate: "2026-06-20T20:45:00Z",
    createdAt: "2025-01-10T09:15:00Z"
  },
  {
    _id: "cust-5",
    name: "Vikram Singh",
    mobile: "9765432109",
    email: "vikram.singh@gmail.com",
    totalOrders: 5,
    totalSpent: 2150,
    loyaltyPoints: 100,
    lastOrderDate: "2026-05-15T18:20:00Z",
    createdAt: "2026-02-12T11:45:00Z"
  },
  {
    _id: "cust-6",
    name: "Pooja Hegde",
    mobile: "9654321098",
    email: "pooja.hegde@hotmail.com",
    totalOrders: 12,
    totalSpent: 5290,
    loyaltyPoints: 260,
    lastOrderDate: "2026-06-25T13:00:00Z",
    createdAt: "2025-09-05T16:40:00Z"
  },
  {
    _id: "cust-7",
    name: "Kabir Mehta",
    mobile: "9543210987",
    email: "kabir.mehta@gmail.com",
    totalOrders: 18,
    totalSpent: 8900,
    loyaltyPoints: 440,
    lastOrderDate: "2026-06-22T21:10:00Z",
    createdAt: "2025-05-18T10:30:00Z"
  },
  {
    _id: "cust-8",
    name: "Diya Iyer",
    mobile: "9432109876",
    email: "diya.iyer@gmail.com",
    totalOrders: 3,
    totalSpent: 1200,
    loyaltyPoints: 60,
    lastOrderDate: "2026-06-25T14:50:00Z",
    createdAt: "2026-01-20T12:00:00Z"
  }
];

export const mockOrders = [
  {
    _id: "ord-1",
    customerId: "cust-1",
    storeId: "store-104",
    orderNumber: "PVP-9081",
    orderStatus: "delivered",
    paymentStatus: "paid",
    paymentMethod: "UPI / PhonePe",
    totalAmount: 480,
    deliveryType: "delivery",
    addressId: "addr-1",
    riderId: "rider-1",
    createdAt: "2026-06-24T12:30:00Z"
  },
  {
    _id: "ord-2",
    customerId: "cust-2",
    storeId: "store-104",
    orderNumber: "PVP-9082",
    orderStatus: "delivered",
    paymentStatus: "paid",
    paymentMethod: "Netbanking",
    totalAmount: 590,
    deliveryType: "delivery",
    addressId: "addr-2",
    riderId: "rider-2",
    createdAt: "2026-06-25T11:15:00Z"
  },
  {
    _id: "ord-3",
    customerId: "cust-3",
    storeId: "store-104",
    orderNumber: "PVP-9083",
    orderStatus: "preparing",
    paymentStatus: "pending",
    paymentMethod: "COD",
    totalAmount: 450,
    deliveryType: "takeaway",
    addressId: null,
    riderId: null,
    createdAt: "2026-06-25T15:10:00Z"
  },
  {
    _id: "ord-4",
    customerId: "cust-4",
    storeId: "store-104",
    orderNumber: "PVP-9084",
    orderStatus: "refunded",
    paymentStatus: "refunded",
    paymentMethod: "Credit Card",
    totalAmount: 750,
    deliveryType: "delivery",
    addressId: "addr-4",
    riderId: "rider-3",
    createdAt: "2026-06-20T20:45:00Z"
  },
  {
    _id: "ord-5",
    customerId: "cust-6",
    storeId: "store-104",
    orderNumber: "PVP-9085",
    orderStatus: "delivered",
    paymentStatus: "paid",
    paymentMethod: "UPI / Paytm",
    totalAmount: 320,
    deliveryType: "delivery",
    addressId: "addr-6",
    riderId: "rider-4",
    createdAt: "2026-06-25T13:00:00Z"
  },
  {
    _id: "ord-6",
    customerId: "cust-7",
    storeId: "store-104",
    orderNumber: "PVP-9086",
    orderStatus: "ready",
    paymentStatus: "paid",
    paymentMethod: "UPI / GooglePay",
    totalAmount: 620,
    deliveryType: "takeaway",
    addressId: null,
    riderId: null,
    createdAt: "2026-06-22T21:10:00Z"
  },
  {
    _id: "ord-7",
    customerId: "cust-8",
    storeId: "store-104",
    orderNumber: "PVP-9087",
    orderStatus: "delivered",
    paymentStatus: "paid",
    paymentMethod: "COD",
    totalAmount: 380,
    deliveryType: "delivery",
    addressId: "addr-8",
    riderId: "rider-1",
    createdAt: "2026-06-25T14:50:00Z"
  }
];

export const mockComplaints = [
  { _id: "comp-1", customerId: "cust-1", issue: "Order PVP-8001 was missing seasoning packets", status: "resolved", resolution: "Refunded ₹50 seasoning charge and added 50 loyalty points.", createdAt: "2026-05-10T12:00:00Z" },
  { _id: "comp-2", customerId: "cust-4", issue: "Late delivery and cold pizza on order PVP-9084", status: "resolved", resolution: "Approved full refund of ₹750 immediately.", createdAt: "2026-06-20T21:05:00Z" },
  { _id: "comp-3", customerId: "cust-6", issue: "Wrong toppings delivered on order PVP-9085", status: "open", resolution: "Pending investigation by kitchen supervisor.", createdAt: "2026-06-25T13:20:00Z" }
];

export const mockReviews = [
  { _id: "rev-1", customerId: "cust-1", rating: 5, comment: "Excellent paneer toppings and hot packaging!", productName: "Veg Supreme Pizza", createdAt: "2026-06-24T13:10:00Z" },
  { _id: "rev-2", customerId: "cust-2", rating: 4, comment: "Garlic bread was outstanding. Pizza was slightly cold.", productName: "Farmhouse Delight Pizza", createdAt: "2026-06-25T12:00:00Z" },
  { _id: "rev-3", customerId: "cust-4", rating: 1, comment: "Very bad delivery experience, took 1.5 hours and pizza was cold.", productName: "Double Cheese Margherita", createdAt: "2026-06-20T22:00:00Z" },
  { _id: "rev-4", customerId: "cust-7", rating: 5, comment: "Best Veg Pizza franchise in town. Spicy paneer was great.", productName: "Tandoori Paneer Pizza", createdAt: "2026-06-22T22:00:00Z" }
];
