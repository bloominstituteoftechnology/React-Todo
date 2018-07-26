import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      onClick={() => props.addLineThrough(props.data.id)} 
      className={`${props.data.completed ? "line-through" : null}`}
      >
      {props.data.task}
    </div>
  )
};

export default Todo;
