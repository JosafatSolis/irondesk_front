import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import ModalButtonTenant from "./Modals_Forms/ModalButtonTenant";
import ModalButtonTicket from "./Modals_Forms/ModalButtonTicket";

export default class NavBar extends Component {
  static contextType = AppContext;

  state = {
    currentPos: "",
    homePath: "/home",
  };

  updateState = () => {
    // Ajusta homePath
    const { currentUser } = this.context;
    console.log("currentUser", currentUser);
    if (["Admin", "Tecnician"].includes(currentUser.role)) {
      this.setState({ homePath: "/home/tenants" });
    } else {
      this.setState({ homePath: `/home/tickets/${currentUser.tenant._id}` });
    }
    // Ajusta currentPos
    const currentPath = window.location.pathname;
    const lbl =
      currentPath === this.state.homePath
        ? ""
        : currentPath.startsWith("/home/tenants")
        ? ""
        : "TICKETS";
    this.setState({ currentPos: lbl });
  };

  componentDidMount() {
    this.updateState();
  }

  render() {
    console.log("location:", this.state.currentPos);
    const { removeUser } = this.context;
    return (
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-margin-right uk-margin-left">
              <Link onClick={() => this.updateState()} to={this.state.homePath}>
                Home
              </Link>{" "}
            </li>

            <li uk-accordion="multiple: true" className="uk-align-center">
              <div className="uk-closed">
                <Link to="#" className="uk-accordion-title uk-text-small">
                  {" "}
                  TENANTS
                </Link>
                <div className="uk-accordion-content">
                  <ul>
                    {" "}
                    {/*Hay que poner un evento donde al hacer clic se agregue el nombre del tenant del lado derecho*/}
                    <li>
                      {" "}
                      <Link to="/id:Bimbo" className="uk-link-muted">
                        Bimbo
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/id:Coca" className="uk-link-muted">
                        Coca
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/id:Pepsi" className="uk-link-muted">
                        Pepsi
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* POS ACTUAL */}
            <li className=" ">
              <Link to="#" onClick={() => this.updateState()}>
                {this.state.currentPos}
              </Link>{" "}
            </li>
            {/* NUEVO TENANT */}
            <li className=" ">
              <ModalButtonTenant className="uk-button-mute" />
            </li>
            {/* NUEVO TICKET */}
            <li className=" ">
              <ModalButtonTicket className="uk-button-mute" />
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="#" onClick={() => removeUser()}>
                Logout
              </Link>{" "}
              {/* Al hacer clic post para logout */}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
