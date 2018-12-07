import React from 'react';
import "./Todo.css"

const Todo = props => {
  
  return <li onClick={event => {if (props.todo.completed === false) {props.todo.completed = true}else {props.todo.completed = false} (props.crossOut(event))} }>{props.todo.task}</li>
  
}

export default Todo