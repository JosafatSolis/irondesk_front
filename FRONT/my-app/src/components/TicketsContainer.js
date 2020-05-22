import React, { Component } from 'react';
import TicketCard from './TicketCard';


export default class TicketsContainer extends Component {
    render() {
        return(
            <section className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-child-width-1-3">
                        <TicketCard code="BT" name="Bimbo Toluca" />
                        <TicketCard code="TR" name="Tia Rosa" />
                        <TicketCard code="SM" name="Suandy" />
                    </div>
                
                </div>
            </section>
        )
    }
}