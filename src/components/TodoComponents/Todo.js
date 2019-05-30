import React from 'react';

const Todo = props => {
  return (
    <div onClick={() => props.toggleTask(props.todos.id)}>
      {props.todos.task}
    </div>
  );
}

export default Todo;