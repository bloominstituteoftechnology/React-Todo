import React from 'react'
import './Todo.css'

const Todo = props => {
  {console.log(props, "TODO")}
  return (
    <div>
      <p onClick={props.toggleCompleted}>{props.todoListItem}</p>
    </div>
  )
}

export default Todo;