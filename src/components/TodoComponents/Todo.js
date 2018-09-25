// add a blank to do array to be added to the list
import React from 'react';

const Todo = (props) => {
  return (
    <p className='todo' id={props.id}>{props.task}</p>
  );
}

export default Todo;
