import React, { Component } from "react";
import AppContext from "../AppContext";
import { login } from '../services/loginService';
let logo = require("../images/logo.png");

class Login extends Component {
  // Así se enlaza el AppContext para que pueda ser utilizado dentro del componente y compartir y leer variables globales.
  static contextType = AppContext;

    state={
        credentials:{}
    }

  handleChange = (e) => {
    let { credentials } = this.state;
    credentials = { ...credentials, [e.target.name]: e.target.value };
    this.setState({ credentials });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Se extrae el método setUser del AppContext
    const { setUser } = this.context;
    const { credentials } = this.state;
    const { history } = this.props;
    // Mandamos llamar el servicio que regresa una promesa, que a su vez regrea un objeto res.data con el user dentro
    login({...credentials}).then(res => {
        // Extrae el usuario y lo asigna al context, mediante el método setUser
        const { user } = res.data;
        setUser(user);
        // Cambia la página dependiendo del rol del usuario logueado:
        if(user.role === "Admin") {
             history.push("/tenants")
        } else {
            history.push(`/tickets/${user.tenant}`)
        }
    })
  };

  render() {
    return (
      <div>
        <div
          className="uk-position-center uk-vertical-align uk-text-center"
          style={{
            width: "600px",
            border: "solid black",
            backgroundColor: "#ADD8E6",
          }}
        >
          {/*modificar color a los de la empresa */}
          {/*ESTILO PRINCIPAL DE LA PAGINA */}
          {/* LOGO A INSERTAR DEL PROYECTO */}
          <div>
            <img
              width="300"
              src={logo}
              alt="company"
              className="uk-vertical-align uk-margin-medium-left"
            />
            {/* cambiar a logo de la empresa*/}

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="uk-form-row ">
                {/* USERNAME: NOMBRE DE LA PERSONA */}
                <div>
                  <span
                    uk-icon="icon: users; ratio: 2"
                    className="uk-margin-small-right"
                  ></span>
                  <input
                    name="email"
                    onChange={(e) => this.handleChange(e)}
                    style={{ border: "solid" }}
                    className="uk-width-1-2 uk-form-large uk-text-center"
                    type="text"
                    placeholder="Email"
                  ></input>
                </div>
                {/*PASSWORD A INTRODUCIR --> HACER EL POST */}
                <span
                  uk-icon="icon: lock; ratio: 2"
                  className="uk-margin-small-right"
                ></span>
                <input
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                  style={{ border: "solid" }}
                  className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                  type="text"
                  placeholder="Password"
                ></input>

                {/* BOTON DE LOGIN PARA ENVIAR SOLICITUD*/}
                <div className="uk-form-row ">
                  <button
                    className="uk-vertical-align uk-margin-medium-left uk-button uk-button-large uk-button-primary"
                    style={{ backgroundColor: "#ADD8E6" }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
