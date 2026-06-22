// Mock Database collections representing MongoDB data for the Customer List Page

export const mockStores = [
  { id: "store-01", name: "Indore Central" },
  { id: "store-02", name: "Bhopal Zone" },
  { id: "store-03", name: "Ujjain Branch" },
  { id: "store-04", name: "Gwalior Hub" }
];

export const mockUsers = [
  {
    _id: "user-01",
    fullName: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    mobile: "+91 98765 43210",
    profileImage: "", // will fall back to initials RK
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2024-05-10T10:00:00.000Z",
    lastLogin: "2026-06-22T08:30:00.000Z"
  },
  {
    _id: "user-02",
    fullName: "Priya Patel",
    email: "priya.patel@yahoo.com",
    mobile: "+91 87654 32109",
    profileImage: "", // initials PP
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2024-06-15T14:30:00.000Z",
    lastLogin: "2026-06-21T18:15:00.000Z"
  },
  {
    _id: "user-03",
    fullName: "Aarav Mehta",
    email: "aarav.mehta@outlook.com",
    mobile: "+91 76543 21098",
    profileImage: "", // initials AM
    role: "CUSTOMER",
    status: "Active",
    isVerified: false,
    createdAt: "2026-06-10T09:15:00.000Z",
    lastLogin: "2026-06-22T11:45:00.000Z"
  },
  {
    _id: "user-04",
    fullName: "Sneha Sharma",
    email: "sneha.sharma@gmail.com",
    mobile: "+91 95432 10987",
    profileImage: "", // initials SS
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2025-01-20T11:00:00.000Z",
    lastLogin: "2026-06-20T20:00:00.000Z"
  },
  {
    _id: "user-05",
    fullName: "Amit Verma",
    email: "amit.verma@gmail.com",
    mobile: "+91 94321 09876",
    profileImage: "", // initials AV
    role: "CUSTOMER",
    status: "Blocked",
    isVerified: true,
    createdAt: "2024-11-05T16:45:00.000Z",
    lastLogin: "2026-06-10T12:00:00.000Z"
  },
  {
    _id: "user-06",
    fullName: "Pooja Gupta",
    email: "pooja.gupta@rediffmail.com",
    mobile: "+91 93210 98765",
    profileImage: "", // initials PG
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2024-03-01T10:30:00.000Z",
    lastLogin: "2026-06-22T13:10:00.000Z"
  },
  {
    _id: "user-07",
    fullName: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    mobile: "+91 92109 87654",
    profileImage: "", // initials VS
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2025-03-12T08:00:00.000Z",
    lastLogin: "2026-06-18T15:30:00.000Z"
  },
  {
    _id: "user-08",
    fullName: "Sunita Rao",
    email: "sunita.rao@gmail.com",
    mobile: "+91 91098 76543",
    profileImage: "", // initials SR
    role: "CUSTOMER",
    status: "Active",
    isVerified: false,
    createdAt: "2026-06-18T10:00:00.000Z",
    lastLogin: "2026-06-19T09:00:00.000Z"
  },
  {
    _id: "user-09",
    fullName: "Rohan Malhotra",
    email: "rohan.malhotra@gmail.com",
    mobile: "+91 99887 76655",
    profileImage: "", // initials RM
    role: "CUSTOMER",
    status: "Active",
    isVerified: true,
    createdAt: "2025-08-25T17:20:00.000Z",
    lastLogin: "2026-06-22T06:45:00.000Z"
  },
  {
    _id: "user-10",
    fullName: "Kabir Sen",
    email: "kabir.sen@gmail.com",
    mobile: "+91 88776 65544",
    profileImage: "", // initials KS
    role: "CUSTOMER",
    status: "Blocked",
    isVerified: true,
    createdAt: "2025-02-14T13:40:00.000Z",
    lastLogin: "2026-06-05T19:30:00.000Z"
  }
];

export const mockCustomers = [
  {
    _id: "cust-01",
    userId: "user-01",
    franchiseId: "franchise-01",
    totalOrders: 42,
    totalSpent: 18500,
    avgOrderValue: 440.48,
    lastOrderDate: "2026-06-22T08:15:00.000Z",
    loyaltyPoints: 1250,
    customerType: "VIP",
    favoriteStoreId: "store-01",
    tags: ["Regular", "High Spender", "Cheese Lover"],
    blockedReason: "",
    notes: [
      { id: "note-101", note: "Customer prefers extra oregano packets.", createdBy: "Admin Shubham", createdAt: "2026-05-12T11:00:00.000Z" },
      { id: "note-102", note: "Always orders Cheese Burst crust.", createdBy: "Manager Rohit", createdAt: "2026-06-01T15:30:00.000Z" }
    ],
    updatedAt: "2026-06-22T08:30:00.000Z"
  },
  {
    _id: "cust-02",
    userId: "user-02",
    franchiseId: "franchise-01",
    totalOrders: 28,
    totalSpent: 11200,
    avgOrderValue: 400.00,
    lastOrderDate: "2026-06-21T17:45:00.000Z",
    loyaltyPoints: 780,
    customerType: "VIP",
    favoriteStoreId: "store-02",
    tags: ["Veg Delight", "Dessert Fan"],
    blockedReason: "",
    notes: [
      { id: "note-201", note: "Polite customer. Likes Choco Lava Cake.", createdBy: "Admin Shubham", createdAt: "2026-04-18T10:15:00.000Z" }
    ],
    updatedAt: "2026-06-21T18:15:00.000Z"
  },
  {
    _id: "cust-03",
    userId: "user-03",
    franchiseId: "franchise-01",
    totalOrders: 2,
    totalSpent: 980,
    avgOrderValue: 490.00,
    lastOrderDate: "2026-06-22T11:30:00.000Z",
    loyaltyPoints: 45,
    customerType: "New",
    favoriteStoreId: "store-01",
    tags: ["First Month"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-22T11:45:00.000Z"
  },
  {
    _id: "cust-04",
    userId: "user-04",
    franchiseId: "franchise-01",
    totalOrders: 15,
    totalSpent: 5250,
    avgOrderValue: 350.00,
    lastOrderDate: "2026-06-20T19:30:00.000Z",
    loyaltyPoints: 320,
    customerType: "Regular",
    favoriteStoreId: "store-03",
    tags: ["Spicy Pizza Fans"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-20T20:00:00.000Z"
  },
  {
    _id: "cust-05",
    userId: "user-05",
    franchiseId: "franchise-01",
    totalOrders: 9,
    totalSpent: 3600,
    avgOrderValue: 400.00,
    lastOrderDate: "2026-06-10T11:30:00.000Z",
    loyaltyPoints: 210,
    customerType: "Regular",
    favoriteStoreId: "store-02",
    tags: ["Late Delivery Complaints"],
    blockedReason: "Fake Orders",
    notes: [
      { id: "note-501", note: "Blocked due to repeated fake COD orders.", createdBy: "Admin Shubham", createdAt: "2026-06-10T12:00:00.000Z" }
    ],
    updatedAt: "2026-06-10T12:00:00.000Z"
  },
  {
    _id: "cust-06",
    userId: "user-06",
    franchiseId: "franchise-01",
    totalOrders: 35,
    totalSpent: 16200,
    avgOrderValue: 462.85,
    lastOrderDate: "2026-06-22T12:45:00.000Z",
    loyaltyPoints: 1100,
    customerType: "VIP",
    favoriteStoreId: "store-04",
    tags: ["High Spender", "Paneer Lover"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-22T13:10:00.000Z"
  },
  {
    _id: "cust-07",
    userId: "user-07",
    franchiseId: "franchise-01",
    totalOrders: 11,
    totalSpent: 4180,
    avgOrderValue: 380.00,
    lastOrderDate: "2026-06-18T14:45:00.000Z",
    loyaltyPoints: 250,
    customerType: "Regular",
    favoriteStoreId: "store-01",
    tags: ["On-time Deliveries Only"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-18T15:30:00.000Z"
  },
  {
    _id: "cust-08",
    userId: "user-08",
    franchiseId: "franchise-01",
    totalOrders: 1,
    totalSpent: 450,
    avgOrderValue: 450.00,
    lastOrderDate: "2026-06-18T09:30:00.000Z",
    loyaltyPoints: 20,
    customerType: "New",
    favoriteStoreId: "store-02",
    tags: ["Promo Code User"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-19T09:00:00.000Z"
  },
  {
    _id: "cust-09",
    userId: "user-09",
    franchiseId: "franchise-01",
    totalOrders: 18,
    totalSpent: 7920,
    avgOrderValue: 440.00,
    lastOrderDate: "2026-06-22T06:15:00.000Z",
    loyaltyPoints: 510,
    customerType: "Regular",
    favoriteStoreId: "store-04",
    tags: ["Beverage Fan"],
    blockedReason: "",
    notes: [],
    updatedAt: "2026-06-22T06:45:00.000Z"
  },
  {
    _id: "cust-10",
    userId: "user-10",
    franchiseId: "franchise-01",
    totalOrders: 6,
    totalSpent: 2100,
    avgOrderValue: 350.00,
    lastOrderDate: "2026-06-05T18:45:00.000Z",
    loyaltyPoints: 120,
    customerType: "Regular",
    favoriteStoreId: "store-01",
    tags: [],
    blockedReason: "Payment Fraud",
    notes: [
      { id: "note-1001", note: "Customer disputed transaction and charged back.", createdBy: "Manager Rohit", createdAt: "2026-06-05T19:15:00.000Z" }
    ],
    updatedAt: "2026-06-05T19:30:00.000Z"
  }
];

export const mockOrders = [
  {
    _id: "ord-1001",
    orderNumber: "PV-98421",
    customerId: "cust-01",
    storeName: "Indore Central",
    amount: 450,
    paymentMethod: "Razorpay Online",
    orderStatus: "delivered",
    deliveryType: "delivery",
    date: "2026-06-22T08:15:00.000Z",
    items: [
      { name: "Paneer Tikka Pizza (Medium)", quantity: 1, price: 350 },
      { name: "Choco Lava Cake", quantity: 1, price: 100 }
    ],
    taxes: 22.50,
    discount: 50.00,
    coupon: "FIRSTPV",
    deliveryAddress: {
      recipientName: "Rajesh Kumar",
      phone: "+91 98765 43210",
      houseNo: "Flat 402, Block B",
      street: "Shanti Enclave, Vijay Nagar",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452010",
      landmark: "Near Apollo Hospital"
    },
    paymentDetails: {
      transactionId: "pay_xyz78910",
      status: "Captured",
      date: "2026-06-22T08:16:00.000Z"
    },
    timeline: [
      { status: "Ordered Placed", time: "2026-06-22T08:15:00.000Z", desc: "Order placed by customer" },
      { status: "Accepted", time: "2026-06-22T08:18:00.000Z", desc: "Accepted by Store Manager Rohit" },
      { status: "Preparing", time: "2026-06-22T08:20:00.000Z", desc: "Pizza in the oven" },
      { status: "Out for Delivery", time: "2026-06-22T08:35:00.000Z", desc: "Assigned to rider Rahul Dev" },
      { status: "Delivered", time: "2026-06-22T08:50:00.000Z", desc: "Delivered at doorstep successfully" }
    ]
  },
  {
    _id: "ord-1002",
    orderNumber: "PV-98422",
    customerId: "cust-01",
    storeName: "Indore Central",
    amount: 580,
    paymentMethod: "COD (Cash on Delivery)",
    orderStatus: "delivered",
    deliveryType: "delivery",
    date: "2026-06-20T19:40:00.000Z",
    items: [
      { name: "Cheese Burst Veg Supreme (Medium)", quantity: 1, price: 480 },
      { name: "Pepsi 750ml", quantity: 2, price: 50 }
    ],
    taxes: 29.00,
    discount: 0.00,
    coupon: "",
    deliveryAddress: {
      recipientName: "Rajesh Kumar",
      phone: "+91 98765 43210",
      houseNo: "Flat 402, Block B",
      street: "Shanti Enclave, Vijay Nagar",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452010",
      landmark: "Near Apollo Hospital"
    },
    paymentDetails: {
      transactionId: "N/A",
      status: "Paid in Cash",
      date: "2026-06-20T20:10:00.000Z"
    },
    timeline: [
      { status: "Ordered Placed", time: "2026-06-20T19:40:00.000Z", desc: "Order placed by customer" },
      { status: "Delivered", time: "2026-06-20T20:10:00.000Z", desc: "Delivered by Vikram Rathore" }
    ]
  },
  {
    _id: "ord-1003",
    orderNumber: "PV-98425",
    customerId: "cust-02",
    storeName: "Bhopal Zone",
    amount: 590,
    paymentMethod: "UPI (PhonePe)",
    orderStatus: "delivered",
    deliveryType: "delivery",
    date: "2026-06-21T17:45:00.000Z",
    items: [
      { name: "Double Cheese Margherita (Large)", quantity: 1, price: 420 },
      { name: "Garlic Breadsticks", quantity: 1, price: 120 },
      { name: "Cheesy Dip", quantity: 2, price: 25 }
    ],
    taxes: 29.50,
    discount: 30.00,
    coupon: "UPI50",
    deliveryAddress: {
      recipientName: "Priya Patel",
      phone: "+91 87654 32109",
      houseNo: "Plot No. 125",
      street: "Sector A, Arera Colony",
      city: "Bhopal",
      state: "Madhya Pradesh",
      pincode: "462016",
      landmark: "Opposite Hanuman Temple"
    },
    paymentDetails: {
      transactionId: "upi_phpe8892718",
      status: "Captured",
      date: "2026-06-21T17:46:00.000Z"
    },
    timeline: [
      { status: "Ordered Placed", time: "2026-06-21T17:45:00.000Z", desc: "Order placed by customer" },
      { status: "Delivered", time: "2026-06-21T18:15:00.000Z", desc: "Delivered by Rider Amit" }
    ]
  },
  {
    _id: "ord-1004",
    orderNumber: "PV-98430",
    customerId: "cust-03",
    storeName: "Indore Central",
    amount: 490,
    paymentMethod: "UPI (GPay)",
    orderStatus: "delivered",
    deliveryType: "takeaway",
    date: "2026-06-22T11:30:00.000Z",
    items: [
      { name: "Farmhouse Pizza (Medium)", quantity: 1, price: 390 },
      { name: "Choco Lava Cake", quantity: 1, price: 100 }
    ],
    taxes: 24.50,
    discount: 0.00,
    coupon: "",
    deliveryAddress: {
      recipientName: "Aarav Mehta",
      phone: "+91 76543 21098",
      houseNo: "12, Scheme 54",
      street: "Vijay Nagar",
      city: "Indore",
      state: "Madhya Pradesh",
      pincode: "452010",
      landmark: "Behind C21 Mall"
    },
    paymentDetails: {
      transactionId: "upi_gpay_00281",
      status: "Captured",
      date: "2026-06-22T11:31:00.000Z"
    },
    timeline: [
      { status: "Ordered Placed", time: "2026-06-22T11:30:00.000Z", desc: "Takeaway order placed" },
      { status: "Prepared & Handed Over", time: "2026-06-22T11:45:00.000Z", desc: "Handed over to customer" }
    ]
  }
];

export const mockCustomerAddresses = [
  {
    _id: "addr-01",
    customerId: "cust-01",
    addressType: "Home",
    recipientName: "Rajesh Kumar",
    phone: "+91 98765 43210",
    houseNumber: "Flat 402, Block B",
    street: "Shanti Enclave, Vijay Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452010",
    landmark: "Near Apollo Hospital",
    latitude: "22.7523",
    longitude: "75.8941",
    isDefault: true
  },
  {
    _id: "addr-02",
    customerId: "cust-01",
    addressType: "Office",
    recipientName: "Rajesh Kumar",
    phone: "+91 98765 43210",
    houseNumber: "Unit 305, 3rd Floor",
    street: "Crystal IT Park, Ring Road",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452001",
    landmark: "Near Teen Imli Chauraha",
    latitude: "22.7051",
    longitude: "75.8756",
    isDefault: false
  },
  {
    _id: "addr-03",
    customerId: "cust-02",
    addressType: "Home",
    recipientName: "Priya Patel",
    phone: "+91 87654 32109",
    houseNumber: "Plot No. 125",
    street: "Sector A, Arera Colony",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: "462016",
    landmark: "Opposite Hanuman Temple",
    latitude: "23.2144",
    longitude: "77.4328",
    isDefault: true
  }
];

export const mockReviews = [
  {
    _id: "rev-01",
    customerId: "cust-01",
    rating: 5,
    productName: "Paneer Tikka Pizza",
    storeName: "Indore Central",
    reviewText: "The paneer was incredibly soft and fresh. Perfectly baked cheese burst crust. My absolute favorite!",
    date: "2026-06-22T09:00:00.000Z",
    status: "Published"
  },
  {
    _id: "rev-02",
    customerId: "cust-01",
    rating: 4,
    productName: "Veg Supreme Pizza",
    storeName: "Indore Central",
    reviewText: "Tastes great, loaded with olives and jalapenos. Delivered warm on time.",
    date: "2026-06-15T20:30:00.000Z",
    status: "Published"
  },
  {
    _id: "rev-03",
    customerId: "cust-02",
    rating: 3,
    productName: "Garlic Breadsticks",
    storeName: "Bhopal Zone",
    reviewText: "The breadsticks were a bit dry this time. The seasoning was good but need more butter spread.",
    date: "2026-06-20T18:00:00.000Z",
    status: "Published"
  }
];

export const mockLoyaltyTransactions = [
  {
    _id: "loy-01",
    customerId: "cust-01",
    date: "2026-06-22T08:15:00.000Z",
    pointsEarned: 45,
    pointsRedeemed: 0,
    balance: 1250,
    source: "Order PV-98421 Reward Points",
    remarks: "Automated credit from order spend"
  },
  {
    _id: "loy-02",
    customerId: "cust-01",
    date: "2026-06-20T19:40:00.000Z",
    pointsEarned: 58,
    pointsRedeemed: 0,
    balance: 1205,
    source: "Order PV-98422 Reward Points",
    remarks: "Automated credit from order spend"
  },
  {
    _id: "loy-03",
    customerId: "cust-01",
    date: "2026-06-10T14:00:00.000Z",
    pointsEarned: 100,
    pointsRedeemed: 0,
    balance: 1147,
    source: "Adjust Points (Admin)",
    remarks: "Compensated for late delivery complaint resolver"
  },
  {
    _id: "loy-04",
    customerId: "cust-01",
    date: "2026-05-01T12:00:00.000Z",
    pointsEarned: 0,
    pointsRedeemed: 200,
    balance: 1047,
    source: "Free Choco Lava Cake Redemption",
    remarks: "Redeemed via mobile app coupon"
  }
];

export const mockComplaints = [
  {
    _id: "comp-01",
    complaintNumber: "TKT-04821",
    customerId: "cust-01",
    category: "Delivery Delay",
    priority: "Medium",
    assignedTo: "Rohan Dev (Rider)",
    status: "Resolved",
    createdDate: "2026-06-10T12:15:00.000Z",
    message: "Rider took 55 minutes to deliver. The pizza was completely cold when arrived.",
    images: [],
    resolutionNotes: "Apologized to customer. Refunded delivery fee and credited 100 loyalty points.",
    timeline: [
      { title: "Complaint Registered", time: "2026-06-10T12:15:00.000Z", desc: "Filed via Web App" },
      { title: "Assigned Staff", time: "2026-06-10T12:30:00.000Z", desc: "Assigned to Support Agent Amit" },
      { title: "Resolved", time: "2026-06-10T14:00:00.000Z", desc: "Resolved with customer compensation" }
    ]
  },
  {
    _id: "comp-02",
    complaintNumber: "TKT-04902",
    customerId: "cust-01",
    category: "Wrong Item Delivered",
    priority: "High",
    assignedTo: "Indore Central Kitchen",
    status: "Open",
    createdDate: "2026-06-22T09:30:00.000Z",
    message: "Ordered Double Cheese Margherita but got normal Margherita. I paid extra for double cheese.",
    images: [],
    resolutionNotes: "",
    timeline: [
      { title: "Complaint Registered", time: "2026-06-22T09:30:00.000Z", desc: "Filed via Mobile App" }
    ]
  }
];

export const mockCustomerBlocks = [
  {
    _id: "block-01",
    customerId: "cust-05",
    reason: "Fake Orders",
    blockedBy: "Admin Shubham",
    blockUntil: "2026-07-10T12:00:00.000Z",
    permanent: false,
    remarks: "Customer repeatedly ordered cash on delivery and refused acceptance at door."
  },
  {
    _id: "block-02",
    customerId: "cust-10",
    reason: "Payment Fraud",
    blockedBy: "Admin Shubham",
    blockUntil: "",
    permanent: true,
    remarks: "Disputed transaction ID pay_hshs9928 and initiated chargeback without returning pizza."
  }
];

export const mockActivityLogs = [
  {
    _id: "act-01",
    customerId: "cust-01",
    activityType: "Customer Registered",
    description: "Account created and verified mobile +91 98765 43210",
    createdBy: "System",
    createdAt: "2024-05-10T10:00:00.000Z"
  },
  {
    _id: "act-02",
    customerId: "cust-01",
    activityType: "Order Placed",
    description: "Placed Order PV-98421 online of amount ₹450",
    createdBy: "Rajesh Kumar",
    createdAt: "2026-06-22T08:15:00.000Z"
  },
  {
    _id: "act-03",
    customerId: "cust-01",
    activityType: "Review Added",
    description: "Added 5-star review for Paneer Tikka Pizza",
    createdBy: "Rajesh Kumar",
    createdAt: "2026-06-22T09:00:00.000Z"
  },
  {
    _id: "act-04",
    customerId: "cust-05",
    activityType: "Blocked",
    description: "Blocked by Admin Shubham for 'Fake Orders'",
    createdBy: "Admin Shubham",
    createdAt: "2026-06-10T12:00:00.000Z"
  }
];
