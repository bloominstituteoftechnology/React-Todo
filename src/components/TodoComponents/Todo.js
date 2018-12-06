import React from 'react';
import './Todo.css';

const Todo = props => {
  return (<div onClick = {props.clickHandler}>{props.listItem}</div>);
}

export default Todo;
