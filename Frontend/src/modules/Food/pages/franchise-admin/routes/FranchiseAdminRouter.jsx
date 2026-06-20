import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProtectedRoute from "@food/components/admin/ProtectedRoute";
import FranchiseAdminLayout from "../layout/FranchiseAdminLayout";
import Loader from "@food/components/Loader";

const AdminHome = lazy(() => import("@food/pages/franchise-admin/dashboard/FranchiseAdminDashboard"));
const PointOfSale = lazy(() => import("@food/pages/franchise-admin/PointOfSale"));
const AdminProfile = lazy(() => import("@food/pages/franchise-admin/AdminProfile"));
const AdminSettings = lazy(() => import("@food/pages/franchise-admin/AdminSettings"));
const NewRefundRequests = lazy(() => import("@food/pages/franchise-admin/refunds/NewRefundRequests"));
const OrdersPage = lazy(() => import("@food/pages/franchise-admin/orders/OrdersPage"));
const OrderDetectDelivery = lazy(() => import("@food/pages/franchise-admin/OrderDetectDelivery"));
const Category = lazy(() => import("@food/pages/franchise-admin/categories/Category"));
const FeeSettings = lazy(() => import("@food/pages/franchise-admin/fee-settings/FeeSettings"));
const ReferralSettings = lazy(() => import("@food/pages/franchise-admin/referral-settings/ReferralSettings"));
// Food Management
const FoodsList = lazy(() => import("@food/pages/franchise-admin/foods/FoodsList"));
const AddonsList = lazy(() => import("@food/pages/franchise-admin/addons/AddonsList"));
// Promotions Management
const BasicCampaign = lazy(() => import("@food/pages/franchise-admin/campaigns/BasicCampaign"));
const FoodCampaign = lazy(() => import("@food/pages/franchise-admin/campaigns/FoodCampaign"));
const Coupons = lazy(() => import("@food/pages/franchise-admin/Coupons"));
const Cashback = lazy(() => import("@food/pages/franchise-admin/Cashback"));
const Banners = lazy(() => import("@food/pages/franchise-admin/Banners"));
const PromotionalBanner = lazy(() => import("@food/pages/franchise-admin/PromotionalBanner"));
const NewAdvertisement = lazy(() => import("@food/pages/franchise-admin/advertisement/NewAdvertisement"));
const AdRequests = lazy(() => import("@food/pages/franchise-admin/advertisement/AdRequests"));
const AdsList = lazy(() => import("@food/pages/franchise-admin/advertisement/AdsList"));
const Stores = lazy(() => import("@food/pages/franchise-admin/storeManagement/Stores"));
const StoreApprovals = lazy(() => import("@food/pages/franchise-admin/storeManagement/StoreApprovals"));
const StorePerformance = lazy(() => import("@food/pages/franchise-admin/storeManagement/StorePerformance"));
const OperatingHours = lazy(() => import("@food/pages/franchise-admin/storeManagement/OperatingHours"));
const StoreManagers = lazy(() => import("@food/pages/franchise-admin/staffManagement/StoreManagers"));

// Help & Support
const Chattings = lazy(() => import("@food/pages/franchise-admin/Chattings"));
const ContactMessages = lazy(() => import("@food/pages/franchise-admin/ContactMessages"));
const SafetyEmergencyReports = lazy(() => import("@food/pages/franchise-admin/SafetyEmergencyReports"));
// Customer Management
const Customers = lazy(() => import("@food/pages/franchise-admin/Customers"));
const SupportTickets = lazy(() => import("@food/pages/franchise-admin/SupportTickets"));
const AddFund = lazy(() => import("@food/pages/franchise-admin/wallet/AddFund"));
const Bonus = lazy(() => import("@food/pages/franchise-admin/wallet/Bonus"));
const LoyaltyPointReport = lazy(() => import("@food/pages/franchise-admin/loyalty-point/Report"));
const SubscribedMailList = lazy(() => import("@food/pages/franchise-admin/SubscribedMailList"));
// Deliveryman Management
const DeliveryBoyCommission = lazy(() => import("@food/pages/franchise-admin/DeliveryBoyCommission"));
const DeliveryCashLimit = lazy(() => import("@food/pages/franchise-admin/DeliveryCashLimit"));
const CashLimitSettlement = lazy(() => import("@food/pages/franchise-admin/CashLimitSettlement"));
const DeliveryWithdrawal = lazy(() => import("@food/pages/franchise-admin/DeliveryWithdrawal"));
const DeliveryBoyWallet = lazy(() => import("@food/pages/franchise-admin/DeliveryBoyWallet"));
const DeliveryEmergencyHelp = lazy(() => import("@food/pages/franchise-admin/DeliveryEmergencyHelp"));
const DeliverySupportTickets = lazy(() => import("@food/pages/franchise-admin/DeliverySupportTickets"));
const JoinRequest = lazy(() => import("@food/pages/franchise-admin/delivery-partners/JoinRequest"));
const AddDeliveryman = lazy(() => import("@food/pages/franchise-admin/delivery-partners/AddDeliveryman"));
const DeliverymanList = lazy(() => import("@food/pages/franchise-admin/delivery-partners/DeliverymanList"));
const DeliverymanReviews = lazy(() => import("@food/pages/franchise-admin/delivery-partners/DeliverymanReviews"));
const DeliverymanBonus = lazy(() => import("@food/pages/franchise-admin/delivery-partners/DeliverymanBonus"));
const EarningAddon = lazy(() => import("@food/pages/franchise-admin/delivery-partners/EarningAddon"));
const EarningAddonHistory = lazy(() => import("@food/pages/franchise-admin/delivery-partners/EarningAddonHistory"));
const DeliveryEarnings = lazy(() => import("@food/pages/franchise-admin/delivery-partners/DeliveryEarnings"));
// Disbursement Management
// Report Management
const TransactionReport = lazy(() => import("@food/pages/franchise-admin/reports/TransactionReport"));
const ExpenseReport = lazy(() => import("@food/pages/franchise-admin/reports/ExpenseReport"));
const DisbursementReportRestaurants = lazy(() => import("@food/pages/franchise-admin/reports/DisbursementReportRestaurants"));
const DisbursementReportDeliverymen = lazy(() => import("@food/pages/franchise-admin/reports/DisbursementReportDeliverymen"));
const RegularOrderReport = lazy(() => import("@food/pages/franchise-admin/reports/RegularOrderReport"));
const CampaignOrderReport = lazy(() => import("@food/pages/franchise-admin/reports/CampaignOrderReport"));
const RestaurantReport = lazy(() => import("@food/pages/franchise-admin/reports/RestaurantReport"));
const FeedbackExperienceReport = lazy(() => import("@food/pages/franchise-admin/reports/FeedbackExperienceReport"));
const TaxReport = lazy(() => import("@food/pages/franchise-admin/reports/TaxReport"));
const RestaurantVATReport = lazy(() => import("@food/pages/franchise-admin/reports/RestaurantVATReport"));
// Transaction Management
const RestaurantWithdraws = lazy(() => import("@food/pages/franchise-admin/transactions/RestaurantWithdraws"));
const WithdrawMethod = lazy(() => import("@food/pages/franchise-admin/transactions/WithdrawMethod"));
// Employee Management
const EmployeeRole = lazy(() => import("@food/pages/franchise-admin/employees/EmployeeRole"));
const AddEmployee = lazy(() => import("@food/pages/franchise-admin/employees/AddEmployee"));
const EmployeeList = lazy(() => import("@food/pages/franchise-admin/employees/EmployeeList"));
// Business Settings
const BusinessSetup = lazy(() => import("@food/pages/franchise-admin/settings/BusinessSetup"));
const EmailTemplate = lazy(() => import("@food/pages/franchise-admin/settings/EmailTemplate"));
const ThemeSettings = lazy(() => import("@food/pages/franchise-admin/settings/ThemeSettings"));
const Gallery = lazy(() => import("@food/pages/franchise-admin/settings/Gallery"));
const LoginSetup = lazy(() => import("@food/pages/franchise-admin/settings/LoginSetup"));
const TermsAndCondition = lazy(() => import("@food/pages/franchise-admin/settings/LegalTerms"));
const PrivacyPolicy = lazy(() => import("@food/pages/franchise-admin/settings/LegalPrivacy"));
const AboutUs = lazy(() => import("@food/pages/franchise-admin/settings/AboutUs"));
const RefundPolicy = lazy(() => import("@food/pages/franchise-admin/settings/RefundPolicy"));
const ShippingPolicy = lazy(() => import("@food/pages/franchise-admin/settings/ShippingPolicy"));
const CancellationPolicy = lazy(() => import("@food/pages/franchise-admin/settings/CancellationPolicy"));
const ReactRegistration = lazy(() => import("@food/pages/franchise-admin/settings/ReactRegistration"));
// System Settings
const ThirdParty = lazy(() => import("@food/pages/franchise-admin/system/ThirdParty"));
const FirebaseNotification = lazy(() => import("@food/pages/franchise-admin/system/FirebaseNotification"));
const OfflinePaymentSetup = lazy(() => import("@food/pages/franchise-admin/system/OfflinePaymentSetup"));
const JoinUsPageSetup = lazy(() => import("@food/pages/franchise-admin/system/JoinUsPageSetup"));
const AnalyticsScript = lazy(() => import("@food/pages/franchise-admin/system/AnalyticsScript"));
const AISetup = lazy(() => import("@food/pages/franchise-admin/system/AISetup"));
const AppWebSettings = lazy(() => import("@food/pages/franchise-admin/system/AppWebSettings"));
const NotificationChannels = lazy(() => import("@food/pages/franchise-admin/system/NotificationChannels"));
const NotificationBroadcast = lazy(() => import("@food/pages/franchise-admin/system/NotificationBroadcast"));
const AdminNotifications = lazy(() => import("@food/pages/franchise-admin/system/AdminNotifications"));
const LandingPageSettings = lazy(() => import("@food/pages/franchise-admin/system/LandingPageSettings"));
const PageMetaData = lazy(() => import("@food/pages/franchise-admin/system/PageMetaData"));
const ReactSite = lazy(() => import("@food/pages/franchise-admin/system/ReactSite"));
const CleanDatabase = lazy(() => import("@food/pages/franchise-admin/system/CleanDatabase"));
const AddonActivation = lazy(() => import("@food/pages/franchise-admin/system/AddonActivation"));
const LandingPageManagement = lazy(() => import("@food/pages/franchise-admin/system/LandingPageManagement"));
const DiningManagement = lazy(() => import("@food/pages/franchise-admin/system/DiningManagement"));
const DiningList = lazy(() => import("@food/pages/franchise-admin/system/DiningList"));
const DiningRequests = lazy(() => import("@food/pages/franchise-admin/system/DiningRequests"));
const AdminLogin = lazy(() => import("@food/pages/franchise-admin/auth/AdminLogin"));
const AdminSignup = lazy(() => import("@food/pages/franchise-admin/auth/AdminSignup"));
const AdminForgotPassword = lazy(() => import("@food/pages/franchise-admin/auth/AdminForgotPassword"));

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
          <Route path="store-managers" element={<StoreManagers />} />
          <Route path="store-approvals" element={<StoreApprovals />} />
          <Route path="store-performance" element={<StorePerformance />} />
          <Route path="operating-hours" element={<OperatingHours />} />

          {/* FOOD ADMIN - All food related routes nested here */}
          <Route path="dashboard/*">
            <Route index element={<AdminHome />} />
            <Route path="point-of-sale" element={<PointOfSale />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<AdminSettings />} />
            
            {/* ORDER MANAGEMENT */}
            <Route path="orders/all" element={<OrdersPage statusKey="all" />} />
            <Route path="orders/scheduled" element={<OrdersPage statusKey="scheduled" />} />
            <Route path="orders/pending" element={<OrdersPage statusKey="pending" />} />
            <Route path="orders/accepted" element={<OrdersPage statusKey="accepted" />} />
            <Route path="orders/processing" element={<OrdersPage statusKey="processing" />} />
            <Route path="orders/food-on-the-way" element={<OrdersPage statusKey="food-on-the-way" />} />
            <Route path="orders/delivered" element={<OrdersPage statusKey="delivered" />} />
            <Route path="orders/canceled" element={<OrdersPage statusKey="canceled" />} />
            <Route path="orders/restaurant-cancelled" element={<OrdersPage statusKey="restaurant-cancelled" />} />
            <Route path="orders/payment-failed" element={<OrdersPage statusKey="payment-failed" />} />
            <Route path="orders/refunded" element={<OrdersPage statusKey="refunded" />} />
            <Route path="orders/offline-payments" element={<OrdersPage statusKey="offline-payments" />} />
            <Route path="order-detect-delivery" element={<OrderDetectDelivery />} />
            <Route path="order-refunds/new" element={<NewRefundRequests />} />



            {/* FOOD & CATEGORY MANAGEMENT */}
            <Route path="categories" element={<Category />} />
            <Route path="fee-settings" element={<FeeSettings />} />
            <Route path="referral-settings" element={<ReferralSettings />} />
            <Route path="foods" element={<FoodsList />} />
            <Route path="food/list" element={<FoodsList />} />
            <Route path="addons" element={<AddonsList />} />

            {/* PROMOTIONS, CUSTOMERS, DELIVERYMEN, etc. */}
            <Route path="campaigns/basic" element={<BasicCampaign />} />
            <Route path="campaigns/food" element={<FoodCampaign />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="cashback" element={<Cashback />} />
            <Route path="banners" element={<Banners />} />
            <Route path="promotional-banner" element={<PromotionalBanner />} />
            <Route path="advertisement" element={<AdsList />} />
            <Route path="advertisement/new" element={<NewAdvertisement />} />
            <Route path="advertisement/requests" element={<AdRequests />} />
            
            <Route path="chattings" element={<Chattings />} />
            <Route path="contact-messages" element={<ContactMessages />} />
            <Route path="safety-emergency-reports" element={<SafetyEmergencyReports />} />
            
            <Route path="customers" element={<Customers />} />
            <Route path="support-tickets" element={<SupportTickets />} />
            <Route path="wallet/add-fund" element={<AddFund />} />
            <Route path="wallet/bonus" element={<Bonus />} />
            <Route path="loyalty-point/report" element={<LoyaltyPointReport />} />
            <Route path="subscribed-mail-list" element={<SubscribedMailList />} />

            <Route path="delivery-boy-commission" element={<DeliveryBoyCommission />} />
            <Route path="delivery-cash-limit" element={<DeliveryCashLimit />} />
            <Route path="cash-limit-settlement" element={<CashLimitSettlement />} />
            <Route path="delivery-withdrawal" element={<DeliveryWithdrawal />} />
            <Route path="delivery-boy-wallet" element={<DeliveryBoyWallet />} />
            <Route path="delivery-emergency-help" element={<DeliveryEmergencyHelp />} />
            <Route path="delivery-support-tickets" element={<DeliverySupportTickets />} />
            <Route path="delivery-partners" element={<DeliverymanList />} />
            <Route path="delivery-partners/add" element={<AddDeliveryman />} />
            <Route path="delivery-partners/join-request" element={<JoinRequest />} />
            <Route path="delivery-partners/reviews" element={<DeliverymanReviews />} />
            <Route path="delivery-partners/bonus" element={<DeliverymanBonus />} />
            <Route path="delivery-partners/earning-addon" element={<EarningAddon />} />
            <Route path="delivery-partners/earning-addon-history" element={<EarningAddonHistory />} />
            <Route path="delivery-partners/earnings" element={<DeliveryEarnings />} />

            {/* REPORTS & SETTINGS */}
            <Route path="transaction-report" element={<TransactionReport />} />
            <Route path="expense-report" element={<ExpenseReport />} />
            <Route path="disbursement-report/restaurants" element={<DisbursementReportRestaurants />} />
            <Route path="disbursement-report/deliverymen" element={<DisbursementReportDeliverymen />} />
            <Route path="order-report/regular" element={<RegularOrderReport />} />
            <Route path="order-report/campaign" element={<CampaignOrderReport />} />
            <Route path="customer-report/feedback-experience" element={<FeedbackExperienceReport />} />
            <Route path="tax-report" element={<TaxReport />} />
            <Route path="restaurant-vat-report" element={<RestaurantVATReport />} />
            
            <Route path="restaurant-withdraws" element={<RestaurantWithdraws />} />
            <Route path="withdraw-method" element={<WithdrawMethod />} />
            
            <Route path="employee-role" element={<EmployeeRole />} />
            <Route path="employees" element={<EmployeeList />} />
            <Route path="employees/add" element={<AddEmployee />} />

            {/* SYSTEM & BUSINESS SETTINGS */}
            <Route path="business-setup" element={<BusinessSetup />} />
            <Route path="email-template" element={<EmailTemplate />} />
            <Route path="theme-settings" element={<ThemeSettings />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="login-setup" element={<LoginSetup />} />
            <Route path="business-settings/fcm-index" element={<FirebaseNotification />} />
            <Route path="pages-social-media/terms" element={<TermsAndCondition />} />
            <Route path="pages-social-media/privacy" element={<PrivacyPolicy />} />
            <Route path="pages-social-media/about" element={<AboutUs />} />
            <Route path="pages-social-media/refund" element={<RefundPolicy />} />
            <Route path="pages-social-media/shipping" element={<ShippingPolicy />} />
            <Route path="pages-social-media/cancellation" element={<CancellationPolicy />} />
            <Route path="pages-social-media/react-registration" element={<ReactRegistration />} />
            
            <Route path="3rd-party-configurations/party" element={<ThirdParty />} />
            <Route path="3rd-party-configurations/firebase" element={<FirebaseNotification />} />
            <Route path="3rd-party-configurations/offline-payment" element={<OfflinePaymentSetup />} />
            <Route path="3rd-party-configurations/join-us" element={<JoinUsPageSetup />} />
            <Route path="3rd-party-configurations/analytics" element={<AnalyticsScript />} />
            <Route path="3rd-party-configurations/ai" element={<AISetup />} />
            <Route path="app-web-settings" element={<AppWebSettings />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="broadcast-notification" element={<NotificationBroadcast />} />
            <Route path="notification-channels" element={<NotificationChannels />} />
            <Route path="landing-page-settings/admin" element={<LandingPageSettings type="admin" />} />
            <Route path="landing-page-settings/react" element={<LandingPageSettings type="react" />} />
            <Route path="page-meta-data" element={<PageMetaData />} />
            <Route path="react-site" element={<ReactSite />} />
            <Route path="clean-database" element={<CleanDatabase />} />
            <Route path="addon-activation" element={<AddonActivation />} />
            <Route path="hero-banner-management" element={<LandingPageManagement />} />
            <Route path="dining-management" element={<DiningManagement />} />
            <Route path="dining-list" element={<DiningList />} />
            <Route path="dining-requests" element={<DiningRequests />} />
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
