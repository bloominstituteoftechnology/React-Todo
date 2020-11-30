import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
  // console.log(props.tasks);
  return (
    <div className="todoList">
      {props.tasks.map(item => (
        <Todo key={item.id} item={item} handleToggle={props.handleToggle} />
      ))}
      <button onClick={props.handleCompleted} className="clear-btn">Clear Completed Tasks</button>
    </div>
  );
};

export default TodoList;
