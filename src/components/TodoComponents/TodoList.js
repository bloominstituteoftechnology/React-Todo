import React from 'react';
import ToDo from './Todo';

const ToDoList = props =>
  props.task.map(task => <ToDo key={task.id} task={task} />);


export default ToDoList;