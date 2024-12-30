import React from "react";
import { Navigate } from "react-router-dom";

const GuardedRoute = ({hasToBeAuthenticated, redirectTo="/signin", element,})=>
{
  // console.log(!localStorage.getItem("AuthToken"), element.type.name, "redirecturi==>",redirectTo);

  const authToken = localStorage.getItem("AuthToken");

  if (hasToBeAuthenticated === Boolean(authToken)) {
    return element;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};

export default GuardedRoute;
