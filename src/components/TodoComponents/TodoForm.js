import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
        <div>
        <input type="text" placeholder="Type Something" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
        </div>

    );
}