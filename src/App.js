import React from 'react';

const TaskList = props => {
  return (
    <div>
        {props.todoList.map((task, index) => (
        	<div key={index} onClick={props.toggleClick}>{task}</div>
      ))}
    </div>
  );
};

export default TaskList;