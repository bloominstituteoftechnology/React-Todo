import React from 'react'
import './Todo.css'

const Todo = props => {

  
  return (
    <div>
      
      <p  onClick={() => props.toggleCompleted(props.todoOnProps.id)}
          className={`todo-item ${props.todoOnProps.textDecoration}`}
          todoList={props.todoOnProps.todoList}
      >
          {props.todoListItem}
      </p>
    </div>
  )
}

export default Todo;