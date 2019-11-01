import React from 'react';

const Todo = props => {
  return (
    <div style={props.todo.completed ? { textDecoration: 'line-through' } : null} onClick={() => props.handleToggleTasks(props.todo.id)}>
      <p>{props.todo.task}</p>
      <p>{props.todo.id}</p>
      <p>{props.todo.completed}</p>
    </div>
  );
}

export default Todo;
