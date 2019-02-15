import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
    width: 100%;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #251635;
    color: #d6ccd6;
    margin: 10px 0;
    list-style: none;
    padding: 10px;
    text-decoration-line: ${props =>
        props.completed ? 'line-through' : 'none'};
`

const Todo = props => {
    return (
        <StyledLi
            id={props.id}
            className={props.style}
            completed={props.completed}
            onClick={() =>
                props.toggleTask(props.id, props.tasks, props.setTasks)
            }>
            {props.text}
        </StyledLi>
    )
}

export default Todo
