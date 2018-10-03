import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleInputChange}
        value={props.input}
      />
      <button onClick={props.handleNewToDo}>Add Todo</button>
      <button>Clear All</button>
    </form>
  );
};

export default TodoForm;
