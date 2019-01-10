import React from 'react'

const TodoForm = props =>{
    return(
        <form onSubmit={props.addNewToDo}>
        <h2 className="titles">Add a New Task</h2>
            <input 
            value={props.task}
            type="text"
            placeholder="Enter a New Todo!"
            name="task"
            onChange={props.handleChanges}
            className="new-todo-input"
            />
            <div class="buttons-div">
                <button className="button" onClick={props.addNewToDo}>+</button>
                <button className="button" onClick={props.removeCompleted}>-</button>
            </div>
        </form>
    )
}

export default TodoForm