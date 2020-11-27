import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css'
import './assets/rem/rem.js'
import * as serviceWorker from "./serviceWorker"
ReactDOM.render(
  
    <App />,

  document.getElementById('root')
);

serviceWorker.unregister()
