import React from 'react';

const TodoItem = (props) => {
  return (
    <li
      className={props.class}
      onClick={() => props.markComplete(props.todo.id)}
    >
      {props.todo.item}
    </li>
  );
};

export default TodoItem;
