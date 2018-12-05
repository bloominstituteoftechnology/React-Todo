import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input
        placeholder="Task"
        type="text"
        value={props.task} />

      <button onClick={props.clicked}>Add Task</button>
      <button>Delete Selected</button>
    </div>
  );
};

export default TodoForm;