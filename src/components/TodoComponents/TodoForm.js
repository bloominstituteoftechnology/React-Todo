import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input 
      value={props.task}
      name="task"
      placeholder="Enter task..."
      onChange={props.handleChanges}
      />
      <button onClick={props.updateList}>Add Task</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;