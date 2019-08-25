import React, { Component } from "react";

class EventBinding extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello"
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Clicked"
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Has Performance Issue */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
