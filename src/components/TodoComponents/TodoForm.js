// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";

const TodoForm = props => {
	const { changeHandler, addTaskHandler, task } = props;
  return (
    <form name="taskForm">
      <input
        type="text"
        value={task}
        placeholder="Add Item"
        name="task"
        onChange={changeHandler}
      />
      <button onClick={addTaskHandler}>Add Item</button>
    </form>
  );
};

export default TodoForm;
