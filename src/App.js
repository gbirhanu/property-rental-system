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
import PropertyRegistration from "./components/PropertyResgistration";
import InsertMorePhoto from "./components/Property/InsertMorePhoto";
import DisplayMorePhoto from "./components/DisplayMorePhoto";
import MachineDetails from "./components/MachineDetails";
import DisplayMoreMachinePhoto from "./components/DisplayMoreMachinePhoto";
import MachineModal from "./components/MachineModal";
import MachineMapList from "./components/MachineMapList";
import AddMoreMachineryPhoto from "./components/Property/AddMoreMachineryPhoto";
function App(props) {
  console.log(props.userinfo);
  return (
    <React.Fragment>
      <NavBar userInfo={props.userinfo} />
      <Switch>
        <Route path="/ethiorental" exact component={HouseList} />
        <Route path="/ethiorental/machinery" component={MachineryList} />
        <Route path="/ethiorental/detail" component={Details} />
        <Route path="/ethiorental/mdetail" component={MachineDetails} />
        <Route path="/ethiorental/map" component={HouseMap} />
        <Route path="/ethiorental/machinemap" component={MachineMapList} />
        <Route
          path="/ethiorental/registeration"
          component={props => (
            <PropertyRegistration {...props} userInfo={props.userinfo} />
          )}
        />
        <Route path="/ethiorental/morephoto" component={InsertMorePhoto} />
        <Route
          path="/ethiorental/moremachinephoto"
          component={AddMoreMachineryPhoto}
        />
      </Switch>
      <Modal />
      <MachineModal />
      <DisplayMorePhoto />
      <DisplayMoreMachinePhoto />
    </React.Fragment>
  );
}

export default App;
