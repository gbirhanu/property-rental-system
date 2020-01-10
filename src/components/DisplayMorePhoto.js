import React, { Component } from "react";
import "./photomore.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./Button";
import { ResourceConsumer } from "../Resource";

export default class DisplayMorePhoto extends Component {
  state = {
    index: 0
  };
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { morePhotoOpen } = value;
          const housePhoto = value.filteredPhotoSingel;
          if (!morePhotoOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="close-modal-button">
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    onClick={() => value.closePhotoModal()}
                  />
                </div>
                <div className="display-more-photo">
                  <div className="prev-button">
                    <ButtonContainer
                      className="btn"
                      onClick={() => {
                        let i = this.state.index;
                        if (i > 0) this.setState({ index: --i });
                        else alert("end of the photo");
                      }}
                    >
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                      </span>
                      Prev
                    </ButtonContainer>
                  </div>
                  <div className="main-photo-holder">
                    <img
                      src={housePhoto[this.state.index]}
                      alt="House"
                      width="600"
                      height="650"
                    ></img>
                    {console.log(
                      "Index: " +
                        this.state.index +
                        " " +
                        housePhoto[this.state.index]
                    )}
                  </div>
                  <div className="next-button">
                    <ButtonContainer
                      className="btn"
                      onClick={() => {
                        let i = this.state.index;
                        if (i < housePhoto.length - 1)
                          this.setState({ index: ++i });
                        else alert("End Of photo");
                      }}
                    >
                      Next
                      <span className="ml-2">
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </span>
                    </ButtonContainer>
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
