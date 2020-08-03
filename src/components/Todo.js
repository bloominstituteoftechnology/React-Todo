import React from 'react'
import styled from 'styled-components'


const Todo = props => {
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      className={`task${props.task.completed ? ' completed' : ''} `}
    >
      <p>{props.task.task}</p>
    </div>
  )
}

export default Todo