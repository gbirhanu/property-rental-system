import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { ResourceConsumer } from "../Resource";
export default class House extends Component {
  render() {
    const { houseId, serviceType, housePhoto, housePrice } = this.props.house;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ResourceConsumer>
            {value => (
              <div className="img-container p-5">
                <a href={housePhoto} target="_blank" rel="noopener noreferrer">
                  <img
                    src={housePhoto}
                    alt="House"
                    className="card-img-top"
                    width="100"
                    height="200"
                  />
                </a>
                <Link to="/ethiorental/detail">
                  <button
                    className="cart-btn"
                    onClick={() => value.handleDetail(houseId)}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <strong>Details</strong>{" "}
                  </button>
                </Link>
              </div>
            )}
          </ResourceConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-capitalize">
              House For: {serviceType}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">ETB</span>
              {housePrice}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
