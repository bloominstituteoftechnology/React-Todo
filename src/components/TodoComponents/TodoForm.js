import React from 'react';

const TodoForm = props => {
  return (
    <form className="TodoForm">
      <input
        className="TodoInput"
        type="text"
        onChange={props.handleInputChange}
        value={props.input}
      />
      <button className="TodoButton add" onClick={props.handleNewToDo}>
        <i class="fas fa-plus" />
      </button>
      <button className="TodoButton clear" onClick={props.handleCompletedTasks}>
        Clear Complete
      </button>
    </form>
  );
};

export default TodoForm;
