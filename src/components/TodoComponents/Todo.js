import React from 'react';
import './Todo.css';

const Todo = props => {
    const { task, id, completed } = props.todo;
    return (
        <div className={completed ? "strike" : null} onClick={() => props.toggleHandler(id)} >{task}</div>
    );
};

export default Todo;