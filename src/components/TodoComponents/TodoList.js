import React, { Component } from "react";
import Todo from "./Todo";

const List = props => {
  const { tasks } = props;

  return (
    <div className="list">
      {tasks.map(task => (
        <Todo task={task.task} completed={task.completed} key={task.id} />
      ))}
    </div>
  );
};

export default List;
