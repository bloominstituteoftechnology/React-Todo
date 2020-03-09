// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("TodoList JS", props);

  return (
    <div className="Task">
      {props.tasks.map(task => (
        <Todo  key={task.id} task={task} toggleComplete={props.toggleComplete} />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed Tasks</button>     
    </div>
  );
};

export default TodoList;