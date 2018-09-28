import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="...Todo"
        onChange={props.handleInput}
        value={props.textField}
      />
      <button onClick={props.addNew}>Add Todo</button>
      <button onClick={props.clearTodos}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
