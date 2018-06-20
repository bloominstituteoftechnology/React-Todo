import React from 'react';
import './Todo.css';

const Todo = props => {
  return(
    <div className="item-wrapper">
      {props.item}
    </div>
  )
}

export default Todo;
