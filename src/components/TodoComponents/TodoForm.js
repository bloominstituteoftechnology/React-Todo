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
      <button onClick={props.handleCompletedTasks}>Clear Complete</button>
    </form>
  );
};

export default TodoForm;
