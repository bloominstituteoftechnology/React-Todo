import React from "react";

const Todo = props => {
    const handleClick = e => {
        props.toggleTodoDone(props.todo.id);
    };
    return (
        <div
            onClick={handleClick}
            className={`todo${props.todo.done ? " done" : ""}`}
            >
            <p>{props.todo.name}</p>
        </div>
    );
};

export default Todo;