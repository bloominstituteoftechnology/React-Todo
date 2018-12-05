import React from 'react';

import TodoForm from "./TodoForm.js"

const Task = props => {
  const { task } = props.displayTask;
  


  return (
    <div>
      <h3>Task: { task } </h3>
    </div>
  )
}

export default Task;