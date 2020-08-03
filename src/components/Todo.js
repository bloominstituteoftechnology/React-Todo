import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  .taskcompleted {
    text-decoration: line-through;
    background-color: blue;
  }
`

const Todo = props => {
  return (
    <StyledDiv
      onClick={() => props.toggleTask(props.task.id)}
      className={`task${props.task.completed ? ' completed' : ''} `}
    >
      <p>{props.task.task}</p>
    </StyledDiv>
  )
}

export default Todo