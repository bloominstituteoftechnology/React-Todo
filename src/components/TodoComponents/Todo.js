import React from "react";
import './Todo.css';

function Todo1(props) {
  return <li onClick={() => {props.complete(props.todo3.id)}} className={props.todo3.completed ? 'completed': ''}>{props.todo3.task}</li>;
}

export default Todo1;