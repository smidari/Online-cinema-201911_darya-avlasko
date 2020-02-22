import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
