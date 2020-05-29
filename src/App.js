import Routes from "./Routes";

import React, { Component } from "react";
import AppContext from './AppContext';
import "./App.css";
import { logout } from "./services/loginService";
import { withRouter } from "react-router";

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  };

  setUser = (user) => {
    console.log("SetUser", user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setState({ currentUser: user });
  };

  removeUser = () => {
    localStorage.removeItem("currentUser");
    this.setState({ currentUser: {} });
    logout();
    const { history } = this.props;
    history.push("/login");
  }



  render() {
    const { state, setUser, removeUser } = this;
    return (
      
      <AppContext.Provider value ={{...state,setUser,removeUser}} >
        <Routes/>

      </AppContext.Provider>
    );
  }
}



const AppWithRouter = withRouter(App);

export default AppWithRouter;