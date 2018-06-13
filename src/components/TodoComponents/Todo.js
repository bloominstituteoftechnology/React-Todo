import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return(
        <li onClick={props.onClick} className="list"> {props.todo} </li>
    )
}

export default Todo;
