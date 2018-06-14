import React from 'react';

const Todo = (props) => {
  return(
    <li className={props.myClass} onClick={() => props.onTodoClick(props.id) } data-id={props.id}>{props.task}</li>
  );
};

export default Todo;