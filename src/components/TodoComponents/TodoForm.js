import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask}>
      <input
        type="text"
        value={props.task}
        name="todo"
        onChange={props.handleChanges}
        placeholder="todo"
      />
      <button onClick={props.addTask}>Add task</button>
      <button>Clear completed</button>
    </form>
  );
};

export default TodoForm;