import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import UIkit from "uikit"
import "uikit/dist/css/uikit.min.css"
import Icons from "uikit/dist/js/uikit-icons"
UIkit.use(Icons)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

serviceWorker.unregister();
