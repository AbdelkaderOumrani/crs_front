import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRoute = (props: RouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Redirect to="/" /> : <Route {...props} />;
};

export default AuthRoute;
