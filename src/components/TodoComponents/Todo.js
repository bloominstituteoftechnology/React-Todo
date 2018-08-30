import React from "react";


// Creating a component for the actual bulleted lists
// This will render inside of ToDoList.js
// ToDoList.js will render inside of App.js

// Using JSX to  make a <li> tag and using brackets to enclose Javascript {prop.user}
// Passing in built in object props to create "props.user" key *not value* 
function ToDo(props) {
  return <li>{props.user}</li>;
}


// Exporting

export default ToDo;

