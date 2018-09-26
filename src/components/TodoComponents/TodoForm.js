import React from 'react';
import "./Todo.css"


const TodoForm = (props) => {
    return (
      <div className="todoInputContainer">
        <input className="todoInput" type="text" value={props.value}/>
        <input
        type="button"
        className="addTodo"
        onClick={props.handleClick}
        text="Add Todo"
      /> <input
      type="button"
      className="clearCompleted"
      onClick={props.handleClick}
      text="Clear Completed"
    /> 
      </div>
    )
  }
  
  