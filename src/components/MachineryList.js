import React, { Component } from "react";
import Machine from "./Machine";
import Title from "./Title";
import { ResourceConsumer } from "../Resource";
import Default from "./ConnecctionError";
export default class MachineryList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Machinery" title="List" />
            <div className="row">
              <ResourceConsumer>
                {value => {
                  if (
                    value.isMachineLoaded &&
                    value.machinery.result !== undefined
                  ) {
                    if (value.error) {
                      return <Default />;
                    } else {
                      return value.machinery.result.map(house => {
                        return <Machine key={house.houseId} house={house} />;
                      });
                    }
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
