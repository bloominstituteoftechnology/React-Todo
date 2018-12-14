import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div onClick={() => props.changeComplete(props.todo.id)}
             className={`toggle-complete ${props.todo.completed}`}
        >
            {props.todo.task}
        </div> 
    )
} 

export default Todo;