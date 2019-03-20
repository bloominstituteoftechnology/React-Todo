import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input
                type="text"
                value={props.task}
                task="task"
                placeholder="Task"
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>

    )
}

export default TodoForm;