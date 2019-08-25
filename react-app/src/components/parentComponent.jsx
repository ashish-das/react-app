import React, { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent Class"
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello from ${this.state.parentName} from ${childName}`);
  }

  render() {
    return <ChildComponent greetHandler={this.greetParent} />;
  }
}

export default ParentComponent;
