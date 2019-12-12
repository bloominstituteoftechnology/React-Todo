import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.things.map(item => (
        <Todo key={item.id} item={item} toggleDone={props.toggleDone} />
      ))}
    </div>
  );
};

export default TodoList;
