import React, { Component } from "react";
import TicketCard from "./TicketCard";

export default class TicketsContainer extends Component {
  render() {
    return (
      <section className="uk-section">

        <div uk-filter="target: .js-filter">
          <ul className="uk-subnav uk-subnav-pill">
            <li uk-filter-control="" className="uk-active">   <button className="uk-button uk-text-emphasis uk-text-primary"> <strong>TODOS</strong>   </button>  </li>
            <li uk-filter-control="[status='Abierto']">       <button className="uk-button uk-text-emphasis uk-text-danger">  <strong>ABIERTOS</strong></button>  </li>
            <li uk-filter-control="[status='Cerrado']">       <button className="uk-button uk-text-emphasis uk-text-success"> <strong>CERRADOS</strong></button>  </li>
          </ul>

          <div className="uk-container">

            <div
              className="js-filter uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
              uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false" >
{/*status = Abierto/Cerrado */}
{/*state = Open/ClosingRequested/Cerrado */}
{/*aqui va el arrat de ticket cards */}

      
                <div  status="Abierto"
                      className="uk-card uk-card-default uk-margin-bottom">

                    <TicketCard
                      key="1"
                      state="Open"
                      tenantCode="HZ"
                      assignated="Rául"
                      user="Pedro Suárez"
                      reportDate={new Date(2020, 4, 24, 10, 15)}
                      description="Hubo un problema al iniciar el equipo porque no encendió correctamente a la hora que se ocupaba."
                      activities={[
                        {
                          key: "1",
                          date: new Date(),
                          activity:
                            "Se revisó el equipo para ver que estuviera conectado correctamente y encendiera, no encendió.",
                        },
                      ]}
                    />
                </div>

                <div  status="Cerrado"
                      className="uk-card uk-card-default uk-margin-bottom">

                    <TicketCard
                      key="2"
                      state="Closed"
                      tenantCode="KO"
                      assignated="RO"
                      user="Rod Amador"
                      reportDate={new Date(2020, 4, 25, 10, 15)}
                      description="Hubo un problema al iniciar el equipo porque no encendió correctamente a la hora que se ocupaba."
                      activities={[
                        {
                          key: "2",
                          date: new Date(),
                          activity:
                            "Se revisó el equipo para ver que estuviera conectado correctamente y encendiera, no encendió.",
                        },
                      ]}
                    />
                </div>


                <div  status="Abierto"
                      className="uk-card uk-card-default uk-margin-bottom">

                    <TicketCard
                      key="2"
                      state="ClosingRequested"
                      tenantCode="KO"
                      assignated="RO"
                      user="Rod Amador"
                      reportDate={new Date(2020, 4, 25, 10, 15)}
                      description="Hubo un problema al iniciar el equipo porque no encendió correctamente a la hora que se ocupaba."
                      activities={[
                        {
                          key: "2",
                          date: new Date(),
                          activity:
                            "Se revisó el equipo para ver que estuviera conectado correctamente y encendiera, no encendió.",
                        },
                      ]}
                    />
                </div>














              
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}
