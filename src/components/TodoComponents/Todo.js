import React from 'react'

const Todo = (props) => {
  return (
    <ul>
      {props.toDoArray.map((task) => {
        return <li key={Date.now()}>{task}</li>
      })}
    </ul>
  )
}

export default Todo
