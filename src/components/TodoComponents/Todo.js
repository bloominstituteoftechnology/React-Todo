import React from 'react';
import './Todo.css';

const Todo = props =>{
  return (
    <div>
      <p>{props.todoItem}</p>
    </div>
  );
};

export default Todo;
