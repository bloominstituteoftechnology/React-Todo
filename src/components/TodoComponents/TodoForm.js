import React from 'react';

import './Todo.css';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <h2 className="todo-form-header">New Todo:</h2>
            <form className="todo-form-container">
                <textarea className="todo-form-input" placeholder="Enter a task to do...."></textarea>
                <button className="todo-add-button" data-button="todo-add" onClick={props.handleClick}>Add Todo</button>
            </form>
        </div>
    );
};

export default TodoForm;