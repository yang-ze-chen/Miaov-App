import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css'
import './assets/rem/rem.js'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker.js'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister()
