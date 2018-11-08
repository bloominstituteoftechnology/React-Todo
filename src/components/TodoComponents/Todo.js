import React from "react";
import './Todo.css';

const Todo = props => {
  return (
    <p className={`list-text ${props.toDoItem.completed}`} onClick={() => props.changeStyle(props.toDoItem.id)} >{props.toDoItem.task}</p>
  );
};

export default Todo;

