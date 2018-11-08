import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
    <p className="todo-item" onClick={() => props.changeStyle(props.todoData.id)} className={`todo-item ${props.todoData.completed}`}>
    {props.todoData.task}</p>);
  };
  
  export default Todo;