import React from 'react';

function Todo(props) {
  return <p className='todoText'>{props.todo.task}</p>;
}

export default Todo;
