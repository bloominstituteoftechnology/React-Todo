import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
  return (
    <div>
      <h1>Todo List: MVP</h1>
      {props.list.map(taskObj => (
        <Todo
          newList={taskObj}
        />
      ))}
    </div>
  );
};

export default TodoList;
