import React from 'react'

 const ToDo = ({todo, handleTodoDbClick}) => {
    const {task, id} = todo
    
    return(
            <p onDoubleClick={handleTodoDbClick} key={id}>{task}</p>
    )
}
export default ToDo