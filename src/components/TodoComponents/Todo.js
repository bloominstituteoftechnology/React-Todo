import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div onClick={() => props.changeComplete(props.todotodo.id)}
             className={`toggle-complete ${props.todotodo.completed}`}
        >
            {props.todotodo.task}
        </div> 
    )
} 

export default Todo;