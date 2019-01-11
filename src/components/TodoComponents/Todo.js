import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
    <div
        className={props.todo.completed ? 'completed' : null}
        onClick={() => props.toggleCompleted(props.todo.id)}
    >
        {props.todo.task}
    </div>
    );
};

export default Todo;