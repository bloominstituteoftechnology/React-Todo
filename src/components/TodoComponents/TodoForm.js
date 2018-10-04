import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input placeholder="..todo" type="text" onChange={props.handleChange}/>
            <button onClick={props.addTask}>Add Task</button>
        </form>
    )
}

export default TodoForm;