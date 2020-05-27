import React, { Component } from "react";
import "./App.css";
import TenantsContainer from "./components/TenantsContainer"
import UsersContainer from "./components/UsersContainer"
import TicketsContainer from "./components/TicketsContainer"
import ModalButtonTicket from "./components/Modals_Forms/ModalButtonTicket"


export default class App extends Component {
  // state = {
  //   currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  // };

  // setUser = (user) => {
  //   this.setState({ currentUser: user });
  // };

  // componentDidMount() {
  //   const { history } = this.props;
  //   const { id } = this.state.currentUser;
  //   if(!id) history.push("/login");
  //   history.push("/home");
  // }

  render() {
    // console.log(this.props);
    // const { state, setUser } = this;
    return (
      // Manda los valores al AppContext para que estén disponibles en todos lados
      // <AppContext.Provider value={{ state, setUser }}>
        // <Route exact path="/login" component={Login} />
        // <Route exact path="/*" component={Home} />
        <div>

       <ModalButtonTicket />

       <TenantsContainer
          tenants= {[
            {code:"KO", name:"Coca", tickets:"5"},
            {code:"KO", name:"Coca", tickets:"5"},
            {code:"KO", name:"Coca", tickets:"5"},
            {code:"KO", name:"Coca", tickets:"5"},
          ]} />

       <UsersContainer
       users= {[
        {tenantCode:"KO", name:"Rod", lastName:"Amador", role:"User", email:"rod@c", phone:"559494" },
        {tenantCode:"KO", name:"Rod", lastName:"Amador", role:"User", email:"rod@c", phone:"559494" },
        {tenantCode:"KO", name:"Rod", lastName:"Amador", role:"User", email:"rod@c", phone:"559494" },
      ]}
       />



       </div>
      // </AppContext.Provider>
    );
  }
}
