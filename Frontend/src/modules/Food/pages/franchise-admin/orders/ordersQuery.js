import { useState, useEffect, useCallback } from "react";
import { mockOrders as initialOrders, mockStores, mockDeliveryPartners, mockReorderAnalytics } from "./mockOrders";
import { toast } from "sonner";

// In-memory database state
let dbOrders = [...initialOrders];

// Simple Pub/Sub for Query Invalidation
const listeners = new Set();
const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

// Hook for Live Orders list query
export function useLiveOrders(filters = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = useCallback(() => {
    setIsLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      let filtered = [...dbOrders];

      // Filters
      if (filters.storeId && filters.storeId !== "all") {
        filtered = filtered.filter((o) => o.store.storeId === filters.storeId);
      }
      if (filters.status && filters.status !== "all") {
        filtered = filtered.filter((o) => o.orderStatus === filters.status);
      }
      if (filters.paymentStatus && filters.paymentStatus !== "all") {
        filtered = filtered.filter((o) => o.paymentStatus === filters.paymentStatus);
      }
      if (filters.riderId && filters.riderId !== "all") {
        if (filters.riderId === "unassigned") {
          filtered = filtered.filter((o) => !o.deliveryPartner);
        } else {
          filtered = filtered.filter((o) => o.deliveryPartner?.riderId === filters.riderId);
        }
      }
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(
          (o) =>
            o.orderNumber.toLowerCase().includes(query) ||
            o.customer.name.toLowerCase().includes(query) ||
            o.customer.phone.includes(query)
        );
      }

      setData(filtered);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [
    filters.storeId,
    filters.status,
    filters.paymentStatus,
    filters.riderId,
    filters.searchQuery,
  ]);

  useEffect(() => {
    fetchOrders();
    return subscribe(fetchOrders);
  }, [fetchOrders]);

  return {
    data,
    isLoading,
    refetch: fetchOrders,
  };
}

// Hook for fetching a single order details
export function useOrder(orderId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrder = useCallback(() => {
    if (!orderId) {
      setData(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const order = dbOrders.find((o) => o.id === orderId);
      if (order) {
        setData(order);
        setError(null);
      } else {
        setError(new Error("Order not found"));
        setData(null);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
    return subscribe(fetchOrder);
  }, [fetchOrder]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchOrder,
  };
}

// Hook for fetching stores
export function useStores() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockStores);
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

// Hook for fetching delivery partners
export function useDeliveryPartners(availableOnly = false) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let riders = [...mockDeliveryPartners];
      if (availableOnly) {
        riders = riders.filter((r) => r.available);
      }
      setData(riders);
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [availableOnly]);

  return { data, isLoading };
}

// Mutation: Update Order Status
export function useUpdateOrderStatus() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ orderId, status, remarks, updatedBy = "Franchise Admin" }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderIndex = dbOrders.findIndex((o) => o.id === orderId);
        if (orderIndex === -1) {
          setIsLoading(false);
          reject(new Error("Order not found"));
          return;
        }

        const oldOrder = dbOrders[orderIndex];
        
        // Update order status & timeline
        const updatedTimeline = [
          ...oldOrder.timeline,
          { status, updatedBy, timestamp: new Date().toISOString() }
        ];

        dbOrders[orderIndex] = {
          ...oldOrder,
          orderStatus: status,
          remarks: remarks || oldOrder.remarks,
          timeline: updatedTimeline,
        };

        setIsLoading(false);
        notifyListeners(); // Invalidate live-orders & order-details
        resolve({ success: true, order: dbOrders[orderIndex] });
      }, 500);
    });
  };

  const mutate = (variables, options = {}) => {
    mutateAsync(variables)
      .then((data) => {
        if (options.onSuccess) options.onSuccess(data);
      })
      .catch((err) => {
        if (options.onError) options.onError(err);
      });
  };

  return { mutate, mutateAsync, isLoading };
}

// Mutation: Assign Rider
export function useAssignRider() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ orderId, riderId, estimatedPickupTime, notes }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderIndex = dbOrders.findIndex((o) => o.id === orderId);
        const rider = mockDeliveryPartners.find((r) => r.riderId === riderId);

        if (orderIndex === -1) {
          setIsLoading(false);
          reject(new Error("Order not found"));
          return;
        }
        if (!rider) {
          setIsLoading(false);
          reject(new Error("Rider not found"));
          return;
        }

        const oldOrder = dbOrders[orderIndex];
        const updatedTimeline = [
          ...oldOrder.timeline,
          { status: "Rider Assigned", updatedBy: "System", timestamp: new Date().toISOString() }
        ];

        dbOrders[orderIndex] = {
          ...oldOrder,
          orderStatus: "Rider Assigned",
          deliveryPartner: {
            riderId: rider.riderId,
            name: rider.name,
            vehicleType: rider.vehicleType,
            phone: rider.phone,
          },
          estimatedPickupTime,
          remarks: notes || oldOrder.remarks,
          timeline: updatedTimeline,
        };

        setIsLoading(false);
        notifyListeners(); // Invalidate
        resolve({ success: true, order: dbOrders[orderIndex] });
      }, 500);
    });
  };

  const mutate = (variables, options = {}) => {
    mutateAsync(variables)
      .then((data) => {
        if (options.onSuccess) options.onSuccess(data);
      })
      .catch((err) => {
        if (options.onError) options.onError(err);
      });
  };

  return { mutate, mutateAsync, isLoading };
}

// Mutation: Cancel Order
export function useCancelOrder() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ orderId, reason, remarks, notifyCustomer }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderIndex = dbOrders.findIndex((o) => o.id === orderId);
        if (orderIndex === -1) {
          setIsLoading(false);
          reject(new Error("Order not found"));
          return;
        }

        const oldOrder = dbOrders[orderIndex];
        const updatedTimeline = [
          ...oldOrder.timeline,
          { status: "Cancelled", updatedBy: "Franchise Admin", timestamp: new Date().toISOString() }
        ];

        dbOrders[orderIndex] = {
          ...oldOrder,
          orderStatus: "Cancelled",
          remarks: remarks ? `Cancelled: ${reason}. Notes: ${remarks}` : `Cancelled: ${reason}`,
          timeline: updatedTimeline,
        };

        setIsLoading(false);
        notifyListeners(); // Invalidate
        resolve({ success: true, order: dbOrders[orderIndex] });
      }, 500);
    });
  };

  const mutate = (variables, options = {}) => {
    mutateAsync(variables)
      .then((data) => {
        if (options.onSuccess) options.onSuccess(data);
      })
      .catch((err) => {
        if (options.onError) options.onError(err);
      });
  };

  return { mutate, mutateAsync, isLoading };
}

// Real-time Order Simulation helper (simulates a new order arriving)
export function simulateNewOrder() {
  const newId = `ORD-98${Math.floor(100 + Math.random() * 900)}`;
  const orderNum = `PVP-${newId.split("-")[1]}`;
  const randomNames = ["Vikram Malhotra", "Kriti Sanon", "Deepak Chahar", "Neha Sharma", "Arjun Kapoor"];
  const randomAddresses = [
    "C-45, GK 2, New Delhi - 110048",
    "Flat 101, Prestige Palms, Whitefield, Bengaluru - 560066",
    "Sector 5, Salt Lake City, Kolkata - 700091",
    "Flat 304, Jubilee Hills Road 36, Hyderabad - 500033",
    "Bldg 12, JVPD Scheme, Juhu, Mumbai - 400049"
  ];
  
  const selectedName = randomNames[Math.floor(Math.random() * randomNames.length)];
  const selectedAddress = randomAddresses[Math.floor(Math.random() * randomAddresses.length)];
  const store = mockStores[Math.floor(Math.random() * mockStores.length)];

  const pizzaOptions = [
    { name: "Double Cheese Margherita Pizza", price: 399, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80" },
    { name: "Tandoori Paneer Pizza", price: 420, image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=150&q=80" },
    { name: "Veg Supreme Burst Pizza", price: 699, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=150&q=80" }
  ];
  const pizza = pizzaOptions[Math.floor(Math.random() * pizzaOptions.length)];

  const newOrder = {
    id: newId,
    orderNumber: orderNum,
    customer: {
      name: selectedName,
      phone: `+91 ${Math.floor(60000 + Math.random() * 40000)} ${Math.floor(10000 + Math.random() * 90000)}`,
      email: `${selectedName.toLowerCase().replace(" ", ".")}@gmail.com`,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      address: selectedAddress,
      coords: { lat: 28.5 + Math.random() * 0.1, lng: 77.0 + Math.random() * 0.1 }
    },
    store: {
      storeId: store.storeId,
      name: store.storeName.split(" - ")[1] || store.storeName
    },
    orderType: "Delivery",
    placedAt: new Date().toISOString(),
    estimatedDeliveryTime: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    orderStatus: "Pending",
    pricing: {
      subtotal: pizza.price,
      tax: pizza.price * 0.05,
      deliveryFee: 40,
      discount: 0,
      total: pizza.price * 1.05 + 40
    },
    paymentMethod: Math.random() > 0.4 ? "UPI" : "COD",
    paymentStatus: Math.random() > 0.4 ? "Paid" : "Pending",
    transactionId: Math.random() > 0.4 ? `TXN-UPI${Math.floor(100000 + Math.random() * 900000)}` : null,
    couponApplied: null,
    deliveryPartner: null,
    items: [
      {
        productId: pizza.name.toLowerCase().replace(/ /g, "-"),
        productName: pizza.name,
        variant: "Medium / Regular",
        quantity: 1,
        price: pizza.price,
        image: pizza.image,
        specialInstructions: ""
      }
    ],
    timeline: [
      { status: "Placed", updatedBy: "Customer", timestamp: new Date().toISOString() }
    ],
    remarks: ""
  };

  dbOrders = [newOrder, ...dbOrders];
  notifyListeners();
  return newOrder;
}

// Hook for Completed Orders list query
export function useCompletedOrders(filters = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = dbOrders.filter((o) => o.orderStatus === "Delivered");

      // Filter by Store
      if (filters.storeId && filters.storeId !== "all") {
        filtered = filtered.filter((o) => o.store.storeId === filters.storeId);
      }
      // Filter by Rider
      if (filters.riderId && filters.riderId !== "all") {
        filtered = filtered.filter((o) => o.deliveryPartner?.riderId === filters.riderId);
      }
      // Filter by Rating
      if (filters.rating && filters.rating !== "all") {
        const targetRating = Number(filters.rating);
        filtered = filtered.filter((o) => o.rating?.rating === targetRating);
      }
      // Filter by Min / Max Amount
      if (filters.minAmount) {
        filtered = filtered.filter((o) => o.pricing.total >= Number(filters.minAmount));
      }
      if (filters.maxAmount) {
        filtered = filtered.filter((o) => o.pricing.total <= Number(filters.maxAmount));
      }
      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(
          (o) =>
            o.orderNumber.toLowerCase().includes(query) ||
            o.customer.name.toLowerCase().includes(query) ||
            o.customer.phone.includes(query)
        );
      }

      setData(filtered);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [
    filters.storeId,
    filters.riderId,
    filters.rating,
    filters.minAmount,
    filters.maxAmount,
    filters.searchQuery,
  ]);

  useEffect(() => {
    fetchOrders();
    return subscribe(fetchOrders);
  }, [fetchOrders]);

  return {
    data,
    isLoading,
    refetch: fetchOrders,
  };
}

export function useOrderDetails(orderId) {
  return useOrder(orderId);
}

export function useOrderReview(orderId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setData(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      const order = dbOrders.find((o) => o.id === orderId);
      setData(order?.rating || null);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [orderId]);

  return { data, isLoading };
}

export function useInvoice(orderId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setData(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      const order = dbOrders.find((o) => o.id === orderId);
      setData(order || null);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [orderId]);

  return { data, isLoading };
}

export function useReorderAnalytics(orderId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setData(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      const analytics = mockReorderAnalytics[orderId] || {
        lifetimeOrders: 4,
        previousOrderCount: 3,
        avgSpend: 320,
        repeatFrequency: "Once every 10 days",
        favoriteCategory: "Margherita Crusts",
        recommendedUpsell: [
          { productName: "Cheesy Garlic Bread", price: 150, image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?w=100" }
        ],
        mostOrderedProducts: [
          { name: "Double Cheese Margherita Pizza", count: 3, spend: 1197 }
        ],
        chartData: [
          { month: "Apr", orders: 1 },
          { month: "May", orders: 2 },
          { month: "Jun", orders: 1 }
        ]
      };
      setData(analytics);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [orderId]);

  return { data, isLoading };
}
