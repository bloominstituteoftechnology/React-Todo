import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <input onChange={props.onChangeInput} />
            <button>Add Task to your "To Do" List!</button>
            <button>Clear Completed Tasks!</button>
        </div>
    )
}

export default TodoForm;