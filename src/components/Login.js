import React, {Component} from 'react';
import NavBar from './Navbar';
let logo = require ("../images/logo.png")



class Login extends Component {

  

    render () {
        return (
        <div>       
            <div>
                <NavBar/>
            </div>
        
        <div 
            className= "uk-position-center uk-vertical-align uk-text-center"
            style={  {
                width: "600px",
                border: "solid black",
                backgroundColor:  "#ADD8E6", 
                    }}   > 
                {/*modificar color a los de la empresa */}

{/*ESTILO PRINCIPAL DE LA PAGINA */}

{/* LOGO A INSERTAR DEL PROYECTO */}
            <div>
                <img width="300" 
                     src={logo}
                     alt="company"   
                    className= "uk-vertical-align uk-margin-medium-left"     
                />
            {/* cambiar a logo de la empresa*/}

            <form>
                    <div className="uk-form-row ">   

{/* USERNAME: NOMBRE DE LA PERSONA */}
                    <div>
                        <span uk-icon="icon: users; ratio: 2" className="uk-margin-small-right"></span>
                        <input  
                            style={{border:"solid"}}
                            className="uk-width-1-2 uk-form-large uk-text-center"
                            type="text"
                            placeholder = "Username"
                        >
                                
                        </input>
                        
                    </div>
{/*PASSWORD A INTRODUCIR --> HACER EL POST */}
                        <span uk-icon="icon: lock; ratio: 2" className="uk-margin-small-right"></span>
                        <input  
                            style={{border:"solid"}}
                            className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                            type="text"
                            placeholder = "Password"        >
                        </input>
                        
                       
{/* BOTON DE LOGIN PARA ENVIAR SOLICITUD*/}
                        <div className="uk-form-row ">         
                            <button 
                            className="uk-vertical-align uk-margin-medium-left uk-button uk-button-large uk-button-primary"
                            style={{ backgroundColor:  "#ADD8E6"}}>
                            Login
                            </button>                  
                        </div>
                    </div>
            </form>

        </div>
        </div>
        </div>
    )}
}

export default Login