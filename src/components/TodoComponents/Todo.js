import React from 'react';

const Todo = ({ task, toggleCompleted }) => {
   return (
      <div
         onClick={()=> toggleCompleted(task.id)}
         className={`task${task.completed ? ' completed' : ''}`}
      >
         <p>{task.task}</p>
      </div>
   )
}

export default Todo;