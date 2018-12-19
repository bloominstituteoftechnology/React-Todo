import React from 'react';

const Todo = props => {
    return(
        <h2 key={props.taskId}>{props.taskName}</h2>
    )
}

export default Todo;