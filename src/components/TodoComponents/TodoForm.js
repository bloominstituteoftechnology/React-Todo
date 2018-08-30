import React from 'react';
import './TodoForm.css';
 
function TodoForm(props) {
    return (
        <form className = "form-container">
        <input 
            onChange = {props.handleTodoChange}
            type = "text" 
            name = "todo" 
            value = {props.value} 
            placeholder = "task here"
            />
          <button onClick = {props.handleAddTodo}>Add Todo</button>
          <button onClick = {props.handleClearTodos}>Clear Completed</button>
        </form>
    );
};

 export default TodoForm 