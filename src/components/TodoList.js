import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  return (
      <div className="todo-form-clear">
    <div className="todo-list">
      {props.data.map(item => (
        <Todo
          toggleItemDone={props.toggleItemDone}
          key={item.id}
          item={item}
        />
      ))}
    </div>
    <button className="clear-btn" onClick={props.clearDone}>
        Clear Done
      </button>
    </div>
  );
};

export default TodoList;
