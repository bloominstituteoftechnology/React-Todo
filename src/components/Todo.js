import React from 'react';

export const Todo = props => {
  return (
    <li
      id={ props.ID }
      onClick={ props.handleTaskCompletion }
    >
      { props.todoTask }
    </li>
  );
};