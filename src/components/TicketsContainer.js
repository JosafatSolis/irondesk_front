import React, { Component } from "react";
import TicketCard from "./TicketCard";
import { getTickets, getTicketsByTenantId } from "../services/ticketsService";

export default class TicketsContainer extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    // Revisa si es de 1 tenant en particular
    const { tenantId } = this.props.match.params;
    console.log("Params:", this.props.match.params);
    console.log("Tenant: ", tenantId);
    // Si es de un tenant, recupera sólo de ese tenant
    if (tenantId) {
      getTicketsByTenantId(tenantId)
        .then((resp) => {
          const { data: tickets } = resp;
          console.log("Tickets: ", tickets);
          this.setState({ tickets });
        })
        .catch((reason) => console.log("Error: ", reason));
    } else {
      // Si no tiene un tenant en particular, recupera de todos
      getTickets().then((tickets) => {
        this.setState({ tickets }).catch((reason) =>
          console.log("Error: ", reason)
        );
      });
    }
  }

  render() {
    return (
      <section className="uk-section">
        <div uk-filter="target: .js-filter">
          {/* Filter Controls */}
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" uk-filter-control="">
              <a href="#">Todos</a>
            </li>
            <li uk-filter-control="[status='Open']">
              <a href="#">Abiertos</a>
            </li>
            <li uk-filter-control="[status='ClosingRequested']">
              <a href="#">Validar</a>
            </li>
            <li uk-filter-control="[status='Closed']">
              <a href="#">Cerrados</a>
            </li>
          </ul>
          {/* Layout items */}
          <div
            className="js-filter uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
          >
            {Array.isArray(this.state.tickets) && this.state.tickets.length
              ? this.state.tickets.map((ticket) => {
                  console.log("map...");
                  return (
                    <div
                      status={ticket.status}
                      className="uk-card uk-card-default uk-margin-bottom"
                    >
                      <TicketCard
                        key={ticket.id}
                        status={ticket.status}
                        tenantCode={ticket.tenantCode}
                        tecnicianName={ticket.tecnicianName}
                        user={ticket.clientUserFullName}
                        reportDate={ticket.reportDate}
                        description={ticket.issueDescription}
                        activities={ticket.activities}
                        internalNotes={ticket.internalNotes}
                        closedDate={ticket.closedDate}
                        clientComments={ticket.clientComments}
                      />
                    </div>
                  );
                })
              : 
              // null
                console.log("VACIO")
                }
          </div>
        </div>
      </section>
    );
  }
}
