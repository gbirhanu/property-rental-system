import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import HouseList from "./components/HouseList";
import MachineryList from "./components/MachineryList";
import Details from "./components/Details";
import Modal from "./components/Modal";
import HouseMap from "./components/HouseMapList";
import Tab from "./components/Tab";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Tab />
      <Switch>
        <Route path="/ethiorental" exact component={HouseList} />
        <Route path="/ethiorental/machinery" component={MachineryList} />
        <Route path="/ethiorental/detail" component={Details} />
        <Route path="/ethiorental/map" component={HouseMap} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
