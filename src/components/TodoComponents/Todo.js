import React from "react";

//Displays a Todo item and calls ToggleComplete parent method
const Todo = props => {
  return (
    <p id={props.id} 
      onClick={props.toggleComplete}>
      {props.task}
    </p>
  );
}

export default Todo;
