import React from 'react';
import "./Todo.css"

const Todo = props => {
  
  return <li onClick={event => props.crossOut(event)} >{props.todo.task}</li>
  
}

export default Todo