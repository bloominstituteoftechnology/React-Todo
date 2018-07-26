import React from 'react';
import './Todo.css';

// props and handlers

const Todo = props => {
  return (
    <div
      style={props.done.status ? { textDecoration: 'line-through' } : null}
      onClick={( ) => props.handleComplete(props.done.id)}
    >
        {props.done.task}
    </div>
  );
};

export default Todo;
