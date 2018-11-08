import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul class="todo-list">
      {props.todoList.map(task => {
        return (
          <Todo
            itemCompleted={props.itemCompleted}
            id={task.id}
            task={task.task}
            completed={task.completed}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
