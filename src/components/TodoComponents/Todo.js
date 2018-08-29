import React from 'react'

const Todo = (props) => {
  return (
    <div className="Todo">
      <p>{props.item.task}</p>
    </div>
  )
}

export default Todo