import React from 'react';
import './Todo.css';

function Todo(props) {
    return <p onClick={props.completedToggle}>{props.task}</p>
}

export default Todo;