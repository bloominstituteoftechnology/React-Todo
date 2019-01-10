import React from 'react'

const TodoForm = props =>{
    console.log(props.task)
    return(
        <form onSubmit={props.addNewToDo}>
            <input 
            value={props.task}
            type="text"
            placeholder="Enter a New Todo!"
            name="task"
            onChange={props.handleChanges}
            />
            <button onClick={props.addNewToDo}> Add Todo</button>
            <button onClick={props.removeCompleted}>Remove Completed </button>
        </form>
    )
}

export default TodoForm