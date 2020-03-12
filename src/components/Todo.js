import React from 'react';


const tasks = props => {
  return (
    <div
    className={`tasks${props.tasks.completed ? "completed" : ""}`}
      onClick={e => props.toggleCompleted(props.tasks.id)}
    >
      <p>{props.tasks.name}</p>
    </div>
  );
};

export default tasks;