import React from "react";
import { Navigate } from "react-router-dom";

const GuardedRoute = ({ isAuthenticated, redirectTo = "/signin", element }) => {
    console.log(isAuthenticated,localStorage.getItem("AuthToken")!=null)
  return isAuthenticated ? element : <Navigate to={redirectTo} replace />;
};

export default GuardedRoute;
