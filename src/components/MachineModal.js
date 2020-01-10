import React, { Component } from "react";
import styled from "styled-components";
import { ResourceConsumer } from "../Resource";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class MachineModal extends Component {
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { mmodalOpen, closeMModal } = value;
          const {
            housePhoto,
            userName,
            userPhone,
            housePrice,
            driverStatus
          } = value.modalMachine;
          if (!mmodalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>owner Information</h5>
                      <img
                        src={housePhoto}
                        className="img-fluid"
                        alt="House"
                        width="200"
                        height="200"
                      />
                      <h5>Machnine With Driver: {driverStatus}</h5>
                      <h5 className="">price : ${housePrice}</h5>
                      <h5 className="text-title text-upper text-muted mt-3 mb-2">
                        Owned By:
                        <span className="text-uppercase">{userName}</span>
                      </h5>
                      <h5 className="">Phone : {userPhone}</h5>

                      <Link to="/ethiorental/machinery">
                        <ButtonContainer onClick={() => closeMModal()}>
                          Back To List
                        </ButtonContainer>
                      </Link>
                      <br />
                      <ButtonContainer
                        cart
                        className="mt-3 ml-3"
                        onClick={() => closeMModal()}
                      >
                        Close
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </ModalContainer>
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
