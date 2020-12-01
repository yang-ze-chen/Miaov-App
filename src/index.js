import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css'
import './assets/rem/rem.js'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker.js'
import {Provider} from 'react-redux'
import store from './store'
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister()
