import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.toDo.done ? ' purchased' : ''}`}
      onClick={e => props.toggleTodo(props.toDo.id)}>
      <p>{props.toDo.work}</p>
    </div>
  );
};

export default Todo;
