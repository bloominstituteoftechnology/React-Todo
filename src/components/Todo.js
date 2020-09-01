import React from "react";

const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`item${props.todo.completed ? " completed" : ""}`}
        >
            <p>{props.todo.task}</p>
        </div>
        
    )
}

export default Todo