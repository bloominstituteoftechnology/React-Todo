import React from "react";

export default function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        placeholder="Add a task"
        name="task"
        onChange={props.newTask}
        value={props.task}
      />
      <button type="submit" className="buttons">
        Add Todo
      </button>
    </form>
  );
}
