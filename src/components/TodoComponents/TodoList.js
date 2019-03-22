// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
const TodoList = props => {
  //console.log(props);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;