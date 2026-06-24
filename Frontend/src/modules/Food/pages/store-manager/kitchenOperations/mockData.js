// Mock Data for Kitchen Queue Operations Console
// Complies with MongoDB schemas for orders, order_items, customers, stores, staff

export const mockChefs = [
  {
    _id: "chef-001",
    employeeId: "EMP-CHEF-101",
    name: "Chef Rajesh Kumar",
    role: "chef",
    status: "active",
    currentWorkload: 2, // number of active preparing orders
    maxWorkload: 4,
    availability: "available", // available, busy, off-duty
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "chef-002",
    employeeId: "EMP-CHEF-102",
    name: "Chef Vikram Rathore",
    role: "chef",
    status: "active",
    currentWorkload: 4,
    maxWorkload: 4,
    availability: "busy",
    avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "chef-003",
    employeeId: "EMP-CHEF-103",
    name: "Chef Sanjay Sharma",
    role: "chef",
    status: "active",
    currentWorkload: 1,
    maxWorkload: 3,
    availability: "available",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "chef-004",
    employeeId: "EMP-CHEF-104",
    name: "Chef Priya Patel",
    role: "chef",
    status: "active",
    currentWorkload: 0,
    maxWorkload: 4,
    availability: "available",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "chef-005",
    employeeId: "EMP-CHEF-105",
    name: "Chef Amit Verma",
    role: "chef",
    status: "inactive",
    currentWorkload: 0,
    maxWorkload: 3,
    availability: "off-duty",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&fm=webp"
  }
];

export const initialMockOrders = [
  {
    _id: "ord-1051",
    orderNumber: "PVP-1051",
    customerId: "cust-101",
    customer: {
      name: "Rohan Malhotra",
      phone: "+91 98765 43210",
      email: "rohan.malhotra@gmail.com",
      deliveryAddress: {
        houseNumber: "Flat 402, Block C",
        street: "Shalimar Township",
        landmark: "Near Apollo Hospital",
        city: "Indore",
        pincode: "452010",
        notes: "Ring bell twice, deliver to door."
      }
    },
    storeId: "store-indore-01",
    status: "confirmed", // New Order column
    createdAt: new Date(Date.now() - 5 * 60000).toISOString(), // 5 mins ago
    queueEntryTime: null,
    expectedReadyTime: new Date(Date.now() + 25 * 60000).toISOString(),
    sla_minutes: 20,
    priority: "NORMAL",
    paymentStatus: "paid",
    paymentMethod: "ONLINE",
    transactionId: "TXN-8829104829",
    grandTotal: 580,
    assigned_chef: null,
    specialInstructions: "Make it extra spicy. Less onion.",
    timeline: [
      { status: "Placed", time: new Date(Date.now() - 10 * 60000).toISOString() },
      { status: "Confirmed", time: new Date(Date.now() - 5 * 60000).toISOString() }
    ],
    items: [
      {
        orderItemId: "oi-1051-1",
        productId: "prod-001",
        name: "Double Cheese Margherita Pizza",
        quantity: 2,
        size: "Medium",
        crust: "New Hand Tossed",
        toppings: ["Extra Cheese", "Tomato"],
        unitPrice: 240,
        subtotal: 480,
        specialInstructions: "Extra cheese on one, less on the other."
      },
      {
        orderItemId: "oi-1051-2",
        productId: "prod-002",
        name: "Garlic Breadsticks",
        quantity: 1,
        size: "Regular",
        crust: "N/A",
        toppings: [],
        unitPrice: 100,
        subtotal: 100,
        specialInstructions: ""
      }
    ]
  },
  {
    _id: "ord-1052",
    orderNumber: "PVP-1052",
    customerId: "cust-102",
    customer: {
      name: "Isha Sharma",
      phone: "+91 91234 56789",
      email: "isha.sharma@yahoo.co.in",
      deliveryAddress: {
        houseNumber: "House No. 12",
        street: "Saket Colony",
        landmark: "Opposite Saket Club",
        city: "Indore",
        pincode: "452018",
        notes: "Leave with security guard if not answering."
      }
    },
    storeId: "store-indore-01",
    status: "queued", // Accepted Orders column
    createdAt: new Date(Date.now() - 18 * 60000).toISOString(), // 18 mins ago
    queueEntryTime: new Date(Date.now() - 15 * 60000).toISOString(), // Entered queue 15 mins ago
    expectedReadyTime: new Date(Date.now() + 10 * 60000).toISOString(),
    sla_minutes: 20,
    priority: "VIP", // Also Priority column
    paymentStatus: "paid",
    paymentMethod: "WALLET",
    transactionId: "TXN-9042918402",
    grandTotal: 720,
    assigned_chef: "chef-001", // Chef Rajesh Kumar
    specialInstructions: "Do not add olives. Jalapenos preferred.",
    timeline: [
      { status: "Placed", time: new Date(Date.now() - 22 * 60000).toISOString() },
      { status: "Confirmed", time: new Date(Date.now() - 18 * 60000).toISOString() },
      { status: "Queue Entry", time: new Date(Date.now() - 15 * 60000).toISOString() }
    ],
    items: [
      {
        orderItemId: "oi-1052-1",
        productId: "prod-003",
        name: "Farmhouse Pizza",
        quantity: 1,
        size: "Large",
        crust: "Cheese Burst",
        toppings: ["Mushrooms", "Capsicum", "Paneer"],
        unitPrice: 480,
        subtotal: 480,
        specialInstructions: "Add extra paneer cubes."
      },
      {
        orderItemId: "oi-1052-2",
        productId: "prod-004",
        name: "Choco Lava Cake",
        quantity: 2,
        size: "Regular",
        crust: "N/A",
        toppings: [],
        unitPrice: 120,
        subtotal: 240,
        specialInstructions: "Serve hot."
      }
    ]
  },
  {
    _id: "ord-1053",
    orderNumber: "PVP-1053",
    customerId: "cust-103",
    customer: {
      name: "Amit Verma",
      phone: "+91 99887 76655",
      email: "amit.verma@rediffmail.com",
      deliveryAddress: {
        houseNumber: "Sector B, Qtr 205",
        street: "Vijay Nagar",
        landmark: "Behind C21 Mall",
        city: "Indore",
        pincode: "452010",
        notes: "Deliver before 12:00 PM."
      }
    },
    storeId: "store-indore-01",
    status: "queued",
    createdAt: new Date(Date.now() - 25 * 60000).toISOString(),
    queueEntryTime: new Date(Date.now() - 22 * 60000).toISOString(), // 22 mins ago (Exceeds SLA 15) -> Delayed Orders
    expectedReadyTime: new Date(Date.now() - 2 * 60000).toISOString(), // Overdue by 2 mins
    sla_minutes: 15,
    priority: "EXPRESS", // Also Priority column
    paymentStatus: "pending",
    paymentMethod: "COD",
    transactionId: "N/A",
    grandTotal: 350,
    assigned_chef: null,
    specialInstructions: "No special requirements.",
    timeline: [
      { status: "Placed", time: new Date(Date.now() - 30 * 60000).toISOString() },
      { status: "Confirmed", time: new Date(Date.now() - 25 * 60000).toISOString() },
      { status: "Queue Entry", time: new Date(Date.now() - 22 * 60000).toISOString() }
    ],
    items: [
      {
        orderItemId: "oi-1053-1",
        productId: "prod-005",
        name: "Tandoori Paneer Pizza",
        quantity: 1,
        size: "Medium",
        crust: "Thin Crust",
        toppings: ["Tandoori Paneer", "Red Paprika", "Onion"],
        unitPrice: 350,
        subtotal: 350,
        specialInstructions: "Thin crust must be crisp."
      }
    ]
  },
  {
    _id: "ord-1054",
    orderNumber: "PVP-1054",
    customerId: "cust-104",
    customer: {
      name: "Neha Joshi",
      phone: "+91 93456 78901",
      email: "neha.joshi@gmail.com",
      deliveryAddress: {
        houseNumber: "Apt 101, Residency",
        street: "Palasia Main Rd",
        landmark: "Near Palasia Square",
        city: "Indore",
        pincode: "452001",
        notes: "Ring bell and leave order on the chair outside."
      }
    },
    storeId: "store-indore-01",
    status: "confirmed",
    createdAt: new Date(Date.now() - 1 * 60000).toISOString(), // 1 min ago
    queueEntryTime: null,
    expectedReadyTime: new Date(Date.now() + 29 * 60000).toISOString(),
    sla_minutes: 25,
    priority: "NORMAL",
    paymentStatus: "paid",
    paymentMethod: "ONLINE",
    transactionId: "TXN-7739102941",
    grandTotal: 1250,
    assigned_chef: null,
    specialInstructions: "Make sure pizzas are cut into 8 slices instead of 6.",
    timeline: [
      { status: "Placed", time: new Date(Date.now() - 4 * 60000).toISOString() },
      { status: "Confirmed", time: new Date(Date.now() - 1 * 60000).toISOString() }
    ],
    items: [
      {
        orderItemId: "oi-1054-1",
        productId: "prod-006",
        name: "Veggie Supreme Pizza",
        quantity: 2,
        size: "Medium",
        crust: "New Hand Tossed",
        toppings: ["Onion", "Capsicum", "Mushroom", "Sweet Corn", "Black Olives"],
        unitPrice: 320,
        subtotal: 640,
        specialInstructions: "Load up on olives."
      },
      {
        orderItemId: "oi-1054-2",
        productId: "prod-007",
        name: "Peppy Paneer Pizza",
        quantity: 1,
        size: "Large",
        crust: "Cheese Burst",
        toppings: ["Paneer", "Capsicum", "Red Paprika"],
        unitPrice: 490,
        subtotal: 490,
        specialInstructions: "Extra cheese burst."
      },
      {
        orderItemId: "oi-1054-3",
        productId: "prod-008",
        name: "Stuffed Garlic Bread",
        quantity: 1,
        size: "Regular",
        crust: "N/A",
        toppings: [],
        unitPrice: 120,
        subtotal: 120,
        specialInstructions: ""
      }
    ]
  },
  {
    _id: "ord-1055",
    orderNumber: "PVP-1055",
    customerId: "cust-105",
    customer: {
      name: "Sanjay Gupta",
      phone: "+91 97766 55443",
      email: "sanjay.gupta@gmail.com",
      deliveryAddress: {
        houseNumber: "House 54",
        street: "Anurag Nagar",
        landmark: "Behind Press Complex",
        city: "Indore",
        pincode: "452003",
        notes: "Deliver in back alley."
      }
    },
    storeId: "store-indore-01",
    status: "preparing", // Preparing orders (shown under Accepted/In progress)
    createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
    queueEntryTime: new Date(Date.now() - 12 * 60000).toISOString(),
    expectedReadyTime: new Date(Date.now() + 5 * 60000).toISOString(),
    sla_minutes: 20,
    priority: "NORMAL",
    paymentStatus: "paid",
    paymentMethod: "ONLINE",
    transactionId: "TXN-8823102345",
    grandTotal: 410,
    assigned_chef: "chef-003", // Chef Sanjay Sharma
    specialInstructions: "Add oregano seasoning packets.",
    timeline: [
      { status: "Placed", time: new Date(Date.now() - 20 * 60000).toISOString() },
      { status: "Confirmed", time: new Date(Date.now() - 15 * 60000).toISOString() },
      { status: "Queue Entry", time: new Date(Date.now() - 12 * 60000).toISOString() },
      { status: "Preparation Started", time: new Date(Date.now() - 8 * 60000).toISOString() }
    ],
    items: [
      {
        orderItemId: "oi-1055-1",
        productId: "prod-009",
        name: "Country Special Pizza",
        quantity: 1,
        size: "Medium",
        crust: "New Hand Tossed",
        toppings: ["Onion", "Tomato", "Capsicum"],
        unitPrice: 290,
        subtotal: 290,
        specialInstructions: "No tomatoes please."
      },
      {
        orderItemId: "oi-1055-2",
        productId: "prod-010",
        name: "Pepsi Cola",
        quantity: 2,
        size: "500ml Can",
        crust: "N/A",
        toppings: [],
        unitPrice: 60,
        subtotal: 120,
        specialInstructions: "Serve chilled."
      }
    ]
  }
];
