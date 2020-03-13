import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleAddTask}>
        <input
          type="text"
          name="item"
          onChange={props.handleChanges}
          placeholder="Add a task here"
          value={props.task}
        />

        <button>Add Task</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
      
    </div>
  );
};

export default TodoForm;