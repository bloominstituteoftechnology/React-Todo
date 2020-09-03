// your components will all go in this `component` directory.

import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.list.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={props.clearCompleted}>Clear List</button>
    </div>
  );
};

export default TodoList;
