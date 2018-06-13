//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

const ToDo = props =>
  !props.task.completed ? (
    <li key={props.key}>{`${props.task.task} ${props.task.completed}`}</li>
  ) : (
    <li key={props.key}>{`${props.task.task} is done ${
      props.task.completed
    }`}</li>
  );

export default ToDo;
