import React, { Component, Fragment } from "react";
import Title from "./Title";
import "../App.css";
import "./map.css";
import * as Property from "./Property";
export default class PropertyResgistration extends Component {
  state = {
    type: ""
  };
  handleChange = e => {
    this.setState({
      type: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Title name="Property" title="Registration" />
        <section className="container">
          {this.renderSelector()}
          <div className="top-margin-small">
            {this.renderSelectorProperty(this.state.type)}
          </div>
        </section>
      </Fragment>
    );
  }
  renderSelector() {
    return (
      <div className="property-main-section">
        <strong>Select Property</strong>
        <select onChange={this.handleChange}>
          <option value="HouseRegistration">House Registration</option>
          <option value="MachineRegistration">Machine Registration</option>
        </select>
      </div>
    );
  }
  renderSelectorProperty(selectedType) {
    if (!selectedType) {
      return <Property.HouseRegistration />;
    }
    const Prop = Property[selectedType];
    return <Prop />;
  }
}
