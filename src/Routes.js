import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home/*" component={Home} />  
  </Switch>
);

export default Routes;