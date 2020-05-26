import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    render() {
      return (

        <nav className="uk-navbar-container uk-navbar" >

        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              
                <li className="uk-margin-right uk-margin-left">   <Link to="/">Home</Link>   </li>

                <li uk-accordion="multiple: true" className="uk-align-center"> 
                    <div className="uk-closed">
                        <Link to="/tenants" className="uk-accordion-title uk-text-small"> TENANTS</Link>
                            <div className="uk-accordion-content">
                               <ul> {/*Hay que poner un evento donde al hacer clic se agregue el nombre del tenant del lado derecho*/}
                                   <li> <Link to="/id:Bimbo"    className="uk-link-muted">Bimbo</Link> </li>
                                   <li> <Link to="/id:Coca"  className="uk-link-muted">Coca</Link> </li>
                                   <li> <Link to="/id:Pepsi"  className="uk-link-muted">Pepsi</Link> </li>
                               </ul>
                            </div>
                    </div>
                </li>

            </ul>
        </div>
    

        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
                <li>
                    <Link to="/login">Logout</Link> {/* Al hacer clic post para logout */}
                </li>
            </ul>
        </div>
    
    </nav>

    )}}
