import React from 'react';

const TodoForm = () => {
  return (
    <form>
      <input
        className="input"
        onChange={props.handleTodoChange}
        value={props.value}
        type="text"
        name="todo"
      />
      <button className="button" onClick={props.handleAddTodo}>
        Add Todo
      </button>
      <button className="button">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
