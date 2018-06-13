//<Todo /> is a component that takes in the todo data and displays the task to the screen.
import React from 'react';
import './Todo.css';

const ToDo = props => (
  <ul>
    {props.tasks.map(task => <li>{`${task.task} ${task.completed}`}</li>)}
  </ul>
);

export default ToDo;
