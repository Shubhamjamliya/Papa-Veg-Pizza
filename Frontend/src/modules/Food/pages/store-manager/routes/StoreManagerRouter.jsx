import { Suspense, useEffect } from "react"
import { Routes, Route, Navigate, useLocation, useOutletContext } from "react-router-dom"
import * as Icons from "lucide-react"
import StoreOperationsLayout from "../layouts/StoreOperationsLayout"
import Loader from "@food/components/Loader"
import StoreOperationsDashboard from "../dashboard/StoreOperationsDashboard"
import IncomingOrders from "../orders/IncomingOrders"
import ActiveOrders from "../orders/ActiveOrders"
import ReadyOrders from "../orders/ReadyOrders"
import CompletedOrders from "../orders/CompletedOrders"
import CancelledOrders from "../orders/CancelledOrders"
import KitchenQueue from "../kitchenOperations/KitchenQueue"
import PreparationBoard from "../kitchenOperations/PreparationBoard"
import PizzaStation from "../kitchenOperations/PizzaStation"
import BakingStation from "../kitchenOperations/BakingStation"
import PackagingStation from "../kitchenOperations/PackagingStation"




// A role-based routing wrapper that prevents unauthorized roles from viewing pages
function RoleProtectedRoute({ allowedRoles, children }) {
  const { role } = useOutletContext()
  
  if (!allowedRoles.includes(role)) {
    return (
      <div className="p-8 max-w-lg mx-auto mt-16 bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 rounded-3xl shadow-xl text-center">
        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-950/20 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Icons.ShieldAlert size={32} />
        </div>
        <h2 className="text-xl font-black text-zinc-900 dark:text-white mb-2">Access Denied</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
          Your current role <strong className="text-rose-500">({role})</strong> does not have permission to access this page. Please switch your role using the demo toggle in the top navbar.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold rounded-2xl text-xs transition-all"
        >
          Go Back
        </button>
      </div>
    )
  }

  return children
}

// A beautiful, highly aesthetic placeholder view for each page matching the Papa Veg styling
function PagePlaceholder({ title, description, allowedRoles }) {
  const { role } = useOutletContext()
  
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-sm transition-all">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">{title}</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
            Active Module
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400 border border-red-100 dark:border-red-900/30">
            Role: {role}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-sm min-h-[420px] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-red-50 dark:bg-red-950/10 text-[var(--primary)] rounded-2xl flex items-center justify-center mb-4">
          <Icons.Pizza size={32} />
        </div>
        <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2">{title} Dashboard</h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-md mb-6 leading-relaxed">
          Welcome to the {title} operational view. This console is fully simulated for testing permissions and layout changes.
        </p>
        
        {/* Permission matrix preview */}
        <div className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-850 px-4 py-2 rounded-full border border-zinc-100 dark:border-zinc-800">
          Allowed Roles: {allowedRoles.join(", ")}
        </div>
      </div>
    </div>
  )
}

export default function StoreManagerRouter() {
  const location = useLocation()

  // Make sure theme and styles are applied properly
  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme") || "light"
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [location.pathname])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          element={
            <StoreOperationsLayout />
          }
        >
          {/* Default Path Redirect */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          
          {/* Dashboard */}
          <Route path="dashboard" element={<StoreOperationsDashboard />} />

          {/* Orders */}
          <Route 
            path="orders/incoming" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <IncomingOrders />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="orders/active" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff", "packaging_staff"]}>
                <ActiveOrders />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="orders/ready" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "delivery_coordinator", "kitchen_staff", "packaging_staff"]}>
                <ReadyOrders />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="orders/completed" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <CompletedOrders />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="orders/cancelled" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <CancelledOrders />
              </RoleProtectedRoute>
            } 
          />

          {/* Kitchen Operations */}
          <Route 
            path="kitchen/queue" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}>
                <KitchenQueue />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="kitchen/preparation" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}>
                <PreparationBoard />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="kitchen/pizza-station" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}>
                <PizzaStation />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="kitchen/baking-station" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}>
                <BakingStation />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="kitchen/packaging-station" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}>
                <PackagingStation />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="kitchen/delayed-orders" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <PagePlaceholder 
                  title="Delayed Orders" 
                  description="Delayed items requiring manager intervention" 
                  allowedRoles={["store_manager", "kitchen_supervisor"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Delivery Operations */}
          <Route 
            path="delivery/assign" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Assign Rider" 
                  description="Assign delivery partners to ready orders manually or auto-dispatch" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="delivery/availability" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Rider Availability" 
                  description="Manage on-duty riders and active status" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="delivery/tracking" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Delivery Tracking" 
                  description="Live map tracking for active delivery riders" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="delivery/issues" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Delivery Issues" 
                  description="Rider delays, wrong address reports, and transit issues" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Inventory */}
          <Route 
            path="inventory/stock" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <PagePlaceholder 
                  title="Ingredient Stock" 
                  description="Stock levels for cheese, dough, toppings, sauces, and veggies" 
                  allowedRoles={["store_manager", "kitchen_supervisor"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="inventory/requests" 
            element={
              <PagePlaceholder 
                title="Stock Requests" 
                description="Raise ingredient replenishment requests to franchise warehouse" 
                allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}
              />
            } 
          />
          <Route 
            path="inventory/waste" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <PagePlaceholder 
                  title="Waste Management" 
                  description="Log spoiled ingredients, dropped food, and excess waste" 
                  allowedRoles={["store_manager", "kitchen_supervisor"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="inventory/low-stock" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <PagePlaceholder 
                  title="Low Stock Alerts" 
                  description="Ingredients below optimal threshold" 
                  allowedRoles={["store_manager", "kitchen_supervisor"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="inventory/shortages" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager", "kitchen_supervisor"]}>
                <PagePlaceholder 
                  title="Ingredient Shortages" 
                  description="Out-of-stock items requiring item disabling or warehouse dispatch" 
                  allowedRoles={["store_manager", "kitchen_supervisor"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Staff Management */}
          <Route 
            path="staff/list" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Kitchen Staff Directory" 
                  description="Manage kitchen roles, cooks, and staff profiles" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="staff/attendance" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Staff Attendance" 
                  description="Log check-ins, check-outs, and shift hours" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="staff/shifts" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Shift Management" 
                  description="Schedule weekly rotations, swap requests, and timecards" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="staff/performance" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Staff Performance" 
                  description="Preparation speed, rating reviews, and attendance KPI reports" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Customers */}
          <Route 
            path="customers/orders" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Customer Orders Log" 
                  description="Search customer orders, profiles, and order frequencies" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="customers/complaints" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Customer Complaints" 
                  description="Handle active complaints and issue resolution codes" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="customers/reviews" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Store Reviews" 
                  description="Customer reviews, feedback rating, and station specific reviews" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Reports */}
          <Route 
            path="reports/sales" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Daily Sales Report" 
                  description="Hourly sales logs, average cart value, and payment channel summary" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="reports/orders" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Order Reports" 
                  description="Total orders, cancel ratios, and average delivery times" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="reports/kitchen" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Kitchen Performance" 
                  description="Average cooking times, delay rates, and cook efficiency reports" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="reports/staff" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Staff Report" 
                  description="Attendance overview, efficiency rating, and shift coverage reports" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />
          <Route 
            path="reports/store" 
            element={
              <RoleProtectedRoute allowedRoles={["store_manager"]}>
                <PagePlaceholder 
                  title="Store Performance Report" 
                  description="Aggregate store KPIs, peak hour sales, and local operations score" 
                  allowedRoles={["store_manager"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* My Tasks */}
          <Route 
            path="tasks" 
            element={
              <RoleProtectedRoute allowedRoles={["kitchen_supervisor", "kitchen_staff"]}>
                <PagePlaceholder 
                  title="My Operations Tasks" 
                  description="Your checklist of items for the active shift" 
                  allowedRoles={["kitchen_supervisor", "kitchen_staff"]}
                />
              </RoleProtectedRoute>
            } 
          />

          {/* Profile */}
          <Route 
            path="profile" 
            element={
              <PagePlaceholder 
                title="Operations Profile" 
                description="View and update your store operations profile details" 
                allowedRoles={["store_manager", "kitchen_supervisor", "kitchen_staff"]}
              />
            } 
          />

          {/* Unknown routes redirect to dashboard */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
