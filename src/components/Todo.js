import React from "react";
import './Todo.css'

const Todo = (props) => {
  return (
    <li
      className={`item${props.item.completed ? " done" : ""}`}
      onClick={() => props.handleComplete(props.item.id)}
    >
      {props.item.task}
    </li>
  )
}

export default Todo;