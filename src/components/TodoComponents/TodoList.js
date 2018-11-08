import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
  return (
    <div className={'todo-list'}>
      <h1>Todo List: MVP</h1>
      {props.list.map(taskObj => (
        <Todo
          key={taskObj.id}
          newList={taskObj}
          toggleTaskComplete={props.toggleTaskComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
