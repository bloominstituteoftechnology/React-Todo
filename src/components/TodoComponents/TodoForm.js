import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <div className="todo-form">
            <input
                name="todo"
                className="custom-input"
                value={props.value}
                onChange={props.handleTodoChange}
                type="text"
            />
            <button
                className="custom-button"
                onClick={props.handleAddTodo}
            >
                <strong>Add Todo</strong>
            </button>

            <button
                className="custom-button"
                onClick={props.handleClearTodos}
            >
                <strong>Clear Completed</strong>
            </button>
        </div>
    );
};

export default TodoForm;