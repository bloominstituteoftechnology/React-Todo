// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  if (props.todoList.length === 0) {
    return (
      <div className="placeholder-entry">Do you really have nothing to do?</div>
    );
  } else
    return props.todoList.map(entry => {
      return (
        <Todo
          clickHandler={props.clickHandler}
          listItem={entry.task}
          divID={entry.id}
          key={entry.id}
        />
      );
    });
};

export default TodoList;
