import Routes from "./Routes";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppContext from "./AppContext";
import "./App.css";
import { logout } from "./services/loginService";
import { postNewTicket, patchTecnicianName } from "./services/ticketsService";

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
    lastUpdate: {},
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
  };

  createTicket = (issueDescription) => {
    const { currentUser } = this.state;
    // Armar el objeto del ticket
    const ticket = {
      status: "Open",
      tenant: currentUser.tenant._id,
      clientUser: currentUser._id,
      issueDescription: issueDescription,
      reportDate: new Date(),
    };
    // Crearlo con el service
    postNewTicket(ticket)
      .then((resp) => this.setState({ lastUpdate: Date() }))
      .catch((reason) => console.log("Error: ", reason));
  };

  assignTecnician = (ticketId) => {
    const { currentUser } = this.state;
    // Armar el objeto del ticket
    const ticket = {
      _id: ticketId,
      tecnicianUser: currentUser._id,
    };
    // Crearlo con el service
    patchTecnicianName(ticket)
      .then((resp) => console.log(resp))
      .catch((reason) => console.log("Error: ", reason));
  };

  addActivity = (ticketId, newActivity) => {
    console.log(
      "TicketID, newAct, currentAct",
      ticketId,
      newActivity
    );
  };

  componentDidMount() {
    const { history } = this.props;
    const { _id, role, tenant } = this.state.currentUser;
    if (!_id) {
      history.push("/login");
    } else {
      if (["Admin", "Tecnician"].includes(role)) {
        history.push("/home/tenants");
      } else {
        history.push(`/home/tickets/${tenant._id}`);
      }
    }
  }

  render() {
    const { state, setUser, removeUser, createTicket, assignTecnician,addActivity } = this;
    return (
      <AppContext.Provider value ={{...state,setUser,removeUser, createTicket,
        assignTecnician,
        addActivity,}} >
        <Routes/>
      </AppContext.Provider>
    );
  }

}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
