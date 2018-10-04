import React from "react";
import "./Todo.css";

let Todo = (props) => {
    return (
        <li onClick={props.completeTask} 
            id={props.todo.id}
            className={props.todo.completed ? "complete" : "notComplete"}>
            {props.todo.task}
        </li>
    )
}

export default Todo;