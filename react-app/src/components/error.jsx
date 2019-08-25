import React, { Component } from "react";

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.heroName === "Joker") {
      throw new Error("Not a Component");
    }
    return <div>{this.props.heroName}</div>;
  }
}

export default ErrorComponent;
