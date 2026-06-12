# SuperAdmin Pages Catalog

Here is a categorized list of all superadmin pages, grouped into sets of 5 files/pages for modular management.

---

## 📂 Group 1: Core Dashboard & Key User Roles
1. **Dashboard**
   - **File Path**: [SuperAdminDashboard.jsx](./Frontend/src/modules/Food/pages/superadmin/Dashboard/SuperAdminDashboard.jsx)
   - **Description**: Main analytics dashboard showing global statistics, earnings, and operations.
2. **Customer Analytics**
   - **File Path**: [CustomerAnalysis.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/CustomerAnalysis.jsx)
   - **Description**: High-level customer signup trends and engagement statistics.
3. **Customer Directory**
   - **File Path**: [CustomerList.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/CustomerList.jsx)
   - **Description**: Compact listing of customer profiles, statuses, and spent analytics.
4. **Franchise Owners Directory**
   - **File Path**: [FranchiseList.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/FranchiseList.jsx)
   - **Description**: Overview of registered franchise owners and their related store licenses.
5. **Store Managers Directory**
   - **File Path**: [StoreManagers.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/StoreManagers.jsx)
   - **Description**: Grid view of operational store managers.

---

## 📂 Group 2: Staff Roles & Store Setup
6. **Store Managers List**
   - **File Path**: [StoreManagersList.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/StoreManagersList.jsx)
   - **Description**: Detailed list view of store managers and assignment logs.
7. **Delivery Partners Management**
   - **File Path**: [DeliveryPartnersManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/DeliveryPartnersManagement.jsx)
   - **Description**: Performance monitoring, status toggles, and details of rider fleets.
8. **Kitchen Staff Management**
   - **File Path**: [KitchenStaffManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/KitchenStaffManagement.jsx)
   - **Description**: Roster of kitchen employees, shifts, and store locations.
9. **Roles & Permissions Management**
   - **File Path**: [RolesPermissionManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/userManagement/RolesPermissionManagement.jsx)
   - **Description**: Configure system authorization levels, admin roles, and specific access rules.
10. **Franchise Stores**
    - **File Path**: [FranchiseStores.jsx](./Frontend/src/modules/Food/pages/superadmin/franchiseManagement/FranchiseStores.jsx)
    - **Description**: Profile summary of all brick-and-mortar outlet operations.

---

## 📂 Group 3: Outlets & Menu Setup
11. **Store Requests / Approvals**
    - **File Path**: [StoreRequestApproval.jsx](./Frontend/src/modules/Food/pages/superadmin/franchiseManagement/StoreRequestApproval.jsx)
    - **Description**: Workflow interface to review, approve, or reject new store applications.
12. **Store Zones / Regions**
    - **File Path**: [StoreZones.jsx](./Frontend/src/modules/Food/pages/superadmin/franchiseManagement/StoreZones.jsx)
    - **Description**: Map boundaries and regional parameters for delivery locations.
13. **Products Management**
    - **File Path**: [ProductsManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/productsManagement/ProductsManagement.jsx)
    - **Description**: Menu item creator, price modifier, and status editor.
14. **Categories Management**
    - **File Path**: [CategoriesManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/productsManagement/CategoriesManagement.jsx)
    - **Description**: List of food categories (Pizzas, Beverages, Sides) and sequencing controls.
15. **Add-ons / Toppings**
    - **File Path**: [Addons.jsx](./Frontend/src/modules/Food/pages/superadmin/productsManagement/Addons.jsx)
    - **Description**: Configuration grid for extra toppings, dips, and customizable modifiers.

---

## 📂 Group 4: Inventory, Order Routing & Returns
16. **Inventory Management**
    - **File Path**: [InventoryManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/productsManagement/InventoryManagement.jsx)
    - **Description**: Stock adjustment controls, alerts, and ingredient trackers.
17. **Orders Dashboard**
    - **File Path**: [OrdersManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/orderSystem/OrdersManagement.jsx)
    - **Description**: Complete catalog of active, dispatched, and delivered orders.
18. **Refunds & Cancellations**
    - **File Path**: [RefundAndCancellation.jsx](./Frontend/src/modules/Food/pages/superadmin/orderSystem/RefundAndCancellation.jsx)
    - **Description**: Interface to process customer refund claims and transaction disputes.
19. **Live Order Monitoring**
    - **File Path**: [LiveOrderMonitor.jsx](./Frontend/src/modules/Food/pages/superadmin/orderSystem/LiveOrderMonitor.jsx)
    - **Description**: Live dashboard tracking cooking, preparing, and rider status in real-time.
20. **Delivery Management**
    - **File Path**: [DeliveryManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/deliverySystem/DeliveryManagement.jsx)
    - **Description**: Delivery pricing settings, timing thresholds, and distance rates.

---

## 📂 Group 5: Rider Tracking, Marketing & Payments
21. **Rider Tracking Map**
    - **File Path**: [RiderTracking.jsx](./Frontend/src/modules/Food/pages/superadmin/deliverySystem/RiderTracking.jsx)
    - **Description**: Visual routing map tracking delivery riders actively on trips.
22. **Delivery Zone Management**
    - **File Path**: [DeliveryZoneManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/deliverySystem/DeliveryZoneManagement.jsx)
    - **Description**: Specific coordinates setup for dispatch zones.
23. **Coupons Management**
    - **File Path**: [CouponsManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/marketing/CouponsManagement.jsx)
    - **Description**: Promo codes configuration, minimum cart values, and expiration rules.
24. **Offers & Campaigns**
    - **File Path**: [OffersAndCampaign.jsx](./Frontend/src/modules/Food/pages/superadmin/marketing/OffersAndCampaign.jsx)
    - **Description**: Seasonal campaigns and discount percentage settings.
25. **Banners & Promotions**
    - **File Path**: [BannersAndPromotions.jsx](./Frontend/src/modules/Food/pages/superadmin/marketing/BannersAndPromotions.jsx)
    - **Description**: Media assets manager for user homepage sliders.

---

## 📂 Group 6: Notifications, Billing & Commissions
26. **Notifications Management**
    - **File Path**: [NotificationsManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/marketing/NotificationsManagement.jsx)
    - **Description**: Push notification portal to broadcast bulk messages to customers.
27. **Payments Management**
    - **File Path**: [PaymentsManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/financial/PaymentsManagement.jsx)
    - **Description**: Gateway integration credentials, settings, and checkout fees.
28. **Transaction Management**
    - **File Path**: [TransactionManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/financial/TransactionManagement.jsx)
    - **Description**: Master ledger of customer charges, refunds, and pay-outs.
29. **Franchise Commissions**
    - **File Path**: [FranchiseCommission.jsx](./Frontend/src/modules/Food/pages/superadmin/financial/FranchiseCommission.jsx)
    - **Description**: Commission rates calculation and auto-split configurations.
30. **Revenue Reports**
    - **File Path**: [RevenueReport.jsx](./Frontend/src/modules/Food/pages/superadmin/financial/RevenueReport.jsx)
    - **Description**: Exportable sales records, cost sheets, and profit metrics.

---

## 📂 Group 7: Analytics & System Customization
31. **Sales Analytics**
    - **File Path**: [SalesAnalytics.jsx](./Frontend/src/modules/Food/pages/superadmin/analytics/SalesAnalytics.jsx)
    - **Description**: Multi-dimensional graphs tracking store sales over time.
32. **Customer Analytics**
    - **File Path**: [CustomerAnalytics.jsx](./Frontend/src/modules/Food/pages/superadmin/analytics/CustomerAnalytics.jsx)
    - **Description**: Retention rates, acquisition costs, and cohorts data.
33. **Operational Analytics**
    - **File Path**: [OperationalAnalytics.jsx](./Frontend/src/modules/Food/pages/superadmin/analytics/OperationalAnalytics.jsx)
    - **Description**: Order processing latency, rider timings, and cancellation logs.
34. **App Settings**
    - **File Path**: [AppSettings.jsx](./Frontend/src/modules/Food/pages/superadmin/settings/AppSettings.jsx)
    - **Description**: Core system configs, toggle flags, and brand preferences.
35. **Tax Settings**
    - **File Path**: [TaxSettings.jsx](./Frontend/src/modules/Food/pages/superadmin/settings/TaxSettings.jsx)
    - **Description**: GST rates, product tax-slabs, and invoice templates.

---

## 📂 Group 8: Content Management & Support
36. **SEO Settings**
    - **File Path**: [SeoSettings.jsx](./Frontend/src/modules/Food/pages/superadmin/settings/SeoSettings.jsx)
    - **Description**: Metadata settings, sitemap toggles, and index parameters.
37. **Content Management (CMS)**
    - **File Path**: [ContentManagement.jsx](./Frontend/src/modules/Food/pages/superadmin/settings/ContentManagement.jsx)
    - **Description**: Editor for legal pages, Privacy Policy, Terms of Service, and FAQs.
38. **Support Tickets**
    - **File Path**: [SupportTicket.jsx](./Frontend/src/modules/Food/pages/superadmin/support/SupportTicket.jsx)
    - **Description**: Chat dashboard to address customer disputes and store queries.
39. **Feedback & Reviews**
    - **File Path**: [FeedbackAndReview.jsx](./Frontend/src/modules/Food/pages/superadmin/support/FeedbackAndReview.jsx)
    - **Description**: Moderation panel for user-submitted food ratings and remarks.
