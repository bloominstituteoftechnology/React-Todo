import React from 'react';

const ToDoList = props => {
  // This is "Reading" State
  return (
    <div>
      <h1>{props.newToDo}</h1>
      {props.currentToDo.map((ToDo, index) => (
        <div key={ToDo + index}>{ToDo}</div>
      ))}
    </div>
  );
};

export default ToDoList;



