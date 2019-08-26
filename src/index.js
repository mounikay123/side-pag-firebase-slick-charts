import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import appStore from '../src/store';
import Arrow from "../src/arrow"
appStore.subscribe(() => {
    console.log("appStore.getState()", appStore.getState());
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
