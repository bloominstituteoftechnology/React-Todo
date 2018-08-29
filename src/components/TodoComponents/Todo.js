import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div className={'todo ' + props.todo.completed}>
      {props.todo.task}
    </div>
  );
}

export default Todo;