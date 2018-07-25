import React from 'react';
import './Todo.css';

const Todo = props => {
  let strike = props.item.completed ? 'completed' : null;
  return(
    <div className={`todo-item ${strike}`}>
      {props.item.task}
    </div>
  )
}

export default Todo;
