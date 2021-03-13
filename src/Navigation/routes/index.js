import React from "react";
import { Switch } from "react-router";
import { Dashboard } from "../../screens/private/Dashboard";
import { Todos } from "../../screens/private/Todos";
import { Home } from "../../screens/public/Home";
import { Login } from "../../screens/public/Login";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";


// import { ActionComponent } from "../../components/ActionComponent";
// import OutputComponent from "../../components/OutputComponent";

const routes = (
  <Switch>
    {/* <Route exact path="/" component={Login} />  */}

    {/* <Route exact path="/" component={ActionComponent} />
    <Route path="/output" component={OutputComponent} /> */}

    <PublicRoutes path="/" component={Home} exact={true} />
    <PublicRoutes path="/login" component={Login} exact={true} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/todos" component={Todos} />
  </Switch>
);

export default routes;
