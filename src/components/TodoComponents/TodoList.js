import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  let test = JSON.parse(localStorage.getItem("tasks"));
  console.log(test);
  return (
    <div>
      {test.map(item => (
        <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} />
      ))}
      <button className="clear-button" onClick={props.clearComplete}>
        Make Room
      </button>
    </div>
  );
};

export default TodoList;
