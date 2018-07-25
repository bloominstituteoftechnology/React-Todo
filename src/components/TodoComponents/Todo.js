import React from 'react';
import './Todo.css';

const Todo = props => {
  return(
    <div className="todo-item">
      {props.item}
    </div>
  )
}

export default Todo;
