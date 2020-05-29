import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import FormikForm from "./FormikForm";
import NavBar from "./Navbar";
import TenantsContainer from "./TenantsContainer";
import TicketsContainer from "./TicketsContainer";
import UsersContainer from "./UsersContainer";

import AppContext from "../AppContext";

export default class Home extends Component {
  static contextType = AppContext;

//   componentDidMount() {
//     const { history } = this.props;
//     const { _id, role, tenant } = this.context.currentUser;
//     if (!_id) {
//       history.push("/login");
//     } else {
//       if (["Admin", "Tecnician"].includes(role)) {
//         history.push("/home/tenants");
//       } else {
//         history.push(`/home/tickets/${tenant._id}`);
//       }
//     }
//   }

  render() {
    const users = [
      {
        id: "abc",
        email: "mario@mapps.com",
        role: "User",
        name: "Mario",
        lastName: "Terrazas",
        tenantCode: "TR",
        phone: "55 10 40 50 68",
      },
      {
        id: "bcd",
        email: "josa@mapps.com",
        role: "Admin",
        name: "Josafat",
        lastName: "Solis",
        tenantCode: "MAPPS",
        phone: "55 10 40 00 99",
      },
      {
        id: "bdc",
        email: "rod@mapps.com",
        role: "Admin",
        name: "Rodrigo",
        lastName: "Amador",
        tenantCode: "HZ",
        phone: "55 88 40 00 99",
      },
    ];
    return (
     
      <div className="App">
        <NavBar />
     
        <Switch>
          <Route exact path="/home/tenants" component={TenantsContainer} />
          <Route
            exact
            path="/home/users"
            component={(props) => <UsersContainer {...props} users={users} />}
          />
         
          <Route exact path="/home/tickets" component={TicketsContainer} />
          <Route
            exact
            path="/home/tickets/:tenantId"
            component={TicketsContainer}
          />
          <Route exact path="/home/tickets/new" component={FormikForm} />
        </Switch>
      </div>
    );
  }
}
