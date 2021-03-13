import React from "react";
import { Switch } from "react-router";
import { Dashboard } from "../../screens/private/Dashboard";
import { Todos } from "../../screens/private/Todos";
import { Home } from "../../screens/public/Home";
import { Login } from "../../screens/public/Login";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

const routes = (
  <Switch>
    <PublicRoutes path="/" component={Home} exact={true} />
    <PublicRoutes path="/login" component={Login} exact={true} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/todos" component={Todos} />
  </Switch>
);

export default routes;
