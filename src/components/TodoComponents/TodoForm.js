import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={props.handleInput}
        value={props.textField}
      />
      <button onClick={props.addNew}>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;