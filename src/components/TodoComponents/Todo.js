import React from 'react';
import './Todo.css';

const Todo = props => {
  return(
    <li onClick={props.handler} className="item-wrapper">
      {props.item}
    </li>
  )
}

export default Todo;
