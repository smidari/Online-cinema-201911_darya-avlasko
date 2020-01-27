import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ModalProvider from "react-redux-modal-provider";
import store from './redux/store';
import App from './components/app/App';
import {ModalBodyProvider} from "./components/example/ModalBodyContext";
import ModalRoot from "./components/example/ModalRoot";



const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
<ModalBodyProvider>
    <ModalRoot/>
    <Provider store={store}>
      <div>
        <App />

          <ModalProvider />
      </div>
    </Provider>
</ModalBodyProvider>


  </BrowserRouter>, rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
