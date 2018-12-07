import React from "react";

const TodoForm = props => {
  return (
    <form className="todo__form" onSubmit={props.change}>
      <input placeholder="Enter Task..." type="text" />
      <button onClick={props.change}>Add Task</button>
      <button onClick={props.clearCompleted}>Clear completed</button>
      <button
        onClick={_ => {
          if (window.confirm("Are you sure you want to clear your to-do list?"))
            props.clearAll();
        }}
      >
        Clear All
      </button>
    </form>
  );
};

export default TodoForm;
