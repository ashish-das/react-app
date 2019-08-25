import React, { Component } from "react";
import Greet from "./functionalComponent";
import Welcome from "./classComponent";
import States from "./states";
import EventBinding from "./eventBinding";
import ParentComponent from "./parentComponent";
import ConditionalRendering from "./conditionalRendering";
import ListRendering from "./listRendering";
import RegisterationForm from "./formBasic";
import Portals from "./portals";
import ErrorComponent from "./error";
import ErrorBoundry from "./errorBoundry";
import ClickButton from "./hoc";
import TextCounter from "./hoc2";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increment() {
    // this.setState({
    //   counter: this.state.counter + 1
    // });

    //if you want to change the state value which is dependent on the previous state then do this way
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <React.Fragment>
        {/* <Greet name="Ashish" />
        <Welcome countryName="India" />
        <States />
        <div>Counter Value is {this.state.counter}</div>
        <button className="btn btn-primary" onClick={() => this.increment()}>
          Submit
        </button>
        <EventBinding />
        <ParentComponent /> */}

        {/* <ConditionalRendering /> */}
        {/* <ListRendering /> */}
        {/* <RegisterationForm /> */}
        {/* <Portals /> */}
        {/* <ErrorBoundry>
          <ErrorComponent heroName="Batman" />
          <ErrorComponent heroName="SpyderMan" />
          <ErrorComponent heroName="Joker" />
        </ErrorBoundry> */}
        <ClickButton />
        <TextCounter />
      </React.Fragment>
    );
  }
}

export default Counter;
