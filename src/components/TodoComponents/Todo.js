import React from 'react';
import './Todo.css';

export default function Todo(props) {
    return (
        <div className="todo-item">
            {props.todo}
        </div>
    )
}