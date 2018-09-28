import React from "react";

const Todo = (props) => {
  return ( 
  <h3 style={props.current_todo.completed ? { textDecoration: 'line-through'} : null } onClick={() => props.ToggleComplete(props.current_todo.id)}> {props.current_todo.task} </h3>
      );
  };
   export default Todo;
