import React from 'react';
import './Todo.css';

export default function Todo(props) {
    return (
        <div className="todo-item">
            <h4>Todo Item</h4>
            <p>{props.todo.text}</p>
            <p><small>{props.todo.time}</small></p>
        </div>
    )
}