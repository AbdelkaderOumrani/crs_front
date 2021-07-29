import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

const Home = () => <h1>Home Page</h1>;
export default function MainRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <AuthRoute path="/login" exact component={Login} />
          <AuthRoute path="/register" exact component={Register} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}
