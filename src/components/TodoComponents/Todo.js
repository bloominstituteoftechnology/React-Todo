import React from 'react';

const Todo = props => {
  return (
    <li onClick={() => props.handler(props.id)}>{props.task}</li>
  );
}

export default Todo;
