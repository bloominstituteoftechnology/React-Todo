// add a blank to do array to be added to the list
import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <p className='todo' id={props.id} onClick={props.onClick}>
      {props.task}
    </p>
  );
}

export default Todo;
