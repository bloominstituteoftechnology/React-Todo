import React from 'react'

 const ToDo = ({todo, handleTodoDbClick, index}) => {
    const {task, id, completed} = todo
    function handleDbClick(event){
        handleTodoDbClick(event, todo, completed, index)
    }
    return(
            <p onDoubleClick={handleDbClick} key={id}>{task}</p>
    )
}
export default ToDo