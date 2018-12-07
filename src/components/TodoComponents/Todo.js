import React from 'react';
import './Todo.css';

const Todo = props =>{
  return (
    <div>{props.item.task}</div>
  );
};

export default Todo;
