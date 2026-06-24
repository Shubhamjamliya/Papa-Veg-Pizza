// Mock Data for Assign Rider workstation
// Complies with MongoDB schemas for orders, delivery_partners, and delivery_assignments

export const initialMockReadyOrders = [
  {
    _id: "ord-201",
    orderNumber: "ORD-1025",
    customerId: "cust-201",
    customerName: "Arjun Mehta",
    customerPhone: "+91 98765 12345",
    totalAmount: 650,
    orderStatus: "ready_for_pickup",
    deliveryStatus: "waiting",
    packagingCompletedAt: new Date(Date.now() - 3 * 60000).toISOString(), // 3 mins ago
    assignedRiderId: null,
    deliveryAddress: "Flat 402, Block C, Shalimar Township, Vijay Nagar, Indore",
    items: [
      { name: "Double Cheese Margherita Pizza", quantity: 2, size: "Medium" },
      { name: "Garlic Breadsticks", quantity: 1, size: "Regular" }
    ]
  },
  {
    _id: "ord-202",
    orderNumber: "ORD-1026",
    customerId: "cust-202",
    customerName: "Sunita Sharma",
    customerPhone: "+91 91234 56789",
    totalAmount: 450,
    orderStatus: "ready_for_pickup",
    deliveryStatus: "waiting",
    packagingCompletedAt: new Date(Date.now() - 8 * 60000).toISOString(), // 8 mins ago
    assignedRiderId: null,
    deliveryAddress: "House No. 12, Saket Colony, Old Palasia, Indore",
    items: [
      { name: "Farmhouse Pizza", quantity: 1, size: "Large" }
    ]
  },
  {
    _id: "ord-203",
    orderNumber: "ORD-1027",
    customerId: "cust-203",
    customerName: "Vikram Malhotra",
    customerPhone: "+91 99887 76655",
    totalAmount: 1250,
    orderStatus: "ready_for_pickup",
    deliveryStatus: "waiting",
    packagingCompletedAt: new Date(Date.now() - 25 * 60000).toISOString(), // 25 mins ago (Delayed)
    assignedRiderId: null,
    deliveryAddress: "Flat 101, Palasia Heights, Near Palasia Square, Indore",
    items: [
      { name: "Veggie Supreme Pizza", quantity: 2, size: "Medium" },
      { name: "Peppy Paneer Pizza", quantity: 1, size: "Large" },
      { name: "Choco Lava Cake", quantity: 2, size: "Regular" }
    ]
  },
  {
    _id: "ord-204",
    orderNumber: "ORD-1028",
    customerId: "cust-204",
    customerName: "Nisha Gupta",
    customerPhone: "+91 93456 78901",
    totalAmount: 350,
    orderStatus: "ready_for_pickup",
    deliveryStatus: "waiting",
    packagingCompletedAt: new Date(Date.now() - 12 * 60000).toISOString(), // 12 mins ago (Delayed)
    assignedRiderId: null,
    deliveryAddress: "Apt 205, Sector B, Scheme 54, Vijay Nagar, Indore",
    items: [
      { name: "Tandoori Paneer Pizza", quantity: 1, size: "Medium" }
    ]
  },
  {
    _id: "ord-205",
    orderNumber: "ORD-1029",
    customerId: "cust-205",
    customerName: "Rohan Verma",
    customerPhone: "+91 95555 44444",
    totalAmount: 890,
    orderStatus: "ready_for_pickup",
    deliveryStatus: "waiting",
    packagingCompletedAt: new Date(Date.now() - 1 * 60000).toISOString(), // 1 min ago
    assignedRiderId: null,
    deliveryAddress: "B-44, Anurag Nagar, Behind Press Complex, Indore",
    items: [
      { name: "Country Special Pizza", quantity: 1, size: "Medium" },
      { name: "Double Cheese Margherita Pizza", quantity: 1, size: "Large" }
    ]
  }
];

export const initialMockRiders = [
  {
    _id: "rider-1",
    name: "Rahul Singh",
    mobile: "+91 98260 11223",
    vehicleType: "Bike",
    currentStatus: "online", // online, offline
    activeOrders: 1,
    availability: "idle", // idle, busy
    distanceFromStore: 2.4, // in km
    rating: 4.8
  },
  {
    _id: "rider-2",
    name: "Amit Patel",
    mobile: "+91 94250 44556",
    vehicleType: "Scooter",
    currentStatus: "online",
    activeOrders: 0,
    availability: "idle",
    distanceFromStore: 1.5,
    rating: 4.5
  },
  {
    _id: "rider-3",
    name: "Suresh Pillai",
    mobile: "+91 98930 77889",
    vehicleType: "Bike",
    currentStatus: "online",
    activeOrders: 0,
    availability: "idle",
    distanceFromStore: 0.8,
    rating: 4.9
  },
  {
    _id: "rider-4",
    name: "Vikram Rao",
    mobile: "+91 91110 99887",
    vehicleType: "E-Bike",
    currentStatus: "online",
    activeOrders: 2,
    availability: "busy",
    distanceFromStore: 3.5,
    rating: 4.2
  },
  {
    _id: "rider-5",
    name: "Pooja Varma",
    mobile: "+91 97550 55443",
    vehicleType: "Scooter",
    currentStatus: "offline",
    activeOrders: 0,
    availability: "idle",
    distanceFromStore: 2.7,
    rating: 4.7
  }
];

export const initialMockStoreRiders = [
  {
    _id: "rider-1",
    name: "Rahul Singh",
    mobile: "+91 98260 11223",
    vehicleType: "Bike",
    vehicleNumber: "MP-09-AB-1234",
    joiningDate: "2024-03-12",
    rating: 4.8,
    availability: "online",
    currentStatus: "busy",
    currentOrderId: "PVP-10263",
    lastActive: new Date(Date.now() - 2 * 60000).toISOString(),
    totalDeliveries: 1560,
    averageDeliveryTime: 22,
    cancellationRate: 1.2,
    customerRatings: 4.8,
    todayDeliveries: 12,
    activeOrders: 1
  },
  {
    _id: "rider-2",
    name: "Amit Patel",
    mobile: "+91 94250 44556",
    vehicleType: "Scooter",
    vehicleNumber: "MP-09-CD-5678",
    joiningDate: "2024-05-20",
    rating: 4.5,
    availability: "online",
    currentStatus: "idle",
    currentOrderId: null,
    lastActive: new Date(Date.now() - 5 * 60000).toISOString(),
    totalDeliveries: 980,
    averageDeliveryTime: 26,
    cancellationRate: 2.1,
    customerRatings: 4.4,
    todayDeliveries: 8,
    activeOrders: 0
  },
  {
    _id: "rider-3",
    name: "Suresh Pillai",
    mobile: "+91 98930 77889",
    vehicleType: "Bike",
    vehicleNumber: "MP-09-EF-9012",
    joiningDate: "2024-01-15",
    rating: 4.9,
    availability: "online",
    currentStatus: "idle",
    currentOrderId: null,
    lastActive: new Date(Date.now() - 1 * 60000).toISOString(),
    totalDeliveries: 2450,
    averageDeliveryTime: 18,
    cancellationRate: 0.5,
    customerRatings: 4.9,
    todayDeliveries: 15,
    activeOrders: 0
  },
  {
    _id: "rider-4",
    name: "Vikram Rao",
    mobile: "+91 91110 99887",
    vehicleType: "Bike",
    vehicleNumber: "MP-09-GH-3456",
    joiningDate: "2024-07-02",
    rating: 4.2,
    availability: "online",
    currentStatus: "busy",
    currentOrderId: "PVP-10264",
    lastActive: new Date(Date.now() - 8 * 60000).toISOString(),
    totalDeliveries: 420,
    averageDeliveryTime: 32,
    cancellationRate: 3.5,
    customerRatings: 4.1,
    todayDeliveries: 6,
    activeOrders: 2
  },
  {
    _id: "rider-5",
    name: "Pooja Varma",
    mobile: "+91 97550 55443",
    vehicleType: "Scooter",
    vehicleNumber: "MP-09-IJ-7890",
    joiningDate: "2024-09-18",
    rating: 4.7,
    availability: "offline",
    currentStatus: "idle",
    currentOrderId: null,
    lastActive: new Date(Date.now() - 120 * 60000).toISOString(),
    totalDeliveries: 110,
    averageDeliveryTime: 24,
    cancellationRate: 1.8,
    customerRatings: 4.6,
    todayDeliveries: 0,
    activeOrders: 0
  }
];
