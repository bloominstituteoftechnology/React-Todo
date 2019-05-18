import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="todo"
        value={props.value}
        onChange={props.handleChanges}
        placeholder="THINGS I GOT 2 DO"
      />
      <button onClick={props.add}>Add Todo</button>
      <button onClick={props.clear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;