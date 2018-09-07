import React from 'react';
const TodoForm = props => {
  return (
    <form className="todoForm">
      <input
        className="input"
        onChange={props.handleTodoChange}
        value={props.value}
        type="text"
        name="todo"
      />
      <button className="button" onClick={props.handleAddTodo}>
        Add todo
      </button>
      <button className="button" onClick={props.handleClearTodos}>
        Clear completed
      </button>
    </form>
  );
};

export default TodoForm;
