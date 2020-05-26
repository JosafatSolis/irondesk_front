import React, { Component } from 'react';
import TenantCard from './TenantCard';
import ModalButtonTenant from './Modals_Forms/ModalButtonTenant';



export default class TenantsContainer extends Component {
    render() {
        return(
            <section className="uk-section">
                <div> <ModalButtonTenant/>  </div>

               <div className="uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.tenants.map( (tenant) => (

                    <TenantCard
                        name={tenant.name}
                        code={tenant.code}
                        tickets={tenant.tickets}
                    />

                    ))}         

                </div>
            </section>
        )
    }
}