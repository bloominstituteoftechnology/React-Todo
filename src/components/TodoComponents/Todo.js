import React from 'react';

const Todo = props => {
    return (
        <div
            className={`item${props.todoOnProps.completed ? ' completed' : ''}`}
            onClick={() => props.toggleItem(props.todoOnProps.idNumber)}
        >
            <p>{props.todoOnProps.taskName}</p>
        </div>
    );
};

export default Todo;