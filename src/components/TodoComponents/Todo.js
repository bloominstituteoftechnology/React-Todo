import React from 'react';

const Todo = props => {
  return (
    <li className={props.completed ? "todo-item completed" : "todo-item"} 
        onClick={() => props.handler(props.id)}>{props.task}</li>
  );
}

export default Todo;
