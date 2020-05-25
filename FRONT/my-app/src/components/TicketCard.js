import React, { Component } from "react";


export default class TicketCard extends Component {
  render() {
    return (
    
       
<div>

      <div className="uk-card-body ">
        <div className="uk-grid uk-flex-around">
          <div>

            <div
              className={
                this.props.state === "Open" ? "uk-label-danger" : 
                this.props.state === "ClosingRequested" ? "uk-label-warning" : "uk-label-success"
              }>
            
              {this.props.state === "Open" ? "Abierto": 
              this.props.state === "ClosingRequested" ? "Validar" : "Cerrado"}
            </div>

        </div>

      <div>
          <ul className="uk-iconnav">
              <li>  <button href="#" uk-icon="icon: file-edit">  </button>      </li>
              <li>  <button href="#" uk-icon="icon: trash">      </button>      </li>
          </ul>
      </div>

          <div>
            <div className="uk-label">
                {this.props.tenantCode}
            </div>
          </div>

        </div>


        <div className="uk-heading-small">  <span uk-icon="clock"></span>
            {this.props.reportDate}
        </div>

        <div
          className="uk-flex uk-flex-center uk-flex-column uk-child-width-1-1"
          style={{ alignItems: "start", justifyContent: "flex-end" }}>

          <div style={{ display: "flex", textAlign: "initial" }}>
                <div className="uk-width-expand" uk-leader="">
                <span uk-icon="users"></span> 
                <span className="uk-margin"> Asignado a</span>
                </div>

                <div className="uk-margin-small-left">
                    {this.props.assignated}
                </div> <hr/>
          </div>

          <div className="container-fluid" 
               style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">
                <button 
                className="uk-accordion-title uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"> 
                Descripción
                </button>
                  <div className="uk-accordion-content">
                    <article className="uk-comment uk-comment-primary uk-margin">
                    <header
                      className="uk-comment-header uk-grid-medium uk-flex-middle">
                      <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">
                          <span uk-icon="user"></span>
                          <span>{this.props.user}</span>
                        </h4>
                        {/* 25/05/2020 6:03 p.m. */}
                        <span>25/05/2020 6:03 p.m.</span>
                      </div>
                    </header>
                    <div className="uk-comment-body uk-text-justify">

                      <p>{this.props.description}</p>

                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </div>

          <div className="container-fluid" style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">

                <button className="uk-accordion-title uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">Actividades</button>
                <div className="uk-accordion-content">
                  <div className="uk-overflow-auto uk-height-small uk-width-max uk-width-auto">

                    <table className="uk-table uk-table-striped" style={{}}>
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Actividades</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <th>{/* aqui va date */}          </th>
                          <th>{/* aqui va activity */}      </th>
                        </tr>
                      </tbody>

                    </table>
                  </div>

                  <div>
                    <ul className="uk-iconnav uk-align-right">
                      <li className="uk-margin-small-top"> 
                         <button uk-icon="icon: plus-circle"></button> {/*Insertar evento para crear nueva fecha */}
                      </li>
                    </ul>
                  </div>

                </div>
              </li>
            </ul>
          </div>

          <div className="uk-grid uk-flex-around">
            <div className="uk-margin-small"> 
                <button className="uk-button uk-button-default">Validar</button>
            </div>

            <div>
              <button className="uk-button uk-button-default">Cerrar</button>
            </div>

          </div>
        </div>
      </div>
      </div>
    );

  }
}