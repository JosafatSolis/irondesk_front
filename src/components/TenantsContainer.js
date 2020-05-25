import React, { Component } from 'react';
import TenantCard from './TenantCard';


export default class TenantsContainer extends Component {
    render() {
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-child-width-1-3">
                        <TenantCard code="BT" name="Bimbo Toluca" />
                        <TenantCard code="TR" name="Tia Rosa" />
                        <TenantCard code="SM" name="Suandy" />
                    </div>
                
                </div>
            </section>
        )
    }
}