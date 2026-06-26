import { Navigate, useLocation } from "react-router-dom";
import { isModuleAuthenticated } from "@food/utils/auth";

/**
 * Role-based Protected Route Component
 * Only allows access if user is authenticated for the specific module
 */
export default function ProtectedRoute({ children, requiredRole, loginPath = "/user/auth/login" }) {
  const location = useLocation();

  // If no role required, allow access
  if (!requiredRole) {
    return children;
  }

  const isAuthenticated = isModuleAuthenticated(requiredRole);

  // If not authenticated for this module, redirect to login
  if (!isAuthenticated) {
    return <Navigate to={loginPath} state={{ from: location.pathname }} replace />;
  }

  // If user has not completed profile onboarding, force redirect to creation page
  if (requiredRole === "user" && !location.pathname.includes("/profile/create")) {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user_user") || "{}");
      if (storedUser && !storedUser.profileCompleted) {
        return <Navigate to="/user/profile/create" replace />;
      }
    } catch (e) {
      console.error("[ProtectedRoute] Error reading profile completion", e);
    }
  }

  return children;
}
