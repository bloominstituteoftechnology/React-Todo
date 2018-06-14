import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div className="todo">
      <span id={props.id} className={!props.completed ? "" : "completed"} onClick={() => props.handleCompleted(props.id)}>
        {props.task}
      </span>
    </div>
  );
};

export default Todo;