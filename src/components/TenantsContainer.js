import React, { Component } from 'react';
import TenantCard from './TenantCard';


export default class TenantsContainer extends Component {
    render() {
        return(
            <section className="uk-section">
               <div className="uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.tenants.map( (tenant) => (

                    <TenantCard
                        code={tenant.code}
                        name={tenant.name}
                        tickets={tenant.tickets}
                    />

                    ))}         

                </div>
            </section>
        )
    }
}