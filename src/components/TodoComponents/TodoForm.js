import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input type="text" value={props.todoInput} />
            <button onClick={props.addTask}>Add Task</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;