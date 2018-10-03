import React from "react";
import "./Todo.css";

let Todo = (props) => {
    return (
        <li onClick={props.completeTask} 
            id={props.todo.id}
            style={props.todo.completed ? {textDecoration: 'line-through', listStyleType: 'disc'} : {textDecoration: 'none', listStyleType: 'circle'}}>
            {props.todo.task}
        </li>
    )
}

export default Todo;