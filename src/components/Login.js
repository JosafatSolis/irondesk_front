import React, { Component } from "react";
import AppContext from "../AppContext";
import { login } from '../services/loginService';

let logo = require("../images/logo.png");
let playa = require("../images/playa.jpg")



class Login extends Component {
  // Así se enlaza el AppContext para que pueda ser utilizado dentro del componente y compartir y leer variables globales.
  static contextType = AppContext;

    state={credentials:{} }

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
    console.log(credentials);
    // Mandamos llamar el servicio que regresa una promesa, que a su vez regrea un objeto res.data con el user dentro
    login(credentials).then(res => {
        // Extrae el usuario y lo asigna al context, mediante el método setUser
        const { user } = res.data;
        setUser(user);
        // Cambia la página dependiendo del rol del usuario logueado:
        if(["Admin", "Tecnician"].includes(user.role)) {
             history.push("home/tenants")
        } else {
            history.push(`home/tickets/${user.tenant}`)
        }
    }).catch(reason => console.log("Error", reason))
  };


  render() {
    return (

     
      <main>

        <section style={{backgroundImage:`url(${playa})`}}
          className="
          uk-background-blend-luminosity
          uk-background-primary  

          uk-height-small uk-panel
          uk-height-viewport 
          uk-background-blend-multiply 
          uk-background-cover

          uk-flex 
          uk-flex-center 
          uk-flex-middle" >  
          
          <article
          className="uk-background-muted "
          style={{
            border:"solid 2px #f07e1c",
            width: "1000px",
            padding: "10px"
          }}>

          <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-left">
            <img src={logo} alt="company" className="uk-margin"/>
  
            <form 
              className="uk-width-1-2 uk-margin-large-top uk-margin-large-left"
              onSubmit={(e) => this.handleSubmit(e)}>
                
                {/* USERNAME: NOMBRE DE LA PERSONA */}
                  <span
                    uk-icon="icon: users; ratio: 2" className="uk-margin-small-right">
                  </span>
                  
                  <input
                    name="email"
                    onChange={(e) => this.handleChange(e)}
                    type="text"
                    placeholder="Email"
                    className="uk-width-1-2 uk-form-large uk-text-center"
                    style={{ border: "solid 2px #f07e1c" }}
                  ></input>
            
                {/*PASSWORD A INTRODUCIR --> HACER EL POST */}
              <div>
                <span uk-icon="icon: lock; ratio: 2" className="uk-margin-small-right"> </span>
                <input
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                  className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                  type="text"
                  placeholder="Password"
                  style={{ border: "solid 2px #f07e1c" }}>
                </input>
              </div>
                {/* BOTON DE LOGIN PARA ENVIAR SOLICITUD*/}

              <div className=" uk-align-center ">
                  <button
                    className=" uk-align-center uk-button uk-button-primary"
                    style={{backgroundColor:"#f07e1c" }}>
                    Login
                  </button>
              </div>
              
            </form>
            
            </div>
          </article>
        </section>
     
      </main>
      
    );
  }
}

export default Login;
