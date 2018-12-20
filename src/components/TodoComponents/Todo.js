import React from 'react';

const Todo = props => {
    return(
        <h2 
        className={'todo-item'}
        key={props.taskId} 
        onClick={(e) => props.markCompleted(e, props.taskId)}
        >
        {props.taskName}
        </h2>
    )
}

export default Todo;