import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(`props from todoList: `, props);
  let test = JSON.parse(localStorage.getItem("tasks"));

  return (
    <div className="list">
      {props.todo.length !== 0 ? (
        <h4>Cross It Off</h4>
      ) : (
        <h4>Really, Nothing?</h4>
      )}
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
      <button className="clear-button" onClick={props.clearComplete}>
        Make Room
      </button>
    </div>
  );
};

export default TodoList;
