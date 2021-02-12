// singular to do item
import React from 'react';
import './Todo.css';


const Todo = props => {
  // console.log("TODO: ", props.todo);

  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ' ' }`}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
       <p>{props.todo.name}</p>
    </div>

  );
};

export default Todo;
