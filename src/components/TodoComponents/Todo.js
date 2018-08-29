import React from 'react'

const Todo = (props) => {
  return (
    <div className="Todo">
      <p>{props.item.task}</p>
      <p>{props.item.id}</p>
      <p>Completed: {props.item.completed ? "yes": "no"}</p>
    </div>
  )
}

export default Todo