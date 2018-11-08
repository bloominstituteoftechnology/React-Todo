import React from "react";
import './Todo.css';

const Todo = props => {
    console.log(props);

    return (
        <li onClick={() => props.markComplete(props.item)} key={props.item.id} className={props.item.class}>{props.item.task}</li>
    )
}

export default Todo;