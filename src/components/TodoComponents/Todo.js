import React from 'react';
import './Todo.css'
const Todo = (props) => {
    return (
        <p onClick={props.itemClicked} className={props.completed ? 'completed' : null} onClick={() => props.itemClicked(props.id)}>{props.task}</p>
    )
}

export default Todo;