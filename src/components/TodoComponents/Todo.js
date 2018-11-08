import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <p 
            onClick={() => props.completeTask(props.taskOnProps.id)} 
            className={`todo-item ${props.taskOnProps.completed}`}
        >
            {props.taskOnProps.taskName}
        </p> 
    )
};

export default Todo;