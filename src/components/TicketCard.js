import React, { Component } from "react";
import luxon, {DateTime} from 'luxon';

export default class TicketCard extends Component {
  render() {
    return (
      <div className="uk-card-body">
        <div className="uk-grid uk-flex-around">
          <div>
            <div
              className={
                this.props.state === "Open"
                  ? "uk-label-danger"
                  : this.props.state === "ClosingRequested"
                  ? "uk-label-warning"
                  : "uk-label-success"
              }
            >
              {this.props.state === "Open"
                ? "Abierto"
                : this.props.state === "ClosingRequested"
                ? "Validar"
                : "Cerrado"}
            </div>
          </div>
          <div>
            <ul className="uk-iconnav">
              <li>
                <a href="#" uk-icon="icon: file-edit"></a>
              </li>
              <li>
                <a href="#" uk-icon="icon: trash"></a>
              </li>
            </ul>
          </div>
          <div>
            <div class="uk-label">{this.props.tenantCode}</div>
          </div>
        </div>

        <div className="uk-heading-small">
          <span uk-icon="clock"></span> 10:32:05
        </div>
        <div
          className="uk-flex uk-flex-center uk-flex-column
        uk-child-width-1-1"
          style={{ alignItems: "start", justifyContent: "flex-end" }}
        >
          <div style={{ display: "flex", textAlign: "initial" }}>
            <div className="uk-width-expand" uk-leader="">
              <span uk-icon="users"></span>
              <span className="uk-margin">Asignado a</span>
            </div>
            <div className="uk-margin-small-left">{this.props.assignated}</div>
            <hr />
          </div>

          <div className="container-fluid" style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">
                <a className="uk-accordion-title">Descripción</a>
                <div className="uk-accordion-content">
                  <article class="uk-comment uk-comment-primary uk-margin">
                    <header
                      class="uk-comment-header uk-grid-medium uk-flex-middle"
                      uk-grid
                    >
                      <div class="uk-width-expand">
                        <h4 class="uk-comment-title uk-margin-remove">
                          <span uk-icon="user"></span>{" "}
                          <span>{this.props.user}</span>
                        </h4>
                        {/* 25/05/2020 6:03 p.m. */}
                        <span>25/05/2020 6:03 p.m.</span>
                      </div>
                    </header>
                    <div class="uk-comment-body uk-text-justify">
                      <p>
                        {this.props.description}
                      </p>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </div>
          <div className="container-fluid" style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">
                <a className="uk-accordion-title">Actividades</a>
                <div className="uk-accordion-content">
                  <div className="uk-overflow-auto uk-height-small uk-width-max uk-width-auto">
                    <table class="uk-table uk-table-striped" style={{}}>
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Actividades</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {this.props.activities.map(activity => (
                          <tr>
                          <td>15/05 18:14</td>
                          <td>
                            {activity.activity}
                          </td>
                        </tr>
                        ))} */}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <ul className="uk-iconnav uk-align-right">
                      <li className="uk-margin-small-top">
                        <a href="#" uk-icon="icon: plus-circle"></a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="uk-grid uk-flex-around">
            <div>
              <a className="uk-button uk-button-default">Validar</a>
            </div>
            <div>
              <a className="uk-button uk-button-default">Cerrar</a>
            </div>
          </div>
        </div>
      </div>
    );

    //     <table
    //     class="uk-table uk-table-hover uk-table-divider"

    //     >

    //     <tbody>

    //         <tr>
    //             <td>HORA DE APERTURA   </td>
    //             <td>10:22             </td>
    //         </tr>

    //         <tr>
    //             <td>HORA DE CIERRE   </td>
    //             <td>    PENDIENTE       </td>
    //         </tr>

    //         <tr>
    //             <td>TENANT          </td>
    //             <td>BT              </td>
    //         </tr>

    //         <tr>
    //             <td>REPORTA         </td>
    //             <td>Juan Perez      </td>
    //         </tr>

    //         <tr>
    //             <td>ASIGNADO A       </td>
    //             <td> El deivid     </td>
    //         </tr>

    //         <tr>
    //             <td>DESCRIPCIÓN        </td>
    //             <td>
    //                 Dejo de funcionar el equipo BLABLABALABLABALABLABALBALABALAKSJDKLSAJDASHDIUFGIAUFBCAICBAIKCBAKJCBAICJBAIKCBAIBLDNCLJDCHNLJDKCHNDJLSKC
    //             </td>
    //         </tr>

    //         <tr>
    //             <td>ACTIVIDADES        </td>
    //             <td

    //             className="uk-column-1-1 container-fluid"
    //             >
    //                 <div>ACTIVIDAD 1 </div>
    //                 <div>ACTIVIDAD 2 </div>
    //                 <div>ACTIVIDAD 3 </div>
    //                 <div>ACTIVIDAD 4 </div>

    //             </td>
    //         </tr>

    //     </tbody>
    // </table>

    //             </div>
    //         )
  }
}
