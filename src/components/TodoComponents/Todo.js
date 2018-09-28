import React from 'react';

//render each todo list task

const Todo = (props) => {
    return (
        <div onClick={props.onClick}>{props.task}</div>
    )
} 

export default Todo;