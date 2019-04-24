import React from 'react';
import './Todo.css';


const Todo = props => {
  console.log(props);
  return (
    <div className="todo-item">
      <p onClick={props.onMarkComplete}>{props.item.task}</p>
    </div>
  )
};

export default Todo;