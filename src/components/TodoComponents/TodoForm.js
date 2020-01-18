import React from 'react';

const TodoForm = props => {
    return (
      <form>
        <input
          type="text"
          name="todo"
          placeholder="Add new task..."
          value={props.value}
          onChange={props.handleTodoChange}
        />
        <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
      </form>
    );
  };
  
  export default TodoForm;

//`<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

//Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list. Once a todo is submitted, the Todo List should re-render and show the added todo.