import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import AppContext from "./AppContext";
import Home from "./components/Home";
import Login from "./components/Login";
import ModalButtonUser from "./components/Modals_Forms/ModalButtonUser"
import ModalButtonTicket from "./components/Modals_Forms/ModalButtonTicket"
import ModalButtonTenant from "./components/Modals_Forms/ModalButtonTenant"

export default class App extends Component {
  // state = {
  //   currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  // };

  // setUser = (user) => {
  //   this.setState({ currentUser: user });
  // };

  // componentDidMount() {
  //   const { history } = this.props;
  //   const { id } = this.state.currentUser;
  //   if(!id) history.push("/login");
  //   history.push("/home");
  // }

  render() {
    // console.log(this.props);
    // const { state, setUser } = this;
    return (
      // Manda los valores al AppContext para que estén disponibles en todos lados
      // <AppContext.Provider value={{ state, setUser }}>
        // <Route exact path="/login" component={Login} />
        // <Route exact path="/*" component={Home} />
       <Login/>
      // </AppContext.Provider>
    );
  }
}
