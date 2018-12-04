import React from "react";
import ToDo from "./Todo.js";

const list = [
  {
    task: "Finish Laundry",
    id: 1,
    completed: false
  },

  {
    task: "Cook Food",
    id: 2,
    completed: false
  }
];

const ToDoList = props => {
  return (
    <div>
      {props.state.map(item => (
        <ToDo item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
