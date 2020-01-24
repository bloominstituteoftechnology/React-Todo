import React from 'react';

const Task = props => {
  return(
    <div
      className={`item${props.task.completed ? ' completed' : ""}${props.task.animate ? ' animate' : ""}`}
      onClick={e => props.finishTask(props.task.id)}
      onAnimationEnd={() => props.clearTask2()}
    >
      {props.task.task}
    </div>
  )
}

export default Task;
