// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  //   const todos = props.list.map((item, i) => <Todo key={i} data={item} />);
  return (
    <div>
      {props.list.map((item, i) => (
        <Todo key={i} data={item} />
      ))}
    </div>
  );
};

export default TodoList;
