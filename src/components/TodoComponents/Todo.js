import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div onClick={() => props.toggleCompleted(props.todo.id)} className={props.todo.completed ? "todo completed" : "todo"}>
      {props.todo.task}
    </div>
  );
};

export default Todo;