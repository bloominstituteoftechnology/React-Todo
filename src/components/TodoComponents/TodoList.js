import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
  return (
    <div style={{margin: '0 0 50px 0'}}>
      <h1>Todo List: MVP</h1>
      {props.list.map(taskObj => (
        <Todo
          newList={taskObj}
          toggleTaskComplete={props.toggleTaskComplete}
        />
      ))}
      
    </div>
  );
};

export default TodoList;
