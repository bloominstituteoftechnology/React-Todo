import React from 'react';

const Todo = props => {
  return (
    <div todoid={props.todoid} style={(props.completed) ? {textDecoration : 'line-through'} : {textDecoration: 'none'}} onClick={props.onClick}>
      {props.todo}
    </div>
  );
};

export default Todo;