import React from 'react';

const Todo = props => {
  return(
    <h1
      onClick={() => props.toggleComplete(props.toDoInProps.id)}
      className={`t ${props.toDoInProps.completed}`}
    >
      {props.toDoInProps.task}
    </h1>
)};

export default Todo;
