import React, { Component } from "react";
import House from "./House";
import Title from "./Title";
import Tab from "./Tab";
import { ResourceConsumer } from "../Resource";
export default class HouseList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Tab></Tab>
            <Title name="House" title="List" />
            <div className="row">
              <ResourceConsumer>
                {value => {
                  if (value.isLoaded) {
                    return value.items.result.map(house => {
                      return <House key={house.houseId} house={house} />;
                    });
                  } else {
                    return "Loading ... ";
                  }
                }}
              </ResourceConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
