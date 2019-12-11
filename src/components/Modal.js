import React, { Component } from "react";
import styled from "styled-components";
import { ResourceConsumer } from "../Resource";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const {
            housePhoto,
            userName,
            userPhone,
            housePrice,
            serviceType
          } = value.modalHouse;
          if (!modalOpen) {
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
                      <h5>Item added to cart</h5>
                      <img
                        src={housePhoto}
                        className="img-fluid"
                        alt="product"
                      />
                      <h5>House For: {serviceType}</h5>
                      <h5 className="">price : ${housePrice}</h5>
                      <h5 className="text-title text-upper text-muted mt-3 mb-2">
                        Owned By:
                        <span className="text-uppercase">{userName}</span>
                      </h5>
                      <h5 className="">Phone : {userPhone}</h5>

                      <Link to="/ethiorental">
                        <ButtonContainer onClick={() => closeModal()}>
                          Back To List
                        </ButtonContainer>
                      </Link>
                      <br />
                      <ButtonContainer
                        cart
                        className="mt-3 ml-3"
                        onClick={() => closeModal()}
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
