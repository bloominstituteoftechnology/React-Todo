import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addNewTask}>
            <input 
            type="text" 
            value={props.inputTask}
            name="inputTask"
            onChange={props.changeHandler}
            />
            <button type="submit" onClick={props.addNewTask}>Add Task</button>
            <br/>
            <button>Clear</button>
            </form>
        </div>
    )
}

export default TodoForm;