import React from 'react';
// import XdOutList from "./XdOutList.js";

const TaskList = props => {
  return (
    <ul>
      {props.tasks.map(task => { return <li key="task">{task}</li> })}
    </ul>
  );
}

export default TaskList;