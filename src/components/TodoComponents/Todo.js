import React from 'react'
const Todo = (props) => {
  return (
    <li
      style={props.style}
      onClick={() => {
        props.handleClick(props.todo)
      }}
    >
      {props.task}
    </li>
  )
}

export default Todo
