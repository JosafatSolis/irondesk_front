import React, { Component } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../services/userService";
import ModalButtonUser from "./Modals_Forms/ModalButtonUser"

export default class UsersContainer extends Component {
  state = {
    users: []
  }

  constructor(params) {
    super(params);
    getUsers().then(users => this.setState({ users: []}));
  }

  render() {
    return (
      <section className="uk-section">
       <div>  <ModalButtonUser/>        </div>

        <div uk-filter="target: .js-filter">
          {/* Filter Controls */}
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" uk-filter-control=""> <button className="uk-button-muted">Todos</button>   </li>
            {[...new Set(this.state.users.map(user => user.tenantCode))].map(tenant => (
                 <li uk-filter-control={"[tenant='" + tenant + "']"}>
                 <button className="uk-button-muted">{tenant}</button>
               </li>
            ))}
          </ul>

          {/* Layout items */}
          <div
                className="js-filter uk-grid uk-text-center uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m"
                uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
          >
        
            {this.props.users.map((user) => (


              <div tenant={user.tenantCode}
                       className="uk-card uk-card-default uk-margin-bottom"
              >
                <UserCard
                    key={user.id}
                    tenantCode={user.tenantCode}
                    role={user.role}
                    name={user.name}
                    lastName={user.lastName}
                    email={user.email}
                    phone={user.phone}
                />
              
                </div>
              
            ))}
          </div>
        </div>
      </section>
    );
  }
}
