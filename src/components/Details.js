import React, { Component } from "react";
import { ResourceConsumer } from "../Resource";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import "./photomore.css";
import Title from "./Title";
export default class Details extends Component {
  render() {
    return (
      <ResourceConsumer value>
        {value => {
          const {
            houseId,
            houseType,
            housePhoto,
            houseDescription,
            houseConstType,
            noofRoom,
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
            housePrice
          } = value.detail;
          if (!houseId) {
            return <Link to="/ethiorental" />;
          }
          return (
            <div className="include-title">
              <Title name="Detail" title="Information" />

              <div className="main-holder-detail">
                <div className="photo-title-container">
                  <div className="house-type-container">
                    <div className="col-10 mx-auto text-center text-slanted text-blue">
                      <h1>{houseType}</h1>
                    </div>
                  </div>
                  <div className="my-photo-house">
                    <img
                      src={housePhoto}
                      onClick={() => value.openPhotoModal(houseId)}
                      className="img-fluid"
                      alt="Click her to see more"
                      width="350"
                      height="100"
                    />
                  </div>
                </div>
                <div className="info-holder">
                  <p>
                    <span className="text-blue">Proprty Type:</span> {houseType}
                  </p>
                  <p>
                    <span className="text-blue">Constructed By:</span>{" "}
                    {houseConstType}
                  </p>
                  <p>
                    <span className="text-blue"> Bed Room: </span>
                    <strong>{noofRoom}</strong>
                  </p>
                  <p>
                    {" "}
                    <span className="text-blue">Half Bath Room:</span>{" "}
                    {halfBath}
                  </p>
                  <p>
                    <span className="text-blue">Full Bath room:</span>{" "}
                    {fullBath}
                  </p>
                  <p>
                    <span className="text-blue">Servant Quarter:></span>{" "}
                    {servantQuarter}
                  </p>
                  <p>
                    <span className="text-blue">Servant Quarter Bathroom:</span>{" "}
                    {servantQuarterBath}
                  </p>
                  <p>
                    <span className="text-blue">Kitchen :</span>{" "}
                    {modernKitchen === "Yes" ? "Available" : "Not Available"}
                  </p>
                  <p>
                    <span className="text-blue">Parking Space:</span>{" "}
                    {parkingSpace}
                  </p>
                  <p>
                    <span className="text-blue">Water Tank:</span>{" "}
                    {waterTank === "Yes" ? "Available" : "Not Available"}
                  </p>
                  <p>
                    <span className="text-blue">Generator:</span>{" "}
                    {generatorAvailable === "Yes"
                      ? "Available"
                      : "Not Available"}
                  </p>
                  <p>
                    <span className="text-blue">Built year:</span>{" "}
                    <strong>{builtYear}</strong>{" "}
                  </p>
                  <p>
                    <span className="text-blue">Building Square Meter:</span>
                    <strong>{buildingSquareMeter}</strong>{" "}
                  </p>
                  <p>
                    <span className="text-blue">Compound Square Meter:</span>{" "}
                    <strong>{CompoundSquareMeter}</strong>{" "}
                  </p>

                  <h4 className="text-blue">
                    <strong>
                      Price: <span className="mr-3">ETB</span>
                      {housePrice}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weihgt-bold mt-3 mb-0">
                    More Info About the House
                  </p>
                  <p className="text-muted lead">{houseDescription}</p>
                  <div>
                    <Link to="/ethiorental">
                      <ButtonContainer>Back to List</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      className="ml-3"
                      cart
                      onClick={() => value.openModal(houseId)}
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
