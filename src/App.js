import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import AppContext from './AppContext';
import "./App.css";
import Login from "./components/Login";
import Home from './components/Home';
import { logout } from "./services/loginService";


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

  componentDidMount() {
    const { history } = this.props;
    const { _id, role, tenant } = this.state.currentUser;
    if(!_id) {
      history.push("/login")
    } else {
      if(["Admin", "Tecnician"].includes(role)) {
            history.push("/home/tenants");
      } else {
        history.push(`/home/tickets/${tenant._id}`)
      }
    }
  }

  render() {
    const { state, setUser, removeUser } = this;
    return (
      // Manda los valores al AppContext para que estén disponibles en todos lados
      <AppContext.Provider value={{ state, setUser, removeUser }}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home/*" component={Home} />
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;