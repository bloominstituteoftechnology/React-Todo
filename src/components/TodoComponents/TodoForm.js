import React from 'react';
import './TodoForm.css';
 
function TodoForm(props) {
    return (
        <form className = "form-container">
        <input 
            type = "text" 
            name = "todo" 
            placeholder = "...todo"
            />
          <button onClick = {props.handleAddTodo}>Add Todo</button>
          <button onClick = {props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};

 export default TodoForm 