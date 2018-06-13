// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
const TodoList = props => {
  return (
      <div>
          <ul>{props.coolList.map(lists => {
              return <li key={Math.random()}>{lists}</li>;
          })}
          </ul>

<TodoForm />
<Todo />
</div>

);
};

export default TodoList;
