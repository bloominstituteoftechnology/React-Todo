import React from 'react';

const Todo = props => {
    return (
        <h3 
            onClick={() => props.completeTask(props.taskOnProps.id)} 
            style={{ textDecoration: "line-through" }}
        >
            {props.taskOnProps.taskName}
        </h3> 
    )
};

export default Todo;