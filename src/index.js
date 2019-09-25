import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import index from "./js/index";
import Store from "./Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
