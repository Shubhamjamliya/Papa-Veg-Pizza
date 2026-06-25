export const initialMockStaff = [
  {
    _id: "staff-1",
    storeId: "store-indore-01",
    userId: "user-1",
    fullName: "Rohan Sharma",
    email: "rohan.sharma@papaveg.com",
    phone: "9876543210",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    role: "Kitchen Supervisor",
    employeeCode: "PVP-KS-001",
    joiningDate: "2024-03-15",
    shiftId: "Morning", // Morning, Afternoon, Night
    salaryType: "Monthly",
    salary: 45000,
    experience: 5,
    skills: ["Pizza", "Dough Preparation", "Inventory", "Kitchen Management"],
    emergencyContact: "Neha Sharma (Wife) - 9876543211",
    status: "active",
    todayStatus: "present", // present, leave, absent, late
    performanceScore: 94,
    createdAt: "2024-03-15T09:00:00.000Z",
    stats: {
      ordersCompleted: 1420,
      avgPrepTime: 12, // in minutes
      delayedOrders: 15,
      attendance: 98 // in percent
    },
    activities: [
      { id: "act-1-1", type: "Shift Changes", title: "Shift changed to Morning", time: "2 days ago", status: "completed" },
      { id: "act-1-2", type: "Recent Performance Updates", title: "Performance rating updated to 94%", time: "3 days ago", status: "completed" },
      { id: "act-1-3", type: "Completed Orders", title: "Prepared 45 Veg Supreme Pizzas", time: "4 days ago", status: "completed" }
    ]
  },
  {
    _id: "staff-2",
    storeId: "store-indore-01",
    userId: "user-2",
    fullName: "Priya Patel",
    email: "priya.patel@papaveg.com",
    phone: "9123456789",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    role: "Pizza Maker",
    employeeCode: "PVP-PM-002",
    joiningDate: "2024-05-10",
    shiftId: "Afternoon",
    salaryType: "Monthly",
    salary: 32000,
    experience: 3,
    skills: ["Pizza", "Dough Preparation", "Cleaning"],
    emergencyContact: "Rajesh Patel (Father) - 9123456780",
    status: "active",
    todayStatus: "present",
    performanceScore: 89,
    createdAt: "2024-05-10T10:00:00.000Z",
    stats: {
      ordersCompleted: 980,
      avgPrepTime: 14,
      delayedOrders: 28,
      attendance: 94
    },
    activities: [
      { id: "act-2-1", type: "Completed Orders", title: "Prepared 32 Paneer Tikka Pizzas", time: "1 day ago", status: "completed" },
      { id: "act-2-2", type: "Attendance Logs", title: "Marked Late (Delayed by 15 mins)", time: "Yesterday", status: "warning" }
    ]
  },
  {
    _id: "staff-3",
    storeId: "store-indore-01",
    userId: "user-3",
    fullName: "Amit Verma",
    email: "amit.verma@papaveg.com",
    phone: "9876123450",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    role: "Baker",
    employeeCode: "PVP-BK-003",
    joiningDate: "2024-06-01",
    shiftId: "Night",
    salaryType: "Hourly",
    salary: 150, // hourly
    experience: 2,
    skills: ["Baking", "Inventory"],
    emergencyContact: "Suman Verma (Mother) - 9876123451",
    status: "active",
    todayStatus: "leave",
    performanceScore: 91,
    createdAt: "2024-06-01T14:00:00.000Z",
    stats: {
      ordersCompleted: 750,
      avgPrepTime: 10,
      delayedOrders: 8,
      attendance: 96
    },
    activities: [
      { id: "act-3-1", type: "Attendance Logs", title: "Applied for Casual Leave", time: "Today", status: "info" },
      { id: "act-3-2", type: "Recent Performance Updates", title: "Baking efficiency score raised to 91%", time: "5 days ago", status: "completed" }
    ]
  },
  {
    _id: "staff-4",
    storeId: "store-indore-01",
    userId: "user-4",
    fullName: "Karan Singh",
    email: "karan.singh@papaveg.com",
    phone: "9988776655",
    profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100",
    role: "Packager",
    employeeCode: "PVP-PK-004",
    joiningDate: "2024-07-20",
    shiftId: "Afternoon",
    salaryType: "Hourly",
    salary: 120,
    experience: 1,
    skills: ["Packaging", "Cleaning"],
    emergencyContact: "Gurnam Singh (Father) - 9988776650",
    status: "active",
    todayStatus: "absent",
    performanceScore: 85,
    createdAt: "2024-07-20T08:30:00.000Z",
    stats: {
      ordersCompleted: 1100,
      avgPrepTime: 6,
      delayedOrders: 10,
      attendance: 90
    },
    activities: [
      { id: "act-4-1", type: "Attendance Logs", title: "Marked Absent without prior notice", time: "Today", status: "severe" },
      { id: "act-4-2", type: "Completed Orders", title: "Packed 120 Delivery Orders", time: "2 days ago", status: "completed" }
    ]
  },
  {
    _id: "staff-5",
    storeId: "store-indore-01",
    userId: "user-5",
    fullName: "Sunita Rao",
    email: "sunita.rao@papaveg.com",
    phone: "9876541230",
    profileImage: "", // Empty for testing fallback avatar
    role: "Pizza Maker",
    employeeCode: "PVP-PM-005",
    joiningDate: "2024-08-15",
    shiftId: "Morning",
    salaryType: "Monthly",
    salary: 31000,
    experience: 4,
    skills: ["Pizza", "Dough Preparation", "Packaging"],
    emergencyContact: "Anand Rao (Husband) - 9876541231",
    status: "inactive",
    todayStatus: "absent",
    performanceScore: 88,
    createdAt: "2024-08-15T09:15:00.000Z",
    stats: {
      ordersCompleted: 540,
      avgPrepTime: 15,
      delayedOrders: 18,
      attendance: 92
    },
    activities: [
      { id: "act-5-1", type: "Shift Changes", title: "Shift changed to Morning", time: "1 week ago", status: "completed" },
      { id: "act-5-2", type: "Recent Performance Updates", title: "Profile deactivated by store manager", time: "2 weeks ago", status: "info" }
    ]
  }
];
