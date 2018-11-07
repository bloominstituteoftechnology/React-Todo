import React from "react";
import './Todo.css';

const Todo = props => {
    return (
        <li>{props.item.todo}</li>
    )
}

export default Todo;