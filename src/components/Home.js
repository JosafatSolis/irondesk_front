import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Navbar";
import TenantsContainer from "./TenantsContainer";
import TicketsContainer from "./TicketsContainer";
import AppContext from "../AppContext";

export default class Home extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/home/tenants" component={TenantsContainer} />
          <Route exact path="/home/tickets" component={TicketsContainer} />
          <Route
            exact
            path="/home/tickets/:tenantId"
            component={TicketsContainer}
          />
        </Switch>
      </div>
    );
  }
}
