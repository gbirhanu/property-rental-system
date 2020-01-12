import React, { Component } from "react";
import Title from "../Title";
import InsertMorePhoto from "./InsertMorePhoto";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { ButtonContainer } from "../Button";
import BrowserMap from "../BrowseMap";
import { ResourceConsumer } from "../../Resource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
export default class HouseRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userName: "",
      userPhone: "",
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
      openAddMorePhoto: true,
      openMap: false,
      mainFormOpenClose: false
    };
  }

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
    return (
      <ResourceConsumer>
        {value => {
          const {
            userId,
            userName,
            userPhone,
            openAddMorePhoto,
            openMap,
            isHidden,
            mainFormOpenClose,
            browseMap,
            houseLatitude,
            houseLongitude,
            fopenAddMorePhoto,
            closeMapOpenForm,

            handleRegistration
          } = value;
          if (openMap) {
            return (
              <ModalContainer>
                <div className="close-modal-button">
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    onClick={() => closeMapOpenForm()}
                  />
                </div>
                <div
                  style={{
                    width: "100vw",
                    height: "70vh",
                    marginBottom: "10rem",
                    backgroundcolor: "black"
                  }}
                >
                  <BrowserMap />
                </div>
              </ModalContainer>
            );
          } else if (openAddMorePhoto) {
            return <InsertMorePhoto id={this.state.houseId} />;
          } else if (mainFormOpenClose) {
            return (
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
                      <strong>House Type</strong>
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
                      <strong>Bed Room</strong>
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
                      <strong>House Construction Type</strong>
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
                      <strong>House for</strong>
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
                      <strong>Half Bathroom</strong>
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
                      <strong>Full BathRoom</strong>
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
                      <strong>Servant Quarter</strong>
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
                      <strong>Servant Quarter Bathroom</strong>
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
                      <strong>Modern Kitchen</strong>
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
                      <strong>Parking Space</strong>
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
                      <strong>Water Tank</strong>
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
                      <strong>Generator</strong>
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
                      <strong>House Price</strong>
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
                      <strong>Built Year</strong>
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
                      <strong>Build Square Meter</strong>
                      <input
                        type="number"
                        defaultValue="200"
                        className="select-group"
                        id="bsm"
                        placeholder="200km"
                        onChange={e => {
                          this.setState({
                            buildingSquareMeter: e.target.value
                          });
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <strong>Compaund Square Meter</strong>
                      <input
                        type="number"
                        defaultValue="400"
                        className="select-group"
                        id="csm"
                        placeholder="200km"
                        onChange={e => {
                          this.setState({
                            CompoundSquareMeter: e.target.value
                          });
                        }}
                      />
                    </div>
                    <div className="input-group">
                      <strong>Change Current Location?</strong>
                      <ButtonContainer
                        cart
                        className="select-group"
                        id="bphoto"
                        data-tip="If you want to change the location of the house please click this button and when you get 
                    map opened zoom to the location you want the click on marker around your location."
                        onClick={e => {
                          browseMap(e);
                        }}
                      >
                        Brouse Location
                      </ButtonContainer>
                    </div>
                    <div className="input-group">
                      <strong>Choose Photo</strong>
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
                      <strong>House Description</strong>
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
                          onClick={() =>
                            handleRegistration(
                              userId,
                              userName,
                              userPhone,
                              this.state.houseType,
                              this.state.noofRoom,
                              this.state.houseConstType,
                              this.state.serviceType,
                              this.state.halfBath,
                              this.state.fullBath,
                              this.state.servantQuarter,
                              this.state.servantQuarterBath,
                              this.state.modernKitchen,
                              this.state.parkingSpace,
                              this.state.waterTank,
                              this.state.generatorAvailable,
                              this.state.builtYear,
                              this.state.buildingSquareMeter,
                              this.state.CompoundSquareMeter,
                              this.state.houseDescription,
                              this.state.housePrice,
                              houseLatitude,
                              houseLongitude
                            )
                          }
                        >
                          Register
                        </button>
                      </div>
                      <div className="btn-continue-add">
                        <button
                          disabled={isHidden}
                          type="button"
                          className="btn btn-primary mb-2"
                          onClick={() => fopenAddMorePhoto()}
                        >
                          Add More Photo
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            );
          }
        }}
      </ResourceConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
