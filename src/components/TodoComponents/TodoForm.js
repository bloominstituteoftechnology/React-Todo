import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
    return (
        <form className = "form-container">
            <input 
            onChange = {props.handleTodoChange}
            type = "text" 
            name = "todo" 
            value = {props.value} 
            placeholder = "task here"
            />
            <button onClick = {props.handleAddTodo}>add task</button>
            <button onClick = {props.handleClearTodos}>clear completed</button>
        </form>
    );
};

export default TodoForm