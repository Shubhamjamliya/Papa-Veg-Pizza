import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProtectedRoute from "@food/components/admin/ProtectedRoute";
import FranchiseAdminLayout from "../layout/FranchiseAdminLayout";
import Loader from "@food/components/Loader";

const AdminHome = lazy(() => import("@food/pages/franchise-admin/dashboard/FranchiseAdminDashboard"));
const PointOfSale = lazy(() => import("@food/pages/franchise-admin/PointOfSale"));
const FranchiseRevenue = lazy(() => import("@food/pages/franchise-admin/finance/FranchiseRevenue"));
const AdminProfile = lazy(() => import("@food/pages/franchise-admin/AdminProfile"));
const AdminSettings = lazy(() => import("@food/pages/franchise-admin/AdminSettings"));
const RefundRequests = lazy(() => import("@food/pages/franchise-admin/orders/RefundRequests"));
const OrderIssues = lazy(() => import("@food/pages/franchise-admin/orders/OrderIssues"));
const OrdersPage = lazy(() => import("@food/pages/franchise-admin/orders/OrdersPage"));
const LiveOrders = lazy(() => import("@food/pages/franchise-admin/orders/LiveOrders"));
const CompletedOrders = lazy(() => import("@food/pages/franchise-admin/orders/CompletedOrders"));
const CancelledOrder = lazy(() => import("@food/pages/franchise-admin/orders/CancelledOrder"));
const OrderDetectDelivery = lazy(() => import("@food/pages/franchise-admin/OrderDetectDelivery"));
const Categories = lazy(() => import("@food/pages/franchise-admin/products/Categories"));

// Food Management
const Products = lazy(() => import("@food/pages/franchise-admin/products/Products"));
const Addons = lazy(() => import("@food/pages/franchise-admin/products/Addons"));
const StorePricing = lazy(() => import("@food/pages/franchise-admin/products/StorePricing"));

// Promotions Management
const Coupons = lazy(() => import("@food/pages/franchise-admin/Coupons"));
const Cashback = lazy(() => import("@food/pages/franchise-admin/Cashback"));
const Banners = lazy(() => import("@food/pages/franchise-admin/Banners"));
const PromotionalBanner = lazy(() => import("@food/pages/franchise-admin/PromotionalBanner"));

const Stores = lazy(() => import("@food/pages/franchise-admin/storeManagement/Stores"));
const StoreApprovals = lazy(() => import("@food/pages/franchise-admin/storeManagement/StoreApprovals"));
const StorePerformance = lazy(() => import("@food/pages/franchise-admin/storeManagement/StorePerformance"));
const OperatingHours = lazy(() => import("@food/pages/franchise-admin/storeManagement/OperatingHours"));
const StoreManagers = lazy(() => import("@food/pages/franchise-admin/staffManagement/StoreManagers"));
const KitchenStaff = lazy(() => import("@food/pages/franchise-admin/staffManagement/KitchenStaff"));
const DeliveryPartners = lazy(() => import("@food/pages/franchise-admin/staffManagement/DeliveryPartners"));
const Ingredients = lazy(() => import("@food/pages/franchise-admin/inventory/Ingredients"));
const StockLevels = lazy(() => import("@food/pages/franchise-admin/inventory/StockLevels"));
const LowStockAlerts = lazy(() => import("@food/pages/franchise-admin/inventory/LowStockAlerts"));
const PurchaseRequests = lazy(() => import("@food/pages/franchise-admin/inventory/PurchaseRequests"));

// Help & Support
const Chattings = lazy(() => import("@food/pages/franchise-admin/Chattings"));
const ContactMessages = lazy(() => import("@food/pages/franchise-admin/ContactMessages"));
const SafetyEmergencyReports = lazy(() => import("@food/pages/franchise-admin/SafetyEmergencyReports"));

// Customer Management
const Customers = lazy(() => import("@food/pages/franchise-admin/Customers"));
const CustomersList = lazy(() => import("@food/pages/franchise-admin/customers/CustomersList"));
const CustomerComplaints = lazy(() => import("@food/pages/franchise-admin/customers/CustomerComplaints"));
const ReviewsRatings = lazy(() => import("@food/pages/franchise-admin/customers/ReviewsRatings"));
const LoyaltyMembers = lazy(() => import("@food/pages/franchise-admin/customers/LoyaltyMembers"));
const SupportTickets = lazy(() => import("@food/pages/franchise-admin/SupportTickets"));
const SubscribedMailList = lazy(() => import("@food/pages/franchise-admin/SubscribedMailList"));


// Deliveryman Management
const DeliveryBoyCommission = lazy(() => import("@food/pages/franchise-admin/DeliveryBoyCommission"));
const DeliveryCashLimit = lazy(() => import("@food/pages/franchise-admin/DeliveryCashLimit"));
const CashLimitSettlement = lazy(() => import("@food/pages/franchise-admin/CashLimitSettlement"));
const DeliveryWithdrawal = lazy(() => import("@food/pages/franchise-admin/DeliveryWithdrawal"));
const DeliveryBoyWallet = lazy(() => import("@food/pages/franchise-admin/DeliveryBoyWallet"));
const DeliveryEmergencyHelp = lazy(() => import("@food/pages/franchise-admin/DeliveryEmergencyHelp"));
const DeliverySupportTickets = lazy(() => import("@food/pages/franchise-admin/DeliverySupportTickets"));

const AdminLogin = lazy(() => import("@food/pages/franchise-admin/auth/AdminLogin"));
const AdminSignup = lazy(() => import("@food/pages/franchise-admin/auth/AdminSignup"));
const AdminForgotPassword = lazy(() => import("@food/pages/franchise-admin/auth/AdminForgotPassword"));

// Placeholder Page for deleted modules
const PlaceholderPage = lazy(() => import("@food/pages/franchise-admin/PlaceholderPage"));

export default function FranchiseAdminRouter() {
  const location = useLocation();
  
  // Enforce Superadmin Theme settings
  useEffect(() => {
    // Apply Light/Dark mode
    const themeMode = localStorage.getItem("sa_themeMode") || "light";
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply primary & secondary colors
    const primaryColor = localStorage.getItem("sa_primary") || "#a43c12";
    const secondaryColor = localStorage.getItem("sa_secondary") || "#ff7f50";
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--primary-hover", `${primaryColor}cc`);
    document.documentElement.style.setProperty("--secondary", secondaryColor);
    document.documentElement.style.setProperty("--secondary-hover", `${secondaryColor}cc`);
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Protected Routes - With Layout */}
        <Route path="login" element={<AdminLogin />} />
        <Route path="forgot-password" element={<AdminForgotPassword />} />
        <Route path="signup" element={<AdminSignup />} />

        {/* Protected Routes - With Layout */}
        <Route
          element={
            <ProtectedRoute>
              <FranchiseAdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Default Admin Redirect */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="stores" element={<Stores />} />
          <Route path="customers-list" element={<CustomersList />} />
          <Route path="customer-complaints" element={<CustomerComplaints />} />
          <Route path="reviews-ratings" element={<ReviewsRatings />} />
          <Route path="loyalty-members" element={<LoyaltyMembers />} />
          <Route path="store-managers" element={<StoreManagers />} />
          <Route path="employees" element={<KitchenStaff />} />
          <Route path="delivery-partners" element={<DeliveryPartners />} />
          <Route path="store-approvals" element={<StoreApprovals />} />
          <Route path="store-performance" element={<StorePerformance />} />
          <Route path="operating-hours" element={<OperatingHours />} />
          <Route path="live-orders" element={<LiveOrders />} />
          <Route path="completed-orders" element={<CompletedOrders />} />
          <Route path="cancelled-orders" element={<CancelledOrder />} />
          <Route path="refund-requests" element={<RefundRequests />} />
          <Route path="order-issues" element={<OrderIssues />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="addons" element={<Addons />} />
          <Route path="store-pricing" element={<StorePricing />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="stock-levels" element={<StockLevels />} />
          <Route path="low-stock-alerts" element={<LowStockAlerts />} />
          <Route path="purchase-requests" element={<PurchaseRequests />} />
          <Route path="franchise-revenue" element={<FranchiseRevenue />} />

          {/* FOOD ADMIN - All food related routes nested here */}
          <Route path="dashboard/*">
            <Route index element={<AdminHome />} />
            <Route path="point-of-sale" element={<PointOfSale />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<AdminSettings />} />
            
            {/* ORDER MANAGEMENT */}
            <Route path="orders/all" element={<Navigate to="/franchise-admin/live-orders" replace />} />
            <Route path="orders/scheduled" element={<OrdersPage statusKey="scheduled" />} />
            <Route path="orders/pending" element={<OrdersPage statusKey="pending" />} />
            <Route path="orders/accepted" element={<OrdersPage statusKey="accepted" />} />
            <Route path="orders/processing" element={<OrdersPage statusKey="processing" />} />
            <Route path="orders/food-on-the-way" element={<OrdersPage statusKey="food-on-the-way" />} />
            <Route path="orders/delivered" element={<Navigate to="/franchise-admin/completed-orders" replace />} />
            <Route path="orders/canceled" element={<Navigate to="/franchise-admin/cancelled-orders" replace />} />
            <Route path="orders/restaurant-cancelled" element={<OrdersPage statusKey="restaurant-cancelled" />} />
            <Route path="orders/payment-failed" element={<OrdersPage statusKey="payment-failed" />} />
            <Route path="orders/refunded" element={<OrdersPage statusKey="refunded" />} />
            <Route path="orders/offline-payments" element={<OrdersPage statusKey="offline-payments" />} />
            <Route path="order-detect-delivery" element={<OrderDetectDelivery />} />
            <Route path="order-refunds/new" element={<Navigate to="/franchise-admin/refund-requests" replace />} />


            {/* FOOD & CATEGORY MANAGEMENT */}
            <Route path="inventory/ingredients" element={<Navigate to="/franchise-admin/ingredients" replace />} />
            <Route path="inventory/alerts" element={<Navigate to="/franchise-admin/low-stock-alerts" replace />} />
            <Route path="inventory/purchase-requests" element={<Navigate to="/franchise-admin/purchase-requests" replace />} />
            <Route path="categories" element={<Navigate to="/franchise-admin/categories" replace />} />
            <Route path="fee-settings" element={<PlaceholderPage title="Fee Settings" />} />
            <Route path="referral-settings" element={<PlaceholderPage title="Referral Settings" />} />
            <Route path="foods" element={<Navigate to="/franchise-admin/products" replace />} />
            <Route path="food/list" element={<Navigate to="/franchise-admin/products" replace />} />
            <Route path="addons" element={<Navigate to="/franchise-admin/addons" replace />} />
            <Route path="global-pricing" element={<Navigate to="/franchise-admin/store-pricing" replace />} />

            {/* PROMOTIONS, CUSTOMERS, DELIVERYMEN, etc. */}
            <Route path="campaigns/basic" element={<PlaceholderPage title="Basic Campaign" />} />
            <Route path="campaigns/food" element={<PlaceholderPage title="Food Campaign" />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="cashback" element={<Cashback />} />
            <Route path="banners" element={<Banners />} />
            <Route path="promotional-banner" element={<PromotionalBanner />} />
            <Route path="advertisement" element={<PlaceholderPage title="Advertisements List" />} />
            <Route path="advertisement/new" element={<PlaceholderPage title="New Advertisement" />} />
            <Route path="advertisement/requests" element={<PlaceholderPage title="Ad Requests" />} />
            
            <Route path="chattings" element={<Chattings />} />
            <Route path="contact-messages" element={<ContactMessages />} />
            <Route path="safety-emergency-reports" element={<Navigate to="/franchise-admin/order-issues" replace />} />
            
            <Route path="customers" element={<Navigate to="/franchise-admin/customers-list" replace />} />
            <Route path="support-tickets" element={<Navigate to="/franchise-admin/customer-complaints" replace />} />
            <Route path="restaurants/reviews" element={<Navigate to="/franchise-admin/reviews-ratings" replace />} />
            <Route path="wallet/add-fund" element={<PlaceholderPage title="Wallet Add Fund" />} />
            <Route path="wallet/bonus" element={<PlaceholderPage title="Wallet Bonus" />} />
            <Route path="loyalty-point/report" element={<Navigate to="/franchise-admin/loyalty-members" replace />} />
            <Route path="subscribed-mail-list" element={<SubscribedMailList />} />

            <Route path="delivery-boy-commission" element={<DeliveryBoyCommission />} />
            <Route path="delivery-cash-limit" element={<DeliveryCashLimit />} />
            <Route path="cash-limit-settlement" element={<CashLimitSettlement />} />
            <Route path="delivery-withdrawal" element={<DeliveryWithdrawal />} />
            <Route path="delivery-boy-wallet" element={<DeliveryBoyWallet />} />
            <Route path="delivery-emergency-help" element={<DeliveryEmergencyHelp />} />
            <Route path="delivery-support-tickets" element={<DeliverySupportTickets />} />

            {/* REPORTS & SETTINGS */}
            <Route path="transaction-report" element={<PlaceholderPage title="Transaction Report" />} />
            <Route path="expense-report" element={<PlaceholderPage title="Expense Report" />} />
            <Route path="disbursement-report/restaurants" element={<PlaceholderPage title="Restaurants Disbursement" />} />
            <Route path="disbursement-report/deliverymen" element={<PlaceholderPage title="Deliverymen Disbursement" />} />
            <Route path="order-report/regular" element={<PlaceholderPage title="Regular Order Report" />} />
            <Route path="order-report/campaign" element={<PlaceholderPage title="Campaign Order Report" />} />
            <Route path="customer-report/feedback-experience" element={<PlaceholderPage title="Customer Feedback Report" />} />
            <Route path="tax-report" element={<PlaceholderPage title="Tax Report" />} />
            <Route path="restaurant-vat-report" element={<PlaceholderPage title="Restaurant VAT Report" />} />
            
            {/* Extra Report paths from sidebar */}
            <Route path="sales-report" element={<PlaceholderPage title="Sales Report" />} />
            <Route path="staff-report" element={<PlaceholderPage title="Staff Report" />} />
            <Route path="inventory-report" element={<PlaceholderPage title="Inventory Report" />} />

            <Route path="restaurant-withdraws" element={<PlaceholderPage title="Restaurant Withdrawals" />} />
            <Route path="withdraw-method" element={<PlaceholderPage title="Withdrawal Methods" />} />

            {/* SYSTEM & BUSINESS SETTINGS */}
            <Route path="business-setup" element={<PlaceholderPage title="Business Setup" />} />
            <Route path="email-template" element={<PlaceholderPage title="Email Template" />} />
            <Route path="theme-settings" element={<PlaceholderPage title="Theme Settings" />} />
            <Route path="gallery" element={<PlaceholderPage title="Gallery" />} />
            <Route path="login-setup" element={<PlaceholderPage title="Login Setup" />} />
            <Route path="business-settings/fcm-index" element={<PlaceholderPage title="Firebase Notifications" />} />
            <Route path="pages-social-media/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
            <Route path="pages-social-media/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="pages-social-media/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="pages-social-media/refund" element={<PlaceholderPage title="Refund Policy" />} />
            <Route path="pages-social-media/shipping" element={<PlaceholderPage title="Shipping Policy" />} />
            <Route path="pages-social-media/cancellation" element={<PlaceholderPage title="Cancellation Policy" />} />
            <Route path="pages-social-media/react-registration" element={<PlaceholderPage title="React Registration" />} />
            
            <Route path="3rd-party-configurations/party" element={<PlaceholderPage title="Third Party Setup" />} />
            <Route path="3rd-party-configurations/firebase" element={<PlaceholderPage title="Firebase Settings" />} />
            <Route path="3rd-party-configurations/offline-payment" element={<PlaceholderPage title="Offline Payment Settings" />} />
            <Route path="3rd-party-configurations/join-us" element={<PlaceholderPage title="Join Us Page Setup" />} />
            <Route path="3rd-party-configurations/analytics" element={<PlaceholderPage title="Analytics Script Setup" />} />
            <Route path="3rd-party-configurations/ai" element={<PlaceholderPage title="AI Assistant Setup" />} />
            <Route path="app-web-settings" element={<PlaceholderPage title="App & Web Settings" />} />
            <Route path="notifications" element={<PlaceholderPage title="Notifications Setup" />} />
            <Route path="broadcast-notification" element={<PlaceholderPage title="Broadcast Notifications" />} />
            <Route path="notification-channels" element={<PlaceholderPage title="Notification Channels" />} />
            <Route path="landing-page-settings/admin" element={<PlaceholderPage title="Admin Landing Page Setup" />} />
            <Route path="landing-page-settings/react" element={<PlaceholderPage title="React Landing Page Setup" />} />
            <Route path="page-meta-data" element={<PlaceholderPage title="Page Metadata Settings" />} />
            <Route path="react-site" element={<PlaceholderPage title="React Site Settings" />} />
            <Route path="clean-database" element={<PlaceholderPage title="Clean Database" />} />
            <Route path="addon-activation" element={<PlaceholderPage title="Addon Activation" />} />
            <Route path="hero-banner-management" element={<PlaceholderPage title="Hero Banner Settings" />} />
            <Route path="dining-management" element={<PlaceholderPage title="Dining Management" />} />
            <Route path="dining-list" element={<PlaceholderPage title="Dining Table List" />} />
            <Route path="dining-requests" element={<PlaceholderPage title="Dining Booking Requests" />} />
          </Route>

          {/* TAXI ADMIN - Placeholder for future implementation */}
          <Route path="taxi/*" element={<div className="p-8 text-center text-gray-500 bg-white min-h-[50vh] flex items-center justify-center border rounded-xl m-4">Taxi Administration - Coming Soon</div>} />

          {/* QUICK COMMERCE ADMIN - Placeholder for future implementation */}
          <Route path="quick-commerce/*" element={<div className="p-8 text-center text-gray-500 bg-white min-h-[50vh] flex items-center justify-center border rounded-xl m-4">Quick Commerce Administration - Coming Soon</div>} />
        </Route>

        {/* Redirect unknown admin routes to food admin */}
        <Route path="*" element={<Navigate to="/franchise-admin/dashboard" replace />} />

      </Routes>
    </Suspense>
  );
}
