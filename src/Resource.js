import React, { Component } from "react";
const ResourceContext = React.createContext();
class ResourceProvider extends Component {
  state = {
    mNumber: 0,
    rNumber: 0,
    sNumber: 0,
    items: [],
    detail: [],
    machinery: [],
    modalOpen: false,
    modalHouse: [],
    isLoaded: false,
    error: false,
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
      .catch(err => {
        console.log(err);
        this.setState({
          error: true
        });
      })
      .then(resp => {
        if (!this.state.error) {
          this.setState({
            isMachineLoaded: true,
            machinery: resp
          });
        } else {
          console.log("Error during fetching");
        }
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
  getItem = houseId => {
    if (this.state.isLoaded) {
      const house = this.state.items.result.find(
        item => item.houseId === houseId
      );
      return house;
    }
  };
  handleDetail = houseId => {
    if (this.state.isLoaded) {
      const house = this.getItem(houseId);
      this.setState(() => {
        return { detail: house };
      });
    }
  };
  openModal = houseId => {
    const house = this.getItem(houseId);
    this.setState(() => {
      return { modalHouse: house, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    return (
      <ResourceContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}

const ResourceConsumer = ResourceContext.Consumer;
export { ResourceProvider, ResourceConsumer };
