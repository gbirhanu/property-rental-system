import React, { Component } from "react";
const ResourceContext = React.createContext();
class ResourceProvider extends Component {
  state = {
    mNumber: 0,
    rNumber: 0,
    sNumber: 0,
    items: [],
    detail: [],
    mdetail: [],
    machinery: [],
    modalOpen: false,
    mmodalOpen: false,
    morePhotoOpen: false,
    morePhotoOpenMachine: false,
    modalHouse: [],
    modalMachine: [],
    isLoaded: false,
    error: false,
    isMachineLoaded: false,
    isMorePhotoLoaded: false,
    morePhotoUrl: [],
    moreMachineryPhotoUrl: [],
    filteredPhotoSingel: [],
    filteredPhotoSingelMachine: []
  };
  componentDidMount() {
    this.getAllHouse();
    this.getAllMachinery();
    this.getMoreHousePhoto();
    this.getMoreMachineryHousePhoto();
  }

  getMoreHousePhoto = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/getAllWebPhoto.php"; // site that doesn’t send Access-Control-*

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
            isMorePhotoLoaded: true,
            morePhotoUrl: resp
          });
        } else {
          console.log("Error during fetching");
        }
      });
  };
  getMoreMachineryHousePhoto = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://michutaxi.com/android_connect/getAllWebMachineryPhoto.php"; // site that doesn’t send Access-Control-*

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
            isMorePhotoLoaded: true,
            moreMachineryPhotoUrl: resp
          });
        } else {
          console.log("Error during fetching");
        }
      });
  };

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
  getMachineItem = houseId => {
    if (this.state.isMachineLoaded) {
      const house = this.state.machinery.result.find(
        item => item.houseId === houseId
      );
      return house;
    }
  };
  getItemMorePhote = houseId => {
    let house = [];
    let length = Object.keys(this.state.morePhotoUrl.result).length;
    let i = 0,
      index = 0;
    while (i < length) {
      if (this.state.morePhotoUrl.result[i].houseId === houseId) {
        house[index] = this.state.morePhotoUrl.result[i].housePhoto;
        index++;
      }
      i++;
    }
    return house;
  };
  getItemMoreMchineryPhote = houseId => {
    let house = [];
    let length = Object.keys(this.state.moreMachineryPhotoUrl.result).length;
    let i = 0,
      index = 0;
    while (i < length) {
      if (this.state.moreMachineryPhotoUrl.result[i].houseId === houseId) {
        house[index] = this.state.moreMachineryPhotoUrl.result[i].housePhoto;
        index++;
      }
      i++;
    }
    return house;
  };
  handleDetail = houseId => {
    if (this.state.isLoaded) {
      const house = this.getItem(houseId);
      this.setState(() => {
        return { detail: house };
      });
    }
  };
  handleMachineDetail = houseId => {
    if (this.state.isMachineLoaded) {
      const house = this.getMachineItem(houseId);
      this.setState(() => {
        return { mdetail: house };
      });
    }
  };
  openMModal = houseId => {
    const house = this.getMachineItem(houseId);
    this.setState(() => {
      return { modalMachine: house, mmodalOpen: true };
    });
  };
  closeMModal = () => {
    this.setState(() => {
      return { mmodalOpen: false };
    });
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
  openPhotoModal = houseId => {
    const house = this.getItemMorePhote(houseId);
    this.setState(() => {
      return {
        filteredPhotoSingel: house,
        morePhotoOpen: true
      };
    });
  };
  closePhotoModal = () => {
    this.setState(() => {
      return { morePhotoOpen: false };
    });
  };
  openPhotoModalMachine = houseId => {
    const house = this.getItemMoreMchineryPhote(houseId);
    this.setState(() => {
      return {
        filteredPhotoSingelMachine: house,
        morePhotoOpenMachine: true
      };
    });
  };
  closePhotoModalMachine = () => {
    this.setState(() => {
      return { morePhotoOpenMachine: false };
    });
  };
  render() {
    return (
      <ResourceContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleMachineDetail: this.handleMachineDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          openMModal: this.openMModal,
          closeMModal: this.closeMModal,
          openPhotoModal: this.openPhotoModal,
          closePhotoModal: this.closePhotoModal,
          openPhotoModalMachine: this.openPhotoModalMachine,
          closePhotoModalMachine: this.closePhotoModalMachine
        }}
      >
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}

const ResourceConsumer = ResourceContext.Consumer;
export { ResourceProvider, ResourceConsumer };
