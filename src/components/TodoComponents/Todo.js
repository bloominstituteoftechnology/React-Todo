<<<<<<< HEAD
import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      onClick={() => props.lineThrough(props.taskOnProps.id)}
      className={`task-header  ${props.taskOnProps.completed}`}
    >
      {props.taskOnProps.task}
    </div>
  );
};

export default Todo;
=======
import React from 'react';

function Todo(props) {
  return <p className='todoText'>{props.todo.task}</p>;
}

export default Todo;
>>>>>>> 466f99b10404af68e500587d92f0bf0e03f39a25
