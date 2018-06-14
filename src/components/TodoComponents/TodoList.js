// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  if (props.listItems) {
    return (
      <div className="todoList"> {
        props.listItems.map((item, index) => {
          return (
            <Todo
              key={index}
              index={index}
              task={item.task}
              id={item.key}
              completed={item.completed}
              handleCompleted={props.handleCompleted}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default TodoList;