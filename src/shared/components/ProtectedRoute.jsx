import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

/**
 * ProtectedRoute component to guard routes based on authentication and roles.
 * @param {object} props 
 * @param {React.ReactNode} props.children 
 * @param {string} [props.requiredRole] 
 * @returns {React.ReactNode}
 */
const ProtectedRoute = ({ children, requiredRole = "admin" }) => {
  const { user, isHydrated, accessToken } = useAuthStore();

  // Show nothing until hydration is complete to prevent redirect flashes
  if (!isHydrated) return null;

  // If no user or no token, redirect to login
  if (!user || !accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  // If role is required and user doesn't have it, redirect to forbidden
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default ProtectedRoute;
