// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const TodoList = props => {
  return (
    <div>
      {props.formData.map(item => {
        return <h1>{item.todo}</h1>;
      })}
    </div>
  );
};

export default TodoList;
