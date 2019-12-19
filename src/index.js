import $ from 'jquery';
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

import {deleteUser} from "./redax/state";
import state from "./redax/state";



ReactDOM.render(<App state={state} deleteUser={deleteUser}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
