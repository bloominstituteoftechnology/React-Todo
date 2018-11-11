import React from 'react';

const Todo = props => {
  // console.log(props.category, props.todo.id);
  return (
    <li
      name={ props.category + ' ' + props.todo.id } 
      onClick={ (e) => props.handleClick(e, props.category, props.todo.id) } 
      className={'todo--item  completed--' + (props.todo.completed)}>{props.todo.task}
    </li>
  );
};

export default Todo;