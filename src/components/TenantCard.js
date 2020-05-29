import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TenantCard extends Component {
  render() {
    return (
      <div>
        
      <div  className=" uk-card-default uk-margin-left" 
            style={{border: 'solid 1px #f07e1c'}}>

        <Link to={`/home/tickets/${this.props.tenantId}`}>

          <div className="uk-card-title uk-margin-top">
           <strong> {this.props.code} </strong>
            <br/> - <br/>
            <strong> {this.props.name} </strong>
          </div>

          <div className="uk-card-body">
            <div> Ver Tickets </div>
          </div>
        </Link>
      </div>
      </div>
    );
  }
}
