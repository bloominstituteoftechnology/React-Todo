import React from 'react';

const Todo = (props) => {
  const handleClick = e => {
    props.toggleCompleted(props.todo.id);
  }

  return <div onClick={handleClick}>{props.todo.task}</div>;
}

export default Todo;