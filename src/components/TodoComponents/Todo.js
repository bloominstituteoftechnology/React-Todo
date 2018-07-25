import React from 'react';

const Todo = ({ id, task, completed, onClick }) => (
  <li
    onClick={onClick}
    className={`Todo__item ${completed ? 'Todo__item--completed' : ''}`}
  >
    {task}
  </li>
);

export default Todo;
