import { useState, useEffect, useCallback } from "react";
import { 
  mockOrders as initialOrders, 
  mockStores, 
  mockDeliveryPartners, 
  mockReorderAnalytics,
  mockCancelledAnalytics,
  mockCancellationTrend,
  mockCancellationReasons,
  mockStoreCancellations,
  mockRefundStatusDistribution,
  mockRefundRequests,
  mockRefundTransactions,
  mockRefundAnalytics as initialRefundAnalytics,
  mockRefundTrend,
  mockRefundRequestsStatusDistribution,
  mockRefundReasonsDistribution,
  mockStoreRefundChart
} from "./mockOrders";
import { toast } from "sonner";

// In-memory database state
let dbOrders = [...initialOrders];
let dbRefundRequests = [...mockRefundRequests];
let dbRefundTransactions = [...mockRefundTransactions];

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

// Hook for Cancelled Orders list query
export function useCancelledOrders(filters = {}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = dbOrders.filter((o) => o.orderStatus === "Cancelled");

      // Filter by Store
      if (filters.storeId && filters.storeId !== "all") {
        filtered = filtered.filter((o) => o.store.storeId === filters.storeId);
      }
      
      // Filter by Cancellation Type (role/cancellation.role or cancellation type)
      if (filters.cancellationType && filters.cancellationType !== "all") {
        const type = filters.cancellationType;
        if (type === "Cancelled By Customer") {
          filtered = filtered.filter((o) => o.cancellation?.role === "CUSTOMER" && o.cancellation?.reason !== "Payment Failure");
        } else if (type === "Cancelled By Store") {
          filtered = filtered.filter((o) => o.cancellation?.role === "STORE");
        } else if (type === "Cancelled By System") {
          filtered = filtered.filter((o) => o.cancellation?.role === "SYSTEM" && o.cancellation?.reason !== "Payment Failure");
        } else if (type === "Payment Failure") {
          filtered = filtered.filter((o) => o.cancellation?.reason === "Payment Failure");
        }
      }

      // Filter by Refund Status
      if (filters.refundStatus && filters.refundStatus !== "all") {
        filtered = filtered.filter((o) => o.cancellation?.refundStatus === filters.refundStatus);
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
    filters.cancellationType,
    filters.refundStatus,
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

// Hook for fetching a single cancelled order details
export function useCancelledOrderDetails(orderId) {
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
      const order = dbOrders.find((o) => o.id === orderId && o.orderStatus === "Cancelled");
      if (order) {
        setData(order);
        setError(null);
      } else {
        setError(new Error("Cancelled order not found"));
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

// Hook for fetching refund data summary
export function useRefundData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const cancelled = dbOrders.filter((o) => o.orderStatus === "Cancelled");
      const pendingRefunds = cancelled.filter((o) => o.cancellation?.refundStatus === "Pending");
      const initiatedRefunds = cancelled.filter((o) => o.cancellation?.refundStatus === "Initiated");
      const completedRefunds = cancelled.filter((o) => o.cancellation?.refundStatus === "Completed");
      const totalRefundAmount = completedRefunds.reduce((sum, o) => sum + (o.cancellation?.refundAmount || 0), 0);

      setData({
        pendingCount: pendingRefunds.length,
        initiatedCount: initiatedRefunds.length,
        completedCount: completedRefunds.length,
        totalAmount: totalRefundAmount,
        refundsList: cancelled.map(o => ({
          orderId: o.id,
          orderNumber: o.orderNumber,
          amount: o.cancellation?.refundAmount || 0,
          status: o.cancellation?.refundStatus || "None",
          method: o.refund?.refundMethod || "UPI"
        }))
      });
      setIsLoading(false);
    }, 205);
    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

// Hook for cancellation analytics and chart data
export function useCancellationAnalytics() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Aggregate dynamically from dbOrders
      const cancelled = dbOrders.filter((o) => o.orderStatus === "Cancelled");
      const customerCancellations = cancelled.filter((o) => o.cancellation?.role === "CUSTOMER" && o.cancellation?.reason !== "Payment Failure");
      const storeCancellations = cancelled.filter((o) => o.cancellation?.role === "STORE");
      const refundPending = cancelled.filter((o) => o.cancellation?.refundStatus === "Pending");
      
      const totalCount = dbOrders.length;
      const cancelledCount = cancelled.length;
      const cancellationRate = totalCount > 0 ? ((cancelledCount / totalCount) * 100).toFixed(1) : "0.0";

      // Sum of refunds processed
      const refundAmountThisMonth = cancelled
        .filter(o => o.cancellation?.refundStatus === "Completed")
        .reduce((sum, o) => sum + (o.cancellation?.refundAmount || 0), 0);

      // Total revenue lost
      const cancelledRevenue = cancelled.reduce((sum, o) => sum + o.pricing.total, 0);

      setData({
        kpis: {
          cancelledToday: cancelled.filter(o => {
            const orderDate = new Date(o.placedAt);
            const diffTime = Math.abs(new Date() - orderDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 1;
          }).length,
          customerCancellations: customerCancellations.length,
          storeCancellations: storeCancellations.length,
          refundPending: refundPending.length,
          cancellationPercentage: `${cancellationRate}%`,
          mostCommonReason: mockCancelledAnalytics.mostCommonReason,
          refundAmountThisMonth,
          cancelledRevenue,
          averageRefundTime: mockCancelledAnalytics.averageRefundTime,
          highestCancellationStore: mockCancelledAnalytics.highestCancellationStore,
          highestCancellationStorePercentage: mockCancelledAnalytics.highestCancellationStorePercentage
        },
        cancellationTrend: mockCancellationTrend,
        cancellationReasons: mockCancellationReasons,
        storeCancellations: mockStoreCancellations,
        refundStatusDistribution: mockRefundStatusDistribution
      });
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

// Mutation: Initiate Refund
export function useInitiateRefund() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ orderId, refundAmount, refundMethod, reason, remarks }) => {
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
        
        // Update refund status to Initiated
        dbOrders[orderIndex] = {
          ...oldOrder,
          cancellation: {
            ...oldOrder.cancellation,
            refundStatus: "Initiated",
            remarks: remarks || oldOrder.cancellation?.remarks
          },
          refund: {
            refundRequired: true,
            refundAmount: Number(refundAmount),
            refundMethod,
            refundStatus: "Initiated",
            transactionReference: `REF-${refundMethod.toUpperCase()}${Math.floor(100000 + Math.random() * 900000)}`,
            initiatedAt: new Date().toISOString(),
            completedAt: ""
          },
          investigation: {
            ...oldOrder.investigation,
            auditLogs: [
              ...(oldOrder.investigation?.auditLogs || []),
              { action: `Refund Initiated via ${refundMethod}`, staff: "Franchise Admin", timestamp: new Date().toISOString() }
            ]
          }
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

// ==========================================
// REFUND REQUESTS QUERY HOOKS
// ==========================================

// Hook for fetching refund requests with filters & pagination
export function useRefundRequests(filters = {}) {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRefundRequests = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = [...dbRefundRequests];

      // Filter by Status
      if (filters.status && filters.status !== "all") {
        filtered = filtered.filter((r) => r.refundStatus.toLowerCase() === filters.status.toLowerCase());
      }

      // Filter by Store
      if (filters.storeId && filters.storeId !== "all") {
        filtered = filtered.filter((r) => r.store.storeId === filters.storeId);
      }

      // Filter by Amount Range
      if (filters.minAmount) {
        filtered = filtered.filter((r) => r.refundAmount >= Number(filters.minAmount));
      }
      if (filters.maxAmount) {
        filtered = filtered.filter((r) => r.refundAmount <= Number(filters.maxAmount));
      }

      // Filter by Search Query (ID or Order Number)
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(
          (r) =>
            r.requestId.toLowerCase().includes(query) ||
            r.orderNumber.toLowerCase().includes(query) ||
            r.customer.name.toLowerCase().includes(query) ||
            r.customer.phone.includes(query)
        );
      }

      // Filter by Date presets
      if (filters.datePreset && filters.datePreset !== "all") {
        const now = new Date();
        filtered = filtered.filter((r) => {
          const reqDate = new Date(r.requestedAt);
          const diffTime = Math.abs(now - reqDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (filters.datePreset === "today") return diffDays <= 1;
          if (filters.datePreset === "yesterday") return diffDays > 1 && diffDays <= 2;
          if (filters.datePreset === "week") return diffDays <= 7;
          if (filters.datePreset === "month") return diffDays <= 30;
          return true;
        });
      }

      // Sorting: default to requestedAt descending
      filtered.sort((a, b) => new Date(b.requestedAt) - new Date(a.requestedAt));

      setTotalCount(filtered.length);

      // Pagination
      const page = filters.page || 1;
      const limit = filters.limit || 10;
      const startIndex = (page - 1) * limit;
      const paginated = filtered.slice(startIndex, startIndex + limit);

      setData(paginated);
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [
    filters.status,
    filters.storeId,
    filters.minAmount,
    filters.maxAmount,
    filters.searchQuery,
    filters.datePreset,
    filters.page,
    filters.limit,
  ]);

  useEffect(() => {
    fetchRefundRequests();
    return subscribe(fetchRefundRequests);
  }, [fetchRefundRequests]);

  return {
    data,
    totalCount,
    isLoading,
    refetch: fetchRefundRequests,
  };
}

// Hook for fetching a single refund request
export function useRefundRequest(id) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRefundRequest = useCallback(() => {
    if (!id) {
      setData(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      const request = dbRefundRequests.find((r) => r.requestId === id);
      if (request) {
        setData(request);
        setError(null);
      } else {
        setError(new Error("Refund request not found"));
      }
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    fetchRefundRequest();
    return subscribe(fetchRefundRequest);
  }, [fetchRefundRequest]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchRefundRequest,
  };
}

// Hook for fetching refund analytics totals
export function useRefundAnalytics() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnalytics = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const pending = dbRefundRequests.filter((r) => r.refundStatus === "Pending").length;
      const approved = dbRefundRequests.filter((r) => r.refundStatus === "Approved").length;
      const processed = dbRefundRequests.filter((r) => r.refundStatus === "Processed").length;

      // Sum of refundAmount
      const refundAmountVal = dbRefundRequests
        .filter((r) => r.refundStatus !== "Rejected")
        .reduce((sum, r) => sum + r.refundAmount, 0);

      // Average Resolution Time (difference between processedAt and requestedAt)
      const processedRequests = dbRefundRequests.filter(
        (r) => r.refundStatus === "Processed" && r.processedAt && r.requestedAt
      );
      let avgResolutionDays = 3.2; // default fallback if no processed items yet
      if (processedRequests.length > 0) {
        const totalMs = processedRequests.reduce((sum, r) => {
          const start = new Date(r.requestedAt);
          const end = new Date(r.processedAt);
          return sum + (end - start);
        }, 0);
        const avgMs = totalMs / processedRequests.length;
        const avgDays = avgMs / (1000 * 60 * 60 * 24);
        avgResolutionDays = Number(avgDays.toFixed(1));
      }

      // Add other properties
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const refundToday = dbRefundRequests
        .filter((r) => r.refundStatus === "Processed" && new Date(r.processedAt) >= todayStart)
        .reduce((sum, r) => sum + r.refundAmount, 0);

      setData({
        pendingCount: pending,
        approvedCount: approved,
        processedCount: processed,
        totalRefundAmount: refundAmountVal,
        avgResolutionTime: `${avgResolutionDays} Days`,
        refundAmountToday: refundToday || 0,
        refundAmountThisMonth: initialRefundAnalytics.refundAmountThisMonth,
        highestRefundStore: initialRefundAnalytics.highestRefundStore,
        averageRefundValue: initialRefundAnalytics.averageRefundValue,
        refundSuccessRate: initialRefundAnalytics.refundSuccessRate,
      });
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchAnalytics();
    return subscribe(fetchAnalytics);
  }, [fetchAnalytics]);

  return { data, isLoading };
}

// Hook for fetching chart-specific datasets
export function useRefundChartData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchChartData = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Build dynamic status distribution counts
      const pending = dbRefundRequests.filter((r) => r.refundStatus === "Pending").length;
      const approved = dbRefundRequests.filter((r) => r.refundStatus === "Approved").length;
      const rejected = dbRefundRequests.filter((r) => r.refundStatus === "Rejected").length;
      const processed = dbRefundRequests.filter((r) => r.refundStatus === "Processed").length;

      const dynamicStatusDist = [
        { name: "Pending", value: pending, fill: "#f97316" },
        { name: "Approved", value: approved, fill: "#3b82f6" },
        { name: "Rejected", value: rejected, fill: "#ef4444" },
        { name: "Processed", value: processed, fill: "#10b981" },
      ];

      // Build dynamic reasons counts
      const reasonCounts = {
        "Food Quality": 0,
        "Wrong Order": 0,
        "Late Delivery": 0,
        "Damaged Packaging": 0,
        "Missing Items": 0,
        "Other": 0,
      };

      dbRefundRequests.forEach((r) => {
        if (reasonCounts[r.reason] !== undefined) {
          reasonCounts[r.reason]++;
        } else {
          reasonCounts["Other"]++;
        }
      });

      const dynamicReasonsDist = Object.keys(reasonCounts).map((key, index) => {
        const colors = ["#f97316", "#3b82f6", "#eab308", "#a855f7", "#ef4444", "#6b7280"];
        return {
          name: key,
          value: reasonCounts[key],
          fill: colors[index % colors.length],
        };
      });

      setData({
        refundTrend: mockRefundTrend,
        refundStatusDistribution: dynamicStatusDist,
        refundReasonsDistribution: dynamicReasonsDist,
        storeRefundChart: mockStoreRefundChart,
      });
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchChartData();
    return subscribe(fetchChartData);
  }, [fetchChartData]);

  return { data, isLoading };
}

// ==========================================
// REFUND MUTATIONS
// ==========================================

// Mutation: Approve Refund Request
export function useApproveRefund() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ requestId, approvedAmount, remarks, notifyCustomer }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = dbRefundRequests.findIndex((r) => r.requestId === requestId);
        if (index === -1) {
          setIsLoading(false);
          reject(new Error("Refund request not found"));
          return;
        }

        const oldRequest = dbRefundRequests[index];
        const newTimeline = [
          ...oldRequest.timeline,
          {
            status: "Approved",
            updatedBy: "Franchise Admin",
            timestamp: new Date().toISOString(),
            remarks: remarks || `Approved refund of ₹${approvedAmount}.`,
          },
        ];

        dbRefundRequests[index] = {
          ...oldRequest,
          refundStatus: "Approved",
          approvedBy: "Franchise Admin",
          refundAmount: Number(approvedAmount), // update with approved amount if changed
          timeline: newTimeline,
          paymentInfo: {
            ...oldRequest.paymentInfo,
            processedAmount: Number(approvedAmount),
          },
        };

        setIsLoading(false);
        notifyListeners();
        toast.success("Refund approved successfully.");
        resolve({ success: true, request: dbRefundRequests[index] });
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

// Mutation: Reject Refund Request
export function useRejectRefund() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ requestId, rejectionReason, remarks, notifyCustomer }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = dbRefundRequests.findIndex((r) => r.requestId === requestId);
        if (index === -1) {
          setIsLoading(false);
          reject(new Error("Refund request not found"));
          return;
        }

        const oldRequest = dbRefundRequests[index];
        const newTimeline = [
          ...oldRequest.timeline,
          {
            status: "Rejected",
            updatedBy: "Franchise Admin",
            timestamp: new Date().toISOString(),
            remarks: remarks || `Rejected. Reason: ${rejectionReason}`,
          },
        ];

        dbRefundRequests[index] = {
          ...oldRequest,
          refundStatus: "Rejected",
          timeline: newTimeline,
          remarks: `Rejected: ${rejectionReason}. Remarks: ${remarks || ""}`,
        };

        setIsLoading(false);
        notifyListeners();
        toast.error("Refund request rejected.");
        resolve({ success: true, request: dbRefundRequests[index] });
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

// Mutation: Process Refund Request
export function useProcessRefund() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({
    requestId,
    gateway,
    refundTransactionId,
    processedAmount,
    processedBy,
    gatewayReference,
    remarks,
    notifyCustomer,
  }) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = dbRefundRequests.findIndex((r) => r.requestId === requestId);
        if (index === -1) {
          setIsLoading(false);
          reject(new Error("Refund request not found"));
          return;
        }

        const oldRequest = dbRefundRequests[index];
        const processedAt = new Date().toISOString();
        const txnId = refundTransactionId || `REF-${gateway.toUpperCase()}${Math.floor(100000 + Math.random() * 900000)}`;

        const newTimeline = [
          ...oldRequest.timeline,
          {
            status: "Processed",
            updatedBy: processedBy || "HQ Finance Team",
            timestamp: processedAt,
            remarks: remarks || `Refund processed successfully via ${gateway}.`,
          },
        ];

        dbRefundRequests[index] = {
          ...oldRequest,
          refundStatus: "Processed",
          processedAt: processedAt,
          timeline: newTimeline,
          paymentInfo: {
            ...oldRequest.paymentInfo,
            gateway: gateway,
            refundTransactionId: txnId,
            processedAmount: Number(processedAmount),
            processedBy: processedBy || "HQ Finance Team",
            processingDate: processedAt,
          },
        };

        // Create transaction log
        const newTransaction = {
          _id: `TXN-REF-${Math.floor(100 + Math.random() * 900)}`,
          refundRequestId: requestId,
          gateway,
          refundTransactionId: txnId,
          processedAmount: Number(processedAmount),
          processedBy: processedBy || "HQ Finance Team",
          gatewayReference: gatewayReference || `GTR-${Math.floor(10000000 + Math.random() * 90000000)}`,
          status: "Success",
          processedAt: processedAt,
        };

        dbRefundTransactions = [newTransaction, ...dbRefundTransactions];

        setIsLoading(false);
        notifyListeners();
        toast.success("Refund processed successfully.");
        resolve({ success: true, request: dbRefundRequests[index] });
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

// WebSocket simulator for refund requests
export function simulateNewRefundRequest() {
  const newId = `REF-REQ-0${Math.floor(10 + Math.random() * 90)}`;
  const orderNum = `PVP-98${Math.floor(400 + Math.random() * 99)}`;
  const randomNames = ["Virat Kohli", "Jasprit Bumrah", "Rohit Sharma", "Shubman Gill", "Hardik Pandya"];
  const selectedName = randomNames[Math.floor(Math.random() * randomNames.length)];
  const store = mockStores[Math.floor(Math.random() * mockStores.length)];
  const amount = Number((100 + Math.random() * 900).toFixed(2));
  const reasons = ["Food Quality", "Wrong Order", "Late Delivery", "Damaged Packaging", "Missing Items"];
  const selectedReason = reasons[Math.floor(Math.random() * reasons.length)];

  const newRefund = {
    _id: newId,
    requestId: newId,
    orderId: `ORD-${orderNum.split("-")[1]}`,
    orderNumber: orderNum,
    customerId: `CUST-${Math.floor(200 + Math.random() * 800)}`,
    franchiseId: "FRAN-001",
    customer: {
      name: selectedName,
      phone: `+91 ${Math.floor(60000 + Math.random() * 40000)} ${Math.floor(10000 + Math.random() * 90000)}`,
      email: `${selectedName.toLowerCase().replace(" ", ".")}@gmail.com`,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
      address: "Sector 62, Noida, Uttar Pradesh - 201301",
      memberSince: "15 Jan 2024",
      totalOrders: Math.floor(2 + Math.random() * 30),
      lifetimeValue: Math.floor(1000 + Math.random() * 15000),
    },
    store: {
      storeId: store.storeId,
      name: store.storeName.split(" - ")[1] || store.storeName,
    },
    refundAmount: amount,
    reason: selectedReason,
    description: `Received a request because of ${selectedReason.toLowerCase()}. Please review and process this immediately.`,
    attachments: Math.random() > 0.5 ? ["https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"] : [],
    refundStatus: "Pending",
    requestedAt: new Date().toISOString(),
    approvedBy: null,
    processedAt: null,
    paymentTransactionId: `TXN-UPI${Math.floor(100000 + Math.random() * 900000)}`,
    timeline: [
      {
        status: "Request Submitted",
        updatedBy: selectedName,
        timestamp: new Date().toISOString(),
        remarks: `Requested refund for ${selectedReason.toLowerCase()}.`,
      },
    ],
    paymentInfo: {
      originalTransactionId: `TXN-UPI${Math.floor(100000 + Math.random() * 900000)}`,
      gateway: Math.random() > 0.5 ? "Razorpay" : "PhonePe",
      gatewayStatus: "Success",
      refundTransactionId: "",
      processedAmount: 0,
      processedBy: "",
      processingDate: "",
    },
  };

  dbRefundRequests = [newRefund, ...dbRefundRequests];
  notifyListeners();
  toast.info(`WebSocket: New Refund Request ${newId} received!`, {
    description: `${selectedName} requested ₹${amount} for ${selectedReason}`,
  });
  return newRefund;
}

// Mutation: Reopen Investigation
export function useReopenInvestigation() {
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async ({ orderId, reason, priority, assignedStaff, description, attachments }) => {
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

        dbOrders[orderIndex] = {
          ...oldOrder,
          investigation: {
            caseStatus: "Under Review",
            assignedStaff: assignedStaff || "Unassigned",
            reason,
            priority,
            description,
            attachments: attachments || [],
            notes: `Reopened for investigation. Reason: ${reason}`,
            auditLogs: [
              ...(oldOrder.investigation?.auditLogs || []),
              { action: `Investigation Reopened. Priority: ${priority}`, staff: "Franchise Admin", timestamp: new Date().toISOString() }
            ]
          }
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
