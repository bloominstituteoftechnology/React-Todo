// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, toggleTask, removeCompleted }) => {
  return (
    <div className="todo-list">
      {data.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTask={() => toggleTask(todo.id)}
        />
      ))}
      <button onClick={removeCompleted} className="clear-task">
        clear completed
      </button>
    </div>
  );
};

export default TodoList;
