// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoList.map(item => {
        return (
          <Todo
            task={item.task}
            key={item.id}
            toggleComplete={props.toggleComplete}
            //this will be used to make a classList for each Todo, which will be used for styling
            completed={item.completed ? "complete" : "incomplete"}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
