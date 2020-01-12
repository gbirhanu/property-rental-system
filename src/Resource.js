import React, { Component } from "react";
import cogoToast from "cogo-toast";

const ResourceContext = React.createContext();
class ResourceProvider extends Component {
  state = {
    userId: "",
    userName: "",
    userPhone: "",
    userStatus: "",
    isHidden: true,
    openAddMorePhoto: false,
    machineopenAddMorePhoto: false,
    openMap: false,
    mainFormOpenClose: true,
    houseLatitude: "",
    houseLongitude: "",
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
  logOut = () =>{
    this.setState({
      userId:""
    })
  }
  browseMap = e => {
    e.preventDefault();
    this.fopenMap();
    this.closemainFormOpen();
  };
  closeMapOpenForm = () => {
    this.closeMap();
    this.fmainFormOpen();
  };
  handleMachineRegistration = (
    userId,
    userName,
    userPhone,
    machineType,
    machineModel,
    driverStatus,
    builtYear,
    houseDescription,
    housePrice,
    houseLatitude,
    houseLongitude
  ) => {
    var data = new FormData();
    var image = document.querySelector('input[type="file"]').files[0];
    data.append("image", image);
    data.append("userId", userId);
    data.append("userName", userName);
    data.append("userPhone", userPhone);
    data.append("machineType", machineType);
    data.append("machineModel", machineModel);
    data.append("driverStatus", driverStatus);
    data.append("builtYear", builtYear);
    data.append("houseDescription", houseDescription);
    data.append("housePrice", housePrice);
    data.append("houseLatitude", houseLatitude);
    data.append("houseLongitude", houseLongitude);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/addMachinery.php";

    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState({
          houseId: data.id,
          isHidden: false
        });
        cogoToast.success("Successfully Registered");
      })
      .catch(error => {
        cogoToast.error("Something went wrong" + error);
        console.log("I am executed");
      });
  };
  handleRegistration = (
    userId,
    userName,
    userPhone,
    houseType,
    noofRoom,
    houseConstType,
    serviceType,
    halfBath,
    fullBath,
    servantQuarter,
    servantQuarterBath,
    modernKitchen,
    parkingSpace,
    waterTank,
    generatorAvailable,
    builtYear,
    buildingSquareMeter,
    CompoundSquareMeter,
    houseDescription,
    housePrice,
    houseLatitude,
    houseLongitude
  ) => {
    var data = new FormData();
    var image = document.querySelector('input[type="file"]').files[0];
    data.append("image", image);
    data.append("userId", userId);
    data.append("userName", userName);
    data.append("userPhone", userPhone);
    data.append("houseType", houseType);
    data.append("noofRoom", noofRoom);
    data.append("houseConstType", houseConstType);
    data.append("serviceType", serviceType);
    data.append("halfBath", halfBath);
    data.append("fullBath", fullBath);
    data.append("servantQuarter", servantQuarter);
    data.append("servantQuarterBath", servantQuarterBath);
    data.append("modernKitchen", modernKitchen);
    data.append("parkingSpace", parkingSpace);
    data.append("waterTank", waterTank);
    data.append("generatorAvailable", generatorAvailable);
    data.append("builtYear", builtYear);
    data.append("buildingSquareMeter", buildingSquareMeter);
    data.append("CompoundSquareMeter", CompoundSquareMeter);
    data.append("houseDescription", houseDescription);
    data.append("housePrice", housePrice);
    data.append("houseLatitude", houseLatitude);
    data.append("houseLongitude", houseLongitude);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/addHouse.php";

    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState({
          houseId: data.id,
          isHidden: false
        });
        cogoToast.success("Successfully Registered");
      })
      .catch(error => {
        cogoToast.error("Something went wrong" + error);
      });
  };
  UpdateUserInfo = (userId, userName, userPhone) => {
    this.setState(() => {
      return { userId: userId, userName: userName, userPhone: userPhone };
    });
  };

  fopenAddMorePhoto = () => {
    this.setState(() => {
      return { openAddMorePhoto: true };
    });
  };
  closeAddMorePhoto = () => {
    this.setState(() => {
      return { openAddMorePhoto: false };
    });
  };
  fmachineopenAddMorePhoto = () => {
    this.setState(() => {
      return { machineopenAddMorePhoto: true };
    });
  };
  cmachineopenAddMorePhoto = () => {
    this.setState(() => {
      return { machineopenAddMorePhoto: false };
    });
  };
  closeMap = () => {
    this.setState(() => {
      return { openMap: false };
    });
  };
  closemainFormOpen = () => {
    this.setState(() => {
      return { mainFormOpenClose: false };
    });
  };
  fopenMap = () => {
    this.setState(() => {
      return { openMap: true };
    });
  };
  fmainFormOpen = () => {
    this.setState(() => {
      return { mainFormOpenClose: true };
    });
  };
  updateLocation = (lat, long) => {
    this.setState(() => {
      return { houseLatitude: lat, houseLongitude: long };
    });
  };
  getGeoLocaion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.updateLocation(
      position.coords.latitude.toFixed(7),
      position.coords.longitude.toFixed(7)
    );
  };
  hangleUserRegistration = (
    event,
    userName,
    userPhone,
    userPassword,
    isLoggedIn
  ) => {
    event.preventDefault();
    var data = new FormData();
    data.append("userName", userName);
    data.append("userPassword", userPassword);
    data.append("userPhone", userPhone);
    data.append("isLoggedIn", isLoggedIn);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/userRegistration.php";
    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState(
          {
            userId: data.id
          },
          this.UpdateUserInfo(this.state.userId, userName, userPhone)
        );
        cogoToast.success("Successfully Registered");
      })
      .catch(error => {
        cogoToast.error("Something went wrong" + error);
      });
  };

  handleLogin = (event, userName, userPassword) => {
    event.preventDefault();
    var data = new FormData();
    data.append("userName", userName);
    data.append("userPassword", userPassword);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://michutaxi.com/android_connect/login.php";

    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState(
          {
            userId: data.result[0].userId,
            userName: data.result[0].userName,
            userPhone: data.result[0].userPhone,
            userStatus: data.result[0].userStatus
          },
          this.UpdateUserInfo(
            this.state.userId,
            this.state.userName,
            this.state.userPhone
          )
        );
        cogoToast.success("Successfully LoggedIn");
      })
      .catch(error => {
        cogoToast.error("Something went wrong" + error);
      });
  };
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
          logOut:this.logOut,
          getGeoLocaion: this.getGeoLocaion,
          fopenMap: this.fopenMap,
          fmainFormOpen: this.fmainFormOpen,
          browseMap: this.browseMap,
          closeMapOpenForm: this.closeMapOpenForm,
          handleMachineRegistration: this.handleMachineRegistration,
          fmachineopenAddMorePhoto: this.fmachineopenAddMorePhoto,
          cmachineopenAddMorePhoto: this.cmachineopenAddMorePhoto,
          handleRegistration: this.handleRegistration,
          closeAddMorePhoto: this.closeAddMorePhoto,
          closemainFormOpen: this.closemainFormOpen,
          updateLocation: this.updateLocation,
          closeMap: this.closeMap,
          fopenAddMorePhoto: this.fopenAddMorePhoto,
          handleLogin: this.handleLogin,
          hangleUserRegistration: this.hangleUserRegistration,
          UpdateUserInfo: this.UpdateUserInfo,
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
