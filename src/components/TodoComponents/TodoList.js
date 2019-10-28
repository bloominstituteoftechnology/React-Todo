import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(task => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
          deleteItem={props.deleteItem}
        />
      ))}
      <button className="clear-btn" onClick={props.deleteComplete}>Clear completed tasks</button>
    </div>
  );
};

export default TodoList;
