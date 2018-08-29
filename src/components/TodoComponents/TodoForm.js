import React from 'react';
import './TodoForm.css';

export default function TodoForm(props) {
    return (
        <form className="todo-form">
            <input type="text" placeholder="...todo" />
            <button type="submit">Add Todo</button>
            <button type="reset">Clear Completed</button>
        </form>
    )
}