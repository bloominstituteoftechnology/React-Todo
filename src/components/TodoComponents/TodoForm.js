import React from "react";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <input type="text" placeholder="Add a new task" />
      <input type="submit" />
      <button>Clear</button>
    </div>
  );
};

export default TodoForm;
