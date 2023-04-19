import React from "react";
import { useAuth } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { user, profile } = useAuth();
  return user && profile ? (
    <Navigate to="/profile" replace />
  ) : user && !profile ? (
    <Navigate to="/edit" />
  ) : (
    children
  );
};

export default AuthRoute;
