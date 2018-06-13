import React from 'react';
import './Todo.css';

const ToDoList = props => {
  return (
    <ul>
      {props.newToDo.map(newItem => {
        return <li key={Math.random()}>{newItem}</li>;
      })}
    </ul>
  );
};

export default ToDoList;