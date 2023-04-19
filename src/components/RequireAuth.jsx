import React from "react";
import { useAuth } from "../store/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user, profile } = useAuth();
  const loction = useLocation();
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: loction }} replace />
  );
};

export default RequireAuth;
