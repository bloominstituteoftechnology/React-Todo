import React from 'react';

const TodoForm = props => {
    return (
      <form className="todo-form" onSubmit={props.addTask}>
        <input
          className="text__input"
          type="text"
          name="inputText"
          placeholder="Add new task..."
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button className="todo__btn" type="submit">
          Add Task
        </button>
        <button className="todo__btn" onClick={props.deleteTask} type="button">
          Clear Completed
        </button>
      </form>
    );
  };
  
  export default TodoForm;

//`<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

//Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list. Once a todo is submitted, the Todo List should re-render and show the added todo.