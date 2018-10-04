import React from 'react';

const Todo = props => {
  return (
    <p id={props.id} style={props.completed ? {textDecoration: 'line-through'} : null }
      onClick={props.toggleComplete}>
      {props.task}
    </p>
  );
}

export default Todo;
