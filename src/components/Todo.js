import React from 'react'
import styled from 'styled-components'

const P = styled.p`
.completed-task{
    text-decoration: line-through;
}
`
const ToDo = ({ todo, handleTodoDbClick, index }) => {
    const { task, id, completed } = todo
    function handleDbClick(event) {
        handleTodoDbClick(event, todo, completed, index)
    }
    return (
            <P onDoubleClick={handleDbClick} key={id}>{task}</P>
    )
}
export default ToDo