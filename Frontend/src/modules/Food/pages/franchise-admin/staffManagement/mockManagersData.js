export const initialStores = [
  { _id: "store-1", storeCode: "PVP-IND-01", storeName: "Papa Veg Pizza - Indore Central", city: "Indore" },
  { _id: "store-2", storeCode: "PVP-BHP-01", storeName: "Papa Veg Pizza - Bhopal Zone", city: "Bhopal" },
  { _id: "store-3", storeCode: "PVP-UJN-01", storeName: "Papa Veg Pizza - Ujjain Branch", city: "Ujjain" },
  { _id: "store-4", storeCode: "PVP-GWL-01", storeName: "Papa Veg Pizza - Gwalior Hub", city: "Gwalior" },
  { _id: "store-5", storeCode: "PVP-JBL-01", storeName: "Papa Veg Pizza - Jabalpur Outlet", city: "Jabalpur" },
  { _id: "store-6", storeCode: "PVP-DWS-01", storeName: "Papa Veg Pizza - Dewas Kitchen", city: "Dewas" },
  { _id: "store-7", storeCode: "PVP-PTH-01", storeName: "Papa Veg Pizza - Pithampur Express", city: "Pithampur" },
  { _id: "store-8", storeCode: "PVP-RTL-01", storeName: "Papa Veg Pizza - Ratlam Hub", city: "Ratlam" },
  { _id: "store-9", storeCode: "PVP-SGR-01", storeName: "Papa Veg Pizza - Sagar Outlet", city: "Sagar" },
  { _id: "store-10", storeCode: "PVP-REW-01", storeName: "Papa Veg Pizza - Rewa Kitchen", city: "Rewa" }
];

export const initialManagers = [
  {
    id: "mgr-1",
    name: "Rajesh Sharma",
    email: "rajesh.sharma@papaveg.com",
    phone: "9876543210",
    employeeCode: "PVM-001",
    joinedDate: "2022-01-15",
    status: "Active",
    experience: "4.5 years",
    storeId: "store-1",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "reports_access", "refund_approval"],
    personalDetails: {
      address: "102, Shanti Nagar, AB Road, Indore, MP",
      emergencyContact: "Sunita Sharma (Wife) - 9876543211",
      salary: 55000
    }
  },
  {
    id: "mgr-2",
    name: "Sunil Kumar",
    email: "sunil.kumar@papaveg.com",
    phone: "9988776655",
    employeeCode: "PVM-002",
    joinedDate: "2021-06-10",
    status: "Active",
    experience: "5.2 years",
    storeId: "store-2",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "reports_access", "promotions_access", "refund_approval"],
    personalDetails: {
      address: "Plot 45, Arera Colony, Bhopal, MP",
      emergencyContact: "Ramesh Kumar (Brother) - 9988776654",
      salary: 62000
    }
  },
  {
    id: "mgr-3",
    name: "Amit Patel",
    email: "amit.patel@papaveg.com",
    phone: "9111223344",
    employeeCode: "PVM-003",
    joinedDate: "2023-03-20",
    status: "Active",
    experience: "3.2 years",
    storeId: "store-3",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management"],
    personalDetails: {
      address: "24, Mahakal Marg, Ujjain, MP",
      emergencyContact: "Kiran Patel (Father) - 9111223340",
      salary: 48000
    }
  },
  {
    id: "mgr-4",
    name: "Vikram Malhotra",
    email: "vikram.m@papaveg.com",
    phone: "9893012345",
    employeeCode: "PVM-004",
    joinedDate: "2024-05-12",
    status: "On Leave",
    experience: "2.1 years",
    storeId: "store-4",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "staff_management"],
    personalDetails: {
      address: "G-12, DD Nagar, Gwalior, MP",
      emergencyContact: "Sanjay Malhotra (Father) - 9893012340",
      salary: 45000
    }
  },
  {
    id: "mgr-5",
    name: "Kavita Iyer",
    email: "kavita.iyer@papaveg.com",
    phone: "9755033445",
    employeeCode: "PVM-005",
    joinedDate: "2020-11-01",
    status: "Active",
    experience: "5.8 years",
    storeId: "store-5",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "reports_access", "promotions_access", "refund_approval"],
    personalDetails: {
      address: "405, Napier Town, Jabalpur, MP",
      emergencyContact: "M. Iyer (Husband) - 9755033440",
      salary: 65000
    }
  },
  {
    id: "mgr-6",
    name: "Priyanka Joshi",
    email: "priyanka.j@papaveg.com",
    phone: "9926077889",
    employeeCode: "PVM-006",
    joinedDate: "2023-08-15",
    status: "Active",
    experience: "2.8 years",
    storeId: "store-6",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access"],
    personalDetails: {
      address: "12, Civic Centre, Dewas, MP",
      emergencyContact: "Anoop Joshi (Brother) - 9926077880",
      salary: 46000
    }
  },
  {
    id: "mgr-7",
    name: "Sandeep Patil",
    email: "sandeep.patil@papaveg.com",
    phone: "9826255667",
    employeeCode: "PVM-007",
    joinedDate: "2025-01-10",
    status: "Active",
    experience: "1.5 years",
    storeId: "store-7",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen"],
    personalDetails: {
      address: "Sector 3, Pithampur Industrial Area, Pithampur, MP",
      emergencyContact: "Vandana Patil (Mother) - 9826255660",
      salary: 42000
    }
  },
  {
    id: "mgr-8",
    name: "Manoj Yadav",
    email: "manoj.yadav@papaveg.com",
    phone: "9977544332",
    employeeCode: "PVM-008",
    joinedDate: "2024-02-28",
    status: "Active",
    experience: "2.4 years",
    storeId: "store-8",
    profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "refund_approval"],
    personalDetails: {
      address: "Plot 89, Station Road, Ratlam, MP",
      emergencyContact: "Rekha Yadav (Wife) - 9977544330",
      salary: 50000
    }
  },
  {
    id: "mgr-9",
    name: "Deepak Deshmukh",
    email: "deepak.d@papaveg.com",
    phone: "9893211223",
    employeeCode: "PVM-009",
    joinedDate: "2025-09-01",
    status: "Suspended",
    experience: "0.8 years",
    storeId: "store-9",
    profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders"],
    personalDetails: {
      address: "Kakaganj Ward, Sagar, MP",
      emergencyContact: "Nitin Deshmukh (Father) - 9893211220",
      salary: 38000
    }
  },
  {
    id: "mgr-10",
    name: "Rohan Gupta",
    email: "rohan.gupta@papaveg.com",
    phone: "9754112233",
    employeeCode: "PVM-010",
    joinedDate: "2023-11-15",
    status: "Active",
    experience: "2.6 years",
    storeId: "store-10",
    profileImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management"],
    personalDetails: {
      address: "Civil Lines, Rewa, MP",
      emergencyContact: "Sudha Gupta (Mother) - 9754112230",
      salary: 47000
    }
  },
  {
    id: "mgr-11",
    name: "Sunita Rao",
    email: "sunita.rao@papaveg.com",
    phone: "9926889900",
    employeeCode: "PVM-011",
    joinedDate: "2020-04-10",
    status: "Active",
    experience: "6.2 years",
    storeId: "store-1",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "reports_access", "refund_approval"],
    personalDetails: {
      address: "22-A, Scheme 54, Vijay Nagar, Indore, MP",
      emergencyContact: "P. Rao (Husband) - 9926889901",
      salary: 63000
    }
  },
  {
    id: "mgr-12",
    name: "Aarav Singh",
    email: "aarav.singh@papaveg.com",
    phone: "9826022334",
    employeeCode: "PVM-012",
    joinedDate: "2025-02-01",
    status: "Active",
    experience: "1.2 years",
    storeId: "store-3",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access"],
    personalDetails: {
      address: "10-C, Nanakheda, Ujjain, MP",
      emergencyContact: "B. Singh (Father) - 9826022330",
      salary: 40000
    }
  },
  {
    id: "mgr-13",
    name: "Sanjay Trivedi",
    email: "sanjay.t@papaveg.com",
    phone: "9879011223",
    employeeCode: "PVM-013",
    joinedDate: "2023-01-10",
    status: "Active",
    experience: "3.5 years",
    storeId: "store-4",
    profileImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "staff_management", "reports_access"],
    personalDetails: {
      address: "Morar Colony, Gwalior, MP",
      emergencyContact: "Meena Trivedi (Wife) - 9879011220",
      salary: 49000
    }
  },
  {
    id: "mgr-14",
    name: "Neha Sharma",
    email: "neha.sharma@papaveg.com",
    phone: "9988112244",
    employeeCode: "PVM-014",
    joinedDate: "2024-09-12",
    status: "Active",
    experience: "1.8 years",
    storeId: "store-5",
    profileImage: "https://images.unsplash.com/photo-1558203728-00f45181dd84?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "promotions_access"],
    personalDetails: {
      address: "Madan Mahal Road, Jabalpur, MP",
      emergencyContact: "S. Sharma (Husband) - 9988112240",
      salary: 43000
    }
  },
  {
    id: "mgr-15",
    name: "Pooja Verma",
    email: "pooja.verma@papaveg.com",
    phone: "9926112233",
    employeeCode: "PVM-015",
    joinedDate: "2022-07-15",
    status: "Active",
    experience: "3.9 years",
    storeId: "store-2",
    profileImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "staff_management", "promotions_access", "refund_approval"],
    personalDetails: {
      address: "Indrapuri, Bhopal, MP",
      emergencyContact: "Vijay Verma (Husband) - 9926112230",
      salary: 52000
    }
  },
  {
    id: "mgr-16",
    name: "Sameer Joshi",
    email: "sameer.joshi@papaveg.com",
    phone: "9826311223",
    employeeCode: "PVM-016",
    joinedDate: "2021-12-01",
    status: "Active",
    experience: "4.6 years",
    storeId: "store-6",
    profileImage: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "refund_approval"],
    personalDetails: {
      address: "Vikram Nagar, Dewas, MP",
      emergencyContact: "Deepak Joshi (Brother) - 9826311220",
      salary: 54000
    }
  },
  {
    id: "mgr-17",
    name: "Shalini Singh",
    email: "shalini.s@papaveg.com",
    phone: "9752112233",
    employeeCode: "PVM-017",
    joinedDate: "2024-04-10",
    status: "Active",
    experience: "2.2 years",
    storeId: "store-8",
    profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "reports_access"],
    personalDetails: {
      address: "Jaora Road, Ratlam, MP",
      emergencyContact: "Amit Singh (Husband) - 9752112230",
      salary: 47000
    }
  },
  {
    id: "mgr-18",
    name: "Vijay Kumar",
    email: "vijay.kumar@papaveg.com",
    phone: "9893887766",
    employeeCode: "PVM-018",
    joinedDate: "2022-09-01",
    status: "Active",
    experience: "3.8 years",
    storeId: "store-7",
    profileImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150&fm=webp",
    permissions: ["view_orders", "manage_kitchen", "inventory_access", "staff_management", "reports_access"],
    personalDetails: {
      address: "Sanjay Reservoir area, Pithampur, MP",
      emergencyContact: "Sarita Kumar (Wife) - 9893887760",
      salary: 51000
    }
  }
];

export const getManagerPerformance = (mgrId) => {
  // Simulates performance data based on manager ID
  const seed = mgrId.split("-")[1] || 1;
  const rating = (4.2 + (seed % 9) * 0.1).toFixed(1);
  const orders = 300 + (seed * 30);
  const prepTime = 10 + (seed % 6);
  const invAcc = 94 + (seed % 5);
  const attRate = 92 + (seed % 7);

  // Recharts trends
  const ordersTrend = [
    { day: "Mon", orders: Math.floor(orders / 6) },
    { day: "Tue", orders: Math.floor(orders / 6.2) },
    { day: "Wed", orders: Math.floor(orders / 5.8) },
    { day: "Thu", orders: Math.floor(orders / 6.5) },
    { day: "Fri", orders: Math.floor(orders / 5.2) },
    { day: "Sat", orders: Math.floor(orders / 4.5) },
    { day: "Sun", orders: Math.floor(orders / 4.2) }
  ];

  const ratingTrend = [
    { label: "W1", rating: (parseFloat(rating) - 0.2).toFixed(1) },
    { label: "W2", rating: (parseFloat(rating) - 0.1).toFixed(1) },
    { label: "W3", rating: (parseFloat(rating) + 0.1).toFixed(1) },
    { label: "W4", rating: rating }
  ];

  const weeklyOrdersTrend = [
    { label: "W1", orders: Math.floor(orders * 0.9) },
    { label: "W2", orders: Math.floor(orders * 1.1) },
    { label: "W3", orders: Math.floor(orders * 0.95) },
    { label: "W4", orders: orders }
  ];

  const monthlyOrdersTrend = [
    { label: "Jan", orders: Math.floor(orders * 3.8) },
    { label: "Feb", orders: Math.floor(orders * 4.0) },
    { label: "Mar", orders: Math.floor(orders * 4.2) },
    { label: "Apr", orders: Math.floor(orders * 4.1) },
    { label: "May", orders: Math.floor(orders * 4.4) },
    { label: "Jun", orders: Math.floor(orders * 4.5) }
  ];

  return {
    ordersHandled: orders,
    avgPrepTime: prepTime,
    customerRating: parseFloat(rating),
    inventoryAccuracy: invAcc,
    attendanceRate: attRate,
    trends: {
      daily: ordersTrend,
      weekly: weeklyOrdersTrend,
      monthly: monthlyOrdersTrend,
      rating: ratingTrend,
      accuracy: invAcc
    }
  };
};

export const getManagerAttendance = (mgrId) => {
  const seed = parseInt(mgrId.split("-")[1] || 1);
  const totalDays = 30;
  const lateCount = seed % 4;
  const leavesTaken = seed % 3;
  const absentCount = seed % 2 === 0 ? 1 : 0;
  const presentCount = totalDays - lateCount - leavesTaken - absentCount;
  const attendanceRate = ((presentCount + lateCount) / totalDays * 100).toFixed(1);

  // Generate day-by-day logs for the last 30 days
  const calendarLogs = [];
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    
    let status = "Present";
    if (i % 9 === 0 && lateCount > 0 && calendarLogs.filter(l => l.status === "Late").length < lateCount) {
      status = "Late";
    } else if (i % 12 === 0 && leavesTaken > 0 && calendarLogs.filter(l => l.status === "Leave").length < leavesTaken) {
      status = "Leave";
    } else if (i === 15 && absentCount > 0) {
      status = "Absent";
    }

    calendarLogs.push({ date: dateStr, status });
  }

  return {
    attendanceRate: parseFloat(attendanceRate),
    lateCount,
    leavesTaken,
    absentCount,
    calendarLogs
  };
};

export const getManagerSalary = (mgrId, baseSalary) => {
  const seed = mgrId.split("-")[1] || 1;
  const bonus = seed % 2 === 0 ? 5000 : 3000;
  const deductions = seed % 3 === 0 ? 1500 : 500;
  const netSalary = baseSalary + bonus - deductions;

  const months = ["May 2026", "April 2026", "March 2026", "February 2026", "January 2026"];
  const salaryHistory = months.map((m, idx) => {
    const monthSeed = idx + parseInt(seed);
    const mBonus = monthSeed % 2 === 0 ? 4000 : 2000;
    const mDeductions = monthSeed % 3 === 0 ? 1000 : 0;
    return {
      month: m,
      baseSalary,
      bonus: mBonus,
      deduction: mDeductions,
      net: baseSalary + mBonus - mDeductions,
      status: "Paid"
    };
  });

  return {
    monthlySalary: baseSalary,
    bonus,
    deductions,
    netSalary,
    history: salaryHistory
  };
};

export const getManagerAuditLogs = (mgrId) => {
  const seed = mgrId.split("-")[1] || 1;
  return [
    { id: 1, action: "Login", details: "Logged in via Desktop app (IP: 192.168.1.104)", date: "Today, 09:15 AM", type: "system" },
    { id: 2, action: "Profile Update", details: "Updated emergency contact information", date: "Yesterday, 04:30 PM", type: "profile" },
    { id: 3, action: "Permission Changes", details: "Granted 'refund_approval' permission by Franchise Admin", date: "2026-06-15, 11:20 AM", type: "security" },
    { id: 4, action: "Store Assignment", details: `Assigned to Store #${seed} (Papa Veg Pizza - Indore Central)`, date: "2026-06-01, 10:00 AM", type: "assignment" },
    { id: 5, action: "Salary Changes", details: "Salary revision approved (+₹5,000 base revision)", date: "2026-05-28, 02:00 PM", type: "salary" },
    { id: 6, action: "Suspension", details: "Temporary warning suspension lifted by super admin", date: "2026-04-12, 09:00 AM", type: "status" }
  ];
};

export const getDashboardStats = (managersList) => {
  const total = managersList.length;
  const active = managersList.filter(m => m.status === "Active").length;
  const onLeave = managersList.filter(m => m.status === "On Leave").length;
  const suspended = managersList.filter(m => m.status === "Suspended").length;
  const avgRating = 4.7; // Hardcoded default, can be derived if needed
  const ordersManagedToday = 840;

  return {
    totalManagers: total,
    activeManagers: active,
    onLeaveManagers: onLeave,
    suspendedManagers: suspended,
    avgRating,
    ordersManagedToday
  };
};
