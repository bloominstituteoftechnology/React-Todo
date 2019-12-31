import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  let test = JSON.parse(localStorage.getItem("tasks"));

  return (
    <div className="list">
      {test &&
        test.map(item => {
          return (
            <Todo
              key={item.id}
              item={item}
              toggleComplete={props.toggleComplete}
            />
          );
        })}
      {props.todo.length !== 0 && (
        <button className="clear-button" onClick={props.clearComplete}>
          Clear Crossed Items
        </button>
      )}
    </div>
  );
};

export default TodoList;
