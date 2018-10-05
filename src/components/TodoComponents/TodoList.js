// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="li-container">
      <h1>My Todo List</h1>
      {props.formData.map((todo, index) => {
        // console.log(todo);
        return (
          <ul
            className={todo.line}
            style={
              todo.completed
                ? { textDecoration: "line-through", textDecorationColor: "red" }
                : { textDecoration: "none" }
            }
            onClick={() => props.liClick(todo.id)}
            key={todo.id}
          >
            <Todo todo={todo.todo} keys={todo.id} />
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
