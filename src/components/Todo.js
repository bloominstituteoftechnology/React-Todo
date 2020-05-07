import React from 'react';

const Todo = props => {
    const handleClick = e => {
        props.toggComplete(props.task.id)
    }
    
    return(
        <div
            onClick={handleClick}
            className={`task${props.task.complete ? ' complete' : ''}`}
        >
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;