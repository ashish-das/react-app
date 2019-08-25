import React, { Component } from "react";

function Person({ person }) {
  return (
    <h2>
      I am {person.name}.I am {person.age} old with the skill {person.skill}
    </h2>
  );
}

export default Person;
