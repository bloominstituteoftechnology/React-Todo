import React, { Component } from "react";

const completion = e => {
  e.target.classList.toggle("task--Completed");
};

const Done = props => {
  return (
    <div>
      {props.Todo.map((task, index) => (
        <div onClick={completion} className="task" key={task + index}>{task}</div>
      ))}
    </div>
  );
};

export default Done;