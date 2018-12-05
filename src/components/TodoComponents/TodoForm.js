import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <input placeholder="Task" />
      <button>Add Task</button>
      <button onClick={props.addTask}>Delete Selected</button>
    </div>
  );
};

export default TodoForm;