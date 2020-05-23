import React, { Component } from "react";
import TicketCard from "./TicketCard";

export default class TicketsContainer extends Component {
  render() {
    return (
      <section className="uk-section">
        {/* <div className="uk-container">
                    <div className="uk-grid uk-child-width-1-3">
                        <TicketCard code="BT" name="Bimbo Toluca" />
                        <TicketCard code="TR" name="Tia Rosa" />
                       
                    </div>
                
                </div> */}

        <div uk-filter="target: .js-filter">
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" uk-filter-control="">
              <a href="#">Todos</a>
            </li>
            <li uk-filter-control="[status='Abierto']">
              <a href="#">Abiertos</a>
            </li>
            <li uk-filter-control="[status='Cerrado']">
              <a href="#">Cerrados</a>
            </li>
          </ul>

          <ul
            className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
            uk-grid
          >
            <li status="Abierto">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Abierto">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Abierto">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Abierto">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Cerrado">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Cerrado">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Abierto">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Cerrado">
            <TicketCard code="BT" name="Bimbo Toluca" />
            </li>
            <li status="Abierto">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li status="Abierto">
              <div className="uk-card uk-card-default uk-card-body">Item</div>
            </li>
            <li status="Abierto">
              <div className="uk-card uk-card-primary uk-card-body">Item</div>
            </li>
            <li status="Cerrado">
              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
