import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login";
import FormikForm from "./components/FormikForm";
import NavBar from "./components/Navbar";
import TenantsContainer from "./components/TenantsContainer";
import TicketsContainer from "./components/TicketsContainer";
import UsersContainer from "./components/UsersContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FormikForm /> */}
        <NavBar />
        {/* <TenantsContainer /> */}
        {/* <TicketsContainer /> */}
        <TenantsContainer tenants = {[
          {code: "KO", name: "Rod", tickets: "5"},
          {code: "HZ", name: "josaf", tickets: "3"}

        ]}
          
        
        />
      </div>
    );
  }
}

export default App;
