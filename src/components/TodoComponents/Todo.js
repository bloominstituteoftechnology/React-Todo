import React from 'react'
import './Todo.css'

const Todo = props => {

  
  return (
    <div>
      
      <p onClick={(e) => {
        props.toggleCompleted(e, props.completed)
        // {console.log(props, "TODO")}
        }}>
          {props.todoListItem}
      </p>
    </div>
  )
}

export default Todo;