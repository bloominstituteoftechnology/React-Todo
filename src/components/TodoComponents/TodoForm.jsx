import React from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.submitForm}>
      <input
        value={props.addingTask}
        type="text"
        name="addingTask"
        placeholder="Input new task"
        onChange={props.handleChanges}
      />
      <button> Add Task </button>
      <button className="clear-button"> Clear Completed </button>
    </form>
  );
};

export default ToDoForm;
