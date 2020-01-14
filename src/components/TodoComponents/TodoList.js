// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from "react";
import Todo from "./Todo";
import "../../App.css"

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