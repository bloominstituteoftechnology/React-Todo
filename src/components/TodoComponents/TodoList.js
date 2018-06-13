// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.myTodos.map(band => {
        return <li key={Math.random()}>{band}</li>;
      })}
    </ul>
  );
};

export default TodoList;
