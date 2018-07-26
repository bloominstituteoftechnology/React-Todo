import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <p className="todo-list__item" onClick={props.crossMe}>{props.listItem}</p>
  );
}

export default Todo;

