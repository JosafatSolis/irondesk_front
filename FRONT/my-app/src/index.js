import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import UIkit from "uikit"
import "uikit/dist/css/uikit.min.css"
import Icons from "uikit/dist/js/uikit-icons"
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login';
import TicketsContainer from './components/TicketsContainer';
import TicketCard from './components/TicketCard';
import FormikForm from './components/FormikForm';

UIkit.use(Icons)

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/"      component={App} />
        <Route exact path="/login" component={Login} />
       
        <Route path="/tenants/:id"         component={TicketCard} />
        <Route exact path="/tickets" component={TicketsContainer} />
        
        <Route exact path="/newticket" component={FormikForm} />

    </BrowserRouter>, 
    document.getElementById('root')
);



serviceWorker.unregister();
