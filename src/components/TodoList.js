import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className='todoListContainer'>
      {
        props.todo.map(task =>
          <Todo
            style={props.handleStyle}
            id={task.id}
            todo={task}
            handleComplete={props.handleComplete}
          />)
      }
    </div>
  );
};

export default TodoList;
