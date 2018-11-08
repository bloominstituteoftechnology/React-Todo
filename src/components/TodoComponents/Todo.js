import React from 'react'
import './Todo.css'

const Todo = props => {

  
  return (
    <div>
      
      <p onClick={(e) => {
        // {console.log(props)}
        props.toggleCompleted(e, props)
        }}>
          {props.todoListItem}
      </p>
    </div>
  )
}

export default Todo;