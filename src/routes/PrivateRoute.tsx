import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = (props: RouteProps) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Redirect to="/login" /> : <Route {...props} />;
};

export default PrivateRoute;
