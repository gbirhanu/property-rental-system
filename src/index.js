import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ResourceProvider } from "./Resource";
import Welcome from "./components/Welcome";
import { UserContextProvider } from "./UserContext";

ReactDOM.render(
  <ResourceProvider>
    <Router>
      <UserContextProvider>
        <Welcome />
      </UserContextProvider>
    </Router>
  </ResourceProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
