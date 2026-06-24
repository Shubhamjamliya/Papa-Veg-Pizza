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
