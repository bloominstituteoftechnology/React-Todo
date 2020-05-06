import React from 'react';
import './Todo.css';

const Todo = (props) => {
  const handleClick = e => {
    props.toggleCompleted(props.todo.id);
  }

  return (
    <div 
      onClick={handleClick} 
      className={`${props.todo.completed ? "completed" : ""}`}
    >
      {props.todo.task}
    </div>
  );
}

export default Todo;