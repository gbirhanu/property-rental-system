import React, { Component } from "react";
import Title from "../Title";
import cogoToast from "cogo-toast";
import AddMoreMachineryPhoto from "./AddMoreMachineryPhoto";

export default class MachineRegistration extends Component {
  state = {
    userId: this.props.userInfo[0].userId,
    userName: this.props.userInfo[1].userName,
    userPhone: this.props.userInfo[2].userPhone,
    machineType: "Single Family",
    machineModel: "Studio",
    builtYear: "2018",
    driverStatus: "Yes",
    houseDescription:
      "Contact the owner for more information by clicking the view details button",
    housePrice: "200000",
    houseLatitude: "7.6879539",
    houseLongitude: "36.8205221",
    houseId: 0,
    isHidden: true,
    openAddMorePhoto: false
  };
  handleMachineRegistration = () => {
    const {
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
    } = this.state;
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
    this.setState({
      houseLatitude: "" + position.coords.latitude,
      houseLongitude: "" + position.coords.longitude
    });
  };
  render() {
    console.log(this.state);
    const content = { id: this.state.houseId, mainCont: this.state };
    return (
      <React.Fragment>
        {this.state.openAddMorePhoto ? (
          <AddMoreMachineryPhoto naqabi={content} />
        ) : (
          <section className="house-main-section">
            <div className="img-container">
              <div className="house-img-machine">
                <div className="image-label-machine">
                  <Title name="" title="Register Here." />
                </div>
              </div>
            </div>
            <div className="form-section">
              <div className="input-group">
                <strong>Machine Type</strong>
                <select
                  className="select-group"
                  id="machineType"
                  onChange={e =>
                    this.setState(
                      { machineType: e.target.value },
                      this.getGeoLocaion()
                    )
                  }
                >
                  <option>Backhoe</option>
                  <option>Excavators</option>
                  <option>Dragline Excavator</option>
                  <option>Bulldozers</option>
                  <option>Graders</option>
                  <option>Wheel Tractor Scraper</option>
                  <option>Trenchers</option>
                  <option>Loaders</option>
                  <option>Tower Cranes</option>
                  <option>Pavers</option>
                  <option>Compactors</option>
                  <option>Telehandlers</option>
                  <option>Feller Bunchers</option>
                  <option>Dump Trucks</option>
                  <option>Pile Boring Machine</option>
                  <option>Pile Driving Machine</option>
                </select>
              </div>
              <div className="input-group">
                <span>Machine Model</span>
                <select
                  className="select-group"
                  id="machineModel"
                  onChange={e =>
                    this.setState({ machineModel: e.target.value })
                  }
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Big</option>
                  <option>Huge</option>
                  <option>Very Huge</option>
                </select>
              </div>
              <div className="input-group">
                <span>With Driver ?</span>
                <select
                  className="select-group"
                  id="withDriver"
                  onChange={e =>
                    this.setState({ driverStatus: e.target.value })
                  }
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="input-group">
                <label>Manufactured Year</label>
                <input
                  type="number"
                  defaultValue="2018"
                  className="select-group"
                  id="builtYear"
                  onChange={e => this.setState({ builtYear: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Machine Price</label>
                <input
                  type="number"
                  className="select-group"
                  id="bsm"
                  placeholder="0.00ETB"
                  onChange={e => this.setState({ housePrice: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Choose Photo</label>
                <input
                  type="file"
                  className="input-group-file"
                  id="housePhoto"
                />
              </div>
              <div className="input-group">
                <label>Machine Describtion</label>
                <textarea
                  className="select-group"
                  id="houseDesc"
                  rows="3"
                  onChange={e =>
                    this.setState({ houseDescription: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="btn-submit-my">
                <button
                  type="submit"
                  className="btn btn-primary mb-2"
                  onClick={this.handleMachineRegistration}
                >
                  Register
                </button>
              </div>
              <div className="btn-continue-add">
                <button
                  disabled={this.state.isHidden}
                  type="button"
                  className="btn btn-primary mb-2"
                  onClick={() =>
                    this.setState({
                      openAddMorePhoto: true
                    })
                  }
                >
                  Add More Photo
                </button>
              </div>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}
