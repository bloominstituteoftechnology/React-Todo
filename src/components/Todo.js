import React from "react";
// import "./Todo.css";

// ToDo will be a component that takes in the todo data and displays the task to the screen;

const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      // onClick={() => props.toggleItem(props.item.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      {console.log("I am props.toggleItem in Todo.js", props.toggleItem)}
      {/* {console.log("I am props.item in Todo.js", props.item)}
      {console.log("I am props.item.completed", props.item.completed)} */}
      <p>{props.item.task}</p>
    </div>
  );
};
export default Todo;
