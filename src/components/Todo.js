import React from 'react';

const Todo = props => {
    const handleClick = e => {
        props.toggleTask(props.todo.id);
    };
    return (
        <div
        onClick={handleClick}
        className={`task${props.task.completed ? "completed" : ""}`}
        >
            <p>{props.task.name}</p>
        </div>
    );
};

export default Todo;