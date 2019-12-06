import React from "react";

const TodoForm = props => {
  return (
    <div className="TodoForm">
      <form>
        <input onChange={props.updateTaskState} placeholder="Enter Task" />
        <button type="submit" onSubmit={props.taskSubmit}>
          Add Task
        </button>
        <button>Clear Tasks</button>
      </form>
    </div>
  );
};

export default TodoForm;
