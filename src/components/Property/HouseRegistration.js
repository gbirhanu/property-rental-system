import React, { Component } from "react";
import Title from "../Title";
import cogoToast from "cogo-toast";
import InsertMorePhoto from "./InsertMorePhoto";
import ReactTooltip from "react-tooltip";
import { ButtonContainer } from "../Button";
export default class HouseRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userInfo[0].userId,
      userName: this.props.userInfo[0].userName,
      userPhone: this.props.userInfo[0].userPhone,
      houseType: "Single Family",
      noofRoom: "Studio",
      houseConstType: "Wood and mud",
      serviceType: "sale",
      halfBath: "0 Half Bathroom",
      fullBath: "1 Full Bathroom",
      servantQuarter: "1 Room",
      servantQuarterBath: "1 Bathroom",
      modernKitchen: "Yes",
      parkingSpace: "1 Parking Space",
      waterTank: "Yes",
      generatorAvailable: "Yes",
      builtYear: "2018",
      buildingSquareMeter: "200",
      CompoundSquareMeter: "400",
      houseDescription:
        "Contact the owner for more information by clicking the view details button",
      housePrice: "200000",
      houseLatitude: "",
      houseLongitude: "",
      houseId: 0,
      isHidden: true,
      openAddMorePhoto: false
    };
  }
  handleRegistration = () => {
    const {
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
    } = this.state;
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
    console.log(this.props);

    return (
      <React.Fragment>
        {this.state.openAddMorePhoto ? (
          <InsertMorePhoto id={this.state.houseId} />
        ) : (
          <section className="house-main-section">
            <ReactTooltip />

            <div className="img-container">
              <div className="house-img">
                <div className="image-label">
                  <Title name="" title="Register Here." />
                </div>
              </div>
            </div>
            <div className="form-section">
              <form>
                <div className="input-group">
                  <span>House Type</span>
                  <select
                    className="select-group"
                    id="houseType"
                    onChange={e => {
                      this.setState(
                        { houseType: e.target.value },
                        this.getGeoLocaion()
                      );
                    }}
                  >
                    <option>Single Family</option>
                    <option>Twine Homes</option>
                    <option>Town Homes</option>
                    <option>Apartment</option>
                    <option>Condominiums</option>
                    <option>Commercial Space</option>
                    <option>Office Space</option>
                    <option>Land/lot</option>
                    <option>Warehouse</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Bed Room</label>
                  <select
                    className="select-group"
                    id="noofRoom"
                    onChange={e => {
                      this.setState({ noofRoom: e.target.value });
                    }}
                  >
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4 Bedrooms</option>
                    <option>5 Bedrooms</option>
                    <option>6 Bedrooms</option>
                    <option>7 Bedrooms</option>
                    <option>8 Bedrooms</option>
                    <option>9 Bedrooms</option>
                    <option>10 Bedrooms and Above</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>House Construction Type</label>
                  <select
                    className="select-group"
                    id="houseCon"
                    onChange={e => {
                      this.setState({ houseConstType: e.target.value });
                    }}
                  >
                    <option>Wood and mud</option>
                    <option>Wood and mud + Stucco</option>
                    <option>Maison/stone</option>
                    <option>Cement Blocks + Stucco</option>
                    <option>Poured Concret</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>House for</label>
                  <select
                    className="select-group"
                    id="houseFor"
                    onChange={e => {
                      this.setState({ serviceType: e.target.value });
                    }}
                  >
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Half Bathroom</label>
                  <select
                    className="select-group"
                    id="hbathroom"
                    onChange={e => {
                      this.setState({ halfBath: e.target.value });
                    }}
                  >
                    <option>0 Half Bathroom</option>
                    <option>1 Half Bathroom</option>
                    <option>2 Half Bathroom</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Full BathRoom</label>
                  <select
                    className="select-group"
                    id="fbathroom"
                    onChange={e => {
                      this.setState({ fullBath: e.target.value });
                    }}
                  >
                    <option>1 Full Bathroom</option>
                    <option>2 Full Bathrooms</option>
                    <option>3 Full Bathrooms</option>
                    <option>4 Full Bathrooms</option>
                    <option>5 Full Bathrooms</option>
                    <option>6 Full Bathrooms and Above</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Servant Quarter</label>
                  <select
                    className="select-group"
                    id="squar"
                    onChange={e => {
                      this.setState({ servantQuarter: e.target.value });
                    }}
                  >
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                    <option>4 Rooms</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Servant Quarter Bathroom</label>
                  <select
                    className="select-group"
                    id="sqr"
                    onChange={e => {
                      this.setState({ servantQuarterBath: e.target.value });
                    }}
                  >
                    <option>1 Bathroom</option>
                    <option>2 Bathrooms</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Modern Kitchen</label>
                  <select
                    className="select-group"
                    id="modernKitchen"
                    onChange={e => {
                      this.setState({ modernKitchen: e.target.value });
                    }}
                  >
                    <option value="Yes">Available</option>
                    <option value="No">Not Available</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Parking Space</label>
                  <select
                    className="select-group"
                    id="parkingSpace"
                    onChange={e => {
                      this.setState({ parkingSpace: e.target.value });
                    }}
                  >
                    <option>1 Parking Space</option>
                    <option>2 Parking Space</option>
                    <option>3 Parking Space</option>
                    <option>4 Parking Space</option>
                    <option>5+ Parking Space</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Water Tank</label>
                  <select
                    className="select-group"
                    id="waterTank"
                    onChange={e => {
                      this.setState({ waterTank: e.target.value });
                    }}
                  >
                    <option value="Yes">Available</option>
                    <option value="No">Not Available</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Generator</label>
                  <select
                    className="select-group"
                    id="gen"
                    onChange={e => {
                      this.setState({ generatorAvailable: e.target.value });
                    }}
                  >
                    <option value="Yes">Available</option>
                    <option value="No">Not Available</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>House Price</label>
                  <input
                    type="number"
                    defaultValue="200000"
                    className="select-group"
                    id="price"
                    placeholder="0.00ETB"
                    onChange={e => {
                      this.setState({ housePrice: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>Built Year</label>
                  <input
                    type="number"
                    defaultValue="2018"
                    className="select-group"
                    id="builtYear"
                    onChange={e => {
                      this.setState({ builtYear: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>Build Square Meter</label>
                  <input
                    type="number"
                    defaultValue="200"
                    className="select-group"
                    id="bsm"
                    placeholder="200km"
                    onChange={e => {
                      this.setState({ buildingSquareMeter: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>Compaund Square Meter</label>
                  <input
                    type="number"
                    defaultValue="400"
                    className="select-group"
                    id="csm"
                    placeholder="200km"
                    onChange={e => {
                      this.setState({ CompoundSquareMeter: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>change Current Location?</label>
                  <ButtonContainer
                    cart
                    defaultValue="400"
                    className="select-group"
                    id="csm"
                    placeholder="200km"
                    data-tip="If you want to change the location of the house please click this button and when you get 
                    map opened zoom to the location you want the click on marker around your location"
                  >
                    Brouse Location
                  </ButtonContainer>
                </div>
                <div className="input-group">
                  <label>Choose Photo</label>
                  <input
                    type="file"
                    className="input-group-file"
                    id="housePhoto"
                    onChange={e => {
                      console.log(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <label>House Describtion</label>
                  <textarea
                    className="select-group"
                    id="houseDesc"
                    rows="3"
                    onChange={e => {
                      this.setState({ houseDescription: e.target.value });
                    }}
                  ></textarea>
                </div>
                <div className="btn-container-reg">
                  <div className="btn-submit-my">
                    <button
                      type="button"
                      className="btn btn-primary mb-2"
                      onClick={this.handleRegistration}
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
              </form>
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}
