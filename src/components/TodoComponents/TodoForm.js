import React from 'react';

const TodoForm = props => {
    return(
        <form className="todo-form" onSubmit={props.handleSubmit}>
            <input placeholder="Add Task" value={props.taskText} onChange={props.handleChange}/>
            <div className="form-buttons">
                <button onClick={props.handleSubmit}>Add Task</button>
                <button onClick={props.clearCompleted}>Clear Completed</button>
            </div>
        </form>
    )
}

export default TodoForm