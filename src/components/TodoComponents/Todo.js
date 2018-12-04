import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div>
      {props.taskName.task}
    </div>
  );
};

export default Todo;
