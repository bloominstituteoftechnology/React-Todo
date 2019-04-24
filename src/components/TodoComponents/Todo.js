import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <div className="todo-item">
      <p>{props.item.task}</p>
    </div>
  )
};

export default Todo;