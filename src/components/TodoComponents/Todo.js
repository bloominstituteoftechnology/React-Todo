import React from 'react';

function Todo(props) {

    return (
        <div
            className={`item${props.todoProp.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.todoProp.id)}
        >
            <p>{props.todoProp.task}</p>
        </div>
    )
}

export default Todo;