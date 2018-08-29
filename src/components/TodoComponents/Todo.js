import React from "react";

// this file contains the function that
// takes in the todo data and displays
// the tasks on screen

function Todo(props) {
  return <li>{props.item}</li>;
}

export default Todo;
