import React, { Component } from "react";
import Title from "../Title";
import BrowserMap from "../BrowseMap";
import AddMoreMachineryPhoto from "./AddMoreMachineryPhoto";
import { ResourceConsumer } from "../../Resource";
import styled from "styled-components";
import { ButtonContainer } from "../Button";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
export default class MachineRegistration extends Component {
  state = {
    userId: "",
    userName: "",
    userPhone: "",
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

  render() {
    return (
      <ResourceConsumer>
        {value => {
          const {
            userId,
            userName,
            userPhone,
            machineopenAddMorePhoto,
            openMap,
            isHidden,
            mainFormOpenClose,
            fmachineopenAddMorePhoto,
            browseMap,
            closeMapOpenForm,
            houseLatitude,
            houseLongitude,
            handleMachineRegistration,
            getGeoLocaion
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
          } else if (machineopenAddMorePhoto) {
            return <AddMoreMachineryPhoto id={this.state.houseId} />;
          } else if (mainFormOpenClose) {
            return (
              <section className="house-main-section">
                <ReactTooltip />

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
                        this.setState({ machineType: e.target.value }, () =>
                          getGeoLocaion()
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
                    <strong>Machine Model</strong>
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
                    <strong>With Driver ?</strong>
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
                    <strong>Manufactured Year</strong>
                    <input
                      type="number"
                      defaultValue="2018"
                      className="select-group"
                      id="builtYear"
                      onChange={e =>
                        this.setState({ builtYear: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <strong>Machine Price</strong>
                    <input
                      type="number"
                      className="select-group"
                      id="bsm"
                      placeholder="0.00ETB"
                      onChange={e =>
                        this.setState({ housePrice: e.target.value })
                      }
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
                    />
                  </div>
                  <div className="input-group">
                    <strong>Machine Description</strong>
                    <textarea
                      className="select-group"
                      id="houseDesc"
                      rows="3"
                      onChange={e =>
                        this.setState({ houseDescription: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="btn-container-reg">
                    <div className="btn-submit-my">
                      <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        onClick={() =>
                          handleMachineRegistration(
                            userId,
                            userName,
                            userPhone,
                            this.state.machineType,
                            this.state.machineModel,
                            this.state.driverStatus,
                            this.state.builtYear,
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
                        onClick={() => fmachineopenAddMorePhoto()}
                      >
                        Add More Photo
                      </button>
                    </div>
                  </div>
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
