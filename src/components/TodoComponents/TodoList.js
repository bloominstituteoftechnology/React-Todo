import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(taskInMap => (
        <Todo
          key={taskInMap.id}
          taskOnProps={taskInMap}
          lineThrough={props.lineThrough}
        />
      ))}
    </div>
  );
};

export default TodoList;