import React, { Component } from "react";
import TicketCard from "./TicketCard";

export default class TicketsContainer extends Component {
  render() {
   

    return (
       <section className="uk-section">
    {/* //     <div className="uk-container">
    //       <div className="uk-grid uk-child-width-1-3">
    //         <span className="uk-card uk-card-default uk-card-default">Algo</span>
    //         <span>Algo</span>
    //         <span>Algo</span>
    //       </div>
    //     </div> */}

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
          <div className="uk-container">
            <div className="js-filter uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
                 uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false" >
              
              <div>
                <div 
                  status="Abierto" 
                  className="uk-card uk-card-default uk-margin-bottom" >

                {/*Solución temporal DATE, la ponga el usuario al registrar FORM */}
                <TicketCard 
                  code="BT" 
                  name="Bimbo Toluca" 
                  state="Open" 
                  tenantCode="TR" 
                  assignated="Rául"
                  user="Pedro Suárez" 
                  reportDate={"05/05/2020"} 
                  description="Hubo un problema al iniciar el equipo porque no encendió correctamente a la hora que se ocupaba."
                  
                   
                 />
              </div></div>
              <div status="Abierto" className="uk-card uk-card-default uk-margin-bottom">
                {/*Solución temporal DATE, que lo cree el propio usuario al meter el formulario */}
                <TicketCard 
                code="KO" 
                name="Coca-cola" 
                state="Closed" 
                tenantCode="LI" 
                assignated="Rodrigo"
                user="Eduardo Palomo" 
                reportDate="12/12/2012" 
                description="Hubo un problema al actualizar el equipo."
                
                 
                />

              </div>
              <div status="Cerrado" className="uk-card uk-card-default uk-margin-bottom">
                <TicketCard code="BT" name="Bimbo Toluca"  state="ClosedRequested" />
              </div>
              <div status="ClosingRequested" className="uk-card uk-card-default uk-margin-bottom">
                <TicketCard code="BT" name="Bimbo Toluca" state="Open" />
              </div>
              <div status="Abierto" className="uk-card uk-card-default uk-margin-bottom">
                <TicketCard code="BT" name="Bimbo Toluca" />
              </div>
              <div status="Cerrado" className="uk-card uk-card-default uk-margin-bottom">
                <TicketCard code="BT" name="Bimbo Toluca" />
              </div>
              <div status="Abierto" className="uk-card uk-card-default uk-margin-bottom">
                <TicketCard code="BT" name="Bimbo Toluca" />
              </div>
           
            </div>
          </div>
        </div>


      </section>
    );
  }
}