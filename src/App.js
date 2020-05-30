import Routes from "./Routes";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import AppContext from "./AppContext";
import "./App.css";
import { logout } from "./services/loginService";
import {
  postNewTicket,
  patchTecnicianName,
  postNewActivity,
  patchTicketStatus,
} from "./services/ticketsService";

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
    lastUpdate: {},
  };

  setUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    this.setState({ currentUser: user });
  };

  removeUser = () => {
    localStorage.removeItem("currentUser");
    this.setState({ currentUser: {} });
    logout();
    const { history } = this.props;
    history.push("/");
  };

  createTicket = (issueDescription, tenantId) => {
    const { currentUser } = this.state;
    const { history } = this.props;
    // Armar el objeto del ticket
    const ticket = {
      status: "Open",
      tenant: tenantId,
      clientUser: currentUser._id,
      issueDescription: issueDescription,
      reportDate: new Date(),
    };
    // Crearlo con el service
    postNewTicket(ticket)
      .then((resp) => {
        this.setState({ lastUpdate: Date() });
        history.push("/");
      })
      .catch((reason) => console.log("Error: ", reason));
  };

  assignTecnician = (ticketId) => {
    const { currentUser } = this.state;
    const { history } = this.props;
    // Armar el objeto del ticket
    const ticket = {
      _id: ticketId,
      tecnicianUser: currentUser._id,
    };
    // Crearlo con el service
    patchTecnicianName(ticket)
      .then((resp) => history.push("/"))
      .catch((reason) => console.log("Error: ", reason));
  };

  addActivity = (ticketId, activity) => {
    const { history } = this.props;
    postNewActivity(ticketId, activity)
      .then((resp) => {
        history.push("/");;
      })
      .catch((reason) => console.log("Error: ", reason));
  };

  updateTicketStatus = (ticketId, status) => {
    const { history } = this.props;
    patchTicketStatus(ticketId, status)
      .then((resp) => {
        history.push("/");
      })
      .catch((reason) => console.log("Error: ", reason));
  };

  componentDidMount() {
    const { history } = this.props;
    const { _id, role, tenant } = this.state.currentUser;
    if (!_id) {
      history.push("/");
    } else {
      if (["Admin", "Tecnician"].includes(role)) {
        history.push("/home/tenants");
      } else {
        history.push(`/home/tickets/${tenant._id}`);
      }
    }
  }

  render() {
    const {
      state,
      setUser,
      removeUser,
      createTicket,
      assignTecnician,
      addActivity,
      updateTicketStatus,
    } = this;
    return (
      <AppContext.Provider
        value={{
          ...state,
          setUser,
          removeUser,
          createTicket,
          assignTecnician,
          addActivity,
          updateTicketStatus,
        }}
      >
        <Routes />
      </AppContext.Provider>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
