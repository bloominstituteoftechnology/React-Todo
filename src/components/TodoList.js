import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className='todoListContainer'>
      {
        props.todo.map(task =>
          <Todo
            style={task.style}
            id={task.id}
            todo={task}
            complete={props.complete}
            handleComplete={props.handleComplete}
          />)
      }
    </div>
  );
};

export default TodoList;
