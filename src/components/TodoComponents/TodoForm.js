import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input

      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;