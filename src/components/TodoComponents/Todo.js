import React from 'react';

const Todo = props => {
    return(
        <h2 key={props.taskId} onClick={props.markCompleted}>{props.taskName}</h2>
    )
}

export default Todo;