import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TenantCard extends Component {
  render() {
    return (
      <article
       
        className="
        uk-card 
        uk-card-default
        uk-flex
        uk-flex-around
        uk-margin
        uk-margin-top "
      >

        <Link to={`/home/tickets/${this.props.tenantId}`}>
          <h4 className="uk-card-title uk-margin-top">
            <strong>{this.props.code} - {this.props.name}</strong>
          </h4>
          <div className="uk-card-body"> Ver Tickets </div>
        </Link>

      </article>
    );
  }
}
