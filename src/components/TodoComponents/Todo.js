import React from "react";

function Todo(props) {
    const { toggleCompleted, todo } = props;
  
    return (
      <div
        className={todo.completed ? 'completed' : null}
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        onClick={e => toggleCompleted(todo.id)}
      >
        {todo.task}
      </div>
    );
  }

export default Todo;