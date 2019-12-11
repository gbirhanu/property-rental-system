import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-5">404</h1>
            <h1>Error</h1>
            <h2>Connection is time out</h2>
            <h3>
              {" "}
              the requested url{" "}
              <span className="text-danger">
                <p> </p> {this.props.location.pathname}{" "}
              </span>{" "}
              Check your connection
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
