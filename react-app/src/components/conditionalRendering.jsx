import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false
    };
  }

  render() {
    // Using if-else stmt
    // if (this.state.isLoggedin) {
    //   return <div>Welcome Ashish</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // Using the varible method
    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome Ashish</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return message;

    //Usinf ternarry operator
    // return this.state.isLoggedin ? (
    //   <div>Welcome Ashish</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Using short-circuit method
    return this.state.isLoggedin && <div>Welcome Ashish</div>;
  }
}

export default ConditionalRendering;
