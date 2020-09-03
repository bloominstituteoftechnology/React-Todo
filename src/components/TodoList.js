// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todoArray.map((activity) => (
        <Todo
          key={activity.id}
          activity={activity}
          toggleActivity={props.toggleActivity}
        />
      ))}
      <button className="clear" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
