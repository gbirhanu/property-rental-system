import React, { Component } from "react";
import { ResourceConsumer } from "../Resource";
import MapDetail from "./MapDetail";
export default class MachineMapList extends Component {
  render() {
    return (
      <ResourceConsumer>
        {value => {
          const mapContent = { item: value.machinery, type: "machine" };
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
