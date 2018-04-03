import React from 'react';

const TaskList = props => {
  return (
    <div>
        {props.todoList.map((task, index) => (
        <div key={task + index}>{task}</div>
      ))}
    </div>
  );
};

export default TaskList;
