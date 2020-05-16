import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import UIkit from "uikit"
import "uikit/dist/css/uikit.min.css"
import Icons from "uikit/dist/js/uikit-icons"

UIkit.use(Icons)

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
