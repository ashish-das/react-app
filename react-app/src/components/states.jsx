import React, { Component } from "react";

class States extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Bro"
    };
  }

  onClick() {
    this.setState({ message: "Thanking for submit" });
  }

  render() {
    return (
      <div>
        <h5>{this.state.message}</h5>
        <button onClick={() => this.onClick()}>Subscribe</button>
      </div>
    );
  }
}

export default States;
