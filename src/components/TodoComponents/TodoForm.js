import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="todo"
        value={props.todo}
        onChange={props.handleChanges}
        placeholder="THINGS I GOT 2 DO"
      />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;