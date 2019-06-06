import React from 'react';

import './Todo.css';

function Todo(props) {
  return (
    <div className={props.className} onClick={_ => props.completeTodo(props.myID)}>
      <h1 className="todo-title">{props.todo.task}</h1>
      <p className="date">{props.date}</p>
    </div>
    
  )
}

export default Todo;