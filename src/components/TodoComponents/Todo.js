import React from 'react';

const Todo = props => {
    return (
        <h3 
            onClick={() => props.completeTask(props.taskOnProps.id)} 
            className={`todo-item ${props.taskOnProps.completed}`}
        >
            {props.taskOnProps.taskName}
        </h3> 
    )
};

export default Todo;

// style={{ textDecoration: "line-through" }}