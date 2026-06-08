import React, { Suspense, lazy, useState } from "react"
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom"
import Sidebar from "../layouts/Sidebar"
import Navbar from "../layouts/Navbar"

// Lazy load components for optimal bundle splitting
const SuperAdminDashboard = lazy(() => import("../Dashboard/SuperAdminDashboard"))
const CustomerAnalysis = lazy(() => import("../userManagement/CustomerAnalysis"))
const CustomerList = lazy(() => import("../userManagement/CustomerList"))
const UserProfile = lazy(() => import("../userManagement/UserProfile"))
const FranchiseStores = lazy(() => import("../franchiseManagement/FranchiseStores"))
const StoreRequestApproval = lazy(() => import("../franchiseManagement/StoreRequestApproval"))
const StoreZones = lazy(() => import("../franchiseManagement/StoreZones"))
const FranchiseList = lazy(() => import("../userManagement/FranchiseList"))
const StoreManagers = lazy(() => import("../userManagement/StoreManagers"))
const StoreManagersList = lazy(() => import("../userManagement/StoreManagersList"))
const DeliveryPartnersManagement = lazy(() => import("../userManagement/DeliveryPartnersManagement"))
const KitchenStaffManagement = lazy(() => import("../userManagement/KitchenStaffManagement"))
const RolesPermissionManagement = lazy(() => import("../userManagement/RolesPermissionManagement"))
const ProductsManagement = lazy(() => import("../productsManagement/ProductsManagement"))
const CategoriesManagement = lazy(() => import("../productsManagement/CategoriesManagement"))
const Addons = lazy(() => import("../productsManagement/Addons"))
const InventoryManagement = lazy(() => import("../productsManagement/InventoryManagement"))
const OrdersManagement = lazy(() => import("../orderSystem/OrdersManagement"))
const RefundAndCancellation = lazy(() => import("../orderSystem/RefundAndCancellation"))
const LiveOrderMonitor = lazy(() => import("../orderSystem/LiveOrderMonitor"))
const DeliveryManagement = lazy(() => import("../deliverySystem/DeliveryManagement"))
const RiderTracking = lazy(() => import("../deliverySystem/RiderTracking"))
const DeliveryZoneManagement = lazy(() => import("../deliverySystem/DeliveryZoneManagement"))

// Shared layout shell for user management pages to inherit Sidebar and Navbar
function SuperAdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Sync active sidebar state based on route path
  let activeItem = "Dashboard"
  if (location.pathname.includes("/customers")) {
    activeItem = "Customers"
  } else if (location.pathname.includes("/franchise-stores")) {
    activeItem = "Franchise Stores"
  } else if (location.pathname.includes("/store-requests")) {
    activeItem = "Store Requests / Approvals"
  } else if (location.pathname.includes("/store-zones")) {
    activeItem = "Store Zones / Regions"
  } else if (location.pathname.includes("/franchises")) {
    activeItem = "Franchise Owners"
  } else if (location.pathname.includes("/managers")) {
    activeItem = "Store Managers"
  } else if (location.pathname.includes("/delivery-partners")) {
    activeItem = "Delivery Partners"
  } else if (location.pathname.includes("/kitchen-staff")) {
    activeItem = "Kitchen Staff"
  } else if (location.pathname.includes("/roles-permissions")) {
    activeItem = "Roles & Permissions"
  } else if (location.pathname.includes("/products")) {
    activeItem = "Products"
  } else if (location.pathname.includes("/categories")) {
    activeItem = "Categories"
  } else if (location.pathname.includes("/addons")) {
    activeItem = "Add-ons / Toppings"
  } else if (location.pathname.includes("/inventory")) {
    activeItem = "Inventory Management"
  } else if (location.pathname.includes("/orders")) {
    activeItem = "Orders"
  } else if (location.pathname.includes("/live-monitoring")) {
    activeItem = "Live Order Monitoring"
  } else if (location.pathname.includes("/refunds-cancellations")) {
    activeItem = "Refunds & Cancellations"
  } else if (location.pathname.includes("/delivery-management")) {
    activeItem = "Delivery Management"
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-955 text-zinc-800 dark:text-zinc-100 transition-all duration-300">
      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem={activeItem}
        setActiveItem={() => { }}
      />
      {/* 280px left padding on desktop to clear fixed Sidebar */}
      <div className="lg:pl-[280px] pt-16 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default function SuperAdminRouter() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-955">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-bold text-zinc-500 tracking-wider uppercase animate-pulse">
              Initializing Channels...
            </p>
          </div>
        </div>
      }
    >
      <Routes>
        {/* Main Dashboard route (standalone view with its own layout states) */}
        <Route path="/dashboard" element={<SuperAdminDashboard />} />

        {/* Customer Management module routes wrapped in the shared Layout */}
        <Route element={<SuperAdminLayout />}>
          <Route path="/customers" element={<CustomerAnalysis />} />
          <Route path="/customers/list" element={<CustomerList />} />
          <Route path="/customers/profile/:id" element={<UserProfile />} />
          <Route path="/customers/profile" element={<UserProfile />} />
          <Route path="/franchise-stores" element={<FranchiseStores />} />
          <Route path="/store-requests" element={<StoreRequestApproval />} />
          <Route path="/store-zones" element={<StoreZones />} />
          <Route path="/franchises" element={<FranchiseList />} />
          <Route path="/managers" element={<StoreManagers />} />
          <Route path="/managers/list" element={<StoreManagersList />} />
          <Route path="/delivery-partners" element={<DeliveryPartnersManagement />} />
          <Route path="/kitchen-staff" element={<KitchenStaffManagement />} />
          <Route path="/roles-permissions" element={<RolesPermissionManagement />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/categories" element={<CategoriesManagement />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/live-monitoring" element={<LiveOrderMonitor />} />
          <Route path="/refunds-cancellations" element={<RefundAndCancellation />} />
          <Route path="/delivery-management" element={<DeliveryManagement />} />
          <Route path="/rider-tracking" element={<RiderTracking />} />
          <Route path="/delivery-zones" element={<DeliveryZoneManagement />} />
        </Route>

        {/* Redirect empty paths to dashboard */}
        <Route path="/" element={<Navigate to="dashboard" replace />} />

        {/* Wildcard fallback to redirect unknown paths */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </Suspense>
  )
}

