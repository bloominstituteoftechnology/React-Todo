import React from 'react';

function TodoNote(props) {
  return (
  <div 
  className={props.todo.completed ? 'completed' : null}
  style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
  onClick={e => props.toggleCompleted(props.todo.id)}>
  {props.todo.task}</div>);
};

export default TodoNote;