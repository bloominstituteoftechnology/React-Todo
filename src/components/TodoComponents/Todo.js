import React from "react";
import './Todo.css';

const Todo = props => {
    return (
        <li>{props.item.task}</li>
    )
}

export default Todo;