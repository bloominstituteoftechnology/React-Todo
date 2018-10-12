import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.inputTextHandler}
                name = "inputText"
                value = {props.inputText}
                type="text"
                placeholder="What now?"
                >
            </input>
            <br></br>
            <button
            onClick={props.addNewTask}> 
                Add New Task
            </button>

             <button
             onClick={props.completedTask}>
                Delete Completed Task
            </button>
        </form>
    )
}

export default TodoForm; 