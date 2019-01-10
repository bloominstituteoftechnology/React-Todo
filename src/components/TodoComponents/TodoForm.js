import React from 'react'

const TodoForm = props =>{
    return(
        <form onSubmit={props.addNewToDo}>
        {/* <h4 className="titles">Add a New Task</h4> */}
            <input 
            value={props.task}
            type="text"
            placeholder="Enter a New Todo!"
            name="task"
            onChange={props.handleChanges}
            className="new-todo-input"
            />
            <div class="buttons-div">
                <button className="add button" onClick={props.addNewToDo}>Add</button>
                <button className="clear button" onClick={props.removeCompleted}>Clear</button>
            </div>
        </form>
    )
}

export default TodoForm