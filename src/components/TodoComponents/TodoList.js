import React from 'react';

const Todo = props => {
  return (
    <div
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todos.task}
    </div>
  );
};

export default Todo;