import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Portals</h1>,
      document.getElementById("portalRoot")
    );
  }
}

export default Portals;
