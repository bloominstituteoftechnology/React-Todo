import React from 'react';


const Todo = props => {
  return (
    <div className="todo-item" id={props.key}>{props.todoText}</div>
  )
}

export default Todo;