// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = (props) => {
  return (
    <div className="task-list bg-info m-2 p-2">
      {props.data.map((item, index) => (
        <Todo
          key={item.id}
          item={item}
          index={index + 1}
          toggleTodo={props.toggleTodo}
        />
      ))}

      {/* <button className="clear" onClick={props.clearCompleted}>
        Remove Completed
      </button> */}
    </div>
  );
};

export default TodoList;
