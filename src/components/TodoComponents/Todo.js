import React from 'react'
import './Todo.css'

const Todo = props => {

  
  return (
    <div className="todo">      
      <p  onClick={() => props.toggleCompleted(props.todoOnProps.id)}
          className={`todo-item ${props.todoOnProps.textDecoration}`}
          todoList={props.todoOnProps.todoList}
          id={Date.now()}
      >
        {props.todoListItem}
      </p>
    </div>
  )
}

export default Todo;