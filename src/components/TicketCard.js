import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import Timer from "./Timer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default class TicketCard extends Component {
static contextType = AppContext;

  render() {
    const { assignTecnician, addActivity } = this.context;
    return (
      <div className="uk-card-body">
        {/* Encabezado con badges e íconos */}
        <div className="uk-grid uk-flex-around">
          <div>
            <div
              className={
                this.props.status === "Open"
                  ? "uk-label-danger"
                  : this.props.status === "ClosingRequested"
                  ? "uk-label-warning"
                  : "uk-label-success"
              }
            >
              {this.props.status === "Open"
                ? "Abierto"
                : this.props.status === "ClosingRequested"
                ? "Validar"
                : "Cerrado"}
            </div>
          </div>
          <div>
            <ul className="uk-iconnav">
              <li>
                <button href="#" uk-icon="icon: file-edit"></button>
              </li>
              <li>
                <button href="#" uk-icon="icon: trash"></button>
              </li>
            </ul>
          </div>
          <div>
            <div className="uk-label">{this.props.tenantCode}</div>
          </div>
        </div>
        {/* Timer actualizado en tiempo real */}
        <Timer reportDate={this.props.reportDate} />
        {/* Labels Asignado a .... X */}
        <div
          className="uk-flex uk-flex-center uk-flex-column uk-child-width-1-1"
          style={{ alignItems: "start", justifyContent: "flex-end" }}
        >
          <div style={{ display: "flex", textAlign: "initial" }}>
            <div className="uk-width-expand" uk-leader="">
              <span uk-icon="users"></span>
              <span className="uk-margin">Asignado a</span>
            </div>
            <div className="uk-margin-small-left">
              {this.props.tecnicianName}
            </div>
            <hr />
          </div>
          {/* Descripción colapsable */}
          <div className="container-fluid" style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">
                <a className="uk-accordion-title">Descripción</a>
                <div className="uk-accordion-content">
                  <article className="uk-comment uk-comment-primary uk-margin">
                    <header className="uk-comment-header uk-grid-medium uk-flex-middle">
                      <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">
                          <span uk-icon="user"></span>{" "}
                          <span>{this.props.user}</span>
                        </h4>
                        <span>
                          {dayjs(this.props.reportDate).format(
                            "D/MM/YYYY h:mm a"
                          )}
                        </span>
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
          {/* Actividades colapsables */}
          <div className="container-fluid" style={{ textAlign: "initial" }}>
            <ul uk-accordion="multiple: true">
              <li className="uk-closed">
                <a className="uk-accordion-title">Actividades</a>
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
                        {this.props.activities.map((activity) => (
                          <tr>
                            {/* 15/05 18:14 */}
                            <td>{dayjs(activity.date).format("D/MM H:mm")}</td>
                            <td>{activity.activity}</td>
                          </tr>
                        ))}
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
          {/* Botones Cerrar / Validar */}
          <div className="uk-grid uk-flex-around">
            <div>
              <Link onClick={() => assignTecnician(this.props.ticketId)} className="uk-button uk-button-default">
                {this.props.tecnicianName ? "VALIDAR" : "ATENDER"}
              </Link>
              <a className="uk-button uk-button-default">Cerrar</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
