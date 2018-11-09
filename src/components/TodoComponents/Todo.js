import React from "react";
import './Todo.css';

const Todo = props => {

    return (
        <p onClick={() => props.markComplete(props.item)} key={props.item.id} className={props.item.class}>{props.item.task}</p>
    )
}

export default Todo;