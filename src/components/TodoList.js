import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todo.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button onClick={()=>{props.clearCompleted()}}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
