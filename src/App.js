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
        <UsersContainer users={[
          {id:"abc", email:"mario@mapps.com", role:"User", name: "Mario", lastName:"Terrazas", tenantCode:"TR", phone:"55 10 40 50 68" },
          {id:"bcd", email:"josa@mapps.com", role:"Admin", name: "Josafat", lastName:"Solis", tenantCode:"MAPPS", phone:"55 10 40 00 99" },
          {id:"bdc", email:"rod@mapps.com", role:"Admin", name: "Rodrigo", lastName:"Amador", tenantCode:"HZ", phone:"55 88 40 00 99" },
          ]} />
      </div>
    );
  }
}

export default App;
