import React from "react";

// ToDo will be a component that takes in the todo data and displays the task to the screen;

const Todo = (props) => {
  return (
    <div
      // onClick={() => props.toggelItem(props.item.id)}
      className={`Todo${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};
export default Todo;
