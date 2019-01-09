import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input placeholder="Add Task" value={props.taskText} onChange={props.handleChange}/>
            <button onClick={props.handleSubmit}>Add Task</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm