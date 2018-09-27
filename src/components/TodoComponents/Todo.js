import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <h2 className={props.completed ? 'line-through' : ''}>{props.task}</h2>
    );
}

export default Todo;