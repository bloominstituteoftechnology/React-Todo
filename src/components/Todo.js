import React from 'react'

const Todo = props => {
    return (
        <div
        onClick={() => props.toggleTask(props.item.id)}
        className={`task${props.item.completed ? " completed" : ""}`}
    >
        <p>{props.item.task}</p>
    </div>
    );
};

export default Todo