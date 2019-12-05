import React from 'react';

const Task = props => {
  return(
    <div
      className={`item${props.task.completed ? ' completed' : ""}`}
      onClick={e => props.finishTask(props.task.id)}
    >
      {props.task.task}
    </div>
  )
}

export default Task;
