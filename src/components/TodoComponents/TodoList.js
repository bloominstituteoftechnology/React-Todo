// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props.formData);
  return (
    <div>
      {props.formData.map((item, index) => {
        return (
          <ul key={index}>
            <Todo todo={item.todo} key={index} />
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
