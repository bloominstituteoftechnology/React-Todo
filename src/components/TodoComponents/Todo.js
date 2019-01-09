import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div className={props.task.isComplete} onClick={props.task.setComplete}>{}{props.task.taskName}</div>
}

export default Todo;