import React from "react";

export default function TodoForm(props) {
  return (
    <form>
      <input
        type="text"
        name="todo"
        value=""
        placeholder="Enter a todo task"
        onChange={}
      ></input>
      <button onClick={}>Add Task</button>
      <button onClick={}>Clear Completed</button>
    </form>
  )
}