import React from 'react';

const Task = props => {
  const handleClick = () =>{
    props.handleToggleItem(props.task.id);
  }

  return (
      <div onClick={handleClick} className={`item${props.task.complete ? ' complete' : ''}`}>
      <p>{props.task.name}</p>
    </div>
  );
};

export default Task;