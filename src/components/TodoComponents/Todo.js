import React from 'react';
// import './Todo.css';

const Todo = props => {
  let completed = 'completed';
  if (!props.completed) {
    completed = '';
  }
  return (
    <div
      className={completed}
      key={props.id}
      id={props.id}
      onClick={props.toggleComplete}
    >
      {props.text}
    </div>
  );
};

export default Todo;
