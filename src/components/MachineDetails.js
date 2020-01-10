import React, { Component } from "react";
import { ResourceConsumer } from "../Resource";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import "./photomore.css";
import Title from "./Title";
export default class MachineDetails extends Component {
  render() {
    return (
      <ResourceConsumer value>
        {value => {
          const {
            houseId,
            housePhoto,
            builtYear,
            machineType,
            machineModel,
            houseDescription,
            driverStatus,
            housePrice
          } = value.mdetail;
          if (!houseId) {
            return <Link to="/ethiorental/machinery" />;
          }
          return (
            <div className="include-title">
              <Title name="Detail" title="Information" />

              <div className="main-holder-detail">
                <div className="photo-title-container">
                  <div className="house-type-container">
                    <div className="col-10 mx-auto text-center text-slanted text-blue">
                      <h1>{machineType}</h1>
                    </div>
                  </div>
                  <div className="my-photo-house">
                    <img
                      src={housePhoto}
                      onClick={() => value.openPhotoModalMachine(houseId)}
                      className="img-fluid"
                      alt="Click her to see more"
                      width="350"
                      height="100"
                    />
                  </div>
                </div>
                <div className="info-holder">
                  <p>
                    <span className="text-blue">Proprty Type:</span>{" "}
                    {machineType}
                  </p>
                  <p>
                    <span className="text-blue">Machine Model</span>{" "}
                    {machineModel}
                  </p>

                  <p>
                    <span className="text-blue">Driver Available:</span>{" "}
                    {driverStatus === "Yes" ? "Available" : "Not Available"}
                  </p>
                  <p>
                    <span className="text-blue">Built year:</span>{" "}
                    <strong>{builtYear}</strong>{" "}
                  </p>
                  <h4 className="text-blue">
                    <strong>
                      Price: <span className="mr-3">ETB</span>
                      {housePrice}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weihgt-bold mt-3 mb-0">
                    More Info About the Machine
                  </p>
                  <p className="text-muted lead">{houseDescription}</p>
                  <div>
                    <Link to="/ethiorental/machinery">
                      <ButtonContainer>Back to List</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      className="ml-3"
                      cart
                      onClick={() => value.openMModal(houseId)}
                    >
                      Contact Owner
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ResourceConsumer>
    );
  }
}
