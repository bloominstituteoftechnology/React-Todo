import React from "react";

export default function Todo(props) {
    return (
        <div onClick={() => props.toggleTodo(props.todo.id)} className={`todo${props.todo.completed ? " completed" : ""}`}>
            <p>{props.todo.name}</p>
        </div>
    )
}