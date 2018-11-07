import React from 'react';

const Todo = props => {
  return (
    <li className={props.todo.completed ? 'complete' : 'notComplete'}>{props.todo.task}</li>
  );
};

export default Todo;