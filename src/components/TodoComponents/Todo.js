import React from 'react';
// import "./Todo.css";

const Todo = props => {
  return (
    <div
      className="item"
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;