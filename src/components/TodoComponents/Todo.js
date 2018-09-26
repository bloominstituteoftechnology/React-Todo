import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <div className="toDoContainer">
     <h1>{props.todo}</h1>
     </div>
  );
}

export default Todo;
