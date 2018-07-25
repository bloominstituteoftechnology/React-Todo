import React from 'react';

const Todo = ({ id, task, completed }) => (
  <li className={`Todo__item ${completed ? 'Todo__item--completed' : ''}`}>
    {task}
  </li>
);

export default Todo;
