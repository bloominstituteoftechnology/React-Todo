import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input placeholder="..todo" type="text" onChange={props.handleChange} name="todo" value={props.value}/>
            <button onClick={props.addTask}>Add Task</button>
            <button onClick={props.handleClearTodos}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;