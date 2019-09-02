import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <p 
            className={`completed-${props.taskData.completed}`}
            onClick={() => props.toggleTask(props.taskData.id)}
        >
            {props.taskData.task}
        </p>
    )
    
}

export default Todo