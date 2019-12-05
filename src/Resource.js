import React, { Component } from "react";
const ResourceContext = React.createContext();

class ResourceProvider extends Component {
  state = {
    mNumber: 0,
    rNumber: 0,
    sNumber: 0,
    items: [],
    machinery: [],
    isLoaded: false,
    isMachineLoaded: false
  };
  componentDidMount() {
    this.getAllHouse();
    this.getAllMachinery();
  }
  getAllMachinery = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/getAllMachine.php"; // site that doesn’t send Access-Control-*

    fetch(proxyurl + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(resp => {
        this.setState({
          isMachineLoaded: true,
          machinery: resp
        });
      });
  };
  getAllHouse = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/getAllHouse.php"; // site that doesn’t send Access-Control-*

    fetch(proxyurl + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(resp => {
        this.setState({
          isLoaded: true,
          items: resp
        });
      });
  };
  getMachineryNumber = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/getNumberOfMachinery.php"; // site that doesn’t send Access-Control-*

    fetch(proxyurl + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(resp => {
        this.setState({
          mNumber: resp
        });
      }, this.getRentedHouseNumber());
  };

  getRentedHouseNumber = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://michutaxi.com/android_connect/numberrentorsale.php?houseisf=rent"; // site that doesn’t send Access-Control-*

    fetch(proxyurl + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(resp => {
        this.setState({
          rNumber: resp
        });
      }, this.getSaleedHouseNumber());
  };
  getSaleedHouseNumber = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://michutaxi.com/android_connect/numberrentorsale.php?houseisf=sale"; // site that doesn’t send Access-Control-*

    fetch(proxyurl + url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .catch(err => console.log(err))
      .then(resp => {
        this.setState({
          sNumber: resp
        });
      }, this.getAllHouseRent());
  };

  render() {
    return (
      <ResourceContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}

const ResourceConsumer = ResourceContext.Consumer;
export { ResourceProvider, ResourceConsumer };
