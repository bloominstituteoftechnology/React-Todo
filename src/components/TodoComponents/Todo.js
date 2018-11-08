import React from "react";
import './Todo.css';

const Todo = props => {
    console.log(props);

    return (
        <li onClick={props.markComplete}>{props.item.task}</li>
    )
}

export default Todo;