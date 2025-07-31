import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Token yoksa login sayfasına yönlendir
    return <Navigate to="/login" replace />;
  }
 
  return children;
};

export default PrivateRoute;
