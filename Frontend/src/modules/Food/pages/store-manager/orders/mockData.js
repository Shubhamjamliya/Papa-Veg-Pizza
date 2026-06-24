// Mock Data for Store Operation Console (Incoming Orders)
// Complies with MongoDB schema and requirements.

export const initialMockStaff = [
  {
    _id: "staff-001",
    employeeId: "EMP-PV-110",
    name: "Ramesh Singh",
    role: "kitchen_supervisor",
    status: "active",
    currentActiveOrders: 2,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-002",
    employeeId: "EMP-PV-112",
    name: "Aman Verma",
    role: "kitchen_supervisor",
    status: "active",
    currentActiveOrders: 0,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-003",
    employeeId: "EMP-PV-115",
    name: "Sanjay Gupta",
    role: "kitchen_supervisor",
    status: "active",
    currentActiveOrders: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-004",
    employeeId: "EMP-PV-118",
    name: "Neha Joshi",
    role: "kitchen_supervisor",
    status: "active",
    currentActiveOrders: 1,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-005",
    employeeId: "EMP-PV-120",
    name: "Vijay Saxena",
    role: "kitchen_supervisor",
    status: "inactive", // inactive supervisor should be filtered out
    currentActiveOrders: 0,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&fm=webp"
  }
];

export const initialMockOrders = [
  {
    _id: "660c1d2eef20092c4820a001",
    orderNumber: "PVP-10241",
    customerId: "cust-9901",
    customer: {
      name: "Rohan Malhotra",
      phone: "+91 98765 43210",
      email: "rohan.malhotra@gmail.com",
      loyaltyPoints: 350,
      previousOrdersCount: 12
    },
    storeId: "st-indore-01",
    status: "payment_verified",
    createdAt: new Date(Date.now() - 120000).toISOString(), // 2 mins ago
    orderType: "delivery",
    priority: "normal",
    orderSource: "Website",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "Flat 402, Block C",
      street: "Shalimar Township",
      landmark: "Near Apollo Hospital",
      city: "Indore",
      pincode: "452010",
      notes: "Please call on arrival, baby sleeping.",
      googleMapsLink: "https://maps.google.com/?q=22.7508,75.8956"
    },
    items: [
      {
        productId: "prod-001",
        name: "Double Cheese Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 2,
        size: "Large",
        variant: "Pan Crust",
        unitPrice: 280,
        subtotal: 560,
        customizations: {
          crustType: "Pan Crust",
          cheeseLevel: "Extra Cheese",
          extraToppings: ["Mushroom", "Black Olives"],
          removeIngredients: [],
          specialInstructions: "Make it extra spicy with green chillies if possible."
        }
      },
      {
        productId: "prod-003",
        name: "Stuffed Garlic Bread",
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Regular",
        variant: "Classic",
        unitPrice: 140,
        subtotal: 140,
        customizations: {
          crustType: "Classic",
          cheeseLevel: "Normal",
          extraToppings: ["Sweet Corn"],
          removeIngredients: [],
          specialInstructions: ""
        }
      }
    ],
    couponId: "WELCOME50",
    subtotal: 700,
    discountAmount: 50,
    taxes: 32.50,
    deliveryCharges: 40.00,
    packingCharges: 25.00,
    grandTotal: 747.50
  },
  {
    _id: "660c1d2eef20092c4820a002",
    orderNumber: "PVP-10242",
    customerId: "cust-9902",
    customer: {
      name: "Isha Sharma",
      phone: "+91 88776 65544",
      email: "isha.sharma@yahoo.co.in",
      loyaltyPoints: 85,
      previousOrdersCount: 2
    },
    storeId: "st-indore-01",
    status: "awaiting_confirmation",
    createdAt: new Date(Date.now() - 480000).toISOString(), // 8 mins ago
    orderType: "pickup",
    priority: "urgent",
    orderSource: "Android",
    paymentStatus: "pending",
    paymentMethod: "COD",
    deliveryAddress: {
      houseNumber: "N/A - Store Pickup",
      street: "N/A",
      landmark: "N/A",
      city: "Indore",
      pincode: "452001",
      notes: "Will pick up by 8:30 PM",
      googleMapsLink: ""
    },
    items: [
      {
        productId: "prod-002",
        name: "Paneer Tikka Pizza",
        image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Medium",
        variant: "Thin Crust",
        unitPrice: 340,
        subtotal: 340,
        customizations: {
          crustType: "Thin Crust",
          cheeseLevel: "Normal",
          extraToppings: ["Extra Paneer", "Onion"],
          removeIngredients: [],
          specialInstructions: "Less oil"
        }
      },
      {
        productId: "prod-004",
        name: "Choco Lava Cake",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 2,
        size: "Regular",
        variant: "Chocolate",
        unitPrice: 90,
        subtotal: 180,
        customizations: {
          crustType: "N/A",
          cheeseLevel: "N/A",
          extraToppings: [],
          removeIngredients: [],
          specialInstructions: "Serve hot."
        }
      },
      {
        productId: "prod-005",
        name: "Coke (500ml)",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 2,
        size: "Regular",
        variant: "Beverage",
        unitPrice: 45,
        subtotal: 90,
        customizations: {
          crustType: "N/A",
          cheeseLevel: "N/A",
          extraToppings: [],
          removeIngredients: [],
          specialInstructions: "Chilled please."
        }
      }
    ],
    couponId: "",
    subtotal: 610,
    discountAmount: 0,
    taxes: 30.50,
    deliveryCharges: 0.00,
    packingCharges: 15.00,
    grandTotal: 655.50
  },
  {
    _id: "660c1d2eef20092c4820a003",
    orderNumber: "PVP-10243",
    customerId: "cust-9903",
    customer: {
      name: "Amit Kumar",
      phone: "+91 76543 21098",
      email: "amit.k@gmail.com",
      loyaltyPoints: 1200,
      previousOrdersCount: 45
    },
    storeId: "st-indore-01",
    status: "payment_verified",
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 mins ago
    orderType: "delivery",
    priority: "normal",
    orderSource: "iOS",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "House 12, Road 4",
      street: "Saket Nagar",
      landmark: "Opposite Saket Garden",
      city: "Indore",
      pincode: "452018",
      notes: "Leave at security desk if unanswered.",
      googleMapsLink: "https://maps.google.com/?q=22.7201,75.8801"
    },
    items: [
      {
        productId: "prod-002",
        name: "Capsicum Veggie Supreme",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Medium",
        variant: "Cheese Burst",
        unitPrice: 380,
        subtotal: 380,
        customizations: {
          crustType: "Cheese Burst",
          cheeseLevel: "High",
          extraToppings: ["Capsicum", "Onion", "Tomato"],
          removeIngredients: ["Olives"],
          specialInstructions: ""
        }
      }
    ],
    couponId: "FESTIVE20",
    subtotal: 380,
    discountAmount: 76,
    taxes: 15.20,
    deliveryCharges: 40.00,
    packingCharges: 20.00,
    grandTotal: 379.20
  },
  {
    _id: "660c1d2eef20092c4820a004",
    orderNumber: "PVP-10244",
    customerId: "cust-9904",
    customer: {
      name: "Priyanjali Sen",
      phone: "+91 94250 88204",
      email: "priya.sen@outlook.com",
      loyaltyPoints: 0,
      previousOrdersCount: 0
    },
    storeId: "st-indore-01",
    status: "awaiting_confirmation",
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 mins ago
    orderType: "delivery",
    priority: "urgent",
    orderSource: "Swiggy",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "A-12, Sector C",
      street: "Vijay Nagar",
      landmark: "Near Sayaji Hotel",
      city: "Indore",
      pincode: "452010",
      notes: "Please deliver before 9:00 PM.",
      googleMapsLink: ""
    },
    items: [
      {
        productId: "prod-001",
        name: "Double Cheese Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Medium",
        variant: "Pan Crust",
        unitPrice: 220,
        subtotal: 220,
        customizations: {
          crustType: "Pan Crust",
          cheeseLevel: "Normal",
          extraToppings: [],
          removeIngredients: [],
          specialInstructions: ""
        }
      }
    ],
    couponId: "",
    subtotal: 220,
    discountAmount: 0,
    taxes: 11.00,
    deliveryCharges: 35.00,
    packingCharges: 15.00,
    grandTotal: 281.00
  }
];

export const initialMockActiveStaff = [
  {
    _id: "staff-active-001",
    employeeId: "EMP-PV-201",
    name: "Rohan Dev",
    role: "pizza_chef",
    status: "active",
    currentActiveOrders: 1,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-active-002",
    employeeId: "EMP-PV-202",
    name: "Sandeep Sen",
    role: "pizza_chef",
    status: "active",
    currentActiveOrders: 3,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-active-003",
    employeeId: "EMP-PV-203",
    name: "Karan Malhotra",
    role: "baking_chef",
    status: "active",
    currentActiveOrders: 2,
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-active-004",
    employeeId: "EMP-PV-204",
    name: "Anil Sharma",
    role: "baking_chef",
    status: "active",
    currentActiveOrders: 0,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-active-005",
    employeeId: "EMP-PV-205",
    name: "Vikram Gupta",
    role: "packaging_staff",
    status: "active",
    currentActiveOrders: 2,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&fm=webp"
  },
  {
    _id: "staff-active-006",
    employeeId: "EMP-PV-206",
    name: "Sunita Rao",
    role: "packaging_staff",
    status: "active",
    currentActiveOrders: 1,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&fm=webp"
  }
];

export const initialMockActiveOrders = [
  {
    _id: "660c1d2eef20092c4820a011",
    orderNumber: "PVP-10251",
    customerId: "cust-8801",
    customer: {
      name: "Aditya Roy",
      phone: "+91 99887 76655",
      email: "aditya.roy@gmail.com",
      loyaltyPoints: 120,
      previousOrdersCount: 5
    },
    storeId: "st-indore-01",
    status: "preparing",
    createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 mins ago
    acceptedAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    expectedReadyAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 mins from now
    orderType: "delivery",
    priority: "normal",
    orderSource: "Website",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "Flat 201, Sunshine Heights",
      street: "Geeta Bhawan Road",
      landmark: "Near Hanuman Temple",
      city: "Indore",
      pincode: "452001",
      notes: "Ring bell twice, deliver at flat.",
      googleMapsLink: "https://maps.google.com/?q=22.7244,75.8839"
    },
    items: [
      {
        productId: "prod-001",
        name: "Double Cheese Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Medium",
        variant: "Pan Crust",
        unitPrice: 220,
        subtotal: 220,
        customizations: {
          crustType: "Pan Crust",
          cheeseLevel: "Extra Cheese",
          extraToppings: ["Mushroom"],
          removeIngredients: [],
          specialInstructions: "Cook well done"
        }
      }
    ],
    timeline: [
      { status: "received", timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), note: "Order placed" },
      { status: "confirmed", timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString(), note: "Accepted by store manager" },
      { status: "preparing", timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString(), note: "Moved to kitchen preparing stage" }
    ],
    assignedStaff: {
      pizza_chef: { _id: "staff-active-001", name: "Rohan Dev" },
      baking_chef: null,
      packaging_staff: null
    },
    kitchenNote: "Make pizza crust thin and crispy if possible.",
    subtotal: 220,
    discountAmount: 0,
    taxes: 11.00,
    deliveryCharges: 35.00,
    packingCharges: 15.00,
    grandTotal: 281.00
  },
  {
    _id: "660c1d2eef20092c4820a012",
    orderNumber: "PVP-10252",
    customerId: "cust-8802",
    customer: {
      name: "Sneha Reddy",
      phone: "+91 91234 56789",
      email: "sneha.reddy@yahoo.com",
      loyaltyPoints: 340,
      previousOrdersCount: 14
    },
    storeId: "st-indore-01",
    status: "baking",
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(), // 12 mins ago
    acceptedAt: new Date(Date.now() - 11 * 60 * 1000).toISOString(),
    expectedReadyAt: new Date(Date.now() + 8 * 60 * 1000).toISOString(), // 8 mins from now
    orderType: "pickup",
    priority: "urgent",
    orderSource: "iOS",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "N/A - Store Pickup",
      street: "N/A",
      landmark: "N/A",
      city: "Indore",
      pincode: "452001",
      notes: "",
      googleMapsLink: ""
    },
    items: [
      {
        productId: "prod-002",
        name: "Paneer Tikka Pizza",
        image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 2,
        size: "Large",
        variant: "Cheese Burst",
        unitPrice: 380,
        subtotal: 760,
        customizations: {
          crustType: "Cheese Burst",
          cheeseLevel: "Normal",
          extraToppings: ["Extra Paneer", "Onion"],
          removeIngredients: [],
          specialInstructions: ""
        }
      }
    ],
    timeline: [
      { status: "received", timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(), note: "Order placed" },
      { status: "confirmed", timestamp: new Date(Date.now() - 11 * 60 * 1000).toISOString(), note: "Accepted by store manager" },
      { status: "preparing", timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(), note: "Moved to kitchen preparing stage" },
      { status: "baking", timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(), note: "Moved to baking oven stage" }
    ],
    assignedStaff: {
      pizza_chef: { _id: "staff-active-002", name: "Sandeep Sen" },
      baking_chef: { _id: "staff-active-003", name: "Karan Malhotra" },
      packaging_staff: null
    },
    kitchenNote: "Extra spicy paneer tikka pieces.",
    subtotal: 760,
    discountAmount: 40,
    taxes: 36.00,
    deliveryCharges: 0.00,
    packingCharges: 25.00,
    grandTotal: 781.00
  },
  {
    _id: "660c1d2eef20092c4820a013",
    orderNumber: "PVP-10253",
    customerId: "cust-8803",
    customer: {
      name: "Kabir Kapoor",
      phone: "+91 98888 77777",
      email: "kabir.k@gmail.com",
      loyaltyPoints: 850,
      previousOrdersCount: 28
    },
    storeId: "st-indore-01",
    status: "packaging",
    createdAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(), // 20 mins ago
    acceptedAt: new Date(Date.now() - 19 * 60 * 1000).toISOString(),
    expectedReadyAt: new Date(Date.now() - 1 * 60 * 1000).toISOString(), // 1 min ago (delayed!)
    orderType: "delivery",
    priority: "vip",
    orderSource: "Swiggy",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "House No 55",
      street: "Saket Colony",
      landmark: "Opposite Community Hall",
      city: "Indore",
      pincode: "452018",
      notes: "Contactless delivery. Leave at door.",
      googleMapsLink: "https://maps.google.com/?q=22.7201,75.8801"
    },
    items: [
      {
        productId: "prod-003",
        name: "Stuffed Garlic Bread",
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Regular",
        variant: "Classic",
        unitPrice: 140,
        subtotal: 140,
        customizations: {
          crustType: "Classic",
          cheeseLevel: "Normal",
          extraToppings: ["Sweet Corn"],
          removeIngredients: [],
          specialInstructions: ""
        }
      }
    ],
    timeline: [
      { status: "received", timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(), note: "Order placed" },
      { status: "confirmed", timestamp: new Date(Date.now() - 19 * 60 * 1000).toISOString(), note: "Accepted by store manager" },
      { status: "preparing", timestamp: new Date(Date.now() - 18 * 60 * 1000).toISOString(), note: "Moved to kitchen preparing stage" },
      { status: "baking", timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(), note: "Moved to baking oven stage" },
      { status: "packaging", timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString(), note: "Moved to packaging stage" }
    ],
    assignedStaff: {
      pizza_chef: { _id: "staff-active-002", name: "Sandeep Sen" },
      baking_chef: { _id: "staff-active-003", name: "Karan Malhotra" },
      packaging_staff: { _id: "staff-active-005", name: "Vikram Gupta" }
    },
    kitchenNote: "Make garlic bread extra garlic buttery.",
    subtotal: 140,
    discountAmount: 0,
    taxes: 7.00,
    deliveryCharges: 40.00,
    packingCharges: 15.00,
    grandTotal: 202.00
  },
  {
    _id: "660c1d2eef20092c4820a014",
    orderNumber: "PVP-10254",
    customerId: "cust-8804",
    customer: {
      name: "Tanya Sharma",
      phone: "+91 88776 99887",
      email: "tanya.sharma@outlook.com",
      loyaltyPoints: 0,
      previousOrdersCount: 0
    },
    storeId: "st-indore-01",
    status: "confirmed", // Confirmed status, i.e. not yet in preparing, sits in "Preparing" column as "Not Started"
    createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(), // 2 mins ago
    acceptedAt: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    expectedReadyAt: new Date(Date.now() + 20 * 60 * 1000).toISOString(), // 20 mins from now
    orderType: "delivery",
    priority: "normal",
    orderSource: "Zomato",
    paymentStatus: "paid",
    paymentMethod: "Online",
    deliveryAddress: {
      houseNumber: "Building C, Appt 502",
      street: "Vijay Nagar",
      landmark: "Behind Infiniti Hotel",
      city: "Indore",
      pincode: "452010",
      notes: "",
      googleMapsLink: ""
    },
    items: [
      {
        productId: "prod-001",
        name: "Double Cheese Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=300&fm=webp",
        quantity: 1,
        size: "Medium",
        variant: "Pan Crust",
        unitPrice: 220,
        subtotal: 220,
        customizations: {}
      }
    ],
    timeline: [
      { status: "received", timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(), note: "Order placed" },
      { status: "confirmed", timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString(), note: "Accepted by store manager" }
    ],
    assignedStaff: {
      pizza_chef: null,
      baking_chef: null,
      packaging_staff: null
    },
    kitchenNote: "",
    subtotal: 220,
    discountAmount: 0,
    taxes: 11.00,
    deliveryCharges: 35.00,
    packingCharges: 15.00,
    grandTotal: 281.00
  }
];

