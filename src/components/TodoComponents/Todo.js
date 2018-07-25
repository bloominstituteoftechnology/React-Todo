import React from 'react';
import './Todo.css';


const Todo = props => {
  return (
    <p onClick={props.crossMe}>{props.listItem}</p>
  );
}

export default Todo;

