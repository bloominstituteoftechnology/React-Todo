import React from 'react';

const Todo = (props) => {
  return(
    <li className={props.myClass} onClick={props.onTodoClick} data-id={props.id}>{props.task}</li>
  );
};

export default Todo;