import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
.completed-task{
    text-decoration: line-through;
}
`
const ToDo = ({ todo, handleTodoDbClick, clearCompletedTodos }) => {
    const { task, id } = todo
    function handleDbClick(event) {
        handleTodoDbClick(event, id)
    }
    return (
        <Styles>
            <p onDoubleClick={handleDbClick} key={id}>{task}</p>
        </Styles>
    )
}
export default ToDo