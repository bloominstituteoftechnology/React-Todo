import React from 'react'

 const ToDo = ({todo, handleTodoDbClick}) => {
    const {task, id} = todo
    debugger
    return(
            <p onDoubleClick={handleTodoDbClick} key={id}>{task}</p>
    )
}
export default ToDo