import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <li onClick={() => props.removeHandler(props.objective.id)} 
        className={props.objective.completed ? "visible": ""}>{props.objective.name}</li>
    )
}

export default Todo;