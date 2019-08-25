import React, { Component } from "react";
import Person from "./personComponentHtml";

class ListRendering extends Component {
  render() {
    const persons = [
      {
        id: 1,
        name: "Ashish",
        age: 25,
        skill: "FSD"
      },
      {
        id: 2,
        name: "Yash",
        age: 25,
        skill: "Tester"
      }
    ];

    //The best way to do is create a separte compent to render the html
    // const personsList = persons.map(person => (
    //   <h2>
    //     I am {person.name}.I am {person.age} old with the skill {person.skill}
    //   </h2>
    // ));

    const personsList = persons.map(person => (
      <Person person={person} key={person.id}>
        I am {person.name}.I am {person.age} old with the skill {person.skill}
      </Person>
    ));
    return (
      //   <div>
      //     {persons.map(person => (
      //       <h2>{person.name}</h2>
      //     ))}
      //   </div>
      <div>{personsList}</div>
    );
  }
}

export default ListRendering;
