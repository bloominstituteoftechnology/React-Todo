import React from 'react';
import './Todo.css'

const Todo = (props) => {
    console.log(props);
    return(
        <li> {props.todo} </li>
    )
}

export default Todo;
