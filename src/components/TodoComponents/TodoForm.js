import React from "react";

const TodoForm = props => {
  return (
    <form className="todo__form" onSubmit={props.change}>
      <input type="text" />
      <button onClick={props.change}>Add ToDo</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
    </form>
  );
};

export default TodoForm;
