import React from 'react';

function TodoForm(props) {
    console.log(props)
    return (
        <form>
            <input
                type="text"
                value={props.task}
                name="task"
                placeholder="Task"
                onChange={props.handleChanges}

            />
            <button onClick={props.updateTodoList}>Add Todo</button>
            <button>Clear Completed</button>
        </form>

    )
}

export default TodoForm;