import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login";
import FormikForm from "./components/FormikForm";
import NavBar from "./components/Navbar";
import TenantsContainer from "./components/TenantsContainer";
import TicketsContainer from "./components/TicketsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FormikForm /> */}
        <NavBar />
        {/* <TenantsContainer /> */}
        <TicketsContainer />
      </div>
    );
  }
}

export default App;
