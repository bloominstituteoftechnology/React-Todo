import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div>
      task: {props.data.task}
    </div>
  )
};

export default Todo;
