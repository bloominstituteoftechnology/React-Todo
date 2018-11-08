import React from 'react';

const Todo = props => {
  return (
  <h1 onClick={(event) => {props.handleClick(props.list.id); props.strikeThrough(event)}} className='off'>
  {props.list.task}
  </h1>
  )
};

export default Todo;