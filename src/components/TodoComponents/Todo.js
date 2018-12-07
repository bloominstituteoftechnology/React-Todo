import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div className="todo-item" onClick = {props.clickHandler} id={props.divID}>{props.listItem}</div>
  );
}

export default Todo;
