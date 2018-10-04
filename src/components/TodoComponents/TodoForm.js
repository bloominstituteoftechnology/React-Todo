import React from 'react';
import './Todo.css';



const TodoForm = props => {
  return (
    <form class = "form-display">
      <div>
          <input
            onChange = {props.handleTodoChange}
            type = "text"
            name = "todo"
            value = {props.value}
            placeholder = "...todo task"
          />
      </div>

      <div className = "button-display">
          <button onClick = {props.addTodo}> Add Todo </button>
          <button onClick = {props.clearTodos}> Clear Completed </button>
      </div>
    </form>
  );
};

export default TodoForm;