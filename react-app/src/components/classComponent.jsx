import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h5>Welcome to {this.props.countryName}</h5>;
  }
}

export default Welcome;
