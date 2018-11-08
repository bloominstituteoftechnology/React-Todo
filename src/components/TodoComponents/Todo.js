import React from 'react';

const Todo = props => {
  return (
    <li onClick={ (e) => props.handleClick(e, props.todo.id) } className={'todo--item  completed--' + (props.todo.completed)}>{props.todo.task}</li>
  );
};

export default Todo;