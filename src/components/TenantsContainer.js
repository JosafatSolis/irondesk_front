import React, { Component } from "react";
import TenantCard from "./TenantCard";
import { getTenants } from "../services/tenantService";

export default class TenantsContainer extends Component {
  state = {tenants: [],};

   componentDidMount() {
    // Si no tiene un tenant en particular, recupera de todos
    getTenants()
      .then((resp) => {
        const { data: tenants } = resp;
        this.setState({ tenants });
        console.log("Tenants: ", tenants);
      })
      .catch((reason) => console.log("Error: ", reason));
  }

  render() {
    return (
      <section className="uk-section uk-background-primary">
        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
          {this.state.tenants.map((tenant) => {
            //   console.log(tenant);
              return (
            <TenantCard
              tenantId={tenant._id}
              name={tenant.name}
              code={tenant.code}
              key={tenant._id}  
            />
          )
          } )}
        </div>
      </section>
    );
  }
}
