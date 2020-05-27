import React, { Component } from "react";

export default class TicketCard extends Component {
  render() {
    return (
      <div className="uk-card-body">
        {/* Encabezados con Rol, Tenant e íconos */}
        <div className="uk-grid uk-flex-around">
          <div>
            <div className="uk-label">{this.props.role}</div>
          </div>
          <div>
            <ul className="uk-iconnav">
              <li>
                <a href="#" uk-icon="icon: file-edit"></a>
              </li>
              <li>
                <a href="#" uk-icon="icon: trash"></a>
              </li>
            </ul>
          </div>
          <div>
            <div className="uk-label">{this.props.tenantCode}</div>
          </div>
        </div>
        {/* Nombre y Apellido */}
        <div className="uk-text-large uk-text-bold uk-margin">
          <span uk-icon="user"></span>
          
          {`${this.props.name.toUpperCase()} ${this.props.lastName.toUpperCase()}`}
        </div>
        {/* Labels Email .... X */}
        <div
          className="uk-flex uk-flex-center uk-flex-column uk-child-width-1-1"
          style={{ alignItems: "start", justifyContent: "flex-end" }}
        >
          <div style={{ display: "flex", textAlign: "initial" }}>
            <div className="uk-width-expand" uk-leader="">
              <span uk-icon="mail"></span>
              <span className="uk-margin">Email </span>
            </div>
            <div className="uk-margin-small-left">{this.props.email}</div>
            <hr />
          </div>
        </div>
        {/* Labels Phone .... X */}
        <div
          className="uk-flex uk-flex-center uk-flex-column uk-child-width-1-1"
          style={{ alignItems: "start", justifyContent: "flex-end" }}
        >
          <div style={{ display: "flex", textAlign: "initial" }}>
            <div className="uk-width-expand" uk-leader="">
              <span uk-icon="phone"></span>
              <span className="uk-margin">Phone </span>
            </div>
            <div className="uk-margin-small-left">{this.props.phone}</div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
