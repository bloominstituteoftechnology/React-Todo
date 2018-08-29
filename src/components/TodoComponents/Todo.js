import React from 'react';
import './Todo.css';

export default function Todo(props) {
    return (
        <div className="todo-item">
            <h4>Todo Item</h4>
            <p>{props.todo}</p>
            <p><small>{new Date().toLocaleTimeString()}</small></p>
        </div>
    )
}