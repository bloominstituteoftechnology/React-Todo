import React from "react";

const TodoList = props => {
  // This is "Reading" State
  return (
    <div>
      <h1>{props.newTodo}</h1>
      {props.tasks.map((tasks, index) => (
        <div key={tasks + index}>{tasks}</div>
      ))}
    </div>
  );
};

export default TodoList;