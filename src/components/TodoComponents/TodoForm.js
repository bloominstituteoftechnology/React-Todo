import React from 'react';

function TodoForm(props) {
    return (
      <form>
          <input
            onChange = {props.handleTodoChange}
            type = "text"
            name = "todo"
            value = {props.value}
            placeholder = "...todo"
          />
      <button onClick = {props.handleAddTodo}>Add Todo Here</button>
      <button onClick = {props.handleClearTodos}>Clear Completed Todos</button>
      </form>
    );
  }

export default TodoForm;