import React from 'react';

const Task = (props) => {
    return (
        <>
        <div
            className={`task${props.task.completed ? " completed" : " initial"}`}>
            onClick={ () => props.toggleTask(props.task.id) }
        </div>
            <p>{props.task.name}</p>
        </>
    )
}