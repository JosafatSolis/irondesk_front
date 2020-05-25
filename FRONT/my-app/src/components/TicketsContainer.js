import React, { Component } from "react";
import TicketCard from "./TicketCard";
import NavBar from "./Navbar";

export default class TicketsContainer extends Component {
  render() {
   

    return (

      <div className="container-fluid">       
        
      <div >
        <NavBar />
      </div>
      
      <section className="uk-section">
    {/* //     <div className="uk-container">
    //       <div className="uk-grid uk-child-width-1-3">
    //         <span className="uk-card uk-card-default uk-card-default">Algo</span>
    //         <span>Algo</span>
    //         <span>Algo</span>
    //       </div>
    //     </div> */}

{/*SECCION PARA FILTRAR TICKETS */}
        <div uk-filter="target: .js-filter">
          <ul className="uk-subnav uk-subnav-pill">

            <li  uk-filter-control="" className="uk-active">
              <button className="uk-button uk-text-emphasis">
                <strong>    Todos</strong>   </button>
            </li>

            <li uk-filter-control="[status='Abierto']" >
              <button className="uk-button uk-text-danger">   <strong>abiertos</strong>    </button>
            </li>

            <li uk-filter-control="[status='Cerrado']">
              <button className="uk-button uk-text-success">    <strong>cerrados</strong>    </button>
            </li>

          </ul>


          <div className="uk-container">
            <div className="js-filter uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
                 uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false" >
              
            
{/*STATUS/STATE --> UN POCO CONFUSO ABIERTO/CERRADO   */}
{/*state = Open/ClosingRequested/Cerrado */}
{/*status = Abierto/Cerrado */}
 {/*Solución temporal QUE DATE, la ponga el usuario al registrar FORM */}
              <div 
                  status="Abierto"
                  className="uk-card uk-card-default uk-margin-bottom" >

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
              </div>
            

              <div status="Abierto" 
                   className="uk-card uk-card-default uk-margin-bottom">

                <TicketCard 
                code="KO" 
                name="Coca-cola" 
                state="Open" 
                tenantCode="LI" 
                assignated="Rodrigo"
                user="Eduardo Palomo" 
                reportDate="12/12/2012" 
                description="Hubo un problema al actualizar el equipo."  
                />
              </div>


              <div status="Abierto" 
                   className="uk-card uk-card-default uk-margin-bottom">

                <TicketCard 
                code="PE" 
                name="Pepsi" 
                state="ClosingRequested" 
                tenantCode="PE" 
                assignated="Marco"
                user="Deivid" 
                reportDate="10/10/2032" 
                description="no jala no furula."  
                />
              </div>


              <div status="Cerrado" 
                   className="uk-card uk-card-default uk-margin-bottom">

                <TicketCard 
                code="PE" 
                name="Pepsi" 
                state="Cerrado" 
                tenantCode="PE" 
                assignated="Marco"
                user="Deivid" 
                reportDate="10/10/2032" 
                description="no jala no furula."  
                />
              </div>
             
            
           
            </div>
          </div>
        </div>
      </section>
      </div>

    );
  }
}