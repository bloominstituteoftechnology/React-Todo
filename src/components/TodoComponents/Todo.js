import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <p className={`todo-list__item ${props.className}`} onClick={props.crossTodo}>{props.inputValue}</p>
  );
}


export default Todo;