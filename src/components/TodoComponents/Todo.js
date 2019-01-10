import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div
        className={`list-body ${props.task.complete ? 'complete' : null}`}
        onClick={() => props.setComplete(props.index)}>
            {props.task.taskName}
    </div>
}

export default Todo;