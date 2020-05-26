import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login";
import NavBar from "./components/Navbar";

import TenantsContainer from "./components/TenantsContainer";
import TicketsContainer from "./components/TicketsContainer";
import UsersContainer from "./components/UsersContainer";
import ModalButtonTicket from "./components/Modals_Forms/ModalButtonTicket"
import FormikFormUser from "./components/Modals_Forms/FormikFormUser";
import FormikFormTenant from "./components/Modals_Forms/FormikFormTenant";
import FormikFormTicket from "./components/Modals_Forms/FormikFormTicket"


class App extends Component{
  render(){
    return (
      <div className="uk-grid uk-text-center ">
             {/* <TenantsContainer
                tenants={[
                  {name:"Rod", code: "RO", tickets: "5"},
                  {name:"Zed", code: "ZE", tickets: "5"},
                  {name:"Rod", code: "RO", tickets: "5"},
                ]  } 
                /> */}
            <FormikFormTicket />

            {/* <UsersContainer 
              users={ [
                {
                key:"1",
                tenantCode:"25",
                role:"User",
                name:"Rod",
                lastName:"Amador",
                email:"correo",
                phone:"55439392"
                },

               {
                key:"2",
                tenantCode:"05",
                role:"Admin",
                name:"Josafat",
                lastName:"Solis",
                email:"correo",
                phone:"55439392"
                },
              ]}
            
            />  */}

            
            
          
      </div>
    );
  }
}

export default App;
