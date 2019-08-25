import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={() => this.props.greetHandler("child")}>Greet</button>
    );
  }
}

export default ChildComponent;
