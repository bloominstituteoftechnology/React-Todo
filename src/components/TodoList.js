import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todo.map(task => (
        <Todo
          toggleTaskCompleted={props.toggleTaskCompleted}
          key={task.id}
          task={task}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Task
      </button>
    </div>
  );
};

export default TodoList;
