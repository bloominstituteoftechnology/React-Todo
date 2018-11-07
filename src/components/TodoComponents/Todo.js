import React from 'react';

const Todo = props => {
    return (
        <h1>
            {props.task.taskName}
        </h1>
    )
}

export default Todo;