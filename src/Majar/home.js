import React, { Component } from "react";
import Appbar from "../Modules/appbar";
import Drawer1 from "../Modules/drawer";

export default class home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Appbar name="home" />
        <Drawer1 name="dhome" />
      </div>
    );
  }
}
