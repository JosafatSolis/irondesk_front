import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import AppContext from './AppContext';
import "./App.css";
import Login from "./components/Login";
import Home from './components/Home';


class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  };

  setUser = (user) => {
    console.log("SetUser", user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setState({ currentUser: user });
  };

  componentDidMount() {
    const { history } = this.props;
    const { _id, role, tenant } = this.state.currentUser;
    if(!_id) {
      history.push("/login")
    } else {
      if(["Admin", "Tecnician"].includes(role)) {
            history.push("/home/tenants");
      } else {
        console.log("Por aquí");
        history.push(`home/tickets/${tenant._id}`)
      }
    }
  }

  render() {
    const { state, setUser } = this;
    return (
      // Manda los valores al AppContext para que estén disponibles en todos lados
      <AppContext.Provider value={{ state, setUser }}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home/*" component={Home} />
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;