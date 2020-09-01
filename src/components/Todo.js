//The p tags of todo in props should go here
import React from 'react'

 const Todo = (props) => {
  return (
    <div>
  <p> {props.todo.task} </p>
  </div>
  );
};

export default Todo