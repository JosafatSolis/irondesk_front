import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TenantCard extends Component {
  render() {
    return (
      <div href="" className="uk-card uk-card-default">
        <Link to={`/home/tickets/${this.props.tenantId}`}>
          <div className="uk-card-title">
            {this.props.code} - {this.props.name}
          </div>

          <div className="uk-card-body">
            <div> Ver Tickets </div>
          </div>
        </Link>
      </div>
    );
  }
}
