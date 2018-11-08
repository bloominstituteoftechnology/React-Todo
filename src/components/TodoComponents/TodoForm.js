import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleAddTodo}>
        <input
          type="text"
          placeholder={props.inputText}
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;