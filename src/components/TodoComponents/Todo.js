import React from 'react'

export default function Todo(props) {
  console.log(props)
  return (
    <div>
    <h1>{props.todo.task}</h1>
    <h1>{props.todo.id}</h1>
    </div>
  )
}
