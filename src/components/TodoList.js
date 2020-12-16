import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((item) => (
        <Todo key={item.id} item={item} handleToggle={props.handleToggle} />
      ))}
      <button onClick={props.handleDone}>Click to clear</button>
    </div>
  );
};

export default TodoList;
