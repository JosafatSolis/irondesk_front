import React, { Component } from "react";
import TenantCard from "./TenantCard";
import { getTenants } from "../services/tenantService";

export default class TenantsContainer extends Component {
  state = {tenants: []  };

  componentDidMount() {
    // Si no tiene un tenant en particular, recupera de todos
    getTenants()
      .then((resp) => {
        const { data: tenants } = resp;
        this.setState({ tenants });
      })
      .catch((reason) => console.log("Error: ", reason));
  }

  render() {
    return (

        
        <section className="
          uk-margin-left
          uk-margin-right
         
          uk-grid
        
          uk-flex-wrap-around
          
          uk-child-width-1-1 
          uk-child-width-1-2@s 
          uk-child-width-1-3@m">
          
          {this.state.tenants.map((tenant) => { return (
              <TenantCard
                tenantId={tenant._id}
                name={tenant.name}
                code={tenant.code}
                key={tenant._id}
              />  )
          } )}
        </section>
       
    );
  }
}
