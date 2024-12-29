import React from "react";
import { Navigate } from "react-router-dom";

const GuardedRoute = ({
  hasToBeAuthenticated,
  redirectTo = "/signin",
  element,
}) => {
  console.log(
    "hasToBeAuthenticated==>",hasToBeAuthenticated,
    localStorage.getItem("AuthToken") != null,
    "*************",
    !localStorage.getItem('AuthToken'),
    element.type.name,
    "redirecturi==>",
    redirectTo
  );
  /*
  if (hasToBeAuthenticated) {
    if (localStorage.getItem("AuthToken")!=null) {
      return element;
    }else{
      return <Navigate to={redirectTo} replace />;
    }
  }else{
    if(localStorage.getItem("AuthToken")!=null){
      return <Navigate to={redirectTo} replace />
    }else{
      return element;
    }
  }
  */
  const authToken = localStorage.getItem("AuthToken");

  if (hasToBeAuthenticated === Boolean(authToken)) {
    return element;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};

export default GuardedRoute;
