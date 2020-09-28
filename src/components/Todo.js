import React from 'react'
import styled from 'styled-components'

const StyledTodoDiv = styled.div`
    .todo{
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .todocompleted{
        text-decoration: line-through
    }
`

const Todo = props =>{
    return (
        <StyledTodoDiv
            onClick={() => props.toggleTodo(props.todo.id)}
            className='tododiv'
        >
            <p className={`todo${props.todo.completed ? "completed" : ""}`}>{props.todo.name}</p>
        </StyledTodoDiv>
    )
}

export default Todo;