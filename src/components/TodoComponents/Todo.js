import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div 
            className={`task${props.completed ? " completed" : ""}`}
            onClick={(e) => props.toggleTodo(e, props.id)}>
            <p>{props.task}</p>
            </div> 
    )
}

export default Todo;