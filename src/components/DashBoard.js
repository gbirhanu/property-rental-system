import React, { Component } from "react";
import { ResourceConsumer } from "../Resource";

export default class DashBoard extends Component {
  render() {
    return <ResourceConsumer>{value => console.log(value)}</ResourceConsumer>;
  }
}
