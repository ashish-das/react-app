import React from "react";

// const Greet = function greet() {
//   return <h1>Hello Ashish</h1>;
// };

const Greet = props => {
  return <h1>Hello {props.name}</h1>;
};

export default Greet; // default export
