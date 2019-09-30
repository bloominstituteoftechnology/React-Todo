import React from 'react';

const Todo = props => {
    return(
        <li 
            className={`${props.task.completed ? 'task completed' : 'task'}`}
            onClick={() => props.toggleTask(props.task.id)}
        >
           {props.task.task} 
        </li>
    )
};


export default Todo;