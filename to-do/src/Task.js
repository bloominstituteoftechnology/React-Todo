import React from 'react';

const Task = (props) => {
    console.log("Single Task: ", props.task);
    return (
        <div 
            className = {`task${props.task.complete ? ' completed' : ''}`}
            onClick = {() => props.toggleTask(props.task.id)}    
        >
        <p>{props.task.name}</p>
        </div>
    )
}

export default Task;