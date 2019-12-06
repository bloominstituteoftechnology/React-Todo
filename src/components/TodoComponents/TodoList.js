// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.itemArray &&
        props.itemArray.map(item => {
          return (
            <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
          );
        })}
    </div>
  );
};
export default TodoList;
