import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <h1
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </h1>
  );
};

export default Todo;