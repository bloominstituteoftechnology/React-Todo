import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div>
            <p>{props.task}</p>
            <p>{props.bill}</p>
        </div>
    )
}

export default Todo;