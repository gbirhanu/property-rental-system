import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import HouseList from "./components/HouseList";
import MachineryList from "./components/MachineryList";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/ethiorental/" exact component={HouseList} />
        <Route path="/ethiorental/machinery" component={MachineryList} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
