import React from "react";

export default function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        name="task"
        onChange={props.newTask}
        value={props.task}
      />
      <div className="buttons">
        <button type="submit"> Add Todo </button>
        <button onClick={props.clearCompeted}> Clear Completed </button>
      </div>
    </form>
  );
}
