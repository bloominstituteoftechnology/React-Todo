import React from 'react';

function TodoForm(props) {

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

        </form>

    )
}

export default TodoForm;