import React from "react";

// this file contains the function that
// takes in the todo data and displays
// the tasks on screen

const Todo = (props) => {
  return (
    <li>{props.item.task}</li>
  );
}

export default Todo;
