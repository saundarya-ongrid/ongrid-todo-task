import React from "react";
import { Route, Switch } from "react-router";
import { ActionComponent } from "../../components/ActionComponent";
import OutputComponent from "../../components/OutputComponent";

const routes = (
  <Switch>
    <Route exact path="/" component={ActionComponent} />
    <Route path="/output" component={OutputComponent} />
  </Switch>
);

export default routes;
