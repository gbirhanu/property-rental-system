import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tab extends Component {
  state = {
    classNameNavOne: "nav-link active",
    classNameNavTwo: "nav-link ",
    color1: "var(--lightBlue)",
    color2: "var(--mainDark)",
    borderbtmcolr: "#f3f3f3",
    borderbtmcolr2: "transparent"
  };
  handleChange = () => {
    this.setState(() => {
      return {
        classNameNavOne: "nav-link active",
        classNameNavTwo: "nav-link",
        color1: "var(--lightBlue)",
        color2: "var(--mainDark)",
        borderbtmcolr: "#f3f3f3",
        borderbtmcolr2: "transparent"
      };
    });
  };
  handleChangeTwo = () => {
    this.setState(() => {
      return {
        classNameNavOne: "nav-link",
        classNameNavTwo: "nav-link active",
        color1: "var(--mainDark)",
        color2: "var(--lightBlue)",
        borderbtmcolr2: "#f3f3f3",
        borderbtmcolr: "transparent"
      };
    });
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/ethiorental"
              style={{
                backgroundColor: "transparent",
                borderBottomColor: this.state.borderbtmcolr2,
                outline: "none",
                textDecoration: "none",
                color: this.state.color2
              }}
            >
              <button
                className={this.state.classNameNavOne}
                style={{
                  backgroundColor: "transparent",
                  borderBottomColor: this.state.borderbtmcolr,
                  outline: "none",
                  color: this.state.color1
                }}
                onClick={() => this.handleChange()}
              >
                House List
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ethiorental/map"
              style={{
                backgroundColor: "transparent",
                borderBottomColor: this.state.borderbtmcolr2,
                outline: "none",
                textDecoration: "none",
                color: this.state.color2
              }}
            >
              <button
                className={this.state.classNameNavTwo}
                style={{
                  backgroundColor: "transparent",
                  borderBottomColor: this.state.borderbtmcolr2,
                  outline: "none",
                  color: this.state.color2
                }}
                component={Link}
                onClick={() => this.handleChangeTwo()}
              >
                View on Map
              </button>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
