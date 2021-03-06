import React, { Component } from "react";

class TextCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onMouseOver={this.incrementCounter}>Clicked {count} times </h1>
      </div>
    );
  }
}

export default TextCounter;
