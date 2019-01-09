import React from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.submitForm}>
      <input
        value={props.holder}
        type="text"
        placeholder="Input new task"
        onChange={props.handleChanges}
      />
      <button type="submit"> Add Task </button>
    </form>
  );
};

export default ToDoForm;
