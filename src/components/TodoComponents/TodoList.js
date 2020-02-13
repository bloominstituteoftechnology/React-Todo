import React from "react";

import Todo from "./Todo";

// Maps over the tasks array and creates a new item for each element
const TodoList = props => {
  //   console.log(props.tasks);
  return (
    <div className="shopping-list">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
  );
};

export default TodoList;
