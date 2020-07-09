// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = (props) => (
  <div className="todo-list">
    {props.todos.map(item => (
      <Todo 
        key={item.id}
        item={item}
        toogleCompleted={props.toogleCompleted}
      />
    ))}
    <button className="clear-btn" onClick={props.clearCompleted}>Clear All Completed Tasks</button>
  </div>
)

export default TodoList;