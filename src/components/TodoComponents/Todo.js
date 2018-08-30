import React from "react";

const Todo = props => {
  return (
    <div class="new-todos"
      style={props.todo.completed ? { fontWeight: 'bold', textDecoration: 'line-through', } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;