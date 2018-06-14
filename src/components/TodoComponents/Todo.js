import React from 'react';
import './Todo.css';

const ToDo = props => {
    return (
    <div className="task">
    <li onClick={() => props.toggleCompleted(props.task.id)} style={props.task.completed ? {textDecoration: 'line-through'} : null}>{props.task.task}</li>
    </div>
    );
}

export default ToDo;