import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.onToggleComplete(props.todo.id)}>
      {props.todo.task}
    </div>
  );
}

export default Todo;
