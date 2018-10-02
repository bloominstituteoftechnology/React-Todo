import  React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <p className="todo-item" id={props.id} >{props.task}</p>
    )
}

export default Todo;

