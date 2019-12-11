import React, { Component } from "react";
import { ResourceConsumer } from "../Resource";
import MapDetail from "./MapDetail";
export default class HouseMap extends Component {
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const mapContent = { item: value.items, type: "house" };
          return (
            <main>
              {" "}
              {value.isLoaded ? (
                <MapDetail content={mapContent} />
              ) : (
                "Loading"
              )}{" "}
            </main>
          );
        }}
      </ResourceConsumer>
    );
  }
}
