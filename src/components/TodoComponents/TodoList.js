import React, { Component } from "react";
import Todo from "./Todo";

const List = props => {
  const { tasks, toggleComplete } = props;

  return (
    <ul className="list">
      {tasks.map(task => (
        <Todo
          task={task.task}
          completed={task.completed}
          id={task.id}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default List;
