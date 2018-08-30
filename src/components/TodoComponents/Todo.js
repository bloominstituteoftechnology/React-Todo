import React from "react";

// this file contains the function that
// takes in the todo data and displays
// the tasks on screen

function Todo(props) {
  return (
  <li
  onClick={() => console.log(props.item.id)}>{props.item.task}</li>
);
}

export default Todo;
