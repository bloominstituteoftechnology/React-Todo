import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      id={props.taskName.id}
      onClick={() => props.toggleCompleteTask(props.taskName.id)} className={`todo-list ${props.taskName.completed}`}
      onDragStart = {(e)=> props.onDragStart(e, props.taskName.id)}
      draggable
    >
      {props.taskName.task}
    </div>
  );
};

export default Todo;
