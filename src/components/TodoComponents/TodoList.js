// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo__list">
      {props.list.map(e => (
        <div
          className="todo__item"
          key={e.id}
          onClick={() => props.strike(e.id)}
        >
          <Todo completed={e.completed} task={e.task} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
