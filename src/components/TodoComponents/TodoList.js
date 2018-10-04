// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.taskList.map((task, index) => {
        //   console.log(task);
        //   console.log(index);
        return (
          <Todo
            task={task}
            key={task.id}
            isCompleted={() => props.isCompleted(index)}
          />
        );
      })}
    </div>
    // <Todo />
  );
};

export default TodoList;
