import React from "react";

const TodoForm = props => {
  return (
    <div>
      <input type="text" />
      <button onClick={props.change}>Add ToDo</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoForm;
