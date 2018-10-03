import React from "react";

const TodoForm = ({ inputVal, updateInputVal, submitNewTask }) => {
  return (
    <div>
      <form onSubmit={submitNewTask}>
        <input
          placeholder="Enter new todo..."
          value={inputVal}
          onChange={updateInputVal}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
