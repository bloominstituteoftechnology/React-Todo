import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
      <div>
          <p className="task" id={props.id} onClick={props.onClick}>
            {props.task}
          </p>
      </div>
    )
  }

export default Todo;