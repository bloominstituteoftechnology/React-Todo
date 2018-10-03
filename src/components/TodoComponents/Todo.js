import React from "react";

let Todo = (props) => {
    return (
        <li onClick={props.completeTask} 
            id={props.todo.id}
            style={props.todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
            {props.todo.task}
        </li>
    )
}

export default Todo;