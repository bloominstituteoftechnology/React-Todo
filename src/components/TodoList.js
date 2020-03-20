import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todoListContainer">
      {props.todo.map(task => (
        <>
          {console.log(task.className)}
          <Todo
            className={task.className}
            id={task.id}
            todo={task}
            complete={props.complete}
            handleComplete={props.handleComplete}
          />
        </>
      ))}
    </div>
  );
};

export default TodoList;
