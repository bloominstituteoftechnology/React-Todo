import React from 'react';
import './Todo.css';

const Todo = (props) =>{
    return(
        <div class={`todo ${props.task}`}>{props.task}</div>
    )
}

export default Todo;