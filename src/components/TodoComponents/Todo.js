import React from 'react';

const ToDo = (props) => {
    return (
        <div
        onClick={event => {
            console.log(event);
            props.toggleCompleted(props.task.id);
        }}
        className = {`task${props.task.completed ? " completed" : ""}`}
        >
            <h2>{props.task.task}</h2>
        </div>
    );
}

export default ToDo;